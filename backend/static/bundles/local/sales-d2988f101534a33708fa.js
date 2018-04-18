webpackJsonp([1],{

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientSelected = clientSelected;
exports.userSelected = userSelected;
exports.searchClient = searchClient;
function clientSelected(code, clients) {

  var clientSelected = clients.findIndex(function (client) {
    return client.code == code;
  }); // checks if product exists

  var res = clientSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'CLIENT_NOT_FOUND',
    payload: -1
  } : {
    type: 'CLIENT_SELECTED',
    payload: {
      client: clients[clientSelected]
    }
  };

  return res;
}

function userSelected(_id, users) {

  var userSelected = users.findIndex(function (user) {
    return user._id == _id;
  }); // checks if product exists

  var res = userSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'USER_NOT_FOUND',
    payload: -1
  } : {
    type: 'USER_SELECTED',
    payload: {
      user: users[userSelected]
    }
  };

  return res;
}

function searchClient() {

  return { type: 'CLIENT_SHOW_PANEL', payload: -1 };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientSelected, 'clientSelected', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(userSelected, 'userSelected', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/actions.js');
}();

;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.1
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStoreCashAmount = updateStoreCashAmount;
exports.updateStoreCardAuth = updateStoreCardAuth;
exports.updateStoreCardDigits = updateStoreCardDigits;
// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
// import alertify from 'alertifyjs'

// Finds a code in the cart and sends a dispatch to remove it from cart based on index
function updateStoreCashAmount(amount) {

  var res = amount ? // if its a value
  {
    type: 'UPDATE_CASH_AMOUNT',
    payload: parseFloat(amount)
  } : {
    type: 'UPDATE_CASH_AMOUNT',
    payload: 0
  };

  return res;
}

function updateStoreCardAuth(number) {

  var res = number ? // if its a value
  {
    type: 'UPDATE_CARD_AUTH',
    payload: number
  } : {
    type: 'UPDATE_CARD_AUTH',
    payload: ''
  };

  return res;
}

function updateStoreCardDigits(number) {

  var res = number ? // if its a value
  {
    type: 'UPDATE_CARD_DIGITS',
    payload: number
  } : {
    type: 'UPDATE_CARD_DIGITS',
    payload: ''
  };

  return res;
}

// export function loadSale(id, sales) {
//   const filteredSales = sales.filter(sale => {
//     return sale.id == id
//   })
//   return function(dispatch) {
//     if (filteredSales.length) {
//       filteredSales[0]['created'] = new Date(filteredSales[0]['created'])
//       // filteredSales[0]['globalDiscount'] = parseFloat(filteredSales[0]['globalDiscount'])
//       document.getElementById('discountField').value = parseFloat(filteredSales[0]['cart']['globalDiscount'])
//       document.title = `Venta #${id}`
//       filteredSales[0]['client']['saleLoaded'] = true

//       dispatch({type: 'LOADED_SALE', payload: filteredSales[0]})
//       dispatch({type: 'SET_SALE', payload: filteredSales[0]})
//       dispatch({type: 'SET_SALE_ID', payload: filteredSales[0]._id})

//     } else {
//       dispatch({type: 'NOT_FOUND_SALE', payload: id})
//     }
//   }
// }

// export function saveItem(kwargs) {

//   const item = kwargs.item
//   const movements = kwargs.movements
//   return function(dispatch) {
//     const db = new PouchDB(kwargs.db)

//     db.post(item).then((response) => {

//       dispatch({type: 'SET_SALE', payload: item})
//       dispatch({type: 'SET_SALE_ID', payload: response.id})

//       if (item.pay.payMethod == 'CREDIT') { // IF CREDIT CREATE CREDIT MOVEMENT
//         const db2 = new PouchDB('general')
//         const movement = getMovement(movements, response.id, item)

//         db2.post(movement).then(response => {
//           dispatch({type: 'SHOW_INVOICE_PANEL', payload: ''})
//           dispatch({type: 'HIDE_PAY_PANEL', payload: ''})
//         }).catch(err => { // IF ERROR SHOW MESSAGE
//           alertify.alert('Error', `Error al crear el movimiento de crédito, por favor anule la factura y creela
//           de nuevo ERROR: ${err}.`)
//         })

//       } else { // IF NOT CREDIT SHOW PANELS
//         dispatch({type: 'SHOW_INVOICE_PANEL', payload: ''})
//         dispatch({type: 'HIDE_PAY_PANEL', payload: ''})
//       }

//     }).catch((err) => {
//       alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
//     })
//   }
// }

// function getMovement(movements, saleId, sale) {

//   const sortedMovements = movements.length > 1 ? movements.sort((a, b) => {
//     if (a.document < b.document) {
//       return 1
//     }
//     if (a.document > b.document) {
//       return -1
//     }
//     return 0
//   }) : movements

//   const nextId = sortedMovements.length > 0 ? sortedMovements[0].document + 1 : 1

//   const movement = {
//     'document': nextId,
//     'docType': 'CLIENT_MOVEMENT',
//     'clientId': sale.client._id,
//     'type': 'CREDIT',
//     'amount': parseFloat(sale.cart.cartTotal),
//     'date': new Date(),
//     'sale_id': saleId,
//     'saleId': sale.id,
//     'description': `Venta a crédito con factura #${sale.id}`
//   }

//   return movement

// }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateStoreCashAmount, 'updateStoreCashAmount', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardAuth, 'updateStoreCardAuth', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardDigits, 'updateStoreCardDigits', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/actions.js');
}();

;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemDispatch = getItemDispatch;
exports.getItemDoubleDispatch = getItemDoubleDispatch;
exports.getItemReturn = getItemReturn;
exports.setItem = setItem;
exports.saveItem = saveItem;
exports.updateItem = updateItem;
exports.patchItem = patchItem;
exports.patchItems = patchItems;
exports.deleteItem = deleteItem;
exports.loadGlobalConfig = loadGlobalConfig;
exports.saveLog = saveLog;
exports.getNextNumericCode = getNextNumericCode;
exports.setNextPrevItem = setNextPrevItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// CONFIG DEFAULT AXIOS
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
_axios2.default.defaults.xsrfCookieName = 'csrftoken';
_axios2.default.defaults.xsrfHeaderName = 'X-CSRFToken';

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// GET FUNCTIONS (RETRIEVE ALL)
// ------------------------------------------------------------------------------------------
function getItemDispatch(kwargs) {

  var url = kwargs.url;
  var successType = kwargs.successType;
  var errorType = kwargs.errorType;

  return function (dispatch) {
    _axios2.default.get(url).then(function (response) {
      dispatch({ type: successType, payload: response.data });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      console.log(error.response.status);
      // IF THE ERROR IS UNAUTORIZED PAGE WILL SHOW THE MESSAGE
      if (error.response.status != 403) {
        _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
        dispatch({ type: errorType, payload: error });
      }
    });
  };
}

function getItemDoubleDispatch(kwargs) {

  var url = kwargs.url;
  var successType = kwargs.successType;
  var successType2 = kwargs.successType2;
  var errorType = kwargs.errorType;

  return function (dispatch) {
    _axios2.default.get(url).then(function (response) {
      dispatch({ type: successType, payload: response.data });
      dispatch({ type: successType2, payload: '' });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      console.log(error.response.status);
      if (error.response.status != 403) {
        _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
        dispatch({ type: errorType, payload: error });
      }
    });
  };
}

function getItemReturn(kwargs) {

  var url = kwargs.url;

  _axios2.default.get(url).then(function (response) {
    return response.data;
  }).catch(function (error) {
    _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n    administrador del sistema con el siguiete error: ' + error);
    return error;
  });
}

// ------------------------------------------------------------------------------------------
// SET FUNCTION (RETRIEVE INDIVIDUAL)
// ------------------------------------------------------------------------------------------
function setItem(kwargs) {

  var lookUpValue = kwargs.lookUpValue;
  var lookUpField = kwargs.lookUpField;
  var history = kwargs.history;
  var redirectUrl = kwargs.redirectUrl;
  var url = kwargs.url;

  return function (dispatch) {
    console.log(url + '?' + lookUpField + '=' + lookUpValue);
    _axios2.default.get(url + '?' + lookUpField + '=' + lookUpValue).then(function (response) {

      console.log(response.data);

      if (response.data.length) {
        // IF THERE IS MORE THAN ONE ELEMENT FILTERED
        if (response.data.length > 1) {
          _alertifyjs2.default.alert('ATENCIÓN', 'Existe mas de un ' + kwargs.modelName + ' con el ' + kwargs.lookUpName + ':\n          ' + kwargs.lookUpValue + ', se utilizar\xE1 el primero en lista, por lo que puede no ser el mismo que ud desea\n          actualizar, esto puede deberse a un error, por favor revise los\n          datos o contacte con el administrador del sistema.');
        }

        dispatch({ type: kwargs.dispatchType, payload: response.data[0] });
        dispatch({ type: kwargs.dispatchType2, payload: response.data[0] });
        dispatch({ type: 'FETCHING_DONE', payload: '' });
      } else {
        dispatch({ type: kwargs.dispatchErrorType, payload: '' });
        _alertifyjs2.default.alert('Error', 'No hay ' + kwargs.modelName + ' con el valor de ' + kwargs.lookUpName + ': ' + kwargs.lookUpValue, function () {
          history.push(redirectUrl);
        });
      }
    }).catch(function (error) {
      _alertifyjs2.default.alert('ERROR', 'Error al obtener el valor del API, por favor intente de nuevo o comun\xEDquese con el\n      administrador del sistema con el siguiete error: ' + error);
    });
  };
}

// ------------------------------------------------------------------------------------------
// SAVE FUNCTION (CREATE)
// ------------------------------------------------------------------------------------------
function saveItem(kwargs) {
  var item = kwargs.item;
  delete item['id'];
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;
  var isSale = kwargs.isSale;
  return function (dispatch) {

    (0, _axios2.default)({
      method: 'post',
      url: url,
      data: item
    }).then(function (response) {
      _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
      if (isSale) {
        dispatch({ type: 'SET_SALE', payload: response.data });
        dispatch({ type: 'SHOW_INVOICE_PANEL', payload: '' });
      }
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// UPDATE FUNCTION
// ------------------------------------------------------------------------------------------

function updateItem(kwargs) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'put',
      url: url,
      data: item
    }).then(function (response) {
      _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

function patchItem(kwargs) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'patch',
      url: url,
      data: item
    }).then(function (response) {
      if (kwargs.sucessMessage) {
        _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
          if (kwargs.redirectUrl) {
            kwargs.history.push(kwargs.redirectUrl);
          }
        });
      }
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'SET_SALE_ID', payload: '' });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// DOUBLE UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

function patchItems(kwargs, kwargs2) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  var item2 = kwargs2.item;
  var url2 = kwargs2.url;
  var logCode2 = kwargs2.logCode;
  var itemOld2 = kwargs2.itemOld;
  var logModel2 = kwargs2.logModel;
  var logDescription2 = kwargs2.logDescription;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'patch',
      url: url,
      data: item
    })
    // FIRST PATCH THEN
    .then(function (response) {

      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);

      // SECOND PATCH
      (0, _axios2.default)({
        method: 'patch',
        url: url2,
        data: item2
      })
      // SECOND PATCH THEN
      .then(function (response) {
        if (kwargs2.sucessMessage) {
          _alertifyjs2.default.alert('Completado', kwargs2.sucessMessage).set('onok', function () {
            if (kwargs2.redirectUrl) {
              kwargs2.history.push(kwargs2.redirectUrl);
            }
          });
        }
        dispatch({ type: kwargs2.dispatchType, payload: '' });
        saveLog(logCode2, logModel2, itemOld2, item2, logDescription2, user);
        dispatch({ type: 'FETCHING_DONE', payload: '' });

        // SECOND PATCH CATCH
      }).catch(function (err) {
        console.log(err);
        if (err.response) {
          console.log(err.response.data);
        }
        _alertifyjs2.default.alert('Error', kwargs2.errorMessage + ' ERROR: ' + err + '.');
      });

      // FIRST PATCH CATCH
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// DELETE FUNCTION (DELETE)
// ------------------------------------------------------------------------------------------
function deleteItem(kwargs) {

  var item = kwargs.item;
  var url = kwargs.url;
  var model = kwargs.modelName;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'delete',
      url: url
    }).then(function (response) {

      _alertifyjs2.default.alert('Completado', 'Elemento eliminado satifactoriamente').set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      _alertifyjs2.default.alert('Error', 'Hubo un error al eliminar el ' + model + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// LOAD CONFIG FUNCTION
// ------------------------------------------------------------------------------------------
function loadGlobalConfig(section, name, success, fail) {
  return function (dispatch) {
    if (name) {

      _axios2.default.get('/api/globalconf/' + section + '__' + name).then(function (response) {
        // TODO Single config fetch
      }).catch(function (error) {
        dispatch({ type: fail, payload: error });
      });
    } else {
      _axios2.default.get('/api/globalprefs').then(function (response) {
        // The property to modify in reducer
        var config = response.data ? response.data.filter(function (item) {
          return item.section == section;
        }) : {};
        var data = {};
        config.forEach(function (item) {
          data[item.name] = item.value;
        });

        dispatch({ type: success, payload: { data: data, section: section } });
      }).catch(function (error) {
        dispatch({ type: fail, payload: error });
      });
    }
  };
}

// ------------------------------------------------------------------------------------------
// SAVE LOG FUNCTION (CREATE LOG)
// ------------------------------------------------------------------------------------------
function saveLog(code, model, oldObject, object, description, user) {

  var prevObject = JSON.stringify(oldObject);
  var newObject = JSON.stringify(object);
  var user2 = JSON.stringify(user);

  var item = {
    code: code,
    model: model,
    prev_object: prevObject,
    new_object: newObject,
    description: description,
    user: user2
  };

  (0, _axios2.default)({
    method: 'post',
    url: '/api/logs/',
    data: item
  }).then(function (response) {}).catch(function (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response.data);
    }
    _alertifyjs2.default.alert('Error', 'Error al crear el Log del movimiento, ERROR: ' + err + '.');
  });
}

// ------------------------------------------------------------------------------------------
// AUX FUNCTIONS
// ------------------------------------------------------------------------------------------

// NEXT NUMERIC CODE
function getNextNumericCode(elements, field) {

  if (elements.length) {

    var keys = elements.map(function (element) {
      return element[field];
    });

    keys = keys.sort(function (a, b) {
      return a - b;
    });
    var max = keys.pop();
    var next = parseInt(max) + 1;
    return next.toString();
  }

  return 1;
}

// NEXT PREVIOUS ITEMS
function setNextPrevItem(kwargs) {

  var code = kwargs.code;
  var items = kwargs.items;
  var codeField = kwargs.codeField;
  var previous = 0;
  var next = 0;

  items.sort(function (a, b) {
    return a[codeField] - b[codeField];
  });

  items.forEach(function (item, index) {
    if (item[codeField] == code) {
      next = index + 1;
      previous = index - 1;
      return true;
    }
  });

  var nextCode = items[next] ? items[next][codeField] : items[0][codeField];
  var prevCode = items[previous] ? items[previous][codeField] : items.pop()[codeField];

  return function (dispatch) {
    dispatch({ type: kwargs.dispatchType, payload: { next: nextCode, previous: prevCode } });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getItemDispatch, 'getItemDispatch', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemDoubleDispatch, 'getItemDoubleDispatch', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemReturn, 'getItemReturn', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setItem, 'setItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(updateItem, 'updateItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItem, 'patchItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItems, 'patchItems', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(deleteItem, 'deleteItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(loadGlobalConfig, 'loadGlobalConfig', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveLog, 'saveLog', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getNextNumericCode, 'getNextNumericCode', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setNextPrevItem, 'setNextPrevItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');
}();

;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recalcCart = recalcCart;
exports.updateItemDiscount = updateItemDiscount;
exports.updateItemLote = updateItemLote;
exports.productSelected = productSelected;
exports.updateQty = updateQty;
exports.updateQtyCode = updateQtyCode;
exports.addSubOne = addSubOne;
// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
var uuidv1 = __webpack_require__(604);
// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS USED IN COMPONENTS
// ------------------------------------------------------------------------------------------

// Function to update the globa; discount of complete storage of items, and reflect it on store, then updating DOME
function recalcCart(itemsInCart, globalDiscount, client) {

  var newCart = itemsInCart.map(function (item) {

    var newItem = item;

    var data = caclSubtotal(item.product, item.qty, item.discount, globalDiscount, client);

    newItem.subtotal = data.subtotal;
    newItem.totalWithIv = data.totalWithIv;
    newItem.discountCurrency = data.discountCurrency;
    newItem.subTotalNoDiscount = data.subTotalNoDiscount;
    newItem.priceToUse = data.priceToUse;

    return newItem;
  });

  return { type: 'REPLACE_CART', payload: newCart };
}

// Function to update the inline discount of an item, and reflect it on store
function updateItemDiscount(itemsInCart, code, discount, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, itemsInCart[indexInCart].qty, discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };

  return res;
}

// Function to update the inline discount of an item, and reflect it on store
function updateItemLote(itemsInCart, code, lote) {
  var loteNum = !lote ? '-' : lote;
  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'UPDATE_CART_ITEM_LOTE',
    payload: {
      lote: loteNum,
      index: indexInCart
    }
  };

  return res;
}

// When item is selected in code field
function productSelected(code, qty, products, itemsInCart, globalDiscount, client, defaultConfig, userConfig) {

  var perLine = false;

  var productSelected = products.findIndex(function (product) {
    return product.code == code || product.barcode == code;
  }); // checks if product exists

  var res = productSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_NOT_FOUND',
    payload: -1
  } : checkIfInCart(code, qty, products, itemsInCart, globalDiscount, productSelected, client, perLine);

  return res;
}

// Updates Amount based on qty input field

function updateQty(code, qty, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  });
  var qtyNum = parseFloat(qty);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

function updateQtyCode(code, qty, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.product.code == code || item.product.barcode == code;
  });
  var qtyNum = parseFloat(qty);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

// Updates Amount based on qty input field

function addSubOne(code, subOrAdd, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.product.code == code;
  });
  var qtyNum = subOrAdd ? parseFloat(itemsInCart[indexInCart].qty + 1) : parseFloat(itemsInCart[indexInCart].qty - 1);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

// ------------------------------------------------------------------------------------------
// LOCAL AUX FUNCTIONS
// ------------------------------------------------------------------------------------------

// checks in cart if item already exists
function checkIfInCart(code, qty, products, itemsInCart, globalDiscount, productSelected, client, perLine) {

  // check if product in cart
  var indexInCart = itemsInCart.findIndex(function (cart) {
    return cart.product.code == code || cart.product.barcode == code;
  });

  var dataNewProd = caclSubtotal(products[productSelected], qty, 0, globalDiscount, client);

  // CHECK IF CONFIG ALLOWS MULTIPLE LINES OR NOT
  if (perLine) {
    var uuid = uuidv1();
    var res = indexInCart == -1 ? // if not exists in cart Dispats ADD_TO_TABLE, if exists dispatch cart updated
    {
      type: 'ADD_TO_CART',
      payload: {
        uuid: uuid,
        product: products[productSelected],
        qty: qty,
        discount: 0,
        discountCurrency: dataNewProd.discountCurrency,
        subTotalNoDiscount: dataNewProd.subTotalNoDiscount,
        subtotal: dataNewProd.subtotal,
        totalWithIv: dataNewProd.totalWithIv,
        lote: '-',
        priceToUse: dataNewProd.priceToUse
      }
    } : {
      type: 'UPDATE_CART',
      payload: {
        item: updatedCartItem(itemsInCart, indexInCart, itemsInCart[indexInCart].qty + qty, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
        index: indexInCart
      }
    };
    return res;

    // IGNORE IF ALREADY IN CART IF CONFIG SAYS THAT
  } else {
    var _uuid = uuidv1();
    var _res = {
      type: 'ADD_TO_CART',
      payload: {
        uuid: _uuid,
        product: products[productSelected],
        qty: qty,
        discount: 0,
        discountCurrency: dataNewProd.discountCurrency,
        subTotalNoDiscount: dataNewProd.subTotalNoDiscount,
        subtotal: dataNewProd.subtotal,
        totalWithIv: dataNewProd.totalWithIv,
        lote: '-',
        priceToUse: dataNewProd.priceToUse
      }
    };
    return _res;
  }
}

// calculates the subtotal by line, also the total with iv included, the discount in currency format
function caclSubtotal(product, qty, productDiscount, globalDiscount, client) {

  var price = priceToUse(product, client);

  var subTotalNoDiscount = price * qty;

  var subTotal = price * qty * (1 - productDiscount / 100) * (1 - globalDiscount / 100);

  var iv1 = product.use_taxes ? subTotal * (product.taxes / 100) : 0;

  var iv2 = product.use_taxes2 ? subTotal * (product.taxes2 / 100) : 0;

  var totalWithIv = subTotal + iv1 + iv2;

  var discountCurrencyInLine = price * qty * (productDiscount / 100);
  var discountCurrencyGlobal = (price * qty - discountCurrencyInLine) * (globalDiscount / 100);

  var discountCurrency = discountCurrencyInLine + discountCurrencyGlobal;

  return {
    subtotal: subTotal,
    totalWithIv: totalWithIv,
    discountCurrency: discountCurrency,
    subTotalNoDiscount: subTotalNoDiscount,
    priceToUse: price
  };
}

// updates an item in the cart with new information, this aux funtion returns new updated object ready for replace the stored one
function updatedCartItem(itemsInCart, index, newQty, productDiscount, globalDiscount, client, uuid) {

  var data = caclSubtotal(itemsInCart[index].product, newQty, productDiscount, globalDiscount, client);

  return {
    uuid: uuid,
    product: itemsInCart[index].product,
    discountCurrency: data.discountCurrency,
    qty: newQty,
    discount: productDiscount,
    subTotalNoDiscount: data.subTotalNoDiscount,
    subtotal: data.subtotal,
    totalWithIv: data.totalWithIv,
    lote: itemsInCart[index].lote,
    priceToUse: data.priceToUse
  };
}

// function to determin price to use in calculation
function priceToUse(product, client) {

  if (client.clientType == 'GENERAL') return product.price;

  if (client.clientType == 'DISTRIB' && product.usePrice2) return product.price2;
  if (client.clientType == 'DISTRIB') return product.price;

  if (client.clientType == 'WHOLESA' && product.usePrice3) return product.price3;
  if (client.clientType == 'WHOLESA' && product.usePrice2) return product.price2;
  if (client.clientType == 'WHOLESA') return product.price;

  return product.price;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(recalcCart, 'recalcCart', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemDiscount, 'updateItemDiscount', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemLote, 'updateItemLote', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(productSelected, 'productSelected', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQty, 'updateQty', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQtyCode, 'updateQtyCode', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(addSubOne, 'addSubOne', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(checkIfInCart, 'checkIfInCart', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(caclSubtotal, 'caclSubtotal', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updatedCartItem, 'updatedCartItem', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(priceToUse, 'priceToUse', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');
}();

;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(69);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(597);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(648);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COMPONENTS
window.alertify = _alertifyjs2.default;

// STORE


// REDUX PROVIDER

(0, _formatMoney2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_main2.default, null)
), document.getElementById('app-container'));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


// COMPONENTS

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _actions = __webpack_require__(598);

var _routes = __webpack_require__(599);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(643);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(645);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(70);

var _fetching2 = _interopRequireDefault(_fetching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import routes from './routes.js'

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fetching: store.fetching.fetching,
    sideMenuVisible: store.layout.sideMenuVisible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _actions.fecthProfile)());
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var fetching = this.props.fetching ? _react2.default.createElement(_fetching2.default, null) : '';
      var mainContainerClass = this.props.sideMenuVisible ? 'mainContainer' : 'mainContainer sideHidden';
      var content = _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_sideMenu2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'mainContainer', className: mainContainerClass },
            _react2.default.createElement(_topBar2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'mainContainer-content' },
              _routes2.default,
              fetching
            )
          )
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        content
      );
    }
  }]);

  return Main;
}(_react2.default.Component)) || _class);
exports.default = Main;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/github/iFact3/frontend/sales/main/main.jsx');
}();

;

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fecthProfile = fecthProfile;
exports.fecthIsAdminLocked = fecthIsAdminLocked;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fecthProfile() {

  return function (dispatch) {
    _axios2.default.get('/profile/').then(function (response) {
      dispatch({ type: 'FETCH_PROFILE_FULFILLED', payload: { user: response.data[0].fields, profile: response.data[1].fields } });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      dispatch({ type: 'FETCH_PROFILE_REJECTED', payload: error });
    });
  };
}

function fecthIsAdminLocked() {

  return function (dispatch) {
    _axios2.default.get('/api/userprefs/admin__is_admin_locked/').then(function (response) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_FULFILLED', payload: response.data.value });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_REJECTED', payload: error });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', '/Volumes/DATOS/github/iFact3/frontend/sales/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', '/Volumes/DATOS/github/iFact3/frontend/sales/main/actions.js');
}();

;

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _home = __webpack_require__(600);

var _home2 = _interopRequireDefault(_home);

var _main = __webpack_require__(601);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes Components

var routes = _react2.default.createElement(
  'div',
  { className: 'heigh100' },
  _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/sales', component: _home2.default }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/sales/sale', component: _main2.default })
);

var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Volumes/DATOS/github/iFact3/frontend/sales/main/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/sales/main/routes.js');
}();

;

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */

// import { checkUserPermissions } from '../../utils/checkPermissions'
// import { getItemDispatch } from '../../utils/api.js'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'HOME_PANEL_MOUNTED', payload: '' });
    }
    // *******************************************************************

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'Main heigh100' },
        'HOME'
      );
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class);
exports.default = Home;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Volumes/DATOS/github/iFact3/frontend/sales/home/home.jsx');
}();

;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */

// import { checkUserPermissions } from '../../utils/checkPermissions'
// import { getItemDispatch } from '../../utils/api.js'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _content = __webpack_require__(602);

var _content2 = _interopRequireDefault(_content);

var _aside = __webpack_require__(610);

var _aside2 = _interopRequireDefault(_aside);

var _searchPanel = __webpack_require__(615);

var _searchPanel2 = _interopRequireDefault(_searchPanel);

var _searchPanel3 = __webpack_require__(618);

var _searchPanel4 = _interopRequireDefault(_searchPanel3);

var _payPanel = __webpack_require__(621);

var _payPanel2 = _interopRequireDefault(_payPanel);

var _invoicePanel = __webpack_require__(630);

var _invoicePanel2 = _interopRequireDefault(_invoicePanel);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sale = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(Sale, _React$Component);

  function Sale() {
    _classCallCheck(this, Sale);

    return _possibleConstructorReturn(this, (Sale.__proto__ || Object.getPrototypeOf(Sale)).apply(this, arguments));
  }

  _createClass(Sale, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'SALE_PANEL_MOUNTED', payload: '' });
    }
    // *******************************************************************

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'sale' },
        _react2.default.createElement(_content2.default, null),
        _react2.default.createElement(_aside2.default, null),
        _react2.default.createElement(_searchPanel2.default, null),
        _react2.default.createElement(_searchPanel4.default, null),
        _react2.default.createElement(_payPanel2.default, null),
        _react2.default.createElement(_invoicePanel2.default, null)
      );
    }
  }]);

  return Sale;
}(_react2.default.Component)) || _class);
exports.default = Sale;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Sale, 'Sale', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/main.jsx');
}();

;

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _product = __webpack_require__(603);

var _product2 = _interopRequireDefault(_product);

var _cart = __webpack_require__(607);

var _cart2 = _interopRequireDefault(_cart);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fullWidth: store.sale.fullWidth,
    total: store.cart.cartTotal
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'toggleWidth',
    value: function toggleWidth() {
      this.props.dispatch({ type: 'TOGGLE_FULL_WIDTH', payload: '' });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var contentClass = this.props.fullWidth ? 'sale-content fullWidth' : 'sale-content';
      var cartClass = this.props.fullWidth ? 'sale-content-cart' : 'sale-content-cart fullHeight';
      var totalClass = this.props.fullWidth ? 'sale-content-total' : 'sale-content-total collapsed';

      return _react2.default.createElement(
        'div',
        { className: contentClass },
        _react2.default.createElement(
          'div',
          { className: 'sale-content-product' },
          _react2.default.createElement(_product2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: cartClass },
          _react2.default.createElement(_cart2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: totalClass },
          '\u20A1 ',
          this.props.total.formatMoney(),
          _react2.default.createElement('i', { className: 'fa fa-chevron-left', onClick: this.toggleWidth.bind(this) })
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component)) || _class);
exports.default = Main;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/content/content.jsx');
}();

;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _api = __webpack_require__(4);

var _actions = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    products: store.products.products,
    client: store.clients.clientSelected,
    itemsInCart: store.cart.cartItems,
    inputVal: store.products.inputVal,
    globalDiscount: store.cart.globalDiscount
    // disabled: store.sales.completed,
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.codeInput.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // this.codeInput.focus()
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch({ type: 'CLEAR_PRODUCTS', payload: '' });

      var productKwargs = {
        url: '/api/products',
        successType: 'FETCH_PRODUCTS_FULFILLED',
        errorType: 'FETCH_PRODUCTS_REJECTED'
      };

      this.props.dispatch((0, _api.getItemDispatch)(productKwargs));
    }
  }, {
    key: 'searchProductClick',
    value: function searchProductClick() {

      this.props.dispatch({ type: 'PRODUCT_SHOW_PANEL', payload: -1 });
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {
        if (ev.target.value) {
          var code = ev.target.value.split('*')[0]; // Split val [0] is code [1] is qty
          var qty = ev.target.value.split('*')[1];
          qty = isNaN(qty) ? 1 : parseFloat(qty); // if no qty sets to 1

          this.props.dispatch((0, _actions.productSelected)(code, qty, this.props.products, this.props.itemsInCart, this.props.globalDiscount, this.props.client, this.props.defaultConfig, this.props.userConfig));
          // this.props.dispatch(productSelected(code, qty, this.props.products, this.props.itemsInCart,
          //   this.props.globalDiscount, this.props.client, this.props.defaultConfig, this.props.userConfig))
          this.props.dispatch({ type: 'CLEAR_PRODUCT_FIELD_VALUE', payload: 0 });
          this.props.dispatch({ type: 'SET_PRODUCT_ACTIVE_IN_CART', payload: code });
        }
      } else {
        this.props.dispatch({ type: 'SET_PRODUCT_FIELD_VALUE', payload: ev.target.value });
      }
    }

    // Render the product

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'product' },
        _react2.default.createElement(
          'div',
          { className: 'product-inputs' },
          _react2.default.createElement(
            'div',
            { className: 'product-inputs-code' },
            _react2.default.createElement('i', { className: 'fa fa-barcode' }),
            _react2.default.createElement('input', { id: 'productCodeInputField', disabled: this.props.disabled,
              onKeyDown: this.inputKeyPress.bind(this),
              value: this.props.inputVal,
              onChange: this.inputKeyPress.bind(this),
              ref: function ref(input) {
                _this2.codeInput = input;
              },
              type: 'text', placeholder: 'Ingrese el C\xF3digo del Producto',
              className: 'product-inputs-code-input mousetrap form-control input-lg' })
          ),
          _react2.default.createElement(
            'button',
            { disabled: this.props.disabled, onClick: this.searchProductClick.bind(this),
              className: 'product-inputs-search' },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('i', { className: 'fa fa-search' })
            )
          )
        )
      );
    }
  }]);

  return Product;
}(_react2.default.Component)) || _class);
exports.default = Product;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Product, 'Product', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/product.jsx');
}();

;

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(605);
var bytesToUuid = __webpack_require__(606);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 605:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 606:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cartItems = __webpack_require__(608);

var _cartItems2 = _interopRequireDefault(_cartItems);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var Cart = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales,
    // productSearchpanelVisible: store.searchProducts.visible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var _this = this;
      Mousetrap.bind('mod+b', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch({ type: 'SEARCH_PRODUCT_TOGGLE_PANEL', payload: -1 });
        document.getElementById('product-search-input').focus();
        document.getElementById('product-search-input').value = '';

        Mousetrap.bind('esc', function () {
          _this.props.dispatch({ type: 'SEARCH_PRODUCT_TOGGLE_PANEL', payload: -1 });
          document.getElementById('productCodeInputField').focus();
          document.getElementById('productCodeInputField').value = '';
          Mousetrap.unbind('esc');
        });
      });

      Mousetrap.bind('mod+c', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch({ type: 'SEARCH_CLIENT_TOGGLE_PANEL', payload: -1 });
        document.getElementById('client-search-input').focus();
        document.getElementById('client-search-input').value = '';

        Mousetrap.bind('esc', function () {
          _this.props.dispatch({ type: 'SEARCH_CLIENT_TOGGLE_PANEL', payload: -1 });
          document.getElementById('productCodeInputField').focus();
          document.getElementById('productCodeInputField').value = '';
          Mousetrap.unbind('esc');
        });
      });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      // const useLote = this.props.defaultConfig
      //   ? this.props.defaultConfig.cartItemUseLote
      //   : false

      // const loteField = useLote
      //   ? <th>Lote</th>
      //   : <th />

      return _react2.default.createElement(
        'div',
        { className: 'cart' },
        _react2.default.createElement(
          'div',
          { className: 'cart-header' },
          _react2.default.createElement(
            'div',
            { className: 'cart-header-code' },
            _react2.default.createElement(
              'h5',
              null,
              'C\xF3d'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-description' },
            _react2.default.createElement(
              'h5',
              null,
              'Art'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-qty' },
            _react2.default.createElement(
              'h5',
              null,
              'Cant'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-unitPrice' },
            _react2.default.createElement(
              'h5',
              null,
              'P Unit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-discount' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-iva' },
            _react2.default.createElement(
              'h5',
              null,
              'IV'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-total' },
            _react2.default.createElement(
              'h5',
              null,
              'Total IVI'
            )
          )
        ),
        _react2.default.createElement(_cartItems2.default, null)
      );
    }
  }]);

  return Cart;
}(_react2.default.Component)) || _class);
exports.default = Cart;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cart, 'Cart', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/cart.jsx');
}();

;

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(609);

var _actions2 = __webpack_require__(54);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var CartItems = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    inCart: store.cart.cartItems,
    client: store.clients.clientSelected,
    globalDiscount: store.cart.globalDiscount,
    // disabled: store.sales.completed,
    cartItemActive: store.cart.cartItemActive
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales
  };
}), _dec(_class = function (_React$Component) {
  _inherits(CartItems, _React$Component);

  function CartItems() {
    _classCallCheck(this, CartItems);

    return _possibleConstructorReturn(this, (CartItems.__proto__ || Object.getPrototypeOf(CartItems)).apply(this, arguments));
  }

  _createClass(CartItems, [{
    key: 'componentDidUpdate',


    // On component update (The cart has been modified) calls the update totals method in actions file.
    value: function componentDidUpdate(prevProps) {

      this.props.dispatch((0, _actions.updateTotals)(this.props.inCart));

      // Auto Scroll To end of container
      var elem = document.getElementById('cart-body');
      elem.scrollTop = elem.scrollHeight;
    }

    // componentDidUpdate(nextProps) {
    //   if (this.props.cartItemActive != nextProps.cartItemActive) {
    //     console.log(document.getElementById(`qty${nextProps.cartItemActive}`))
    //   }
    // }

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      var _this = this;
      Mousetrap.bind('mod+plus', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch((0, _actions2.addSubOne)(_this.props.cartItemActive, true, _this.props.inCart, _this.props.globalDiscount, _this.props.client));
      });

      Mousetrap.bind('mod+f', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        document.getElementById('qty' + _this.props.cartItemActive).focus();
      });

      Mousetrap.bind('mod+-', function (e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }
        _this.props.dispatch((0, _actions2.addSubOne)(_this.props.cartItemActive, false, _this.props.inCart, _this.props.globalDiscount, _this.props.client));
      });

      Mousetrap.bind('mod+*', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        var __this = _this;
        _alertifyjs2.default.prompt('Nueva cantidad para el producto seleccionado', 'Ingrese la nueva cantidad para el producto seleccionado', '', function (evt, value) {
          __this.props.dispatch((0, _actions2.updateQtyCode)(__this.props.cartItemActive, value, __this.props.inCart, __this.props.globalDiscount, __this.props.client));
        }, function () {}).set('labels', { ok: 'Ok', cancel: 'Cancelar' });
      });
    }
  }, {
    key: 'discountInputKeyPress',
    value: function discountInputKeyPress(code, ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        var discount = ev.target.value ? ev.target.value : 0;
        this.props.dispatch((0, _actions2.updateItemDiscount)(this.props.inCart, code, discount, this.props.globalDiscount, this.props.client));
      }
    }
  }, {
    key: 'discountInputOnBlur',
    value: function discountInputOnBlur(code, ev) {

      var discount = ev.target.value ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateItemDiscount)(this.props.inCart, code, discount, this.props.globalDiscount, this.props.client));
    }
  }, {
    key: 'qtyInputChange',
    value: function qtyInputChange(code, ev) {

      var qty = parseFloat(ev.target.value) ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateQty)(code, qty, this.props.inCart, this.props.globalDiscount, this.props.client));
    }
  }, {
    key: 'qtyInputKeyPress',
    value: function qtyInputKeyPress(ev) {
      ev.preventDefault();
      console.log('called');
      if (ev.key == 'Enter') {
        console.log('Presssss', ev.key);
        document.getElementById('productCodeInputField').focus();
      }
    }
  }, {
    key: 'loteInputKeyPress',
    value: function loteInputKeyPress(code, ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        var lote = ev.target.value ? ev.target.value : 0;
        this.props.dispatch((0, _actions2.updateItemLote)(this.props.inCart, code, lote));
      }
    }
  }, {
    key: 'loteInputOnBlur',
    value: function loteInputOnBlur(code, ev) {

      var lote = ev.target.value ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateItemLote)(this.props.inCart, code, lote));
    }
  }, {
    key: 'setCartItemActive',
    value: function setCartItemActive(code, ev) {

      this.props.dispatch({ type: 'SET_PRODUCT_ACTIVE_IN_CART', payload: code });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(code, ev) {

      this.props.dispatch((0, _actions.removeFromCart)(this.props.inCart, code));
    }
  }, {
    key: 'fieldFocus',
    value: function fieldFocus(ev) {
      ev.target.select();
    }

    // Render the items in cart using table rows

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var cartItems = this.props.inCart;
      var items2 = cartItems.map(function (item, index) {

        var activeClass = item.product.code == _this3.props.cartItemActive || item.product.barcode == _this3.props.cartItemActive ? 'cart-activeRow cart-body-item' : 'cart-body-item';

        var removeIconClass = _this3.props.disabled ? 'removeItemIcon disabled' : 'removeItemIcon';

        var taxes1 = item.product.use_taxes ? item.product.taxes : 0;

        var qtyField = _react2.default.createElement('input', {
          id: 'qty' + item.product.code,
          disabled: _this3.props.disabled,
          onChange: _this3.qtyInputChange.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          onKeyUp: _this3.qtyInputKeyPress.bind(_this3),
          type: 'number',
          className: 'form-control',
          value: item.qty
        });

        var discountField = _this3.props.client.saleLoaded ? _react2.default.createElement('input', {
          disabled: _this3.props.disabled,
          onKeyPress: _this3.discountInputKeyPress.bind(_this3, item.uuid),
          onBlur: _this3.discountInputOnBlur.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          type: 'number', className: 'form-control',
          defaultValue: parseFloat(item.discount)
        }) : _react2.default.createElement('input', {
          disabled: _this3.props.disabled,
          onKeyPress: _this3.discountInputKeyPress.bind(_this3, item.uuid),
          onBlur: _this3.discountInputOnBlur.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          type: 'number', className: 'form-control'
        });

        return _react2.default.createElement(
          'div',
          { className: activeClass,
            key: item.uuid,
            onClick: _this3.setCartItemActive.bind(_this3, item.product.code) },
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-code' },
            _react2.default.createElement(
              'h5',
              null,
              'C\xF3digo'
            ),
            item.product.code
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-description' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            ),
            item.product.description
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-qty' },
            _react2.default.createElement(
              'h5',
              null,
              'Cantidad'
            ),
            qtyField
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-unitPrice' },
            _react2.default.createElement(
              'h5',
              null,
              'P Unit'
            ),
            '\u20A1 ',
            parseFloat(item.priceToUse).formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-discount' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            ),
            discountField
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-iva' },
            _react2.default.createElement(
              'h5',
              null,
              'IVA'
            ),
            taxes1
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-total' },
            _react2.default.createElement(
              'h5',
              null,
              'Total'
            ),
            '\u20A1 ',
            item.totalWithIv.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'span',
            { className: removeIconClass },
            _react2.default.createElement('i', { onClick: _this3.removeItem.bind(_this3, item.uuid), className: 'fa fa-times-circle' })
          )
        );
      });

      // return <tbody className='table-body'>
      //   {items}
      // </tbody>

      return _react2.default.createElement(
        'div',
        { id: 'cart-body', className: 'cart-body' },
        items2
      );
    }
  }]);

  return CartItems;
}(_react2.default.Component)) || _class);
exports.default = CartItems;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CartItems, 'CartItems', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/cartItems.jsx');
}();

;

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTotals = updateTotals;
exports.removeFromCart = removeFromCart;
// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS USED IN COMPONENTS
// ------------------------------------------------------------------------------------------

// This function updates totals the cart store item, generates new values according cart item objects, then push the to store
function updateTotals(inCart) {

  var subtotal = 0;
  var subTotalNoDiscount = 0;
  var taxes = 0;
  var total = 0;
  var discountTotal = 0;

  // for Each element adds the values to get totals
  inCart.forEach(function (item) {

    subTotalNoDiscount = subTotalNoDiscount + item.subTotalNoDiscount;

    subtotal = subtotal + item.subtotal;

    var taxesCalc = item.product.use_taxes ? item.subtotal * (item.product.taxes / 100) : 0;

    var taxesCalc2 = item.product.use_taxes2 ? item.subtotal * (item.product.taxes2 / 100) : 0;

    taxes = taxes + taxesCalc + taxesCalc2;

    discountTotal = discountTotal + item.discountCurrency; // this is the value in currency
  });
  // TODO Config for round or not
  // total = Math.round(subtotal + taxes)
  total = subtotal + taxes;
  // returs a dispatch with a payload of the obtained values
  return {
    type: 'UPDATE_CART_TOTALS',
    payload: {
      subtotal: subtotal,
      taxes: taxes,
      total: total,
      discountTotal: discountTotal,
      subTotalNoDiscount: subTotalNoDiscount
    }
  };
}

// Finds a code in the cart and sends a dispatch to remove it from cart based on index
function removeFromCart(itemsInCart, code) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'REMOVE_FROM_CART',
    payload: indexInCart
  };

  return res;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateTotals, 'updateTotals', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/actions.js');

  __REACT_HOT_LOADER__.register(removeFromCart, 'removeFromCart', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/actions.js');
}();

;

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _clients = __webpack_require__(611);

var _clients2 = _interopRequireDefault(_clients);

var _totals = __webpack_require__(613);

var _totals2 = _interopRequireDefault(_totals);

var _buttons = __webpack_require__(614);

var _buttons2 = _interopRequireDefault(_buttons);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aside = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fullWidth: store.sale.fullWidth,
    total: store.cart.cartTotal
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Aside, _React$Component);

  function Aside() {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
  }

  _createClass(Aside, [{
    key: 'toggleWidth',
    value: function toggleWidth() {
      this.props.dispatch({ type: 'TOGGLE_FULL_WIDTH', payload: '' });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var asideClass = this.props.fullWidth ? 'sale-aside collapsed' : 'sale-aside';
      var asideContainerClass = this.props.fullWidth ? 'sale-aside-content collapsed' : 'sale-aside-content';
      return _react2.default.createElement(
        'div',
        { className: asideClass },
        _react2.default.createElement(
          'div',
          { className: asideContainerClass },
          _react2.default.createElement(_clients2.default, null),
          _react2.default.createElement(_totals2.default, null),
          _react2.default.createElement(_buttons2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'sale-aside-total' },
          '\u20A1 ',
          this.props.total.formatMoney(),
          _react2.default.createElement('i', { className: 'fa fa-chevron-right', onClick: this.toggleWidth.bind(this) })
        )
      );
    }
  }]);

  return Aside;
}(_react2.default.Component)) || _class);
exports.default = Aside;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Aside, 'Aside', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/aside/aside.jsx');
}();

;

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(259);

var _api = __webpack_require__(4);

var _getClientDebt = __webpack_require__(612);

var _actions2 = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clients = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    clients: store.clients.clients,
    clientSelected: store.clients.clientSelected,
    cart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount,
    client: store.clients.clientSelected,
    users: store.clients.users,
    user: store.clients.userSelected,
    // movements: store.clientmovements.movements,
    debt: store.clients.clientSelectedDebt
    // disabled: store.sales.completed
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Clients, _React$Component);

  function Clients() {
    _classCallCheck(this, Clients);

    return _possibleConstructorReturn(this, (Clients.__proto__ || Object.getPrototypeOf(Clients)).apply(this, arguments));
  }

  _createClass(Clients, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.clientSelected != this.props.clientSelected) {
        // set the discount: default value or 0

        if (!nextProps.clientSelected.saleLoaded) {

          var kwargs = {
            client_id: nextProps.clientSelected.id,
            success: 'SET_CLIENT_DEBT',
            fail: 'SET_CLIENT_DEBT_FAILED'
          };

          var discount = nextProps.client.defaultDiscount ? nextProps.client.defaultDiscount : 0;

          this.props.dispatch((0, _actions2.recalcCart)(nextProps.cart, discount, nextProps.client));
          this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });

          this.props.dispatch((0, _getClientDebt.getClientDebt)(kwargs));

          // SETS VALUE OF DEFAULT DISCOUNT TO FIELD OR 0
          if (nextProps.client.defaultDiscount) {
            document.getElementById('discountField').value = discount;
            document.getElementById('discountField').disabled = true;
          } else {
            document.getElementById('discountField').value = '';
            document.getElementById('discountField').disabled = false;
          }
        }
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch({ type: 'CLEAR_CLIENTS', payload: '' });

      var clientKwargs = {
        url: '/api/clients',
        successType: 'FETCH_CLIENTS_FULFILLED',
        errorType: 'FETCH_CLIENTS_REJECTED'
      };

      this.props.dispatch((0, _api.getItemDispatch)(clientKwargs));
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {

        var code = ev.target.value; // Split val [0] is code [1] is qty
        this.props.dispatch((0, _actions.clientSelected)(code, this.props.clients)); // dispatchs action according to result
      }
    }
  }, {
    key: 'userSelect',
    value: function userSelect(ev) {
      var _id = ev.target.value;
      this.props.dispatch((0, _actions.userSelected)(_id, this.props.users)); // dispatchs action according to result
    }
  }, {
    key: 'userUnSelect',
    value: function userUnSelect(ev) {
      this.props.dispatch({ type: 'USER_CLEAR', payload: '' }); // dispatchs action according to result
    }
  }, {
    key: 'searchClientClick',
    value: function searchClientClick() {

      this.props.dispatch((0, _actions.searchClient)());
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      // ********************************************************************
      // SELECT2 DATA
      // ********************************************************************

      var clientToShow = this.props.clientSelected ? this.props.clientSelected.name + ' ' + this.props.clientSelected.last_name : 'Cliente Contado';

      // const creditIcon = (this.props.clientSelected && this.props.clientSelected.has_credit)
      //   ? 'fa fa-check-square'
      //   : 'fa fa-times-circle'

      return _react2.default.createElement(
        'div',
        { className: 'client' },
        _react2.default.createElement(
          'div',
          { className: 'client-img' },
          _react2.default.createElement('img', { disabled: this.props.disabled, onClick: this.searchClientClick.bind(this),
            src: '/media/default/profile.jpg'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'client-data' },
          _react2.default.createElement(
            'div',
            { className: 'client-data-row' },
            _react2.default.createElement(
              'h3',
              null,
              'Cliente :'
            ),
            _react2.default.createElement('input', { disabled: this.props.disabled, onKeyDown: this.inputKeyPress.bind(this),
              type: 'text'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'client-data-row' },
            _react2.default.createElement(
              'h3',
              null,
              'Nombre :'
            ),
            _react2.default.createElement(
              'span',
              null,
              clientToShow
            )
          )
        )
      );
    }
  }]);

  return Clients;
}(_react2.default.Component)) || _class);
exports.default = Clients;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Clients, 'Clients', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/clients.jsx');
}();

;

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientDebt = getClientDebt;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
_axios2.default.defaults.xsrfCookieName = 'csrftoken';
_axios2.default.defaults.xsrfHeaderName = 'X-CSRFToken';

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

// CHECK PERMISSIONS FOR CURRENT USER
function getClientDebt(kwargs) {
  return function (dispatch) {
    var data = JSON.stringify({ client_id: kwargs.client_id });
    // calls the function in backend to check permissions
    _axios2.default.post('/api/getclientdebt/', data).then(function (response) {
      console.log(response);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
      dispatch({ type: kwargs.success, payload: response.data });
    }).catch(function (error) {
      _alertifyjs2.default.alert('ERROR', 'Error al intentar verificar los permisos de usuario, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
      dispatch({ type: kwargs.fail, payload: '' });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getClientDebt, 'getClientDebt', '/Volumes/DATOS/github/iFact3/frontend/utils/getClientDebt.js');
}();

;

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(54);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    client: store.clients.clientSelected,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
    // disabled: store.sales.completed
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals(props) {
    _classCallCheck(this, Totals);

    var _this = _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).call(this, props));

    _this.state = {
      discountVal: 0
    };
    return _this;
  }

  _createClass(Totals, [{
    key: 'showInvoicePanel',
    value: function showInvoicePanel() {
      this.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {

        var discount = ev.target.value ? ev.target.value : 0;
        // CALC THE MAX DISCOUNT AND CHECKS IT ON FIELD
        var maxDiscount = this.props.client.maxDiscount ? this.props.client.maxDiscount : 100;
        if (discount <= maxDiscount) {
          this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });
          this.props.dispatch((0, _actions.recalcCart)(this.props.itemsInCart, this.state.discountVal, this.props.client));
        } else {
          _alertifyjs2.default.alert('Error', 'El descuento para el cliente seleccionado no puede ser mayor al ' + maxDiscount + '%');
          document.getElementById('discountField').value = parseFloat(this.props.globalDiscount);
        }
      } else {
        this.state.discountVal = ev.target.value ? parseFloat(ev.target.value) : 0;
      }
    }
  }, {
    key: 'inputOnBlur',
    value: function inputOnBlur(ev) {
      // if Key pressed id Enter

      var discount = ev.target.value ? ev.target.value : 0;
      // CALC THE MAX DISCOUNT AND CHECKS IT ON FIELD
      var maxDiscount = this.props.client.maxDiscount ? this.props.client.maxDiscount : 100;
      if (discount <= maxDiscount) {
        this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });
        this.props.dispatch((0, _actions.recalcCart)(this.props.itemsInCart, this.state.discountVal, this.props.client));
      } else {
        _alertifyjs2.default.alert('Error', 'El descuento para el cliente seleccionado no puede ser mayor al ' + maxDiscount + '%');
        document.getElementById('discountField').value = parseFloat(this.props.globalDiscount);
      }
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'totals' },
        _react2.default.createElement(
          'div',
          { style: {
              'paddingTop': '0',
              'marginTop': '0'
            }, className: 'bg-white right-item' },
          _react2.default.createElement(
            'table',
            { className: 'table totals-table' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Sub-Total:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  { style: {
                      'width': '37%'
                    } },
                  'Descuento %'
                ),
                _react2.default.createElement(
                  'td',
                  { style: {
                      'padding': '0'
                    } },
                  _react2.default.createElement('input', {
                    id: 'discountField',
                    disabled: this.props.disabled,
                    onKeyPress: this.inputKeyPress.bind(this),
                    onChange: this.inputKeyPress.bind(this),
                    onBlur: this.inputOnBlur.bind(this),
                    type: 'number',
                    style: {
                      'width': '100%',
                      'height': '37px',
                      'padding': '0 0 0 10px',
                      'fontSize': '15px',
                      'border': '0',
                      'position': 'relative',
                      'display': 'inline-block'
                    },
                    className: 'sale_global_discount_input form-control' })
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Descuento:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.discountTotal.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'IV:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.taxes.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Total:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.total.formatMoney(2, ',', '.')
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/github/iFact3/frontend/sales/general/totals/totals.jsx');
}();

;

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = (_dec = (0, _reactRedux.connect)(function (store) {
  return { disabled: store.sales.completed };
}), _dec(_class = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'showPayPanel',
    value: function showPayPanel() {
      this.props.dispatch({ type: 'SHOW_PAY_PANEL', payload: -1 });
    }
  }, {
    key: 'showInoicePanel',
    value: function showInoicePanel() {
      this.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'showSalePanel',
    value: function showSalePanel() {
      this.props.dispatch({ type: 'SHOW_SALES_PANEL', payload: -1 });
    }
  }, {
    key: 'showPresalesPanel',
    value: function showPresalesPanel() {
      this.props.dispatch({ type: 'SHOW_PRESALES_PANEL', payload: -1 });
    }
  }, {
    key: 'newSale',
    value: function newSale() {
      // window.location.reload()
      window.location.href = '/sales/sale';
      // this.props.dispatch({type: 'NEW_SALE', payload: -1})
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var buttons = this.props.disabled ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: this.showInoicePanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Factura',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-money' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.newSale.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Nueva Venta',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-refresh' })
          )
        )
      ) : '';

      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 buttons' },
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showPayPanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Cobrar',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-credit-card' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showSalePanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Ventas del d\xEDa',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-list' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showPresalesPanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Pre-Ventas',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-list' })
          )
        ),
        buttons
      );
    }
  }]);

  return Buttons;
}(_react2.default.Component)) || _class);
exports.default = Buttons;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Buttons, 'Buttons', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/buttons/buttons.jsx');
}();

;

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /* Module dependencies */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(81);

var _searchForm = __webpack_require__(616);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(617);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var searchProducts = (_dec = (0, _reactRedux.connect)(function (store) {
  return { visible: store.searchProducts.visible };
}), _dec(_class = function (_React$Component) {
  _inherits(searchProducts, _React$Component);

  function searchProducts() {
    _classCallCheck(this, searchProducts);

    return _possibleConstructorReturn(this, (searchProducts.__proto__ || Object.getPrototypeOf(searchProducts)).apply(this, arguments));
  }

  _createClass(searchProducts, [{
    key: 'panelClick',
    value: function panelClick(ev) {

      if (ev.target.classList.contains('cd-panel')) {
        this.props.dispatch((0, _actions.hidePanel)());
        document.getElementById('productCodeInputField').focus();
        Mousetrap.unbind('esc');
      }
    }
    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var visibleOrNot = this.props.visible ? 'cd-panel cd-panel-search-product from-left is-visible' : 'cd-panel cd-panel-search-product from-left';

      return _react2.default.createElement(
        'div',
        { className: visibleOrNot, onClick: this.panelClick.bind(this) },
        _react2.default.createElement(
          'header',
          { className: 'cd-panel-header' },
          _react2.default.createElement(
            'h1',
            null,
            'B\xFAsqueda de Producto'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cd-panel-container' },
          _react2.default.createElement(
            'div',
            { className: 'cd-panel-content' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_searchForm2.default, null),
              _react2.default.createElement(_resultsTable2.default, null)
            )
          )
        )
      );
    }
  }]);

  return searchProducts;
}(_react2.default.Component)) || _class);
exports.default = searchProducts;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchProducts, 'searchProducts', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/searchPanel.jsx');
}();

;

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchForm = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    products: store.products.products,
    searchValue: store.searchProducts.searchValue
  };
}), _dec(_class = function (_React$Component) {
  _inherits(searchForm, _React$Component);

  function searchForm(props) {
    _classCallCheck(this, searchForm);

    var _this = _possibleConstructorReturn(this, (searchForm.__proto__ || Object.getPrototypeOf(searchForm)).call(this, props));

    _this.state = {
      searchVal: ''
    };
    return _this;
  }

  _createClass(searchForm, [{
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {

      if (ev.key == 'Enter') {

        ev.preventDefault();
        this.searchProductAction();
      } else {
        this.props.dispatch({ type: 'SET_PRODUCT_SEARCH_FIELD_VALUE', payload: ev.target.value });
      }
    }
  }, {
    key: 'searchProductAction',
    value: function searchProductAction() {
      this.props.dispatch((0, _actions.searchProduct)(this.props.searchValue, this.props.products));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'product-search-input' },
              'B\xFAsqueda por Descripci\xF3n:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7 col-sm-8' },
              _react2.default.createElement('input', { onKeyDown: this.inputKeyPress.bind(this), onChange: this.inputKeyPress.bind(this), value: this.props.searchValue, type: 'text', style: {
                  'width': '100%'
                }, id: 'product-search-input', className: 'form-control input-lg mousetrap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.searchProductAction.bind(this), type: 'button', id: 'product-search-btn', style: {
                    'height': '48px',
                    'width': '48px'
                  }, className: 'btn btn-success form-control marginBtnAdd2' },
                _react2.default.createElement('span', { className: 'fa fa-search' })
              )
            )
          )
        )
      );
    }
  }]);

  return searchForm;
}(_react2.default.Component)) || _class);
exports.default = searchForm;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/searchForm.jsx');
}();

;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resultsTable = (_dec = (0, _reactRedux.connect)(function (store) {
  return { matches: store.searchProducts.productsMatched, products: store.products.products };
}), _dec(_class = function (_React$Component) {
  _inherits(resultsTable, _React$Component);

  function resultsTable() {
    _classCallCheck(this, resultsTable);

    return _possibleConstructorReturn(this, (resultsTable.__proto__ || Object.getPrototypeOf(resultsTable)).apply(this, arguments));
  }

  _createClass(resultsTable, [{
    key: 'selectProduct',
    value: function selectProduct(code, ev) {
      this.props.dispatch((0, _actions.productSelectedTable)(code)); // dispatchs action according to result
      this.props.dispatch((0, _actions.hidePanel)());
      document.getElementById('productCodeInputField').focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var products = this.props.matches.map(function (item) {

        return _react2.default.createElement(
          'tr',
          { onDoubleClick: _this2.selectProduct.bind(_this2, item.code), key: item.code },
          _react2.default.createElement(
            'td',
            null,
            item.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.description
          ),
          _react2.default.createElement(
            'td',
            null,
            item.sellprice
          )
        );
      });

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'table',
              { id: 'producte-search-table', className: 'table table-bordered table-hover' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'C\xF3digo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Descripci\xF3n'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Precio'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                { className: 'product-search-table-body' },
                products
              )
            )
          )
        )
      );
    }
  }]);

  return resultsTable;
}(_react2.default.Component)) || _class);
exports.default = resultsTable;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/resultsTable.jsx');
}();

;

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /* Module dependencies */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(82);

var _searchForm = __webpack_require__(619);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(620);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var searchClients = (_dec = (0, _reactRedux.connect)(function (store) {
  return { visible: store.searchClients.visible };
}), _dec(_class = function (_React$Component) {
  _inherits(searchClients, _React$Component);

  function searchClients() {
    _classCallCheck(this, searchClients);

    return _possibleConstructorReturn(this, (searchClients.__proto__ || Object.getPrototypeOf(searchClients)).apply(this, arguments));
  }

  _createClass(searchClients, [{
    key: 'panelClick',
    value: function panelClick(ev) {

      if (ev.target.classList.contains('cd-panel')) {
        this.props.dispatch((0, _actions.hidePanel)());
        document.getElementById('productCodeInputField').focus();
        Mousetrap.unbind('esc');
      }
    }
    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var visibleOrNot = this.props.visible ? 'cd-panel cd-panel-search-client from-right is-visible' : 'cd-panel cd-panel-search-client from-right';

      return _react2.default.createElement(
        'div',
        { className: visibleOrNot, onClick: this.panelClick.bind(this) },
        _react2.default.createElement(
          'header',
          { className: 'cd-panel-header' },
          _react2.default.createElement(
            'h1',
            null,
            'B\xFAsqueda de Cliente'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cd-panel-container' },
          _react2.default.createElement(
            'div',
            { className: 'cd-panel-content' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_searchForm2.default, null),
              _react2.default.createElement(_resultsTable2.default, null)
            )
          )
        )
      );
    }
  }]);

  return searchClients;
}(_react2.default.Component)) || _class);
exports.default = searchClients;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchClients, 'searchClients', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/searchPanel.jsx');
}();

;

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchForm = (_dec = (0, _reactRedux.connect)(function (store) {
  return { clients: store.clients.clients };
}), _dec(_class = function (_React$Component) {
  _inherits(searchForm, _React$Component);

  function searchForm(props) {
    _classCallCheck(this, searchForm);

    var _this = _possibleConstructorReturn(this, (searchForm.__proto__ || Object.getPrototypeOf(searchForm)).call(this, props));

    _this.state = {
      searchVal: ''
    };
    return _this;
  }

  _createClass(searchForm, [{
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        this.searchClientAction();
      } else {
        this.state.searchVal = ev.target.value;
      }
    }
  }, {
    key: 'searchClientAction',
    value: function searchClientAction() {
      var val = this.state.searchVal;
      this.props.dispatch((0, _actions.searchClient)(val, this.props.clients));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'client-search-input' },
              'B\xFAsqueda por Nombre:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7 col-sm-8' },
              _react2.default.createElement('input', { onKeyPress: this.inputKeyPress.bind(this), onChange: this.inputKeyPress.bind(this), type: 'text', style: {
                  'width': '100%'
                }, id: 'client-search-input', className: 'form-control input-lg mousetrap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.searchClientAction.bind(this), type: 'button', id: 'client-search-btn', style: {
                    'height': '48px',
                    'width': '48px'
                  }, className: 'btn btn-success form-control marginBtnAdd2' },
                _react2.default.createElement('span', { className: 'fa fa-search' })
              )
            )
          )
        )
      );
    }
  }]);

  return searchForm;
}(_react2.default.Component)) || _class);
exports.default = searchForm;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/searchForm.jsx');
}();

;

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(259);

var _actions2 = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resultsTable = (_dec = (0, _reactRedux.connect)(function (store) {
  return { matches: store.searchClients.clientsMatched, clients: store.clients.clients };
}), _dec(_class = function (_React$Component) {
  _inherits(resultsTable, _React$Component);

  function resultsTable() {
    _classCallCheck(this, resultsTable);

    return _possibleConstructorReturn(this, (resultsTable.__proto__ || Object.getPrototypeOf(resultsTable)).apply(this, arguments));
  }

  _createClass(resultsTable, [{
    key: 'selectClient',
    value: function selectClient(code, ev) {
      this.props.dispatch((0, _actions.clientSelected)(code, this.props.clients)); // dispatchs action according to result
      this.props.dispatch((0, _actions2.hidePanel)());
      document.getElementById('productCodeInputField').focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var clients = this.props.matches.map(function (item) {

        var hasCredit = item.has_credit ? 'SI' : 'NO';

        return _react2.default.createElement(
          'tr',
          { onDoubleClick: _this2.selectClient.bind(_this2, item.code), key: item.code },
          _react2.default.createElement(
            'td',
            null,
            item.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.name + ' ' + item.last_name
          ),
          _react2.default.createElement(
            'td',
            null,
            hasCredit
          ),
          _react2.default.createElement(
            'td',
            null,
            '0'
          )
        );
      });

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'table',
              { id: 'cliente-search-table', className: 'table table-bordered table-hover' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'C\xF3digo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Nombre'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Cr\xE9dito'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Saldo'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                { className: 'client-search-table-body' },
                clients
              )
            )
          )
        )
      );
    }
  }]);

  return resultsTable;
}(_react2.default.Component)) || _class);
exports.default = resultsTable;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/resultsTable.jsx');
}();

;

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _payMethod = __webpack_require__(622);

var _payMethod2 = _interopRequireDefault(_payMethod);

var _payCahs = __webpack_require__(623);

var _payCahs2 = _interopRequireDefault(_payCahs);

var _payCard = __webpack_require__(624);

var _payCard2 = _interopRequireDefault(_payCard);

var _payCredit = __webpack_require__(625);

var _payCredit2 = _interopRequireDefault(_payCredit);

var _payOther = __webpack_require__(626);

var _payOther2 = _interopRequireDefault(_payOther);

var _paySideBar = __webpack_require__(627);

var _paySideBar2 = _interopRequireDefault(_paySideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayPanel = (_dec = (0, _reactRedux.connect)(function (store) {
  return { panelVisible: store.pay.isVisible, payMethod: store.pay.payMethod };
}), _dec(_class = function (_React$Component) {
  _inherits(PayPanel, _React$Component);

  function PayPanel() {
    _classCallCheck(this, PayPanel);

    return _possibleConstructorReturn(this, (PayPanel.__proto__ || Object.getPrototypeOf(PayPanel)).apply(this, arguments));
  }

  _createClass(PayPanel, [{
    key: 'hidePanel',
    value: function hidePanel() {

      this.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: -1 });
    }
  }, {
    key: 'render',
    value: function render() {

      var isVisible = this.props.panelVisible ? 'pay-panel is-visible' : 'pay-panel';

      var payMethod = '';
      switch (this.props.payMethod) {

        case 'CASH':
          {
            payMethod = _react2.default.createElement(_payCahs2.default, null);
            break;
          } // case

        case 'CARD':
          {
            payMethod = _react2.default.createElement(_payCard2.default, null);
            break;
          } // case

        case 'CRED':
          {
            payMethod = _react2.default.createElement(_payCredit2.default, null);
            break;
          } //  case

        case 'OTHE':
          {
            payMethod = _react2.default.createElement(_payOther2.default, null);
            break;
          } // case

      } // switch

      return _react2.default.createElement(
        'div',
        { className: isVisible },
        _react2.default.createElement(
          'div',
          { className: 'pay-panel-main' },
          _react2.default.createElement(
            'div',
            { className: 'pay-panel-header' },
            'Registrar Pago',
            _react2.default.createElement('i', { onClick: this.hidePanel.bind(this), className: 'fa fa-times', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(_payMethod2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'pay-area-container' },
            payMethod,
            _react2.default.createElement(_paySideBar2.default, null)
          )
        )
      );
    }
  }]);

  return PayPanel;
}(_react2.default.Component)) || _class);
exports.default = PayPanel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayPanel, 'PayPanel', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/payPanel.jsx');
}();

;

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayMethod = (_dec = (0, _reactRedux.connect)(function (store) {
  return { payMethod: store.pay.payMethod };
}), _dec(_class = function (_React$Component) {
  _inherits(PayMethod, _React$Component);

  function PayMethod() {
    _classCallCheck(this, PayMethod);

    return _possibleConstructorReturn(this, (PayMethod.__proto__ || Object.getPrototypeOf(PayMethod)).apply(this, arguments));
  }

  _createClass(PayMethod, [{
    key: 'clickChangePayMethod',
    value: function clickChangePayMethod(method, ev) {

      this.props.dispatch({ type: 'CHANGE_PAY_METHOD', payload: method });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-select' },
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CASH'), className: this.props.payMethod == 'CASH' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Efectivo'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CARD'), className: this.props.payMethod == 'CARD' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Tarjeta'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-credit-card', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CRED'), className: this.props.payMethod == 'CRED' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Cr\xE9dito'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-users', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.payMethod == 'OTHE' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Otro'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-share', 'aria-hidden': 'true' })
        )
      );
    }
  }]);

  return PayMethod;
}(_react2.default.Component)) || _class);
exports.default = PayMethod;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayMethod, 'PayMethod', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/payMethod.jsx');
}();

;

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(260);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCash = (_dec = (0, _reactRedux.connect)(function (store) {
  return { cashAmount: store.pay.cashAmount };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCash, _React$Component);

  function PayCash() {
    _classCallCheck(this, PayCash);

    return _possibleConstructorReturn(this, (PayCash.__proto__ || Object.getPrototypeOf(PayCash)).apply(this, arguments));
  }

  _createClass(PayCash, [{
    key: 'payAmountChanged',
    value: function payAmountChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCashAmount)(ev.target.value));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Efectivo'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'EFECTIVO:'
          ),
          _react2.default.createElement('input', { value: this.props.cashAmount, onChange: this.payAmountChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCash;
}(_react2.default.Component)) || _class);
exports.default = PayCash;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCash, 'PayCash', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/payCahs.jsx');
}();

;

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(260);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCard = (_dec = (0, _reactRedux.connect)(function (store) {
  return { cardAuth: store.pay.cardAuth, cardDigits: store.pay.cardDigits };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCard, _React$Component);

  function PayCard() {
    _classCallCheck(this, PayCard);

    return _possibleConstructorReturn(this, (PayCard.__proto__ || Object.getPrototypeOf(PayCard)).apply(this, arguments));
  }

  _createClass(PayCard, [{
    key: 'payCardAuthChanged',
    value: function payCardAuthChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCardAuth)(ev.target.value));
    }
  }, {
    key: 'payCardDigitsChanged',
    value: function payCardDigitsChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCardDigits)(ev.target.value));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Tarjeta'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            '4 DIGITOS:'
          ),
          _react2.default.createElement('input', { value: this.props.cardDigits, onChange: this.payCardDigitsChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'AUTORIZACI\xD3N:'
          ),
          _react2.default.createElement('input', { value: this.props.cardAuth, onChange: this.payCardAuthChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCard;
}(_react2.default.Component)) || _class);
exports.default = PayCard;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCard, 'PayCard', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/payCard.jsx');
}();

;

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCredit = (_dec = (0, _reactRedux.connect)(function (store) {
  return { client: store.clients.clientSelected, debt: store.clients.clientSelectedDebt };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCredit, _React$Component);

  function PayCredit() {
    _classCallCheck(this, PayCredit);

    return _possibleConstructorReturn(this, (PayCredit.__proto__ || Object.getPrototypeOf(PayCredit)).apply(this, arguments));
  }

  _createClass(PayCredit, [{
    key: 'render',
    value: function render() {
      var available = parseFloat(this.props.client.credit_limit) - parseFloat(this.props.debt);
      var clientLimit = this.props.client.has_credit ? '\u20A1 ' + parseFloat(this.props.client.credit_limit).formatMoney(2, ',', '.') : 'SIN CRÉDITO';
      var clientAvailable = this.props.client.has_credit ? '\u20A1 ' + available.formatMoney(2, ',', '.') : 'SIN CRÉDITO';

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Cr\xE9dito'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'L\xCDMITE:'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            clientLimit
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'DISPONIBLE:'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            clientAvailable
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCredit;
}(_react2.default.Component)) || _class);
exports.default = PayCredit;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCredit, 'PayCredit', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/payCredit.jsx');
}();

;

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayOther = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(PayOther, _React$Component);

  function PayOther() {
    _classCallCheck(this, PayOther);

    return _possibleConstructorReturn(this, (PayOther.__proto__ || Object.getPrototypeOf(PayOther)).apply(this, arguments));
  }

  _createClass(PayOther, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Otro'
          ),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayOther;
}(_react2.default.Component)) || _class);
exports.default = PayOther;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayOther, 'PayOther', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/payOther.jsx');
}();

;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import {saveItem, loadSale} from '../actions'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _save = __webpack_require__(628);

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var PaySideBar = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    cart: store.cart,
    payMethod: store.pay.payMethod,
    pay: store.pay,
    client: store.clients.clientSelected,
    user: store.clients.userSelected,
    debt: store.clients.clientSelectedDebt
    // sales: store.sales.sales,
    // saleId: store.sales.saleActiveId,
    // sale: store.sales.saleActive,
    // movements: store.clientmovements.movements
  };
}), _dec(_class = function (_React$Component) {
  _inherits(PaySideBar, _React$Component);

  function PaySideBar() {
    _classCallCheck(this, PaySideBar);

    return _possibleConstructorReturn(this, (PaySideBar.__proto__ || Object.getPrototypeOf(PaySideBar)).apply(this, arguments));
  }

  _createClass(PaySideBar, [{
    key: 'saveBtn',
    value: function saveBtn() {
      // const sales = this.props.sales
      var user = this.props.user;
      var sale = {
        cart: JSON.stringify(this.props.cart),
        client: JSON.stringify(this.props.client),
        user: JSON.stringify(this.props.user),
        pay: JSON.stringify(this.props.pay)
      };

      if (this.props.pay.payMethod == 'CREDIT') {
        sale.pay.debt = this.props.cart.cartTotal;
        sale.pay.payed = false;
      }

      var kwargs = {
        url: '/api/sales/',
        item: sale,
        logCode: 'SALE_CREATE',
        logDescription: 'Creación de nueva Venta',
        logModel: 'SALE',
        user: user,
        itemOld: '',
        sucessMessage: 'Venta creada Correctamente.',
        errorMessage: 'Hubo un error al crear la Venta, intente de nuevo.',
        dispatchType: 'CLEAR_SALE',
        isSale: true
      };

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch((0, _api.saveItem)(kwargs));
      this.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: '' });

      Mousetrap.reset();
    }
  }, {
    key: 'render',
    value: function render() {

      var change = 0;
      var payButtonClass = 'pay-tag tag-button';
      var total = parseFloat(this.props.cart.cartTotal);
      var cash = parseFloat(this.props.pay.cashAmount);

      switch (this.props.payMethod) {

        case 'CASH':
          {
            change = cash - total;
            payButtonClass = total > 0 && change >= 0 ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }

        case 'CARD':
          {
            var auth = this.props.pay.cardAuth;
            var digits = this.props.pay.cardDigits;
            change = parseFloat(this.props.pay.cashAmount) - parseFloat(this.props.total);
            payButtonClass = total > 0 && auth && digits ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }
        case 'CRED':
          {
            var available = parseFloat(this.props.client.credit_limit) - parseFloat(this.props.debt);
            payButtonClass = total > 0 && total <= available && this.props.client.has_credit ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }

      }

      return _react2.default.createElement(
        'div',
        { className: 'pay-side-bar' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Pago'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'TOTAL :'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            '\u20A1 ',
            this.props.cart.cartTotal.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'VUELTO :'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            '\u20A1 ',
            change.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_save2.default, { payButtonClass: payButtonClass })
        )
      );
    }
  }]);

  return PaySideBar;
}(_react2.default.Component)) || _class);
exports.default = PaySideBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaySideBar, 'PaySideBar', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/components/paySideBar.jsx');
}();

;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import {saveItem, loadSale} from '../actions'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(629);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(26);

var SaveBtn = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    cart: store.cart,
    payMethod: store.pay.payMethod,
    pay: store.pay,
    client: store.clients.clientSelected,
    user: store.clients.userSelected,
    debt: store.clients.clientSelectedDebt
    // sales: store.sales.sales,
    // saleId: store.sales.saleActiveId,
    // sale: store.sales.saleActive,
    // movements: store.clientmovements.movements
  };
}), _dec(_class = function (_React$Component) {
  _inherits(SaveBtn, _React$Component);

  function SaveBtn() {
    _classCallCheck(this, SaveBtn);

    return _possibleConstructorReturn(this, (SaveBtn.__proto__ || Object.getPrototypeOf(SaveBtn)).apply(this, arguments));
  }

  _createClass(SaveBtn, [{
    key: 'saveBtn',
    value: function saveBtn() {
      var _this3 = this;

      // const sales = this.props.sales
      var user = this.props.user;
      var payed = !(this.props.pay.payMethod == 'CRED');

      var sale = {
        cart: JSON.stringify(this.props.cart),
        client: JSON.stringify(this.props.client),
        user: JSON.stringify(this.props.user),
        pay: JSON.stringify(this.props.pay),
        pay_type: this.props.pay.payMethod,
        payed: payed,
        client_id: this.props.client.id
      };

      var creditMovement = {
        client_id: this.props.client.id,
        movement_type: 'CRED',
        amount: this.props.cart.cartTotal
      };

      var kwargs = {
        url: '/api/sales/',
        item: sale,
        logCode: 'SALE_CREATE',
        logDescription: 'Creación de nueva Venta',
        logModel: 'SALE',
        user: user,
        itemOld: '',
        sucessMessage: 'Venta creada Correctamente.',
        errorMessage: 'Hubo un error al crear la Venta, intente de nuevo.',
        creditMovement: creditMovement
      };

      var _this = this;

      var updatePromise = new Promise(function (resolve, reject) {
        _this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
        _this.props.dispatch((0, _actions.saveItem)(kwargs, resolve, reject));
      });

      updatePromise.then(function () {
        _this3.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: '' });
        _this3.props.dispatch({ type: 'FETCHING_DONE', payload: '' });
        _this3.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: '' });
        Mousetrap.reset();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { onClick: this.saveBtn.bind(this), className: this.props.payButtonClass },
        'Registrar',
        _react2.default.createElement('i', { className: 'fa fa-credit-card', 'aria-hidden': 'true' })
      );
    }
  }]);

  return SaveBtn;
}(_react2.default.Component)) || _class);
exports.default = SaveBtn;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SaveBtn, 'SaveBtn', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/save/save.jsx');
}();

;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItem = saveItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _api = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// SAVE FUNCTION (CREATE)
// ------------------------------------------------------------------------------------------
function saveItem(kwargs, resolve, reject) {
  var item = kwargs.item;
  delete item['id'];
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'post',
      url: url,
      data: item
    }).then(function (response) {

      (0, _api.saveLog)(logCode, logModel, itemOld, item, logDescription, user);

      // IF THE SALE IS A CREDIT ONE SAVE CREDIT MOVEMENT
      if (response.data.pay_type == 'CRED') {
        var creditMovement = kwargs.creditMovement;
        creditMovement.bill_id = response.data.id;
        creditMovement.description = 'Venta de cr\xE9dito #' + response.data.bill_number;
        saveCreditMovement(creditMovement, response.data, kwargs, dispatch, resolve, reject);

        // IF IS CASH THEN JUST RESOLVE
      } else {
        dispatch({ type: 'CLEAR_SALE', payload: '' });
        dispatch({ type: 'SET_SALE', payload: response.data });
        _alertifyjs2.default.alert('Completado', kwargs.sucessMessage);
        resolve();
      }
    }).catch(function (err) {
      console.log(err);
      reject();
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
} // ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------


function saveCreditMovement(movement, sale, kwargs, dispatch, resolve, reject) {
  (0, _axios2.default)({
    method: 'post',
    url: '/api/creditmovements/',
    data: movement
  }).then(function (response) {
    dispatch({ type: 'CLEAR_SALE', payload: '' });
    dispatch({ type: 'SET_SALE', payload: sale });
    _alertifyjs2.default.alert('Completado', kwargs.sucessMessage);
    resolve();
  }).catch(function (err) {
    console.log(err.response.data);
    _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    reject();
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/save/actions.js');

  __REACT_HOT_LOADER__.register(saveCreditMovement, 'saveCreditMovement', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/save/actions.js');
}();

;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _api = __webpack_require__(4);

var _fullInvoice = __webpack_require__(631);

var _fullInvoice2 = _interopRequireDefault(_fullInvoice);

var _compactInvoice = __webpack_require__(637);

var _compactInvoice2 = _interopRequireDefault(_compactInvoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvoicePanel = (_dec = (0, _reactRedux.connect)(function (store) {
  return { panelVisible: store.invoice.isVisible, isFull: store.invoice.isFull };
}), _dec(_class = function (_React$Component) {
  _inherits(InvoicePanel, _React$Component);

  function InvoicePanel() {
    _classCallCheck(this, InvoicePanel);

    return _possibleConstructorReturn(this, (InvoicePanel.__proto__ || Object.getPrototypeOf(InvoicePanel)).apply(this, arguments));
  }

  _createClass(InvoicePanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _api.loadGlobalConfig)('company', false, 'FETCH_CONFIG_FULFILLED', 'FETCH_CONFIG_REJECTED'));
    }
  }, {
    key: 'hidePanel',
    value: function hidePanel() {

      this.props.dispatch({ type: 'HIDE_INVOICE_PANEL', payload: -1 });
      // printDiv('full-invoice-print')
    }
  }, {
    key: 'togglePanel',
    value: function togglePanel() {

      this.props.dispatch({ type: 'TOGGLE_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'toggleInvoice',
    value: function toggleInvoice() {

      this.props.dispatch({ type: 'TOGGLE_INVOICE_DESING', payload: -1 });
    }
  }, {
    key: 'printPanel',
    value: function printPanel() {
      window.printDiv('invoice-print');
    }
  }, {
    key: 'render',
    value: function render() {

      var isVisible = this.props.panelVisible ? 'invoice-panel is-visible' : 'invoice-panel';
      var isFullClass = this.props.isFull ? '' : ' compact-invoice-on';

      var componentToMount = this.props.isFull ? _react2.default.createElement(_fullInvoice2.default, null) : _react2.default.createElement(_compactInvoice2.default, null);

      return _react2.default.createElement(
        'div',
        { className: isVisible },
        _react2.default.createElement(
          'div',
          { className: 'invoice-panel-main' + isFullClass },
          _react2.default.createElement(
            'div',
            { className: 'invoice-panel-header' },
            _react2.default.createElement(
              'div',
              null,
              'Factura de Venta'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('i', { onClick: this.hidePanel.bind(this), className: 'fa fa-times', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { onClick: this.togglePanel.bind(this), className: 'fa fa-file-text-o', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { onClick: this.printPanel.bind(this), className: 'fa fa-print', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'invoice-print', className: 'invoice-panel-container' + isFullClass },
            componentToMount
          )
        )
      );
    }
  }]);

  return InvoicePanel;
}(_react2.default.Component)) || _class);
exports.default = InvoicePanel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InvoicePanel, 'InvoicePanel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/invoicePanel/invoicePanel.jsx');
}();

;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(632);

var _header2 = _interopRequireDefault(_header);

var _data = __webpack_require__(633);

var _data2 = _interopRequireDefault(_data);

var _table = __webpack_require__(634);

var _table2 = _interopRequireDefault(_table);

var _totals = __webpack_require__(635);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(636);

var _notes2 = _interopRequireDefault(_notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullInvoice = function (_React$Component) {
  _inherits(FullInvoice, _React$Component);

  function FullInvoice() {
    _classCallCheck(this, FullInvoice);

    return _possibleConstructorReturn(this, (FullInvoice.__proto__ || Object.getPrototypeOf(FullInvoice)).apply(this, arguments));
  }

  _createClass(FullInvoice, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_data2.default, null),
        _react2.default.createElement(_table2.default, null),
        _react2.default.createElement(_totals2.default, null),
        _react2.default.createElement(_notes2.default, null)
      );
    }
  }]);

  return FullInvoice;
}(_react2.default.Component);

exports.default = FullInvoice;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FullInvoice, 'FullInvoice', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/fullInvoice.jsx');
}();

;

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sale: store.sales.saleActive,
    company: store.config.company
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      // Credit or cash
      var headertext = this.props.sale.pay.payMethod == 'CREDIT' ? 'Factura de crédito' : 'Factura de contado';
      // LOGO
      var logo = this.props.company.logo || '';
      var logoWidth = this.props.company.logoWidth || '130px';
      var logoUrl = '/media/logos/' + logo;

      // BILL DATA
      var headerName = this.props.company.comercial_name || '';
      var headerName2 = this.props.company.legal_name || '';

      var tels = this.props.company.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.company.idType || 'PERSON';
      var id = this.props.company.id || '';
      var idText = idType == 'JURIDI' ? 'C\xE9d Jurid No ' + id : 'C\xE9d No ' + id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'full-invoice-header' },
          _react2.default.createElement(
            'div',
            { className: 'full-invoice-header-logo' },
            _react2.default.createElement('img', { style: { 'width': '' + logoWidth }, src: logoUrl })
          ),
          _react2.default.createElement(
            'div',
            { className: 'full-invoice-header-info' },
            _react2.default.createElement(
              'h2',
              null,
              headerName.toUpperCase()
            ),
            _react2.default.createElement(
              'h3',
              null,
              headerName2
            ),
            _react2.default.createElement(
              'h3',
              null,
              idText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.country || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              telsText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.email || ''
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'full-invoice-separator' },
          _react2.default.createElement('span', null),
          _react2.default.createElement(
            'h1',
            null,
            headertext
          ),
          _react2.default.createElement('span', null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/components/header.jsx');
}();

;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = (_dec = (0, _reactRedux.connect)(function (store) {
  return { sale: store.sales.saleActive };
}), _dec(_class = function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {

      var sale = this.props.sale;
      var date = sale.created ? ('0' + sale.created.getDate()).slice(-2) + '/\n      ' + ('0' + (sale.created.getMonth() + 1)).slice(-2) + '/\n      ' + sale.created.getFullYear() : '01/01/1970';
      var client = sale.client ? sale.client.code + ' - ' + sale.client.name + ' ' + sale.client.last_name : '00 - Cliente de Contado';
      var clientAdress = sale.client.adress ? _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'clientAdress' },
          'DIRECCI\xD3N: ',
          sale.client.adress
        )
      ) : _react2.default.createElement('tr', null);
      var id = sale.bill_number ? sale.bill_number : '00001';

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-data' },
        _react2.default.createElement(
          'table',
          { className: 'client-table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'CLIENTE:'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                client
              )
            ),
            clientAdress
          )
        ),
        _react2.default.createElement(
          'table',
          { className: 'datenum-table' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'N. de factura:'
              ),
              _react2.default.createElement(
                'td',
                null,
                ('00000' + id).slice(-5)
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Fecha:'
              ),
              _react2.default.createElement(
                'td',
                null,
                date
              )
            )
          )
        )
      );
    }
  }]);

  return Data;
}(_react2.default.Component)) || _class);
exports.default = Data;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Data, 'Data', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/components/data.jsx');
}();

;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_dec = (0, _reactRedux.connect)(function (store) {
  return { inCart: store.cart.cartItems, globalDiscount: store.cart.globalDiscount };
}), _dec(_class = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var cartItems = this.props.inCart;
      var globalDiscount = this.props.globalDiscount ? _react2.default.createElement(
        'td',
        { className: 'right-in-table' },
        this.props.globalDiscount
      ) : _react2.default.createElement(
        'td',
        { style: { 'display': 'none' } },
        '-'
      );
      var items = cartItems.length ? cartItems.map(function (item) {
        var taxesText = item.product.use_taxes ? 'G' : 'E';

        return _react2.default.createElement(
          'tr',
          { key: item.uuid },
          _react2.default.createElement(
            'td',
            null,
            item.product.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.product.description
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            item.qty
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            parseFloat(item.priceToUse).formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            item.discount
          ),
          globalDiscount,
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            taxesText
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            item.subTotalNoDiscount.formatMoney(2, ',', '.')
          )
        );
      }) : _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          '--'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        )
      );

      var globalDiscountRow = this.props.globalDiscount ? _react2.default.createElement(
        'th',
        { className: 'right-in-table' },
        'Des2 %'
      ) : _react2.default.createElement(
        'th',
        { style: { 'display': 'none' } },
        '-'
      );

      return _react2.default.createElement(
        'table',
        { className: 'full-invoice-table table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'C\xF3digo'
            ),
            _react2.default.createElement(
              'th',
              { className: 'description-row' },
              'Descripci\xF3n'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Cantidad'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'P.U'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Des%'
            ),
            globalDiscountRow,
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'IV'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Precio'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          items
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/components/table.jsx');
}();

;

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals() {
    _classCallCheck(this, Totals);

    return _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).apply(this, arguments));
  }

  _createClass(Totals, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-totals' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sub-total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Descuento'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.discountTotal.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'IV'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.taxes.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              { className: 'total-row' },
              _react2.default.createElement(
                'th',
                null,
                'Total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.total.formatMoney(2, ',', '.')
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/components/totals.jsx');
}();

;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    _classCallCheck(this, Notes);

    return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-notes' },
        _react2.default.createElement(
          'h1',
          null,
          'Notas:'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Factura autorizada mediante la resolucion N1197 del 12/08/1997 del DGDT.'
        )
      );
    }
  }]);

  return Notes;
}(_react2.default.Component);

exports.default = Notes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notes, 'Notes', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/fullInvoice/components/notes.jsx');
}();

;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(638);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(639);

var _table2 = _interopRequireDefault(_table);

var _data = __webpack_require__(640);

var _data2 = _interopRequireDefault(_data);

var _totals = __webpack_require__(641);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(642);

var _notes2 = _interopRequireDefault(_notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompactInvoice = function (_React$Component) {
  _inherits(CompactInvoice, _React$Component);

  function CompactInvoice() {
    _classCallCheck(this, CompactInvoice);

    return _possibleConstructorReturn(this, (CompactInvoice.__proto__ || Object.getPrototypeOf(CompactInvoice)).apply(this, arguments));
  }

  _createClass(CompactInvoice, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_data2.default, null),
        _react2.default.createElement(_table2.default, null),
        _react2.default.createElement(_totals2.default, null),
        _react2.default.createElement(_notes2.default, null)
      );
    }
  }]);

  return CompactInvoice;
}(_react2.default.Component);

exports.default = CompactInvoice;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CompactInvoice, 'CompactInvoice', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/compactInvoice.jsx');
}();

;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sale: store.sales.saleActive,
    company: store.config.company
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {

      var headertext = this.props.sale.pay.payMethod == 'CREDIT' ? 'Factura de crédito' : 'Factura de contado';

      // BILL DATA
      var headerName = this.props.company.comercialName || '';

      var headerName2 = this.props.company.legalName || '';

      var tels = this.props.company.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.company.idType || '';
      var id = this.props.company.id || 'PERSON';
      var idText = idType == 'JURIDI' ? 'C\xE9d Jurid No ' + id : 'C\xE9d No ' + id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-header' },
          _react2.default.createElement(
            'div',
            { className: 'compact-invoice-header-info' },
            _react2.default.createElement(
              'h2',
              null,
              headerName
            ),
            _react2.default.createElement(
              'h3',
              null,
              headerName2
            ),
            _react2.default.createElement(
              'h3',
              null,
              idText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.country || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              telsText
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-separator' },
          _react2.default.createElement('span', null),
          _react2.default.createElement(
            'h1',
            null,
            headertext
          ),
          _react2.default.createElement('span', null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/components/header.jsx');
}();

;

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_dec = (0, _reactRedux.connect)(function (store) {
  return { inCart: store.cart.cartItems, globalDiscount: store.cart.globalDiscount };
}), _dec(_class = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var cartItems = this.props.inCart;
      var items = cartItems.map(function (item) {

        var taxesText = item.product.useTaxes ? 'G' : 'E';

        return _react2.default.createElement(
          'tr',
          { key: item.uuid },
          _react2.default.createElement(
            'td',
            null,
            item.qty
          ),
          _react2.default.createElement(
            'td',
            null,
            item.product.description
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            taxesText
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            item.subTotalNoDiscount.formatMoney(2, ',', '.')
          )
        );
      });

      return _react2.default.createElement(
        'table',
        { className: 'compact-invoice-table table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Cant'
            ),
            _react2.default.createElement(
              'th',
              { className: 'description-row' },
              'Articulo'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'IV'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Total'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          { className: '' },
          items
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/components/table.jsx');
}();

;

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = (_dec = (0, _reactRedux.connect)(function (store) {
  return { sale: store.sales.saleActive };
}), _dec(_class = function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {
      var sale = this.props.sale;
      var date = sale.created ? ('0' + sale.created.getDate()).slice(-2) + '/\n      ' + ('0' + (sale.created.getMonth() + 1)).slice(-2) + '/\n      ' + sale.created.getFullYear() : '01/01/1970';
      var client = sale.client ? sale.client.code + ' - ' + sale.client.name + ' ' + sale.client.last_name : '00 - Cliente de Contado';
      var id = sale.bill_number ? sale.bill_number : '0001';
      var clientAdress = sale.client.adress ? _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Direc:'
        ),
        _react2.default.createElement(
          'td',
          null,
          sale.client.adress
        )
      ) : _react2.default.createElement('tr', null);

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-data' },
        _react2.default.createElement(
          'table',
          { className: 'datenum-table' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Fecha:'
              ),
              _react2.default.createElement(
                'td',
                null,
                date
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Factura:'
              ),
              _react2.default.createElement(
                'td',
                null,
                ('00000' + id).slice(-5)
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Cliente:'
              ),
              _react2.default.createElement(
                'td',
                null,
                client
              )
            ),
            clientAdress
          )
        )
      );
    }
  }]);

  return Data;
}(_react2.default.Component)) || _class);
exports.default = Data;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Data, 'Data', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/components/data.jsx');
}();

;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals() {
    _classCallCheck(this, Totals);

    return _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).apply(this, arguments));
  }

  _createClass(Totals, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-totals' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sub-total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Descuento'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.discountTotal.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'IV'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.taxes.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              { className: 'total-row' },
              _react2.default.createElement(
                'th',
                null,
                'Total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.total.formatMoney(2, ',', '.')
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/components/totals.jsx');
}();

;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    _classCallCheck(this, Notes);

    return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-notes' },
        _react2.default.createElement(
          'h1',
          null,
          'Notas:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-notes-content' },
          _react2.default.createElement(
            'div',
            null,
            'Factura autorizada mediante la resolucion N1197 del 12/08/1997 del DGDT.'
          )
        )
      );
    }
  }]);

  return Notes;
}(_react2.default.Component);

exports.default = Notes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notes, 'Notes', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/compactInvoice/components/notes.jsx');
}();

;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _actions = __webpack_require__(644);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    topBarToggleVisible: store.layout.topBarToggleVisible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'menuClick',
    value: function menuClick(ev) {

      (0, _actions.toggleLayout)();
    }
  }, {
    key: 'logOutClick',
    value: function logOutClick() {

      // ALERTIFY CONFIRM
      _alertifyjs2.default.confirm('Cerrar Sesión', '\xBFDesea Cerrar su sesi\xF3n en el sistema?', function () {
        window.location.replace('/logout');
      }, function () {
        return true;
      }).set('labels', {
        ok: 'Cerrar',
        cancel: 'Permanecer'
      });
    }
  }, {
    key: 'homeClick',
    value: function homeClick() {
      // ALERTIFY CONFIRM
      _alertifyjs2.default.confirm('Ir al menú Principal', '\xBFDesea ir al men\xFA principal?', function () {
        window.location.replace('/');
      }, function () {
        return true;
      }).set('labels', {
        ok: 'Ir',
        cancel: 'Permanecer'
      });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var buttonClass = this.props.topBarToggleVisible ? 'topBar-button topBar-button-collapse visible' : 'topBar-button topBar-button-collapse';

      return _react2.default.createElement(
        'div',
        { className: 'topBar' },
        _react2.default.createElement(
          'div',
          { onClick: this.menuClick.bind(this), className: buttonClass },
          _react2.default.createElement('span', { className: 'fa fa-bars' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'topBar-right' },
          _react2.default.createElement(
            'div',
            { onClick: this.homeClick.bind(this), className: 'topBar-item topBar-item-config' },
            _react2.default.createElement('span', { className: 'fa fa-home' })
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.logOutClick.bind(this), className: 'topBar-button topBar-button-logout' },
            _react2.default.createElement('span', { className: 'fa fa-power-off' })
          )
        )
      );
    }
  }]);

  return TopBar;
}(_react2.default.Component)) || _class);
exports.default = TopBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/topBar/topBar.jsx');
}();

;

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleLayout = toggleLayout;
exports.toggleConfigBar = toggleConfigBar;
function toggleLayout() {

  var mainContainer = document.getElementById('mainContainer');
  var sideMenu = document.getElementById('sideMenu');

  if (mainContainer.classList.contains('pulled')) {

    mainContainer.classList.remove('pulled');
    sideMenu.classList.remove('pulled');
    return true;
  }

  mainContainer.classList.add('pulled');
  sideMenu.classList.add('pulled');
}

function toggleConfigBar() {

  var configBar = document.getElementById('configBar');

  if (configBar.classList.contains('not-visible')) {

    configBar.classList.remove('not-visible');
    return true;
  }

  configBar.classList.add('not-visible');
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleLayout, 'toggleLayout', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/topBar/actions.js');

  __REACT_HOT_LOADER__.register(toggleConfigBar, 'toggleConfigBar', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/topBar/actions.js');
}();

;

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */

// import ComposedItem from './components/items/composed.jsx'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(646);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(647);

var _user2 = _interopRequireDefault(_user);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideMenu = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sideMenuVisible: store.layout.sideMenuVisible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('loader').classList.remove('loader');
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      // const childProducts = [
      //   {
      //     text: 'Productos',
      //     class: 'fa-gift',
      //     href: '/admin/products'
      //   }, {
      //     text: 'Familias',
      //     class: 'fa-list',
      //     href: '/admin/productdepartments'
      //   }, {
      //     text: 'Sub-Familias',
      //     class: 'fa-outdent',
      //     href: '/admin/productsubdepartments'
      //   }
      // ]

      // const title = this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || 'APP'
      var sideMenuClass = this.props.sideMenuVisible ? 'sideMenu' : 'sideMenu hiddenByApp';
      return _react2.default.createElement(
        'div',
        { id: 'sideMenu', className: sideMenuClass },
        _react2.default.createElement(_user2.default, null),
        _react2.default.createElement(_search2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-wrapper col-xs-12' },
          _react2.default.createElement(
            'ul',
            { className: 'sideMenu-items' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales' },
                _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
                'Inicio'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/sale' },
                _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
                'Nueva Venta'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/proforma' },
                _react2.default.createElement('span', { className: 'fa fa-user' }),
                'Nueva Cotizaci\xF3n'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/presale' },
                _react2.default.createElement('span', { className: 'fa fa-user' }),
                'Nueva Preventa'
              )
            )
          )
        )
      );
    }
  }]);

  return SideMenu;
}(_react2.default.Component)) || _class);
exports.default = SideMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SideMenu, 'SideMenu', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/sideMenu/sideMenu.jsx');
}();

;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Module dependencies */


var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',


    // Main Layout
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'sideMenu-search col-xs-12' },
        _react2.default.createElement('input', { type: 'text', placeholder: 'Buscar...' })
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, 'Search', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/sideMenu/components/search/search.jsx');
}();

;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    profile: store.user.profile
  };
}), _dec(_class = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var avatar = this.props.profile.avatar ? '/media/' + this.props.profile.avatar : '/media/default/profile.jpg';

      var name = this.props.user.first_name ? this.props.user.first_name : this.props.user.username ? this.props.user.username : '';

      var lastName = this.props.user.last_name ? this.props.user.last_name : '';

      var fullName = name + ' ' + lastName;
      if (fullName.length > 22) fullName = fullName.substring(0, 22);

      return _react2.default.createElement(
        'div',
        { className: 'sideMenu-user col-xs-12 ' },
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-user-avatar' },
          _react2.default.createElement('img', { src: avatar })
        ),
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-user-name' },
          _react2.default.createElement(
            'span',
            null,
            fullName
          ),
          _react2.default.createElement('hr', null)
        )
      );
    }
  }]);

  return User;
}(_react2.default.Component)) || _class);
exports.default = User;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(User, 'User', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/sideMenu/components/user/user.jsx');
}();

;

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxLogger = __webpack_require__(40);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(42);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(649);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, _reduxLogger2.default);

// const middleware = applyMiddleware(promise(), thunk)

var _default = (0, _redux.createStore)(_reducer2.default, middleware);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Volumes/DATOS/github/iFact3/frontend/sales/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/sales/store.js');
}();

;

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reducer = __webpack_require__(80);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(650);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(651);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(652);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(653);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(654);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(655);

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = __webpack_require__(656);

var _reducer16 = _interopRequireDefault(_reducer15);

var _reducer17 = __webpack_require__(657);

var _reducer18 = _interopRequireDefault(_reducer17);

var _reducer19 = __webpack_require__(658);

var _reducer20 = _interopRequireDefault(_reducer19);

var _reducer21 = __webpack_require__(659);

var _reducer22 = _interopRequireDefault(_reducer21);

var _reducer23 = __webpack_require__(660);

var _reducer24 = _interopRequireDefault(_reducer23);

var _reducer25 = __webpack_require__(661);

var _reducer26 = _interopRequireDefault(_reducer25);

var _reducer27 = __webpack_require__(662);

var _reducer28 = _interopRequireDefault(_reducer27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  fetching: _reducer2.default,
  layout: _reducer4.default,
  user: _reducer6.default,
  cart: _reducer8.default,
  clients: _reducer10.default,
  products: _reducer12.default,
  sale: _reducer14.default,
  messages: _reducer16.default,
  searchClients: _reducer18.default,
  searchProducts: _reducer20.default,
  pay: _reducer22.default,
  invoice: _reducer24.default,
  sales: _reducer26.default,
  config: _reducer28.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/sales/reducer.js');
}();

;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  topBarToggleVisible: false,
  sideMenuVisible: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SALE_PANEL_MOUNTED':
      {
        return _extends({}, state, {
          topBarToggleVisible: true,
          sideMenuVisible: false
        });
      } // case

    case 'HOME_PANEL_MOUNTED':
      {
        return _extends({}, state, {
          topBarToggleVisible: false,
          sideMenuVisible: true
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/layout/reducer.js');
}();

;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  user: {},
  profile: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_PROFILE_FULFILLED':
      {
        return _extends({}, state, {
          user: action.payload.user,
          profile: action.payload.profile
        });
      } // case

    case 'FETCH_PROFILE_REJECTED':
      {
        return _extends({}, state, {
          user: {},
          profile: {}
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/user/reducer.js');
}();

;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stateConst = {
  editable: true,
  created: '',
  updated: '',
  isNull: false,
  cartHasItems: false, // var to check if cart has items
  cartItems: [], // the list of items in cart
  cartSubtotalNoDiscount: 0, // subtotal without discount and taxes
  cartSubtotal: 0, // the subtotal including discounts without taxes
  cartTaxes: 0, // total amount of taxes in cart in currency
  cartTotal: 0, // cart total after discount and taxes
  globalDiscount: 0, // discount %
  discountTotal: 0, // discount in currency
  cartItemActive: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          editable: true,
          created: '',
          updated: '',
          isNull: false,
          cartHasItems: false, // var to check if cart has items
          cartItems: [], // the list of items in cart
          cartSubtotalNoDiscount: 0, // subtotal without discount and taxes
          cartSubtotal: 0, // the subtotal including discounts without taxes
          cartTaxes: 0, // total amount of taxes in cart in currency
          cartTotal: 0, // cart total after discount and taxes
          globalDiscount: 0, // discount %
          discountTotal: 0, // discount in currency
          cartItemActive: false
        });
      }

    case 'ADD_TO_CART':
      {

        return _extends({}, state, {
          cartHasItems: true,
          cartItems: [].concat(_toConsumableArray(state.cartItems), [action.payload])
        });
      } // case

    case 'REMOVE_FROM_CART':
      {

        var newCart = [].concat(_toConsumableArray(state.cartItems));

        newCart.splice(action.payload, 1);

        var itemsLeftInCart = newCart.length > 0;
        // ? true
        // : false

        return _extends({}, state, {
          cartHasItems: itemsLeftInCart,
          cartItems: newCart
        });
      } // case

    case 'UPDATE_CART':
      {

        var _newCart = [].concat(_toConsumableArray(state.cartItems));
        _newCart[action.payload.index] = action.payload.item;

        return _extends({}, state, {
          cartItems: _newCart
        });
      } // case

    case 'UPDATE_CART_ITEM_LOTE':
      {

        var _newCart2 = [].concat(_toConsumableArray(state.cartItems));
        _newCart2[action.payload.index]['lote'] = action.payload.lote;

        return _extends({}, state, {
          cartItems: _newCart2
        });
      } // case

    case 'UPDATE_CART_TOTALS':
      {

        return _extends({}, state, {
          cartSubtotal: action.payload.subtotal,
          cartTaxes: action.payload.taxes,
          cartTotal: action.payload.total,
          discountTotal: action.payload.discountTotal,
          cartSubtotalNoDiscount: action.payload.subTotalNoDiscount
        });
      } // case

    case 'SET_GLOBAL_DISCOUNT':
      {

        return _extends({}, state, {
          globalDiscount: action.payload
        });
      } // case

    case 'REPLACE_CART':
      {
        return _extends({}, state, {
          cartItems: action.payload
        });
      }

    case 'UPDATE_LINE_DISCOUNT':
      {
        var _newCart3 = [].concat(_toConsumableArray(state.cartItems));
        _newCart3[action.payload.index].discount = action.payload.value;

        return _extends({}, state, {
          cartItems: _newCart3
        });
      }

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'LOADED_PROFORMA':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'LOADED_PRESALE':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'SET_PRODUCT_ACTIVE_IN_CART':
      {
        return _extends({}, state, {
          cartItemActive: action.payload
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/cart/reducer.js');
}();

;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var clientSelectedModel = {
  code: '0000',
  clientType: 'GENERAL',
  created: '',
  credit_days: 0,
  credit_limit: 0,
  docType: 'CLIENT',
  has_credit: false,
  id: '000000000',
  last_name: 'Contado',
  name: 'Cliente',
  updated: '',
  saleLoaded: false,
  _id: 0
};

var userSelectedModel = {
  user: '0000',
  name: '',
  last_name: '',
  id: '0000',
  _id: 0
};

var stateConst = {
  clientsFetching: false,
  clientsFected: false,
  clientsFetchError: '',
  clients: [],
  users: [],
  clientSelected: clientSelectedModel,
  userSelected: userSelectedModel,
  clientSelectedDebt: 0
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          clientSelected: clientSelectedModel,
          userSelected: userSelectedModel
        });
      }

    case 'FETCH_CLIENTS':
      {
        return _extends({}, state, {
          clientsFetching: true
        });
      } // case

    case 'FETCH_CLIENTS_REJECTED':
      {
        return _extends({}, state, {
          clientsFetching: false,
          clientsFetchError: action.payload
        });
      } // case

    case 'FETCH_CLIENTS_FULFILLED':
      {
        return _extends({}, state, {
          clientsFetching: false,
          clientsFected: true,
          clients: action.payload
        });
      } // case

    case 'CLIENT_SELECTED':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      } // case

    // ******** USERS ********
    case 'FETCH_USERS_REJECTED':
      {
        return _extends({}, state, {
          userSelected: userSelectedModel
        });
      } // case

    case 'FETCH_USERS_FULFILLED':
      {
        return _extends({}, state, {
          users: action.payload
        });
      } // case

    case 'USER_SELECTED':
      {
        return _extends({}, state, {
          userSelected: action.payload.user
        });
      } // case

    case 'USER_CLEAR':
      {
        return _extends({}, state, {
          userSelected: userSelectedModel
        });
      } // case

    // ******** USERS ********

    case 'SET_CLIENT_DEBT':
      {
        return _extends({}, state, {
          clientSelectedDebt: parseFloat(action.payload.debt)
        });
      }

    case 'NEW_SALE':
      {
        var clients = state.clients;
        state = stateConst;
        return _extends({}, state, { clients: clients
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client,
          userSelected: action.payload.user
        });
      }

    case 'LOADED_PRESALE':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      }

    case 'LOADED_PROFORMA':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      }

    case 'LOADED_TRUE':
      {
        var client = state.clientSelected;
        client.saleLoaded = true;
        return _extends({}, state, {
          clientSelected: client
        });
      }

    case 'LOADED_FALSE':
      {
        var _client = state.clientSelected;
        _client.saleLoaded = false;
        return _extends({}, state, {
          clientSelected: _client
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientSelectedModel, 'clientSelectedModel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(userSelectedModel, 'userSelectedModel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/clients/reducer.js');
}();

;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  products: {},
  inputVal: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_PRODUCTS_REJECTED':
      {
        return _extends({}, state, {
          products: {}
        });
      } // case

    case 'FETCH_PRODUCTS_FULFILLED':
      {
        return _extends({}, state, {
          products: action.payload
        });
      } // case

    case 'SET_PRODUCT_FIELD_VALUE':
      {
        return _extends({}, state, {
          inputVal: action.payload
        });
      } // case

    case 'CLEAR_PRODUCT_FIELD_VALUE':
      {
        return _extends({}, state, {
          inputVal: ''
        });
      } // case

    case 'NEW_SALE':
      {
        var products = state.products;
        state = stateConst;
        return _extends({}, state, { products: products
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/reducer.js');
}();

;

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  fullWidth: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'TOGGLE_FULL_WIDTH':
      {
        var width = !state.fullWidth;
        return _extends({}, state, {
          fullWidth: width
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/reducer.js');
}();

;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateConst = {
  messages: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'PRODUCT_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE PRODUCTO!', 'El código ingresado no existe en el sistema, ingrese un código válido');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'NOT_FOUND_SALE':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE LA VENTA!', 'La venta #' + action.payload + ' no existe, o hay un problema para cargarla, por favor intente de nuevo.');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'PRODUCT_IN_CART_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR!', 'Hubo un error al encontrar el producto en la lista de productos agregados,por favor intente de nuevo, si el error persiste comuníquese con soporte técnico.');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'FETCH_PRODUCTS_REJECTED':
      {
        _alertifyjs2.default.alert('ERROR AL CARGAR LOS PRODUCTOS!', 'Hubo un error al cargar los productos, por favor intente\n                          de nuevo, si el error persiste comun\xEDquese con soporte t\xE9cnico.\n                          ERROR: ' + action.payload);

        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'CLIENT_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE CLIENTE!', 'El cliente con el código ingresado no existe en el sistema, ingrese un código válido');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'FETCH_CLIENTS_REJECTED':
      {
        _alertifyjs2.default.alert('ERROR AL CARGAR LOS CLIENTES!', 'Hubo un error al cargar los clientes, por favor intente\n                          de nuevo, si el error persiste comun\xEDquese con soporte t\xE9cnico.\n                          ERROR: ' + action.payload);

        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/messages/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/messages/reducer.js');
}();

;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  visible: false,
  clientsMatched: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SEARCH_CLIENT_TOGGLE_PANEL':
      {
        var visible = !state.visible;
        return _extends({}, state, {
          visible: visible
        });
      } // case

    case 'CLIENT_SHOW_PANEL':
      {
        return _extends({}, state, {
          visible: true
        });
      } // case
    case 'CLIENT_HIDE_PANEL':
      {
        return _extends({}, state, {
          visible: false
        });
      } // case
    case 'CLIENT_SEARCH_SUCCESS':
      {
        return _extends({}, state, {
          clientsMatched: action.payload
        });
      } // case
    case 'CLIENT_SEARCH_FAIL':
      {
        return _extends({}, state, {
          clientsMatched: []
        });
      } // case
    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/reducer.js');
}();

;

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  visible: false,
  productsMatched: [],
  searchValue: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_PRODUCT_SEARCH_FIELD_VALUE':
      {
        return _extends({}, state, {
          searchValue: action.payload
        });
      } // case

    case 'CLEAR_PRODUCT_SEARCH_FIELD_VALUE':
      {
        return _extends({}, state, {
          searchValue: ''
        });
      } // case

    case 'SEARCH_PRODUCT_TOGGLE_PANEL':
      {
        var visible = !state.visible;
        return _extends({}, state, {
          visible: visible,
          searchValue: ''
        });
      } // case

    case 'PRODUCT_SHOW_PANEL':
      {
        return _extends({}, state, {
          visible: true
        });
      } // case
    case 'PRODUCT_HIDE_PANEL':
      {
        return _extends({}, state, {
          visible: false
        });
      } // case
    case 'PRODUCT_SEARCH_SUCCESS':
      {
        return _extends({}, state, {
          productsMatched: action.payload
        });
      } // case
    case 'PRODUCT_SEARCH_FAIL':
      {
        return _extends({}, state, {
          productsMatched: []
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/reducer.js');
}();

;

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  isVisible: false,
  payMethod: 'CASH',
  cashAmount: 0,
  cardDigits: '',
  cardAuth: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SHOW_PAY_PANEL':
      {
        return _extends({}, state, {
          isVisible: true
        });
      } // case

    case 'HIDE_PAY_PANEL':
      {
        return _extends({}, state, {
          isVisible: false
        });
      } // case

    case 'CHANGE_PAY_METHOD':
      {
        return _extends({}, state, {
          payMethod: action.payload
        });
      } // case

    case 'UPDATE_CASH_AMOUNT':
      {
        return _extends({}, state, {
          cashAmount: action.payload
        });
      }

    case 'UPDATE_CARD_AUTH':
      {
        return _extends({}, state, {
          cardAuth: action.payload
        });
      }

    case 'UPDATE_CARD_DIGITS':
      {
        return _extends({}, state, {
          cardDigits: action.payload
        });
      }

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          payMethod: action.payload.pay.payMethod,
          cashAmount: action.payload.pay.cashAmount,
          cardDigits: action.payload.pay.cardDigits,
          cardAuth: action.payload.pay.cardAuth
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/sale/pay/reducer.js');
}();

;

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  isVisible: false,
  isFull: true,
  defaultDesing: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SHOW_INVOICE_PANEL':
      {
        return _extends({}, state, {
          isVisible: true
        });
      } // case

    case 'HIDE_INVOICE_PANEL':
      {
        return _extends({}, state, {
          isVisible: false
        });
      } // case

    case 'TOGGLE_INVOICE_PANEL':
      {
        var fullOrNot = state.isFull;
        return _extends({}, state, {
          isFull: !fullOrNot
        });
      } // case

    case 'TOGGLE_INVOICE_DESING':
      {
        var desingOrNot = state.defaultDesing;
        return _extends({}, state, {
          defaultDesing: !desingOrNot
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/invoice/reducer.js');
}();

;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var saleActiveModel = {
  id: 0,
  bill_number: '',
  cart: {},
  client: '',
  user: '',
  client_id: '',
  pay: {},
  payed: false,
  pay_type: 'CASH'

};

var stateConst = {
  sales: [],
  saleActive: saleActiveModel,
  completed: false,
  saleActiveId: 0,
  isSalesPanelVisible: false,
  isPresalesPanelVisible: false

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          saleActive: saleActiveModel,
          completed: false,
          saleActiveId: 0,
          isSalesPanelVisible: false,
          isPresalesPanelVisible: false
        });
      } // case

    case 'SHOW_SALES_PANEL':
      {
        return _extends({}, state, {
          isSalesPanelVisible: true
        });
      } // case

    case 'SHOW_PRESALES_PANEL':
      {
        return _extends({}, state, {
          isPresalesPanelVisible: true
        });
      } // case

    case 'HIDE_SALES_PANEL':
      {
        return _extends({}, state, {
          isSalesPanelVisible: false
        });
      } // case

    case 'HIDE_PRESALES_PANEL':
      {
        return _extends({}, state, {
          isPresalesPanelVisible: false
        });
      } // case

    case 'FETCH_SALES_REJECTED':
      {
        return _extends({}, state, {
          sales: []
        });
      } // case

    case 'FETCH_SALES_FULFILLED':
      {
        return _extends({}, state, {
          sales: action.payload
        });
      } // case

    case 'SET_SALE':
      {
        var cart = JSON.parse(action.payload.cart);
        var client = JSON.parse(action.payload.client);
        var user = JSON.parse(action.payload.user);
        var pay = JSON.parse(action.payload.pay);

        var sale = {
          id: action.payload.id,
          bill_number: action.payload.bill_number,
          cart: cart,
          client: client,
          user: user,
          pay: pay,
          payed: action.payload.payed,
          pay_type: action.payload.pay_type,
          created: new Date(action.payload.created),
          updated: new Date(action.payload.updated)
        };
        return _extends({}, state, {
          saleActive: sale,
          completed: true
        });
      } // case

    case 'SET_SALE_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'SET_PRESALE_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'SET_PROFORMA_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'NEW_SALE':
      {
        var sales = state.sales;
        state = stateConst;
        return _extends({}, state, { sales: sales
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          saleActive: action.payload,
          saleActiveId: action.payload.id
        });
      }

    case 'LOADED_PRESALE':
      {
        var _sale = saleActiveModel;
        _sale.cart = action.payload.cart;
        _sale.client = action.payload.client;
        return _extends({}, state, {
          saleActive: _sale
        });
      }

    case 'LOADED_PROFORMA':
      {
        var _sale2 = saleActiveModel;
        _sale2.cart = action.payload.cart;
        _sale2.client = action.payload.client;
        return _extends({}, state, {
          saleActive: _sale2
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saleActiveModel, 'saleActiveModel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/sales/reducer.js');
}();

;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stateConst = {
  company: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_CONFIG_FULFILLED':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, action.payload.data));
      } // case

    case 'FETCH_CONFIG_REJECTED':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, {}));
      } // case

    case 'SET_CONFIG':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, action.payload.data));
      } // case

  }

  return state; // default return
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/config/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/config/reducer.js');
}();

;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function _default() {

    Number.prototype.formatMoney = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Volumes/DATOS/github/iFact3/frontend/utils/formatMoney.js");
}();

;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Fetching = function (_React$Component) {
  _inherits(Fetching, _React$Component);

  function Fetching() {
    _classCallCheck(this, Fetching);

    return _possibleConstructorReturn(this, (Fetching.__proto__ || Object.getPrototypeOf(Fetching)).apply(this, arguments));
  }

  _createClass(Fetching, [{
    key: 'render',


    // Main Layout
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'fetcing-container' },
        _react2.default.createElement('img', { src: '/static/vendor/loaders/Eclipse.gif' }),
        _react2.default.createElement(
          'h1',
          null,
          'Cargando elementos'
        )
      );
    }
  }]);

  return Fetching;
}(_react2.default.Component);

exports.default = Fetching;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Fetching, 'Fetching', '/Volumes/DATOS/github/iFact3/frontend/general/fetching/fetching.jsx');
}();

;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  fetching: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCHING_STARTED':
      {
        return _extends({}, state, {
          fetching: true
        });
      } // case

    case 'FETCHING_DONE':
      {
        return _extends({}, state, {
          fetching: false
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/general/fetching/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/general/fetching/reducer.js');
}();

;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidePanel = hidePanel;
exports.searchProduct = searchProduct;
exports.productSelectedTable = productSelectedTable;
function hidePanel() {

  return { type: 'PRODUCT_HIDE_PANEL', payload: -1 };
}

function searchProduct(val, products) {

  var text = val.split('%');
  var matchs = [];

  products.forEach(function (product) {
    var control = true;
    var description = product.description.toString();

    text.forEach(function (word) {
      var index = description.toLowerCase().indexOf(word.toLowerCase());

      if (index == -1) {
        control = false;
        return false;
      }
    });

    if (control) {
      matchs.push(product);
    }
  });

  var res = matchs.length ? {
    type: 'PRODUCT_SEARCH_SUCCESS',
    payload: matchs
  } : {
    type: 'PRODUCT_SEARCH_FAIL',
    payload: -1
  };

  return res;
}

function productSelectedTable(code) {

  return { type: 'SET_PRODUCT_FIELD_VALUE', payload: code };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(searchProduct, 'searchProduct', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(productSelectedTable, 'productSelectedTable', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/products/actions.js');
}();

;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidePanel = hidePanel;
exports.searchClient = searchClient;
function hidePanel() {

  return { type: 'CLIENT_HIDE_PANEL', payload: -1 };
}

function searchClient(val, clients) {

  var text = val.split('%');
  var matchs = [];

  console.log(clients);

  clients.forEach(function (client) {
    var control = true;
    var name = client.name.toString() + ' ' + client.last_name.toString();

    text.forEach(function (word) {
      var index = name.toLowerCase().indexOf(word.toLowerCase());

      if (index == -1) {
        control = false;
        return false;
      }
    });

    if (control) {
      matchs.push(client);
    }
  });

  var res = matchs.length ? {
    type: 'CLIENT_SEARCH_SUCCESS',
    payload: matchs
  } : {
    type: 'CLIENT_SEARCH_FAIL',
    payload: -1
  };

  return res;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', '/Volumes/DATOS/github/iFact3/frontend/sales/general/search/clients/actions.js');
}();

;

/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2dldENsaWVudERlYnQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaEZvcm0uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvc2F2ZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNsaWVudFNlbGVjdGVkIiwidXNlclNlbGVjdGVkIiwic2VhcmNoQ2xpZW50IiwiY29kZSIsImNsaWVudHMiLCJmaW5kSW5kZXgiLCJjbGllbnQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsIl9pZCIsInVzZXJzIiwidXNlciIsInVwZGF0ZVN0b3JlQ2FzaEFtb3VudCIsInVwZGF0ZVN0b3JlQ2FyZEF1dGgiLCJ1cGRhdGVTdG9yZUNhcmREaWdpdHMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwibnVtYmVyIiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImxvYWRHbG9iYWxDb25maWciLCJzYXZlTG9nIiwiZ2V0TmV4dE51bWVyaWNDb2RlIiwic2V0TmV4dFByZXZJdGVtIiwiZGVmYXVsdHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwia3dhcmdzIiwidXJsIiwic3VjY2Vzc1R5cGUiLCJlcnJvclR5cGUiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImFsZXJ0Iiwic3VjY2Vzc1R5cGUyIiwibG9va1VwVmFsdWUiLCJsb29rVXBGaWVsZCIsImhpc3RvcnkiLCJyZWRpcmVjdFVybCIsImxlbmd0aCIsIm1vZGVsTmFtZSIsImxvb2tVcE5hbWUiLCJkaXNwYXRjaFR5cGUiLCJkaXNwYXRjaFR5cGUyIiwiZGlzcGF0Y2hFcnJvclR5cGUiLCJwdXNoIiwiaXRlbSIsImxvZ0NvZGUiLCJpdGVtT2xkIiwibG9nTW9kZWwiLCJsb2dEZXNjcmlwdGlvbiIsImlzU2FsZSIsIm1ldGhvZCIsInN1Y2Vzc01lc3NhZ2UiLCJzZXQiLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJrd2FyZ3MyIiwiaXRlbTIiLCJ1cmwyIiwibG9nQ29kZTIiLCJpdGVtT2xkMiIsImxvZ01vZGVsMiIsImxvZ0Rlc2NyaXB0aW9uMiIsIm1vZGVsIiwic2VjdGlvbiIsIm5hbWUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbmZpZyIsImZpbHRlciIsImZvckVhY2giLCJ2YWx1ZSIsIm9sZE9iamVjdCIsIm9iamVjdCIsImRlc2NyaXB0aW9uIiwicHJldk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPYmplY3QiLCJ1c2VyMiIsInByZXZfb2JqZWN0IiwibmV3X29iamVjdCIsImVsZW1lbnRzIiwiZmllbGQiLCJrZXlzIiwibWFwIiwiZWxlbWVudCIsInNvcnQiLCJhIiwiYiIsIm1heCIsInBvcCIsIm5leHQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiaXRlbXMiLCJjb2RlRmllbGQiLCJwcmV2aW91cyIsImluZGV4IiwibmV4dENvZGUiLCJwcmV2Q29kZSIsInJlY2FsY0NhcnQiLCJ1cGRhdGVJdGVtRGlzY291bnQiLCJ1cGRhdGVJdGVtTG90ZSIsInByb2R1Y3RTZWxlY3RlZCIsInVwZGF0ZVF0eSIsInVwZGF0ZVF0eUNvZGUiLCJhZGRTdWJPbmUiLCJ1dWlkdjEiLCJyZXF1aXJlIiwiaXRlbXNJbkNhcnQiLCJnbG9iYWxEaXNjb3VudCIsIm5ld0NhcnQiLCJuZXdJdGVtIiwiY2FjbFN1YnRvdGFsIiwicHJvZHVjdCIsInF0eSIsImRpc2NvdW50Iiwic3VidG90YWwiLCJ0b3RhbFdpdGhJdiIsImRpc2NvdW50Q3VycmVuY3kiLCJzdWJUb3RhbE5vRGlzY291bnQiLCJwcmljZVRvVXNlIiwiaW5kZXhJbkNhcnQiLCJ1dWlkIiwidXBkYXRlZENhcnRJdGVtIiwibG90ZSIsImxvdGVOdW0iLCJwcm9kdWN0cyIsImRlZmF1bHRDb25maWciLCJ1c2VyQ29uZmlnIiwicGVyTGluZSIsImJhcmNvZGUiLCJjaGVja0lmSW5DYXJ0IiwicXR5TnVtIiwic3ViT3JBZGQiLCJjYXJ0IiwiZGF0YU5ld1Byb2QiLCJwcm9kdWN0RGlzY291bnQiLCJwcmljZSIsInN1YlRvdGFsIiwiaXYxIiwidXNlX3RheGVzIiwidGF4ZXMiLCJpdjIiLCJ1c2VfdGF4ZXMyIiwidGF4ZXMyIiwiZGlzY291bnRDdXJyZW5jeUluTGluZSIsImRpc2NvdW50Q3VycmVuY3lHbG9iYWwiLCJuZXdRdHkiLCJjbGllbnRUeXBlIiwidXNlUHJpY2UyIiwicHJpY2UyIiwidXNlUHJpY2UzIiwicHJpY2UzIiwid2luZG93IiwiYWxlcnRpZnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFpbiIsInN0b3JlIiwiZmV0Y2hpbmciLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwicm91dGVzIiwiSG9tZSIsIlNhbGUiLCJmdWxsV2lkdGgiLCJzYWxlIiwidG90YWwiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwiZm9ybWF0TW9uZXkiLCJ0b2dnbGVXaWR0aCIsImJpbmQiLCJQcm9kdWN0IiwiY2FydEl0ZW1zIiwiaW5wdXRWYWwiLCJjb2RlSW5wdXQiLCJmb2N1cyIsInByb2R1Y3RLd2FyZ3MiLCJldiIsImtleSIsInRhcmdldCIsInNwbGl0IiwiaXNOYU4iLCJkaXNhYmxlZCIsImlucHV0S2V5UHJlc3MiLCJpbnB1dCIsInNlYXJjaFByb2R1Y3RDbGljayIsIk1vdXNldHJhcCIsIkNhcnQiLCJfdGhpcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwidW5iaW5kIiwiQ2FydEl0ZW1zIiwiaW5DYXJ0IiwiY2FydEl0ZW1BY3RpdmUiLCJwcmV2UHJvcHMiLCJlbGVtIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiX190aGlzIiwicHJvbXB0IiwiZXZ0Iiwib2siLCJjYW5jZWwiLCJzZWxlY3QiLCJpdGVtczIiLCJhY3RpdmVDbGFzcyIsInJlbW92ZUljb25DbGFzcyIsInRheGVzMSIsInF0eUZpZWxkIiwicXR5SW5wdXRDaGFuZ2UiLCJmaWVsZEZvY3VzIiwicXR5SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50RmllbGQiLCJzYWxlTG9hZGVkIiwiZGlzY291bnRJbnB1dEtleVByZXNzIiwiZGlzY291bnRJbnB1dE9uQmx1ciIsInNldENhcnRJdGVtQWN0aXZlIiwicmVtb3ZlSXRlbSIsInVwZGF0ZVRvdGFscyIsInJlbW92ZUZyb21DYXJ0IiwiZGlzY291bnRUb3RhbCIsInRheGVzQ2FsYyIsInRheGVzQ2FsYzIiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsImRlYnQiLCJjbGllbnRTZWxlY3RlZERlYnQiLCJuZXh0UHJvcHMiLCJjbGllbnRfaWQiLCJpZCIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsImxhc3RfbmFtZSIsInNlYXJjaENsaWVudENsaWNrIiwiZ2V0Q2xpZW50RGVidCIsInBvc3QiLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50Iiwic3RhdGUiLCJkaXNjb3VudFZhbCIsIm1heERpc2NvdW50IiwiaW5wdXRPbkJsdXIiLCJCdXR0b25zIiwic2FsZXMiLCJjb21wbGV0ZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJidXR0b25zIiwic2hvd0lub2ljZVBhbmVsIiwibmV3U2FsZSIsInNob3dQYXlQYW5lbCIsInNob3dTYWxlUGFuZWwiLCJzaG93UHJlc2FsZXNQYW5lbCIsInNlYXJjaFByb2R1Y3RzIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmlzaWJsZU9yTm90IiwicGFuZWxDbGljayIsInNlYXJjaEZvcm0iLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFZhbCIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJyZXN1bHRzVGFibGUiLCJtYXRjaGVzIiwicHJvZHVjdHNNYXRjaGVkIiwic2VsZWN0UHJvZHVjdCIsInNlbGxwcmljZSIsInNlYXJjaENsaWVudHMiLCJzZWFyY2hDbGllbnRBY3Rpb24iLCJ2YWwiLCJjbGllbnRzTWF0Y2hlZCIsImhhc0NyZWRpdCIsImhhc19jcmVkaXQiLCJzZWxlY3RDbGllbnQiLCJQYXlQYW5lbCIsInBhbmVsVmlzaWJsZSIsInBheSIsImlzVmlzaWJsZSIsInBheU1ldGhvZCIsImhpZGVQYW5lbCIsIlBheU1ldGhvZCIsImNsaWNrQ2hhbmdlUGF5TWV0aG9kIiwiUGF5Q2FzaCIsImNhc2hBbW91bnQiLCJwYXlBbW91bnRDaGFuZ2VkIiwiUGF5Q2FyZCIsImNhcmRBdXRoIiwiY2FyZERpZ2l0cyIsInBheUNhcmREaWdpdHNDaGFuZ2VkIiwicGF5Q2FyZEF1dGhDaGFuZ2VkIiwiUGF5Q3JlZGl0IiwiYXZhaWxhYmxlIiwiY3JlZGl0X2xpbWl0IiwiY2xpZW50TGltaXQiLCJjbGllbnRBdmFpbGFibGUiLCJQYXlPdGhlciIsIlBheVNpZGVCYXIiLCJwYXllZCIsInJlc2V0IiwiY2hhbmdlIiwicGF5QnV0dG9uQ2xhc3MiLCJjYXNoIiwiYXV0aCIsImRpZ2l0cyIsIlNhdmVCdG4iLCJwYXlfdHlwZSIsImNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnRfdHlwZSIsInVwZGF0ZVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNhdmVCdG4iLCJiaWxsX2lkIiwiYmlsbF9udW1iZXIiLCJzYXZlQ3JlZGl0TW92ZW1lbnQiLCJtb3ZlbWVudCIsIkludm9pY2VQYW5lbCIsImludm9pY2UiLCJpc0Z1bGwiLCJwcmludERpdiIsImlzRnVsbENsYXNzIiwiY29tcG9uZW50VG9Nb3VudCIsInRvZ2dsZVBhbmVsIiwicHJpbnRQYW5lbCIsIkZ1bGxJbnZvaWNlIiwiSGVhZGVyIiwic2FsZUFjdGl2ZSIsImNvbXBhbnkiLCJoZWFkZXJ0ZXh0IiwibG9nbyIsImxvZ29XaWR0aCIsImxvZ29VcmwiLCJoZWFkZXJOYW1lIiwiY29tZXJjaWFsX25hbWUiLCJoZWFkZXJOYW1lMiIsImxlZ2FsX25hbWUiLCJ0ZWxzIiwidGVsZXBob25lcyIsInRlbHNUZXh0IiwiaWRUeXBlIiwiaWRUZXh0IiwidG9VcHBlckNhc2UiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY291bnRyeSIsImVtYWlsIiwiRGF0YSIsImRhdGUiLCJjcmVhdGVkIiwiZ2V0RGF0ZSIsInNsaWNlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImNsaWVudEFkcmVzcyIsImFkcmVzcyIsIlRhYmxlIiwidGF4ZXNUZXh0IiwiZ2xvYmFsRGlzY291bnRSb3ciLCJOb3RlcyIsIkNvbXBhY3RJbnZvaWNlIiwiY29tZXJjaWFsTmFtZSIsImxlZ2FsTmFtZSIsInVzZVRheGVzIiwiVG9wQmFyIiwidG9wQmFyVG9nZ2xlVmlzaWJsZSIsImNvbmZpcm0iLCJyZXBsYWNlIiwiYnV0dG9uQ2xhc3MiLCJtZW51Q2xpY2siLCJob21lQ2xpY2siLCJsb2dPdXRDbGljayIsInRvZ2dsZUxheW91dCIsInRvZ2dsZUNvbmZpZ0JhciIsIm1haW5Db250YWluZXIiLCJzaWRlTWVudSIsInJlbW92ZSIsImFkZCIsImNvbmZpZ0JhciIsIlNpZGVNZW51Iiwic2lkZU1lbnVDbGFzcyIsIlNlYXJjaCIsIlVzZXIiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwidXNlcm5hbWUiLCJsYXN0TmFtZSIsImZ1bGxOYW1lIiwic3Vic3RyaW5nIiwibWlkZGxld2FyZSIsIm1lc3NhZ2VzIiwicmVkdWNlciIsInN0YXRlQ29uc3QiLCJhY3Rpb24iLCJlZGl0YWJsZSIsInVwZGF0ZWQiLCJpc051bGwiLCJjYXJ0SGFzSXRlbXMiLCJjYXJ0U3VidG90YWwiLCJzcGxpY2UiLCJpdGVtc0xlZnRJbkNhcnQiLCJjbGllbnRTZWxlY3RlZE1vZGVsIiwiY3JlZGl0X2RheXMiLCJkb2NUeXBlIiwidXNlclNlbGVjdGVkTW9kZWwiLCJjbGllbnRzRmV0Y2hpbmciLCJjbGllbnRzRmVjdGVkIiwiY2xpZW50c0ZldGNoRXJyb3IiLCJ3aWR0aCIsImRlZmF1bHREZXNpbmciLCJmdWxsT3JOb3QiLCJkZXNpbmdPck5vdCIsInNhbGVBY3RpdmVNb2RlbCIsInNhbGVBY3RpdmVJZCIsImlzU2FsZXNQYW5lbFZpc2libGUiLCJpc1ByZXNhbGVzUGFuZWxWaXNpYmxlIiwicGFyc2UiLCJEYXRlIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiYyIsImQiLCJ0IiwibiIsIk1hdGgiLCJhYnMiLCJ1bmRlZmluZWQiLCJzIiwiaSIsIlN0cmluZyIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwiRmV0Y2hpbmciLCJzZWFyY2hQcm9kdWN0IiwicHJvZHVjdFNlbGVjdGVkVGFibGUiLCJ0ZXh0IiwibWF0Y2hzIiwiY29udHJvbCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIndvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQ2dCQSxjLEdBQUFBLGM7UUFvQkFDLFksR0FBQUEsWTtRQW9CQUMsWSxHQUFBQSxZO0FBeENULFNBQVNGLGNBQVQsQ0FBd0JHLElBQXhCLEVBQThCQyxPQUE5QixFQUF1Qzs7QUFFNUMsTUFBTUosaUJBQWlCSSxRQUFRQyxTQUFSLENBQWtCO0FBQUEsV0FBVUMsT0FBT0gsSUFBUCxJQUFlQSxJQUF6QjtBQUFBLEdBQWxCLENBQXZCLENBRjRDLENBRTRCOztBQUV4RSxNQUFNSSxNQUFPUCxrQkFBa0IsQ0FBQyxDQUFwQixHQUF1QjtBQUMvQjtBQUNBUSxVQUFNLGtCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGlCQUROO0FBRUFDLGFBQVM7QUFDUEgsY0FBUUYsUUFBUUosY0FBUjtBQUREO0FBRlQsR0FMSjs7QUFZQSxTQUFPTyxHQUFQO0FBRUQ7O0FBRU0sU0FBU04sWUFBVCxDQUFzQlMsR0FBdEIsRUFBMkJDLEtB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzQkFBc0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsU0FBUztBQUM1QixtQkFBbUIsUUFBUTtB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QUMsQ0FBZCxFQUFpQjtBQUNmMFcsa0JBQVUsS0FBVjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0YsS0FQRDs7QUFTQSxRQUFJQSxPQUFKLEVBQWE7QUFDWEQsYUFBTy9aLElBQVAsQ0FBWXZELE1BQVo7QUFDRDtBQUVGLEdBakJEOztBQW1CQSxNQUFNQyxNQUFPcWQsT0FBT3JhLE1BQVIsR0FDUjtBQUNBL0MsVUFBTSx1QkFETjtBQUVBQyxhQUFTbWQ7QUFGVCxHQURRLEdBS1I7QUFDQXBkLFVBQU0sb0JBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7Ozs7Ozs7O2dDQTFDZXVULFM7O2dDQUtBNVQsWSIsImZpbGUiOiJzYWxlcy1kMjk4OGYxMDE1MzRhMzM3MDhmYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGNsaWVudFNlbGVjdGVkKGNvZGUsIGNsaWVudHMpIHtcblxuICBjb25zdCBjbGllbnRTZWxlY3RlZCA9IGNsaWVudHMuZmluZEluZGV4KGNsaWVudCA9PiBjbGllbnQuY29kZSA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoY2xpZW50U2VsZWN0ZWQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjbGllbnQ6IGNsaWVudHNbY2xpZW50U2VsZWN0ZWRdXG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlclNlbGVjdGVkKF9pZCwgdXNlcnMpIHtcblxuICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLl9pZCA9PSBfaWQpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9ICh1c2VyU2VsZWN0ZWQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVNFUl9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVNFUl9TRUxFQ1RFRCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHVzZXI6IHVzZXJzW3VzZXJTZWxlY3RlZF1cbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDbGllbnQoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX1NIT1dfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwiLypnbG9iYWwgZGVmaW5lOmZhbHNlICovXG4vKipcbiAqIENvcHlyaWdodCAyMDEyLTIwMTcgQ3JhaWcgQ2FtcGJlbGxcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBNb3VzZXRyYXAgaXMgYSBzaW1wbGUga2V5Ym9hcmQgc2hvcnRjdXQgbGlicmFyeSBmb3IgSmF2YXNjcmlwdCB3aXRoXG4gKiBubyBleHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqXG4gKiBAdmVyc2lvbiAxLjYuMVxuICogQHVybCBjcmFpZy5pcy9raWxsaW5nL21pY2VcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgbW91c2V0cmFwIGlzIHVzZWQgaW5zaWRlIGJyb3dzZXIsIGlmIG5vdCwgcmV0dXJuXG4gICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgb2Ygc3BlY2lhbCBrZXljb2RlcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIGtleXNcbiAgICAgKlxuICAgICAqIGV2ZXJ5dGhpbmcgaW4gdGhpcyBkaWN0aW9uYXJ5IGNhbm5vdCB1c2Uga2V5cHJlc3MgZXZlbnRzXG4gICAgICogc28gaXQgaGFzIHRvIGJlIGhlcmUgdG8gbWFwIHRvIHRoZSBjb3JyZWN0IGtleWNvZGVzIGZvclxuICAgICAqIGtleXVwL2tleWRvd24gZXZlbnRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfTUFQID0ge1xuICAgICAgICA4OiAnYmFja3NwYWNlJyxcbiAgICAgICAgOTogJ3RhYicsXG4gICAgICAgIDEzOiAnZW50ZXInLFxuICAgICAgICAxNjogJ3NoaWZ0JyxcbiAgICAgICAgMTc6ICdjdHJsJyxcbiAgICAgICAgMTg6ICdhbHQnLFxuICAgICAgICAyMDogJ2NhcHNsb2NrJyxcbiAgICAgICAgMjc6ICdlc2MnLFxuICAgICAgICAzMjogJ3NwYWNlJyxcbiAgICAgICAgMzM6ICdwYWdldXAnLFxuICAgICAgICAzNDogJ3BhZ2Vkb3duJyxcbiAgICAgICAgMzU6ICdlbmQnLFxuICAgICAgICAzNjogJ2hvbWUnLFxuICAgICAgICAzNzogJ2xlZnQnLFxuICAgICAgICAzODogJ3VwJyxcbiAgICAgICAgMzk6ICdyaWdodCcsXG4gICAgICAgIDQwOiAnZG93bicsXG4gICAgICAgIDQ1OiAnaW5zJyxcbiAgICAgICAgNDY6ICdkZWwnLFxuICAgICAgICA5MTogJ21ldGEnLFxuICAgICAgICA5MzogJ21ldGEnLFxuICAgICAgICAyMjQ6ICdtZXRhJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIGZvciBzcGVjaWFsIGNoYXJhY3RlcnMgc28gdGhleSBjYW4gc3VwcG9ydFxuICAgICAqXG4gICAgICogdGhpcyBkaWN0aW9uYXJ5IGlzIG9ubHkgdXNlZCBpbmNhc2UgeW91IHdhbnQgdG8gYmluZCBhXG4gICAgICoga2V5dXAgb3Iga2V5ZG93biBldmVudCB0byBvbmUgb2YgdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX0tFWUNPREVfTUFQID0ge1xuICAgICAgICAxMDY6ICcqJyxcbiAgICAgICAgMTA3OiAnKycsXG4gICAgICAgIDEwOTogJy0nLFxuICAgICAgICAxMTA6ICcuJyxcbiAgICAgICAgMTExIDogJy8nLFxuICAgICAgICAxODY6ICc7JyxcbiAgICAgICAgMTg3OiAnPScsXG4gICAgICAgIDE4ODogJywnLFxuICAgICAgICAxODk6ICctJyxcbiAgICAgICAgMTkwOiAnLicsXG4gICAgICAgIDE5MTogJy8nLFxuICAgICAgICAxOTI6ICdgJyxcbiAgICAgICAgMjE5OiAnWycsXG4gICAgICAgIDIyMDogJ1xcXFwnLFxuICAgICAgICAyMjE6ICddJyxcbiAgICAgICAgMjIyOiAnXFwnJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbWFwcGluZyBvZiBrZXlzIHRoYXQgcmVxdWlyZSBzaGlmdCBvbiBhIFVTIGtleXBhZFxuICAgICAqIGJhY2sgdG8gdGhlIG5vbiBzaGlmdCBlcXVpdmVsZW50c1xuICAgICAqXG4gICAgICogdGhpcyBpcyBzbyB5b3UgY2FuIHVzZSBrZXl1cCBldmVudHMgd2l0aCB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBub3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgd29yayByZWxpYWJseSBvbiBVUyBrZXlib2FyZHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TSElGVF9NQVAgPSB7XG4gICAgICAgICd+JzogJ2AnLFxuICAgICAgICAnISc6ICcxJyxcbiAgICAgICAgJ0AnOiAnMicsXG4gICAgICAgICcjJzogJzMnLFxuICAgICAgICAnJCc6ICc0JyxcbiAgICAgICAgJyUnOiAnNScsXG4gICAgICAgICdeJzogJzYnLFxuICAgICAgICAnJic6ICc3JyxcbiAgICAgICAgJyonOiAnOCcsXG4gICAgICAgICcoJzogJzknLFxuICAgICAgICAnKSc6ICcwJyxcbiAgICAgICAgJ18nOiAnLScsXG4gICAgICAgICcrJzogJz0nLFxuICAgICAgICAnOic6ICc7JyxcbiAgICAgICAgJ1xcXCInOiAnXFwnJyxcbiAgICAgICAgJzwnOiAnLCcsXG4gICAgICAgICc+JzogJy4nLFxuICAgICAgICAnPyc6ICcvJyxcbiAgICAgICAgJ3wnOiAnXFxcXCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIGxpc3Qgb2Ygc3BlY2lhbCBzdHJpbmdzIHlvdSBjYW4gdXNlIHRvIG1hcFxuICAgICAqIHRvIG1vZGlmaWVyIGtleXMgd2hlbiB5b3Ugc3BlY2lmeSB5b3VyIGtleWJvYXJkIHNob3J0Y3V0c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NQRUNJQUxfQUxJQVNFUyA9IHtcbiAgICAgICAgJ29wdGlvbic6ICdhbHQnLFxuICAgICAgICAnY29tbWFuZCc6ICdtZXRhJyxcbiAgICAgICAgJ3JldHVybic6ICdlbnRlcicsXG4gICAgICAgICdlc2NhcGUnOiAnZXNjJyxcbiAgICAgICAgJ3BsdXMnOiAnKycsXG4gICAgICAgICdtb2QnOiAvTWFjfGlQb2R8aVBob25lfGlQYWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSA/ICdtZXRhJyA6ICdjdHJsJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgZmxpcHBlZCB2ZXJzaW9uIG9mIF9NQVAgZnJvbSBhYm92ZVxuICAgICAqIG5lZWRlZCB0byBjaGVjayBpZiB3ZSBzaG91bGQgdXNlIGtleXByZXNzIG9yIG5vdCB3aGVuIG5vIGFjdGlvblxuICAgICAqIGlzIHNwZWNpZmllZFxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgdmFyIF9SRVZFUlNFX01BUDtcblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0aGUgZiBrZXlzLCBmMSB0byBmMTkgYW5kIGFkZCB0aGVtIHRvIHRoZSBtYXBcbiAgICAgKiBwcm9ncmFtYXRpY2FsbHlcbiAgICAgKi9cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDIwOyArK2kpIHtcbiAgICAgICAgX01BUFsxMTEgKyBpXSA9ICdmJyArIGk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRvIG1hcCBudW1iZXJzIG9uIHRoZSBudW1lcmljIGtleXBhZFxuICAgICAqL1xuICAgIGZvciAoaSA9IDA7IGkgPD0gOTsgKytpKSB7XG5cbiAgICAgICAgLy8gVGhpcyBuZWVkcyB0byB1c2UgYSBzdHJpbmcgY2F1c2Ugb3RoZXJ3aXNlIHNpbmNlIDAgaXMgZmFsc2V5XG4gICAgICAgIC8vIG1vdXNldHJhcCB3aWxsIG5ldmVyIGZpcmUgZm9yIG51bXBhZCAwIHByZXNzZWQgYXMgcGFydCBvZiBhIGtleWRvd25cbiAgICAgICAgLy8gZXZlbnQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NjYW1wYmVsbC9tb3VzZXRyYXAvcHVsbC8yNThcbiAgICAgICAgX01BUFtpICsgOTZdID0gaS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyb3NzIGJyb3dzZXIgYWRkIGV2ZW50IG1ldGhvZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fEhUTUxEb2N1bWVudH0gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnQob2JqZWN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyB0aGUgZXZlbnQgYW5kIHJldHVybnMgdGhlIGtleSBjaGFyYWN0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NoYXJhY3RlckZyb21FdmVudChlKSB7XG5cbiAgICAgICAgLy8gZm9yIGtleXByZXNzIGV2ZW50cyB3ZSBzaG91bGQgcmV0dXJuIHRoZSBjaGFyYWN0ZXIgYXMgaXNcbiAgICAgICAgaWYgKGUudHlwZSA9PSAna2V5cHJlc3MnKSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIHNoaWZ0IGtleSBpcyBub3QgcHJlc3NlZCB0aGVuIGl0IGlzIHNhZmUgdG8gYXNzdW1lXG4gICAgICAgICAgICAvLyB0aGF0IHdlIHdhbnQgdGhlIGNoYXJhY3RlciB0byBiZSBsb3dlcmNhc2UuICB0aGlzIG1lYW5zIGlmXG4gICAgICAgICAgICAvLyB5b3UgYWNjaWRlbnRhbGx5IGhhdmUgY2FwcyBsb2NrIG9uIHRoZW4geW91ciBrZXkgYmluZGluZ3NcbiAgICAgICAgICAgIC8vIHdpbGwgY29udGludWUgdG8gd29ya1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IHNpZGUgZWZmZWN0IHRoYXQgbWlnaHQgbm90IGJlIGRlc2lyZWQgaXMgaWYgeW91XG4gICAgICAgICAgICAvLyBiaW5kIHNvbWV0aGluZyBsaWtlICdBJyBjYXVzZSB5b3Ugd2FudCB0byB0cmlnZ2VyIGFuXG4gICAgICAgICAgICAvLyBldmVudCB3aGVuIGNhcGl0YWwgQSBpcyBwcmVzc2VkIGNhcHMgbG9jayB3aWxsIG5vIGxvbmdlclxuICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQuICBzaGlmdCthIHdpbGwgdGhvdWdoLlxuICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gY2hhcmFjdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3Igbm9uIGtleXByZXNzIGV2ZW50cyB0aGUgc3BlY2lhbCBtYXBzIGFyZSBuZWVkZWRcbiAgICAgICAgaWYgKF9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9LRVlDT0RFX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9LRVlDT0RFX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0IGlzIG5vdCBpbiB0aGUgc3BlY2lhbCBtYXBcblxuICAgICAgICAvLyB3aXRoIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cyB0aGUgY2hhcmFjdGVyIHNlZW1zIHRvIGFsd2F5c1xuICAgICAgICAvLyBjb21lIGluIGFzIGFuIHVwcGVyY2FzZSBjaGFyYWN0ZXIgd2hldGhlciB5b3UgYXJlIHByZXNzaW5nIHNoaWZ0XG4gICAgICAgIC8vIG9yIG5vdC4gIHdlIHNob3VsZCBtYWtlIHN1cmUgaXQgaXMgYWx3YXlzIGxvd2VyY2FzZSBmb3IgY29tcGFyaXNvbnNcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX21vZGlmaWVyc01hdGNoKG1vZGlmaWVyczEsIG1vZGlmaWVyczIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyczEuc29ydCgpLmpvaW4oJywnKSA9PT0gbW9kaWZpZXJzMi5zb3J0KCkuam9pbignLCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEga2V5IGV2ZW50IGFuZCBmaWd1cmVzIG91dCB3aGF0IHRoZSBtb2RpZmllcnMgYXJlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ldmVudE1vZGlmaWVycyhlKSB7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdhbHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdjdHJsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnbWV0YScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGlmaWVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcmV2ZW50cyBkZWZhdWx0IGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgcHJvcG9nYXRpb24gZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3N0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGlmIHRoZSBrZXljb2RlIHNwZWNpZmllZCBpcyBhIG1vZGlmaWVyIGtleSBvciBub3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNNb2RpZmllcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2hpZnQnIHx8IGtleSA9PSAnY3RybCcgfHwga2V5ID09ICdhbHQnIHx8IGtleSA9PSAnbWV0YSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV2ZXJzZXMgdGhlIG1hcCBsb29rdXAgc28gdGhhdCB3ZSBjYW4gbG9vayBmb3Igc3BlY2lmaWMga2V5c1xuICAgICAqIHRvIHNlZSB3aGF0IGNhbiBhbmQgY2FuJ3QgdXNlIGtleXByZXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldFJldmVyc2VNYXAoKSB7XG4gICAgICAgIGlmICghX1JFVkVSU0VfTUFQKSB7XG4gICAgICAgICAgICBfUkVWRVJTRV9NQVAgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfTUFQKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBwdWxsIG91dCB0aGUgbnVtZXJpYyBrZXlwYWQgZnJvbSBoZXJlIGNhdXNlIGtleXByZXNzIHNob3VsZFxuICAgICAgICAgICAgICAgIC8vIGJlIGFibGUgdG8gZGV0ZWN0IHRoZSBrZXlzIGZyb20gdGhlIGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPiA5NSAmJiBrZXkgPCAxMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9NQVAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBfUkVWRVJTRV9NQVBbX01BUFtrZXldXSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9SRVZFUlNFX01BUDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwaWNrcyB0aGUgYmVzdCBhY3Rpb24gYmFzZWQgb24gdGhlIGtleSBjb21iaW5hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGNoYXJhY3RlciBmb3Iga2V5XG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gcGFzc2VkIGluXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pIHtcblxuICAgICAgICAvLyBpZiBubyBhY3Rpb24gd2FzIHBpY2tlZCBpbiB3ZSBzaG91bGQgdHJ5IHRvIHBpY2sgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IHdlIHRoaW5rIHdvdWxkIHdvcmsgYmVzdCBmb3IgdGhpcyBrZXlcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IF9nZXRSZXZlcnNlTWFwKClba2V5XSA/ICdrZXlkb3duJyA6ICdrZXlwcmVzcyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb2RpZmllciBrZXlzIGRvbid0IHdvcmsgYXMgZXhwZWN0ZWQgd2l0aCBrZXlwcmVzcyxcbiAgICAgICAgLy8gc3dpdGNoIHRvIGtleWRvd25cbiAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmIG1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICdrZXlkb3duJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgZnJvbSBhIHN0cmluZyBrZXkgY29tYmluYXRpb24gdG8gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24gbGlrZSBcImNvbW1hbmQrc2hpZnQrbFwiXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKSB7XG4gICAgICAgIGlmIChjb21iaW5hdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZXR1cm4gWycrJ107XG4gICAgICAgIH1cblxuICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xcK3syfS9nLCAnK3BsdXMnKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0aW9uLnNwbGl0KCcrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpbmZvIGZvciBhIHNwZWNpZmljIGtleSBjb21iaW5hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBrZXkgY29tYmluYXRpb24gKFwiY29tbWFuZCtzXCIgb3IgXCJhXCIgb3IgXCIqXCIpXG4gICAgICogQHBhcmFtICB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRha2UgdGhlIGtleXMgZnJvbSB0aGlzIHBhdHRlcm4gYW5kIGZpZ3VyZSBvdXQgd2hhdCB0aGUgYWN0dWFsXG4gICAgICAgIC8vIHBhdHRlcm4gaXMgYWxsIGFib3V0XG4gICAgICAgIGtleXMgPSBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUga2V5IG5hbWVzXG4gICAgICAgICAgICBpZiAoX1NQRUNJQUxfQUxJQVNFU1trZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NQRUNJQUxfQUxJQVNFU1trZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIGtleXByZXNzIGV2ZW50IHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyBiZSBzbWFydCBhYm91dCB1c2luZyBzaGlmdCBrZXlzXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgb25seSB3b3JrIGZvciBVUyBrZXlib2FyZHMgaG93ZXZlclxuICAgICAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24gIT0gJ2tleXByZXNzJyAmJiBfU0hJRlRfTUFQW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU0hJRlRfTUFQW2tleV07XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMga2V5IGlzIGEgbW9kaWZpZXIgdGhlbiBhZGQgaXQgdG8gdGhlIGxpc3Qgb2YgbW9kaWZpZXJzXG4gICAgICAgICAgICBpZiAoX2lzTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXBlbmRpbmcgb24gd2hhdCB0aGUga2V5IGNvbWJpbmF0aW9uIGlzXG4gICAgICAgIC8vIHdlIHdpbGwgdHJ5IHRvIHBpY2sgdGhlIGJlc3QgZXZlbnQgZm9yIGl0XG4gICAgICAgIGFjdGlvbiA9IF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2JlbG9uZ3NUbyhlbGVtZW50LCBhbmNlc3Rvcikge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IGFuY2VzdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYmVsb25nc1RvKGVsZW1lbnQucGFyZW50Tm9kZSwgYW5jZXN0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCB8fCBkb2N1bWVudDtcblxuICAgICAgICBpZiAoIShzZWxmIGluc3RhbmNlb2YgTW91c2V0cmFwKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZWxlbWVudCB0byBhdHRhY2gga2V5IGV2ZW50cyB0b1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYudGFyZ2V0ID0gdGFyZ2V0RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYSBsaXN0IG9mIGFsbCB0aGUgY2FsbGJhY2tzIHNldHVwIHZpYSBNb3VzZXRyYXAuYmluZCgpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGlyZWN0IG1hcCBvZiBzdHJpbmcgY29tYmluYXRpb25zIHRvIGNhbGxiYWNrcyB1c2VkIGZvciB0cmlnZ2VyKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZWVwcyB0cmFjayBvZiB3aGF0IGxldmVsIGVhY2ggc2VxdWVuY2UgaXMgYXQgc2luY2UgbXVsdGlwbGVcbiAgICAgICAgICogc2VxdWVuY2VzIGNhbiBzdGFydCBvdXQgd2l0aCB0aGUgc2FtZSBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9zZXF1ZW5jZUxldmVscyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgc2V0VGltZW91dCBjYWxsXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudWxsfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfcmVzZXRUaW1lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXVwXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXlwcmVzc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfaWdub3JlTmV4dEtleXByZXNzID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFyZSB3ZSBjdXJyZW50bHkgaW5zaWRlIG9mIGEgc2VxdWVuY2U/XG4gICAgICAgICAqIHR5cGUgb2YgYWN0aW9uIChcImtleXVwXCIgb3IgXCJrZXlkb3duXCIgb3IgXCJrZXlwcmVzc1wiKSBvciBmYWxzZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZXNldHMgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGV4Y2VwdCBmb3IgdGhlIG9uZXMgcGFzc2VkIGluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkb05vdFJlc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlcyhkb05vdFJlc2V0KSB7XG4gICAgICAgICAgICBkb05vdFJlc2V0ID0gZG9Ob3RSZXNldCB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlcXVlbmNlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtleTtcblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gX3NlcXVlbmNlTGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvTm90UmVzZXRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXF1ZW5jZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2tleV0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVNlcXVlbmNlcykge1xuICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmaW5kcyBhbGwgY2FsbGJhY2tzIHRoYXQgbWF0Y2ggYmFzZWQgb24gdGhlIGtleWNvZGUsIG1vZGlmaWVycyxcbiAgICAgICAgICogYW5kIGFjdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fE9iamVjdH0gZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IHNlcXVlbmNlTmFtZSAtIG5hbWUgb2YgdGhlIHNlcXVlbmNlIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWxcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUsIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjaztcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gZS50eXBlO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gZXZlbnRzIHJlbGF0ZWQgdG8gdGhpcyBrZXljb2RlXG4gICAgICAgICAgICBpZiAoIXNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBhIG1vZGlmaWVyIGtleSBpcyBjb21pbmcgdXAgb24gaXRzIG93biB3ZSBzaG91bGQgYWxsb3cgaXRcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXVwJyAmJiBfaXNNb2RpZmllcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzID0gW2NoYXJhY3Rlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgY2FsbGJhY2tzIGZvciB0aGUga2V5IHRoYXQgd2FzIHByZXNzZWRcbiAgICAgICAgICAgIC8vIGFuZCBzZWUgaWYgYW55IG9mIHRoZW0gbWF0Y2hcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl1baV07XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBhIHNlcXVlbmNlIG5hbWUgaXMgbm90IHNwZWNpZmllZCwgYnV0IHRoaXMgaXMgYSBzZXF1ZW5jZSBhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSB3cm9uZyBsZXZlbCB0aGVuIG1vdmUgb250byB0aGUgbmV4dCBtYXRjaFxuICAgICAgICAgICAgICAgIGlmICghc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSAmJiBfc2VxdWVuY2VMZXZlbHNbY2FsbGJhY2suc2VxXSAhPSBjYWxsYmFjay5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYWN0aW9uIHdlIGFyZSBsb29raW5nIGZvciBkb2Vzbid0IG1hdGNoIHRoZSBhY3Rpb24gd2UgZ290XG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBzaG91bGQga2VlcCBnb2luZ1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT0gY2FsbGJhY2suYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBrZXlwcmVzcyBldmVudCBhbmQgdGhlIG1ldGEga2V5IGFuZCBjb250cm9sIGtleVxuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcHJlc3NlZCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBvbmx5IGxvb2sgYXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVyLCBvdGhlcndpc2UgY2hlY2sgdGhlIG1vZGlmaWVycyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBjaHJvbWUgd2lsbCBub3QgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgLy8gc2FmYXJpIHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgbWV0YStzaGlmdCBpcyBkb3duXG4gICAgICAgICAgICAgICAgLy8gZmlyZWZveCB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIGlmICgoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgIWUubWV0YUtleSAmJiAhZS5jdHJsS2V5KSB8fCBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzLCBjYWxsYmFjay5tb2RpZmllcnMpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB5b3UgYmluZCBhIGNvbWJpbmF0aW9uIG9yIHNlcXVlbmNlIGEgc2Vjb25kIHRpbWUgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lLiAgaWYgYSBzZXF1ZW5jZU5hbWUgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tYmluYXRpb24gaXMgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCBpdCBkb2VzIGp1c3QgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBAdG9kbyBtYWtlIGRlbGV0aW5nIGl0cyBvd24gbWV0aG9kP1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlQ29tYm8gPSAhc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmNvbWJvID09IGNvbWJpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlU2VxdWVuY2UgPSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxID09IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5sZXZlbCA9PSBsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUNvbWJvIHx8IGRlbGV0ZVNlcXVlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0dWFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIGlmIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB0aGlzIHdpbGwgdXNlIHRoZSBqcXVlcnlcbiAgICAgICAgICogY29udmVudGlvbiAtIHByZXZlbnQgZGVmYXVsdCBhbmQgc3RvcCBwcm9wb2dhdGlvbiBvbiB0aGUgZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibywgc2VxdWVuY2UpIHtcblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBldmVudCBzaG91bGQgbm90IGhhcHBlbiBzdG9wIGhlcmVcbiAgICAgICAgICAgIGlmIChzZWxmLnN0b3BDYWxsYmFjayhlLCBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsIGNvbWJvLCBzZXF1ZW5jZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhlLCBjb21ibykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX3ByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICAgICAgICAgIF9zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaGFuZGxlcyBhIGNoYXJhY3RlciBrZXkgZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9oYW5kbGVLZXkgPSBmdW5jdGlvbihjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKTtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGRvTm90UmVzZXQgPSB7fTtcbiAgICAgICAgICAgIHZhciBtYXhMZXZlbCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG1heExldmVsIGZvciBzZXF1ZW5jZXMgc28gd2UgY2FuIG9ubHkgZXhlY3V0ZSB0aGUgbG9uZ2VzdCBjYWxsYmFjayBzZXF1ZW5jZVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heExldmVsID0gTWF0aC5tYXgobWF4TGV2ZWwsIGNhbGxiYWNrc1tpXS5sZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggbWF0Y2hpbmcgY2FsbGJhY2tzIGZvciB0aGlzIGtleSBldmVudFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICAgICAgLy8gZmlyZSBmb3IgYWxsIHNlcXVlbmNlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmVjYXVzZSBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZSBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgICAgICAgICAgICAvLyBib3VuZCBzdWNoIGFzIFwiZyBpXCIgYW5kIFwiZyB0XCIgdGhleSBib3RoIG5lZWQgdG8gZmlyZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayBmb3IgbWF0Y2hpbmcgZyBjYXVzZSBvdGhlcndpc2UgeW91IGNhbiBvbmx5IGV2ZXJcbiAgICAgICAgICAgICAgICAvLyBtYXRjaCB0aGUgZmlyc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGZpcmUgY2FsbGJhY2tzIGZvciB0aGUgbWF4TGV2ZWwgdG8gcHJldmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBzdWJzZXF1ZW5jZXMgZnJvbSBhbHNvIGZpcmluZ1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAnYSBvcHRpb24gYicgc2hvdWxkIG5vdCBjYXVzZSAnb3B0aW9uIGInIHRvIGZpcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiB0aG91Z2ggJ29wdGlvbiBiJyBpcyBwYXJ0IG9mIHRoZSBvdGhlciBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBhbnkgc2VxdWVuY2VzIHRoYXQgZG8gbm90IG1hdGNoIGhlcmUgd2lsbCBiZSBkaXNjYXJkZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVsb3cgYnkgdGhlIF9yZXNldFNlcXVlbmNlcyBjYWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0ubGV2ZWwgIT0gbWF4TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIGxpc3Qgb2Ygd2hpY2ggc2VxdWVuY2VzIHdlcmUgbWF0Y2hlcyBmb3IgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgZG9Ob3RSZXNldFtjYWxsYmFja3NbaV0uc2VxXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2ldLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaV0uY29tYm8sIGNhbGxiYWNrc1tpXS5zZXEpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSB3ZXJlIG5vIHNlcXVlbmNlIG1hdGNoZXMgYnV0IHdlIGFyZSBzdGlsbCBoZXJlXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBtZWFucyB0aGlzIGlzIGEgcmVndWxhciBtYXRjaCBzbyB3ZSBzaG91bGQgZmlyZSB0aGF0XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2ldLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaV0uY29tYm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGtleSB5b3UgcHJlc3NlZCBtYXRjaGVzIHRoZSB0eXBlIG9mIHNlcXVlbmNlIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIGJlaW5nIGEgbW9kaWZpZXIgKGllIFwia2V5dXBcIiBvciBcImtleXByZXNzXCIpIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyByZXNldCBhbGwgc2VxdWVuY2VzIHRoYXQgd2VyZSBub3QgbWF0Y2hlZCBieSB0aGlzIGV2ZW50XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBzbywgZm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIHRoZSBzZXF1ZW5jZSBcImggYSB0XCIgYW5kIHlvdVxuICAgICAgICAgICAgLy8gdHlwZSBcImggZSBhIHIgdFwiIGl0IGRvZXMgbm90IG1hdGNoLiAgaW4gdGhpcyBjYXNlIHRoZSBcImVcIiB3aWxsXG4gICAgICAgICAgICAvLyBjYXVzZSB0aGUgc2VxdWVuY2UgdG8gcmVzZXRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBtb2RpZmllciBrZXlzIGFyZSBpZ25vcmVkIGJlY2F1c2UgeW91IGNhbiBoYXZlIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRoYXQgY29udGFpbnMgbW9kaWZpZXJzIHN1Y2ggYXMgXCJlbnRlciBjdHJsK3NwYWNlXCIgYW5kIGluIG1vc3RcbiAgICAgICAgICAgIC8vIGNhc2VzIHRoZSBtb2RpZmllciBrZXkgd2lsbCBiZSBwcmVzc2VkIGJlZm9yZSB0aGUgbmV4dCBrZXlcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBhbHNvIGlmIHlvdSBoYXZlIGEgc2VxdWVuY2Ugc3VjaCBhcyBcImN0cmwrYiBhXCIgdGhlbiBwcmVzc2luZyB0aGVcbiAgICAgICAgICAgIC8vIFwiYlwiIGtleSB3aWxsIHRyaWdnZXIgYSBcImtleXByZXNzXCIgYW5kIGEgXCJrZXlkb3duXCJcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgXCJrZXlkb3duXCIgaXMgZXhwZWN0ZWQgd2hlbiB0aGVyZSBpcyBhIG1vZGlmaWVyLCBidXQgdGhlXG4gICAgICAgICAgICAvLyBcImtleXByZXNzXCIgZW5kcyB1cCBtYXRjaGluZyB0aGUgX25leHRFeHBlY3RlZEFjdGlvbiBzaW5jZSBpdCBvY2N1cnNcbiAgICAgICAgICAgIC8vIGFmdGVyIGFuZCB0aGF0IGNhdXNlcyB0aGUgc2VxdWVuY2UgdG8gcmVzZXRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB3ZSBpZ25vcmUga2V5cHJlc3NlcyBpbiBhIHNlcXVlbmNlIHRoYXQgZGlyZWN0bHkgZm9sbG93IGEga2V5ZG93blxuICAgICAgICAgICAgLy8gZm9yIHRoZSBzYW1lIGNoYXJhY3RlclxuICAgICAgICAgICAgdmFyIGlnbm9yZVRoaXNLZXlwcmVzcyA9IGUudHlwZSA9PSAna2V5cHJlc3MnICYmIF9pZ25vcmVOZXh0S2V5cHJlc3M7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09IF9uZXh0RXhwZWN0ZWRBY3Rpb24gJiYgIV9pc01vZGlmaWVyKGNoYXJhY3RlcikgJiYgIWlnbm9yZVRoaXNLZXlwcmVzcykge1xuICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlcyhkb05vdFJlc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2lnbm9yZU5leHRLZXlwcmVzcyA9IHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgJiYgZS50eXBlID09ICdrZXlkb3duJztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaGFuZGxlcyBhIGtleWRvd24gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfaGFuZGxlS2V5RXZlbnQoZSkge1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgZS53aGljaCBmb3Iga2V5IGV2ZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyODU2MjcvamF2YXNjcmlwdC1rZXljb2RlLXZzLWNoYXJjb2RlLXV0dGVyLWNvbmZ1c2lvblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlLndoaWNoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGUud2hpY2ggPSBlLmtleUNvZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpO1xuXG4gICAgICAgICAgICAvLyBubyBjaGFyYWN0ZXIgZm91bmQgdGhlbiBzdG9wXG4gICAgICAgICAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbmVlZCB0byB1c2UgPT09IGZvciB0aGUgY2hhcmFjdGVyIGNoZWNrIGJlY2F1c2UgdGhlIGNoYXJhY3RlciBjYW4gYmUgMFxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAna2V5dXAnICYmIF9pZ25vcmVOZXh0S2V5dXAgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuaGFuZGxlS2V5KGNoYXJhY3RlciwgX2V2ZW50TW9kaWZpZXJzKGUpLCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjYWxsZWQgdG8gc2V0IGEgMSBzZWNvbmQgdGltZW91dCBvbiB0aGUgc3BlY2lmaWVkIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIHRoaXMgaXMgc28gYWZ0ZXIgZWFjaCBrZXkgcHJlc3MgaW4gdGhlIHNlcXVlbmNlIHlvdSBoYXZlIDEgc2Vjb25kXG4gICAgICAgICAqIHRvIHByZXNzIHRoZSBuZXh0IGtleSBiZWZvcmUgeW91IGhhdmUgdG8gc3RhcnQgb3ZlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZVRpbWVyKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9yZXNldFRpbWVyKTtcbiAgICAgICAgICAgIF9yZXNldFRpbWVyID0gc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIGEga2V5IHNlcXVlbmNlIHRvIGFuIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21ibyAtIGNvbWJvIHNwZWNpZmllZCBpbiBiaW5kIGNhbGxcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0ga2V5c1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfYmluZFNlcXVlbmNlKGNvbWJvLCBrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IG9mZiBieSBhZGRpbmcgYSBzZXF1ZW5jZSBsZXZlbCByZWNvcmQgZm9yIHRoaXMgY29tYmluYXRpb25cbiAgICAgICAgICAgIC8vIGFuZCBzZXR0aW5nIHRoZSBsZXZlbCB0byAwXG4gICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNbY29tYm9dID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBjYWxsYmFjayB0byBpbmNyZWFzZSB0aGUgc2VxdWVuY2UgbGV2ZWwgZm9yIHRoaXMgc2VxdWVuY2UgYW5kIHJlc2V0XG4gICAgICAgICAgICAgKiBhbGwgb3RoZXIgc2VxdWVuY2VzIHRoYXQgd2VyZSBhY3RpdmVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV4dEFjdGlvblxuICAgICAgICAgICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfaW5jcmVhc2VTZXF1ZW5jZShuZXh0QWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gbmV4dEFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgKytfc2VxdWVuY2VMZXZlbHNbY29tYm9dO1xuICAgICAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB3cmFwcyB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIGluc2lkZSBvZiBhbm90aGVyIGZ1bmN0aW9uIGluIG9yZGVyXG4gICAgICAgICAgICAgKiB0byByZXNldCBhbGwgc2VxdWVuY2UgY291bnRlcnMgYXMgc29vbiBhcyB0aGlzIHNlcXVlbmNlIGlzIGRvbmVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jYWxsYmFja0FuZFJlc2V0KGUpIHtcbiAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibyk7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgaWdub3JlIHRoZSBuZXh0IGtleSB1cCBpZiB0aGUgYWN0aW9uIGlzIGtleSBkb3duXG4gICAgICAgICAgICAgICAgLy8gb3Iga2V5cHJlc3MuICB0aGlzIGlzIHNvIGlmIHlvdSBmaW5pc2ggYSBzZXF1ZW5jZSBhbmRcbiAgICAgICAgICAgICAgICAvLyByZWxlYXNlIHRoZSBrZXkgdGhlIGZpbmFsIGtleSB3aWxsIG5vdCB0cmlnZ2VyIGEga2V5dXBcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9PSAna2V5dXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlaXJkIHJhY2UgY29uZGl0aW9uIGlmIGEgc2VxdWVuY2UgZW5kcyB3aXRoIHRoZSBrZXlcbiAgICAgICAgICAgICAgICAvLyBhbm90aGVyIHNlcXVlbmNlIGJlZ2lucyB3aXRoXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGtleXMgb25lIGF0IGEgdGltZSBhbmQgYmluZCB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLiAgZm9yIGFueSBrZXkgbGVhZGluZyB1cCB0byB0aGUgZmluYWwgb25lIGl0IHNob3VsZFxuICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlLiBhZnRlciB0aGUgZmluYWwsIGl0IHNob3VsZCByZXNldCBhbGwgc2VxdWVuY2VzXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaWYgYW4gYWN0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGUgb3JpZ2luYWwgYmluZCBjYWxsIHRoZW4gdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyBiZSB1c2VkIHRocm91Z2hvdXQuICBvdGhlcndpc2Ugd2Ugd2lsbCBwYXNzIHRoZSBhY3Rpb24gdGhhdCB0aGVcbiAgICAgICAgICAgIC8vIG5leHQga2V5IGluIHRoZSBzZXF1ZW5jZSBzaG91bGQgbWF0Y2guICB0aGlzIGFsbG93cyBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0byBtaXggYW5kIG1hdGNoIGtleXByZXNzIGFuZCBrZXlkb3duIGV2ZW50cyBkZXBlbmRpbmcgb24gd2hpY2hcbiAgICAgICAgICAgIC8vIG9uZXMgYXJlIGJldHRlciBzdWl0ZWQgdG8gdGhlIGtleSBwcm92aWRlZFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRmluYWwgPSBpICsgMSA9PT0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDYWxsYmFjayA9IGlzRmluYWwgPyBfY2FsbGJhY2tBbmRSZXNldCA6IF9pbmNyZWFzZVNlcXVlbmNlKGFjdGlvbiB8fCBfZ2V0S2V5SW5mbyhrZXlzW2kgKyAxXSkuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShrZXlzW2ldLCB3cmFwcGVkQ2FsbGJhY2ssIGFjdGlvbiwgY29tYm8sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIGEgc2luZ2xlIGtleWJvYXJkIGNvbWJpbmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IHNlcXVlbmNlTmFtZSAtIG5hbWUgb2Ygc2VxdWVuY2UgaWYgcGFydCBvZiBzZXF1ZW5jZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsIC0gd2hhdCBwYXJ0IG9mIHRoZSBzZXF1ZW5jZSB0aGUgY29tbWFuZCBpc1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfYmluZFNpbmdsZShjb21iaW5hdGlvbiwgY2FsbGJhY2ssIGFjdGlvbiwgc2VxdWVuY2VOYW1lLCBsZXZlbCkge1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBhIGRpcmVjdCBtYXBwZWQgcmVmZXJlbmNlIGZvciB1c2Ugd2l0aCBNb3VzZXRyYXAudHJpZ2dlclxuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2NvbWJpbmF0aW9uICsgJzonICsgYWN0aW9uXSA9IGNhbGxiYWNrO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgbXVsdGlwbGUgc3BhY2VzIGluIGEgcm93IGJlY29tZSBhIHNpbmdsZSBzcGFjZVxuICAgICAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG5cbiAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IGNvbWJpbmF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgaW5mbztcblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBwYXR0ZXJuIGlzIGEgc2VxdWVuY2Ugb2Yga2V5cyB0aGVuIHJ1biB0aHJvdWdoIHRoaXMgbWV0aG9kXG4gICAgICAgICAgICAvLyB0byByZXByb2Nlc3MgZWFjaCBwYXR0ZXJuIG9uZSBrZXkgYXQgYSB0aW1lXG4gICAgICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIF9iaW5kU2VxdWVuY2UoY29tYmluYXRpb24sIHNlcXVlbmNlLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZm8gPSBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGluaXRpYWxpemUgYXJyYXkgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgLy8gYSBjYWxsYmFjayBpcyBhZGRlZCBmb3IgdGhpcyBrZXlcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gPSBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldIHx8IFtdO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgYW4gZXhpc3RpbmcgbWF0Y2ggaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICBfZ2V0TWF0Y2hlcyhpbmZvLmtleSwgaW5mby5tb2RpZmllcnMsIHt0eXBlOiBpbmZvLmFjdGlvbn0sIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKTtcblxuICAgICAgICAgICAgLy8gYWRkIHRoaXMgY2FsbCBiYWNrIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBzZXF1ZW5jZSBwdXQgaXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgLy8gaWYgbm90IHB1dCBpdCBhdCB0aGUgZW5kXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSB0aGUgd2F5IHRoZXNlIGFyZSBwcm9jZXNzZWQgZXhwZWN0c1xuICAgICAgICAgICAgLy8gdGhlIHNlcXVlbmNlIG9uZXMgdG8gY29tZSBmaXJzdFxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XVtzZXF1ZW5jZU5hbWUgPyAndW5zaGlmdCcgOiAncHVzaCddKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBpbmZvLm1vZGlmaWVycyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IGluZm8uYWN0aW9uLFxuICAgICAgICAgICAgICAgIHNlcTogc2VxdWVuY2VOYW1lLFxuICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICAgICAgICBjb21ibzogY29tYmluYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIG11bHRpcGxlIGNvbWJpbmF0aW9ucyB0byB0aGUgc2FtZSBjYWxsYmFja1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjb21iaW5hdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlID0gZnVuY3Rpb24oY29tYmluYXRpb25zLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbWJpbmF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uc1tpXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3RhcnQhXG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5cHJlc3MnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleWRvd24nLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXVwJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBiaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIGNhbiBiZSBhIHNpbmdsZSBrZXksIGEgY29tYmluYXRpb24gb2Yga2V5cyBzZXBhcmF0ZWQgd2l0aCArLFxuICAgICAqIGFuIGFycmF5IG9mIGtleXMsIG9yIGEgc2VxdWVuY2Ugb2Yga2V5cyBzZXBhcmF0ZWQgYnkgc3BhY2VzXG4gICAgICpcbiAgICAgKiBiZSBzdXJlIHRvIGxpc3QgdGhlIG1vZGlmaWVyIGtleXMgZmlyc3QgdG8gbWFrZSBzdXJlIHRoYXQgdGhlXG4gICAgICogY29ycmVjdCBrZXkgZW5kcyB1cCBnZXR0aW5nIGJvdW5kICh0aGUgbGFzdCBrZXkgaW4gdGhlIHBhdHRlcm4pXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gLSAna2V5cHJlc3MnLCAna2V5ZG93bicsIG9yICdrZXl1cCdcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oa2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGtleXMgPSBrZXlzIGluc3RhbmNlb2YgQXJyYXkgPyBrZXlzIDogW2tleXNdO1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUuY2FsbChzZWxmLCBrZXlzLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHVuYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiB0aGUgdW5iaW5kaW5nIHNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIHRoZSBzcGVjaWZpZWQga2V5IGNvbWJvXG4gICAgICogdG8gYW4gZW1wdHkgZnVuY3Rpb24gYW5kIGRlbGV0ZXMgdGhlIGNvcnJlc3BvbmRpbmcga2V5IGluIHRoZVxuICAgICAqIF9kaXJlY3RNYXAgZGljdC5cbiAgICAgKlxuICAgICAqIFRPRE86IGFjdHVhbGx5IHJlbW92ZSB0aGlzIGZyb20gdGhlIF9jYWxsYmFja3MgZGljdGlvbmFyeSBpbnN0ZWFkXG4gICAgICogb2YgYmluZGluZyBhbiBlbXB0eSBmdW5jdGlvblxuICAgICAqXG4gICAgICogdGhlIGtleWNvbWJvK2FjdGlvbiBoYXMgdG8gYmUgZXhhY3RseSB0aGUgc2FtZSBhc1xuICAgICAqIGl0IHdhcyBkZWZpbmVkIGluIHRoZSBiaW5kIG1ldGhvZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuYmluZC5jYWxsKHNlbGYsIGtleXMsIGZ1bmN0aW9uKCkge30sIGFjdGlvbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRyaWdnZXJzIGFuIGV2ZW50IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBib3VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKSB7XG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0oe30sIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZXNldHMgdGhlIGxpYnJhcnkgYmFjayB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gIHRoaXMgaXMgdXNlZnVsXG4gICAgICogaWYgeW91IHdhbnQgdG8gY2xlYXIgb3V0IHRoZSBjdXJyZW50IGtleWJvYXJkIHNob3J0Y3V0cyBhbmQgYmluZFxuICAgICAqIG5ldyBvbmVzIC0gZm9yIGV4YW1wbGUgaWYgeW91IHN3aXRjaCB0byBhbm90aGVyIHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG4gICAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2hvdWxkIHdlIHN0b3AgdGhpcyBldmVudCBiZWZvcmUgZmlyaW5nIG9mZiBjYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuc3RvcENhbGxiYWNrID0gZnVuY3Rpb24oZSwgZWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBcIm1vdXNldHJhcFwiIHRoZW4gbm8gbmVlZCB0byBzdG9wXG4gICAgICAgIGlmICgoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyBtb3VzZXRyYXAgJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9iZWxvbmdzVG8oZWxlbWVudCwgc2VsZi50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9wIGZvciBpbnB1dCwgc2VsZWN0LCBhbmQgdGV4dGFyZWFcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PSAnSU5QVVQnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnU0VMRUNUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBleHBvc2VzIF9oYW5kbGVLZXkgcHVibGljbHkgc28gaXQgY2FuIGJlIG92ZXJ3cml0dGVuIGJ5IGV4dGVuc2lvbnNcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmhhbmRsZUtleSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLl9oYW5kbGVLZXkuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogYWxsb3cgY3VzdG9tIGtleSBtYXBwaW5nc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5hZGRLZXljb2RlcyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBfTUFQW2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfUkVWRVJTRV9NQVAgPSBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBnbG9iYWwgbW91c2V0cmFwIGZ1bmN0aW9uc1xuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbmVlZGVkIHRvIGFsbG93IHRoZSBnbG9iYWwgbW91c2V0cmFwIGZ1bmN0aW9ucyB0byB3b3JrXG4gICAgICogbm93IHRoYXQgbW91c2V0cmFwIGlzIGEgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICovXG4gICAgTW91c2V0cmFwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50TW91c2V0cmFwID0gTW91c2V0cmFwKGRvY3VtZW50KTtcbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIGRvY3VtZW50TW91c2V0cmFwKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kLmNoYXJBdCgwKSAhPT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgTW91c2V0cmFwW21ldGhvZF0gPSAoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudE1vdXNldHJhcFttZXRob2RdLmFwcGx5KGRvY3VtZW50TW91c2V0cmFwLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gKG1ldGhvZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIE1vdXNldHJhcC5pbml0KCk7XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgd2luZG93Lk1vdXNldHJhcCA9IE1vdXNldHJhcDtcblxuICAgIC8vIGV4cG9zZSBhcyBhIGNvbW1vbiBqcyBtb2R1bGVcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBNb3VzZXRyYXA7XG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCBhcyBhbiBBTUQgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gTW91c2V0cmFwO1xuICAgICAgICB9KTtcbiAgICB9XG59KSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsLCB0eXBlb2YgIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IG51bGwpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhc2hBbW91bnQoYW1vdW50KSB7XG5cbiAgY29uc3QgcmVzID0gKGFtb3VudCkgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogcGFyc2VGbG9hdChhbW91bnQpXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVNIX0FNT1VOVCcsXG4gICAgICBwYXlsb2FkOiAwXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZEF1dGgobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6IG51bWJlclxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhudW1iZXIpIHtcblxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxuICAgID8ge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfRElHSVRTJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvYWRTYWxlKGlkLCBzYWxlcykge1xuLy8gICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gc2FsZXMuZmlsdGVyKHNhbGUgPT4ge1xuLy8gICAgIHJldHVybiBzYWxlLmlkID09IGlkXG4vLyAgIH0pXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGlmIChmaWx0ZXJlZFNhbGVzLmxlbmd0aCkge1xuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddID0gbmV3IERhdGUoZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddKVxuLy8gICAgICAgLy8gZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2NhcnQnXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFZlbnRhICMke2lkfWBcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NsaWVudCddWydzYWxlTG9hZGVkJ10gPSB0cnVlXG5cbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdLl9pZH0pXG5cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RfRk9VTkRfU0FMRScsIHBheWxvYWQ6IGlkfSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuXG4vLyAgIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuLy8gICBjb25zdCBtb3ZlbWVudHMgPSBrd2FyZ3MubW92ZW1lbnRzXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGNvbnN0IGRiID0gbmV3IFBvdWNoREIoa3dhcmdzLmRiKVxuXG4vLyAgICAgZGIucG9zdChpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogaXRlbX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogcmVzcG9uc2UuaWR9KVxuXG4vLyAgICAgICBpZiAoaXRlbS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7IC8vIElGIENSRURJVCBDUkVBVEUgQ1JFRElUIE1PVkVNRU5UXG4vLyAgICAgICAgIGNvbnN0IGRiMiA9IG5ldyBQb3VjaERCKCdnZW5lcmFsJylcbi8vICAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHJlc3BvbnNlLmlkLCBpdGVtKVxuXG4vLyAgICAgICAgIGRiMi5wb3N0KG1vdmVtZW50KS50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICB9KS5jYXRjaChlcnIgPT4geyAvLyBJRiBFUlJPUiBTSE9XIE1FU1NBR0Vcbi8vICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgbW92aW1pZW50byBkZSBjcsOpZGl0bywgcG9yIGZhdm9yIGFudWxlIGxhIGZhY3R1cmEgeSBjcmVlbGFcbi8vICAgICAgICAgICBkZSBudWV2byBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgIH0gZWxzZSB7IC8vIElGIE5PVCBDUkVESVQgU0hPVyBQQU5FTFNcbi8vICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICB9XG5cbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHNhbGVJZCwgc2FsZSkge1xuXG4vLyAgIGNvbnN0IHNvcnRlZE1vdmVtZW50cyA9IG1vdmVtZW50cy5sZW5ndGggPiAxID8gbW92ZW1lbnRzLnNvcnQoKGEsIGIpID0+IHtcbi8vICAgICBpZiAoYS5kb2N1bWVudCA8IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAxXG4vLyAgICAgfVxuLy8gICAgIGlmIChhLmRvY3VtZW50ID4gYi5kb2N1bWVudCkge1xuLy8gICAgICAgcmV0dXJuIC0xXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAwXG4vLyAgIH0pIDogbW92ZW1lbnRzXG5cbi8vICAgY29uc3QgbmV4dElkID0gc29ydGVkTW92ZW1lbnRzLmxlbmd0aCA+IDAgPyBzb3J0ZWRNb3ZlbWVudHNbMF0uZG9jdW1lbnQgKyAxIDogMVxuXG4vLyAgIGNvbnN0IG1vdmVtZW50ID0ge1xuLy8gICAgICdkb2N1bWVudCc6IG5leHRJZCxcbi8vICAgICAnZG9jVHlwZSc6ICdDTElFTlRfTU9WRU1FTlQnLFxuLy8gICAgICdjbGllbnRJZCc6IHNhbGUuY2xpZW50Ll9pZCxcbi8vICAgICAndHlwZSc6ICdDUkVESVQnLFxuLy8gICAgICdhbW91bnQnOiBwYXJzZUZsb2F0KHNhbGUuY2FydC5jYXJ0VG90YWwpLFxuLy8gICAgICdkYXRlJzogbmV3IERhdGUoKSxcbi8vICAgICAnc2FsZV9pZCc6IHNhbGVJZCxcbi8vICAgICAnc2FsZUlkJzogc2FsZS5pZCxcbi8vICAgICAnZGVzY3JpcHRpb24nOiBgVmVudGEgYSBjcsOpZGl0byBjb24gZmFjdHVyYSAjJHtzYWxlLmlkfWBcbi8vICAgfVxuXG4vLyAgIHJldHVybiBtb3ZlbWVudFxuXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENPTkZJRyBERUZBVUxUIEFYSU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR0VUIEZVTkNUSU9OUyAoUkVUUklFVkUgQUxMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURpc3BhdGNoKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIC8vIElGIFRIRSBFUlJPUiBJUyBVTkFVVE9SSVpFRCBQQUdFIFdJTEwgU0hPVyBUSEUgTUVTU0FHRVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1Eb3VibGVEaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlMiA9IGt3YXJncy5zdWNjZXNzVHlwZTJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUyLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmV0dXJuKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIHJldHVybiBlcnJvclxuICB9KVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0VUIEZVTkNUSU9OIChSRVRSSUVWRSBJTkRJVklEVUFMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBsb29rVXBWYWx1ZSA9IGt3YXJncy5sb29rVXBWYWx1ZVxuICBjb25zdCBsb29rVXBGaWVsZCA9IGt3YXJncy5sb29rVXBGaWVsZFxuICBjb25zdCBoaXN0b3J5ID0ga3dhcmdzLmhpc3RvcnlcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBrd2FyZ3MucmVkaXJlY3RVcmxcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGNvbnNvbGUubG9nKGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKVxuICAgIGF4aW9zLmdldChgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gSUYgVEhFUkUgSVMgTU9SRSBUSEFOIE9ORSBFTEVNRU5UIEZJTFRFUkVEXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQVRFTkNJw5NOJywgYEV4aXN0ZSBtYXMgZGUgdW4gJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgJHtrd2FyZ3MubG9va1VwTmFtZX06XG4gICAgICAgICAgJHtrd2FyZ3MubG9va1VwVmFsdWV9LCBzZSB1dGlsaXphcsOhIGVsIHByaW1lcm8gZW4gbGlzdGEsIHBvciBsbyBxdWUgcHVlZGUgbm8gc2VyIGVsIG1pc21vIHF1ZSB1ZCBkZXNlYVxuICAgICAgICAgIGFjdHVhbGl6YXIsIGVzdG8gcHVlZGUgZGViZXJzZSBhIHVuIGVycm9yLCBwb3IgZmF2b3IgcmV2aXNlIGxvc1xuICAgICAgICAgIGRhdG9zIG8gY29udGFjdGUgY29uIGVsIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEuYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUyLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoRXJyb3JUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBObyBoYXkgJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgdmFsb3IgZGUgJHtrd2FyZ3MubG9va1VwTmFtZX06ICR7a3dhcmdzLmxvb2tVcFZhbHVlfWAsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IGhpc3RvcnkucHVzaChyZWRpcmVjdFVybCkgfSlcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciBlbCB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgfSlcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBkZWxldGUgaXRlbVsnaWQnXVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG4gIGNvbnN0IGlzU2FsZSA9IGt3YXJncy5pc1NhbGVcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGlmIChpc1NhbGUpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIEZVTkNUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGt3YXJncy5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogJyd9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERPVUJMRSBVUERBVEUgUEFSVElBTExZIEZVTkNUSU9OIChQQVRDSClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJdGVtcyhrd2FyZ3MsIGt3YXJnczIpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICBjb25zdCBpdGVtMiA9IGt3YXJnczIuaXRlbVxuICBjb25zdCB1cmwyID0ga3dhcmdzMi51cmxcbiAgY29uc3QgbG9nQ29kZTIgPSBrd2FyZ3MyLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZDIgPSBrd2FyZ3MyLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwyID0ga3dhcmdzMi5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbjIgPSBrd2FyZ3MyLmxvZ0Rlc2NyaXB0aW9uXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLy8gRklSU1QgUEFUQ0ggVEhFTlxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gU0VDT05EIFBBVENIXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICAgICAgdXJsOiB1cmwyLFxuICAgICAgICAgIGRhdGE6IGl0ZW0yXG4gICAgICAgIH0pXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIFRIRU5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGt3YXJnczIucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAga3dhcmdzMi5oaXN0b3J5LnB1c2goa3dhcmdzMi5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJnczIuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgICAgICBzYXZlTG9nKGxvZ0NvZGUyLCBsb2dNb2RlbDIsIGl0ZW1PbGQyLCBpdGVtMiwgbG9nRGVzY3JpcHRpb24yLCB1c2VyKVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIENBVENIXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJnczIuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICAgICAgfSlcblxuICAgICAgLy8gRklSU1QgUEFUQ0ggQ0FUQ0hcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gREVMRVRFIEZVTkNUSU9OIChERUxFVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IG1vZGVsID0ga3dhcmdzLm1vZGVsTmFtZVxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywgJ0VsZW1lbnRvIGVsaW1pbmFkbyBzYXRpZmFjdG9yaWFtZW50ZScpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBIdWJvIHVuIGVycm9yIGFsIGVsaW1pbmFyIGVsICR7bW9kZWx9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FEIENPTkZJRyBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdsb2JhbENvbmZpZyhzZWN0aW9uLCBuYW1lLCBzdWNjZXNzLCBmYWlsKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGlmIChuYW1lKSB7XG5cbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxjb25mLyR7c2VjdGlvbn1fXyR7bmFtZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE8gU2luZ2xlIGNvbmZpZyBmZXRjaFxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbHByZWZzYCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyBUaGUgcHJvcGVydHkgdG8gbW9kaWZ5IGluIHJlZHVjZXJcbiAgICAgICAgY29uc3QgY29uZmlnID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgID8gcmVzcG9uc2UuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uID09IHNlY3Rpb25cbiAgICAgICAgICB9KVxuICAgICAgICAgIDoge31cbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XG4gICAgICAgIGNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGRhdGFbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2VzcywgcGF5bG9hZDoge2RhdGE6IGRhdGEsIHNlY3Rpb246IHNlY3Rpb259fSlcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgTE9HIEZVTkNUSU9OIChDUkVBVEUgTE9HKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvZyAoY29kZSwgbW9kZWwsIG9sZE9iamVjdCwgb2JqZWN0LCBkZXNjcmlwdGlvbiwgdXNlcikge1xuXG4gIGNvbnN0IHByZXZPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QpXG4gIGNvbnN0IG5ld09iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9iamVjdClcbiAgY29uc3QgdXNlcjIgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuXG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgY29kZTogY29kZSxcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgcHJldl9vYmplY3Q6IHByZXZPYmplY3QsXG4gICAgbmV3X29iamVjdDogbmV3T2JqZWN0LFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB1c2VyOiB1c2VyMlxuICB9XG5cbiAgYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbG9ncy8nLFxuICAgIGRhdGE6IGl0ZW1cbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICB9XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgTG9nIGRlbCBtb3ZpbWllbnRvLCBFUlJPUjogJHtlcnJ9LmApXG4gICAgfSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBVVggRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTkVYVCBOVU1FUklDIENPREVcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TnVtZXJpY0NvZGUoZWxlbWVudHMsIGZpZWxkKSB7XG5cbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuXG4gICAgbGV0IGtleXMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50W2ZpZWxkXSlcblxuICAgIGtleXMgPSBrZXlzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgIGNvbnN0IG1heCA9IGtleXMucG9wKClcbiAgICBjb25zdCBuZXh0ID0gcGFyc2VJbnQobWF4KSArIDFcbiAgICByZXR1cm4gbmV4dC50b1N0cmluZygpXG5cbiAgfVxuXG4gIHJldHVybiAxXG5cbn1cblxuLy8gTkVYVCBQUkVWSU9VUyBJVEVNU1xuZXhwb3J0IGZ1bmN0aW9uIHNldE5leHRQcmV2SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBjb2RlID0ga3dhcmdzLmNvZGVcbiAgY29uc3QgaXRlbXMgPSBrd2FyZ3MuaXRlbXNcbiAgY29uc3QgY29kZUZpZWxkID0ga3dhcmdzLmNvZGVGaWVsZFxuICBsZXQgcHJldmlvdXMgPSAwXG4gIGxldCBuZXh0ID0gMFxuXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtjb2RlRmllbGRdIC0gYltjb2RlRmllbGRdXG4gIH0pXG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbVtjb2RlRmllbGRdID09IGNvZGUpIHtcbiAgICAgIG5leHQgPSBpbmRleCArIDFcbiAgICAgIHByZXZpb3VzID0gaW5kZXggLSAxXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuZXh0Q29kZSA9IGl0ZW1zW25leHRdID8gaXRlbXNbbmV4dF1bY29kZUZpZWxkXSA6IGl0ZW1zWzBdW2NvZGVGaWVsZF1cbiAgY29uc3QgcHJldkNvZGUgPSBpdGVtc1twcmV2aW91c10gPyBpdGVtc1twcmV2aW91c11bY29kZUZpZWxkXSA6IGl0ZW1zLnBvcCgpW2NvZGVGaWVsZF1cblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDoge25leHQ6IG5leHRDb2RlLCBwcmV2aW91czogcHJldkNvZGV9fSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvdXRpbHMvYXBpLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjQ2FydChpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxuXG4gICAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtLnByb2R1Y3QsIGl0ZW0ucXR5LCBpdGVtLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcbiAgICBuZXdJdGVtLnRvdGFsV2l0aEl2ID0gZGF0YS50b3RhbFdpdGhJdlxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcbiAgICBuZXdJdGVtLnByaWNlVG9Vc2UgPSBkYXRhLnByaWNlVG9Vc2VcblxuICAgIHJldHVybiBuZXdJdGVtXG5cbiAgfSlcblxuICByZXR1cm4ge3R5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBuZXdDYXJ0fVxuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb3RlOiBsb3RlTnVtLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XG5cbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXG5cbiAgY29uc3QgcHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDogY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSkge1xuXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChjYXJ0ID0+IGNhcnQucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgY2FydC5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcblxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcbiAgaWYgKHBlckxpbmUpIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxuICAgICAgPyB7XG4gICAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgcXR5LFxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gcmVzXG5cbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuXG4vLyBjYWxjdWxhdGVzIHRoZSBzdWJ0b3RhbCBieSBsaW5lLCBhbHNvIHRoZSB0b3RhbCB3aXRoIGl2IGluY2x1ZGVkLCB0aGUgZGlzY291bnQgaW4gY3VycmVuY3kgZm9ybWF0XG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBwcmljZSA9IHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KVxuXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxuXG4gIGNvbnN0IGl2MSA9IChwcm9kdWN0LnVzZV90YXhlcylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjJcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcblxuICByZXR1cm4ge1xuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGlzY291bnRDdXJyZW5jeSxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBwcmljZVRvVXNlOiBwcmljZVxuICB9XG5cbn1cblxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xuXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIHJldHVybiB7XG4gICAgdXVpZDogdXVpZCxcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgcXR5OiBuZXdRdHksXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxuICAgIGxvdGU6IGl0ZW1zSW5DYXJ0W2luZGV4XS5sb3RlLFxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxuZnVuY3Rpb24gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpIHtcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcbmZvcm1hdE1vbmV5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2FwcC5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtmZWN0aFByb2ZpbGV9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCdcbmltcG9ydCBGZXRjaGluZyBmcm9tICcuLi8uLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCdcblxuLy8gaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hpbmc6IHN0b3JlLmZldGNoaW5nLmZldGNoaW5nLFxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMucHJvcHMuZmV0Y2hpbmcgPyA8RmV0Y2hpbmcgLz4gOiAnJ1xuICAgIGNvbnN0IG1haW5Db250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ21haW5Db250YWluZXInIDogJ21haW5Db250YWluZXIgc2lkZUhpZGRlbidcbiAgICBjb25zdCBjb250ZW50ID0gPFJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9e21haW5Db250YWluZXJDbGFzc30+XG4gICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGFpbmVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge3JvdXRlc31cbiAgICAgICAgICAgIHtmZXRjaGluZ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdXRlcj5cblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoUHJvZmlsZSgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9wcm9maWxlLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnLCBwYXlsb2FkOiB7dXNlcjogcmVzcG9uc2UuZGF0YVswXS5maWVsZHMsIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGFbMV0uZmllbGRzfX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aElzQWRtaW5Mb2NrZWQoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJwcmVmcy9hZG1pbl9faXNfYWRtaW5fbG9ja2VkLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudmFsdWV9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9ob21lL2hvbWUuanN4J1xuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcblxuY29uc3Qgcm91dGVzID0gPGRpdiBjbGFzc05hbWU9J2hlaWdoMTAwJz5cblxuICA8Um91dGUgZXhhY3QgcGF0aD0nL3NhbGVzJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDxSb3V0ZSBwYXRoPScvc2FsZXMvc2FsZScgY29tcG9uZW50PXtTYWxlfSAvPlxuXG48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hPTUVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J01haW4gaGVpZ2gxMDAnPlxuICAgICAgSE9NRVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC9jb250ZW50LmpzeCdcbmltcG9ydCBBc2lkZSBmcm9tICcuL2FzaWRlL2FzaWRlLmpzeCdcbmltcG9ydCBTZWFyY2hQcm9kdWN0IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCdcbmltcG9ydCBTZWFyY2hDbGllbnQgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3gnXG5pbXBvcnQgUGF5UGFuZWwgZnJvbSAnLi9wYXkvcGF5UGFuZWwuanN4J1xuaW1wb3J0IEludm9pY2VQYW5lbCBmcm9tICcuLi9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3gnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NBTEVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NhbGUnPlxuICAgICAgPENvbnRlbnQgLz5cbiAgICAgIDxBc2lkZSAvPlxuXG4gICAgICA8U2VhcmNoUHJvZHVjdCAvPlxuICAgICAgPFNlYXJjaENsaWVudCAvPlxuICAgICAgPFBheVBhbmVsIC8+XG4gICAgICA8SW52b2ljZVBhbmVsIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvbWFpbi5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCdcbmltcG9ydCBDYXJ0IGZyb20gJy4uLy4uL2dlbmVyYWwvY2FydC9jYXJ0LmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICB0b2dnbGVXaWR0aCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudCBmdWxsV2lkdGgnIDogJ3NhbGUtY29udGVudCdcbiAgICBjb25zdCBjYXJ0Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtY2FydCcgOiAnc2FsZS1jb250ZW50LWNhcnQgZnVsbEhlaWdodCdcbiAgICBjb25zdCB0b3RhbENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LXRvdGFsJyA6ICdzYWxlLWNvbnRlbnQtdG90YWwgY29sbGFwc2VkJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtY29udGVudC1wcm9kdWN0JyA+XG4gICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJ0Q2xhc3N9ID5cbiAgICAgICAgPENhcnQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RvdGFsQ2xhc3N9ID5cbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1sZWZ0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHtwcm9kdWN0U2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgaW5wdXRWYWw6IHN0b3JlLnByb2R1Y3RzLmlucHV0VmFsLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZCxcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29kZUlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLmNvZGVJbnB1dC5mb2N1cygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJPRFVDVFMnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICBjb25zdCBwcm9kdWN0S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9wcm9kdWN0cycsXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX1BST0RVQ1RTX0ZVTEZJTExFRCcsXG4gICAgICBlcnJvclR5cGU6ICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChwcm9kdWN0S3dhcmdzKSlcblxuICB9XG5cbiAgc2VhcmNoUHJvZHVjdENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1BST0RVQ1RfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBpZiAoZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVswXSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgICBsZXQgcXR5ID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMV1cbiAgICAgICAgcXR5ID0gKGlzTmFOKHF0eSkpXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHF0eSkgLy8gaWYgbm8gcXR5IHNldHMgdG8gMVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcbiAgICAgICAgICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgIC8vICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiAwfSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2R1Y3RcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxiPlByb2R1Y3RvOjwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFyY29kZScgLz5cbiAgICAgICAgICA8aW5wdXQgaWQ9J3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvZGVJbnB1dCA9IGlucHV0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2UgZWwgQ8OzZGlnbyBkZWwgUHJvZHVjdG8nXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUtaW5wdXQgbW91c2V0cmFwIGZvcm0tY29udHJvbCBpbnB1dC1sZycgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1zZWFyY2gnPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gNjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgcmV0dXJuIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL2NhcnRJdGVtcy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzLFxuICAgIC8vIHByb2R1Y3RTZWFyY2hwYW5lbFZpc2libGU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtjJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXG5cbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCB1c2VMb3RlID0gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnXG4gICAgLy8gICA/IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZy5jYXJ0SXRlbVVzZUxvdGVcbiAgICAvLyAgIDogZmFsc2VcblxuICAgIC8vIGNvbnN0IGxvdGVGaWVsZCA9IHVzZUxvdGVcbiAgICAvLyAgID8gPHRoPkxvdGU8L3RoPlxuICAgIC8vICAgOiA8dGggLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FydCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2Q8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICA8aDU+QXJ0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1xdHknPlxuICAgICAgICAgIDxoNT5DYW50PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRpc2NvdW50Jz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItaXZhJz5cbiAgICAgICAgICA8aDU+SVY8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXRvdGFsJz5cbiAgICAgICAgICA8aDU+VG90YWwgSVZJPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcnRJdGVtcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVUb3RhbHMsIHJlbW92ZUZyb21DYXJ0fSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge3VwZGF0ZUl0ZW1EaXNjb3VudCwgdXBkYXRlSXRlbUxvdGUsIHVwZGF0ZVF0eSwgYWRkU3ViT25lLCB1cGRhdGVRdHlDb2RlfSBmcm9tICcuLi9wcm9kdWN0L2FjdGlvbnMnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGluQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gT24gY29tcG9uZW50IHVwZGF0ZSAoVGhlIGNhcnQgaGFzIGJlZW4gbW9kaWZpZWQpIGNhbGxzIHRoZSB1cGRhdGUgdG90YWxzIG1ldGhvZCBpbiBhY3Rpb25zIGZpbGUuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlVG90YWxzKHRoaXMucHJvcHMuaW5DYXJ0KSlcblxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYm9keScpXG4gICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodFxuXG4gIH1cblxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XG4gIC8vICAgaWYgKHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgIT0gbmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICBfdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2YnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZX1gKS5mb2N1cygpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrLScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCBmYWxzZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcbiAgICAgIGFsZXJ0aWZ5LnByb21wdChgTnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG9gLCAnSW5ncmVzZSBsYSBudWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkbycsICcnXG4gICAgICAgICwgZnVuY3Rpb24oZXZ0LCB2YWx1ZSkge1xuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXG4gICAgICAgICAgICBfX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIF9fdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgICB9XG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgLnNldCgnbGFiZWxzJywge29rOiAnT2snLCBjYW5jZWw6ICdDYW5jZWxhcid9KVxuICAgIH0pXG4gIH1cblxuICBkaXNjb3VudElucHV0S2V5UHJlc3MoY29kZSwgZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gICAgfVxuXG4gIH1cblxuICBkaXNjb3VudElucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dENoYW5nZShjb2RlLCBldikge1xuXG4gICAgY29uc3QgcXR5ID0gcGFyc2VGbG9hdCgoZXYudGFyZ2V0LnZhbHVlKSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVF0eShjb2RlLCBxdHksIHRoaXMucHJvcHMuaW5DYXJ0LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgfVxuXG4gIHF0eUlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGxvdGVJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gICAgfVxuXG4gIH1cblxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gIH1cblxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG5cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUpKVxuXG4gIH1cblxuICBmaWVsZEZvY3VzKGV2KSB7XG4gICAgZXYudGFyZ2V0LnNlbGVjdCgpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGl0ZW1zIGluIGNhcnQgdXNpbmcgdGFibGUgcm93c1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAoaXRlbS5wcm9kdWN0LmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSB8fCBpdGVtLnByb2R1Y3QuYmFyY29kZSA9PSB0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlKVxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcbiAgICAgICAgOiAnY2FydC1ib2R5LWl0ZW0nXG5cbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xuXG4gICAgICBjb25zdCB0YXhlczEgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XG4gICAgICAgIGlkPXtgcXR5JHtpdGVtLnByb2R1Y3QuY29kZX1gfVxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgb25LZXlVcD17dGhpcy5xdHlJbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIHZhbHVlPXtpdGVtLnF0eX1cbiAgICAgIC8+XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50RmllbGQgPSB0aGlzLnByb3BzLmNsaWVudC5zYWxlTG9hZGVkXG4gICAgICAgID8gPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cbiAgICAgICAgLz5cbiAgICAgICAgOiA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpc2NvdW50SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRpc2NvdW50SW5wdXRPbkJsdXIuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIC8+XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlQ2xhc3N9XG4gICAgICAgIGtleT17aXRlbS51dWlkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuY29kZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudGlkYWQ8L2g1PlxuICAgICAgICAgIHtxdHlGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtkaXNjb3VudEZpZWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWl2YSc+XG4gICAgICAgICAgPGg1PklWQTwvaDU+XG4gICAgICAgICAge3RheGVzMX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cbiAgICAgICAgICAgIOKCoSB7aXRlbS50b3RhbFdpdGhJdi5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cmVtb3ZlSWNvbkNsYXNzfT5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpdGVtLnV1aWQpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzLWNpcmNsZScgLz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICA8L2Rpdj5cbiAgICB9KVxuXG4gICAgLy8gcmV0dXJuIDx0Ym9keSBjbGFzc05hbWU9J3RhYmxlLWJvZHknPlxuICAgIC8vICAge2l0ZW1zfVxuICAgIC8vIDwvdGJvZHk+XG5cbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XG4gICAgICB7aXRlbXMyfVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRvdGFscyB0aGUgY2FydCBzdG9yZSBpdGVtLCBnZW5lcmF0ZXMgbmV3IHZhbHVlcyBhY2NvcmRpbmcgY2FydCBpdGVtIG9iamVjdHMsIHRoZW4gcHVzaCB0aGUgdG8gc3RvcmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbHMoaW5DYXJ0KSB7XG5cbiAgbGV0IHN1YnRvdGFsID0gMFxuICBsZXQgc3ViVG90YWxOb0Rpc2NvdW50ID0gMFxuICBsZXQgdGF4ZXMgPSAwXG4gIGxldCB0b3RhbCA9IDBcbiAgbGV0IGRpc2NvdW50VG90YWwgPSAwXG5cbiAgLy8gZm9yIEVhY2ggZWxlbWVudCBhZGRzIHRoZSB2YWx1ZXMgdG8gZ2V0IHRvdGFsc1xuICBpbkNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50ID0gc3ViVG90YWxOb0Rpc2NvdW50ICsgaXRlbS5zdWJUb3RhbE5vRGlzY291bnRcblxuICAgIHN1YnRvdGFsID0gc3VidG90YWwgKyBpdGVtLnN1YnRvdGFsXG5cbiAgICBjb25zdCB0YXhlc0NhbGMgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgICA6IDBcblxuICAgIGNvbnN0IHRheGVzQ2FsYzIgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlczIpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMiAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgdGF4ZXMgPSB0YXhlcyArIHRheGVzQ2FsYyArIHRheGVzQ2FsYzJcblxuICAgIGRpc2NvdW50VG90YWwgPSBkaXNjb3VudFRvdGFsICsgaXRlbS5kaXNjb3VudEN1cnJlbmN5IC8vIHRoaXMgaXMgdGhlIHZhbHVlIGluIGN1cnJlbmN5XG5cbiAgfSlcbiAgLy8gVE9ETyBDb25maWcgZm9yIHJvdW5kIG9yIG5vdFxuICAvLyB0b3RhbCA9IE1hdGgucm91bmQoc3VidG90YWwgKyB0YXhlcylcbiAgdG90YWwgPSBzdWJ0b3RhbCArIHRheGVzXG4gIC8vIHJldHVycyBhIGRpc3BhdGNoIHdpdGggYSBwYXlsb2FkIG9mIHRoZSBvYnRhaW5lZCB2YWx1ZXNcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlRfVE9UQUxTJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBzdWJ0b3RhbDogc3VidG90YWwsXG4gICAgICB0YXhlczogdGF4ZXMsXG4gICAgICB0b3RhbDogdG90YWwsXG4gICAgICBkaXNjb3VudFRvdGFsOiBkaXNjb3VudFRvdGFsLFxuICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnRcbiAgICB9XG4gIH1cbn1cblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpdGVtc0luQ2FydCwgY29kZSkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1JFTU9WRV9GUk9NX0NBUlQnLFxuICAgICAgcGF5bG9hZDogaW5kZXhJbkNhcnRcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuLi8uLi9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4J1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi4vYnV0dG9ucy9idXR0b25zLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgdG9nZ2xlV2lkdGggKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgYXNpZGVDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUgY29sbGFwc2VkJyA6ICdzYWxlLWFzaWRlJ1xuICAgIGNvbnN0IGFzaWRlQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWFzaWRlLWNvbnRlbnQgY29sbGFwc2VkJyA6ICdzYWxlLWFzaWRlLWNvbnRlbnQnXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLWFycm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdy1jb250YWluZXInIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tcmlnaHQnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPENsaWVudCAvPlxuICAgICAgICA8VG90YWxzIC8+XG4gICAgICAgIDxCdXR0b25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QnV0dG9ucyAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLXRvdGFsJyA+XG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tcmlnaHQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjbGllbnRTZWxlY3RlZCwgc2VhcmNoQ2xpZW50LCB1c2VyU2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge2dldENsaWVudERlYnR9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dldENsaWVudERlYnQnXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHMsXG4gICAgY2xpZW50U2VsZWN0ZWQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgY2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHVzZXJzOiBzdG9yZS5jbGllbnRzLnVzZXJzLFxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50cyxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jbGllbnRTZWxlY3RlZCAhPSB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkKSB7XG4gICAgICAvLyBzZXQgdGhlIGRpc2NvdW50OiBkZWZhdWx0IHZhbHVlIG9yIDBcblxuICAgICAgaWYgKCFuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQuc2FsZUxvYWRlZCkge1xuXG4gICAgICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgICAgICBjbGllbnRfaWQ6IG5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5pZCxcbiAgICAgICAgICBzdWNjZXNzOiAnU0VUX0NMSUVOVF9ERUJUJyxcbiAgICAgICAgICBmYWlsOiAnU0VUX0NMSUVOVF9ERUJUX0ZBSUxFRCdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQobmV4dFByb3BzLmNhcnQsIGRpc2NvdW50LCBuZXh0UHJvcHMuY2xpZW50KSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRDbGllbnREZWJ0KGt3YXJncykpXG5cbiAgICAgICAgLy8gU0VUUyBWQUxVRSBPRiBERUZBVUxUIERJU0NPVU5UIFRPIEZJRUxEIE9SIDBcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9DTElFTlRTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9jbGllbnRzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB9XG5cbiAgfVxuXG4gIHVzZXJTZWxlY3QoZXYpIHtcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVzZXJTZWxlY3RlZChfaWQsIHRoaXMucHJvcHMudXNlcnMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHVzZXJVblNlbGVjdChldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdVU0VSX0NMRUFSJywgcGF5bG9hZDogJyd9KSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHNlYXJjaENsaWVudENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQoKSlcblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyBTRUxFQ1QyIERBVEFcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXG4gICAgICA/IGAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubmFtZX0gJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmxhc3RfbmFtZX1gXG4gICAgICA6ICdDbGllbnRlIENvbnRhZG8nXG5cbiAgICAvLyBjb25zdCBjcmVkaXRJY29uID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5oYXNfY3JlZGl0KVxuICAgIC8vICAgPyAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWltZyc+XG4gICAgICAgIDxpbWcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YSc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPkNsaWVudGUgOjwvaDM+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Tm9tYnJlIDo8L2gzPlxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENIRUNLIFBFUk1JU1NJT05TIEZPUiBDVVJSRU5UIFVTRVJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnREZWJ0KGt3YXJncykge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe2NsaWVudF9pZDoga3dhcmdzLmNsaWVudF9pZH0pXG4gICAgLy8gY2FsbHMgdGhlIGZ1bmN0aW9uIGluIGJhY2tlbmQgdG8gY2hlY2sgcGVybWlzc2lvbnNcbiAgICBheGlvcy5wb3N0KCcvYXBpL2dldGNsaWVudGRlYnQvJywgZGF0YSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3Muc3VjY2VzcywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBpbnRlbnRhciB2ZXJpZmljYXIgbG9zIHBlcm1pc29zIGRlIHVzdWFyaW8sIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmZhaWwsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3V0aWxzL2dldENsaWVudERlYnQuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc2NvdW50VmFsOiAwXG4gICAgfVxuICB9XG5cbiAgc2hvd0ludm9pY2VQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXG4gICAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZGlzY291bnRWYWwgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA6IDBcbiAgICB9XG5cbiAgfVxuXG4gIGlucHV0T25CbHVyKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcblxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgIH1cblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3RhbHMnPlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAncGFkZGluZ1RvcCc6ICcwJyxcbiAgICAgICAgJ21hcmdpblRvcCc6ICcwJ1xuICAgICAgfX0gY2xhc3NOYW1lPSdiZy13aGl0ZSByaWdodC1pdGVtJz5cbiAgICAgICAgey8qIDxzcGFuPlxuICAgICAgICAgIDxiPlRvdGFsZXM6PC9iPlxuICAgICAgICA8L3NwYW4+PGJyIC8+ICovfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0b3RhbHMtdGFibGUnPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlN1Yi1Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzM3JSdcbiAgICAgICAgICAgICAgfX0+RGVzY3VlbnRvICU8L3RoPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPSdkaXNjb3VudEZpZWxkJ1xuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5pbnB1dE9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzM3cHgnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDAgMCAxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnRTaXplJzogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzYWxlX2dsb2JhbF9kaXNjb3VudF9pbnB1dCBmb3JtLWNvbnRyb2wnIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EZXNjdWVudG86PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5JVjo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgey8qIDx0aCBvbkNsaWNrPXt0aGlzLnNob3dJbnZvaWNlUGFuZWwuYmluZCh0aGlzKX0+VG90YWw6PC90aD4gKi99XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNob3dQYXlQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd0lub2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd1NhbGVQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19TQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93UHJlc2FsZXNQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QUkVTQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBuZXdTYWxlKCkge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdORVdfU0FMRScsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICA/IDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dJbm9pY2VQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgICAgRmFjdHVyYVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5uZXdTYWxlLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgICBOdWV2YSBWZW50YVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1yZWZyZXNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDogJydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGJ1dHRvbnMnPlxuXG4gICAgICB7LyogPHNwYW4+XG4gICAgICAgIDxiPlBhZ286PGJyIC8+PC9iPlxuICAgICAgPC9zcGFuPiAqL31cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93UGF5UGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBDb2JyYXJcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1NhbGVQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIFZlbnRhcyBkZWwgZMOtYVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQcmVzYWxlc1BhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgUHJlLVZlbnRhc1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7YnV0dG9uc31cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoRm9ybS5qc3gnXG5pbXBvcnQgUmVzdWx0c1RhYmxlIGZyb20gJy4vcmVzdWx0c1RhYmxlLmpzeCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3Zpc2libGU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnZpc2libGV9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGFuZWxDbGljayhldikge1xuXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICB9XG5cbiAgfVxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxuICAgICAgPyAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0IGlzLXZpc2libGUnXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Zpc2libGVPck5vdH0gb25DbGljaz17dGhpcy5wYW5lbENsaWNrLmJpbmQodGhpcyl9PlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgPGgxPkLDunNxdWVkYSBkZSBQcm9kdWN0bzwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cbiAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgICAgICA8UmVzdWx0c1RhYmxlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaFByb2R1Y3R9IGZyb20gJy4vYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxuICAgIHNlYXJjaFZhbHVlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5zZWFyY2hWYWx1ZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNlYXJjaFByb2R1Y3RBY3Rpb24oKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoUHJvZHVjdEFjdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaFByb2R1Y3QodGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSwgdGhpcy5wcm9wcy5wcm9kdWN0cykpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBEZXNjcmlwY2nDs246PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J3Byb2R1Y3Qtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0yJz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J3Byb2R1Y3Qtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZFRhYmxlLCBoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoUHJvZHVjdHMucHJvZHVjdHNNYXRjaGVkLCBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzZWxlY3RQcm9kdWN0KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RQcm9kdWN0LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uY29kZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5zZWxscHJpY2V9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgfSlcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgPHRhYmxlIGlkPSdwcm9kdWN0ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwY2nDs248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0ncHJvZHVjdC1zZWFyY2gtdGFibGUtYm9keSc+XG4gICAgICAgICAgICAgIHtwcm9kdWN0c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoRm9ybS5qc3gnXG5pbXBvcnQgUmVzdWx0c1RhYmxlIGZyb20gJy4vcmVzdWx0c1RhYmxlLmpzeCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3Zpc2libGU6IHN0b3JlLnNlYXJjaENsaWVudHMudmlzaWJsZX1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaENsaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBhbmVsQ2xpY2soZXYpIHtcblxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgfVxuXG4gIH1cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgdmlzaWJsZU9yTm90ID0gKHRoaXMucHJvcHMudmlzaWJsZSlcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCBpcy12aXNpYmxlJ1xuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLWNsaWVudCBmcm9tLXJpZ2h0J1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2NkLXBhbmVsLWhlYWRlcic+XG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgQ2xpZW50ZTwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cbiAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgICAgICA8UmVzdWx0c1RhYmxlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7c2VhcmNoQ2xpZW50fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hWYWw6ICcnXG4gICAgfVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNlYXJjaENsaWVudEFjdGlvbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgfVxuXG4gIH1cblxuICBzZWFyY2hDbGllbnRBY3Rpb24oKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5zdGF0ZS5zZWFyY2hWYWxcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCh2YWwsIHRoaXMucHJvcHMuY2xpZW50cykpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjbGllbnQtc2VhcmNoLWlucHV0Jz5Cw7pzcXVlZGEgcG9yIE5vbWJyZTo8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNyBjb2wtc20tOCc+XG4gICAgICAgICAgICA8aW5wdXQgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXG4gICAgICAgICAgICB9fSBpZD0nY2xpZW50LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J2NsaWVudC1zZWFyY2gtYnRuJyBzdHlsZT17e1xuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgICAnd2lkdGgnOiAnNDhweCdcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIGZvcm0tY29udHJvbCBtYXJnaW5CdG5BZGQyJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZH0gZnJvbSAnLi4vLi4vY2xpZW50cy9hY3Rpb25zLmpzJ1xuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoQ2xpZW50cy5jbGllbnRzTWF0Y2hlZCwgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2VsZWN0Q2xpZW50KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjbGllbnRzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCBoYXNDcmVkaXQgPSAoaXRlbS5oYXNfY3JlZGl0KVxuICAgICAgICA/ICdTSSdcbiAgICAgICAgOiAnTk8nXG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RDbGllbnQuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2Ake2l0ZW0ubmFtZX0gJHtpdGVtLmxhc3RfbmFtZX1gfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2hhc0NyZWRpdH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDBcbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICA8dGFibGUgaWQ9J2NsaWVudGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Tm9tYnJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Q3LDqWRpdG88L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TYWxkbzwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdjbGllbnQtc2VhcmNoLXRhYmxlLWJvZHknPlxuICAgICAgICAgICAgICB7Y2xpZW50c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgUGF5TWV0aG9kIGZyb20gJy4vY29tcG9uZW50cy9wYXlNZXRob2QuanN4J1xuaW1wb3J0IFBheUNhc2ggZnJvbSAnLi9jb21wb25lbnRzL3BheUNhaHMuanN4J1xuaW1wb3J0IFBheUNhcmQgZnJvbSAnLi9jb21wb25lbnRzL3BheUNhcmQuanN4J1xuaW1wb3J0IFBheUNyZWRpdCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCdcbmltcG9ydCBQYXlPdGhlciBmcm9tICcuL2NvbXBvbmVudHMvcGF5T3RoZXIuanN4J1xuaW1wb3J0IFBheVNpZGVCYXIgZnJvbSAnLi9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtwYW5lbFZpc2libGU6IHN0b3JlLnBheS5pc1Zpc2libGUsIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgaGlkZVBhbmVsKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgaXNWaXNpYmxlID0gKHRoaXMucHJvcHMucGFuZWxWaXNpYmxlKVxuICAgICAgPyAncGF5LXBhbmVsIGlzLXZpc2libGUnXG4gICAgICA6ICdwYXktcGFuZWwnXG5cbiAgICBsZXQgcGF5TWV0aG9kID0gJydcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XG5cbiAgICAgIGNhc2UgJ0NBU0gnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q2FzaCAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyBjYXNlXG5cbiAgICAgIGNhc2UgJ0NBUkQnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q2FyZCAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyBjYXNlXG5cbiAgICAgIGNhc2UgJ0NSRUQnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q3JlZGl0IC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vICBjYXNlXG5cbiAgICAgIGNhc2UgJ09USEUnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5T3RoZXIgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgfSAvLyBzd2l0Y2hcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1wYW5lbC1tYWluJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1wYW5lbC1oZWFkZXInPlxuICAgICAgICAgIFJlZ2lzdHJhciBQYWdvXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxQYXlNZXRob2QgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LWFyZWEtY29udGFpbmVyJz5cblxuICAgICAgICAgIHtwYXlNZXRob2R9XG5cbiAgICAgICAgICA8UGF5U2lkZUJhciAvPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU1ldGhvZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY2xpY2tDaGFuZ2VQYXlNZXRob2QobWV0aG9kLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NIQU5HRV9QQVlfTUVUSE9EJywgcGF5bG9hZDogbWV0aG9kfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdCc+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVNIJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVNIJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbW9uZXknIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NBUkQnKX0gY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ0NBUkQnXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cbiAgICAgICAgICA8c3Bhbj5UYXJqZXRhPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NSRURJVCcpfSAqL31cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+Q3LDqWRpdG88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlcnMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdPVEhFJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhc2hBbW91bnR9IG9uQ2hhbmdlPXt0aGlzLnBheUFtb3VudENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXJkQXV0aCwgdXBkYXRlU3RvcmVDYXJkRGlnaXRzfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjYXJkQXV0aDogc3RvcmUucGF5LmNhcmRBdXRoLCBjYXJkRGlnaXRzOiBzdG9yZS5wYXkuY2FyZERpZ2l0c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYXlDYXJkQXV0aENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkQXV0aChldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcGF5Q2FyZERpZ2l0c0NoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkRGlnaXRzKGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPjQgRElHSVRPUzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmREaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmREaWdpdHNDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+QVVUT1JJWkFDScOTTjo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmRBdXRofSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkQXV0aENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLCBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDcmVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdmFpbGFibGUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZGVidClcbiAgICBjb25zdCBjbGllbnRMaW1pdCA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke3BhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuICAgIGNvbnN0IGNsaWVudEF2YWlsYWJsZSA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke2F2YWlsYWJsZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+TMONTUlURTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRMaW1pdH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RElTUE9OSUJMRTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRBdmFpbGFibGV9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+IDxzcGFuPk90cm88L3NwYW4+IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBTYXZlQnRuIGZyb20gJy4uLy4uL3NhdmUvc2F2ZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICAgIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZCxcbiAgICBwYXk6IHN0b3JlLnBheSxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXG4gICAgLy8gc2FsZUlkOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlSWQsXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNhdmVCdG4oKSB7XG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlclxuICAgIGNvbnN0IHNhbGUgPSB7XG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxuICAgICAgY2xpZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCksXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7XG4gICAgICBzYWxlLnBheS5kZWJ0ID0gdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxuICAgICAgc2FsZS5wYXkucGF5ZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvc2FsZXMvJyxcbiAgICAgIGl0ZW06IHNhbGUsXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxuICAgICAgbG9nRGVzY3JpcHRpb246ICdDcmVhY2nDs24gZGUgbnVldmEgVmVudGEnLFxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBpdGVtT2xkOiAnJyxcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxuICAgICAgZGlzcGF0Y2hUeXBlOiAnQ0xFQVJfU0FMRScsXG4gICAgICBpc1NhbGU6IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncykpXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuXG4gICAgTW91c2V0cmFwLnJlc2V0KClcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGNoYW5nZSA9IDBcbiAgICBsZXQgcGF5QnV0dG9uQ2xhc3MgPSAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsKVxuICAgIGNvbnN0IGNhc2ggPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpXG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XG5cbiAgICAgIGNhc2UgJ0NBU0gnOlxuICAgICAge1xuICAgICAgICBjaGFuZ2UgPSBjYXNoIC0gdG90YWxcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGNoYW5nZSA+PSAwKVxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdDQVJEJzpcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMucHJvcHMucGF5LmNhcmRBdXRoXG4gICAgICAgIGNvbnN0IGRpZ2l0cyA9IHRoaXMucHJvcHMucGF5LmNhcmREaWdpdHNcbiAgICAgICAgY2hhbmdlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy50b3RhbClcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGF1dGggJiYgZGlnaXRzKVxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnQ1JFRCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5kZWJ0KVxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgdG90YWwgPD0gYXZhaWxhYmxlICYmIHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXQpXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1zaWRlLWJhcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPlBhZ288L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5cbiAgICAgICAgICBUT1RBTCA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge3RoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlZVRUxUTyA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge2NoYW5nZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPFNhdmVCdG4gcGF5QnV0dG9uQ2xhc3M9e3BheUJ1dHRvbkNsYXNzfSAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydDogc3RvcmUuY2FydCxcbiAgICBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2QsXG4gICAgcGF5OiBzdG9yZS5wYXksXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XG4gICAgLy8gc2FsZXM6IHN0b3JlLnNhbGVzLnNhbGVzLFxuICAgIC8vIHNhbGVJZDogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZUlkLFxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlQnRuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzYXZlQnRuKCkge1xuICAgIC8vIGNvbnN0IHNhbGVzID0gdGhpcy5wcm9wcy5zYWxlc1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcbiAgICBjb25zdCBwYXllZCA9ICEodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVEJylcblxuICAgIGNvbnN0IHNhbGUgPSB7XG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxuICAgICAgY2xpZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCksXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSksXG4gICAgICBwYXlfdHlwZTogdGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kLFxuICAgICAgcGF5ZWQ6IHBheWVkLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZCxcbiAgICAgIG1vdmVtZW50X3R5cGU6ICdDUkVEJyxcbiAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxuICAgIH1cblxuICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvc2FsZXMvJyxcbiAgICAgIGl0ZW06IHNhbGUsXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxuICAgICAgbG9nRGVzY3JpcHRpb246ICdDcmVhY2nDs24gZGUgbnVldmEgVmVudGEnLFxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBpdGVtT2xkOiAnJyxcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxuICAgICAgY3JlZGl0TW92ZW1lbnQ6IGNyZWRpdE1vdmVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG5cbiAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzLCByZXNvbHZlLCByZWplY3QpKVxuICAgIH0pXG5cbiAgICB1cGRhdGVQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgTW91c2V0cmFwLnJlc2V0KClcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17dGhpcy5zYXZlQnRuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXlCdXR0b25DbGFzc30+XG4gICAgICBSZWdpc3RyYXJcbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgc2F2ZUxvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gSUYgVEhFIFNBTEUgSVMgQSBDUkVESVQgT05FIFNBVkUgQ1JFRElUIE1PVkVNRU5UXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnBheV90eXBlID09ICdDUkVEJykge1xuICAgICAgICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ga3dhcmdzLmNyZWRpdE1vdmVtZW50XG4gICAgICAgICAgY3JlZGl0TW92ZW1lbnQuYmlsbF9pZCA9IHJlc3BvbnNlLmRhdGEuaWRcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5kZXNjcmlwdGlvbiA9IGBWZW50YSBkZSBjcsOpZGl0byAjJHtyZXNwb25zZS5kYXRhLmJpbGxfbnVtYmVyfWBcbiAgICAgICAgICBzYXZlQ3JlZGl0TW92ZW1lbnQoY3JlZGl0TW92ZW1lbnQsIHJlc3BvbnNlLmRhdGEsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdClcblxuICAgICAgICAvLyBJRiBJUyBDQVNIIFRIRU4gSlVTVCBSRVNPTFZFXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9TQUxFJywgcGF5bG9hZDogJyd9KVxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZWplY3QoKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVDcmVkaXRNb3ZlbWVudChtb3ZlbWVudCwgc2FsZSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2NyZWRpdG1vdmVtZW50cy8nLFxuICAgIGRhdGE6IG1vdmVtZW50XG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogc2FsZX0pXG4gICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgcmVqZWN0KClcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9zYXZlL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtsb2FkR2xvYmFsQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQgRnVsbEludm9pY2UgZnJvbSAnLi4vZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4J1xuaW1wb3J0IENvbXBhY3RJbnZvaWNlIGZyb20gJy4uL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5pbnZvaWNlLmlzVmlzaWJsZSwgaXNGdWxsOiBzdG9yZS5pbnZvaWNlLmlzRnVsbH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvaWNlUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2FkR2xvYmFsQ29uZmlnKCdjb21wYW55JywgZmFsc2UsICdGRVRDSF9DT05GSUdfRlVMRklMTEVEJywgJ0ZFVENIX0NPTkZJR19SRUpFQ1RFRCcpKVxuICB9XG5cbiAgaGlkZVBhbmVsKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAvLyBwcmludERpdignZnVsbC1pbnZvaWNlLXByaW50JylcbiAgfVxuXG4gIHRvZ2dsZVBhbmVsKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICB0b2dnbGVJbnZvaWNlKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9JTlZPSUNFX0RFU0lORycsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgcHJpbnRQYW5lbCgpIHtcbiAgICB3aW5kb3cucHJpbnREaXYoJ2ludm9pY2UtcHJpbnQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgaXNWaXNpYmxlID0gKHRoaXMucHJvcHMucGFuZWxWaXNpYmxlKVxuICAgICAgPyAnaW52b2ljZS1wYW5lbCBpcy12aXNpYmxlJ1xuICAgICAgOiAnaW52b2ljZS1wYW5lbCdcbiAgICBjb25zdCBpc0Z1bGxDbGFzcyA9ICh0aGlzLnByb3BzLmlzRnVsbClcbiAgICAgID8gJydcbiAgICAgIDogJyBjb21wYWN0LWludm9pY2Utb24nXG5cbiAgICBjb25zdCBjb21wb25lbnRUb01vdW50ID0gKHRoaXMucHJvcHMuaXNGdWxsKVxuICAgICAgPyA8RnVsbEludm9pY2UgLz5cbiAgICAgIDogPENvbXBhY3RJbnZvaWNlIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1tYWluJyArIGlzRnVsbENsYXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2UtcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgRmFjdHVyYSBkZSBWZW50YVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1maWxlLXRleHQtbycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnByaW50UGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1wcmludCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICB7LyogPGkgb25DbGljaz17dGhpcy50b2dnbGVJbnZvaWNlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtY29mZmVlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J2ludm9pY2UtcHJpbnQnIGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtY29udGFpbmVyJyArIGlzRnVsbENsYXNzfT5cblxuICAgICAgICAgIHtjb21wb25lbnRUb01vdW50fVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZSc+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxEYXRhIC8+XG4gICAgICA8VGFibGUgLz5cbiAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDxOb3RlcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gQ3JlZGl0IG9yIGNhc2hcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuICAgIC8vIExPR09cbiAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ28gfHwgJydcbiAgICBjb25zdCBsb2dvV2lkdGggPSB0aGlzLnByb3BzLmNvbXBhbnkubG9nb1dpZHRoIHx8ICcxMzBweCdcbiAgICBjb25zdCBsb2dvVXJsID0gYC9tZWRpYS9sb2dvcy8ke2xvZ299YFxuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxfbmFtZSB8fCAnJ1xuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsX25hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnUEVSU09OJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICcnXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWxvZ28nPlxuICAgICAgICAgIDxpbWcgc3R5bGU9e3snd2lkdGgnOiBgJHtsb2dvV2lkdGh9YH19IHNyYz17bG9nb1VybH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvaDI+XG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxuICAgICAgICAgIDxoMz57aWRUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmNvdW50cnkgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuZW1haWwgfHwgJyd9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXNlcGFyYXRvcic+XG4gICAgICAgIDxzcGFuIC8+XG5cbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcbiAgICBjb25zdCBkYXRlID0gc2FsZS5jcmVhdGVkXG4gICAgICA/IGAkeygnMCcgKyBzYWxlLmNyZWF0ZWQuZ2V0RGF0ZSgpKS5zbGljZSgtMil9L1xuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXG4gICAgICAke3NhbGUuY3JlYXRlZC5nZXRGdWxsWWVhcigpfWBcbiAgICAgIDogJzAxLzAxLzE5NzAnXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcbiAgICBjb25zdCBjbGllbnRBZHJlc3MgPSBzYWxlLmNsaWVudC5hZHJlc3NcbiAgICAgID8gPHRyPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdjbGllbnRBZHJlc3MnPkRJUkVDQ0nDk046IHtzYWxlLmNsaWVudC5hZHJlc3N9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA6IDx0ciAvPlxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMDEnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nY2xpZW50LXRhYmxlJz5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DTElFTlRFOjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5OLiBkZSBmYWN0dXJhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+eygnMDAwMDAnICsgaWQpLnNsaWNlKC01KX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnQgPSAodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICAgID8gPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPnt0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50fTwvdGQ+XG4gICAgICA6IDx0ZCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RkPlxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLmxlbmd0aFxuICAgICAgPyBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgICAgID8gYEdgXG4gICAgICAgICAgOiBgRWBcblxuICAgICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge2l0ZW0ucXR5fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge2l0ZW0uZGlzY291bnR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnR9XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge3RheGVzVGV4dH1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7aXRlbS5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB9KVxuICAgICAgOiA8dHI+XG4gICAgICAgIDx0ZD4tLTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnRSb3cgPSB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50ID8gPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlczIgJTwvdGg+XG4gICAgICA6IDx0aCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RoPlxuXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10YWJsZSB0YWJsZSc+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24tcm93Jz5EZXNjcmlwY2nDs248L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5DYW50aWRhZDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlAuVTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlcyU8L3RoPlxuICAgICAgICAgIHtnbG9iYWxEaXNjb3VudFJvd31cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QcmVjaW88L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT57aXRlbXN9PC90Ym9keT5cbiAgICA8L3RhYmxlPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRvdGFscyc+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPklWPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1ub3Rlcyc+XG4gICAgICA8aDE+Tm90YXM6PC9oMT5cblxuICAgICAgPGRpdj5GYWN0dXJhIGF1dG9yaXphZGEgbWVkaWFudGUgbGEgcmVzb2x1Y2lvbiBOMTE5NyBkZWwgMTIvMDgvMTk5NyBkZWwgREdEVC48L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhY3RJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZSc+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxEYXRhIC8+XG4gICAgICA8VGFibGUgLz5cbiAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDxOb3RlcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbE5hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICdQRVJTT04nXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZX08L2gyPlxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gLz5cblxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cblxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlVGF4ZXMpXG4gICAgICAgID8gYEdgXG4gICAgICAgIDogYEVgXG5cbiAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucXR5fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgfSlcblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkNhbnQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+QXJ0aWN1bG88L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5JVjwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlRvdGFsPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgY2xhc3NOYW1lPScnPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3Rib2R5PlxuXG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3NhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmV9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcbiAgICBjb25zdCBkYXRlID0gc2FsZS5jcmVhdGVkXG4gICAgICA/IGAkeygnMCcgKyBzYWxlLmNyZWF0ZWQuZ2V0RGF0ZSgpKS5zbGljZSgtMil9L1xuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXG4gICAgICAke3NhbGUuY3JlYXRlZC5nZXRGdWxsWWVhcigpfWBcbiAgICAgIDogJzAxLzAxLzE5NzAnXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcbiAgICBjb25zdCBpZCA9IHNhbGUuYmlsbF9udW1iZXIgPyBzYWxlLmJpbGxfbnVtYmVyIDogJzAwMDEnXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRoPkRpcmVjOjwvdGg+XG4gICAgICAgIDx0ZD57c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiA8dHIgLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWRhdGEnPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlbnVtLXRhYmxlJz5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWNoYTo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmFjdHVyYTo8L3RoPlxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNsaWVudGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XG5cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdG90YWxzJz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzJz5cbiAgICAgIDxoMT5Ob3Rhczo8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcy1jb250ZW50Jz5cbiAgICAgICAgPGRpdj5GYWN0dXJhIGF1dG9yaXphZGEgbWVkaWFudGUgbGEgcmVzb2x1Y2lvbiBOMTE5NyBkZWwgMTIvMDgvMTk5NyBkZWwgREdEVC48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmltcG9ydCB7dG9nZ2xlTGF5b3V0fSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBzdG9yZS5sYXlvdXQudG9wQmFyVG9nZ2xlVmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBtZW51Q2xpY2soZXYpIHtcblxuICAgIHRvZ2dsZUxheW91dCgpXG5cbiAgfVxuXG4gIGxvZ091dENsaWNrKCkge1xuXG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0NlcnJhciBTZXNpw7NuJywgYMK/RGVzZWEgQ2VycmFyIHN1IHNlc2nDs24gZW4gZWwgc2lzdGVtYT9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0NlcnJhcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICBob21lQ2xpY2soKSB7XG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0lyIGFsIG1lbsO6IFByaW5jaXBhbCcsIGDCv0Rlc2VhIGlyIGFsIG1lbsO6IHByaW5jaXBhbD9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0lyJyxcbiAgICAgIGNhbmNlbDogJ1Blcm1hbmVjZXInXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b25DbGFzcyA9IHRoaXMucHJvcHMudG9wQmFyVG9nZ2xlVmlzaWJsZVxuICAgICAgPyAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIHZpc2libGUnIDogJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyJz5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWJhcnMnIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BCYXItcmlnaHQnPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaG9tZUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWl0ZW0gdG9wQmFyLWl0ZW0tY29uZmlnJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWhvbWUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubG9nT3V0Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tbG9nb3V0Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIlxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheW91dCgpIHtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKVxuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTWVudScpXG5cbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwdWxsZWQnKSkge1xuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcbiAgc2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uZmlnQmFyKCkge1xuXG4gIGNvbnN0IGNvbmZpZ0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdCYXInKVxuXG4gIGlmIChjb25maWdCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtdmlzaWJsZScpKSB7XG5cbiAgICBjb25maWdCYXIuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZpc2libGUnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25maWdCYXIuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCdcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXIuanN4J1xuLy8gaW1wb3J0IENvbXBvc2VkSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvY29tcG9zZWQuanN4J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlcicpXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICAvLyBjb25zdCBjaGlsZFByb2R1Y3RzID0gW1xuICAgIC8vICAge1xuICAgIC8vICAgICB0ZXh0OiAnUHJvZHVjdG9zJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1naWZ0JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0cydcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgdGV4dDogJ0ZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1saXN0JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0ZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdTdWItRmFtaWxpYXMnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLW91dGRlbnQnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzdWJkZXBhcnRtZW50cydcbiAgICAvLyAgIH1cbiAgICAvLyBdXG5cbiAgICAvLyBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgJ0FQUCdcbiAgICBjb25zdCBzaWRlTWVudUNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnc2lkZU1lbnUnIDogJ3NpZGVNZW51IGhpZGRlbkJ5QXBwJ1xuICAgIHJldHVybiA8ZGl2IGlkPSdzaWRlTWVudScgY2xhc3NOYW1lPXtzaWRlTWVudUNsYXNzfT5cblxuICAgICAgey8qIDxoMyBjbGFzc05hbWU9J3NpZGVNZW51LWhlYWRlcic+e3RpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMz4gKi99XG4gICAgICA8VXNlciAvPlxuXG4gICAgICA8U2VhcmNoIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS13cmFwcGVyIGNvbC14cy0xMic+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NpZGVNZW51LWl0ZW1zJz5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgICBJbmljaW88L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3NhbGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XG4gICAgICAgICAgICAgIE51ZXZhIFZlbnRhPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcm9mb3JtYSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cbiAgICAgICAgICAgICAgTnVldmEgQ290aXphY2nDs248L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3ByZXNhbGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIFByZXZlbnRhPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtc2VhcmNoIGNvbC14cy0xMic+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQnVzY2FyLi4uJyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlJ1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxuXG4vLyBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmspXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIG1pZGRsZXdhcmUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgZmV0Y2hpbmcgZnJvbSAnLi4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyL3JlZHVjZXIuanMnXG5pbXBvcnQgY2FydCBmcm9tICcuL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNsaWVudHMgZnJvbSAnLi9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcydcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL2dlbmVyYWwvcHJvZHVjdC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNhbGUgZnJvbSAnLi9zYWxlL3JlZHVjZXIuanMnXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaENsaWVudHMgZnJvbSAnLi9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgc2VhcmNoUHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHBheSBmcm9tICcuL3NhbGUvcGF5L3JlZHVjZXIuanMnXG5pbXBvcnQgaW52b2ljZSBmcm9tICcuL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNhbGVzIGZyb20gJy4vZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9yZWR1Y2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmZXRjaGluZyxcbiAgbGF5b3V0LFxuICB1c2VyLFxuICBjYXJ0LFxuICBjbGllbnRzLFxuICBwcm9kdWN0cyxcbiAgc2FsZSxcbiAgbWVzc2FnZXMsXG4gIHNlYXJjaENsaWVudHMsXG4gIHNlYXJjaFByb2R1Y3RzLFxuICBwYXksXG4gIGludm9pY2UsXG4gIHNhbGVzLFxuICBjb25maWdcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0FMRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSE9NRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB1c2VyOiB7fSxcbiAgcHJvZmlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHByb2ZpbGU6IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBjcmVhdGVkOiAnJyxcbiAgdXBkYXRlZDogJycsXG4gIGlzTnVsbDogZmFsc2UsXG4gIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICBjYXJ0SXRlbXM6IFtdLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IDAsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICBjYXJ0VGF4ZXM6IDAsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gIGNhcnRUb3RhbDogMCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcbiAgZGlzY291bnRUb3RhbDogMCwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgY2FydEl0ZW1BY3RpdmU6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogJycsXG4gICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICBpc051bGw6IGZhbHNlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0FERF9UT19DQVJUJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IHRydWUsXG4gICAgICAgIGNhcnRJdGVtczogW1xuICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIC4uLnN0YXRlLmNhcnRJdGVtcyxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdSRU1PVkVfRlJPTV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuXG4gICAgICBuZXdDYXJ0LnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSlcblxuICAgICAgY29uc3QgaXRlbXNMZWZ0SW5DYXJ0ID0gKG5ld0NhcnQubGVuZ3RoID4gMClcbiAgICAgIC8vID8gdHJ1ZVxuICAgICAgLy8gOiBmYWxzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBpdGVtc0xlZnRJbkNhcnQsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlQnOlxuICAgIHtcblxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XSA9IGFjdGlvbi5wYXlsb2FkLml0ZW1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF1bJ2xvdGUnXSA9IGFjdGlvbi5wYXlsb2FkLmxvdGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfVE9UQUxTJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLnN1YnRvdGFsLFxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLnRheGVzLFxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5kaXNjb3VudFRvdGFsLFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5zdWJUb3RhbE5vRGlzY291bnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9HTE9CQUxfRElTQ09VTlQnOlxuICAgIHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVQTEFDRV9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9MSU5FX0RJU0NPVU5UJzpcbiAgICB7XG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdLmRpc2NvdW50ID0gYWN0aW9uLnBheWxvYWQudmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxuICAgICAgICBpc051bGw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuaXNOdWxsLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUb3RhbCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkLmRlYnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudHMgPSBzdGF0ZS5jbGllbnRzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBjbGllbnRzOiBjbGllbnRzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnQsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfVFJVRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfRkFMU0UnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IGZhbHNlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgcHJvZHVjdHM6IHt9LFxuICBpbnB1dFZhbDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHt9XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5wdXRWYWw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5wdXRWYWw6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0c1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgcHJvZHVjdHM6IHByb2R1Y3RzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZ1bGxXaWR0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1RPR0dMRV9GVUxMX1dJRFRIJzpcbiAgICB7XG4gICAgICBjb25zdCB3aWR0aCA9ICFzdGF0ZS5mdWxsV2lkdGhcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmdWxsV2lkdGg6IHdpZHRoXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgbWVzc2FnZXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdQUk9EVUNUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgUFJPRFVDVE8hJywgJ0VsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05PVF9GT1VORF9TQUxFJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBMQSBWRU5UQSEnLCBgTGEgdmVudGEgIyR7YWN0aW9uLnBheWxvYWR9IG5vIGV4aXN0ZSwgbyBoYXkgdW4gcHJvYmxlbWEgcGFyYSBjYXJnYXJsYSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8uYClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIScsICdIdWJvIHVuIGVycm9yIGFsIGVuY29udHJhciBlbCBwcm9kdWN0byBlbiBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgYWdyZWdhZG9zLHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIFBST0RVQ1RPUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIHByb2R1Y3RvcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBDTElFTlRFIScsICdFbCBjbGllbnRlIGNvbiBlbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBDTElFTlRFUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIGNsaWVudGVzLCBwb3IgZmF2b3IgaW50ZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGNsaWVudHNNYXRjaGVkOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnOlxuICAgIHtcbiAgICAgIGNvbnN0IHZpc2libGUgPSAhc3RhdGUudmlzaWJsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHZpc2libGVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TSE9XX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9ISURFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfU0VBUkNIX0ZBSUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHByb2R1Y3RzTWF0Y2hlZDogW10sXG4gIHNlYXJjaFZhbHVlOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX0hJREVfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfRkFJTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgcGF5TWV0aG9kOiAnQ0FTSCcsXG4gIGNhc2hBbW91bnQ6IDAsXG4gIGNhcmREaWdpdHM6ICcnLFxuICBjYXJkQXV0aDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NIT1dfUEFZX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1BBWV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NIQU5HRV9QQVlfTUVUSE9EJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBU0hfQU1PVU5UJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ0FSRF9BVVRIJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfRElHSVRTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLnBheS5wYXlNZXRob2QsXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXNoQW1vdW50LFxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZERpZ2l0cyxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkQXV0aFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBpc1Zpc2libGU6IGZhbHNlLFxuICBpc0Z1bGw6IHRydWUsXG4gIGRlZmF1bHREZXNpbmc6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NIT1dfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIGNvbnN0IGZ1bGxPck5vdCA9IHN0YXRlLmlzRnVsbFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRnVsbDogIWZ1bGxPck5vdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJzpcbiAgICB7XG4gICAgICBjb25zdCBkZXNpbmdPck5vdCA9IHN0YXRlLmRlZmF1bHREZXNpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWZhdWx0RGVzaW5nOiAhZGVzaW5nT3JOb3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsImNvbnN0IHNhbGVBY3RpdmVNb2RlbCA9IHtcbiAgaWQ6IDAsXG4gIGJpbGxfbnVtYmVyOiAnJyxcbiAgY2FydDoge30sXG4gIGNsaWVudDogJycsXG4gIHVzZXI6ICcnLFxuICBjbGllbnRfaWQ6ICcnLFxuICBwYXk6IHt9LFxuICBwYXllZDogZmFsc2UsXG4gIHBheV90eXBlOiAnQ0FTSCdcblxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBzYWxlczogW10sXG4gIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgc2FsZUFjdGl2ZUlkOiAwLFxuICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzYWxlQWN0aXZlSWQ6IDAsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19TQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlczogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNhcnQpXG4gICAgICBjb25zdCBjbGllbnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNsaWVudClcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnVzZXIpXG4gICAgICBjb25zdCBwYXkgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnBheSlcblxuICAgICAgY29uc3Qgc2FsZSA9IHtcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICBiaWxsX251bWJlcjogYWN0aW9uLnBheWxvYWQuYmlsbF9udW1iZXIsXG4gICAgICAgIGNhcnQ6IGNhcnQsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBwYXk6IHBheSxcbiAgICAgICAgcGF5ZWQ6IGFjdGlvbi5wYXlsb2FkLnBheWVkLFxuICAgICAgICBwYXlfdHlwZTogYWN0aW9uLnBheWxvYWQucGF5X3R5cGUsXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLmNyZWF0ZWQpLFxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC51cGRhdGVkKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUkVTQUxFX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRk9STUFfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlcyA9IHN0YXRlLnNhbGVzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzYWxlczogc2FsZXNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxuICAgICAgc2FsZS5jbGllbnQgPSBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjb21wYW55OiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DT05GSUdfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9DT05GSUcnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IGFjdGlvbi5wYXlsb2FkLmRhdGFcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH1cblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuXG4gICAgTnVtYmVyLnByb3RvdHlwZS5mb3JtYXRNb25leSA9IGZ1bmN0aW9uKGMsIGQsIHQpe1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgZCA9IGQgPT0gdW5kZWZpbmVkID8gXCIuXCIgOiBkLFxuICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgaSA9IFN0cmluZyhwYXJzZUludChuID0gTWF0aC5hYnMoTnVtYmVyKG4pIHx8IDApLnRvRml4ZWQoYykpKSxcbiAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcbiAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC91dGlscy9mb3JtYXRNb25leS5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmV0Y2luZy1jb250YWluZXInPlxuICAgICAgPGltZyBzcmM9eycvc3RhdGljL3ZlbmRvci9sb2FkZXJzL0VjbGlwc2UuZ2lmJ30gLz5cbiAgICAgIDxoMT5DYXJnYW5kbyBlbGVtZW50b3M8L2gxPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmZXRjaGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogdHJ1ZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnUFJPRFVDVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHZhbCwgcHJvZHVjdHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvZHVjdC5kZXNjcmlwdGlvbi50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChwcm9kdWN0KVxuICAgIH1cblxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkge1xuXG4gIHJldHVybiB7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogY29kZX1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBjb25zb2xlLmxvZyhjbGllbnRzKVxuXG4gIGNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfRkFJTCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9