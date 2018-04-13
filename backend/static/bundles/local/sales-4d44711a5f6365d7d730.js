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

  __REACT_HOT_LOADER__.register(updateStoreCashAmount, 'updateStoreCashAmount', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardAuth, 'updateStoreCardAuth', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardDigits, 'updateStoreCardDigits', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/actions.js');
}();

;

/***/ }),

/***/ 34:
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
exports.loadGlobalConfig = loadGlobalConfig;
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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(68);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(597);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(645);

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

var _topBar = __webpack_require__(640);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(642);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(69);

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

var _searchPanel = __webpack_require__(614);

var _searchPanel2 = _interopRequireDefault(_searchPanel);

var _searchPanel3 = __webpack_require__(617);

var _searchPanel4 = _interopRequireDefault(_searchPanel3);

var _payPanel = __webpack_require__(620);

var _payPanel2 = _interopRequireDefault(_payPanel);

var _invoicePanel = __webpack_require__(627);

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

var _actions = __webpack_require__(80);

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

var Mousetrap = __webpack_require__(34);

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

var _actions2 = __webpack_require__(80);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(34);

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

var _totals = __webpack_require__(612);

var _totals2 = _interopRequireDefault(_totals);

var _buttons = __webpack_require__(613);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(80);

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

var Buttons = (_dec = (0, _reactRedux.connect)(function (store) {
  // return {disabled: store.sales.completed}
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
      window.location.href = '/sales/pos';
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

/***/ 614:
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

var _searchForm = __webpack_require__(615);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(616);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(34);

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

/***/ 615:
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

/***/ 617:
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

var _searchForm = __webpack_require__(618);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(619);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(34);

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

/***/ 618:
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

var _payMethod = __webpack_require__(621);

var _payMethod2 = _interopRequireDefault(_payMethod);

var _payCahs = __webpack_require__(622);

var _payCahs2 = _interopRequireDefault(_payCahs);

var _payCard = __webpack_require__(623);

var _payCard2 = _interopRequireDefault(_payCard);

var _payCredit = __webpack_require__(624);

var _payCredit2 = _interopRequireDefault(_payCredit);

var _payOther = __webpack_require__(625);

var _payOther2 = _interopRequireDefault(_payOther);

var _paySideBar = __webpack_require__(626);

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

        case 'CREDIT':
          {
            payMethod = _react2.default.createElement(_payCredit2.default, null);
            break;
          } //  case

        case 'OTHER':
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

  __REACT_HOT_LOADER__.register(PayPanel, 'PayPanel', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/payPanel.jsx');
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
          { onClick: this.clickChangePayMethod.bind(this, 'CREDIT'), className: this.props.payMethod == 'CREDIT' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
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
          { className: this.props.payMethod == 'OTHER' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
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

  __REACT_HOT_LOADER__.register(PayMethod, 'PayMethod', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/payMethod.jsx');
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

  __REACT_HOT_LOADER__.register(PayCash, 'PayCash', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/payCahs.jsx');
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

  __REACT_HOT_LOADER__.register(PayCard, 'PayCard', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/payCard.jsx');
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
      var available = this.props.client.credit_limit - this.props.debt;
      var clientLimit = this.props.client.has_credit ? '\u20A1 ' + this.props.client.credit_limit.formatMoney(2, ',', '.') : 'SIN CRÉDITO';
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

  __REACT_HOT_LOADER__.register(PayCredit, 'PayCredit', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/payCredit.jsx');
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

  __REACT_HOT_LOADER__.register(PayOther, 'PayOther', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/payOther.jsx');
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
// import {saveItem, loadSale} from '../actions'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(34);

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
      var sales = [];

      var sortedSales = sales.length > 1 ? sales.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      }) : sales;

      var nextId = sortedSales.length > 0 ? sortedSales[0].id + 1 : 1;

      var sale = {
        id: nextId,
        docType: 'SALE',
        cart: this.props.cart,
        client: this.props.client,
        user: this.props.user,
        pay: this.props.pay,
        created: new Date()
      };

      if (this.props.pay.payMethod == 'CREDIT') {
        sale.pay.debt = this.props.cart.cartTotal;
        sale.pay.payed = false;
      }
      // const kwargs = {
      //   db: 'sales',
      //   movements: this.props.movements,
      //   item: sale,
      //   sucessMessage: 'Venta creada Correctamente.',
      //   errorMessage: 'Hubo un error al crear la venta, intente de nuevo.'
      // }

      // this.props.dispatch(saveItem(kwargs))
      this.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: '' });
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
        case 'CREDIT':
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
          _react2.default.createElement(
            'div',
            { onClick: this.saveBtn.bind(this), className: payButtonClass },
            'Pagar',
            _react2.default.createElement('i', { className: 'fa fa-credit-card', 'aria-hidden': 'true' })
          )
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

  __REACT_HOT_LOADER__.register(PaySideBar, 'PaySideBar', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/components/paySideBar.jsx');
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _api = __webpack_require__(4);

var _fullInvoice = __webpack_require__(628);

var _fullInvoice2 = _interopRequireDefault(_fullInvoice);

var _compactInvoice = __webpack_require__(634);

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

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(629);

var _header2 = _interopRequireDefault(_header);

var _data = __webpack_require__(630);

var _data2 = _interopRequireDefault(_data);

var _table = __webpack_require__(631);

var _table2 = _interopRequireDefault(_table);

var _totals = __webpack_require__(632);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(633);

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

/***/ 629:
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
      var id = sale.id ? sale.id : '00001';

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

/***/ 631:
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

/***/ 633:
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

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(635);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(636);

var _table2 = _interopRequireDefault(_table);

var _data = __webpack_require__(637);

var _data2 = _interopRequireDefault(_data);

var _totals = __webpack_require__(638);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(639);

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

/***/ 636:
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

/***/ 637:
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
      var id = sale.id ? sale.id : '0001';
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

/***/ 639:
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

/***/ 640:
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

var _actions = __webpack_require__(641);

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

/***/ 641:
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

/***/ 642:
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

var _search = __webpack_require__(643);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(644);

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

/***/ 643:
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

/***/ 644:
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

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxLogger = __webpack_require__(40);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(42);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(646);

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

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducer = __webpack_require__(79);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(647);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(648);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(649);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(650);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(651);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(652);

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = __webpack_require__(653);

var _reducer16 = _interopRequireDefault(_reducer15);

var _reducer17 = __webpack_require__(654);

var _reducer18 = _interopRequireDefault(_reducer17);

var _reducer19 = __webpack_require__(655);

var _reducer20 = _interopRequireDefault(_reducer19);

var _reducer21 = __webpack_require__(656);

var _reducer22 = _interopRequireDefault(_reducer21);

var _reducer23 = __webpack_require__(657);

var _reducer24 = _interopRequireDefault(_reducer23);

var _reducer25 = __webpack_require__(658);

var _reducer26 = _interopRequireDefault(_reducer25);

var _reducer27 = __webpack_require__(659);

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

/***/ 647:
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

/***/ 648:
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

/***/ 649:
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

/***/ 650:
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

/***/ 651:
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

/***/ 652:
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

/***/ 653:
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

/***/ 654:
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

/***/ 655:
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

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  isVisible: true,
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/sales/general/pay/reducer.js');
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
  isVisible: true,
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

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var saleActiveModel = {
  id: 0,
  docType: 'SALE',
  cart: {},
  client: '',
  pay: {},
  created: new Date()
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
        return _extends({}, state, {
          saleActive: action.payload
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
        var sale = saleActiveModel;
        sale.cart = action.payload.cart;
        sale.client = action.payload.client;
        return _extends({}, state, {
          saleActive: sale
        });
      }

    case 'LOADED_PROFORMA':
      {
        var _sale = saleActiveModel;
        _sale.cart = action.payload.cart;
        _sale.client = action.payload.client;
        return _extends({}, state, {
          saleActive: _sale
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

/***/ 659:
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

/***/ 68:
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

/***/ 69:
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

/***/ 79:
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

/***/ 80:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNsaWVudFNlbGVjdGVkIiwidXNlclNlbGVjdGVkIiwic2VhcmNoQ2xpZW50IiwiY29kZSIsImNsaWVudHMiLCJmaW5kSW5kZXgiLCJjbGllbnQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsIl9pZCIsInVzZXJzIiwidXNlciIsInVwZGF0ZVN0b3JlQ2FzaEFtb3VudCIsInVwZGF0ZVN0b3JlQ2FyZEF1dGgiLCJ1cGRhdGVTdG9yZUNhcmREaWdpdHMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwibnVtYmVyIiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImxvYWRHbG9iYWxDb25maWciLCJnZXROZXh0TnVtZXJpY0NvZGUiLCJzZXROZXh0UHJldkl0ZW0iLCJkZWZhdWx0cyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJrd2FyZ3MiLCJ1cmwiLCJzdWNjZXNzVHlwZSIsImVycm9yVHlwZSIsImRpc3BhdGNoIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiYWxlcnQiLCJzdWNjZXNzVHlwZTIiLCJsb29rVXBWYWx1ZSIsImxvb2tVcEZpZWxkIiwiaGlzdG9yeSIsInJlZGlyZWN0VXJsIiwibGVuZ3RoIiwibW9kZWxOYW1lIiwibG9va1VwTmFtZSIsImRpc3BhdGNoVHlwZSIsImRpc3BhdGNoVHlwZTIiLCJkaXNwYXRjaEVycm9yVHlwZSIsInB1c2giLCJpdGVtIiwibG9nQ29kZSIsIml0ZW1PbGQiLCJsb2dNb2RlbCIsImxvZ0Rlc2NyaXB0aW9uIiwibWV0aG9kIiwic3VjZXNzTWVzc2FnZSIsInNldCIsInNhdmVMb2ciLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJrd2FyZ3MyIiwiaXRlbTIiLCJ1cmwyIiwibG9nQ29kZTIiLCJpdGVtT2xkMiIsImxvZ01vZGVsMiIsImxvZ0Rlc2NyaXB0aW9uMiIsIm1vZGVsIiwic2VjdGlvbiIsIm5hbWUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbmZpZyIsImZpbHRlciIsImZvckVhY2giLCJ2YWx1ZSIsIm9sZE9iamVjdCIsIm9iamVjdCIsImRlc2NyaXB0aW9uIiwicHJldk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPYmplY3QiLCJ1c2VyMiIsInByZXZfb2JqZWN0IiwibmV3X29iamVjdCIsImVsZW1lbnRzIiwiZmllbGQiLCJrZXlzIiwibWFwIiwiZWxlbWVudCIsInNvcnQiLCJhIiwiYiIsIm1heCIsInBvcCIsIm5leHQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiaXRlbXMiLCJjb2RlRmllbGQiLCJwcmV2aW91cyIsImluZGV4IiwibmV4dENvZGUiLCJwcmV2Q29kZSIsIndpbmRvdyIsImFsZXJ0aWZ5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW4iLCJzdG9yZSIsImZldGNoaW5nIiwic2lkZU1lbnVWaXNpYmxlIiwibGF5b3V0IiwicHJvcHMiLCJtYWluQ29udGFpbmVyQ2xhc3MiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZmVjdGhQcm9maWxlIiwiZmVjdGhJc0FkbWluTG9ja2VkIiwiZmllbGRzIiwicHJvZmlsZSIsInJvdXRlcyIsIkhvbWUiLCJTYWxlIiwiZnVsbFdpZHRoIiwic2FsZSIsInRvdGFsIiwiY2FydCIsImNhcnRUb3RhbCIsImNvbnRlbnRDbGFzcyIsImNhcnRDbGFzcyIsInRvdGFsQ2xhc3MiLCJmb3JtYXRNb25leSIsInRvZ2dsZVdpZHRoIiwiYmluZCIsIlByb2R1Y3QiLCJwcm9kdWN0cyIsIml0ZW1zSW5DYXJ0IiwiY2FydEl0ZW1zIiwiaW5wdXRWYWwiLCJnbG9iYWxEaXNjb3VudCIsImNvZGVJbnB1dCIsImZvY3VzIiwicHJvZHVjdEt3YXJncyIsImV2Iiwia2V5IiwidGFyZ2V0Iiwic3BsaXQiLCJxdHkiLCJpc05hTiIsImRlZmF1bHRDb25maWciLCJ1c2VyQ29uZmlnIiwiZGlzYWJsZWQiLCJpbnB1dEtleVByZXNzIiwiaW5wdXQiLCJzZWFyY2hQcm9kdWN0Q2xpY2siLCJNb3VzZXRyYXAiLCJyZXF1aXJlIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsImRpc2NvdW50IiwibG90ZSIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwicHJvZHVjdCIsImJhcmNvZGUiLCJyZW1vdmVJY29uQ2xhc3MiLCJ0YXhlczEiLCJ1c2VfdGF4ZXMiLCJ0YXhlcyIsInF0eUZpZWxkIiwicXR5SW5wdXRDaGFuZ2UiLCJ1dWlkIiwiZmllbGRGb2N1cyIsInF0eUlucHV0S2V5UHJlc3MiLCJkaXNjb3VudEZpZWxkIiwic2FsZUxvYWRlZCIsImRpc2NvdW50SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50SW5wdXRPbkJsdXIiLCJzZXRDYXJ0SXRlbUFjdGl2ZSIsInByaWNlVG9Vc2UiLCJ0b3RhbFdpdGhJdiIsInJlbW92ZUl0ZW0iLCJ1cGRhdGVUb3RhbHMiLCJyZW1vdmVGcm9tQ2FydCIsInN1YnRvdGFsIiwic3ViVG90YWxOb0Rpc2NvdW50IiwiZGlzY291bnRUb3RhbCIsInRheGVzQ2FsYyIsInRheGVzQ2FsYzIiLCJ1c2VfdGF4ZXMyIiwidGF4ZXMyIiwiZGlzY291bnRDdXJyZW5jeSIsImluZGV4SW5DYXJ0IiwiQXNpZGUiLCJhc2lkZUNsYXNzIiwiYXNpZGVDb250YWluZXJDbGFzcyIsIkNsaWVudHMiLCJkZWJ0IiwiY2xpZW50U2VsZWN0ZWREZWJ0IiwibmV4dFByb3BzIiwiZGVmYXVsdERpc2NvdW50IiwiY2xpZW50S3dhcmdzIiwiY2xpZW50VG9TaG93IiwibGFzdF9uYW1lIiwic2VhcmNoQ2xpZW50Q2xpY2siLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50Iiwic3RhdGUiLCJkaXNjb3VudFZhbCIsIm1heERpc2NvdW50IiwiaW5wdXRPbkJsdXIiLCJCdXR0b25zIiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9ucyIsInNob3dJbm9pY2VQYW5lbCIsIm5ld1NhbGUiLCJzaG93UGF5UGFuZWwiLCJzaG93U2FsZVBhbmVsIiwic2hvd1ByZXNhbGVzUGFuZWwiLCJzZWFyY2hQcm9kdWN0cyIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZpc2libGVPck5vdCIsInBhbmVsQ2xpY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hWYWwiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwicmVzdWx0c1RhYmxlIiwibWF0Y2hlcyIsInByb2R1Y3RzTWF0Y2hlZCIsInNlbGVjdFByb2R1Y3QiLCJzZWxscHJpY2UiLCJzZWFyY2hDbGllbnRzIiwic2VhcmNoQ2xpZW50QWN0aW9uIiwidmFsIiwiY2xpZW50c01hdGNoZWQiLCJoYXNDcmVkaXQiLCJoYXNfY3JlZGl0Iiwic2VsZWN0Q2xpZW50IiwiUGF5UGFuZWwiLCJwYW5lbFZpc2libGUiLCJwYXkiLCJpc1Zpc2libGUiLCJwYXlNZXRob2QiLCJoaWRlUGFuZWwiLCJQYXlNZXRob2QiLCJjbGlja0NoYW5nZVBheU1ldGhvZCIsIlBheUNhc2giLCJjYXNoQW1vdW50IiwicGF5QW1vdW50Q2hhbmdlZCIsIlBheUNhcmQiLCJjYXJkQXV0aCIsImNhcmREaWdpdHMiLCJwYXlDYXJkRGlnaXRzQ2hhbmdlZCIsInBheUNhcmRBdXRoQ2hhbmdlZCIsIlBheUNyZWRpdCIsImF2YWlsYWJsZSIsImNyZWRpdF9saW1pdCIsImNsaWVudExpbWl0IiwiY2xpZW50QXZhaWxhYmxlIiwiUGF5T3RoZXIiLCJQYXlTaWRlQmFyIiwic2FsZXMiLCJzb3J0ZWRTYWxlcyIsImlkIiwibmV4dElkIiwiZG9jVHlwZSIsImNyZWF0ZWQiLCJEYXRlIiwicGF5ZWQiLCJyZXNldCIsImNoYW5nZSIsInBheUJ1dHRvbkNsYXNzIiwiY2FzaCIsImF1dGgiLCJkaWdpdHMiLCJzYXZlQnRuIiwiSW52b2ljZVBhbmVsIiwiaW52b2ljZSIsImlzRnVsbCIsInByaW50RGl2IiwiaXNGdWxsQ2xhc3MiLCJjb21wb25lbnRUb01vdW50IiwidG9nZ2xlUGFuZWwiLCJwcmludFBhbmVsIiwiRnVsbEludm9pY2UiLCJIZWFkZXIiLCJzYWxlQWN0aXZlIiwiY29tcGFueSIsImhlYWRlcnRleHQiLCJsb2dvIiwibG9nb1dpZHRoIiwibG9nb1VybCIsImhlYWRlck5hbWUiLCJjb21lcmNpYWxfbmFtZSIsImhlYWRlck5hbWUyIiwibGVnYWxfbmFtZSIsInRlbHMiLCJ0ZWxlcGhvbmVzIiwidGVsc1RleHQiLCJpZFR5cGUiLCJpZFRleHQiLCJ0b1VwcGVyQ2FzZSIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjb3VudHJ5IiwiZW1haWwiLCJEYXRhIiwiZGF0ZSIsImdldERhdGUiLCJzbGljZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJjbGllbnRBZHJlc3MiLCJhZHJlc3MiLCJUYWJsZSIsInRheGVzVGV4dCIsImdsb2JhbERpc2NvdW50Um93IiwiTm90ZXMiLCJDb21wYWN0SW52b2ljZSIsImNvbWVyY2lhbE5hbWUiLCJsZWdhbE5hbWUiLCJ1c2VUYXhlcyIsIlRvcEJhciIsInRvcEJhclRvZ2dsZVZpc2libGUiLCJjb25maXJtIiwicmVwbGFjZSIsImJ1dHRvbkNsYXNzIiwibWVudUNsaWNrIiwiaG9tZUNsaWNrIiwibG9nT3V0Q2xpY2siLCJ0b2dnbGVMYXlvdXQiLCJ0b2dnbGVDb25maWdCYXIiLCJtYWluQ29udGFpbmVyIiwic2lkZU1lbnUiLCJyZW1vdmUiLCJhZGQiLCJjb25maWdCYXIiLCJTaWRlTWVudSIsInNpZGVNZW51Q2xhc3MiLCJTZWFyY2giLCJVc2VyIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsInVzZXJuYW1lIiwibGFzdE5hbWUiLCJmdWxsTmFtZSIsInN1YnN0cmluZyIsIm1pZGRsZXdhcmUiLCJtZXNzYWdlcyIsInJlZHVjZXIiLCJzdGF0ZUNvbnN0IiwiYWN0aW9uIiwiZWRpdGFibGUiLCJ1cGRhdGVkIiwiaXNOdWxsIiwiY2FydEhhc0l0ZW1zIiwiY2FydFN1YnRvdGFsIiwibmV3Q2FydCIsInNwbGljZSIsIml0ZW1zTGVmdEluQ2FydCIsImNsaWVudFNlbGVjdGVkTW9kZWwiLCJjbGllbnRUeXBlIiwiY3JlZGl0X2RheXMiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiZGVmYXVsdERlc2luZyIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwiY29tcGxldGVkIiwic2FsZUFjdGl2ZUlkIiwiaXNTYWxlc1BhbmVsVmlzaWJsZSIsImlzUHJlc2FsZXNQYW5lbFZpc2libGUiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJjIiwiZCIsInQiLCJuIiwiTWF0aCIsImFicyIsInVuZGVmaW5lZCIsInMiLCJpIiwiU3RyaW5nIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJGZXRjaGluZyIsInJlY2FsY0NhcnQiLCJ1cGRhdGVJdGVtRGlzY291bnQiLCJ1cGRhdGVJdGVtTG90ZSIsInByb2R1Y3RTZWxlY3RlZCIsInVwZGF0ZVF0eSIsInVwZGF0ZVF0eUNvZGUiLCJhZGRTdWJPbmUiLCJ1dWlkdjEiLCJuZXdJdGVtIiwiY2FjbFN1YnRvdGFsIiwidXBkYXRlZENhcnRJdGVtIiwibG90ZU51bSIsInBlckxpbmUiLCJjaGVja0lmSW5DYXJ0IiwicXR5TnVtIiwic3ViT3JBZGQiLCJkYXRhTmV3UHJvZCIsInByb2R1Y3REaXNjb3VudCIsInByaWNlIiwic3ViVG90YWwiLCJpdjEiLCJpdjIiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsInVzZVByaWNlMiIsInByaWNlMiIsInVzZVByaWNlMyIsInByaWNlMyIsInNlYXJjaFByb2R1Y3QiLCJwcm9kdWN0U2VsZWN0ZWRUYWJsZSIsInRleHQiLCJtYXRjaHMiLCJjb250cm9sIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwid29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFDZ0JBLGMsR0FBQUEsYztRQW9CQUMsWSxHQUFBQSxZO1FBb0JBQyxZLEdBQUFBLFk7QUF4Q1QsU0FBU0YsY0FBVCxDQUF3QkcsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDOztBQUU1QyxNQUFNSixpQkFBaUJJLFFBQVFDLFNBQVIsQ0FBa0I7QUFBQSxXQUFVQyxPQUFPSCxJQUFQLElBQWVBLElBQXpCO0FBQUEsR0FBbEIsQ0FBdkIsQ0FGNEMsQ0FFNEI7O0FBRXhFLE1BQU1JLE1BQU9QLGtCQUFrQixDQUFDLENBQXBCLEdBQXVCO0FBQy9CO0FBQ0FRLFVBQU0sa0JBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0saUJBRE47QUFFQUMsYUFBUztBQUNQSCxjQUFRRixRQUFRSixjQUFSO0FBREQ7QUFGVCxHQUxKOztBQVlBLFNBQU9PLEdBQVA7QUFFRDs7QUFFTSxTQUFTTixZQUFULENBQXNCUyxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0M7O0FBRXZDLE1BQU1WLGVBQWVVLE1BQU1OLFNBQU4sQ0FBZ0I7QUFBQSxXQUFRTyxLQUFLRixHQUFMLElBQVlBLEdBQXBCO0FBQUEsR0FBaEIsQ0FBckIsQ0FGdUMsQ0FFdUI7O0FBRTlELE1BQU1ILE1BQU9OLGdCQUFnQixDQUFDLENBQWxCLEdBQXFCO0FBQzdCO0FBQ0FPLFVBQU0sZ0JBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0sZUFETjtBQUVBQyxhQUFTO0FBQ1BHLFlBQU1ELE1BQU1WLFlBQU47QUFEQztBQUZULEdBTEo7O0FBWUEsU0FBT00sR0FBUDtBQUVEOztBQUVNLFNBQVNMLFlBQVQsR0FBd0I7O0FBRTdCLFNBQU8sRUFBQ00sTUFBTSxtQkFBUCxFQUE0QkMsU0FBUyxDQUFDLENBQXRDLEVBQVA7QUFDRDs7Ozs7Ozs7Z0NBM0NlVCxjOztnQ0FvQkFDLFk7O2dDQW9CQUMsWTs7Ozs7Ozs7Ozs7Ozs7OztRQ25DQVcscUIsR0FBQUEscUI7UUFlQUMsbUIsR0FBQUEsbUI7UUFlQUMscUIsR0FBQUEscUI7QUFwQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU0YscUJBQVQsQ0FBK0JHLE1BQS9CLEVBQXVDOztBQUU1QyxNQUFNVCxNQUFPUyxNQUFELEdBQVM7QUFDakI7QUFDQVIsVUFBTSxvQkFETjtBQUVBQyxhQUFTUSxXQUFXRCxNQUFYO0FBRlQsR0FEUSxHQUtSO0FBQ0FSLFVBQU0sb0JBRE47QUFFQUMsYUFBUztBQUZULEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOztBQUVNLFNBQVNPLG1CQUFULENBQTZCSSxNQUE3QixFQUFxQzs7QUFFMUMsTUFBTVgsTUFBT1csTUFBRCxHQUFTO0FBQ2pCO0FBQ0FWLFVBQU0sa0JBRE47QUFFQUMsYUFBU1M7QUFGVCxHQURRLEdBS1I7QUFDQVYsVUFBTSxrQkFETjtBQUVBQyxhQUFTO0FBRlQsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRU0sU0FBU1EscUJBQVQsQ0FBK0JHLE1BQS9CLEVBQXVDOztBQUU1QyxNQUFNWCxNQUFPVyxNQUFELEdBQVM7QUFDakI7QUFDQVYsVUFBTSxvQkFETjtBQUVBQyxhQUFTUztBQUZULEdBRFEsR0FLUjtBQUNBVixVQUFNLG9CQUROO0FBRUFDLGFBQVM7QUFGVCxHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztnQ0FsSWdCTSxxQjs7Z0NBZUFDLG1COztnQ0FlQUMscUI7Ozs7Ozs7Ozs7QUNwQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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S0FBSzhYLFdBQUwsR0FBbUJDLE9BQW5CLENBQTJCQyxLQUFLRixXQUFMLEVBQTNCLENBQWQ7O0FBRUEsVUFBSTdWLFNBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2Y0VixrQkFBVSxLQUFWO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7QUFDRixLQVBEOztBQVNBLFFBQUlBLE9BQUosRUFBYTtBQUNYRCxhQUFPalosSUFBUCxDQUFZdEQsTUFBWjtBQUNEO0FBRUYsR0FqQkQ7O0FBbUJBLE1BQU1DLE1BQU9zYyxPQUFPdlosTUFBUixHQUNSO0FBQ0E5QyxVQUFNLHVCQUROO0FBRUFDLGFBQVNvYztBQUZULEdBRFEsR0FLUjtBQUNBcmMsVUFBTSxvQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7Ozs7Ozs7Z0NBMUNlaVIsUzs7Z0NBS0F0UixZIiwiZmlsZSI6InNhbGVzLTRkNDQ3MTFhNWY2MzY1ZDdkNzMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gY2xpZW50U2VsZWN0ZWQoY29kZSwgY2xpZW50cykge1xuXG4gIGNvbnN0IGNsaWVudFNlbGVjdGVkID0gY2xpZW50cy5maW5kSW5kZXgoY2xpZW50ID0+IGNsaWVudC5jb2RlID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChjbGllbnRTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUxFQ1RFRCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNsaWVudDogY2xpZW50c1tjbGllbnRTZWxlY3RlZF1cbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyU2VsZWN0ZWQoX2lkLCB1c2Vycykge1xuXG4gIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHVzZXJzLmZpbmRJbmRleCh1c2VyID0+IHVzZXIuX2lkID09IF9pZCkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKHVzZXJTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVU0VSX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVU0VSX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXNlcjogdXNlcnNbdXNlclNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCgpIHtcblxuICByZXR1cm4ge3R5cGU6ICdDTElFTlRfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2FjdGlvbnMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FzaEFtb3VudChhbW91bnQpIHtcblxuICBjb25zdCByZXMgPSAoYW1vdW50KSAvLyBpZiBpdHMgYSB2YWx1ZVxuICAgID8ge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVNIX0FNT1VOVCcsXG4gICAgICBwYXlsb2FkOiBwYXJzZUZsb2F0KGFtb3VudClcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcbiAgICAgIHBheWxvYWQ6IDBcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXJkQXV0aChudW1iZXIpIHtcblxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxuICAgID8ge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0FVVEgnLFxuICAgICAgcGF5bG9hZDogbnVtYmVyXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0FVVEgnLFxuICAgICAgcGF5bG9hZDogJydcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXJkRGlnaXRzKG51bWJlcikge1xuXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfRElHSVRTJyxcbiAgICAgIHBheWxvYWQ6IG51bWJlclxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxuICAgICAgcGF5bG9hZDogJydcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9hZFNhbGUoaWQsIHNhbGVzKSB7XG4vLyAgIGNvbnN0IGZpbHRlcmVkU2FsZXMgPSBzYWxlcy5maWx0ZXIoc2FsZSA9PiB7XG4vLyAgICAgcmV0dXJuIHNhbGUuaWQgPT0gaWRcbi8vICAgfSlcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4vLyAgICAgaWYgKGZpbHRlcmVkU2FsZXMubGVuZ3RoKSB7XG4vLyAgICAgICBmaWx0ZXJlZFNhbGVzWzBdWydjcmVhdGVkJ10gPSBuZXcgRGF0ZShmaWx0ZXJlZFNhbGVzWzBdWydjcmVhdGVkJ10pXG4vLyAgICAgICAvLyBmaWx0ZXJlZFNhbGVzWzBdWydnbG9iYWxEaXNjb3VudCddID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydnbG9iYWxEaXNjb3VudCddKVxuLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnY2FydCddWydnbG9iYWxEaXNjb3VudCddKVxuLy8gICAgICAgZG9jdW1lbnQudGl0bGUgPSBgVmVudGEgIyR7aWR9YFxuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY2xpZW50J11bJ3NhbGVMb2FkZWQnXSA9IHRydWVcblxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdMT0FERURfU0FMRScsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF19KVxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF19KVxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF0uX2lkfSlcblxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVF9GT1VORF9TQUxFJywgcGF5bG9hZDogaWR9KVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XG5cbi8vICAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4vLyAgIGNvbnN0IG1vdmVtZW50cyA9IGt3YXJncy5tb3ZlbWVudHNcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4vLyAgICAgY29uc3QgZGIgPSBuZXcgUG91Y2hEQihrd2FyZ3MuZGIpXG5cbi8vICAgICBkYi5wb3N0KGl0ZW0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBpdGVtfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiByZXNwb25zZS5pZH0pXG5cbi8vICAgICAgIGlmIChpdGVtLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHsgLy8gSUYgQ1JFRElUIENSRUFURSBDUkVESVQgTU9WRU1FTlRcbi8vICAgICAgICAgY29uc3QgZGIyID0gbmV3IFBvdWNoREIoJ2dlbmVyYWwnKVxuLy8gICAgICAgICBjb25zdCBtb3ZlbWVudCA9IGdldE1vdmVtZW50KG1vdmVtZW50cywgcmVzcG9uc2UuaWQsIGl0ZW0pXG5cbi8vICAgICAgICAgZGIyLnBvc3QobW92ZW1lbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7IC8vIElGIEVSUk9SIFNIT1cgTUVTU0FHRVxuLy8gICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBtb3ZpbWllbnRvIGRlIGNyw6lkaXRvLCBwb3IgZmF2b3IgYW51bGUgbGEgZmFjdHVyYSB5IGNyZWVsYVxuLy8gICAgICAgICAgIGRlIG51ZXZvIEVSUk9SOiAke2Vycn0uYClcbi8vICAgICAgICAgfSlcblxuLy8gICAgICAgfSBlbHNlIHsgLy8gSUYgTk9UIENSRURJVCBTSE9XIFBBTkVMU1xuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgIH1cblxuLy8gICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldE1vdmVtZW50KG1vdmVtZW50cywgc2FsZUlkLCBzYWxlKSB7XG5cbi8vICAgY29uc3Qgc29ydGVkTW92ZW1lbnRzID0gbW92ZW1lbnRzLmxlbmd0aCA+IDEgPyBtb3ZlbWVudHMuc29ydCgoYSwgYikgPT4ge1xuLy8gICAgIGlmIChhLmRvY3VtZW50IDwgYi5kb2N1bWVudCkge1xuLy8gICAgICAgcmV0dXJuIDFcbi8vICAgICB9XG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPiBiLmRvY3VtZW50KSB7XG4vLyAgICAgICByZXR1cm4gLTFcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIDBcbi8vICAgfSkgOiBtb3ZlbWVudHNcblxuLy8gICBjb25zdCBuZXh0SWQgPSBzb3J0ZWRNb3ZlbWVudHMubGVuZ3RoID4gMCA/IHNvcnRlZE1vdmVtZW50c1swXS5kb2N1bWVudCArIDEgOiAxXG5cbi8vICAgY29uc3QgbW92ZW1lbnQgPSB7XG4vLyAgICAgJ2RvY3VtZW50JzogbmV4dElkLFxuLy8gICAgICdkb2NUeXBlJzogJ0NMSUVOVF9NT1ZFTUVOVCcsXG4vLyAgICAgJ2NsaWVudElkJzogc2FsZS5jbGllbnQuX2lkLFxuLy8gICAgICd0eXBlJzogJ0NSRURJVCcsXG4vLyAgICAgJ2Ftb3VudCc6IHBhcnNlRmxvYXQoc2FsZS5jYXJ0LmNhcnRUb3RhbCksXG4vLyAgICAgJ2RhdGUnOiBuZXcgRGF0ZSgpLFxuLy8gICAgICdzYWxlX2lkJzogc2FsZUlkLFxuLy8gICAgICdzYWxlSWQnOiBzYWxlLmlkLFxuLy8gICAgICdkZXNjcmlwdGlvbic6IGBWZW50YSBhIGNyw6lkaXRvIGNvbiBmYWN0dXJhICMke3NhbGUuaWR9YFxuLy8gICB9XG5cbi8vICAgcmV0dXJuIG1vdmVtZW50XG5cbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2FjdGlvbnMuanMiLCIvKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4xXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09ORklHIERFRkFVTFQgQVhJT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHRVQgRlVOQ1RJT05TIChSRVRSSUVWRSBBTEwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRGlzcGF0Y2goa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgLy8gSUYgVEhFIEVSUk9SIElTIFVOQVVUT1JJWkVEIFBBR0UgV0lMTCBTSE9XIFRIRSBNRVNTQUdFXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURvdWJsZURpc3BhdGNoKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcbiAgY29uc3Qgc3VjY2Vzc1R5cGUyID0ga3dhcmdzLnN1Y2Nlc3NUeXBlMlxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZTIsIHBheWxvYWQ6ICcnfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SZXR1cm4oa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuXG4gIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgcmV0dXJuIGVycm9yXG4gIH0pXG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTRVQgRlVOQ1RJT04gKFJFVFJJRVZFIElORElWSURVQUwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGxvb2tVcFZhbHVlID0ga3dhcmdzLmxvb2tVcFZhbHVlXG4gIGNvbnN0IGxvb2tVcEZpZWxkID0ga3dhcmdzLmxvb2tVcEZpZWxkXG4gIGNvbnN0IGhpc3RvcnkgPSBrd2FyZ3MuaGlzdG9yeVxuICBjb25zdCByZWRpcmVjdFVybCA9IGt3YXJncy5yZWRpcmVjdFVybFxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApXG4gICAgYXhpb3MuZ2V0KGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAvLyBJRiBUSEVSRSBJUyBNT1JFIFRIQU4gT05FIEVMRU1FTlQgRklMVEVSRURcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdBVEVOQ0nDk04nLCBgRXhpc3RlIG1hcyBkZSB1biAke2t3YXJncy5tb2RlbE5hbWV9IGNvbiBlbCAke2t3YXJncy5sb29rVXBOYW1lfTpcbiAgICAgICAgICAke2t3YXJncy5sb29rVXBWYWx1ZX0sIHNlIHV0aWxpemFyw6EgZWwgcHJpbWVybyBlbiBsaXN0YSwgcG9yIGxvIHF1ZSBwdWVkZSBubyBzZXIgZWwgbWlzbW8gcXVlIHVkIGRlc2VhXG4gICAgICAgICAgYWN0dWFsaXphciwgZXN0byBwdWVkZSBkZWJlcnNlIGEgdW4gZXJyb3IsIHBvciBmYXZvciByZXZpc2UgbG9zXG4gICAgICAgICAgZGF0b3MgbyBjb250YWN0ZSBjb24gZWwgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYS5gKVxuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFbMF19KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZTIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFbMF19KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hFcnJvclR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYE5vIGhheSAke2t3YXJncy5tb2RlbE5hbWV9IGNvbiBlbCB2YWxvciBkZSAke2t3YXJncy5sb29rVXBOYW1lfTogJHtrd2FyZ3MubG9va1VwVmFsdWV9YCxcbiAgICAgICAgICBmdW5jdGlvbigpIHsgaGlzdG9yeS5wdXNoKHJlZGlyZWN0VXJsKSB9KVxuICAgICAgfVxuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIGVsIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICB9KVxuICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGRlbGV0ZSBpdGVtWydpZCddXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIEZVTkNUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGt3YXJncy5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERPVUJMRSBVUERBVEUgUEFSVElBTExZIEZVTkNUSU9OIChQQVRDSClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJdGVtcyhrd2FyZ3MsIGt3YXJnczIpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICBjb25zdCBpdGVtMiA9IGt3YXJnczIuaXRlbVxuICBjb25zdCB1cmwyID0ga3dhcmdzMi51cmxcbiAgY29uc3QgbG9nQ29kZTIgPSBrd2FyZ3MyLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZDIgPSBrd2FyZ3MyLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwyID0ga3dhcmdzMi5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbjIgPSBrd2FyZ3MyLmxvZ0Rlc2NyaXB0aW9uXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLy8gRklSU1QgUEFUQ0ggVEhFTlxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gU0VDT05EIFBBVENIXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICAgICAgdXJsOiB1cmwyLFxuICAgICAgICAgIGRhdGE6IGl0ZW0yXG4gICAgICAgIH0pXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIFRIRU5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGt3YXJnczIucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAga3dhcmdzMi5oaXN0b3J5LnB1c2goa3dhcmdzMi5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJnczIuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgICAgICBzYXZlTG9nKGxvZ0NvZGUyLCBsb2dNb2RlbDIsIGl0ZW1PbGQyLCBpdGVtMiwgbG9nRGVzY3JpcHRpb24yLCB1c2VyKVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIENBVENIXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJnczIuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICAgICAgfSlcblxuICAgICAgLy8gRklSU1QgUEFUQ0ggQ0FUQ0hcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gREVMRVRFIEZVTkNUSU9OIChERUxFVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IG1vZGVsID0ga3dhcmdzLm1vZGVsTmFtZVxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywgJ0VsZW1lbnRvIGVsaW1pbmFkbyBzYXRpZmFjdG9yaWFtZW50ZScpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBIdWJvIHVuIGVycm9yIGFsIGVsaW1pbmFyIGVsICR7bW9kZWx9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FEIENPTkZJRyBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdsb2JhbENvbmZpZyhzZWN0aW9uLCBuYW1lLCBzdWNjZXNzLCBmYWlsKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGlmIChuYW1lKSB7XG5cbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxjb25mLyR7c2VjdGlvbn1fXyR7bmFtZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE8gU2luZ2xlIGNvbmZpZyBmZXRjaFxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbHByZWZzYCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyBUaGUgcHJvcGVydHkgdG8gbW9kaWZ5IGluIHJlZHVjZXJcbiAgICAgICAgY29uc3QgY29uZmlnID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgID8gcmVzcG9uc2UuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uID09IHNlY3Rpb25cbiAgICAgICAgICB9KVxuICAgICAgICAgIDoge31cbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XG4gICAgICAgIGNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGRhdGFbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2VzcywgcGF5bG9hZDoge2RhdGE6IGRhdGEsIHNlY3Rpb246IHNlY3Rpb259fSlcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgTE9HIEZVTkNUSU9OIChDUkVBVEUgTE9HKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBzYXZlTG9nIChjb2RlLCBtb2RlbCwgb2xkT2JqZWN0LCBvYmplY3QsIGRlc2NyaXB0aW9uLCB1c2VyKSB7XG5cbiAgY29uc3QgcHJldk9iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9sZE9iamVjdClcbiAgY29uc3QgbmV3T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxuICBjb25zdCB1c2VyMiA9IEpTT04uc3RyaW5naWZ5KHVzZXIpXG5cbiAgY29uc3QgaXRlbSA9IHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBwcmV2X29iamVjdDogcHJldk9iamVjdCxcbiAgICBuZXdfb2JqZWN0OiBuZXdPYmplY3QsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHVzZXI6IHVzZXIyXG4gIH1cblxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS9sb2dzLycsXG4gICAgZGF0YTogaXRlbVxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgIH1cbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBMb2cgZGVsIG1vdmltaWVudG8sIEVSUk9SOiAke2Vycn0uYClcbiAgICB9KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFVWCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBORVhUIE5VTUVSSUMgQ09ERVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHROdW1lcmljQ29kZShlbGVtZW50cywgZmllbGQpIHtcblxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG5cbiAgICBsZXQga2V5cyA9IGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnRbZmllbGRdKVxuXG4gICAga2V5cyA9IGtleXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgY29uc3QgbWF4ID0ga2V5cy5wb3AoKVxuICAgIGNvbnN0IG5leHQgPSBwYXJzZUludChtYXgpICsgMVxuICAgIHJldHVybiBuZXh0LnRvU3RyaW5nKClcblxuICB9XG5cbiAgcmV0dXJuIDFcblxufVxuXG4vLyBORVhUIFBSRVZJT1VTIElURU1TXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV4dFByZXZJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGNvZGUgPSBrd2FyZ3MuY29kZVxuICBjb25zdCBpdGVtcyA9IGt3YXJncy5pdGVtc1xuICBjb25zdCBjb2RlRmllbGQgPSBrd2FyZ3MuY29kZUZpZWxkXG4gIGxldCBwcmV2aW91cyA9IDBcbiAgbGV0IG5leHQgPSAwXG5cbiAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhW2NvZGVGaWVsZF0gLSBiW2NvZGVGaWVsZF1cbiAgfSlcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtW2NvZGVGaWVsZF0gPT0gY29kZSkge1xuICAgICAgbmV4dCA9IGluZGV4ICsgMVxuICAgICAgcHJldmlvdXMgPSBpbmRleCAtIDFcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5leHRDb2RlID0gaXRlbXNbbmV4dF0gPyBpdGVtc1tuZXh0XVtjb2RlRmllbGRdIDogaXRlbXNbMF1bY29kZUZpZWxkXVxuICBjb25zdCBwcmV2Q29kZSA9IGl0ZW1zW3ByZXZpb3VzXSA/IGl0ZW1zW3ByZXZpb3VzXVtjb2RlRmllbGRdIDogaXRlbXMucG9wKClbY29kZUZpZWxkXVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiB7bmV4dDogbmV4dENvZGUsIHByZXZpb3VzOiBwcmV2Q29kZX19KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC91dGlscy9hcGkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi91dGlscy9mb3JtYXRNb25leS5qcydcblxuLy8gUkVEVVggUFJPVklERVJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluL21haW4uanN4J1xuXG4vLyBTVE9SRVxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnXG5cbndpbmRvdy5hbGVydGlmeSA9IGFsZXJ0aWZ5XG5mb3JtYXRNb25leSgpXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPE1haW4gLz5cbiAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJykpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7ZmVjdGhQcm9maWxlfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG4vLyBDT01QT05FTlRTXG5cbmltcG9ydCBUb3BCYXIgZnJvbSAnLi4vbGF5b3V0L3RvcEJhci90b3BCYXIuanN4J1xuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3gnXG5pbXBvcnQgRmV0Y2hpbmcgZnJvbSAnLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3gnXG5cbi8vIGltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoaW5nOiBzdG9yZS5mZXRjaGluZy5mZXRjaGluZyxcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZlY3RoUHJvZmlsZSgpKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZmV0Y2hpbmcgPSB0aGlzLnByb3BzLmZldGNoaW5nID8gPEZldGNoaW5nIC8+IDogJydcbiAgICBjb25zdCBtYWluQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdtYWluQ29udGFpbmVyJyA6ICdtYWluQ29udGFpbmVyIHNpZGVIaWRkZW4nXG4gICAgY29uc3QgY29udGVudCA9IDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICAgIDxUb3BCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRhaW5lci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtyb3V0ZXN9XG4gICAgICAgICAgICB7ZmV0Y2hpbmd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aFByb2ZpbGUoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvcHJvZmlsZS8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhJc0FkbWluTG9ja2VkKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycHJlZnMvYWRtaW5fX2lzX2FkbWluX2xvY2tlZC8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gUm91dGVzIENvbXBvbmVudHNcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcbmltcG9ydCBTYWxlIGZyb20gJy4uL3NhbGUvbWFpbi5qc3gnXG5cbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XG5cbiAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zYWxlcycgY29tcG9uZW50PXtIb21lfSAvPlxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cblxuPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdIT01FX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdNYWluIGhlaWdoMTAwJz5cbiAgICAgIEhPTUVcbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2hvbWUvaG9tZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQvY29udGVudC5qc3gnXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi9hc2lkZS9hc2lkZS5qc3gnXG5pbXBvcnQgU2VhcmNoUHJvZHVjdCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3gnXG5pbXBvcnQgU2VhcmNoQ2xpZW50IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4J1xuaW1wb3J0IFBheVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCdcbmltcG9ydCBJbnZvaWNlUGFuZWwgZnJvbSAnLi4vZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTQUxFX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzYWxlJz5cbiAgICAgIDxDb250ZW50IC8+XG4gICAgICA8QXNpZGUgLz5cblxuICAgICAgPFNlYXJjaFByb2R1Y3QgLz5cbiAgICAgIDxTZWFyY2hDbGllbnQgLz5cbiAgICAgIDxQYXlQYW5lbCAvPlxuICAgICAgPEludm9pY2VQYW5lbCAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3gnXG5pbXBvcnQgQ2FydCBmcm9tICcuLi8uLi9nZW5lcmFsL2NhcnQvY2FydC5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgdG9nZ2xlV2lkdGggKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQgZnVsbFdpZHRoJyA6ICdzYWxlLWNvbnRlbnQnXG4gICAgY29uc3QgY2FydENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LWNhcnQnIDogJ3NhbGUtY29udGVudC1jYXJ0IGZ1bGxIZWlnaHQnXG4gICAgY29uc3QgdG90YWxDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC10b3RhbCcgOiAnc2FsZS1jb250ZW50LXRvdGFsIGNvbGxhcHNlZCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWNvbnRlbnQtcHJvZHVjdCcgPlxuICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FydENsYXNzfSA+XG4gICAgICAgIDxDYXJ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b3RhbENsYXNzfSA+XG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tbGVmdCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGlucHV0VmFsOiBzdG9yZS5wcm9kdWN0cy5pbnB1dFZhbCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvZGVJbnB1dC5mb2N1cygpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgcHJvZHVjdEt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvcHJvZHVjdHMnLFxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRJdGVtRGlzcGF0Y2gocHJvZHVjdEt3YXJncykpXG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RDbGljaygpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdQUk9EVUNUX1NIT1dfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMF0gLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcbiAgICAgICAgbGV0IHF0eSA9IGV2LnRhcmdldC52YWx1ZS5zcGxpdCgnKicpWzFdXG4gICAgICAgIHF0eSA9IChpc05hTihxdHkpKVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogcGFyc2VGbG9hdChxdHkpIC8vIGlmIG5vIHF0eSBzZXRzIHRvIDFcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxuICAgICAgICAvLyAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogMH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBwcm9kdWN0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8Yj5Qcm9kdWN0bzo8L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlJz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcmNvZGUnIC8+XG4gICAgICAgICAgPGlucHV0IGlkPSdwcm9kdWN0Q29kZUlucHV0RmllbGQnIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb2RlSW5wdXQgPSBpbnB1dFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIGVsIEPDs2RpZ28gZGVsIFByb2R1Y3RvJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlLWlucHV0IG1vdXNldHJhcCBmb3JtLWNvbnRyb2wgaW5wdXQtbGcnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaFByb2R1Y3RDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtc2VhcmNoJz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanNcbi8vIG1vZHVsZSBpZCA9IDYwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSAnLi9jYXJ0SXRlbXMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlcyxcbiAgICAvLyBwcm9kdWN0U2VhcmNocGFuZWxWaXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2InLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcblxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgdXNlTG90ZSA9IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZ1xuICAgIC8vICAgPyB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcuY2FydEl0ZW1Vc2VMb3RlXG4gICAgLy8gICA6IGZhbHNlXG5cbiAgICAvLyBjb25zdCBsb3RlRmllbGQgPSB1c2VMb3RlXG4gICAgLy8gICA/IDx0aD5Mb3RlPC90aD5cbiAgICAvLyAgIDogPHRoIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NhcnQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkFydDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWl2YSc+XG4gICAgICAgICAgPGg1PklWPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsIElWSTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYXJ0SXRlbXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlVG90YWxzLCByZW1vdmVGcm9tQ2FydH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIGNhcnRJdGVtQWN0aXZlOiBzdG9yZS5jYXJ0LmNhcnRJdGVtQWN0aXZlXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE9uIGNvbXBvbmVudCB1cGRhdGUgKFRoZSBjYXJ0IGhhcyBiZWVuIG1vZGlmaWVkKSBjYWxscyB0aGUgdXBkYXRlIHRvdGFscyBtZXRob2QgaW4gYWN0aW9ucyBmaWxlLlxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVRvdGFscyh0aGlzLnByb3BzLmluQ2FydCkpXG5cbiAgICAvLyBBdXRvIFNjcm9sbCBUbyBlbmQgb2YgY29udGFpbmVyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJvZHknKVxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcblxuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wcykge1xuICAvLyAgIGlmICh0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlICE9IG5leHRQcm9wcy5jYXJ0SXRlbUFjdGl2ZSkge1xuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrcGx1cycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdHJ1ZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtmJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7X3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkuZm9jdXMoKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kKy0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrKicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9fdGhpcyA9IF90aGlzXG4gICAgICBhbGVydGlmeS5wcm9tcHQoYE51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvYCwgJ0luZ3Jlc2UgbGEgbnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG8nLCAnJ1xuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcbiAgICAgICAgICBfX3RoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5Q29kZShfX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIHZhbHVlLCBfX3RoaXMucHJvcHMuaW5DYXJ0LFxuICAgICAgICAgICAgX190aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCBfX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICAgICAgfVxuICAgICAgICAsIGZ1bmN0aW9uKCkge30pXG4gICAgICAgIC5zZXQoJ2xhYmVscycsIHtvazogJ09rJywgY2FuY2VsOiAnQ2FuY2VsYXInfSlcbiAgICB9KVxuICB9XG5cbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1EaXNjb3VudCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgZGlzY291bnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICAgIH1cblxuICB9XG5cbiAgZGlzY291bnRJbnB1dE9uQmx1cihjb2RlLCBldikge1xuXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICB9XG5cbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IHF0eSA9IHBhcnNlRmxvYXQoKGV2LnRhcmdldC52YWx1ZSkpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHkoY29kZSwgcXR5LCB0aGlzLnByb3BzLmluQ2FydCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKVxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgY29uc29sZS5sb2coJ1ByZXNzc3NzJywgZXYua2V5KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICAgIH1cblxuICB9XG5cbiAgbG90ZUlucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICB9XG5cbiAgc2V0Q2FydEl0ZW1BY3RpdmUoY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuXG4gIH1cblxuICByZW1vdmVJdGVtKGNvZGUsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcblxuICB9XG5cbiAgZmllbGRGb2N1cyhldikge1xuICAgIGV2LnRhcmdldC5zZWxlY3QoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBpdGVtcyBpbiBjYXJ0IHVzaW5nIHRhYmxlIHJvd3NcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zMiA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcbiAgICAgICAgPyAnY2FydC1hY3RpdmVSb3cgY2FydC1ib2R5LWl0ZW0nXG4gICAgICAgIDogJ2NhcnQtYm9keS1pdGVtJ1xuXG4gICAgICBjb25zdCByZW1vdmVJY29uQ2xhc3MgPSB0aGlzLnByb3BzLmRpc2FibGVkID8gJ3JlbW92ZUl0ZW1JY29uIGRpc2FibGVkJyA6ICdyZW1vdmVJdGVtSWNvbidcblxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICAgID8gaXRlbS5wcm9kdWN0LnRheGVzXG4gICAgICAgIDogMFxuXG4gICAgICBjb25zdCBxdHlGaWVsZCA9IDxpbnB1dFxuICAgICAgICBpZD17YHF0eSR7aXRlbS5wcm9kdWN0LmNvZGV9YH1cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnF0eUlucHV0Q2hhbmdlLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XG4gICAgICAvPlxuXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxuICAgICAgICA/IDxpbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGlzY291bnRJbnB1dE9uQmx1ci5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhcnNlRmxvYXQoaXRlbS5kaXNjb3VudCl9XG4gICAgICAgIC8+XG4gICAgICAgIDogPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAvPlxuXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzfVxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRDYXJ0SXRlbUFjdGl2ZS5iaW5kKHRoaXMsIGl0ZW0ucHJvZHVjdC5jb2RlKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkaWdvPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXF0eSc+XG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cbiAgICAgICAgICB7cXR5RmllbGR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgICDigqEge3BhcnNlRmxvYXQoaXRlbS5wcmljZVRvVXNlKS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGlzY291bnQnPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1pdmEnPlxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxuICAgICAgICAgIHt0YXhlczF9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxuICAgICAgICAgIDxoNT5Ub3RhbDwvaDU+XG4gICAgICAgICAgICDigqEge2l0ZW0udG90YWxXaXRoSXYuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlbW92ZUljb25DbGFzc30+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgPC9kaXY+XG4gICAgfSlcblxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cbiAgICAvLyAgIHtpdGVtc31cbiAgICAvLyA8L3Rib2R5PlxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9J2NhcnQtYm9keScgY2xhc3NOYW1lPSdjYXJ0LWJvZHknPlxuICAgICAge2l0ZW1zMn1cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0b3RhbHMgdGhlIGNhcnQgc3RvcmUgaXRlbSwgZ2VuZXJhdGVzIG5ldyB2YWx1ZXMgYWNjb3JkaW5nIGNhcnQgaXRlbSBvYmplY3RzLCB0aGVuIHB1c2ggdGhlIHRvIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG90YWxzKGluQ2FydCkge1xuXG4gIGxldCBzdWJ0b3RhbCA9IDBcbiAgbGV0IHN1YlRvdGFsTm9EaXNjb3VudCA9IDBcbiAgbGV0IHRheGVzID0gMFxuICBsZXQgdG90YWwgPSAwXG4gIGxldCBkaXNjb3VudFRvdGFsID0gMFxuXG4gIC8vIGZvciBFYWNoIGVsZW1lbnQgYWRkcyB0aGUgdmFsdWVzIHRvIGdldCB0b3RhbHNcbiAgaW5DYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgIHN1YlRvdGFsTm9EaXNjb3VudCA9IHN1YlRvdGFsTm9EaXNjb3VudCArIGl0ZW0uc3ViVG90YWxOb0Rpc2NvdW50XG5cbiAgICBzdWJ0b3RhbCA9IHN1YnRvdGFsICsgaXRlbS5zdWJ0b3RhbFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICBjb25zdCB0YXhlc0NhbGMyID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMyKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczIgLyAxMDApXG4gICAgICA6IDBcblxuICAgIHRheGVzID0gdGF4ZXMgKyB0YXhlc0NhbGMgKyB0YXhlc0NhbGMyXG5cbiAgICBkaXNjb3VudFRvdGFsID0gZGlzY291bnRUb3RhbCArIGl0ZW0uZGlzY291bnRDdXJyZW5jeSAvLyB0aGlzIGlzIHRoZSB2YWx1ZSBpbiBjdXJyZW5jeVxuXG4gIH0pXG4gIC8vIFRPRE8gQ29uZmlnIGZvciByb3VuZCBvciBub3RcbiAgLy8gdG90YWwgPSBNYXRoLnJvdW5kKHN1YnRvdGFsICsgdGF4ZXMpXG4gIHRvdGFsID0gc3VidG90YWwgKyB0YXhlc1xuICAvLyByZXR1cnMgYSBkaXNwYXRjaCB3aXRoIGEgcGF5bG9hZCBvZiB0aGUgb2J0YWluZWQgdmFsdWVzXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUX1RPVEFMUycsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc3VidG90YWw6IHN1YnRvdGFsLFxuICAgICAgdGF4ZXM6IHRheGVzLFxuICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgZGlzY291bnRUb3RhbDogZGlzY291bnRUb3RhbCxcbiAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgfVxuICB9XG59XG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaXRlbXNJbkNhcnQsIGNvZGUpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdSRU1PVkVfRlJPTV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IGluZGV4SW5DYXJ0XG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCdcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCdcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9ucy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGFzaWRlQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWFzaWRlIGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZSdcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZS1jb250ZW50IGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZS1jb250ZW50J1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDb250YWluZXJDbGFzc30+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3ctY29udGFpbmVyJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxDbGllbnQgLz5cbiAgICAgICAgPFRvdGFscyAvPlxuICAgICAgICA8QnV0dG9ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJ1dHRvbnMgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS10b3RhbCcgPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL2FzaWRlL2FzaWRlLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Y2xpZW50U2VsZWN0ZWQsIHNlYXJjaENsaWVudCwgdXNlclNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpJ1xuLy8gaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi91dGlscy9yZWNlaXZhYmxlJ1xuLy8gaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9tYWluL3Byb2R1Y3QvYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzLFxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2Vyczogc3RvcmUuY2xpZW50cy51c2VycyxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQgIT0gdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCkge1xuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXG5cbiAgICAgIGlmICghbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLnNhbGVMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA/IG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50IDogMFxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQobmV4dFByb3BzLmNhcnQsIGRpc2NvdW50LCBuZXh0UHJvcHMuY2xpZW50KSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG5cbiAgICAgICAgLy8gU0VUUyBWQUxVRSBPRiBERUZBVUxUIERJU0NPVU5UIFRPIEZJRUxEIE9SIDBcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBkZWJ0ID0gZ2V0Q2xpZW50RGVidChuZXh0UHJvcHMuY2xpZW50Ll9pZCwgbmV4dFByb3BzLm1vdmVtZW50cylcbiAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfQ0xJRU5UX0RFQlQnLCBwYXlsb2FkOiBkZWJ0fSlcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9DTElFTlRTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9jbGllbnRzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB9XG5cbiAgfVxuXG4gIHVzZXJTZWxlY3QoZXYpIHtcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVzZXJTZWxlY3RlZChfaWQsIHRoaXMucHJvcHMudXNlcnMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHVzZXJVblNlbGVjdChldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdVU0VSX0NMRUFSJywgcGF5bG9hZDogJyd9KSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHNlYXJjaENsaWVudENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQoKSlcblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyBTRUxFQ1QyIERBVEFcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXG4gICAgICA/IGAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubmFtZX0gJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmxhc3RfbmFtZX1gXG4gICAgICA6ICdDbGllbnRlIENvbnRhZG8nXG5cbiAgICAvLyBjb25zdCBjcmVkaXRJY29uID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5oYXNfY3JlZGl0KVxuICAgIC8vICAgPyAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWltZyc+XG4gICAgICAgIDxpbWcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YSc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPkNsaWVudGUgOjwvaDM+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Tm9tYnJlIDo8L2gzPlxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7cmVjYWxjQ2FydH0gZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzY291bnRWYWw6IDBcbiAgICB9XG4gIH1cblxuICBzaG93SW52b2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXG4gICAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcbiAgICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gcGFyc2VGbG9hdChldi50YXJnZXQudmFsdWUpXG4gICAgICAgIDogMFxuICAgIH1cblxuICB9XG5cbiAgaW5wdXRPbkJsdXIoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXG4gICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXG4gICAgaWYgKGRpc2NvdW50IDw9IG1heERpc2NvdW50KSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgfVxuXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvdGFscyc+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICdwYWRkaW5nVG9wJzogJzAnLFxuICAgICAgICAnbWFyZ2luVG9wJzogJzAnXG4gICAgICB9fSBjbGFzc05hbWU9J2JnLXdoaXRlIHJpZ2h0LWl0ZW0nPlxuICAgICAgICB7LyogPHNwYW4+XG4gICAgICAgICAgPGI+VG90YWxlczo8L2I+XG4gICAgICAgIDwvc3Bhbj48YnIgLz4gKi99XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRvdGFscy10YWJsZSc+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+U3ViLVRvdGFsOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMzclJ1xuICAgICAgICAgICAgICB9fT5EZXNjdWVudG8gJTwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9J2Rpc2NvdW50RmllbGQnXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmlucHV0T25CbHVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMzdweCcsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAgMCAwIDEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgICdib3JkZXInOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NhbGVfZ2xvYmFsX2Rpc2NvdW50X2lucHV0IGZvcm0tY29udHJvbCcgLz5cbiAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPklWOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7LyogPHRoIG9uQ2xpY2s9e3RoaXMuc2hvd0ludm9pY2VQYW5lbC5iaW5kKHRoaXMpfT5Ub3RhbDo8L3RoPiAqL31cbiAgICAgICAgICAgICAgPHRoPlRvdGFsOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICAvLyByZXR1cm4ge2Rpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2hvd1BheVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93SW5vaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93U2FsZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1NBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BSRVNBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIG5ld1NhbGUoKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NhbGVzL3BvcydcbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnTkVXX1NBTEUnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgPyA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5zaG93SW5vaWNlUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICAgIEZhY3R1cmFcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbW9uZXknIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3U2FsZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgICAgTnVldmEgVmVudGFcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCcgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA6ICcnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBidXR0b25zJz5cblxuICAgICAgey8qIDxzcGFuPlxuICAgICAgICA8Yj5QYWdvOjxiciAvPjwvYj5cbiAgICAgIDwvc3Bhbj4gKi99XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1BheVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgQ29icmFyXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dTYWxlUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBWZW50YXMgZGVsIGTDrWFcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1saXN0JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93UHJlc2FsZXNQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIFByZS1WZW50YXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1saXN0JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge2J1dHRvbnN9XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvYnV0dG9ucy9idXR0b25zLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBhbmVsQ2xpY2soZXYpIHtcblxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgfVxuXG4gIH1cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgdmlzaWJsZU9yTm90ID0gKHRoaXMucHJvcHMudmlzaWJsZSlcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCBpcy12aXNpYmxlJ1xuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0J1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2NkLXBhbmVsLWhlYWRlcic+XG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgUHJvZHVjdG88L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZWFyY2hQcm9kdWN0fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uKClcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RBY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hQcm9kdWN0KHRoaXMucHJvcHMuc2VhcmNoVmFsdWUsIHRoaXMucHJvcHMucHJvZHVjdHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgRGVzY3JpcGNpw7NuOjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICAgIH19IGlkPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdwcm9kdWN0LXNlYXJjaC1idG4nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtwcm9kdWN0U2VsZWN0ZWRUYWJsZSwgaGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnByb2R1Y3RzTWF0Y2hlZCwgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2VsZWN0UHJvZHVjdChjb2RlLCBldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICByZXR1cm4gPHRyIG9uRG91YmxlQ2xpY2s9e3RoaXMuc2VsZWN0UHJvZHVjdC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmNvZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uc2VsbHByaWNlfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgIH0pXG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgIDx0YWJsZSBpZD0ncHJvZHVjdGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJlY2lvPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J3Byb2R1Y3Qtc2VhcmNoLXRhYmxlLWJvZHknPlxuICAgICAgICAgICAgICB7cHJvZHVjdHN9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hDbGllbnRzLnZpc2libGV9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIENsaWVudGU8L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaENsaWVudH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hDbGllbnRBY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoQ2xpZW50QWN0aW9uKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQodmFsLCB0aGlzLnByb3BzLmNsaWVudHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2xpZW50LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBOb21icmU6PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J2NsaWVudC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdjbGllbnQtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y2xpZW50U2VsZWN0ZWR9IGZyb20gJy4uLy4uL2NsaWVudHMvYWN0aW9ucy5qcydcbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaENsaWVudHMuY2xpZW50c01hdGNoZWQsIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNlbGVjdENsaWVudChjb2RlLCBldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xpZW50U2VsZWN0ZWQoY29kZSwgdGhpcy5wcm9wcy5jbGllbnRzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgY29uc3QgaGFzQ3JlZGl0ID0gKGl0ZW0uaGFzX2NyZWRpdClcbiAgICAgICAgPyAnU0knXG4gICAgICAgIDogJ05PJ1xuXG4gICAgICByZXR1cm4gPHRyIG9uRG91YmxlQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpZW50LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uY29kZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtgJHtpdGVtLm5hbWV9ICR7aXRlbS5sYXN0X25hbWV9YH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtoYXNDcmVkaXR9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAwXG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgfSlcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgPHRhYmxlIGlkPSdjbGllbnRlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkNyw6lkaXRvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+U2FsZG88L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nY2xpZW50LXNlYXJjaC10YWJsZS1ib2R5Jz5cbiAgICAgICAgICAgICAge2NsaWVudHN9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFBheU1ldGhvZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCdcbmltcG9ydCBQYXlDYXNoIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYWhzLmpzeCdcbmltcG9ydCBQYXlDYXJkIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYXJkLmpzeCdcbmltcG9ydCBQYXlDcmVkaXQgZnJvbSAnLi9jb21wb25lbnRzL3BheUNyZWRpdC5qc3gnXG5pbXBvcnQgUGF5T3RoZXIgZnJvbSAnLi9jb21wb25lbnRzL3BheU90aGVyLmpzeCdcbmltcG9ydCBQYXlTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5wYXkuaXNWaXNpYmxlLCBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5UGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ3BheS1wYW5lbCBpcy12aXNpYmxlJ1xuICAgICAgOiAncGF5LXBhbmVsJ1xuXG4gICAgbGV0IHBheU1ldGhvZCA9ICcnXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhc2ggLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDQVJEJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhcmQgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDUkVESVQnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q3JlZGl0IC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vICBjYXNlXG5cbiAgICAgIGNhc2UgJ09USEVSJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheU90aGVyIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgIH0gLy8gc3dpdGNoXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgICBSZWdpc3RyYXIgUGFnb1xuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGF5TWV0aG9kIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1hcmVhLWNvbnRhaW5lcic+XG5cbiAgICAgICAgICB7cGF5TWV0aG9kfVxuXG4gICAgICAgICAgPFBheVNpZGVCYXIgLz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNsaWNrQ2hhbmdlUGF5TWV0aG9kKG1ldGhvZCwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDSEFOR0VfUEFZX01FVEhPRCcsIHBheWxvYWQ6IG1ldGhvZH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QnPlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ1JFRElUJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVESVQnXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cbiAgICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11c2VycycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdPVEhFUicpfSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ09USEVSJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhc2hBbW91bnR9IG9uQ2hhbmdlPXt0aGlzLnBheUFtb3VudENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXJkQXV0aCwgdXBkYXRlU3RvcmVDYXJkRGlnaXRzfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjYXJkQXV0aDogc3RvcmUucGF5LmNhcmRBdXRoLCBjYXJkRGlnaXRzOiBzdG9yZS5wYXkuY2FyZERpZ2l0c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYXlDYXJkQXV0aENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkQXV0aChldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcGF5Q2FyZERpZ2l0c0NoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkRGlnaXRzKGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPjQgRElHSVRPUzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmREaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmREaWdpdHNDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+QVVUT1JJWkFDScOTTjo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmRBdXRofSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkQXV0aENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLCBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDcmVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQgLSB0aGlzLnByb3BzLmRlYnRcbiAgICBjb25zdCBjbGllbnRMaW1pdCA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke3RoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuICAgIGNvbnN0IGNsaWVudEF2YWlsYWJsZSA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke2F2YWlsYWJsZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+TMONTUlURTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRMaW1pdH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RElTUE9OSUJMRTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRBdmFpbGFibGV9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+IDxzcGFuPk90cm88L3NwYW4+IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICAgIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZCxcbiAgICBwYXk6IHN0b3JlLnBheSxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXG4gICAgLy8gc2FsZUlkOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlSWQsXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNhdmVCdG4oKSB7XG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXG4gICAgY29uc3Qgc2FsZXMgPSBbXVxuXG4gICAgY29uc3Qgc29ydGVkU2FsZXMgPSBzYWxlcy5sZW5ndGggPiAxID8gc2FsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuaWQgPCBiLmlkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9XG4gICAgICBpZiAoYS5pZCA+IGIuaWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0pIDogc2FsZXNcblxuICAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZFNhbGVzLmxlbmd0aCA+IDAgPyBzb3J0ZWRTYWxlc1swXS5pZCArIDEgOiAxXG5cbiAgICBjb25zdCBzYWxlID0ge1xuICAgICAgaWQ6IG5leHRJZCxcbiAgICAgIGRvY1R5cGU6ICdTQUxFJyxcbiAgICAgIGNhcnQ6IHRoaXMucHJvcHMuY2FydCxcbiAgICAgIGNsaWVudDogdGhpcy5wcm9wcy5jbGllbnQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXG4gICAgICBwYXk6IHRoaXMucHJvcHMucGF5LFxuICAgICAgY3JlYXRlZDogbmV3IERhdGUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHtcbiAgICAgIHNhbGUucGF5LmRlYnQgPSB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXG4gICAgICBzYWxlLnBheS5wYXllZCA9IGZhbHNlXG4gICAgfVxuICAgIC8vIGNvbnN0IGt3YXJncyA9IHtcbiAgICAvLyAgIGRiOiAnc2FsZXMnLFxuICAgIC8vICAgbW92ZW1lbnRzOiB0aGlzLnByb3BzLm1vdmVtZW50cyxcbiAgICAvLyAgIGl0ZW06IHNhbGUsXG4gICAgLy8gICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcbiAgICAvLyAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgdmVudGEsIGludGVudGUgZGUgbnVldm8uJ1xuICAgIC8vIH1cblxuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgIE1vdXNldHJhcC5yZXNldCgpXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBjaGFuZ2UgPSAwXG4gICAgbGV0IHBheUJ1dHRvbkNsYXNzID0gJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbClcbiAgICBjb25zdCBjYXNoID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KVxuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgY2hhbmdlID0gY2FzaCAtIHRvdGFsXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBjaGFuZ2UgPj0gMClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnByb3BzLnBheS5jYXJkQXV0aFxuICAgICAgICBjb25zdCBkaWdpdHMgPSB0aGlzLnByb3BzLnBheS5jYXJkRGlnaXRzXG4gICAgICAgIGNoYW5nZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMudG90YWwpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBhdXRoICYmIGRpZ2l0cylcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0NSRURJVCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5kZWJ0KVxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgdG90YWwgPD0gYXZhaWxhYmxlICYmIHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXQpXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1zaWRlLWJhcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPlBhZ288L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5cbiAgICAgICAgICBUT1RBTCA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge3RoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlZVRUxUTyA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge2NoYW5nZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnNhdmVCdG4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtwYXlCdXR0b25DbGFzc30+XG4gICAgICAgICAgUGFnYXJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7bG9hZEdsb2JhbENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IEZ1bGxJbnZvaWNlIGZyb20gJy4uL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCdcbmltcG9ydCBDb21wYWN0SW52b2ljZSBmcm9tICcuLi9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUuaW52b2ljZS5pc1Zpc2libGUsIGlzRnVsbDogc3RvcmUuaW52b2ljZS5pc0Z1bGx9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9hZEdsb2JhbENvbmZpZygnY29tcGFueScsIGZhbHNlLCAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCcsICdGRVRDSF9DT05GSUdfUkVKRUNURUQnKSlcbiAgfVxuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgLy8gcHJpbnREaXYoJ2Z1bGwtaW52b2ljZS1wcmludCcpXG4gIH1cblxuICB0b2dnbGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgdG9nZ2xlSW52b2ljZSgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHByaW50UGFuZWwoKSB7XG4gICAgd2luZG93LnByaW50RGl2KCdpbnZvaWNlLXByaW50JylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ2ludm9pY2UtcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2ludm9pY2UtcGFuZWwnXG4gICAgY29uc3QgaXNGdWxsQ2xhc3MgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/ICcnXG4gICAgICA6ICcgY29tcGFjdC1pbnZvaWNlLW9uJ1xuXG4gICAgY29uc3QgY29tcG9uZW50VG9Nb3VudCA9ICh0aGlzLnByb3BzLmlzRnVsbClcbiAgICAgID8gPEZ1bGxJbnZvaWNlIC8+XG4gICAgICA6IDxDb21wYWN0SW52b2ljZSAvPlxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtbWFpbicgKyBpc0Z1bGxDbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlLXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEZhY3R1cmEgZGUgVmVudGFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS10ZXh0LW8nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5wcmludFBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtcHJpbnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgey8qIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW52b2ljZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWNvZmZlZScgYXJpYS1oaWRkZW49J3RydWUnIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdpbnZvaWNlLXByaW50JyBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLWNvbnRhaW5lcicgKyBpc0Z1bGxDbGFzc30+XG5cbiAgICAgICAgICB7Y29tcG9uZW50VG9Nb3VudH1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsSW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIENyZWRpdCBvciBjYXNoXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IHRoaXMucHJvcHMuc2FsZS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnID8gJ0ZhY3R1cmEgZGUgY3LDqWRpdG8nIDogJ0ZhY3R1cmEgZGUgY29udGFkbydcbiAgICAvLyBMT0dPXG4gICAgY29uc3QgbG9nbyA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvIHx8ICcnXG4gICAgY29uc3QgbG9nb1dpZHRoID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ29XaWR0aCB8fCAnMTMwcHgnXG4gICAgY29uc3QgbG9nb1VybCA9IGAvbWVkaWEvbG9nb3MvJHtsb2dvfWBcblxuICAgIC8vIEJJTEwgREFUQVxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsX25hbWUgfHwgJydcbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbF9uYW1lIHx8ICcnXG5cbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcblxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJ1BFUlNPTidcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnJ1xuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxuXG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlci1sb2dvJz5cbiAgICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzogYCR7bG9nb1dpZHRofWB9fSBzcmM9e2xvZ29Vcmx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWUudG9VcHBlckNhc2UoKX08L2gyPlxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmVtYWlsIHx8ICcnfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1zZXBhcmF0b3InPlxuICAgICAgICA8c3BhbiAvPlxuXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0nY2xpZW50QWRyZXNzJz5ESVJFQ0NJw5NOOiB7c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiA8dHIgLz5cbiAgICBjb25zdCBpZCA9IHNhbGUuaWQgPyBzYWxlLmlkIDogJzAwMDAxJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2NsaWVudC10YWJsZSc+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q0xJRU5URTo8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2NsaWVudEFkcmVzc31cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2RhdGVudW0tdGFibGUnPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Ti4gZGUgZmFjdHVyYTo8L3RoPlxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlY2hhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50ID0gKHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxuICAgICAgOiA8dGQgc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90ZD5cbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5sZW5ndGhcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgICA/IGBHYFxuICAgICAgICAgIDogYEVgXG5cbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLmRpc2NvdW50fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgfSlcbiAgICAgIDogPHRyPlxuICAgICAgICA8dGQ+LS08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgPC90cj5cblxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50Um93ID0gdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCA/IDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMyICU8L3RoPlxuICAgICAgOiA8dGggc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90aD5cblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QLlU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMlPC90aD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UHJlY2lvPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e2l0ZW1zfTwvdGJvZHk+XG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10b3RhbHMnPlxuXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG5cbiAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0SW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IHRoaXMucHJvcHMuc2FsZS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnID8gJ0ZhY3R1cmEgZGUgY3LDqWRpdG8nIDogJ0ZhY3R1cmEgZGUgY29udGFkbydcblxuICAgIC8vIEJJTEwgREFUQVxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsTmFtZSB8fCAnJ1xuXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLmNvbXBhbnkubGVnYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcblxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJydcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnUEVSU09OJ1xuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxuXG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWV9PC9oMj5cbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MyIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGVsc1RleHR9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXNlcGFyYXRvcic+XG4gICAgICAgIDxzcGFuIC8+XG5cbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XG5cbiAgICAgICAgPHNwYW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZVRheGVzKVxuICAgICAgICA/IGBHYFxuICAgICAgICA6IGBFYFxuXG4gICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICB7dGF4ZXNUZXh0fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIH0pXG5cbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5DYW50PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkFydGljdWxvPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5Ub3RhbDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0nJz5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC90Ym9keT5cblxuICAgIDwvdGFibGU+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgaWQgPSBzYWxlLmlkID8gc2FsZS5pZCA6ICcwMDAxJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0aD5EaXJlYzo8L3RoPlxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuXG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRvdGFscyc+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPklWPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcyc+XG4gICAgICA8aDE+Tm90YXM6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMtY29udGVudCc+XG4gICAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXlvdXQoKSB7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxuXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG4gIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcblxuICBjb25zdCBjb25maWdCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQmFyJylcblxuICBpZiAoY29uZmlnQmFyLmNsYXNzTGlzdC5jb250YWlucygnbm90LXZpc2libGUnKSkge1xuXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uZmlnQmFyLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcyc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgSW5pY2lvPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9zYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgICBOdWV2YSBWZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJvZm9ybWEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIENvdGl6YWNpw7NuPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcmVzYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBQcmV2ZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdG9yZS51c2VyLnVzZXIsXG4gICAgcHJvZmlsZTogc3RvcmUudXNlci5wcm9maWxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBhdmF0YXIgPSB0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyID8gYC9tZWRpYS8ke3RoaXMucHJvcHMucHJvZmlsZS5hdmF0YXJ9YCA6ICcvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgOiAodGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgPyB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lIDogJydcblxuICAgIGxldCBmdWxsTmFtZSA9IGAke25hbWV9ICR7bGFzdE5hbWV9YFxuICAgIGlmIChmdWxsTmFtZS5sZW5ndGggPiAyMikgZnVsbE5hbWUgPSBmdWxsTmFtZS5zdWJzdHJpbmcoMCwgMjIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXIgY29sLXhzLTEyICc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItbmFtZSc+XG4gICAgICAgIDxzcGFuPntmdWxsTmFtZX08L3NwYW4+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmssIGxvZ2dlcilcblxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcbmltcG9ydCBjbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMvcmVkdWNlci5qcydcbmltcG9ydCBzZWFyY2hDbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcbmltcG9ydCBwYXkgZnJvbSAnLi9nZW5lcmFsL3BheS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGludm9pY2UgZnJvbSAnLi9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvcmVkdWNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmV0Y2hpbmcsXG4gIGxheW91dCxcbiAgdXNlcixcbiAgY2FydCxcbiAgY2xpZW50cyxcbiAgcHJvZHVjdHMsXG4gIHNhbGUsXG4gIG1lc3NhZ2VzLFxuICBzZWFyY2hDbGllbnRzLFxuICBzZWFyY2hQcm9kdWN0cyxcbiAgcGF5LFxuICBpbnZvaWNlLFxuICBzYWxlcyxcbiAgY29uZmlnXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICBzaWRlTWVudVZpc2libGU6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NBTEVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHRydWUsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hPTUVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICAgICAgICBzaWRlTWVudVZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdXNlcjoge30sXG4gIHByb2ZpbGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBwcm9maWxlOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgY3JlYXRlZDogJycsXG4gIHVwZGF0ZWQ6ICcnLFxuICBpc051bGw6IGZhbHNlLFxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxuICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgaXNOdWxsOiBmYWxzZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiB0cnVlLFxuICAgICAgICBjYXJ0SXRlbXM6IFtcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0SXRlbXMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVNT1ZFX0ZST01fQ0FSVCc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cblxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG5cbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXG4gICAgICAvLyA/IHRydWVcbiAgICAgIC8vIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX0lURU1fTE9URSc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX1RPVEFMUyc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC50YXhlcyxcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfTElORV9ESVNDT1VOVCc6XG4gICAge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XS5kaXNjb3VudCA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIlxuY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnRzID0gc3RhdGUuY2xpZW50c1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgY2xpZW50czogY2xpZW50c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50LFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1RSVUUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IHRydWVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX0ZBTFNFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnQgPSBzdGF0ZS5jbGllbnRTZWxlY3RlZFxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHByb2R1Y3RzOiB7fSxcbiAgaW5wdXRWYWw6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7fVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XG4gICAge1xuICAgICAgY29uc3Qgd2lkdGggPSAhc3RhdGUuZnVsbFdpZHRoXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB3aWR0aFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwiaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIG1lc3NhZ2VzOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnUFJPRFVDVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIFBST0RVQ1RPIScsICdFbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdOT1RfRk9VTkRfU0FMRSc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgTEEgVkVOVEEhJywgYExhIHZlbnRhICMke2FjdGlvbi5wYXlsb2FkfSBubyBleGlzdGUsIG8gaGF5IHVuIHByb2JsZW1hIHBhcmEgY2FyZ2FybGEsIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLmApXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiEnLCAnSHVibyB1biBlcnJvciBhbCBlbmNvbnRyYXIgZWwgcHJvZHVjdG8gZW4gbGEgbGlzdGEgZGUgcHJvZHVjdG9zIGFncmVnYWRvcyxwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBQUk9EVUNUT1MhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBwcm9kdWN0b3MsIHBvciBmYXZvciBpbnRlbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAke2FjdGlvbi5wYXlsb2FkfWApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgQ0xJRU5URSEnLCAnRWwgY2xpZW50ZSBjb24gZWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgQ0xJRU5URVMhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBjbGllbnRlcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBjbGllbnRzTWF0Y2hlZDogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfSElERV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBwcm9kdWN0c01hdGNoZWQ6IFtdLFxuICBzZWFyY2hWYWx1ZTogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdQUk9EVUNUX1NIT1dfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9ISURFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGlzVmlzaWJsZTogdHJ1ZSxcbiAgcGF5TWV0aG9kOiAnQ0FTSCcsXG4gIGNhc2hBbW91bnQ6IDAsXG4gIGNhcmREaWdpdHM6ICcnLFxuICBjYXJkQXV0aDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NIT1dfUEFZX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1BBWV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NIQU5HRV9QQVlfTUVUSE9EJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBU0hfQU1PVU5UJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ0FSRF9BVVRIJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfRElHSVRTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLnBheS5wYXlNZXRob2QsXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXNoQW1vdW50LFxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZERpZ2l0cyxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkQXV0aFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBpc1Zpc2libGU6IHRydWUsXG4gIGlzRnVsbDogdHJ1ZSxcbiAgZGVmYXVsdERlc2luZzogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgZnVsbE9yTm90ID0gc3RhdGUuaXNGdWxsXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGdWxsOiAhZnVsbE9yTm90XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnOlxuICAgIHtcbiAgICAgIGNvbnN0IGRlc2luZ09yTm90ID0gc3RhdGUuZGVmYXVsdERlc2luZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlZmF1bHREZXNpbmc6ICFkZXNpbmdPck5vdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwiY29uc3Qgc2FsZUFjdGl2ZU1vZGVsID0ge1xuICBpZDogMCxcbiAgZG9jVHlwZTogJ1NBTEUnLFxuICBjYXJ0OiB7fSxcbiAgY2xpZW50OiAnJyxcbiAgcGF5OiB7fSxcbiAgY3JlYXRlZDogbmV3IERhdGUoKVxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBzYWxlczogW10sXG4gIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgc2FsZUFjdGl2ZUlkOiAwLFxuICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzYWxlQWN0aXZlSWQ6IDAsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19TQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlczogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUkVTQUxFX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRk9STUFfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlcyA9IHN0YXRlLnNhbGVzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzYWxlczogc2FsZXNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxuICAgICAgc2FsZS5jbGllbnQgPSBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjb21wYW55OiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DT05GSUdfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9DT05GSUcnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IGFjdGlvbi5wYXlsb2FkLmRhdGFcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH1cblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuXG4gICAgTnVtYmVyLnByb3RvdHlwZS5mb3JtYXRNb25leSA9IGZ1bmN0aW9uKGMsIGQsIHQpe1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgZCA9IGQgPT0gdW5kZWZpbmVkID8gXCIuXCIgOiBkLFxuICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgaSA9IFN0cmluZyhwYXJzZUludChuID0gTWF0aC5hYnMoTnVtYmVyKG4pIHx8IDApLnRvRml4ZWQoYykpKSxcbiAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcbiAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC91dGlscy9mb3JtYXRNb25leS5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmV0Y2luZy1jb250YWluZXInPlxuICAgICAgPGltZyBzcmM9eycvc3RhdGljL3ZlbmRvci9sb2FkZXJzL0VjbGlwc2UuZ2lmJ30gLz5cbiAgICAgIDxoMT5DYXJnYW5kbyBlbGVtZW50b3M8L2gxPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmZXRjaGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogdHJ1ZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdXVpZHYxID0gcmVxdWlyZSgndXVpZC92MScpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBnbG9iYTsgZGlzY291bnQgb2YgY29tcGxldGUgc3RvcmFnZSBvZiBpdGVtcywgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmUsIHRoZW4gdXBkYXRpbmcgRE9NRVxuZXhwb3J0IGZ1bmN0aW9uIHJlY2FsY0NhcnQoaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBuZXdDYXJ0ID0gaXRlbXNJbkNhcnQubWFwKGl0ZW0gPT4ge1xuXG4gICAgY29uc3QgbmV3SXRlbSA9IGl0ZW1cblxuICAgIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbS5wcm9kdWN0LCBpdGVtLnF0eSwgaXRlbS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcblxuICAgIG5ld0l0ZW0uc3VidG90YWwgPSBkYXRhLnN1YnRvdGFsXG4gICAgbmV3SXRlbS50b3RhbFdpdGhJdiA9IGRhdGEudG90YWxXaXRoSXZcbiAgICBuZXdJdGVtLmRpc2NvdW50Q3VycmVuY3kgPSBkYXRhLmRpc2NvdW50Q3VycmVuY3lcbiAgICBuZXdJdGVtLnN1YlRvdGFsTm9EaXNjb3VudCA9IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgbmV3SXRlbS5wcmljZVRvVXNlID0gZGF0YS5wcmljZVRvVXNlXG5cbiAgICByZXR1cm4gbmV3SXRlbVxuXG4gIH0pXG5cbiAgcmV0dXJuIHt0eXBlOiAnUkVQTEFDRV9DQVJUJywgcGF5bG9hZDogbmV3Q2FydH1cblxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1EaXNjb3VudChpdGVtc0luQ2FydCwgY29kZSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHksIGRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Mb3RlKGl0ZW1zSW5DYXJ0LCBjb2RlLCBsb3RlKSB7XG4gIGNvbnN0IGxvdGVOdW0gPSAhbG90ZSA/ICctJyA6IGxvdGVcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbG90ZTogbG90ZU51bSxcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBXaGVuIGl0ZW0gaXMgc2VsZWN0ZWQgaW4gY29kZSBmaWVsZFxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgZGVmYXVsdENvbmZpZywgdXNlckNvbmZpZykge1xuXG4gIGNvbnN0IHBlckxpbmUgPSBmYWxzZVxuXG4gIGNvbnN0IHByb2R1Y3RTZWxlY3RlZCA9IHByb2R1Y3RzLmZpbmRJbmRleChwcm9kdWN0ID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdC5jb2RlID09IGNvZGUgfHwgcHJvZHVjdC5iYXJjb2RlID09IGNvZGVcbiAgfSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKHByb2R1Y3RTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSlcblxuICByZXR1cm4gcmVzXG5cbn1cblxuLy8gVXBkYXRlcyBBbW91bnQgYmFzZWQgb24gcXR5IGlucHV0IGZpZWxkXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdHkgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBwYXJzZUZsb2F0KHF0eSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdHlDb2RlIChjb2RlLCBxdHksIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLy8gVXBkYXRlcyBBbW91bnQgYmFzZWQgb24gcXR5IGlucHV0IGZpZWxkXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJPbmUgKGNvZGUsIHN1Yk9yQWRkLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wcm9kdWN0LmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gc3ViT3JBZGQgPyBwYXJzZUZsb2F0KGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyAxKSA6IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSAtIDEpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExPQ0FMIEFVWCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjaGVja3MgaW4gY2FydCBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXG5mdW5jdGlvbiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpIHtcblxuICAvLyBjaGVjayBpZiBwcm9kdWN0IGluIGNhcnRcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoY2FydCA9PiBjYXJ0LnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGNhcnQucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXG5cbiAgY29uc3QgZGF0YU5ld1Byb2QgPSBjYWNsU3VidG90YWwocHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSwgcXR5LCAwLCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIC8vIENIRUNLIElGIENPTkZJRyBBTExPV1MgTVVMVElQTEUgTElORVMgT1IgTk9UXG4gIGlmIChwZXJMaW5lKSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGluIGNhcnQgRGlzcGF0cyBBRERfVE9fVEFCTEUsIGlmIGV4aXN0cyBkaXNwYXRjaCBjYXJ0IHVwZGF0ZWRcbiAgICAgID8ge1xuICAgICAgICB0eXBlOiAnQUREX1RPX0NBUlQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLFxuICAgICAgICAgIHF0eTogcXR5LFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGFOZXdQcm9kLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXG4gICAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICAgIHRvdGFsV2l0aEl2OiBkYXRhTmV3UHJvZC50b3RhbFdpdGhJdixcbiAgICAgICAgICBsb3RlOiAnLScsXG4gICAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDoge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIHF0eSxcbiAgICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgICAgICB9XG4gICAgICB9XG4gICAgcmV0dXJuIHJlc1xuXG4gIC8vIElHTk9SRSBJRiBBTFJFQURZIElOIENBUlQgSUYgQ09ORklHIFNBWVMgVEhBVFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgIHF0eTogcXR5LFxuICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXG4gICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcbiAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICBsb3RlOiAnLScsXG4gICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cblxuLy8gY2FsY3VsYXRlcyB0aGUgc3VidG90YWwgYnkgbGluZSwgYWxzbyB0aGUgdG90YWwgd2l0aCBpdiBpbmNsdWRlZCwgdGhlIGRpc2NvdW50IGluIGN1cnJlbmN5IGZvcm1hdFxuZnVuY3Rpb24gY2FjbFN1YnRvdGFsKHByb2R1Y3QsIHF0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgcHJpY2UgPSBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudClcblxuICBjb25zdCBzdWJUb3RhbE5vRGlzY291bnQgPSBwcmljZSAqIHF0eVxuXG4gIGNvbnN0IHN1YlRvdGFsID0gcHJpY2UgKiBxdHkgKiAoMSAtIChwcm9kdWN0RGlzY291bnQgLyAxMDApKSAqICgxIC0gKGdsb2JhbERpc2NvdW50IC8gMTAwKSlcblxuICBjb25zdCBpdjEgPSAocHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IGl2MiA9IChwcm9kdWN0LnVzZV90YXhlczIpXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzMiAvIDEwMClcbiAgICA6IDBcblxuICBjb25zdCB0b3RhbFdpdGhJdiA9IHN1YlRvdGFsICsgaXYxICsgaXYyXG5cbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUluTGluZSA9IHByaWNlICogcXR5ICogKHByb2R1Y3REaXNjb3VudCAvIDEwMClcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUdsb2JhbCA9ICgocHJpY2UgKiBxdHkpIC0gZGlzY291bnRDdXJyZW5jeUluTGluZSkgKiAoZ2xvYmFsRGlzY291bnQgLyAxMDApXG5cbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeSA9IGRpc2NvdW50Q3VycmVuY3lJbkxpbmUgKyBkaXNjb3VudEN1cnJlbmN5R2xvYmFsXG5cbiAgcmV0dXJuIHtcbiAgICBzdWJ0b3RhbDogc3ViVG90YWwsXG4gICAgdG90YWxXaXRoSXY6IHRvdGFsV2l0aEl2LFxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRpc2NvdW50Q3VycmVuY3ksXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnQsXG4gICAgcHJpY2VUb1VzZTogcHJpY2VcbiAgfVxuXG59XG5cbi8vIHVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgY2FydCB3aXRoIG5ldyBpbmZvcm1hdGlvbiwgdGhpcyBhdXggZnVudGlvbiByZXR1cm5zIG5ldyB1cGRhdGVkIG9iamVjdCByZWFkeSBmb3IgcmVwbGFjZSB0aGUgc3RvcmVkIG9uZVxuZnVuY3Rpb24gdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleCwgbmV3UXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsIHV1aWQpIHtcblxuICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcblxuICByZXR1cm4ge1xuICAgIHV1aWQ6IHV1aWQsXG4gICAgcHJvZHVjdDogaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGF0YS5kaXNjb3VudEN1cnJlbmN5LFxuICAgIHF0eTogbmV3UXR5LFxuICAgIGRpc2NvdW50OiBwcm9kdWN0RGlzY291bnQsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBzdWJ0b3RhbDogZGF0YS5zdWJ0b3RhbCxcbiAgICB0b3RhbFdpdGhJdjogZGF0YS50b3RhbFdpdGhJdixcbiAgICBsb3RlOiBpdGVtc0luQ2FydFtpbmRleF0ubG90ZSxcbiAgICBwcmljZVRvVXNlOiBkYXRhLnByaWNlVG9Vc2VcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkZXRlcm1pbiBwcmljZSB0byB1c2UgaW4gY2FsY3VsYXRpb25cbmZ1bmN0aW9uIHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KSB7XG5cbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdHRU5FUkFMJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdESVNUUklCJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UzKSByZXR1cm4gcHJvZHVjdC5wcmljZTNcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJyAmJiBwcm9kdWN0LnVzZVByaWNlMikgcmV0dXJuIHByb2R1Y3QucHJpY2UyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScpIHJldHVybiBwcm9kdWN0LnByaWNlXG5cbiAgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiLCJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xuXG4gIHJldHVybiB7dHlwZTogJ1BST0RVQ1RfSElERV9QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdCh2YWwsIHByb2R1Y3RzKSB7XG5cbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXG4gIGNvbnN0IG1hdGNocyA9IFtdXG5cbiAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICBsZXQgY29udHJvbCA9IHRydWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2R1Y3QuZGVzY3JpcHRpb24udG9TdHJpbmcoKVxuXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgY29udHJvbCA9IGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgbWF0Y2hzLnB1c2gocHJvZHVjdClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJyxcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9GQUlMJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpIHtcblxuICByZXR1cm4ge3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGNvZGV9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDbGllbnQodmFsLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXG4gIGNvbnN0IG1hdGNocyA9IFtdXG5cbiAgY29uc29sZS5sb2coY2xpZW50cylcblxuICBjbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcbiAgICBsZXQgY29udHJvbCA9IHRydWVcbiAgICBjb25zdCBuYW1lID0gY2xpZW50Lm5hbWUudG9TdHJpbmcoKSArICcgJyArIGNsaWVudC5sYXN0X25hbWUudG9TdHJpbmcoKVxuXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChjbGllbnQpXG4gICAgfVxuXG4gIH0pXG5cbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXG4gICAgPyB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJyxcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==