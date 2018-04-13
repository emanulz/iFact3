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
    defaultDesing: store.invoice.defaultDesing,
    userCompanyConfig: {},
    defaultCompanyConfig: {}
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
      var logo = this.props.userCompanyConfig.logo || this.props.defaultCompanyConfig.logo || '';
      var logoWidth = this.props.userCompanyConfig.logoWidth || this.props.defaultCompanyConfig.logoWidth || '130px';
      var logoUrl = this.props.defaultDesing ? '/img/logos/' + logo : '/img/logos/chocoprisma.jpg';

      // BILL DATA
      var headerName = this.props.defaultDesing ? this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || '' : 'CHOCOPRISMA';
      var headerName2 = this.props.userCompanyConfig.legalName || this.props.defaultCompanyConfig.legalName || '';

      var tels = this.props.userCompanyConfig.telephones || this.props.defaultCompanyConfig.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.userCompanyConfig.idType || this.props.defaultCompanyConfig.idType || '';
      var id = this.props.userCompanyConfig.id || this.props.defaultCompanyConfig.id || '';
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
              this.props.userCompanyConfig.address1 || this.props.defaultCompanyConfig.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.userCompanyConfig.address2 || this.props.defaultCompanyConfig.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.userCompanyConfig.country || this.props.defaultCompanyConfig.country || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              telsText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.userCompanyConfig.email || this.props.defaultCompanyConfig.email || ''
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
      ) : '';
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
      ) : '';
      var items = cartItems.map(function (item) {

        var taxesText = item.product.useTaxes ? 'G' : 'E';

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
      });

      var globalDiscountRow = this.props.globalDiscount ? _react2.default.createElement(
        'th',
        { className: 'right-in-table' },
        'Des2 %'
      ) : '';

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
  return { sale: store.sales.saleActive,
    defaultDesing: store.invoice.defaultDesing,
    userCompanyConfig: store.config.userCompany,
    defaultCompanyConfig: store.config.defaultCompany };
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
      var headerName = this.props.defaultDesing ? this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || '' : 'CHOCOPRISMA';
      var headerName2 = this.props.userCompanyConfig.legalName || this.props.defaultCompanyConfig.legalName || '';

      var tels = this.props.userCompanyConfig.telephones || this.props.defaultCompanyConfig.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.userCompanyConfig.idType || this.props.defaultCompanyConfig.idType || '';
      var id = this.props.userCompanyConfig.id || this.props.defaultCompanyConfig.id || '';
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
              this.props.userCompanyConfig.address1 || this.props.defaultCompanyConfig.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.userCompanyConfig.address2 || this.props.defaultCompanyConfig.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.userCompanyConfig.country || this.props.defaultCompanyConfig.country || ''
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
      ) : '';

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
  sales: _reducer26.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNsaWVudFNlbGVjdGVkIiwidXNlclNlbGVjdGVkIiwic2VhcmNoQ2xpZW50IiwiY29kZSIsImNsaWVudHMiLCJmaW5kSW5kZXgiLCJjbGllbnQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsIl9pZCIsInVzZXJzIiwidXNlciIsInVwZGF0ZVN0b3JlQ2FzaEFtb3VudCIsInVwZGF0ZVN0b3JlQ2FyZEF1dGgiLCJ1cGRhdGVTdG9yZUNhcmREaWdpdHMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwibnVtYmVyIiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImdldE5leHROdW1lcmljQ29kZSIsInNldE5leHRQcmV2SXRlbSIsImRlZmF1bHRzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsImt3YXJncyIsInVybCIsInN1Y2Nlc3NUeXBlIiwiZXJyb3JUeXBlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhbGVydCIsInN1Y2Nlc3NUeXBlMiIsImxvb2tVcFZhbHVlIiwibG9va1VwRmllbGQiLCJoaXN0b3J5IiwicmVkaXJlY3RVcmwiLCJsZW5ndGgiLCJtb2RlbE5hbWUiLCJsb29rVXBOYW1lIiwiZGlzcGF0Y2hUeXBlIiwiZGlzcGF0Y2hUeXBlMiIsImRpc3BhdGNoRXJyb3JUeXBlIiwicHVzaCIsIml0ZW0iLCJsb2dDb2RlIiwiaXRlbU9sZCIsImxvZ01vZGVsIiwibG9nRGVzY3JpcHRpb24iLCJtZXRob2QiLCJzdWNlc3NNZXNzYWdlIiwic2V0Iiwic2F2ZUxvZyIsImVyciIsImVycm9yTWVzc2FnZSIsImt3YXJnczIiLCJpdGVtMiIsInVybDIiLCJsb2dDb2RlMiIsIml0ZW1PbGQyIiwibG9nTW9kZWwyIiwibG9nRGVzY3JpcHRpb24yIiwibW9kZWwiLCJvbGRPYmplY3QiLCJvYmplY3QiLCJkZXNjcmlwdGlvbiIsInByZXZPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwidXNlcjIiLCJwcmV2X29iamVjdCIsIm5ld19vYmplY3QiLCJlbGVtZW50cyIsImZpZWxkIiwia2V5cyIsIm1hcCIsImVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtYXgiLCJwb3AiLCJuZXh0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZXh0Q29kZSIsInByZXZDb2RlIiwid2luZG93IiwiYWxlcnRpZnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFpbiIsInN0b3JlIiwiZmV0Y2hpbmciLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwidmFsdWUiLCJyb3V0ZXMiLCJIb21lIiwiU2FsZSIsImZ1bGxXaWR0aCIsInNhbGUiLCJ0b3RhbCIsImNhcnQiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwiZm9ybWF0TW9uZXkiLCJ0b2dnbGVXaWR0aCIsImJpbmQiLCJQcm9kdWN0IiwicHJvZHVjdHMiLCJpdGVtc0luQ2FydCIsImNhcnRJdGVtcyIsImlucHV0VmFsIiwiZ2xvYmFsRGlzY291bnQiLCJjb2RlSW5wdXQiLCJmb2N1cyIsInByb2R1Y3RLd2FyZ3MiLCJldiIsImtleSIsInRhcmdldCIsInNwbGl0IiwicXR5IiwiaXNOYU4iLCJkZWZhdWx0Q29uZmlnIiwidXNlckNvbmZpZyIsImRpc2FibGVkIiwiaW5wdXRLZXlQcmVzcyIsImlucHV0Iiwic2VhcmNoUHJvZHVjdENsaWNrIiwiTW91c2V0cmFwIiwicmVxdWlyZSIsIkNhcnQiLCJfdGhpcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwidW5iaW5kIiwiQ2FydEl0ZW1zIiwiaW5DYXJ0IiwiY2FydEl0ZW1BY3RpdmUiLCJwcmV2UHJvcHMiLCJlbGVtIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiX190aGlzIiwicHJvbXB0IiwiZXZ0Iiwib2siLCJjYW5jZWwiLCJkaXNjb3VudCIsImxvdGUiLCJzZWxlY3QiLCJpdGVtczIiLCJhY3RpdmVDbGFzcyIsInByb2R1Y3QiLCJiYXJjb2RlIiwicmVtb3ZlSWNvbkNsYXNzIiwidGF4ZXMxIiwidXNlX3RheGVzIiwidGF4ZXMiLCJxdHlGaWVsZCIsInF0eUlucHV0Q2hhbmdlIiwidXVpZCIsImZpZWxkRm9jdXMiLCJxdHlJbnB1dEtleVByZXNzIiwiZGlzY291bnRGaWVsZCIsInNhbGVMb2FkZWQiLCJkaXNjb3VudElucHV0S2V5UHJlc3MiLCJkaXNjb3VudElucHV0T25CbHVyIiwic2V0Q2FydEl0ZW1BY3RpdmUiLCJwcmljZVRvVXNlIiwidG90YWxXaXRoSXYiLCJyZW1vdmVJdGVtIiwidXBkYXRlVG90YWxzIiwicmVtb3ZlRnJvbUNhcnQiLCJzdWJ0b3RhbCIsInN1YlRvdGFsTm9EaXNjb3VudCIsImRpc2NvdW50VG90YWwiLCJ0YXhlc0NhbGMiLCJ0YXhlc0NhbGMyIiwidXNlX3RheGVzMiIsInRheGVzMiIsImRpc2NvdW50Q3VycmVuY3kiLCJpbmRleEluQ2FydCIsIkFzaWRlIiwiYXNpZGVDbGFzcyIsImFzaWRlQ29udGFpbmVyQ2xhc3MiLCJDbGllbnRzIiwiZGVidCIsImNsaWVudFNlbGVjdGVkRGVidCIsIm5leHRQcm9wcyIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsIm5hbWUiLCJsYXN0X25hbWUiLCJzZWFyY2hDbGllbnRDbGljayIsIlRvdGFscyIsImNhcnRUYXhlcyIsImNhcnRTdWJ0b3RhbE5vRGlzY291bnQiLCJzdGF0ZSIsImRpc2NvdW50VmFsIiwibWF4RGlzY291bnQiLCJpbnB1dE9uQmx1ciIsIkJ1dHRvbnMiLCJsb2NhdGlvbiIsImhyZWYiLCJidXR0b25zIiwic2hvd0lub2ljZVBhbmVsIiwibmV3U2FsZSIsInNob3dQYXlQYW5lbCIsInNob3dTYWxlUGFuZWwiLCJzaG93UHJlc2FsZXNQYW5lbCIsInNlYXJjaFByb2R1Y3RzIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmlzaWJsZU9yTm90IiwicGFuZWxDbGljayIsInNlYXJjaEZvcm0iLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFZhbCIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJyZXN1bHRzVGFibGUiLCJtYXRjaGVzIiwicHJvZHVjdHNNYXRjaGVkIiwic2VsZWN0UHJvZHVjdCIsInNlbGxwcmljZSIsInNlYXJjaENsaWVudHMiLCJzZWFyY2hDbGllbnRBY3Rpb24iLCJ2YWwiLCJjbGllbnRzTWF0Y2hlZCIsImhhc0NyZWRpdCIsImhhc19jcmVkaXQiLCJzZWxlY3RDbGllbnQiLCJQYXlQYW5lbCIsInBhbmVsVmlzaWJsZSIsInBheSIsImlzVmlzaWJsZSIsInBheU1ldGhvZCIsImhpZGVQYW5lbCIsIlBheU1ldGhvZCIsImNsaWNrQ2hhbmdlUGF5TWV0aG9kIiwiUGF5Q2FzaCIsImNhc2hBbW91bnQiLCJwYXlBbW91bnRDaGFuZ2VkIiwiUGF5Q2FyZCIsImNhcmRBdXRoIiwiY2FyZERpZ2l0cyIsInBheUNhcmREaWdpdHNDaGFuZ2VkIiwicGF5Q2FyZEF1dGhDaGFuZ2VkIiwiUGF5Q3JlZGl0IiwiYXZhaWxhYmxlIiwiY3JlZGl0X2xpbWl0IiwiY2xpZW50TGltaXQiLCJjbGllbnRBdmFpbGFibGUiLCJQYXlPdGhlciIsIlBheVNpZGVCYXIiLCJzYWxlcyIsInNvcnRlZFNhbGVzIiwiaWQiLCJuZXh0SWQiLCJkb2NUeXBlIiwiY3JlYXRlZCIsIkRhdGUiLCJwYXllZCIsInJlc2V0IiwiY2hhbmdlIiwicGF5QnV0dG9uQ2xhc3MiLCJjYXNoIiwiYXV0aCIsImRpZ2l0cyIsInNhdmVCdG4iLCJJbnZvaWNlUGFuZWwiLCJpbnZvaWNlIiwiaXNGdWxsIiwicHJpbnREaXYiLCJpc0Z1bGxDbGFzcyIsImNvbXBvbmVudFRvTW91bnQiLCJ0b2dnbGVQYW5lbCIsInByaW50UGFuZWwiLCJGdWxsSW52b2ljZSIsIkhlYWRlciIsInNhbGVBY3RpdmUiLCJkZWZhdWx0RGVzaW5nIiwidXNlckNvbXBhbnlDb25maWciLCJkZWZhdWx0Q29tcGFueUNvbmZpZyIsImhlYWRlcnRleHQiLCJsb2dvIiwibG9nb1dpZHRoIiwibG9nb1VybCIsImhlYWRlck5hbWUiLCJjb21lcmNpYWxOYW1lIiwiaGVhZGVyTmFtZTIiLCJsZWdhbE5hbWUiLCJ0ZWxzIiwidGVsZXBob25lcyIsInRlbHNUZXh0IiwiaWRUeXBlIiwiaWRUZXh0IiwidG9VcHBlckNhc2UiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY291bnRyeSIsImVtYWlsIiwiRGF0YSIsImRhdGUiLCJnZXREYXRlIiwic2xpY2UiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2xpZW50QWRyZXNzIiwiYWRyZXNzIiwiVGFibGUiLCJ0YXhlc1RleHQiLCJ1c2VUYXhlcyIsImdsb2JhbERpc2NvdW50Um93IiwiTm90ZXMiLCJDb21wYWN0SW52b2ljZSIsImNvbmZpZyIsInVzZXJDb21wYW55IiwiZGVmYXVsdENvbXBhbnkiLCJUb3BCYXIiLCJ0b3BCYXJUb2dnbGVWaXNpYmxlIiwiY29uZmlybSIsInJlcGxhY2UiLCJidXR0b25DbGFzcyIsIm1lbnVDbGljayIsImhvbWVDbGljayIsImxvZ091dENsaWNrIiwidG9nZ2xlTGF5b3V0IiwidG9nZ2xlQ29uZmlnQmFyIiwibWFpbkNvbnRhaW5lciIsInNpZGVNZW51IiwicmVtb3ZlIiwiYWRkIiwiY29uZmlnQmFyIiwiU2lkZU1lbnUiLCJzaWRlTWVudUNsYXNzIiwiU2VhcmNoIiwiVXNlciIsImF2YXRhciIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwiZnVsbE5hbWUiLCJzdWJzdHJpbmciLCJtaWRkbGV3YXJlIiwibWVzc2FnZXMiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImFjdGlvbiIsImVkaXRhYmxlIiwidXBkYXRlZCIsImlzTnVsbCIsImNhcnRIYXNJdGVtcyIsImNhcnRTdWJ0b3RhbCIsIm5ld0NhcnQiLCJzcGxpY2UiLCJpdGVtc0xlZnRJbkNhcnQiLCJjbGllbnRTZWxlY3RlZE1vZGVsIiwiY2xpZW50VHlwZSIsImNyZWRpdF9kYXlzIiwidXNlclNlbGVjdGVkTW9kZWwiLCJjbGllbnRzRmV0Y2hpbmciLCJjbGllbnRzRmVjdGVkIiwiY2xpZW50c0ZldGNoRXJyb3IiLCJ3aWR0aCIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwiY29tcGxldGVkIiwic2FsZUFjdGl2ZUlkIiwiaXNTYWxlc1BhbmVsVmlzaWJsZSIsImlzUHJlc2FsZXNQYW5lbFZpc2libGUiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJjIiwiZCIsInQiLCJuIiwiTWF0aCIsImFicyIsInVuZGVmaW5lZCIsInMiLCJpIiwiU3RyaW5nIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJGZXRjaGluZyIsInJlY2FsY0NhcnQiLCJ1cGRhdGVJdGVtRGlzY291bnQiLCJ1cGRhdGVJdGVtTG90ZSIsInByb2R1Y3RTZWxlY3RlZCIsInVwZGF0ZVF0eSIsInVwZGF0ZVF0eUNvZGUiLCJhZGRTdWJPbmUiLCJ1dWlkdjEiLCJuZXdJdGVtIiwiY2FjbFN1YnRvdGFsIiwidXBkYXRlZENhcnRJdGVtIiwibG90ZU51bSIsInBlckxpbmUiLCJjaGVja0lmSW5DYXJ0IiwicXR5TnVtIiwic3ViT3JBZGQiLCJkYXRhTmV3UHJvZCIsInByb2R1Y3REaXNjb3VudCIsInByaWNlIiwic3ViVG90YWwiLCJpdjEiLCJpdjIiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsInVzZVByaWNlMiIsInByaWNlMiIsInVzZVByaWNlMyIsInByaWNlMyIsInNlYXJjaFByb2R1Y3QiLCJwcm9kdWN0U2VsZWN0ZWRUYWJsZSIsInRleHQiLCJtYXRjaHMiLCJjb250cm9sIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwid29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFDZ0JBLGMsR0FBQUEsYztRQW9CQUMsWSxHQUFBQSxZO1FBb0JBQyxZLEdBQUFBLFk7QUF4Q1QsU0FBU0YsY0FBVCxDQUF3QkcsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDOztBQUU1QyxNQUFNSixpQkFBaUJJLFFBQVFDLFNBQVIsQ0FBa0I7QUFBQSxXQUFVQyxPQUFPSCxJQUFQLElBQWVBLElBQXpCO0FBQUEsR0FBbEIsQ0FBdkIsQ0FGNEMsQ0FFNEI7O0FBRXhFLE1BQU1JLE1BQU9QLGtCQUFrQixDQUFDLENBQXBCLEdBQXVCO0FBQy9CO0FBQ0FRLFVBQU0sa0JBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0saUJBRE47QUFFQUMsYUFBUztBQUNQSCxjQUFRRixRQUFRSixjQUFSO0FBREQ7QUFGVCxHQUxKOztBQVlBLFNBQU9PLEdBQVA7QUFFRDs7QUFFTSxTQUFTTixZQUFULENBQXNCUyxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0M7O0FBRXZDLE1BQU1WLGVBQWVVLE1BQU1OLFNBQU4sQ0FBZ0I7QUFBQSxXQUFRTyxLQUFLRixHQUFMLElBQVlBLEdBQXBCO0FBQUEsR0FBaEIsQ0FBckIsQ0FGdUMsQ0FFdUI7O0FBRTlELE1BQU1ILE1BQU9OLGdCQUFnQixDQUFDLENBQWxCLEdBQXFCO0FBQzdCO0FBQ0FPLFVBQU0sZ0JBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0sZUFETjtBQUVBQyxhQUFTO0FBQ1BHLFlBQU1ELE1BQU1WLFlBQU47QUFEQztBQUZULEdBTEo7O0FBWUEsU0FBT00sR0FBUDtBQUVEOztBQUVNLFNBQVNMLFlBQVQsR0FBd0I7O0FBRTdCLFNBQU8sRUFBQ00sTUFBTSxtQkFBUCxFQUE0QkMsU0FBUyxDQUFDLENBQXRDLEVBQVA7QUFDRDs7Ozs7Ozs7Z0NBM0NlVCxjOztnQ0FvQkFDLFk7O2dDQW9CQUMsWTs7Ozs7Ozs7Ozs7Ozs7OztRQ25DQVcscUIsR0FBQUEscUI7UUFlQUMsbUIsR0FBQUEsbUI7UUFlQUMscUIsR0FBQUEscUI7QUFwQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU0YscUJBQVQsQ0FBK0JHLE1BQS9CLEVBQXVDOztBQUU1QyxNQUFNVCxNQUFPUyxNQUFELEdBQVM7QUFDakI7QUFDQVIsVUFBTSxvQkFETjtBQUVBQyxhQUFTUSxXQUFXRCxNQUFYO0FBRlQsR0FEUSxHQUtSO0FBQ0FSLFVBQU0sb0JBRE47QUFFQUMsYUFBUztBQUZULEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOztBQUVNLFNBQVNPLG1CQUFULENBQTZCSSxNQUE3QixFQUFxQzs7QUFFMUMsTUFBTVgsTUFBT1csTUFBRCxHQUFTO0FBQ2pCO0FBQ0FWLFVBQU0sa0JBRE47QUFFQUMsYUFBU1M7QUFGVCxHQURRLEdBS1I7QUFDQVYsVUFBTSxrQkFETjtBQUVBQyxhQUFTO0FBRlQsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRU0sU0FBU1EscUJBQVQsQ0FBK0JHLE1BQS9CLEVBQXVDOztBQUU1QyxNQUFNWCxNQUFPVyxNQUFELEdBQVM7QUFDakI7QUFDQVYsVUFBTSxvQkFETjtBQUVBQyxhQUFTUztBQUZULEdBRFEsR0FLUjtBQUNBVixVQUFNLG9CQUROO0FBRUFDLGFBQVM7QUFGVCxHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztnQ0FsSWdCTSxxQjs7Z0NBZUFDLG1COztnQ0FlQUMscUI7Ozs7Ozs7Ozs7QUNwQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LENBQWQsRUFBaUI7QUFDZmdXLGtCQUFVLEtBQVY7QUFDQSxlQUFPLEtBQVA7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBSUEsT0FBSixFQUFhO0FBQ1hELGFBQU85WSxJQUFQLENBQVlyRCxNQUFaO0FBQ0Q7QUFFRixHQWpCRDs7QUFtQkEsTUFBTUMsTUFBT2tjLE9BQU9wWixNQUFSLEdBQ1I7QUFDQTdDLFVBQU0sdUJBRE47QUFFQUMsYUFBU2djO0FBRlQsR0FEUSxHQUtSO0FBQ0FqYyxVQUFNLG9CQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOzs7Ozs7OztnQ0ExQ2UyUSxTOztnQ0FLQWhSLFkiLCJmaWxlIjoic2FsZXMtNjc5ZjE1NzQxZjQ0ODA2MDlkMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnRTZWxlY3RlZChjb2RlLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgY2xpZW50U2VsZWN0ZWQgPSBjbGllbnRzLmZpbmRJbmRleChjbGllbnQgPT4gY2xpZW50LmNvZGUgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGNsaWVudFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ0NMSUVOVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2xpZW50OiBjbGllbnRzW2NsaWVudFNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTZWxlY3RlZChfaWQsIHVzZXJzKSB7XG5cbiAgY29uc3QgdXNlclNlbGVjdGVkID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5faWQgPT0gX2lkKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAodXNlclNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1VTRVJfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VTRVJfU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB1c2Vyc1t1c2VyU2VsZWN0ZWRdXG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXNoQW1vdW50KGFtb3VudCkge1xuXG4gIGNvbnN0IHJlcyA9IChhbW91bnQpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcbiAgICAgIHBheWxvYWQ6IHBhcnNlRmxvYXQoYW1vdW50KVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogMFxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmRBdXRoKG51bWJlcikge1xuXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmREaWdpdHMobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxuICAgICAgcGF5bG9hZDogbnVtYmVyXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkU2FsZShpZCwgc2FsZXMpIHtcbi8vICAgY29uc3QgZmlsdGVyZWRTYWxlcyA9IHNhbGVzLmZpbHRlcihzYWxlID0+IHtcbi8vICAgICByZXR1cm4gc2FsZS5pZCA9PSBpZFxuLy8gICB9KVxuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBpZiAoZmlsdGVyZWRTYWxlcy5sZW5ndGgpIHtcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSA9IG5ldyBEYXRlKGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSlcbi8vICAgICAgIC8vIGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10gPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydjYXJ0J11bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC50aXRsZSA9IGBWZW50YSAjJHtpZH1gXG4vLyAgICAgICBmaWx0ZXJlZFNhbGVzWzBdWydjbGllbnQnXVsnc2FsZUxvYWRlZCddID0gdHJ1ZVxuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXS5faWR9KVxuXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9UX0ZPVU5EX1NBTEUnLCBwYXlsb2FkOiBpZH0pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MpIHtcblxuLy8gICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbi8vICAgY29uc3QgbW92ZW1lbnRzID0ga3dhcmdzLm1vdmVtZW50c1xuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBjb25zdCBkYiA9IG5ldyBQb3VjaERCKGt3YXJncy5kYilcblxuLy8gICAgIGRiLnBvc3QoaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IGl0ZW19KVxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmlkfSlcblxuLy8gICAgICAgaWYgKGl0ZW0ucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJykgeyAvLyBJRiBDUkVESVQgQ1JFQVRFIENSRURJVCBNT1ZFTUVOVFxuLy8gICAgICAgICBjb25zdCBkYjIgPSBuZXcgUG91Y2hEQignZ2VuZXJhbCcpXG4vLyAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCByZXNwb25zZS5pZCwgaXRlbSlcblxuLy8gICAgICAgICBkYjIucG9zdChtb3ZlbWVudCkudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgLy8gSUYgRVJST1IgU0hPVyBNRVNTQUdFXG4vLyAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIG1vdmltaWVudG8gZGUgY3LDqWRpdG8sIHBvciBmYXZvciBhbnVsZSBsYSBmYWN0dXJhIHkgY3JlZWxhXG4vLyAgICAgICAgICAgZGUgbnVldm8gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICB9IGVsc2UgeyAvLyBJRiBOT1QgQ1JFRElUIFNIT1cgUEFORUxTXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgfVxuXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCBzYWxlSWQsIHNhbGUpIHtcblxuLy8gICBjb25zdCBzb3J0ZWRNb3ZlbWVudHMgPSBtb3ZlbWVudHMubGVuZ3RoID4gMSA/IG1vdmVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPCBiLmRvY3VtZW50KSB7XG4vLyAgICAgICByZXR1cm4gMVxuLy8gICAgIH1cbi8vICAgICBpZiAoYS5kb2N1bWVudCA+IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAtMVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gMFxuLy8gICB9KSA6IG1vdmVtZW50c1xuXG4vLyAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZE1vdmVtZW50cy5sZW5ndGggPiAwID8gc29ydGVkTW92ZW1lbnRzWzBdLmRvY3VtZW50ICsgMSA6IDFcblxuLy8gICBjb25zdCBtb3ZlbWVudCA9IHtcbi8vICAgICAnZG9jdW1lbnQnOiBuZXh0SWQsXG4vLyAgICAgJ2RvY1R5cGUnOiAnQ0xJRU5UX01PVkVNRU5UJyxcbi8vICAgICAnY2xpZW50SWQnOiBzYWxlLmNsaWVudC5faWQsXG4vLyAgICAgJ3R5cGUnOiAnQ1JFRElUJyxcbi8vICAgICAnYW1vdW50JzogcGFyc2VGbG9hdChzYWxlLmNhcnQuY2FydFRvdGFsKSxcbi8vICAgICAnZGF0ZSc6IG5ldyBEYXRlKCksXG4vLyAgICAgJ3NhbGVfaWQnOiBzYWxlSWQsXG4vLyAgICAgJ3NhbGVJZCc6IHNhbGUuaWQsXG4vLyAgICAgJ2Rlc2NyaXB0aW9uJzogYFZlbnRhIGEgY3LDqWRpdG8gY29uIGZhY3R1cmEgIyR7c2FsZS5pZH1gXG4vLyAgIH1cblxuLy8gICByZXR1cm4gbW92ZW1lbnRcblxuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvYWN0aW9ucy5qcyIsIi8qZ2xvYmFsIGRlZmluZTpmYWxzZSAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE3IENyYWlnIENhbXBiZWxsXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogTW91c2V0cmFwIGlzIGEgc2ltcGxlIGtleWJvYXJkIHNob3J0Y3V0IGxpYnJhcnkgZm9yIEphdmFzY3JpcHQgd2l0aFxuICogbm8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKlxuICogQHZlcnNpb24gMS42LjFcbiAqIEB1cmwgY3JhaWcuaXMva2lsbGluZy9taWNlXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8vIENoZWNrIGlmIG1vdXNldHJhcCBpcyB1c2VkIGluc2lkZSBicm93c2VyLCBpZiBub3QsIHJldHVyblxuICAgIGlmICghd2luZG93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIG9mIHNwZWNpYWwga2V5Y29kZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBrZXlzXG4gICAgICpcbiAgICAgKiBldmVyeXRoaW5nIGluIHRoaXMgZGljdGlvbmFyeSBjYW5ub3QgdXNlIGtleXByZXNzIGV2ZW50c1xuICAgICAqIHNvIGl0IGhhcyB0byBiZSBoZXJlIHRvIG1hcCB0byB0aGUgY29ycmVjdCBrZXljb2RlcyBmb3JcbiAgICAgKiBrZXl1cC9rZXlkb3duIGV2ZW50c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX01BUCA9IHtcbiAgICAgICAgODogJ2JhY2tzcGFjZScsXG4gICAgICAgIDk6ICd0YWInLFxuICAgICAgICAxMzogJ2VudGVyJyxcbiAgICAgICAgMTY6ICdzaGlmdCcsXG4gICAgICAgIDE3OiAnY3RybCcsXG4gICAgICAgIDE4OiAnYWx0JyxcbiAgICAgICAgMjA6ICdjYXBzbG9jaycsXG4gICAgICAgIDI3OiAnZXNjJyxcbiAgICAgICAgMzI6ICdzcGFjZScsXG4gICAgICAgIDMzOiAncGFnZXVwJyxcbiAgICAgICAgMzQ6ICdwYWdlZG93bicsXG4gICAgICAgIDM1OiAnZW5kJyxcbiAgICAgICAgMzY6ICdob21lJyxcbiAgICAgICAgMzc6ICdsZWZ0JyxcbiAgICAgICAgMzg6ICd1cCcsXG4gICAgICAgIDM5OiAncmlnaHQnLFxuICAgICAgICA0MDogJ2Rvd24nLFxuICAgICAgICA0NTogJ2lucycsXG4gICAgICAgIDQ2OiAnZGVsJyxcbiAgICAgICAgOTE6ICdtZXRhJyxcbiAgICAgICAgOTM6ICdtZXRhJyxcbiAgICAgICAgMjI0OiAnbWV0YSdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBmb3Igc3BlY2lhbCBjaGFyYWN0ZXJzIHNvIHRoZXkgY2FuIHN1cHBvcnRcbiAgICAgKlxuICAgICAqIHRoaXMgZGljdGlvbmFyeSBpcyBvbmx5IHVzZWQgaW5jYXNlIHlvdSB3YW50IHRvIGJpbmQgYVxuICAgICAqIGtleXVwIG9yIGtleWRvd24gZXZlbnQgdG8gb25lIG9mIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgICAgMTA2OiAnKicsXG4gICAgICAgIDEwNzogJysnLFxuICAgICAgICAxMDk6ICctJyxcbiAgICAgICAgMTEwOiAnLicsXG4gICAgICAgIDExMSA6ICcvJyxcbiAgICAgICAgMTg2OiAnOycsXG4gICAgICAgIDE4NzogJz0nLFxuICAgICAgICAxODg6ICcsJyxcbiAgICAgICAgMTg5OiAnLScsXG4gICAgICAgIDE5MDogJy4nLFxuICAgICAgICAxOTE6ICcvJyxcbiAgICAgICAgMTkyOiAnYCcsXG4gICAgICAgIDIxOTogJ1snLFxuICAgICAgICAyMjA6ICdcXFxcJyxcbiAgICAgICAgMjIxOiAnXScsXG4gICAgICAgIDIyMjogJ1xcJydcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIG1hcHBpbmcgb2Yga2V5cyB0aGF0IHJlcXVpcmUgc2hpZnQgb24gYSBVUyBrZXlwYWRcbiAgICAgKiBiYWNrIHRvIHRoZSBub24gc2hpZnQgZXF1aXZlbGVudHNcbiAgICAgKlxuICAgICAqIHRoaXMgaXMgc28geW91IGNhbiB1c2Uga2V5dXAgZXZlbnRzIHdpdGggdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogbm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IHdvcmsgcmVsaWFibHkgb24gVVMga2V5Ym9hcmRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgICAnfic6ICdgJyxcbiAgICAgICAgJyEnOiAnMScsXG4gICAgICAgICdAJzogJzInLFxuICAgICAgICAnIyc6ICczJyxcbiAgICAgICAgJyQnOiAnNCcsXG4gICAgICAgICclJzogJzUnLFxuICAgICAgICAnXic6ICc2JyxcbiAgICAgICAgJyYnOiAnNycsXG4gICAgICAgICcqJzogJzgnLFxuICAgICAgICAnKCc6ICc5JyxcbiAgICAgICAgJyknOiAnMCcsXG4gICAgICAgICdfJzogJy0nLFxuICAgICAgICAnKyc6ICc9JyxcbiAgICAgICAgJzonOiAnOycsXG4gICAgICAgICdcXFwiJzogJ1xcJycsXG4gICAgICAgICc8JzogJywnLFxuICAgICAgICAnPic6ICcuJyxcbiAgICAgICAgJz8nOiAnLycsXG4gICAgICAgICd8JzogJ1xcXFwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBsaXN0IG9mIHNwZWNpYWwgc3RyaW5ncyB5b3UgY2FuIHVzZSB0byBtYXBcbiAgICAgKiB0byBtb2RpZmllciBrZXlzIHdoZW4geW91IHNwZWNpZnkgeW91ciBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TUEVDSUFMX0FMSUFTRVMgPSB7XG4gICAgICAgICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgJ2NvbW1hbmQnOiAnbWV0YScsXG4gICAgICAgICdyZXR1cm4nOiAnZW50ZXInLFxuICAgICAgICAnZXNjYXBlJzogJ2VzYycsXG4gICAgICAgICdwbHVzJzogJysnLFxuICAgICAgICAnbW9kJzogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyAnbWV0YScgOiAnY3RybCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZsaXBwZWQgdmVyc2lvbiBvZiBfTUFQIGZyb20gYWJvdmVcbiAgICAgKiBuZWVkZWQgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIHVzZSBrZXlwcmVzcyBvciBub3Qgd2hlbiBubyBhY3Rpb25cbiAgICAgKiBpcyBzcGVjaWZpZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHZhciBfUkVWRVJTRV9NQVA7XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdGhlIGYga2V5cywgZjEgdG8gZjE5IGFuZCBhZGQgdGhlbSB0byB0aGUgbWFwXG4gICAgICogcHJvZ3JhbWF0aWNhbGx5XG4gICAgICovXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCAyMDsgKytpKSB7XG4gICAgICAgIF9NQVBbMTExICsgaV0gPSAnZicgKyBpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0byBtYXAgbnVtYmVycyBvbiB0aGUgbnVtZXJpYyBrZXlwYWRcbiAgICAgKi9cbiAgICBmb3IgKGkgPSAwOyBpIDw9IDk7ICsraSkge1xuXG4gICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gdXNlIGEgc3RyaW5nIGNhdXNlIG90aGVyd2lzZSBzaW5jZSAwIGlzIGZhbHNleVxuICAgICAgICAvLyBtb3VzZXRyYXAgd2lsbCBuZXZlciBmaXJlIGZvciBudW1wYWQgMCBwcmVzc2VkIGFzIHBhcnQgb2YgYSBrZXlkb3duXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICAvL1xuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvbW91c2V0cmFwL3B1bGwvMjU4XG4gICAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcm9zcyBicm93c2VyIGFkZCBldmVudCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRG9jdW1lbnR9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgdGhlIGV2ZW50IGFuZCByZXR1cm5zIHRoZSBrZXkgY2hhcmFjdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSkge1xuXG4gICAgICAgIC8vIGZvciBrZXlwcmVzcyBldmVudHMgd2Ugc2hvdWxkIHJldHVybiB0aGUgY2hhcmFjdGVyIGFzIGlzXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgbm90IHByZXNzZWQgdGhlbiBpdCBpcyBzYWZlIHRvIGFzc3VtZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSB3YW50IHRoZSBjaGFyYWN0ZXIgdG8gYmUgbG93ZXJjYXNlLiAgdGhpcyBtZWFucyBpZlxuICAgICAgICAgICAgLy8geW91IGFjY2lkZW50YWxseSBoYXZlIGNhcHMgbG9jayBvbiB0aGVuIHlvdXIga2V5IGJpbmRpbmdzXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRpbnVlIHRvIHdvcmtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgb25seSBzaWRlIGVmZmVjdCB0aGF0IG1pZ2h0IG5vdCBiZSBkZXNpcmVkIGlzIGlmIHlvdVxuICAgICAgICAgICAgLy8gYmluZCBzb21ldGhpbmcgbGlrZSAnQScgY2F1c2UgeW91IHdhbnQgdG8gdHJpZ2dlciBhblxuICAgICAgICAgICAgLy8gZXZlbnQgd2hlbiBjYXBpdGFsIEEgaXMgcHJlc3NlZCBjYXBzIGxvY2sgd2lsbCBubyBsb25nZXJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50LiAgc2hpZnQrYSB3aWxsIHRob3VnaC5cbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIG5vbiBrZXlwcmVzcyBldmVudHMgdGhlIHNwZWNpYWwgbWFwcyBhcmUgbmVlZGVkXG4gICAgICAgIGlmIChfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfS0VZQ09ERV9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCBpcyBub3QgaW4gdGhlIHNwZWNpYWwgbWFwXG5cbiAgICAgICAgLy8gd2l0aCBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgdGhlIGNoYXJhY3RlciBzZWVtcyB0byBhbHdheXNcbiAgICAgICAgLy8gY29tZSBpbiBhcyBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyIHdoZXRoZXIgeW91IGFyZSBwcmVzc2luZyBzaGlmdFxuICAgICAgICAvLyBvciBub3QuICB3ZSBzaG91bGQgbWFrZSBzdXJlIGl0IGlzIGFsd2F5cyBsb3dlcmNhc2UgZm9yIGNvbXBhcmlzb25zXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMxXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMxLCBtb2RpZmllcnMyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllcnMxLnNvcnQoKS5qb2luKCcsJykgPT09IG1vZGlmaWVyczIuc29ydCgpLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIGtleSBldmVudCBhbmQgZmlndXJlcyBvdXQgd2hhdCB0aGUgbW9kaWZpZXJzIGFyZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXZlbnRNb2RpZmllcnMoZSkge1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnY3RybCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ21ldGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RpZmllcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgZGVmYXVsdCBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0b3BzIHByb3BvZ2F0aW9uIGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUga2V5Y29kZSBzcGVjaWZpZWQgaXMgYSBtb2RpZmllciBrZXkgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzTW9kaWZpZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NoaWZ0JyB8fCBrZXkgPT0gJ2N0cmwnIHx8IGtleSA9PSAnYWx0JyB8fCBrZXkgPT0gJ21ldGEnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldmVyc2VzIHRoZSBtYXAgbG9va3VwIHNvIHRoYXQgd2UgY2FuIGxvb2sgZm9yIHNwZWNpZmljIGtleXNcbiAgICAgKiB0byBzZWUgd2hhdCBjYW4gYW5kIGNhbid0IHVzZSBrZXlwcmVzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRSZXZlcnNlTWFwKCkge1xuICAgICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX01BUCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcHVsbCBvdXQgdGhlIG51bWVyaWMga2V5cGFkIGZyb20gaGVyZSBjYXVzZSBrZXlwcmVzcyBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBiZSBhYmxlIHRvIGRldGVjdCB0aGUga2V5cyBmcm9tIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfTUFQLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfUkVWRVJTRV9NQVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcGlja3MgdGhlIGJlc3QgYWN0aW9uIGJhc2VkIG9uIHRoZSBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBjaGFyYWN0ZXIgZm9yIGtleVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIHBhc3NlZCBpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKSB7XG5cbiAgICAgICAgLy8gaWYgbm8gYWN0aW9uIHdhcyBwaWNrZWQgaW4gd2Ugc2hvdWxkIHRyeSB0byBwaWNrIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCB3ZSB0aGluayB3b3VsZCB3b3JrIGJlc3QgZm9yIHRoaXMga2V5XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBfZ2V0UmV2ZXJzZU1hcCgpW2tleV0gPyAna2V5ZG93bicgOiAna2V5cHJlc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBkb24ndCB3b3JrIGFzIGV4cGVjdGVkIHdpdGgga2V5cHJlc3MsXG4gICAgICAgIC8vIHN3aXRjaCB0byBrZXlkb3duXG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAna2V5ZG93bic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGZyb20gYSBzdHJpbmcga2V5IGNvbWJpbmF0aW9uIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGxpa2UgXCJjb21tYW5kK3NoaWZ0K2xcIlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbikge1xuICAgICAgICBpZiAoY29tYmluYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmV0dXJuIFsnKyddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgJytwbHVzJyk7XG4gICAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdCgnKycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaW5mbyBmb3IgYSBzcGVjaWZpYyBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24ga2V5IGNvbWJpbmF0aW9uIChcImNvbW1hbmQrc1wiIG9yIFwiYVwiIG9yIFwiKlwiKVxuICAgICAqIEBwYXJhbSAge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbikge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICAvLyB0YWtlIHRoZSBrZXlzIGZyb20gdGhpcyBwYXR0ZXJuIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIGFjdHVhbFxuICAgICAgICAvLyBwYXR0ZXJuIGlzIGFsbCBhYm91dFxuICAgICAgICBrZXlzID0gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGtleSBuYW1lc1xuICAgICAgICAgICAgaWYgKF9TUEVDSUFMX0FMSUFTRVNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TUEVDSUFMX0FMSUFTRVNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBub3QgYSBrZXlwcmVzcyBldmVudCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gYmUgc21hcnQgYWJvdXQgdXNpbmcgc2hpZnQga2V5c1xuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG9ubHkgd29yayBmb3IgVVMga2V5Ym9hcmRzIGhvd2V2ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9ICdrZXlwcmVzcycgJiYgX1NISUZUX01BUFtrZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NISUZUX01BUFtrZXldO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGtleSBpcyBhIG1vZGlmaWVyIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG1vZGlmaWVyc1xuICAgICAgICAgICAgaWYgKF9pc01vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGtleSBjb21iaW5hdGlvbiBpc1xuICAgICAgICAvLyB3ZSB3aWxsIHRyeSB0byBwaWNrIHRoZSBiZXN0IGV2ZW50IGZvciBpdFxuICAgICAgICBhY3Rpb24gPSBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9iZWxvbmdzVG8oZWxlbWVudCwgYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JlbG9uZ3NUbyhlbGVtZW50LnBhcmVudE5vZGUsIGFuY2VzdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIE1vdXNldHJhcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGVsZW1lbnQgdG8gYXR0YWNoIGtleSBldmVudHMgdG9cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiBhbGwgdGhlIGNhbGxiYWNrcyBzZXR1cCB2aWEgTW91c2V0cmFwLmJpbmQoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRpcmVjdCBtYXAgb2Ygc3RyaW5nIGNvbWJpbmF0aW9ucyB0byBjYWxsYmFja3MgdXNlZCBmb3IgdHJpZ2dlcigpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICoga2VlcHMgdHJhY2sgb2Ygd2hhdCBsZXZlbCBlYWNoIHNlcXVlbmNlIGlzIGF0IHNpbmNlIG11bHRpcGxlXG4gICAgICAgICAqIHNlcXVlbmNlcyBjYW4gc3RhcnQgb3V0IHdpdGggdGhlIHNhbWUgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfc2VxdWVuY2VMZXZlbHMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIHNldFRpbWVvdXQgY2FsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVsbHxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3Jlc2V0VGltZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXl1cFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5cHJlc3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXlwcmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhcmUgd2UgY3VycmVudGx5IGluc2lkZSBvZiBhIHNlcXVlbmNlP1xuICAgICAgICAgKiB0eXBlIG9mIGFjdGlvbiAoXCJrZXl1cFwiIG9yIFwia2V5ZG93blwiIG9yIFwia2V5cHJlc3NcIikgb3IgZmFsc2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVzZXRzIGFsbCBzZXF1ZW5jZSBjb3VudGVycyBleGNlcHQgZm9yIHRoZSBvbmVzIHBhc3NlZCBpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZG9Ob3RSZXNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCkge1xuICAgICAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG5cbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIF9zZXF1ZW5jZUxldmVscykge1xuICAgICAgICAgICAgICAgIGlmIChkb05vdFJlc2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VxdWVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVTZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZmluZHMgYWxsIGNhbGxiYWNrcyB0aGF0IG1hdGNoIGJhc2VkIG9uIHRoZSBrZXljb2RlLCBtb2RpZmllcnMsXG4gICAgICAgICAqIGFuZCBhY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudHxPYmplY3R9IGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHRoZSBzZXF1ZW5jZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlLCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2s7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGUudHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyByZWxhdGVkIHRvIHRoaXMga2V5Y29kZVxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXkgaXMgY29taW5nIHVwIG9uIGl0cyBvd24gd2Ugc2hvdWxkIGFsbG93IGl0XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09ICdrZXl1cCcgJiYgX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA9IFtjaGFyYWN0ZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkXG4gICAgICAgICAgICAvLyBhbmQgc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgYSBzZXF1ZW5jZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQsIGJ1dCB0aGlzIGlzIGEgc2VxdWVuY2UgYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgd3JvbmcgbGV2ZWwgdGhlbiBtb3ZlIG9udG8gdGhlIG5leHQgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGFjdGlvbiB3ZSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBtYXRjaCB0aGUgYWN0aW9uIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd2Ugc2hvdWxkIGtlZXAgZ29pbmdcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEga2V5cHJlc3MgZXZlbnQgYW5kIHRoZSBtZXRhIGtleSBhbmQgY29udHJvbCBrZXlcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHByZXNzZWQgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gb25seSBsb29rIGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGNoYXJhY3Rlciwgb3RoZXJ3aXNlIGNoZWNrIHRoZSBtb2RpZmllcnMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gY2hyb21lIHdpbGwgbm90IGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIHNhZmFyaSB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIG1ldGErc2hpZnQgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIGZpcmVmb3ggd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSkgfHwgX21vZGlmaWVyc01hdGNoKG1vZGlmaWVycywgY2FsbGJhY2subW9kaWZpZXJzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4geW91IGJpbmQgYSBjb21iaW5hdGlvbiBvciBzZXF1ZW5jZSBhIHNlY29uZCB0aW1lIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZS4gIGlmIGEgc2VxdWVuY2VOYW1lIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbWJpbmF0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGlzIGNhbGwgaXQgZG9lcyBqdXN0IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRvZG8gbWFrZSBkZWxldGluZyBpdHMgb3duIG1ldGhvZD9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUNvbWJvID0gIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5jb21ibyA9PSBjb21iaW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVDb21ibyB8fCBkZWxldGVTZXF1ZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdHVhbGx5IGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgdGhpcyB3aWxsIHVzZSB0aGUganF1ZXJ5XG4gICAgICAgICAqIGNvbnZlbnRpb24gLSBwcmV2ZW50IGRlZmF1bHQgYW5kIHN0b3AgcHJvcG9nYXRpb24gb24gdGhlIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZXZlbnQgc2hvdWxkIG5vdCBoYXBwZW4gc3RvcCBoZXJlXG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9wQ2FsbGJhY2soZSwgZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LCBjb21ibywgc2VxdWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soZSwgY29tYm8pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICAgICAgICBfc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBjaGFyYWN0ZXIga2V5IGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSk7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBkb05vdFJlc2V0ID0ge307XG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhMZXZlbCBmb3Igc2VxdWVuY2VzIHNvIHdlIGNhbiBvbmx5IGV4ZWN1dGUgdGhlIGxvbmdlc3QgY2FsbGJhY2sgc2VxdWVuY2VcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaV0ubGV2ZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG1hdGNoaW5nIGNhbGxiYWNrcyBmb3IgdGhpcyBrZXkgZXZlbnRcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpcmUgZm9yIGFsbCBzZXF1ZW5jZSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgc3VjaCBhcyBcImcgaVwiIGFuZCBcImcgdFwiIHRoZXkgYm90aCBuZWVkIHRvIGZpcmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZm9yIG1hdGNoaW5nIGcgY2F1c2Ugb3RoZXJ3aXNlIHlvdSBjYW4gb25seSBldmVyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdGhlIGZpcnN0IG9uZVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBmaXJlIGNhbGxiYWNrcyBmb3IgdGhlIG1heExldmVsIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Vic2VxdWVuY2VzIGZyb20gYWxzbyBmaXJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgJ2Egb3B0aW9uIGInIHNob3VsZCBub3QgY2F1c2UgJ29wdGlvbiBiJyB0byBmaXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gdGhvdWdoICdvcHRpb24gYicgaXMgcGFydCBvZiB0aGUgb3RoZXIgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IHNlcXVlbmNlcyB0aGF0IGRvIG5vdCBtYXRjaCBoZXJlIHdpbGwgYmUgZGlzY2FyZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93IGJ5IHRoZSBfcmVzZXRTZXF1ZW5jZXMgY2FsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLmxldmVsICE9IG1heExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSBsaXN0IG9mIHdoaWNoIHNlcXVlbmNlcyB3ZXJlIG1hdGNoZXMgZm9yIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2ldLnNlcV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvLCBjYWxsYmFja3NbaV0uc2VxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2VyZSBubyBzZXF1ZW5jZSBtYXRjaGVzIGJ1dCB3ZSBhcmUgc3RpbGwgaGVyZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgbWVhbnMgdGhpcyBpcyBhIHJlZ3VsYXIgbWF0Y2ggc28gd2Ugc2hvdWxkIGZpcmUgdGhhdFxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBrZXkgeW91IHByZXNzZWQgbWF0Y2hlcyB0aGUgdHlwZSBvZiBzZXF1ZW5jZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBiZWluZyBhIG1vZGlmaWVyIChpZSBcImtleXVwXCIgb3IgXCJrZXlwcmVzc1wiKSB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHNlcXVlbmNlcyB0aGF0IHdlcmUgbm90IG1hdGNoZWQgYnkgdGhpcyBldmVudFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc28sIGZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGUgc2VxdWVuY2UgXCJoIGEgdFwiIGFuZCB5b3VcbiAgICAgICAgICAgIC8vIHR5cGUgXCJoIGUgYSByIHRcIiBpdCBkb2VzIG5vdCBtYXRjaC4gIGluIHRoaXMgY2FzZSB0aGUgXCJlXCIgd2lsbFxuICAgICAgICAgICAgLy8gY2F1c2UgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBhcmUgaWdub3JlZCBiZWNhdXNlIHlvdSBjYW4gaGF2ZSBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0aGF0IGNvbnRhaW5zIG1vZGlmaWVycyBzdWNoIGFzIFwiZW50ZXIgY3RybCtzcGFjZVwiIGFuZCBpbiBtb3N0XG4gICAgICAgICAgICAvLyBjYXNlcyB0aGUgbW9kaWZpZXIga2V5IHdpbGwgYmUgcHJlc3NlZCBiZWZvcmUgdGhlIG5leHQga2V5XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgaGF2ZSBhIHNlcXVlbmNlIHN1Y2ggYXMgXCJjdHJsK2IgYVwiIHRoZW4gcHJlc3NpbmcgdGhlXG4gICAgICAgICAgICAvLyBcImJcIiBrZXkgd2lsbCB0cmlnZ2VyIGEgXCJrZXlwcmVzc1wiIGFuZCBhIFwia2V5ZG93blwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIFwia2V5ZG93blwiIGlzIGV4cGVjdGVkIHdoZW4gdGhlcmUgaXMgYSBtb2RpZmllciwgYnV0IHRoZVxuICAgICAgICAgICAgLy8gXCJrZXlwcmVzc1wiIGVuZHMgdXAgbWF0Y2hpbmcgdGhlIF9uZXh0RXhwZWN0ZWRBY3Rpb24gc2luY2UgaXQgb2NjdXJzXG4gICAgICAgICAgICAvLyBhZnRlciBhbmQgdGhhdCBjYXVzZXMgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gd2UgaWdub3JlIGtleXByZXNzZXMgaW4gYSBzZXF1ZW5jZSB0aGF0IGRpcmVjdGx5IGZvbGxvdyBhIGtleWRvd25cbiAgICAgICAgICAgIC8vIGZvciB0aGUgc2FtZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHZhciBpZ25vcmVUaGlzS2V5cHJlc3MgPSBlLnR5cGUgPT0gJ2tleXByZXNzJyAmJiBfaWdub3JlTmV4dEtleXByZXNzO1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrICYmIGUudHlwZSA9PSAna2V5ZG93bic7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBrZXlkb3duIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2hhbmRsZUtleUV2ZW50KGUpIHtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGUud2hpY2ggZm9yIGtleSBldmVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjg1NjI3L2phdmFzY3JpcHQta2V5Y29kZS12cy1jaGFyY29kZS11dHRlci1jb25mdXNpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBlLndoaWNoID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcblxuICAgICAgICAgICAgLy8gbm8gY2hhcmFjdGVyIGZvdW5kIHRoZW4gc3RvcFxuICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5lZWQgdG8gdXNlID09PSBmb3IgdGhlIGNoYXJhY3RlciBjaGVjayBiZWNhdXNlIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIDBcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXVwJyAmJiBfaWdub3JlTmV4dEtleXVwID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmhhbmRsZUtleShjaGFyYWN0ZXIsIF9ldmVudE1vZGlmaWVycyhlKSwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2FsbGVkIHRvIHNldCBhIDEgc2Vjb25kIHRpbWVvdXQgb24gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiB0aGlzIGlzIHNvIGFmdGVyIGVhY2gga2V5IHByZXNzIGluIHRoZSBzZXF1ZW5jZSB5b3UgaGF2ZSAxIHNlY29uZFxuICAgICAgICAgKiB0byBwcmVzcyB0aGUgbmV4dCBrZXkgYmVmb3JlIHlvdSBoYXZlIHRvIHN0YXJ0IG92ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfcmVzZXRUaW1lcik7XG4gICAgICAgICAgICBfcmVzZXRUaW1lciA9IHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIGtleSBzZXF1ZW5jZSB0byBhbiBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYm8gLSBjb21ibyBzcGVjaWZpZWQgaW4gYmluZCBjYWxsXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGtleXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTZXF1ZW5jZShjb21ibywga2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuXG4gICAgICAgICAgICAvLyBzdGFydCBvZmYgYnkgYWRkaW5nIGEgc2VxdWVuY2UgbGV2ZWwgcmVjb3JkIGZvciB0aGlzIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICAvLyBhbmQgc2V0dGluZyB0aGUgbGV2ZWwgdG8gMFxuICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbGJhY2sgdG8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlIGxldmVsIGZvciB0aGlzIHNlcXVlbmNlIGFuZCByZXNldFxuICAgICAgICAgICAgICogYWxsIG90aGVyIHNlcXVlbmNlcyB0aGF0IHdlcmUgYWN0aXZlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5leHRBY3Rpb25cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2luY3JlYXNlU2VxdWVuY2UobmV4dEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IG5leHRBY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VUaW1lcigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd3JhcHMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayBpbnNpZGUgb2YgYW5vdGhlciBmdW5jdGlvbiBpbiBvcmRlclxuICAgICAgICAgICAgICogdG8gcmVzZXQgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGFzIHNvb24gYXMgdGhpcyBzZXF1ZW5jZSBpcyBkb25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2FsbGJhY2tBbmRSZXNldChlKSB7XG4gICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSB0aGUgbmV4dCBrZXkgdXAgaWYgdGhlIGFjdGlvbiBpcyBrZXkgZG93blxuICAgICAgICAgICAgICAgIC8vIG9yIGtleXByZXNzLiAgdGhpcyBpcyBzbyBpZiB5b3UgZmluaXNoIGEgc2VxdWVuY2UgYW5kXG4gICAgICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUga2V5IHRoZSBmaW5hbCBrZXkgd2lsbCBub3QgdHJpZ2dlciBhIGtleXVwXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2tleXVwJykge1xuICAgICAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZWlyZCByYWNlIGNvbmRpdGlvbiBpZiBhIHNlcXVlbmNlIGVuZHMgd2l0aCB0aGUga2V5XG4gICAgICAgICAgICAgICAgLy8gYW5vdGhlciBzZXF1ZW5jZSBiZWdpbnMgd2l0aFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzIG9uZSBhdCBhIHRpbWUgYW5kIGJpbmQgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBmdW5jdGlvbi4gIGZvciBhbnkga2V5IGxlYWRpbmcgdXAgdG8gdGhlIGZpbmFsIG9uZSBpdCBzaG91bGRcbiAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBzZXF1ZW5jZS4gYWZ0ZXIgdGhlIGZpbmFsLCBpdCBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlmIGFuIGFjdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsIGJpbmQgY2FsbCB0aGVuIHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gYmUgdXNlZCB0aHJvdWdob3V0LiAgb3RoZXJ3aXNlIHdlIHdpbGwgcGFzcyB0aGUgYWN0aW9uIHRoYXQgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IGtleSBpbiB0aGUgc2VxdWVuY2Ugc2hvdWxkIG1hdGNoLiAgdGhpcyBhbGxvd3MgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdG8gbWl4IGFuZCBtYXRjaCBrZXlwcmVzcyBhbmQga2V5ZG93biBldmVudHMgZGVwZW5kaW5nIG9uIHdoaWNoXG4gICAgICAgICAgICAvLyBvbmVzIGFyZSBiZXR0ZXIgc3VpdGVkIHRvIHRoZSBrZXkgcHJvdmlkZWRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsID0gaSArIDEgPT09IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ2FsbGJhY2sgPSBpc0ZpbmFsID8gX2NhbGxiYWNrQW5kUmVzZXQgOiBfaW5jcmVhc2VTZXF1ZW5jZShhY3Rpb24gfHwgX2dldEtleUluZm8oa2V5c1tpICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpXSwgd3JhcHBlZENhbGxiYWNrLCBhY3Rpb24sIGNvbWJvLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIHNpbmdsZSBrZXlib2FyZCBjb21iaW5hdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHNlcXVlbmNlIGlmIHBhcnQgb2Ygc2VxdWVuY2VcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbCAtIHdoYXQgcGFydCBvZiB0aGUgc2VxdWVuY2UgdGhlIGNvbW1hbmQgaXNcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTaW5nbGUoY29tYmluYXRpb24sIGNhbGxiYWNrLCBhY3Rpb24sIHNlcXVlbmNlTmFtZSwgbGV2ZWwpIHtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYSBkaXJlY3QgbWFwcGVkIHJlZmVyZW5jZSBmb3IgdXNlIHdpdGggTW91c2V0cmFwLnRyaWdnZXJcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtjb21iaW5hdGlvbiArICc6JyArIGFjdGlvbl0gPSBjYWxsYmFjaztcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIG11bHRpcGxlIHNwYWNlcyBpbiBhIHJvdyBiZWNvbWUgYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBjb21iaW5hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGluZm87XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgcGF0dGVybiBpcyBhIHNlcXVlbmNlIG9mIGtleXMgdGhlbiBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAgICAgICAgLy8gdG8gcmVwcm9jZXNzIGVhY2ggcGF0dGVybiBvbmUga2V5IGF0IGEgdGltZVxuICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmZvID0gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbml0aWFsaXplIGFycmF5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIC8vIGEgY2FsbGJhY2sgaXMgYWRkZWQgZm9yIHRoaXMga2V5XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldID0gc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSB8fCBbXTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIG1hdGNoIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgX2dldE1hdGNoZXMoaW5mby5rZXksIGluZm8ubW9kaWZpZXJzLCB7dHlwZTogaW5mby5hY3Rpb259LCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGlzIGNhbGwgYmFjayB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgc2VxdWVuY2UgcHV0IGl0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIC8vIGlmIG5vdCBwdXQgaXQgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHdheSB0aGVzZSBhcmUgcHJvY2Vzc2VkIGV4cGVjdHNcbiAgICAgICAgICAgIC8vIHRoZSBzZXF1ZW5jZSBvbmVzIHRvIGNvbWUgZmlyc3RcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV1bc2VxdWVuY2VOYW1lID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogaW5mby5tb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpbmZvLmFjdGlvbixcbiAgICAgICAgICAgICAgICBzZXE6IHNlcXVlbmNlTmFtZSxcbiAgICAgICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBtdWx0aXBsZSBjb21iaW5hdGlvbnMgdG8gdGhlIHNhbWUgY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29tYmluYXRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZSA9IGZ1bmN0aW9uKGNvbWJpbmF0aW9ucywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShjb21iaW5hdGlvbnNbaV0sIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN0YXJ0IVxuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXByZXNzJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlkb3duJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXl1cCcsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiBjYW4gYmUgYSBzaW5nbGUga2V5LCBhIGNvbWJpbmF0aW9uIG9mIGtleXMgc2VwYXJhdGVkIHdpdGggKyxcbiAgICAgKiBhbiBhcnJheSBvZiBrZXlzLCBvciBhIHNlcXVlbmNlIG9mIGtleXMgc2VwYXJhdGVkIGJ5IHNwYWNlc1xuICAgICAqXG4gICAgICogYmUgc3VyZSB0byBsaXN0IHRoZSBtb2RpZmllciBrZXlzIGZpcnN0IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgICAqIGNvcnJlY3Qga2V5IGVuZHMgdXAgZ2V0dGluZyBib3VuZCAodGhlIGxhc3Qga2V5IGluIHRoZSBwYXR0ZXJuKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIC0gJ2tleXByZXNzJywgJ2tleWRvd24nLCBvciAna2V5dXAnXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXlzID0ga2V5cyBpbnN0YW5jZW9mIEFycmF5ID8ga2V5cyA6IFtrZXlzXTtcbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB1bmJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogdGhlIHVuYmluZGluZyBzZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGtleSBjb21ib1xuICAgICAqIHRvIGFuIGVtcHR5IGZ1bmN0aW9uIGFuZCBkZWxldGVzIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiB0aGVcbiAgICAgKiBfZGlyZWN0TWFwIGRpY3QuXG4gICAgICpcbiAgICAgKiBUT0RPOiBhY3R1YWxseSByZW1vdmUgdGhpcyBmcm9tIHRoZSBfY2FsbGJhY2tzIGRpY3Rpb25hcnkgaW5zdGVhZFxuICAgICAqIG9mIGJpbmRpbmcgYW4gZW1wdHkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIHRoZSBrZXljb21ibythY3Rpb24gaGFzIHRvIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXNcbiAgICAgKiBpdCB3YXMgZGVmaW5lZCBpbiB0aGUgYmluZCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLmJpbmQuY2FsbChzZWxmLCBrZXlzLCBmdW5jdGlvbigpIHt9LCBhY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0cmlnZ2VycyBhbiBldmVudCB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSkge1xuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKHt9LCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogcmVzZXRzIHRoZSBsaWJyYXJ5IGJhY2sgdG8gaXRzIGluaXRpYWwgc3RhdGUuICB0aGlzIGlzIHVzZWZ1bFxuICAgICAqIGlmIHlvdSB3YW50IHRvIGNsZWFyIG91dCB0aGUgY3VycmVudCBrZXlib2FyZCBzaG9ydGN1dHMgYW5kIGJpbmRcbiAgICAgKiBuZXcgb25lcyAtIGZvciBleGFtcGxlIGlmIHlvdSBzd2l0Y2ggdG8gYW5vdGhlciBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNob3VsZCB3ZSBzdG9wIHRoaXMgZXZlbnQgYmVmb3JlIGZpcmluZyBvZmYgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnN0b3BDYWxsYmFjayA9IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgICBpZiAoKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgbW91c2V0cmFwICcpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfYmVsb25nc1RvKGVsZW1lbnQsIHNlbGYudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcCBmb3IgaW5wdXQsIHNlbGVjdCwgYW5kIHRleHRhcmVhXG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT0gJ0lOUFVUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdURVhUQVJFQScgfHwgZWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogZXhwb3NlcyBfaGFuZGxlS2V5IHB1YmxpY2x5IHNvIGl0IGNhbiBiZSBvdmVyd3JpdHRlbiBieSBleHRlbnNpb25zXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5oYW5kbGVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGFsbG93IGN1c3RvbSBrZXkgbWFwcGluZ3NcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuYWRkS2V5Y29kZXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgX01BUFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX1JFVkVSU0VfTUFQID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnNcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnMgdG8gd29ya1xuICAgICAqIG5vdyB0aGF0IG1vdXNldHJhcCBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIE1vdXNldHJhcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkb2N1bWVudE1vdXNldHJhcCA9IE1vdXNldHJhcChkb2N1bWVudCk7XG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBkb2N1bWVudE1vdXNldHJhcCkge1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIE1vdXNldHJhcFttZXRob2RdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kXS5hcHBseShkb2N1bWVudE1vdXNldHJhcCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IChtZXRob2QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNb3VzZXRyYXAuaW5pdCgpO1xuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCB0byB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIHdpbmRvdy5Nb3VzZXRyYXAgPSBNb3VzZXRyYXA7XG5cbiAgICAvLyBleHBvc2UgYXMgYSBjb21tb24ganMgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTW91c2V0cmFwO1xuICAgIH1cblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgYXMgYW4gQU1EIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vdXNldHJhcDtcbiAgICAgICAgfSk7XG4gICAgfVxufSkgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCwgdHlwZW9mICB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT05GSUcgREVGQVVMVCBBWElPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdFVCBGVU5DVElPTlMgKFJFVFJJRVZFIEFMTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1EaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICAvLyBJRiBUSEUgRVJST1IgSVMgVU5BVVRPUklaRUQgUEFHRSBXSUxMIFNIT1cgVEhFIE1FU1NBR0VcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRG91YmxlRGlzcGF0Y2goa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxuICBjb25zdCBzdWNjZXNzVHlwZTIgPSBrd2FyZ3Muc3VjY2Vzc1R5cGUyXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlMiwgcGF5bG9hZDogJyd9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJldHVybihrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG5cbiAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICByZXR1cm4gZXJyb3JcbiAgfSlcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNFVCBGVU5DVElPTiAoUkVUUklFVkUgSU5ESVZJRFVBTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgbG9va1VwVmFsdWUgPSBrd2FyZ3MubG9va1VwVmFsdWVcbiAgY29uc3QgbG9va1VwRmllbGQgPSBrd2FyZ3MubG9va1VwRmllbGRcbiAgY29uc3QgaGlzdG9yeSA9IGt3YXJncy5oaXN0b3J5XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0ga3dhcmdzLnJlZGlyZWN0VXJsXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YClcbiAgICBheGlvcy5nZXQoYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIElGIFRIRVJFIElTIE1PUkUgVEhBTiBPTkUgRUxFTUVOVCBGSUxURVJFRFxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0FURU5DScOTTicsIGBFeGlzdGUgbWFzIGRlIHVuICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsICR7a3dhcmdzLmxvb2tVcE5hbWV9OlxuICAgICAgICAgICR7a3dhcmdzLmxvb2tVcFZhbHVlfSwgc2UgdXRpbGl6YXLDoSBlbCBwcmltZXJvIGVuIGxpc3RhLCBwb3IgbG8gcXVlIHB1ZWRlIG5vIHNlciBlbCBtaXNtbyBxdWUgdWQgZGVzZWFcbiAgICAgICAgICBhY3R1YWxpemFyLCBlc3RvIHB1ZWRlIGRlYmVyc2UgYSB1biBlcnJvciwgcG9yIGZhdm9yIHJldmlzZSBsb3NcbiAgICAgICAgICBkYXRvcyBvIGNvbnRhY3RlIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hLmApXG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlMiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaEVycm9yVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgTm8gaGF5ICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsIHZhbG9yIGRlICR7a3dhcmdzLmxvb2tVcE5hbWV9OiAke2t3YXJncy5sb29rVXBWYWx1ZX1gLFxuICAgICAgICAgIGZ1bmN0aW9uKCkgeyBoaXN0b3J5LnB1c2gocmVkaXJlY3RVcmwpIH0pXG4gICAgICB9XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgZWwgdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIH0pXG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgRlVOQ1RJT04gKENSRUFURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVUERBVEUgRlVOQ1RJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVUERBVEUgUEFSVElBTExZIEZVTkNUSU9OIChQQVRDSClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoa3dhcmdzLnN1Y2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9VQkxFIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW1zKGt3YXJncywga3dhcmdzMikge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIGNvbnN0IGl0ZW0yID0ga3dhcmdzMi5pdGVtXG4gIGNvbnN0IHVybDIgPSBrd2FyZ3MyLnVybFxuICBjb25zdCBsb2dDb2RlMiA9IGt3YXJnczIubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkMiA9IGt3YXJnczIuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbDIgPSBrd2FyZ3MyLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uMiA9IGt3YXJnczIubG9nRGVzY3JpcHRpb25cblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAvLyBGSVJTVCBQQVRDSCBUSEVOXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcblxuICAgICAgICAvLyBTRUNPTkQgUEFUQ0hcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgICAgICB1cmw6IHVybDIsXG4gICAgICAgICAgZGF0YTogaXRlbTJcbiAgICAgICAgfSlcbiAgICAgICAgICAvLyBTRUNPTkQgUEFUQ0ggVEhFTlxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGt3YXJnczIuc3VjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJnczIuc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoa3dhcmdzMi5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgICAgICBrd2FyZ3MyLmhpc3RvcnkucHVzaChrd2FyZ3MyLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzMi5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgICAgIHNhdmVMb2cobG9nQ29kZTIsIGxvZ01vZGVsMiwgaXRlbU9sZDIsIGl0ZW0yLCBsb2dEZXNjcmlwdGlvbjIsIHVzZXIpXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgICAgICAvLyBTRUNPTkQgUEFUQ0ggQ0FUQ0hcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzMi5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgICAgICB9KVxuXG4gICAgICAvLyBGSVJTVCBQQVRDSCBDQVRDSFxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBERUxFVEUgRlVOQ1RJT04gKERFTEVURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbW9kZWwgPSBrd2FyZ3MubW9kZWxOYW1lXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCAnRWxlbWVudG8gZWxpbWluYWRvIHNhdGlmYWN0b3JpYW1lbnRlJylcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEh1Ym8gdW4gZXJyb3IgYWwgZWxpbWluYXIgZWwgJHttb2RlbH0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgTE9HIEZVTkNUSU9OIChDUkVBVEUgTE9HKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBzYXZlTG9nIChjb2RlLCBtb2RlbCwgb2xkT2JqZWN0LCBvYmplY3QsIGRlc2NyaXB0aW9uLCB1c2VyKSB7XG5cbiAgY29uc3QgcHJldk9iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9sZE9iamVjdClcbiAgY29uc3QgbmV3T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxuICBjb25zdCB1c2VyMiA9IEpTT04uc3RyaW5naWZ5KHVzZXIpXG5cbiAgY29uc3QgaXRlbSA9IHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBwcmV2X29iamVjdDogcHJldk9iamVjdCxcbiAgICBuZXdfb2JqZWN0OiBuZXdPYmplY3QsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHVzZXI6IHVzZXIyXG4gIH1cblxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS9sb2dzLycsXG4gICAgZGF0YTogaXRlbVxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgIH1cbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBMb2cgZGVsIG1vdmltaWVudG8sIEVSUk9SOiAke2Vycn0uYClcbiAgICB9KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFVWCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBORVhUIE5VTUVSSUMgQ09ERVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHROdW1lcmljQ29kZShlbGVtZW50cywgZmllbGQpIHtcblxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG5cbiAgICBsZXQga2V5cyA9IGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnRbZmllbGRdKVxuXG4gICAga2V5cyA9IGtleXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgY29uc3QgbWF4ID0ga2V5cy5wb3AoKVxuICAgIGNvbnN0IG5leHQgPSBwYXJzZUludChtYXgpICsgMVxuICAgIHJldHVybiBuZXh0LnRvU3RyaW5nKClcblxuICB9XG5cbiAgcmV0dXJuIDFcblxufVxuXG4vLyBORVhUIFBSRVZJT1VTIElURU1TXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV4dFByZXZJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGNvZGUgPSBrd2FyZ3MuY29kZVxuICBjb25zdCBpdGVtcyA9IGt3YXJncy5pdGVtc1xuICBjb25zdCBjb2RlRmllbGQgPSBrd2FyZ3MuY29kZUZpZWxkXG4gIGxldCBwcmV2aW91cyA9IDBcbiAgbGV0IG5leHQgPSAwXG5cbiAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhW2NvZGVGaWVsZF0gLSBiW2NvZGVGaWVsZF1cbiAgfSlcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtW2NvZGVGaWVsZF0gPT0gY29kZSkge1xuICAgICAgbmV4dCA9IGluZGV4ICsgMVxuICAgICAgcHJldmlvdXMgPSBpbmRleCAtIDFcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5leHRDb2RlID0gaXRlbXNbbmV4dF0gPyBpdGVtc1tuZXh0XVtjb2RlRmllbGRdIDogaXRlbXNbMF1bY29kZUZpZWxkXVxuICBjb25zdCBwcmV2Q29kZSA9IGl0ZW1zW3ByZXZpb3VzXSA/IGl0ZW1zW3ByZXZpb3VzXVtjb2RlRmllbGRdIDogaXRlbXMucG9wKClbY29kZUZpZWxkXVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiB7bmV4dDogbmV4dENvZGUsIHByZXZpb3VzOiBwcmV2Q29kZX19KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC91dGlscy9hcGkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi91dGlscy9mb3JtYXRNb25leS5qcydcblxuLy8gUkVEVVggUFJPVklERVJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluL21haW4uanN4J1xuXG4vLyBTVE9SRVxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnXG5cbndpbmRvdy5hbGVydGlmeSA9IGFsZXJ0aWZ5XG5mb3JtYXRNb25leSgpXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPE1haW4gLz5cbiAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJykpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7ZmVjdGhQcm9maWxlfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG4vLyBDT01QT05FTlRTXG5cbmltcG9ydCBUb3BCYXIgZnJvbSAnLi4vbGF5b3V0L3RvcEJhci90b3BCYXIuanN4J1xuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3gnXG5pbXBvcnQgRmV0Y2hpbmcgZnJvbSAnLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3gnXG5cbi8vIGltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoaW5nOiBzdG9yZS5mZXRjaGluZy5mZXRjaGluZyxcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZlY3RoUHJvZmlsZSgpKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZmV0Y2hpbmcgPSB0aGlzLnByb3BzLmZldGNoaW5nID8gPEZldGNoaW5nIC8+IDogJydcbiAgICBjb25zdCBtYWluQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdtYWluQ29udGFpbmVyJyA6ICdtYWluQ29udGFpbmVyIHNpZGVIaWRkZW4nXG4gICAgY29uc3QgY29udGVudCA9IDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICAgIDxUb3BCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRhaW5lci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtyb3V0ZXN9XG4gICAgICAgICAgICB7ZmV0Y2hpbmd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aFByb2ZpbGUoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvcHJvZmlsZS8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhJc0FkbWluTG9ja2VkKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycHJlZnMvYWRtaW5fX2lzX2FkbWluX2xvY2tlZC8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gUm91dGVzIENvbXBvbmVudHNcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcbmltcG9ydCBTYWxlIGZyb20gJy4uL3NhbGUvbWFpbi5qc3gnXG5cbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XG5cbiAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zYWxlcycgY29tcG9uZW50PXtIb21lfSAvPlxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cblxuPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdIT01FX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdNYWluIGhlaWdoMTAwJz5cbiAgICAgIEhPTUVcbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2hvbWUvaG9tZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQvY29udGVudC5qc3gnXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi9hc2lkZS9hc2lkZS5qc3gnXG5pbXBvcnQgU2VhcmNoUHJvZHVjdCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3gnXG5pbXBvcnQgU2VhcmNoQ2xpZW50IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4J1xuaW1wb3J0IFBheVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCdcbmltcG9ydCBJbnZvaWNlUGFuZWwgZnJvbSAnLi4vZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTQUxFX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzYWxlJz5cbiAgICAgIDxDb250ZW50IC8+XG4gICAgICA8QXNpZGUgLz5cblxuICAgICAgPFNlYXJjaFByb2R1Y3QgLz5cbiAgICAgIDxTZWFyY2hDbGllbnQgLz5cbiAgICAgIDxQYXlQYW5lbCAvPlxuICAgICAgPEludm9pY2VQYW5lbCAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3gnXG5pbXBvcnQgQ2FydCBmcm9tICcuLi8uLi9nZW5lcmFsL2NhcnQvY2FydC5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgdG9nZ2xlV2lkdGggKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQgZnVsbFdpZHRoJyA6ICdzYWxlLWNvbnRlbnQnXG4gICAgY29uc3QgY2FydENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LWNhcnQnIDogJ3NhbGUtY29udGVudC1jYXJ0IGZ1bGxIZWlnaHQnXG4gICAgY29uc3QgdG90YWxDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC10b3RhbCcgOiAnc2FsZS1jb250ZW50LXRvdGFsIGNvbGxhcHNlZCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWNvbnRlbnQtcHJvZHVjdCcgPlxuICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FydENsYXNzfSA+XG4gICAgICAgIDxDYXJ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b3RhbENsYXNzfSA+XG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tbGVmdCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGlucHV0VmFsOiBzdG9yZS5wcm9kdWN0cy5pbnB1dFZhbCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvZGVJbnB1dC5mb2N1cygpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgcHJvZHVjdEt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvcHJvZHVjdHMnLFxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRJdGVtRGlzcGF0Y2gocHJvZHVjdEt3YXJncykpXG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RDbGljaygpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdQUk9EVUNUX1NIT1dfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMF0gLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcbiAgICAgICAgbGV0IHF0eSA9IGV2LnRhcmdldC52YWx1ZS5zcGxpdCgnKicpWzFdXG4gICAgICAgIHF0eSA9IChpc05hTihxdHkpKVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogcGFyc2VGbG9hdChxdHkpIC8vIGlmIG5vIHF0eSBzZXRzIHRvIDFcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxuICAgICAgICAvLyAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogMH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBwcm9kdWN0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8Yj5Qcm9kdWN0bzo8L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlJz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcmNvZGUnIC8+XG4gICAgICAgICAgPGlucHV0IGlkPSdwcm9kdWN0Q29kZUlucHV0RmllbGQnIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb2RlSW5wdXQgPSBpbnB1dFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIGVsIEPDs2RpZ28gZGVsIFByb2R1Y3RvJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlLWlucHV0IG1vdXNldHJhcCBmb3JtLWNvbnRyb2wgaW5wdXQtbGcnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaFByb2R1Y3RDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtc2VhcmNoJz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanNcbi8vIG1vZHVsZSBpZCA9IDYwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSAnLi9jYXJ0SXRlbXMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlcyxcbiAgICAvLyBwcm9kdWN0U2VhcmNocGFuZWxWaXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2InLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcblxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgdXNlTG90ZSA9IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZ1xuICAgIC8vICAgPyB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcuY2FydEl0ZW1Vc2VMb3RlXG4gICAgLy8gICA6IGZhbHNlXG5cbiAgICAvLyBjb25zdCBsb3RlRmllbGQgPSB1c2VMb3RlXG4gICAgLy8gICA/IDx0aD5Mb3RlPC90aD5cbiAgICAvLyAgIDogPHRoIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NhcnQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkFydDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWl2YSc+XG4gICAgICAgICAgPGg1PklWPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsIElWSTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYXJ0SXRlbXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlVG90YWxzLCByZW1vdmVGcm9tQ2FydH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIGNhcnRJdGVtQWN0aXZlOiBzdG9yZS5jYXJ0LmNhcnRJdGVtQWN0aXZlXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE9uIGNvbXBvbmVudCB1cGRhdGUgKFRoZSBjYXJ0IGhhcyBiZWVuIG1vZGlmaWVkKSBjYWxscyB0aGUgdXBkYXRlIHRvdGFscyBtZXRob2QgaW4gYWN0aW9ucyBmaWxlLlxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVRvdGFscyh0aGlzLnByb3BzLmluQ2FydCkpXG5cbiAgICAvLyBBdXRvIFNjcm9sbCBUbyBlbmQgb2YgY29udGFpbmVyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJvZHknKVxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcblxuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wcykge1xuICAvLyAgIGlmICh0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlICE9IG5leHRQcm9wcy5jYXJ0SXRlbUFjdGl2ZSkge1xuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrcGx1cycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdHJ1ZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtmJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7X3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkuZm9jdXMoKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kKy0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrKicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9fdGhpcyA9IF90aGlzXG4gICAgICBhbGVydGlmeS5wcm9tcHQoYE51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvYCwgJ0luZ3Jlc2UgbGEgbnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG8nLCAnJ1xuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcbiAgICAgICAgICBfX3RoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5Q29kZShfX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIHZhbHVlLCBfX3RoaXMucHJvcHMuaW5DYXJ0LFxuICAgICAgICAgICAgX190aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCBfX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICAgICAgfVxuICAgICAgICAsIGZ1bmN0aW9uKCkge30pXG4gICAgICAgIC5zZXQoJ2xhYmVscycsIHtvazogJ09rJywgY2FuY2VsOiAnQ2FuY2VsYXInfSlcbiAgICB9KVxuICB9XG5cbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1EaXNjb3VudCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgZGlzY291bnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICAgIH1cblxuICB9XG5cbiAgZGlzY291bnRJbnB1dE9uQmx1cihjb2RlLCBldikge1xuXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICB9XG5cbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IHF0eSA9IHBhcnNlRmxvYXQoKGV2LnRhcmdldC52YWx1ZSkpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHkoY29kZSwgcXR5LCB0aGlzLnByb3BzLmluQ2FydCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKVxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgY29uc29sZS5sb2coJ1ByZXNzc3NzJywgZXYua2V5KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICAgIH1cblxuICB9XG5cbiAgbG90ZUlucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICB9XG5cbiAgc2V0Q2FydEl0ZW1BY3RpdmUoY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuXG4gIH1cblxuICByZW1vdmVJdGVtKGNvZGUsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcblxuICB9XG5cbiAgZmllbGRGb2N1cyhldikge1xuICAgIGV2LnRhcmdldC5zZWxlY3QoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBpdGVtcyBpbiBjYXJ0IHVzaW5nIHRhYmxlIHJvd3NcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zMiA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcbiAgICAgICAgPyAnY2FydC1hY3RpdmVSb3cgY2FydC1ib2R5LWl0ZW0nXG4gICAgICAgIDogJ2NhcnQtYm9keS1pdGVtJ1xuXG4gICAgICBjb25zdCByZW1vdmVJY29uQ2xhc3MgPSB0aGlzLnByb3BzLmRpc2FibGVkID8gJ3JlbW92ZUl0ZW1JY29uIGRpc2FibGVkJyA6ICdyZW1vdmVJdGVtSWNvbidcblxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICAgID8gaXRlbS5wcm9kdWN0LnRheGVzXG4gICAgICAgIDogMFxuXG4gICAgICBjb25zdCBxdHlGaWVsZCA9IDxpbnB1dFxuICAgICAgICBpZD17YHF0eSR7aXRlbS5wcm9kdWN0LmNvZGV9YH1cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnF0eUlucHV0Q2hhbmdlLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XG4gICAgICAvPlxuXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxuICAgICAgICA/IDxpbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGlzY291bnRJbnB1dE9uQmx1ci5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhcnNlRmxvYXQoaXRlbS5kaXNjb3VudCl9XG4gICAgICAgIC8+XG4gICAgICAgIDogPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAvPlxuXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzfVxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRDYXJ0SXRlbUFjdGl2ZS5iaW5kKHRoaXMsIGl0ZW0ucHJvZHVjdC5jb2RlKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkaWdvPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXF0eSc+XG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cbiAgICAgICAgICB7cXR5RmllbGR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgICDigqEge3BhcnNlRmxvYXQoaXRlbS5wcmljZVRvVXNlKS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGlzY291bnQnPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1pdmEnPlxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxuICAgICAgICAgIHt0YXhlczF9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxuICAgICAgICAgIDxoNT5Ub3RhbDwvaDU+XG4gICAgICAgICAgICDigqEge2l0ZW0udG90YWxXaXRoSXYuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlbW92ZUljb25DbGFzc30+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgPC9kaXY+XG4gICAgfSlcblxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cbiAgICAvLyAgIHtpdGVtc31cbiAgICAvLyA8L3Rib2R5PlxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9J2NhcnQtYm9keScgY2xhc3NOYW1lPSdjYXJ0LWJvZHknPlxuICAgICAge2l0ZW1zMn1cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0b3RhbHMgdGhlIGNhcnQgc3RvcmUgaXRlbSwgZ2VuZXJhdGVzIG5ldyB2YWx1ZXMgYWNjb3JkaW5nIGNhcnQgaXRlbSBvYmplY3RzLCB0aGVuIHB1c2ggdGhlIHRvIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG90YWxzKGluQ2FydCkge1xuXG4gIGxldCBzdWJ0b3RhbCA9IDBcbiAgbGV0IHN1YlRvdGFsTm9EaXNjb3VudCA9IDBcbiAgbGV0IHRheGVzID0gMFxuICBsZXQgdG90YWwgPSAwXG4gIGxldCBkaXNjb3VudFRvdGFsID0gMFxuXG4gIC8vIGZvciBFYWNoIGVsZW1lbnQgYWRkcyB0aGUgdmFsdWVzIHRvIGdldCB0b3RhbHNcbiAgaW5DYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgIHN1YlRvdGFsTm9EaXNjb3VudCA9IHN1YlRvdGFsTm9EaXNjb3VudCArIGl0ZW0uc3ViVG90YWxOb0Rpc2NvdW50XG5cbiAgICBzdWJ0b3RhbCA9IHN1YnRvdGFsICsgaXRlbS5zdWJ0b3RhbFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICBjb25zdCB0YXhlc0NhbGMyID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMyKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczIgLyAxMDApXG4gICAgICA6IDBcblxuICAgIHRheGVzID0gdGF4ZXMgKyB0YXhlc0NhbGMgKyB0YXhlc0NhbGMyXG5cbiAgICBkaXNjb3VudFRvdGFsID0gZGlzY291bnRUb3RhbCArIGl0ZW0uZGlzY291bnRDdXJyZW5jeSAvLyB0aGlzIGlzIHRoZSB2YWx1ZSBpbiBjdXJyZW5jeVxuXG4gIH0pXG4gIC8vIFRPRE8gQ29uZmlnIGZvciByb3VuZCBvciBub3RcbiAgLy8gdG90YWwgPSBNYXRoLnJvdW5kKHN1YnRvdGFsICsgdGF4ZXMpXG4gIHRvdGFsID0gc3VidG90YWwgKyB0YXhlc1xuICAvLyByZXR1cnMgYSBkaXNwYXRjaCB3aXRoIGEgcGF5bG9hZCBvZiB0aGUgb2J0YWluZWQgdmFsdWVzXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUX1RPVEFMUycsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc3VidG90YWw6IHN1YnRvdGFsLFxuICAgICAgdGF4ZXM6IHRheGVzLFxuICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgZGlzY291bnRUb3RhbDogZGlzY291bnRUb3RhbCxcbiAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgfVxuICB9XG59XG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaXRlbXNJbkNhcnQsIGNvZGUpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdSRU1PVkVfRlJPTV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IGluZGV4SW5DYXJ0XG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCdcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCdcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9ucy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGFzaWRlQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWFzaWRlIGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZSdcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZS1jb250ZW50IGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZS1jb250ZW50J1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDb250YWluZXJDbGFzc30+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3ctY29udGFpbmVyJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxDbGllbnQgLz5cbiAgICAgICAgPFRvdGFscyAvPlxuICAgICAgICA8QnV0dG9ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJ1dHRvbnMgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS10b3RhbCcgPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL2FzaWRlL2FzaWRlLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Y2xpZW50U2VsZWN0ZWQsIHNlYXJjaENsaWVudCwgdXNlclNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpJ1xuLy8gaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi91dGlscy9yZWNlaXZhYmxlJ1xuLy8gaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9tYWluL3Byb2R1Y3QvYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzLFxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2Vyczogc3RvcmUuY2xpZW50cy51c2VycyxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQgIT0gdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCkge1xuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXG5cbiAgICAgIGlmICghbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLnNhbGVMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA/IG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50IDogMFxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQobmV4dFByb3BzLmNhcnQsIGRpc2NvdW50LCBuZXh0UHJvcHMuY2xpZW50KSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG5cbiAgICAgICAgLy8gU0VUUyBWQUxVRSBPRiBERUZBVUxUIERJU0NPVU5UIFRPIEZJRUxEIE9SIDBcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBkZWJ0ID0gZ2V0Q2xpZW50RGVidChuZXh0UHJvcHMuY2xpZW50Ll9pZCwgbmV4dFByb3BzLm1vdmVtZW50cylcbiAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfQ0xJRU5UX0RFQlQnLCBwYXlsb2FkOiBkZWJ0fSlcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9DTElFTlRTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9jbGllbnRzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB9XG5cbiAgfVxuXG4gIHVzZXJTZWxlY3QoZXYpIHtcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVzZXJTZWxlY3RlZChfaWQsIHRoaXMucHJvcHMudXNlcnMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHVzZXJVblNlbGVjdChldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdVU0VSX0NMRUFSJywgcGF5bG9hZDogJyd9KSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHNlYXJjaENsaWVudENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQoKSlcblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyBTRUxFQ1QyIERBVEFcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXG4gICAgICA/IGAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubmFtZX0gJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmxhc3RfbmFtZX1gXG4gICAgICA6ICdDbGllbnRlIENvbnRhZG8nXG5cbiAgICAvLyBjb25zdCBjcmVkaXRJY29uID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5oYXNfY3JlZGl0KVxuICAgIC8vICAgPyAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWltZyc+XG4gICAgICAgIDxpbWcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YSc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPkNsaWVudGUgOjwvaDM+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Tm9tYnJlIDo8L2gzPlxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7cmVjYWxjQ2FydH0gZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzY291bnRWYWw6IDBcbiAgICB9XG4gIH1cblxuICBzaG93SW52b2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXG4gICAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcbiAgICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gcGFyc2VGbG9hdChldi50YXJnZXQudmFsdWUpXG4gICAgICAgIDogMFxuICAgIH1cblxuICB9XG5cbiAgaW5wdXRPbkJsdXIoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXG4gICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXG4gICAgaWYgKGRpc2NvdW50IDw9IG1heERpc2NvdW50KSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgfVxuXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvdGFscyc+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICdwYWRkaW5nVG9wJzogJzAnLFxuICAgICAgICAnbWFyZ2luVG9wJzogJzAnXG4gICAgICB9fSBjbGFzc05hbWU9J2JnLXdoaXRlIHJpZ2h0LWl0ZW0nPlxuICAgICAgICB7LyogPHNwYW4+XG4gICAgICAgICAgPGI+VG90YWxlczo8L2I+XG4gICAgICAgIDwvc3Bhbj48YnIgLz4gKi99XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRvdGFscy10YWJsZSc+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+U3ViLVRvdGFsOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMzclJ1xuICAgICAgICAgICAgICB9fT5EZXNjdWVudG8gJTwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9J2Rpc2NvdW50RmllbGQnXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmlucHV0T25CbHVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMzdweCcsXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAgMCAwIDEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgICdib3JkZXInOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NhbGVfZ2xvYmFsX2Rpc2NvdW50X2lucHV0IGZvcm0tY29udHJvbCcgLz5cbiAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPklWOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7LyogPHRoIG9uQ2xpY2s9e3RoaXMuc2hvd0ludm9pY2VQYW5lbC5iaW5kKHRoaXMpfT5Ub3RhbDo8L3RoPiAqL31cbiAgICAgICAgICAgICAgPHRoPlRvdGFsOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICAvLyByZXR1cm4ge2Rpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2hvd1BheVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93SW5vaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93U2FsZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1NBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BSRVNBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIG5ld1NhbGUoKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NhbGVzL3BvcydcbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnTkVXX1NBTEUnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgPyA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5zaG93SW5vaWNlUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICAgIEZhY3R1cmFcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbW9uZXknIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3U2FsZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgICAgTnVldmEgVmVudGFcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCcgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA6ICcnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBidXR0b25zJz5cblxuICAgICAgey8qIDxzcGFuPlxuICAgICAgICA8Yj5QYWdvOjxiciAvPjwvYj5cbiAgICAgIDwvc3Bhbj4gKi99XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1BheVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgQ29icmFyXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dTYWxlUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBWZW50YXMgZGVsIGTDrWFcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1saXN0JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93UHJlc2FsZXNQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIFByZS1WZW50YXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1saXN0JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge2J1dHRvbnN9XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3NhbGUvYnV0dG9ucy9idXR0b25zLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBhbmVsQ2xpY2soZXYpIHtcblxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgfVxuXG4gIH1cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgdmlzaWJsZU9yTm90ID0gKHRoaXMucHJvcHMudmlzaWJsZSlcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCBpcy12aXNpYmxlJ1xuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0J1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2NkLXBhbmVsLWhlYWRlcic+XG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgUHJvZHVjdG88L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZWFyY2hQcm9kdWN0fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uKClcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RBY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hQcm9kdWN0KHRoaXMucHJvcHMuc2VhcmNoVmFsdWUsIHRoaXMucHJvcHMucHJvZHVjdHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgRGVzY3JpcGNpw7NuOjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICAgIH19IGlkPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdwcm9kdWN0LXNlYXJjaC1idG4nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtwcm9kdWN0U2VsZWN0ZWRUYWJsZSwgaGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnByb2R1Y3RzTWF0Y2hlZCwgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2VsZWN0UHJvZHVjdChjb2RlLCBldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICByZXR1cm4gPHRyIG9uRG91YmxlQ2xpY2s9e3RoaXMuc2VsZWN0UHJvZHVjdC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmNvZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uc2VsbHByaWNlfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgIH0pXG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgIDx0YWJsZSBpZD0ncHJvZHVjdGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UHJlY2lvPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J3Byb2R1Y3Qtc2VhcmNoLXRhYmxlLWJvZHknPlxuICAgICAgICAgICAgICB7cHJvZHVjdHN9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hDbGllbnRzLnZpc2libGV9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIENsaWVudGU8L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaENsaWVudH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hDbGllbnRBY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoQ2xpZW50QWN0aW9uKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQodmFsLCB0aGlzLnByb3BzLmNsaWVudHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2xpZW50LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBOb21icmU6PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J2NsaWVudC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdjbGllbnQtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y2xpZW50U2VsZWN0ZWR9IGZyb20gJy4uLy4uL2NsaWVudHMvYWN0aW9ucy5qcydcbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaENsaWVudHMuY2xpZW50c01hdGNoZWQsIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNlbGVjdENsaWVudChjb2RlLCBldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xpZW50U2VsZWN0ZWQoY29kZSwgdGhpcy5wcm9wcy5jbGllbnRzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgY29uc3QgaGFzQ3JlZGl0ID0gKGl0ZW0uaGFzX2NyZWRpdClcbiAgICAgICAgPyAnU0knXG4gICAgICAgIDogJ05PJ1xuXG4gICAgICByZXR1cm4gPHRyIG9uRG91YmxlQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpZW50LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uY29kZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtgJHtpdGVtLm5hbWV9ICR7aXRlbS5sYXN0X25hbWV9YH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtoYXNDcmVkaXR9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAwXG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgfSlcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgPHRhYmxlIGlkPSdjbGllbnRlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkNyw6lkaXRvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+U2FsZG88L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nY2xpZW50LXNlYXJjaC10YWJsZS1ib2R5Jz5cbiAgICAgICAgICAgICAge2NsaWVudHN9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFBheU1ldGhvZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCdcbmltcG9ydCBQYXlDYXNoIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYWhzLmpzeCdcbmltcG9ydCBQYXlDYXJkIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYXJkLmpzeCdcbmltcG9ydCBQYXlDcmVkaXQgZnJvbSAnLi9jb21wb25lbnRzL3BheUNyZWRpdC5qc3gnXG5pbXBvcnQgUGF5T3RoZXIgZnJvbSAnLi9jb21wb25lbnRzL3BheU90aGVyLmpzeCdcbmltcG9ydCBQYXlTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5wYXkuaXNWaXNpYmxlLCBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5UGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ3BheS1wYW5lbCBpcy12aXNpYmxlJ1xuICAgICAgOiAncGF5LXBhbmVsJ1xuXG4gICAgbGV0IHBheU1ldGhvZCA9ICcnXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhc2ggLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDQVJEJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhcmQgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDUkVESVQnOlxuICAgICAge1xuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q3JlZGl0IC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vICBjYXNlXG5cbiAgICAgIGNhc2UgJ09USEVSJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheU90aGVyIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgIH0gLy8gc3dpdGNoXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgICBSZWdpc3RyYXIgUGFnb1xuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGF5TWV0aG9kIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1hcmVhLWNvbnRhaW5lcic+XG5cbiAgICAgICAgICB7cGF5TWV0aG9kfVxuXG4gICAgICAgICAgPFBheVNpZGVCYXIgLz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNsaWNrQ2hhbmdlUGF5TWV0aG9kKG1ldGhvZCwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDSEFOR0VfUEFZX01FVEhPRCcsIHBheWxvYWQ6IG1ldGhvZH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QnPlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ1JFRElUJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVESVQnXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cbiAgICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11c2VycycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdPVEhFUicpfSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ09USEVSJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhc2hBbW91bnR9IG9uQ2hhbmdlPXt0aGlzLnBheUFtb3VudENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXJkQXV0aCwgdXBkYXRlU3RvcmVDYXJkRGlnaXRzfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjYXJkQXV0aDogc3RvcmUucGF5LmNhcmRBdXRoLCBjYXJkRGlnaXRzOiBzdG9yZS5wYXkuY2FyZERpZ2l0c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYXlDYXJkQXV0aENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkQXV0aChldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcGF5Q2FyZERpZ2l0c0NoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkRGlnaXRzKGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPjQgRElHSVRPUzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmREaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmREaWdpdHNDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+QVVUT1JJWkFDScOTTjo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmRBdXRofSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkQXV0aENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLCBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDcmVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQgLSB0aGlzLnByb3BzLmRlYnRcbiAgICBjb25zdCBjbGllbnRMaW1pdCA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke3RoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuICAgIGNvbnN0IGNsaWVudEF2YWlsYWJsZSA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke2F2YWlsYWJsZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+TMONTUlURTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRMaW1pdH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RElTUE9OSUJMRTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRBdmFpbGFibGV9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+IDxzcGFuPk90cm88L3NwYW4+IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICAgIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZCxcbiAgICBwYXk6IHN0b3JlLnBheSxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXG4gICAgLy8gc2FsZUlkOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlSWQsXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNhdmVCdG4oKSB7XG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXG4gICAgY29uc3Qgc2FsZXMgPSBbXVxuXG4gICAgY29uc3Qgc29ydGVkU2FsZXMgPSBzYWxlcy5sZW5ndGggPiAxID8gc2FsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuaWQgPCBiLmlkKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9XG4gICAgICBpZiAoYS5pZCA+IGIuaWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0pIDogc2FsZXNcblxuICAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZFNhbGVzLmxlbmd0aCA+IDAgPyBzb3J0ZWRTYWxlc1swXS5pZCArIDEgOiAxXG5cbiAgICBjb25zdCBzYWxlID0ge1xuICAgICAgaWQ6IG5leHRJZCxcbiAgICAgIGRvY1R5cGU6ICdTQUxFJyxcbiAgICAgIGNhcnQ6IHRoaXMucHJvcHMuY2FydCxcbiAgICAgIGNsaWVudDogdGhpcy5wcm9wcy5jbGllbnQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXG4gICAgICBwYXk6IHRoaXMucHJvcHMucGF5LFxuICAgICAgY3JlYXRlZDogbmV3IERhdGUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHtcbiAgICAgIHNhbGUucGF5LmRlYnQgPSB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXG4gICAgICBzYWxlLnBheS5wYXllZCA9IGZhbHNlXG4gICAgfVxuICAgIC8vIGNvbnN0IGt3YXJncyA9IHtcbiAgICAvLyAgIGRiOiAnc2FsZXMnLFxuICAgIC8vICAgbW92ZW1lbnRzOiB0aGlzLnByb3BzLm1vdmVtZW50cyxcbiAgICAvLyAgIGl0ZW06IHNhbGUsXG4gICAgLy8gICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcbiAgICAvLyAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgdmVudGEsIGludGVudGUgZGUgbnVldm8uJ1xuICAgIC8vIH1cblxuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgIE1vdXNldHJhcC5yZXNldCgpXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBjaGFuZ2UgPSAwXG4gICAgbGV0IHBheUJ1dHRvbkNsYXNzID0gJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbClcbiAgICBjb25zdCBjYXNoID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KVxuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgY2hhbmdlID0gY2FzaCAtIHRvdGFsXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBjaGFuZ2UgPj0gMClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnByb3BzLnBheS5jYXJkQXV0aFxuICAgICAgICBjb25zdCBkaWdpdHMgPSB0aGlzLnByb3BzLnBheS5jYXJkRGlnaXRzXG4gICAgICAgIGNoYW5nZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMudG90YWwpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBhdXRoICYmIGRpZ2l0cylcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0NSRURJVCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5kZWJ0KVxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgdG90YWwgPD0gYXZhaWxhYmxlICYmIHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXQpXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1zaWRlLWJhcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPlBhZ288L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5cbiAgICAgICAgICBUT1RBTCA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge3RoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlZVRUxUTyA6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICDigqEge2NoYW5nZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnNhdmVCdG4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtwYXlCdXR0b25DbGFzc30+XG4gICAgICAgICAgUGFnYXJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEZ1bGxJbnZvaWNlIGZyb20gJy4uL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCdcbmltcG9ydCBDb21wYWN0SW52b2ljZSBmcm9tICcuLi9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUuaW52b2ljZS5pc1Zpc2libGUsIGlzRnVsbDogc3RvcmUuaW52b2ljZS5pc0Z1bGx9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgIC8vIHByaW50RGl2KCdmdWxsLWludm9pY2UtcHJpbnQnKVxuICB9XG5cbiAgdG9nZ2xlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHRvZ2dsZUludm9pY2UoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICBwcmludFBhbmVsKCkge1xuICAgIHdpbmRvdy5wcmludERpdignaW52b2ljZS1wcmludCcpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdpbnZvaWNlLXBhbmVsIGlzLXZpc2libGUnXG4gICAgICA6ICdpbnZvaWNlLXBhbmVsJ1xuICAgIGNvbnN0IGlzRnVsbENsYXNzID0gKHRoaXMucHJvcHMuaXNGdWxsKVxuICAgICAgPyAnJ1xuICAgICAgOiAnIGNvbXBhY3QtaW52b2ljZS1vbidcblxuICAgIGNvbnN0IGNvbXBvbmVudFRvTW91bnQgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/IDxGdWxsSW52b2ljZSAvPlxuICAgICAgOiA8Q29tcGFjdEludm9pY2UgLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLW1haW4nICsgaXNGdWxsQ2xhc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZS1wYW5lbC1oZWFkZXInPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBGYWN0dXJhIGRlIFZlbnRhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucHJpbnRQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXByaW50JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIHsvKiA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUludm9pY2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1jb2ZmZWUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0naW52b2ljZS1wcmludCcgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1jb250YWluZXInICsgaXNGdWxsQ2xhc3N9PlxuXG4gICAgICAgICAge2NvbXBvbmVudFRvTW91bnR9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qc3gnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLmpzeCdcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFscy5qc3gnXG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9jb21wb25lbnRzL25vdGVzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEludm9pY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlJz5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPERhdGEgLz5cbiAgICAgIDxUYWJsZSAvPlxuICAgICAgPFRvdGFscyAvPlxuICAgICAgPE5vdGVzIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIGRlZmF1bHREZXNpbmc6IHN0b3JlLmludm9pY2UuZGVmYXVsdERlc2luZyxcbiAgICB1c2VyQ29tcGFueUNvbmZpZzoge30sXG4gICAgZGVmYXVsdENvbXBhbnlDb25maWc6IHt9XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBDcmVkaXQgb3IgY2FzaFxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSB0aGlzLnByb3BzLnNhbGUucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJyA/ICdGYWN0dXJhIGRlIGNyw6lkaXRvJyA6ICdGYWN0dXJhIGRlIGNvbnRhZG8nXG4gICAgLy8gTE9HT1xuICAgIGNvbnN0IGxvZ28gPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmxvZ28gfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5sb2dvIHx8ICcnXG4gICAgY29uc3QgbG9nb1dpZHRoID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5sb2dvV2lkdGggfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5sb2dvV2lkdGggfHwgJzEzMHB4J1xuICAgIGNvbnN0IGxvZ29VcmwgPSB0aGlzLnByb3BzLmRlZmF1bHREZXNpbmcgPyBgL2ltZy9sb2dvcy8ke2xvZ299YCA6ICcvaW1nL2xvZ29zL2Nob2NvcHJpc21hLmpwZydcblxuICAgIC8vIEJJTEwgREFUQVxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmRlZmF1bHREZXNpbmdcbiAgICAgID8gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnJ1xuICAgICAgOiAnQ0hPQ09QUklTTUEnXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmxlZ2FsTmFtZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmxlZ2FsTmFtZSB8fCAnJ1xuXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcudGVsZXBob25lcyB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLnRlbGVwaG9uZXMgfHwgJydcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcblxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuaWRUeXBlIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuaWRUeXBlIHx8ICcnXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmlkIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuaWQgfHwgJydcbiAgICBjb25zdCBpZFRleHQgPSBpZFR5cGUgPT0gJ0pVUklESScgPyBgQ8OpZCBKdXJpZCBObyAke2lkfWAgOiBgQ8OpZCBObyAke2lkfWBcblxuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlcic+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItbG9nbyc+XG4gICAgICAgICAgPGltZyBzdHlsZT17eyd3aWR0aCc6IGAke2xvZ29XaWR0aH1gfX0gc3JjPXtsb2dvVXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItaW5mbyc+XG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuYWRkcmVzczEgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5hZGRyZXNzMSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5hZGRyZXNzMiB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmFkZHJlc3MyIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvdW50cnkgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5lbWFpbCB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmVtYWlsIHx8ICcnfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1zZXBhcmF0b3InPlxuICAgICAgICA8c3BhbiAvPlxuXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0nY2xpZW50QWRyZXNzJz5ESVJFQ0NJw5NOOiB7c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiAnJ1xuICAgIGNvbnN0IGlkID0gc2FsZS5pZCA/IHNhbGUuaWQgOiAnMDAwMDEnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nY2xpZW50LXRhYmxlJz5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DTElFTlRFOjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5OLiBkZSBmYWN0dXJhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+eygnMDAwMDAnICsgaWQpLnNsaWNlKC01KX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnQgPSAodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICAgID8gPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPnt0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50fTwvdGQ+XG4gICAgICA6ICcnXG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlVGF4ZXMpXG4gICAgICAgID8gYEdgXG4gICAgICAgIDogYEVgXG5cbiAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIHtpdGVtLmRpc2NvdW50fTwvdGQ+XG4gICAgICAgIHtnbG9iYWxEaXNjb3VudH1cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHsvKiA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAge2l0ZW0ubG90ZX1cbiAgICAgICAgPC90ZD4gKi99XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgfSlcblxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50Um93ID0gdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCA/IDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMyICU8L3RoPiA6ICcnXG5cbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkRlc2NyaXBjacOzbjwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkNhbnRpZGFkPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UC5VPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+RGVzJTwvdGg+XG4gICAgICAgICAge2dsb2JhbERpc2NvdW50Um93fVxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5JVjwvdGg+XG4gICAgICAgICAgey8qIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5Mb3RlPC90aD4gKi99XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlByZWNpbzwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0nJz5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC90Ym9keT5cblxuICAgIDwvdGFibGU+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdG90YWxzJz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cbiAgICAgIDxoMT5Ob3Rhczo8L2gxPlxuXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qc3gnXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLmpzeCdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFscy5qc3gnXG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9jb21wb25lbnRzL25vdGVzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFjdEludm9pY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlJz5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPERhdGEgLz5cbiAgICAgIDxUYWJsZSAvPlxuICAgICAgPFRvdGFscyAvPlxuICAgICAgPE5vdGVzIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIGRlZmF1bHREZXNpbmc6IHN0b3JlLmludm9pY2UuZGVmYXVsdERlc2luZyxcbiAgICB1c2VyQ29tcGFueUNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJDb21wYW55LFxuICAgIGRlZmF1bHRDb21wYW55Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdENvbXBhbnl9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuZGVmYXVsdERlc2luZ1xuICAgICAgPyB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICcnXG4gICAgICA6ICdDSE9DT1BSSVNNQSdcbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcubGVnYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcubGVnYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy50ZWxlcGhvbmVzIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5pZFR5cGUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5pZFR5cGUgfHwgJydcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuaWQgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5pZCB8fCAnJ1xuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxuXG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWV9PC9oMj5cbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuYWRkcmVzczEgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5hZGRyZXNzMSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5hZGRyZXNzMiB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmFkZHJlc3MyIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvdW50cnkgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gLz5cblxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cblxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlVGF4ZXMpXG4gICAgICAgID8gYEdgXG4gICAgICAgIDogYEVgXG5cbiAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucXR5fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgfSlcblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkNhbnQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+QXJ0aWN1bG88L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5JVjwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlRvdGFsPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgY2xhc3NOYW1lPScnPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3Rib2R5PlxuXG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3NhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmV9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcbiAgICBjb25zdCBkYXRlID0gc2FsZS5jcmVhdGVkXG4gICAgICA/IGAkeygnMCcgKyBzYWxlLmNyZWF0ZWQuZ2V0RGF0ZSgpKS5zbGljZSgtMil9L1xuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXG4gICAgICAke3NhbGUuY3JlYXRlZC5nZXRGdWxsWWVhcigpfWBcbiAgICAgIDogJzAxLzAxLzE5NzAnXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcbiAgICBjb25zdCBpZCA9IHNhbGUuaWQgPyBzYWxlLmlkIDogJzAwMDEnXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRoPkRpcmVjOjwvdGg+XG4gICAgICAgIDx0ZD57c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiAnJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtZGF0YSc+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2RhdGVudW0tdGFibGUnPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlY2hhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GYWN0dXJhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+eygnMDAwMDAnICsgaWQpLnNsaWNlKC01KX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q2xpZW50ZTo8L3RoPlxuICAgICAgICAgICAgPHRkPntjbGllbnR9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAge2NsaWVudEFkcmVzc31cblxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10b3RhbHMnPlxuXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzLWNvbnRlbnQnPlxuICAgICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuaW1wb3J0IHt0b2dnbGVMYXlvdXR9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHN0b3JlLmxheW91dC50b3BCYXJUb2dnbGVWaXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIG1lbnVDbGljayhldikge1xuXG4gICAgdG9nZ2xlTGF5b3V0KClcblxuICB9XG5cbiAgbG9nT3V0Q2xpY2soKSB7XG5cbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXG4gICAgYWxlcnRpZnkuY29uZmlybSgnQ2VycmFyIFNlc2nDs24nLCBgwr9EZXNlYSBDZXJyYXIgc3Ugc2VzacOzbiBlbiBlbCBzaXN0ZW1hP2AsIGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dvdXQnKVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KS5zZXQoJ2xhYmVscycsIHtcbiAgICAgIG9rOiAnQ2VycmFyJyxcbiAgICAgIGNhbmNlbDogJ1Blcm1hbmVjZXInXG4gICAgfSlcbiAgfVxuXG4gIGhvbWVDbGljaygpIHtcbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXG4gICAgYWxlcnRpZnkuY29uZmlybSgnSXIgYWwgbWVuw7ogUHJpbmNpcGFsJywgYMK/RGVzZWEgaXIgYWwgbWVuw7ogcHJpbmNpcGFsP2AsIGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nKVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KS5zZXQoJ2xhYmVscycsIHtcbiAgICAgIG9rOiAnSXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gdGhpcy5wcm9wcy50b3BCYXJUb2dnbGVWaXNpYmxlXG4gICAgICA/ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UgdmlzaWJsZScgOiAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3BCYXInPlxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm1lbnVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfSA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYmFycycgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcEJhci1yaWdodCc+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5ob21lQ2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItaXRlbSB0b3BCYXItaXRlbS1jb25maWcnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtaG9tZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5sb2dPdXRDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1sb2dvdXQnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtcG93ZXItb2ZmJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4IiwiXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5b3V0KCkge1xuXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpXG4gIGNvbnN0IHNpZGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVNZW51JylcblxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3B1bGxlZCcpKSB7XG5cbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgc2lkZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxuICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25maWdCYXIoKSB7XG5cbiAgY29uc3QgY29uZmlnQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0JhcicpXG5cbiAgaWYgKGNvbmZpZ0Jhci5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC12aXNpYmxlJykpIHtcblxuICAgIGNvbmZpZ0Jhci5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmlzaWJsZScpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbmZpZ0Jhci5jbGFzc0xpc3QuYWRkKCdub3QtdmlzaWJsZScpXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci5qc3gnXG4vLyBpbXBvcnQgQ29tcG9zZWRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9jb21wb3NlZC5qc3gnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJylcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIC8vIGNvbnN0IGNoaWxkUHJvZHVjdHMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRleHQ6ICdQcm9kdWN0b3MnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWdpZnQnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnRmFtaWxpYXMnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWxpc3QnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RkZXBhcnRtZW50cydcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgdGV4dDogJ1N1Yi1GYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtb3V0ZGVudCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHN1YmRlcGFydG1lbnRzJ1xuICAgIC8vICAgfVxuICAgIC8vIF1cblxuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xuICAgIGNvbnN0IHNpZGVNZW51Q2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdzaWRlTWVudScgOiAnc2lkZU1lbnUgaGlkZGVuQnlBcHAnXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9e3NpZGVNZW51Q2xhc3N9PlxuXG4gICAgICB7LyogPGgzIGNsYXNzTmFtZT0nc2lkZU1lbnUtaGVhZGVyJz57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPiAqL31cbiAgICAgIDxVc2VyIC8+XG5cbiAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXdyYXBwZXIgY29sLXhzLTEyJz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZU1lbnUtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XG4gICAgICAgICAgICAgIEluaWNpbzwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgTnVldmEgVmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3Byb2Zvcm1hJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBDb3RpemFjacOzbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJlc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cbiAgICAgICAgICAgICAgTnVldmEgUHJldmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS1zZWFyY2ggY29sLXhzLTEyJz5cblxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdCdXNjYXIuLi4nIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RvcmUudXNlci51c2VyLFxuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgYXZhdGFyID0gdGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhciA/IGAvbWVkaWEvJHt0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyfWAgOiAnL21lZGlhL2RlZmF1bHQvcHJvZmlsZS5qcGcnXG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy51c2VyLmZpcnN0X25hbWVcbiAgICAgID8gdGhpcy5wcm9wcy51c2VyLmZpcnN0X25hbWVcbiAgICAgIDogKHRoaXMucHJvcHMudXNlci51c2VybmFtZVxuICAgICAgICA/IHRoaXMucHJvcHMudXNlci51c2VybmFtZSA6ICcnKVxuXG4gICAgY29uc3QgbGFzdE5hbWUgPSB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lID8gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA6ICcnXG5cbiAgICBsZXQgZnVsbE5hbWUgPSBgJHtuYW1lfSAke2xhc3ROYW1lfWBcbiAgICBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMjIpIGZ1bGxOYW1lID0gZnVsbE5hbWUuc3Vic3RyaW5nKDAsIDIyKVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyIGNvbC14cy0xMiAnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1hdmF0YXInPlxuICAgICAgICA8aW1nIHNyYz17YXZhdGFyfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLW5hbWUnPlxuICAgICAgICA8c3Bhbj57ZnVsbE5hbWV9PC9zcGFuPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUnXG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rLCBsb2dnZXIpXG5cbi8vIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaylcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3N0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBmZXRjaGluZyBmcm9tICcuLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMnXG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vbGF5b3V0L3JlZHVjZXIuanMnXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIvcmVkdWNlci5qcydcbmltcG9ydCBjYXJ0IGZyb20gJy4vZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMnXG5pbXBvcnQgY2xpZW50cyBmcm9tICcuL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMnXG5pbXBvcnQgc2FsZSBmcm9tICcuL3NhbGUvcmVkdWNlci5qcydcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzL3JlZHVjZXIuanMnXG5pbXBvcnQgc2VhcmNoQ2xpZW50cyBmcm9tICcuL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcydcbmltcG9ydCBzZWFyY2hQcm9kdWN0cyBmcm9tICcuL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMnXG5pbXBvcnQgcGF5IGZyb20gJy4vZ2VuZXJhbC9wYXkvcmVkdWNlci5qcydcbmltcG9ydCBpbnZvaWNlIGZyb20gJy4vZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMnXG5pbXBvcnQgc2FsZXMgZnJvbSAnLi9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZldGNoaW5nLFxuICBsYXlvdXQsXG4gIHVzZXIsXG4gIGNhcnQsXG4gIGNsaWVudHMsXG4gIHByb2R1Y3RzLFxuICBzYWxlLFxuICBtZXNzYWdlcyxcbiAgc2VhcmNoQ2xpZW50cyxcbiAgc2VhcmNoUHJvZHVjdHMsXG4gIHBheSxcbiAgaW52b2ljZSxcbiAgc2FsZXNcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0FMRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSE9NRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB1c2VyOiB7fSxcbiAgcHJvZmlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHByb2ZpbGU6IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBjcmVhdGVkOiAnJyxcbiAgdXBkYXRlZDogJycsXG4gIGlzTnVsbDogZmFsc2UsXG4gIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICBjYXJ0SXRlbXM6IFtdLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IDAsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICBjYXJ0VGF4ZXM6IDAsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gIGNhcnRUb3RhbDogMCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcbiAgZGlzY291bnRUb3RhbDogMCwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgY2FydEl0ZW1BY3RpdmU6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogJycsXG4gICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICBpc051bGw6IGZhbHNlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0FERF9UT19DQVJUJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IHRydWUsXG4gICAgICAgIGNhcnRJdGVtczogW1xuICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIC4uLnN0YXRlLmNhcnRJdGVtcyxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdSRU1PVkVfRlJPTV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuXG4gICAgICBuZXdDYXJ0LnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSlcblxuICAgICAgY29uc3QgaXRlbXNMZWZ0SW5DYXJ0ID0gKG5ld0NhcnQubGVuZ3RoID4gMClcbiAgICAgIC8vID8gdHJ1ZVxuICAgICAgLy8gOiBmYWxzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBpdGVtc0xlZnRJbkNhcnQsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlQnOlxuICAgIHtcblxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XSA9IGFjdGlvbi5wYXlsb2FkLml0ZW1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF1bJ2xvdGUnXSA9IGFjdGlvbi5wYXlsb2FkLmxvdGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfVE9UQUxTJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLnN1YnRvdGFsLFxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLnRheGVzLFxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5kaXNjb3VudFRvdGFsLFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5zdWJUb3RhbE5vRGlzY291bnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9HTE9CQUxfRElTQ09VTlQnOlxuICAgIHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVQTEFDRV9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9MSU5FX0RJU0NPVU5UJzpcbiAgICB7XG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdLmRpc2NvdW50ID0gYWN0aW9uLnBheWxvYWQudmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxuICAgICAgICBpc051bGw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuaXNOdWxsLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUb3RhbCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiXG5jb25zdCBjbGllbnRTZWxlY3RlZE1vZGVsID0ge1xuICBjb2RlOiAnMDAwMCcsXG4gIGNsaWVudFR5cGU6ICdHRU5FUkFMJyxcbiAgY3JlYXRlZDogJycsXG4gIGNyZWRpdF9kYXlzOiAwLFxuICBjcmVkaXRfbGltaXQ6IDAsXG4gIGRvY1R5cGU6ICdDTElFTlQnLFxuICBoYXNfY3JlZGl0OiBmYWxzZSxcbiAgaWQ6ICcwMDAwMDAwMDAnLFxuICBsYXN0X25hbWU6ICdDb250YWRvJyxcbiAgbmFtZTogJ0NsaWVudGUnLFxuICB1cGRhdGVkOiAnJyxcbiAgc2FsZUxvYWRlZDogZmFsc2UsXG4gIF9pZDogMFxufVxuXG5jb25zdCB1c2VyU2VsZWN0ZWRNb2RlbCA9IHtcbiAgdXNlcjogJzAwMDAnLFxuICBuYW1lOiAnJyxcbiAgbGFzdF9uYW1lOiAnJyxcbiAgaWQ6ICcwMDAwJyxcbiAgX2lkOiAwXG59XG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXG4gIGNsaWVudHNGZWN0ZWQ6IGZhbHNlLFxuICBjbGllbnRzRmV0Y2hFcnJvcjogJycsXG4gIGNsaWVudHM6IFtdLFxuICB1c2VyczogW10sXG4gIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxuICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsLFxuICBjbGllbnRTZWxlY3RlZERlYnQ6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0NMRUFSX0FMTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGNsaWVudHNGZXRjaEVycm9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmVjdGVkOiB0cnVlLFxuICAgICAgICBjbGllbnRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX1NFTEVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgLy8gKioqKioqKiogVVNFUlMgKioqKioqKipcbiAgICBjYXNlICdGRVRDSF9VU0VSU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1VTRVJTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVNFUl9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVNFUl9DTEVBUic6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG5cbiAgICBjYXNlICdTRVRfQ0xJRU5UX0RFQlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZERlYnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudHMgPSBzdGF0ZS5jbGllbnRzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBjbGllbnRzOiBjbGllbnRzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnQsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfVFJVRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfRkFMU0UnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IGZhbHNlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgcHJvZHVjdHM6IHt9LFxuICBpbnB1dFZhbDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IHt9XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5wdXRWYWw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaW5wdXRWYWw6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0c1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgcHJvZHVjdHM6IHByb2R1Y3RzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZ1bGxXaWR0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1RPR0dMRV9GVUxMX1dJRFRIJzpcbiAgICB7XG4gICAgICBjb25zdCB3aWR0aCA9ICFzdGF0ZS5mdWxsV2lkdGhcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmdWxsV2lkdGg6IHdpZHRoXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgbWVzc2FnZXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdQUk9EVUNUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgUFJPRFVDVE8hJywgJ0VsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05PVF9GT1VORF9TQUxFJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBMQSBWRU5UQSEnLCBgTGEgdmVudGEgIyR7YWN0aW9uLnBheWxvYWR9IG5vIGV4aXN0ZSwgbyBoYXkgdW4gcHJvYmxlbWEgcGFyYSBjYXJnYXJsYSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8uYClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIScsICdIdWJvIHVuIGVycm9yIGFsIGVuY29udHJhciBlbCBwcm9kdWN0byBlbiBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgYWdyZWdhZG9zLHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIFBST0RVQ1RPUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIHByb2R1Y3RvcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBDTElFTlRFIScsICdFbCBjbGllbnRlIGNvbiBlbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBDTElFTlRFUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIGNsaWVudGVzLCBwb3IgZmF2b3IgaW50ZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGNsaWVudHNNYXRjaGVkOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnOlxuICAgIHtcbiAgICAgIGNvbnN0IHZpc2libGUgPSAhc3RhdGUudmlzaWJsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHZpc2libGVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TSE9XX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9ISURFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfU0VBUkNIX0ZBSUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHByb2R1Y3RzTWF0Y2hlZDogW10sXG4gIHNlYXJjaFZhbHVlOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX0hJREVfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfRkFJTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgaXNWaXNpYmxlOiB0cnVlLFxuICBwYXlNZXRob2Q6ICdDQVNIJyxcbiAgY2FzaEFtb3VudDogMCxcbiAgY2FyZERpZ2l0czogJycsXG4gIGNhcmRBdXRoOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19QQVlfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUEFZX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0hBTkdFX1BBWV9NRVRIT0QnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdVUERBVEVfQ0FTSF9BTU9VTlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXNoQW1vdW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0FVVEgnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ0FSRF9ESUdJVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheU1ldGhvZDogYWN0aW9uLnBheWxvYWQucGF5LnBheU1ldGhvZCxcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWQucGF5LmNhc2hBbW91bnQsXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkRGlnaXRzLFxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWQucGF5LmNhcmRBdXRoXG4gICAgICB9XG4gICAgfVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2UsXG4gIGlzRnVsbDogdHJ1ZSxcbiAgZGVmYXVsdERlc2luZzogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgZnVsbE9yTm90ID0gc3RhdGUuaXNGdWxsXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGdWxsOiAhZnVsbE9yTm90XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnOlxuICAgIHtcbiAgICAgIGNvbnN0IGRlc2luZ09yTm90ID0gc3RhdGUuZGVmYXVsdERlc2luZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlZmF1bHREZXNpbmc6ICFkZXNpbmdPck5vdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwiY29uc3Qgc2FsZUFjdGl2ZU1vZGVsID0ge1xuICBpZDogMCxcbiAgZG9jVHlwZTogJ1NBTEUnLFxuICBjYXJ0OiB7fSxcbiAgY2xpZW50OiAnJyxcbiAgcGF5OiB7fSxcbiAgY3JlYXRlZDogbmV3IERhdGUoKVxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBzYWxlczogW10sXG4gIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgc2FsZUFjdGl2ZUlkOiAwLFxuICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzYWxlQWN0aXZlSWQ6IDAsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19TQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlczogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUkVTQUxFX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRk9STUFfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlcyA9IHN0YXRlLnNhbGVzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzYWxlczogc2FsZXNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxuICAgICAgc2FsZS5jbGllbnQgPSBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cbiAgICBOdW1iZXIucHJvdG90eXBlLmZvcm1hdE1vbmV5ID0gZnVuY3Rpb24oYywgZCwgdCl7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgICBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxuICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmZXRjaW5nLWNvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvdmVuZG9yL2xvYWRlcnMvRWNsaXBzZS5naWYnfSAvPlxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hJTkdfU1RBUlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENISU5HX0RPTkUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjQ2FydChpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxuXG4gICAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtLnByb2R1Y3QsIGl0ZW0ucXR5LCBpdGVtLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcbiAgICBuZXdJdGVtLnRvdGFsV2l0aEl2ID0gZGF0YS50b3RhbFdpdGhJdlxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcbiAgICBuZXdJdGVtLnByaWNlVG9Vc2UgPSBkYXRhLnByaWNlVG9Vc2VcblxuICAgIHJldHVybiBuZXdJdGVtXG5cbiAgfSlcblxuICByZXR1cm4ge3R5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBuZXdDYXJ0fVxuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb3RlOiBsb3RlTnVtLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XG5cbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXG5cbiAgY29uc3QgcHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDogY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSkge1xuXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChjYXJ0ID0+IGNhcnQucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgY2FydC5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcblxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcbiAgaWYgKHBlckxpbmUpIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxuICAgICAgPyB7XG4gICAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgcXR5LFxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gcmVzXG5cbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuXG4vLyBjYWxjdWxhdGVzIHRoZSBzdWJ0b3RhbCBieSBsaW5lLCBhbHNvIHRoZSB0b3RhbCB3aXRoIGl2IGluY2x1ZGVkLCB0aGUgZGlzY291bnQgaW4gY3VycmVuY3kgZm9ybWF0XG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBwcmljZSA9IHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KVxuXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxuXG4gIGNvbnN0IGl2MSA9IChwcm9kdWN0LnVzZV90YXhlcylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjJcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcblxuICByZXR1cm4ge1xuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGlzY291bnRDdXJyZW5jeSxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBwcmljZVRvVXNlOiBwcmljZVxuICB9XG5cbn1cblxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xuXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIHJldHVybiB7XG4gICAgdXVpZDogdXVpZCxcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgcXR5OiBuZXdRdHksXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxuICAgIGxvdGU6IGl0ZW1zSW5DYXJ0W2luZGV4XS5sb3RlLFxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxuZnVuY3Rpb24gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpIHtcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnUFJPRFVDVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHZhbCwgcHJvZHVjdHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvZHVjdC5kZXNjcmlwdGlvbi50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChwcm9kdWN0KVxuICAgIH1cblxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkge1xuXG4gIHJldHVybiB7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogY29kZX1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBjb25zb2xlLmxvZyhjbGllbnRzKVxuXG4gIGNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfRkFJTCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9