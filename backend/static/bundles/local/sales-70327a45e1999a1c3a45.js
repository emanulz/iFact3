webpackJsonp([1],{

/***/ 256:
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
exports.getNextNumericCode = getNextNumericCode;
exports.setNextPrevItem = setNextPrevItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(22);

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

  __REACT_HOT_LOADER__.register(saveLog, 'saveLog', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getNextNumericCode, 'getNextNumericCode', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setNextPrevItem, 'setNextPrevItem', '/Volumes/DATOS/github/iFact3/frontend/utils/api.js');
}();

;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(67);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(593);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(614);

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

/***/ 593:
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

var _actions = __webpack_require__(594);

var _routes = __webpack_require__(595);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(609);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(611);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(68);

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

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fecthProfile = fecthProfile;
exports.fecthIsAdminLocked = fecthIsAdminLocked;

var _axios = __webpack_require__(22);

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

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _home = __webpack_require__(596);

var _home2 = _interopRequireDefault(_home);

var _main = __webpack_require__(597);

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

/***/ 596:
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

// import { checkUserPermissions } from '../../utils/checkPermissions'
// import { getItemDispatch } from '../../utils/api.js'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _content = __webpack_require__(598);

var _content2 = _interopRequireDefault(_content);

var _aside = __webpack_require__(606);

var _aside2 = _interopRequireDefault(_aside);

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
        _react2.default.createElement(_aside2.default, null)
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

/***/ 598:
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

var _product = __webpack_require__(599);

var _product2 = _interopRequireDefault(_product);

var _cart = __webpack_require__(603);

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

/***/ 599:
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

var _actions = __webpack_require__(79);

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

      // this.props.dispatch(searchProduct())

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

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(601);
var bytesToUuid = __webpack_require__(602);

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

/***/ 601:
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

/***/ 602:
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

var _cartItems = __webpack_require__(604);

var _cartItems2 = _interopRequireDefault(_cartItems);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(256);

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

/***/ 604:
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

var _actions = __webpack_require__(605);

var _actions2 = __webpack_require__(79);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(256);

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

/***/ 605:
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

/***/ 606:
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

// import Buttons from './buttons/buttons.jsx'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _clients = __webpack_require__(607);

var _clients2 = _interopRequireDefault(_clients);

var _totals = __webpack_require__(608);

var _totals2 = _interopRequireDefault(_totals);

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
          _react2.default.createElement(_totals2.default, null)
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

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {clientSelected, searchClient, userSelected} from './actions'
// import {getClientDebt} from '../../../../admin/utils/receivable'
// import {recalcCart} from '../../main/product/actions'

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
          var discount = nextProps.client.defaultDiscount ? nextProps.client.defaultDiscount : 0;
          // this.props.dispatch(recalcCart(nextProps.cart, discount, nextProps.client))
          this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });

          // SETS VALUE OF DEFAULT DISCOUNT TO FIELD OR 0
          if (nextProps.client.defaultDiscount) {
            document.getElementById('discountField').value = discount;
            document.getElementById('discountField').disabled = true;
          } else {
            document.getElementById('discountField').value = '';
            document.getElementById('discountField').disabled = false;
          }
        }

        // const debt = getClientDebt(nextProps.client._id, nextProps.movements)
        // this.props.dispatch({type: 'SET_CLIENT_DEBT', payload: debt})
      }
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {

        // const code = ev.target.value // Split val [0] is code [1] is qty
        // this.props.dispatch(clientSelected(code, this.props.clients)) // dispatchs action according to result
      }
    }
  }, {
    key: 'userSelect',
    value: function userSelect(ev) {
      // const _id = ev.target.value
      // this.props.dispatch(userSelected(_id, this.props.users)) // dispatchs action according to result
    }
  }, {
    key: 'userUnSelect',
    value: function userUnSelect(ev) {
      this.props.dispatch({ type: 'USER_CLEAR', payload: '' }); // dispatchs action according to result
    }
  }, {
    key: 'searchClientClick',
    value: function searchClientClick() {}

    // this.props.dispatch(searchClient())

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

var _actions = __webpack_require__(79);

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

/***/ 609:
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

var _actions = __webpack_require__(610);

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

/***/ 610:
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

// import ComposedItem from './components/items/composed.jsx'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(612);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(613);

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

/***/ 612:
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

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxLogger = __webpack_require__(39);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(41);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(615);

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

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducer = __webpack_require__(78);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(616);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(617);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(618);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(619);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(620);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(621);

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = __webpack_require__(622);

var _reducer16 = _interopRequireDefault(_reducer15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  fetching: _reducer2.default,
  layout: _reducer4.default,
  user: _reducer6.default,
  cart: _reducer8.default,
  clients: _reducer10.default,
  products: _reducer12.default,
  sale: _reducer14.default,
  messages: _reducer16.default
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

/***/ 616:
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

/***/ 617:
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

/***/ 618:
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

/***/ 619:
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
          clientSelectedDebt: action.payload
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

/***/ 620:
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

/***/ 621:
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

/***/ 622:
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

/***/ 67:
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

/***/ 68:
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

/***/ 78:
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchProduct = searchProduct;
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
var uuidv1 = __webpack_require__(600);
// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS USED IN COMPONENTS
// ------------------------------------------------------------------------------------------

// opens the product search panel
function searchProduct() {
  return { type: 'PRODUCT_SHOW_PANEL', payload: -1 };
}

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

  __REACT_HOT_LOADER__.register(searchProduct, 'searchProduct', '/Volumes/DATOS/github/iFact3/frontend/sales/general/product/actions.js');

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

/***/ })

},[592]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvYXBwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21haW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21haW4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2hvbWUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRJdGVtRGlzcGF0Y2giLCJnZXRJdGVtRG91YmxlRGlzcGF0Y2giLCJnZXRJdGVtUmV0dXJuIiwic2V0SXRlbSIsInNhdmVJdGVtIiwidXBkYXRlSXRlbSIsInBhdGNoSXRlbSIsInBhdGNoSXRlbXMiLCJkZWxldGVJdGVtIiwiZ2V0TmV4dE51bWVyaWNDb2RlIiwic2V0TmV4dFByZXZJdGVtIiwiZGVmYXVsdHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwia3dhcmdzIiwidXJsIiwic3VjY2Vzc1R5cGUiLCJlcnJvclR5cGUiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiYWxlcnQiLCJzdWNjZXNzVHlwZTIiLCJsb29rVXBWYWx1ZSIsImxvb2tVcEZpZWxkIiwiaGlzdG9yeSIsInJlZGlyZWN0VXJsIiwibGVuZ3RoIiwibW9kZWxOYW1lIiwibG9va1VwTmFtZSIsImRpc3BhdGNoVHlwZSIsImRpc3BhdGNoVHlwZTIiLCJkaXNwYXRjaEVycm9yVHlwZSIsInB1c2giLCJpdGVtIiwibG9nQ29kZSIsIml0ZW1PbGQiLCJsb2dNb2RlbCIsImxvZ0Rlc2NyaXB0aW9uIiwidXNlciIsIm1ldGhvZCIsInN1Y2Vzc01lc3NhZ2UiLCJzZXQiLCJzYXZlTG9nIiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwia3dhcmdzMiIsIml0ZW0yIiwidXJsMiIsImxvZ0NvZGUyIiwiaXRlbU9sZDIiLCJsb2dNb2RlbDIiLCJsb2dEZXNjcmlwdGlvbjIiLCJtb2RlbCIsImNvZGUiLCJvbGRPYmplY3QiLCJvYmplY3QiLCJkZXNjcmlwdGlvbiIsInByZXZPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwidXNlcjIiLCJwcmV2X29iamVjdCIsIm5ld19vYmplY3QiLCJlbGVtZW50cyIsImZpZWxkIiwia2V5cyIsIm1hcCIsImVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtYXgiLCJwb3AiLCJuZXh0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZXh0Q29kZSIsInByZXZDb2RlIiwid2luZG93IiwiYWxlcnRpZnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFpbiIsInN0b3JlIiwiZmV0Y2hpbmciLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwidmFsdWUiLCJyb3V0ZXMiLCJIb21lIiwiU2FsZSIsImZ1bGxXaWR0aCIsInNhbGUiLCJ0b3RhbCIsImNhcnQiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwiZm9ybWF0TW9uZXkiLCJ0b2dnbGVXaWR0aCIsImJpbmQiLCJQcm9kdWN0IiwicHJvZHVjdHMiLCJjbGllbnQiLCJjbGllbnRzIiwiY2xpZW50U2VsZWN0ZWQiLCJpdGVtc0luQ2FydCIsImNhcnRJdGVtcyIsImlucHV0VmFsIiwiZ2xvYmFsRGlzY291bnQiLCJjb2RlSW5wdXQiLCJmb2N1cyIsInByb2R1Y3RLd2FyZ3MiLCJldiIsImtleSIsInRhcmdldCIsInNwbGl0IiwicXR5IiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiZGVmYXVsdENvbmZpZyIsInVzZXJDb25maWciLCJkaXNhYmxlZCIsImlucHV0S2V5UHJlc3MiLCJpbnB1dCIsInNlYXJjaFByb2R1Y3RDbGljayIsIk1vdXNldHJhcCIsInJlcXVpcmUiLCJDYXJ0IiwiX3RoaXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInVuYmluZCIsIkNhcnRJdGVtcyIsImluQ2FydCIsImNhcnRJdGVtQWN0aXZlIiwicHJldlByb3BzIiwiZWxlbSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIl9fdGhpcyIsInByb21wdCIsImV2dCIsIm9rIiwiY2FuY2VsIiwiZGlzY291bnQiLCJsb3RlIiwic2VsZWN0IiwiaXRlbXMyIiwiYWN0aXZlQ2xhc3MiLCJwcm9kdWN0IiwiYmFyY29kZSIsInJlbW92ZUljb25DbGFzcyIsInRheGVzMSIsInVzZV90YXhlcyIsInRheGVzIiwicXR5RmllbGQiLCJxdHlJbnB1dENoYW5nZSIsInV1aWQiLCJmaWVsZEZvY3VzIiwicXR5SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50RmllbGQiLCJzYWxlTG9hZGVkIiwiZGlzY291bnRJbnB1dEtleVByZXNzIiwiZGlzY291bnRJbnB1dE9uQmx1ciIsInNldENhcnRJdGVtQWN0aXZlIiwicHJpY2VUb1VzZSIsInRvdGFsV2l0aEl2IiwicmVtb3ZlSXRlbSIsInVwZGF0ZVRvdGFscyIsInJlbW92ZUZyb21DYXJ0Iiwic3VidG90YWwiLCJzdWJUb3RhbE5vRGlzY291bnQiLCJkaXNjb3VudFRvdGFsIiwidGF4ZXNDYWxjIiwidGF4ZXNDYWxjMiIsInVzZV90YXhlczIiLCJ0YXhlczIiLCJkaXNjb3VudEN1cnJlbmN5IiwiaW5kZXhJbkNhcnQiLCJmaW5kSW5kZXgiLCJyZXMiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsInVzZXJzIiwidXNlclNlbGVjdGVkIiwiZGVidCIsImNsaWVudFNlbGVjdGVkRGVidCIsIm5leHRQcm9wcyIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudFRvU2hvdyIsIm5hbWUiLCJsYXN0X25hbWUiLCJzZWFyY2hDbGllbnRDbGljayIsIlRvdGFscyIsImNhcnRUYXhlcyIsImNhcnRTdWJ0b3RhbE5vRGlzY291bnQiLCJzdGF0ZSIsImRpc2NvdW50VmFsIiwibWF4RGlzY291bnQiLCJpbnB1dE9uQmx1ciIsIlRvcEJhciIsInRvcEJhclRvZ2dsZVZpc2libGUiLCJjb25maXJtIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiYnV0dG9uQ2xhc3MiLCJtZW51Q2xpY2siLCJob21lQ2xpY2siLCJsb2dPdXRDbGljayIsInRvZ2dsZUxheW91dCIsInRvZ2dsZUNvbmZpZ0JhciIsIm1haW5Db250YWluZXIiLCJzaWRlTWVudSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiY29uZmlnQmFyIiwiU2lkZU1lbnUiLCJzaWRlTWVudUNsYXNzIiwiU2VhcmNoIiwiVXNlciIsImF2YXRhciIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwiZnVsbE5hbWUiLCJzdWJzdHJpbmciLCJtaWRkbGV3YXJlIiwibWVzc2FnZXMiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImFjdGlvbiIsImVkaXRhYmxlIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJpc051bGwiLCJjYXJ0SGFzSXRlbXMiLCJjYXJ0U3VidG90YWwiLCJuZXdDYXJ0Iiwic3BsaWNlIiwiaXRlbXNMZWZ0SW5DYXJ0IiwiY2xpZW50U2VsZWN0ZWRNb2RlbCIsImNsaWVudFR5cGUiLCJjcmVkaXRfZGF5cyIsImNyZWRpdF9saW1pdCIsImRvY1R5cGUiLCJoYXNfY3JlZGl0IiwiaWQiLCJfaWQiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiYyIsImQiLCJ0IiwibiIsIk1hdGgiLCJhYnMiLCJ1bmRlZmluZWQiLCJzIiwiaSIsIlN0cmluZyIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwic2xpY2UiLCJGZXRjaGluZyIsInNlYXJjaFByb2R1Y3QiLCJyZWNhbGNDYXJ0IiwidXBkYXRlSXRlbURpc2NvdW50IiwidXBkYXRlSXRlbUxvdGUiLCJwcm9kdWN0U2VsZWN0ZWQiLCJ1cGRhdGVRdHkiLCJ1cGRhdGVRdHlDb2RlIiwiYWRkU3ViT25lIiwidXVpZHYxIiwibmV3SXRlbSIsImNhY2xTdWJ0b3RhbCIsInVwZGF0ZWRDYXJ0SXRlbSIsImxvdGVOdW0iLCJwZXJMaW5lIiwiY2hlY2tJZkluQ2FydCIsInF0eU51bSIsInN1Yk9yQWRkIiwiZGF0YU5ld1Byb2QiLCJwcm9kdWN0RGlzY291bnQiLCJwcmljZSIsInN1YlRvdGFsIiwiaXYxIiwiaXYyIiwiZGlzY291bnRDdXJyZW5jeUluTGluZSIsImRpc2NvdW50Q3VycmVuY3lHbG9iYWwiLCJuZXdRdHkiLCJ1c2VQcmljZTIiLCJwcmljZTIiLCJ1c2VQcmljZTMiLCJwcmljZTMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFJeE0sT0FBT2dKLFVBQVAsSUFBcUIsU0FBekIsRUFBb0MsT0FBT2hHLFFBQVFnSixLQUFmOztBQUVwQyxTQUFPaEosUUFBUWdKLEtBQWY7QUFFRDs7Ozs7Ozs7Z0NBalJlbkIsYTs7Z0NBS0FDLFU7O2dDQXVCQUMsa0I7O2dDQXVCQUMsYzs7Z0NBc0JBQyxlOztnQ0FxQkFDLFM7O2dDQWVBQyxhOztnQ0FpQkFDLFM7O2dDQW9CUE8sYTs7Z0NBNkRBSixZOztnQ0FrQ0FDLGU7O2dDQW1CQXhILFUiLCJmaWxlIjoic2FsZXMtNzAzMjdhNDVlMTk5OWExYzNhNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4xXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENPTkZJRyBERUZBVUxUIEFYSU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR0VUIEZVTkNUSU9OUyAoUkVUUklFVkUgQUxMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURpc3BhdGNoKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIC8vIElGIFRIRSBFUlJPUiBJUyBVTkFVVE9SSVpFRCBQQUdFIFdJTEwgU0hPVyBUSEUgTUVTU0FHRVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1Eb3VibGVEaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlMiA9IGt3YXJncy5zdWNjZXNzVHlwZTJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUyLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmV0dXJuKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIHJldHVybiBlcnJvclxuICB9KVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0VUIEZVTkNUSU9OIChSRVRSSUVWRSBJTkRJVklEVUFMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBsb29rVXBWYWx1ZSA9IGt3YXJncy5sb29rVXBWYWx1ZVxuICBjb25zdCBsb29rVXBGaWVsZCA9IGt3YXJncy5sb29rVXBGaWVsZFxuICBjb25zdCBoaXN0b3J5ID0ga3dhcmdzLmhpc3RvcnlcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBrd2FyZ3MucmVkaXJlY3RVcmxcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGNvbnNvbGUubG9nKGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKVxuICAgIGF4aW9zLmdldChgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gSUYgVEhFUkUgSVMgTU9SRSBUSEFOIE9ORSBFTEVNRU5UIEZJTFRFUkVEXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQVRFTkNJw5NOJywgYEV4aXN0ZSBtYXMgZGUgdW4gJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgJHtrd2FyZ3MubG9va1VwTmFtZX06XG4gICAgICAgICAgJHtrd2FyZ3MubG9va1VwVmFsdWV9LCBzZSB1dGlsaXphcsOhIGVsIHByaW1lcm8gZW4gbGlzdGEsIHBvciBsbyBxdWUgcHVlZGUgbm8gc2VyIGVsIG1pc21vIHF1ZSB1ZCBkZXNlYVxuICAgICAgICAgIGFjdHVhbGl6YXIsIGVzdG8gcHVlZGUgZGViZXJzZSBhIHVuIGVycm9yLCBwb3IgZmF2b3IgcmV2aXNlIGxvc1xuICAgICAgICAgIGRhdG9zIG8gY29udGFjdGUgY29uIGVsIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEuYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUyLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoRXJyb3JUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBObyBoYXkgJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgdmFsb3IgZGUgJHtrd2FyZ3MubG9va1VwTmFtZX06ICR7a3dhcmdzLmxvb2tVcFZhbHVlfWAsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IGhpc3RvcnkucHVzaChyZWRpcmVjdFVybCkgfSlcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciBlbCB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgfSlcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBkZWxldGUgaXRlbVsnaWQnXVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChrd2FyZ3Muc3VjZXNzTWVzc2FnZSkge1xuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBET1VCTEUgVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbXMoa3dhcmdzLCBrd2FyZ3MyKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgY29uc3QgaXRlbTIgPSBrd2FyZ3MyLml0ZW1cbiAgY29uc3QgdXJsMiA9IGt3YXJnczIudXJsXG4gIGNvbnN0IGxvZ0NvZGUyID0ga3dhcmdzMi5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQyID0ga3dhcmdzMi5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsMiA9IGt3YXJnczIubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24yID0ga3dhcmdzMi5sb2dEZXNjcmlwdGlvblxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC8vIEZJUlNUIFBBVENIIFRIRU5cbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuXG4gICAgICAgIC8vIFNFQ09ORCBQQVRDSFxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgICAgIHVybDogdXJsMixcbiAgICAgICAgICBkYXRhOiBpdGVtMlxuICAgICAgICB9KVxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBUSEVOXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzMi5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzMi5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrd2FyZ3MyLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGt3YXJnczIuaGlzdG9yeS5wdXNoKGt3YXJnczIucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MyLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICAgICAgc2F2ZUxvZyhsb2dDb2RlMiwgbG9nTW9kZWwyLCBpdGVtT2xkMiwgaXRlbTIsIGxvZ0Rlc2NyaXB0aW9uMiwgdXNlcilcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBDQVRDSFxuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MyLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgICAgIH0pXG5cbiAgICAgIC8vIEZJUlNUIFBBVENIIENBVENIXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERFTEVURSBGVU5DVElPTiAoREVMRVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBtb2RlbCA9IGt3YXJncy5tb2RlbE5hbWVcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsICdFbGVtZW50byBlbGltaW5hZG8gc2F0aWZhY3RvcmlhbWVudGUnKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgSHVibyB1biBlcnJvciBhbCBlbGltaW5hciBlbCAke21vZGVsfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0FWRSBMT0cgRlVOQ1RJT04gKENSRUFURSBMT0cpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHNhdmVMb2cgKGNvZGUsIG1vZGVsLCBvbGRPYmplY3QsIG9iamVjdCwgZGVzY3JpcHRpb24sIHVzZXIpIHtcblxuICBjb25zdCBwcmV2T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2xkT2JqZWN0KVxuICBjb25zdCBuZXdPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpXG4gIGNvbnN0IHVzZXIyID0gSlNPTi5zdHJpbmdpZnkodXNlcilcblxuICBjb25zdCBpdGVtID0ge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIHByZXZfb2JqZWN0OiBwcmV2T2JqZWN0LFxuICAgIG5ld19vYmplY3Q6IG5ld09iamVjdCxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdXNlcjogdXNlcjJcbiAgfVxuXG4gIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2xvZ3MvJyxcbiAgICBkYXRhOiBpdGVtXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgfVxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIExvZyBkZWwgbW92aW1pZW50bywgRVJST1I6ICR7ZXJyfS5gKVxuICAgIH0pXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5FWFQgTlVNRVJJQyBDT0RFXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE51bWVyaWNDb2RlKGVsZW1lbnRzLCBmaWVsZCkge1xuXG4gIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcblxuICAgIGxldCBrZXlzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudFtmaWVsZF0pXG5cbiAgICBrZXlzID0ga2V5cy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICBjb25zdCBtYXggPSBrZXlzLnBvcCgpXG4gICAgY29uc3QgbmV4dCA9IHBhcnNlSW50KG1heCkgKyAxXG4gICAgcmV0dXJuIG5leHQudG9TdHJpbmcoKVxuXG4gIH1cblxuICByZXR1cm4gMVxuXG59XG5cbi8vIE5FWFQgUFJFVklPVVMgSVRFTVNcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXh0UHJldkl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgY29kZSA9IGt3YXJncy5jb2RlXG4gIGNvbnN0IGl0ZW1zID0ga3dhcmdzLml0ZW1zXG4gIGNvbnN0IGNvZGVGaWVsZCA9IGt3YXJncy5jb2RlRmllbGRcbiAgbGV0IHByZXZpb3VzID0gMFxuICBsZXQgbmV4dCA9IDBcblxuICBpdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGFbY29kZUZpZWxkXSAtIGJbY29kZUZpZWxkXVxuICB9KVxuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW1bY29kZUZpZWxkXSA9PSBjb2RlKSB7XG4gICAgICBuZXh0ID0gaW5kZXggKyAxXG4gICAgICBwcmV2aW91cyA9IGluZGV4IC0gMVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV4dENvZGUgPSBpdGVtc1tuZXh0XSA/IGl0ZW1zW25leHRdW2NvZGVGaWVsZF0gOiBpdGVtc1swXVtjb2RlRmllbGRdXG4gIGNvbnN0IHByZXZDb2RlID0gaXRlbXNbcHJldmlvdXNdID8gaXRlbXNbcHJldmlvdXNdW2NvZGVGaWVsZF0gOiBpdGVtcy5wb3AoKVtjb2RlRmllbGRdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6IHtuZXh0OiBuZXh0Q29kZSwgcHJldmlvdXM6IHByZXZDb2RlfX0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3V0aWxzL2FwaS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcbmZvcm1hdE1vbmV5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2FwcC5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtmZWN0aFByb2ZpbGV9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCdcbmltcG9ydCBGZXRjaGluZyBmcm9tICcuLi8uLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCdcblxuLy8gaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hpbmc6IHN0b3JlLmZldGNoaW5nLmZldGNoaW5nLFxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMucHJvcHMuZmV0Y2hpbmcgPyA8RmV0Y2hpbmcgLz4gOiAnJ1xuICAgIGNvbnN0IG1haW5Db250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ21haW5Db250YWluZXInIDogJ21haW5Db250YWluZXIgc2lkZUhpZGRlbidcbiAgICBjb25zdCBjb250ZW50ID0gPFJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9e21haW5Db250YWluZXJDbGFzc30+XG4gICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGFpbmVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge3JvdXRlc31cbiAgICAgICAgICAgIHtmZXRjaGluZ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdXRlcj5cblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoUHJvZmlsZSgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9wcm9maWxlLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnLCBwYXlsb2FkOiB7dXNlcjogcmVzcG9uc2UuZGF0YVswXS5maWVsZHMsIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGFbMV0uZmllbGRzfX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aElzQWRtaW5Mb2NrZWQoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJwcmVmcy9hZG1pbl9faXNfYWRtaW5fbG9ja2VkLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudmFsdWV9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9ob21lL2hvbWUuanN4J1xuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcblxuY29uc3Qgcm91dGVzID0gPGRpdiBjbGFzc05hbWU9J2hlaWdoMTAwJz5cblxuICA8Um91dGUgZXhhY3QgcGF0aD0nL3NhbGVzJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDxSb3V0ZSBwYXRoPScvc2FsZXMvc2FsZScgY29tcG9uZW50PXtTYWxlfSAvPlxuXG48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hPTUVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J01haW4gaGVpZ2gxMDAnPlxuICAgICAgSE9NRVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC9jb250ZW50LmpzeCdcbmltcG9ydCBBc2lkZSBmcm9tICcuL2FzaWRlL2FzaWRlLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NBTEVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NhbGUnPlxuICAgICAgPENvbnRlbnQgLz5cbiAgICAgIDxBc2lkZSAvPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9tYWluLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4J1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jYXJ0L2NhcnQuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50IGZ1bGxXaWR0aCcgOiAnc2FsZS1jb250ZW50J1xuICAgIGNvbnN0IGNhcnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC1jYXJ0JyA6ICdzYWxlLWNvbnRlbnQtY2FydCBmdWxsSGVpZ2h0J1xuICAgIGNvbnN0IHRvdGFsQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtdG90YWwnIDogJ3NhbGUtY29udGVudC10b3RhbCBjb2xsYXBzZWQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1jb250ZW50LXByb2R1Y3QnID5cbiAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcnRDbGFzc30gPlxuICAgICAgICA8Q2FydCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG90YWxDbGFzc30gPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLWxlZnQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBpbnB1dFZhbDogc3RvcmUucHJvZHVjdHMuaW5wdXRWYWwsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHRoaXMuY29kZUlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUUycsIHBheWxvYWQ6ICcnfSlcblxuICAgIGNvbnN0IHByb2R1Y3RLd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3Byb2R1Y3RzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJyxcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJ1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0SXRlbURpc3BhdGNoKHByb2R1Y3RLd2FyZ3MpKVxuXG4gIH1cblxuICBzZWFyY2hQcm9kdWN0Q2xpY2soKSB7XG5cbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaFByb2R1Y3QoKSlcblxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBpZiAoZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVswXSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgICBsZXQgcXR5ID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMV1cbiAgICAgICAgcXR5ID0gKGlzTmFOKHF0eSkpXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHF0eSkgLy8gaWYgbm8gcXR5IHNldHMgdG8gMVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcbiAgICAgICAgICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgIC8vICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiAwfSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2R1Y3RcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxiPlByb2R1Y3RvOjwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFyY29kZScgLz5cbiAgICAgICAgICA8aW5wdXQgaWQ9J3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvZGVJbnB1dCA9IGlucHV0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2UgZWwgQ8OzZGlnbyBkZWwgUHJvZHVjdG8nXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUtaW5wdXQgbW91c2V0cmFwIGZvcm0tY29udHJvbCBpbnB1dC1sZycgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1zZWFyY2gnPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gNjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgcmV0dXJuIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL2NhcnRJdGVtcy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzLFxuICAgIC8vIHByb2R1Y3RTZWFyY2hwYW5lbFZpc2libGU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtjJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXG5cbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCB1c2VMb3RlID0gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnXG4gICAgLy8gICA/IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZy5jYXJ0SXRlbVVzZUxvdGVcbiAgICAvLyAgIDogZmFsc2VcblxuICAgIC8vIGNvbnN0IGxvdGVGaWVsZCA9IHVzZUxvdGVcbiAgICAvLyAgID8gPHRoPkxvdGU8L3RoPlxuICAgIC8vICAgOiA8dGggLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FydCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2Q8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICA8aDU+QXJ0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1xdHknPlxuICAgICAgICAgIDxoNT5DYW50PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRpc2NvdW50Jz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItaXZhJz5cbiAgICAgICAgICA8aDU+SVY8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXRvdGFsJz5cbiAgICAgICAgICA8aDU+VG90YWwgSVZJPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcnRJdGVtcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVUb3RhbHMsIHJlbW92ZUZyb21DYXJ0fSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge3VwZGF0ZUl0ZW1EaXNjb3VudCwgdXBkYXRlSXRlbUxvdGUsIHVwZGF0ZVF0eSwgYWRkU3ViT25lLCB1cGRhdGVRdHlDb2RlfSBmcm9tICcuLi9wcm9kdWN0L2FjdGlvbnMnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGluQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gT24gY29tcG9uZW50IHVwZGF0ZSAoVGhlIGNhcnQgaGFzIGJlZW4gbW9kaWZpZWQpIGNhbGxzIHRoZSB1cGRhdGUgdG90YWxzIG1ldGhvZCBpbiBhY3Rpb25zIGZpbGUuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlVG90YWxzKHRoaXMucHJvcHMuaW5DYXJ0KSlcblxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYm9keScpXG4gICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodFxuXG4gIH1cblxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XG4gIC8vICAgaWYgKHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgIT0gbmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICBfdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2YnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZX1gKS5mb2N1cygpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrLScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCBmYWxzZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcbiAgICAgIGFsZXJ0aWZ5LnByb21wdChgTnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG9gLCAnSW5ncmVzZSBsYSBudWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkbycsICcnXG4gICAgICAgICwgZnVuY3Rpb24oZXZ0LCB2YWx1ZSkge1xuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXG4gICAgICAgICAgICBfX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIF9fdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgICB9XG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgLnNldCgnbGFiZWxzJywge29rOiAnT2snLCBjYW5jZWw6ICdDYW5jZWxhcid9KVxuICAgIH0pXG4gIH1cblxuICBkaXNjb3VudElucHV0S2V5UHJlc3MoY29kZSwgZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gICAgfVxuXG4gIH1cblxuICBkaXNjb3VudElucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dENoYW5nZShjb2RlLCBldikge1xuXG4gICAgY29uc3QgcXR5ID0gcGFyc2VGbG9hdCgoZXYudGFyZ2V0LnZhbHVlKSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVF0eShjb2RlLCBxdHksIHRoaXMucHJvcHMuaW5DYXJ0LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgfVxuXG4gIHF0eUlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGxvdGVJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gICAgfVxuXG4gIH1cblxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gIH1cblxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG5cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUpKVxuXG4gIH1cblxuICBmaWVsZEZvY3VzKGV2KSB7XG4gICAgZXYudGFyZ2V0LnNlbGVjdCgpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGl0ZW1zIGluIGNhcnQgdXNpbmcgdGFibGUgcm93c1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAoaXRlbS5wcm9kdWN0LmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSB8fCBpdGVtLnByb2R1Y3QuYmFyY29kZSA9PSB0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlKVxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcbiAgICAgICAgOiAnY2FydC1ib2R5LWl0ZW0nXG5cbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xuXG4gICAgICBjb25zdCB0YXhlczEgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XG4gICAgICAgIGlkPXtgcXR5JHtpdGVtLnByb2R1Y3QuY29kZX1gfVxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgb25LZXlVcD17dGhpcy5xdHlJbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIHZhbHVlPXtpdGVtLnF0eX1cbiAgICAgIC8+XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50RmllbGQgPSB0aGlzLnByb3BzLmNsaWVudC5zYWxlTG9hZGVkXG4gICAgICAgID8gPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cbiAgICAgICAgLz5cbiAgICAgICAgOiA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpc2NvdW50SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRpc2NvdW50SW5wdXRPbkJsdXIuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIC8+XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlQ2xhc3N9XG4gICAgICAgIGtleT17aXRlbS51dWlkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuY29kZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudGlkYWQ8L2g1PlxuICAgICAgICAgIHtxdHlGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtkaXNjb3VudEZpZWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWl2YSc+XG4gICAgICAgICAgPGg1PklWQTwvaDU+XG4gICAgICAgICAge3RheGVzMX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cbiAgICAgICAgICAgIOKCoSB7aXRlbS50b3RhbFdpdGhJdi5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cmVtb3ZlSWNvbkNsYXNzfT5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpdGVtLnV1aWQpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzLWNpcmNsZScgLz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICA8L2Rpdj5cbiAgICB9KVxuXG4gICAgLy8gcmV0dXJuIDx0Ym9keSBjbGFzc05hbWU9J3RhYmxlLWJvZHknPlxuICAgIC8vICAge2l0ZW1zfVxuICAgIC8vIDwvdGJvZHk+XG5cbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XG4gICAgICB7aXRlbXMyfVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRvdGFscyB0aGUgY2FydCBzdG9yZSBpdGVtLCBnZW5lcmF0ZXMgbmV3IHZhbHVlcyBhY2NvcmRpbmcgY2FydCBpdGVtIG9iamVjdHMsIHRoZW4gcHVzaCB0aGUgdG8gc3RvcmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbHMoaW5DYXJ0KSB7XG5cbiAgbGV0IHN1YnRvdGFsID0gMFxuICBsZXQgc3ViVG90YWxOb0Rpc2NvdW50ID0gMFxuICBsZXQgdGF4ZXMgPSAwXG4gIGxldCB0b3RhbCA9IDBcbiAgbGV0IGRpc2NvdW50VG90YWwgPSAwXG5cbiAgLy8gZm9yIEVhY2ggZWxlbWVudCBhZGRzIHRoZSB2YWx1ZXMgdG8gZ2V0IHRvdGFsc1xuICBpbkNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50ID0gc3ViVG90YWxOb0Rpc2NvdW50ICsgaXRlbS5zdWJUb3RhbE5vRGlzY291bnRcblxuICAgIHN1YnRvdGFsID0gc3VidG90YWwgKyBpdGVtLnN1YnRvdGFsXG5cbiAgICBjb25zdCB0YXhlc0NhbGMgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgICA6IDBcblxuICAgIGNvbnN0IHRheGVzQ2FsYzIgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlczIpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMiAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgdGF4ZXMgPSB0YXhlcyArIHRheGVzQ2FsYyArIHRheGVzQ2FsYzJcblxuICAgIGRpc2NvdW50VG90YWwgPSBkaXNjb3VudFRvdGFsICsgaXRlbS5kaXNjb3VudEN1cnJlbmN5IC8vIHRoaXMgaXMgdGhlIHZhbHVlIGluIGN1cnJlbmN5XG5cbiAgfSlcbiAgLy8gVE9ETyBDb25maWcgZm9yIHJvdW5kIG9yIG5vdFxuICAvLyB0b3RhbCA9IE1hdGgucm91bmQoc3VidG90YWwgKyB0YXhlcylcbiAgdG90YWwgPSBzdWJ0b3RhbCArIHRheGVzXG4gIC8vIHJldHVycyBhIGRpc3BhdGNoIHdpdGggYSBwYXlsb2FkIG9mIHRoZSBvYnRhaW5lZCB2YWx1ZXNcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlRfVE9UQUxTJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBzdWJ0b3RhbDogc3VidG90YWwsXG4gICAgICB0YXhlczogdGF4ZXMsXG4gICAgICB0b3RhbDogdG90YWwsXG4gICAgICBkaXNjb3VudFRvdGFsOiBkaXNjb3VudFRvdGFsLFxuICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnRcbiAgICB9XG4gIH1cbn1cblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpdGVtc0luQ2FydCwgY29kZSkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1JFTU9WRV9GUk9NX0NBUlQnLFxuICAgICAgcGF5bG9hZDogaW5kZXhJbkNhcnRcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuLi8uLi9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4J1xuLy8gaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9idXR0b25zL2J1dHRvbnMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzaWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICB0b2dnbGVXaWR0aCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBhc2lkZUNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZSBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUnXG4gICAgY29uc3QgYXNpZGVDb250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUtY29udGVudCBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUtY29udGVudCdcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FzaWRlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FzaWRlQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLWFycm93LWNvbnRhaW5lcicgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8Q2xpZW50IC8+XG4gICAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b25zIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtdG90YWwnID5cbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQge2NsaWVudFNlbGVjdGVkLCBzZWFyY2hDbGllbnQsIHVzZXJTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zJ1xuLy8gaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi91dGlscy9yZWNlaXZhYmxlJ1xuLy8gaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9tYWluL3Byb2R1Y3QvYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzLFxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2Vyczogc3RvcmUuY2xpZW50cy51c2VycyxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQgIT0gdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCkge1xuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXG5cbiAgICAgIGlmICghbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLnNhbGVMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA/IG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50IDogMFxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQobmV4dFByb3BzLmNhcnQsIGRpc2NvdW50LCBuZXh0UHJvcHMuY2xpZW50KSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG5cbiAgICAgICAgLy8gU0VUUyBWQUxVRSBPRiBERUZBVUxUIERJU0NPVU5UIFRPIEZJRUxEIE9SIDBcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBkZWJ0ID0gZ2V0Q2xpZW50RGVidChuZXh0UHJvcHMuY2xpZW50Ll9pZCwgbmV4dFByb3BzLm1vdmVtZW50cylcbiAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfQ0xJRU5UX0RFQlQnLCBwYXlsb2FkOiBkZWJ0fSlcblxuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICAvLyBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlIC8vIFNwbGl0IHZhbCBbMF0gaXMgY29kZSBbMV0gaXMgcXR5XG4gICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKGNsaWVudFNlbGVjdGVkKGNvZGUsIHRoaXMucHJvcHMuY2xpZW50cykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIH1cblxuICB9XG5cbiAgdXNlclNlbGVjdChldikge1xuICAgIC8vIGNvbnN0IF9pZCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2godXNlclNlbGVjdGVkKF9pZCwgdGhpcy5wcm9wcy51c2VycykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICB9XG5cbiAgdXNlclVuU2VsZWN0KGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VTRVJfQ0xFQVInLCBwYXlsb2FkOiAnJ30pIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICB9XG5cbiAgc2VhcmNoQ2xpZW50Q2xpY2soKSB7XG5cbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCgpKVxuXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vIFNFTEVDVDIgREFUQVxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBjb25zdCBjbGllbnRUb1Nob3cgPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZClcbiAgICAgID8gYCR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5uYW1lfSAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubGFzdF9uYW1lfWBcbiAgICAgIDogJ0NsaWVudGUgQ29udGFkbydcblxuICAgIC8vIGNvbnN0IGNyZWRpdEljb24gPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCAmJiB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmhhc19jcmVkaXQpXG4gICAgLy8gICA/ICdmYSBmYS1jaGVjay1zcXVhcmUnXG4gICAgLy8gICA6ICdmYSBmYS10aW1lcy1jaXJjbGUnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NsaWVudCc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtaW1nJz5cbiAgICAgICAgPGltZyBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hDbGllbnRDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIHNyYz0nL21lZGlhL2RlZmF1bHQvcHJvZmlsZS5qcGcnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Q2xpZW50ZSA6PC9oMz5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxuICAgICAgICAgIDxoMz5Ob21icmUgOjwvaDM+XG4gICAgICAgICAgPHNwYW4+e2NsaWVudFRvU2hvd308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcydcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNjb3VudFZhbDogMFxuICAgIH1cbiAgfVxuXG4gIHNob3dJbnZvaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgICAgaWYgKGRpc2NvdW50IDw9IG1heERpc2NvdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmRpc2NvdW50VmFsID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgfVxuXG4gIH1cblxuICBpbnB1dE9uQmx1cihldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcbiAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICB9XG5cbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG90YWxzJz5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgJ3BhZGRpbmdUb3AnOiAnMCcsXG4gICAgICAgICdtYXJnaW5Ub3AnOiAnMCdcbiAgICAgIH19IGNsYXNzTmFtZT0nYmctd2hpdGUgcmlnaHQtaXRlbSc+XG4gICAgICAgIHsvKiA8c3Bhbj5cbiAgICAgICAgICA8Yj5Ub3RhbGVzOjwvYj5cbiAgICAgICAgPC9zcGFuPjxiciAvPiAqL31cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdG90YWxzLXRhYmxlJz5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5TdWItVG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICd3aWR0aCc6ICczNyUnXG4gICAgICAgICAgICAgIH19PkRlc2N1ZW50byAlPC90aD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD0nZGlzY291bnRGaWVsZCdcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaW5wdXRPbkJsdXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICczN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAwIDAgMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICdmb250U2l6ZSc6ICcxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2FsZV9nbG9iYWxfZGlzY291bnRfaW5wdXQgZm9ybS1jb250cm9sJyAvPlxuICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+RGVzY3VlbnRvOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SVY6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHsvKiA8dGggb25DbGljaz17dGhpcy5zaG93SW52b2ljZVBhbmVsLmJpbmQodGhpcyl9PlRvdGFsOjwvdGg+ICovfVxuICAgICAgICAgICAgICA8dGg+VG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXlvdXQoKSB7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxuXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG4gIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcblxuICBjb25zdCBjb25maWdCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQmFyJylcblxuICBpZiAoY29uZmlnQmFyLmNsYXNzTGlzdC5jb250YWlucygnbm90LXZpc2libGUnKSkge1xuXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uZmlnQmFyLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcyc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgSW5pY2lvPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9zYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgICBOdWV2YSBWZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJvZm9ybWEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIENvdGl6YWNpw7NuPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcmVzYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBQcmV2ZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdG9yZS51c2VyLnVzZXIsXG4gICAgcHJvZmlsZTogc3RvcmUudXNlci5wcm9maWxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBhdmF0YXIgPSB0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyID8gYC9tZWRpYS8ke3RoaXMucHJvcHMucHJvZmlsZS5hdmF0YXJ9YCA6ICcvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgOiAodGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgPyB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lIDogJydcblxuICAgIGxldCBmdWxsTmFtZSA9IGAke25hbWV9ICR7bGFzdE5hbWV9YFxuICAgIGlmIChmdWxsTmFtZS5sZW5ndGggPiAyMikgZnVsbE5hbWUgPSBmdWxsTmFtZS5zdWJzdHJpbmcoMCwgMjIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXIgY29sLXhzLTEyICc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItbmFtZSc+XG4gICAgICAgIDxzcGFuPntmdWxsTmFtZX08L3NwYW4+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmssIGxvZ2dlcilcblxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcbmltcG9ydCBjbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMvcmVkdWNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmV0Y2hpbmcsXG4gIGxheW91dCxcbiAgdXNlcixcbiAgY2FydCxcbiAgY2xpZW50cyxcbiAgcHJvZHVjdHMsXG4gIHNhbGUsXG4gIG1lc3NhZ2VzXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICBzaWRlTWVudVZpc2libGU6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NBTEVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHRydWUsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hPTUVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICAgICAgICBzaWRlTWVudVZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdXNlcjoge30sXG4gIHByb2ZpbGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBwcm9maWxlOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgY3JlYXRlZDogJycsXG4gIHVwZGF0ZWQ6ICcnLFxuICBpc051bGw6IGZhbHNlLFxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxuICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgaXNOdWxsOiBmYWxzZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiB0cnVlLFxuICAgICAgICBjYXJ0SXRlbXM6IFtcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0SXRlbXMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVNT1ZFX0ZST01fQ0FSVCc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cblxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG5cbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXG4gICAgICAvLyA/IHRydWVcbiAgICAgIC8vIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX0lURU1fTE9URSc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX1RPVEFMUyc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC50YXhlcyxcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfTElORV9ESVNDT1VOVCc6XG4gICAge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XS5kaXNjb3VudCA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIlxuY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnRzID0gc3RhdGUuY2xpZW50c1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgY2xpZW50czogY2xpZW50c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50LFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1RSVUUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IHRydWVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX0ZBTFNFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnQgPSBzdGF0ZS5jbGllbnRTZWxlY3RlZFxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHByb2R1Y3RzOiB7fSxcbiAgaW5wdXRWYWw6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7fVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XG4gICAge1xuICAgICAgY29uc3Qgd2lkdGggPSAhc3RhdGUuZnVsbFdpZHRoXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB3aWR0aFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwiaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIG1lc3NhZ2VzOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnUFJPRFVDVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIFBST0RVQ1RPIScsICdFbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdOT1RfRk9VTkRfU0FMRSc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgTEEgVkVOVEEhJywgYExhIHZlbnRhICMke2FjdGlvbi5wYXlsb2FkfSBubyBleGlzdGUsIG8gaGF5IHVuIHByb2JsZW1hIHBhcmEgY2FyZ2FybGEsIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLmApXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiEnLCAnSHVibyB1biBlcnJvciBhbCBlbmNvbnRyYXIgZWwgcHJvZHVjdG8gZW4gbGEgbGlzdGEgZGUgcHJvZHVjdG9zIGFncmVnYWRvcyxwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBQUk9EVUNUT1MhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBwcm9kdWN0b3MsIHBvciBmYXZvciBpbnRlbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAke2FjdGlvbi5wYXlsb2FkfWApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgQ0xJRU5URSEnLCAnRWwgY2xpZW50ZSBjb24gZWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgQ0xJRU5URVMhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBjbGllbnRlcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcblxuICAgIE51bWJlci5wcm90b3R5cGUuZm9ybWF0TW9uZXkgPSBmdW5jdGlvbihjLCBkLCB0KXtcbiAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG4gICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcbiAgICAgfTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2ZldGNpbmctY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy92ZW5kb3IvbG9hZGVycy9FY2xpcHNlLmdpZid9IC8+XG4gICAgICA8aDE+Q2FyZ2FuZG8gZWxlbWVudG9zPC9oMT5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4IiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgZmV0Y2hpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSElOR19TVEFSVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hJTkdfRE9ORSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiBmYWxzZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoJ3V1aWQvdjEnKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIG9wZW5zIHRoZSBwcm9kdWN0IHNlYXJjaCBwYW5lbFxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QoKSB7XG4gIHJldHVybiB7dHlwZTogJ1BST0RVQ1RfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjQ2FydChpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxuXG4gICAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtLnByb2R1Y3QsIGl0ZW0ucXR5LCBpdGVtLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcbiAgICBuZXdJdGVtLnRvdGFsV2l0aEl2ID0gZGF0YS50b3RhbFdpdGhJdlxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcbiAgICBuZXdJdGVtLnByaWNlVG9Vc2UgPSBkYXRhLnByaWNlVG9Vc2VcblxuICAgIHJldHVybiBuZXdJdGVtXG5cbiAgfSlcblxuICByZXR1cm4ge3R5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBuZXdDYXJ0fVxuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb3RlOiBsb3RlTnVtLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XG5cbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXG5cbiAgY29uc3QgcHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDogY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSkge1xuXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChjYXJ0ID0+IGNhcnQucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgY2FydC5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcblxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcbiAgaWYgKHBlckxpbmUpIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxuICAgICAgPyB7XG4gICAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgcXR5LFxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gcmVzXG5cbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuXG4vLyBjYWxjdWxhdGVzIHRoZSBzdWJ0b3RhbCBieSBsaW5lLCBhbHNvIHRoZSB0b3RhbCB3aXRoIGl2IGluY2x1ZGVkLCB0aGUgZGlzY291bnQgaW4gY3VycmVuY3kgZm9ybWF0XG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBwcmljZSA9IHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KVxuXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxuXG4gIGNvbnN0IGl2MSA9IChwcm9kdWN0LnVzZV90YXhlcylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjJcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcblxuICByZXR1cm4ge1xuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGlzY291bnRDdXJyZW5jeSxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBwcmljZVRvVXNlOiBwcmljZVxuICB9XG5cbn1cblxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xuXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIHJldHVybiB7XG4gICAgdXVpZDogdXVpZCxcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgcXR5OiBuZXdRdHksXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxuICAgIGxvdGU6IGl0ZW1zSW5DYXJ0W2luZGV4XS5sb3RlLFxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxuZnVuY3Rpb24gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpIHtcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=