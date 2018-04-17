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

var _api = __webpack_require__(4);

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
            'Registrar',
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
        var cart = JSON.parse(action.payload.cart);
        var client = JSON.parse(action.payload.client);
        var user = JSON.parse(action.payload.user);
        var pay = JSON.parse(action.payload.pay);

        var sale = {
          cart: cart,
          client: client,
          user: user,
          pay: pay,
          created: new Date(action.payload.created),
          id: action.payload.bill_number
        };
        return _extends({}, state, {
          saleActive: sale
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvaG9tZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9zYWxlL21haW4uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L3BheVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNsaWVudFNlbGVjdGVkIiwidXNlclNlbGVjdGVkIiwic2VhcmNoQ2xpZW50IiwiY29kZSIsImNsaWVudHMiLCJmaW5kSW5kZXgiLCJjbGllbnQiLCJyZXMiLCJ0eXBlIiwicGF5bG9hZCIsIl9pZCIsInVzZXJzIiwidXNlciIsInVwZGF0ZVN0b3JlQ2FzaEFtb3VudCIsInVwZGF0ZVN0b3JlQ2FyZEF1dGgiLCJ1cGRhdGVTdG9yZUNhcmREaWdpdHMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwibnVtYmVyIiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImxvYWRHbG9iYWxDb25maWciLCJnZXROZXh0TnVtZXJpY0NvZGUiLCJzZXROZXh0UHJldkl0ZW0iLCJkZWZhdWx0cyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJrd2FyZ3MiLCJ1cmwiLCJzdWNjZXNzVHlwZSIsImVycm9yVHlwZSIsImRpc3BhdGNoIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiYWxlcnQiLCJzdWNjZXNzVHlwZTIiLCJsb29rVXBWYWx1ZSIsImxvb2tVcEZpZWxkIiwiaGlzdG9yeSIsInJlZGlyZWN0VXJsIiwibGVuZ3RoIiwibW9kZWxOYW1lIiwibG9va1VwTmFtZSIsImRpc3BhdGNoVHlwZSIsImRpc3BhdGNoVHlwZTIiLCJkaXNwYXRjaEVycm9yVHlwZSIsInB1c2giLCJpdGVtIiwibG9nQ29kZSIsIml0ZW1PbGQiLCJsb2dNb2RlbCIsImxvZ0Rlc2NyaXB0aW9uIiwiaXNTYWxlIiwibWV0aG9kIiwic3VjZXNzTWVzc2FnZSIsInNldCIsInNhdmVMb2ciLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJrd2FyZ3MyIiwiaXRlbTIiLCJ1cmwyIiwibG9nQ29kZTIiLCJpdGVtT2xkMiIsImxvZ01vZGVsMiIsImxvZ0Rlc2NyaXB0aW9uMiIsIm1vZGVsIiwic2VjdGlvbiIsIm5hbWUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbmZpZyIsImZpbHRlciIsImZvckVhY2giLCJ2YWx1ZSIsIm9sZE9iamVjdCIsIm9iamVjdCIsImRlc2NyaXB0aW9uIiwicHJldk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPYmplY3QiLCJ1c2VyMiIsInByZXZfb2JqZWN0IiwibmV3X29iamVjdCIsImVsZW1lbnRzIiwiZmllbGQiLCJrZXlzIiwibWFwIiwiZWxlbWVudCIsInNvcnQiLCJhIiwiYiIsIm1heCIsInBvcCIsIm5leHQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiaXRlbXMiLCJjb2RlRmllbGQiLCJwcmV2aW91cyIsImluZGV4IiwibmV4dENvZGUiLCJwcmV2Q29kZSIsIndpbmRvdyIsImFsZXJ0aWZ5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW4iLCJzdG9yZSIsImZldGNoaW5nIiwic2lkZU1lbnVWaXNpYmxlIiwibGF5b3V0IiwicHJvcHMiLCJtYWluQ29udGFpbmVyQ2xhc3MiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZmVjdGhQcm9maWxlIiwiZmVjdGhJc0FkbWluTG9ja2VkIiwiZmllbGRzIiwicHJvZmlsZSIsInJvdXRlcyIsIkhvbWUiLCJTYWxlIiwiZnVsbFdpZHRoIiwic2FsZSIsInRvdGFsIiwiY2FydCIsImNhcnRUb3RhbCIsImNvbnRlbnRDbGFzcyIsImNhcnRDbGFzcyIsInRvdGFsQ2xhc3MiLCJmb3JtYXRNb25leSIsInRvZ2dsZVdpZHRoIiwiYmluZCIsIlByb2R1Y3QiLCJwcm9kdWN0cyIsIml0ZW1zSW5DYXJ0IiwiY2FydEl0ZW1zIiwiaW5wdXRWYWwiLCJnbG9iYWxEaXNjb3VudCIsImNvZGVJbnB1dCIsImZvY3VzIiwicHJvZHVjdEt3YXJncyIsImV2Iiwia2V5IiwidGFyZ2V0Iiwic3BsaXQiLCJxdHkiLCJpc05hTiIsImRlZmF1bHRDb25maWciLCJ1c2VyQ29uZmlnIiwiZGlzYWJsZWQiLCJpbnB1dEtleVByZXNzIiwiaW5wdXQiLCJzZWFyY2hQcm9kdWN0Q2xpY2siLCJNb3VzZXRyYXAiLCJyZXF1aXJlIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsImRpc2NvdW50IiwibG90ZSIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwicHJvZHVjdCIsImJhcmNvZGUiLCJyZW1vdmVJY29uQ2xhc3MiLCJ0YXhlczEiLCJ1c2VfdGF4ZXMiLCJ0YXhlcyIsInF0eUZpZWxkIiwicXR5SW5wdXRDaGFuZ2UiLCJ1dWlkIiwiZmllbGRGb2N1cyIsInF0eUlucHV0S2V5UHJlc3MiLCJkaXNjb3VudEZpZWxkIiwic2FsZUxvYWRlZCIsImRpc2NvdW50SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50SW5wdXRPbkJsdXIiLCJzZXRDYXJ0SXRlbUFjdGl2ZSIsInByaWNlVG9Vc2UiLCJ0b3RhbFdpdGhJdiIsInJlbW92ZUl0ZW0iLCJ1cGRhdGVUb3RhbHMiLCJyZW1vdmVGcm9tQ2FydCIsInN1YnRvdGFsIiwic3ViVG90YWxOb0Rpc2NvdW50IiwiZGlzY291bnRUb3RhbCIsInRheGVzQ2FsYyIsInRheGVzQ2FsYzIiLCJ1c2VfdGF4ZXMyIiwidGF4ZXMyIiwiZGlzY291bnRDdXJyZW5jeSIsImluZGV4SW5DYXJ0IiwiQXNpZGUiLCJhc2lkZUNsYXNzIiwiYXNpZGVDb250YWluZXJDbGFzcyIsIkNsaWVudHMiLCJkZWJ0IiwiY2xpZW50U2VsZWN0ZWREZWJ0IiwibmV4dFByb3BzIiwiZGVmYXVsdERpc2NvdW50IiwiY2xpZW50S3dhcmdzIiwiY2xpZW50VG9TaG93IiwibGFzdF9uYW1lIiwic2VhcmNoQ2xpZW50Q2xpY2siLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50Iiwic3RhdGUiLCJkaXNjb3VudFZhbCIsIm1heERpc2NvdW50IiwiaW5wdXRPbkJsdXIiLCJCdXR0b25zIiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9ucyIsInNob3dJbm9pY2VQYW5lbCIsIm5ld1NhbGUiLCJzaG93UGF5UGFuZWwiLCJzaG93U2FsZVBhbmVsIiwic2hvd1ByZXNhbGVzUGFuZWwiLCJzZWFyY2hQcm9kdWN0cyIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZpc2libGVPck5vdCIsInBhbmVsQ2xpY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hWYWwiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwicmVzdWx0c1RhYmxlIiwibWF0Y2hlcyIsInByb2R1Y3RzTWF0Y2hlZCIsInNlbGVjdFByb2R1Y3QiLCJzZWxscHJpY2UiLCJzZWFyY2hDbGllbnRzIiwic2VhcmNoQ2xpZW50QWN0aW9uIiwidmFsIiwiY2xpZW50c01hdGNoZWQiLCJoYXNDcmVkaXQiLCJoYXNfY3JlZGl0Iiwic2VsZWN0Q2xpZW50IiwiUGF5UGFuZWwiLCJwYW5lbFZpc2libGUiLCJwYXkiLCJpc1Zpc2libGUiLCJwYXlNZXRob2QiLCJoaWRlUGFuZWwiLCJQYXlNZXRob2QiLCJjbGlja0NoYW5nZVBheU1ldGhvZCIsIlBheUNhc2giLCJjYXNoQW1vdW50IiwicGF5QW1vdW50Q2hhbmdlZCIsIlBheUNhcmQiLCJjYXJkQXV0aCIsImNhcmREaWdpdHMiLCJwYXlDYXJkRGlnaXRzQ2hhbmdlZCIsInBheUNhcmRBdXRoQ2hhbmdlZCIsIlBheUNyZWRpdCIsImF2YWlsYWJsZSIsImNyZWRpdF9saW1pdCIsImNsaWVudExpbWl0IiwiY2xpZW50QXZhaWxhYmxlIiwiUGF5T3RoZXIiLCJQYXlTaWRlQmFyIiwicGF5ZWQiLCJyZXNldCIsImNoYW5nZSIsInBheUJ1dHRvbkNsYXNzIiwiY2FzaCIsImF1dGgiLCJkaWdpdHMiLCJzYXZlQnRuIiwiSW52b2ljZVBhbmVsIiwiaW52b2ljZSIsImlzRnVsbCIsInByaW50RGl2IiwiaXNGdWxsQ2xhc3MiLCJjb21wb25lbnRUb01vdW50IiwidG9nZ2xlUGFuZWwiLCJwcmludFBhbmVsIiwiRnVsbEludm9pY2UiLCJIZWFkZXIiLCJzYWxlcyIsInNhbGVBY3RpdmUiLCJjb21wYW55IiwiaGVhZGVydGV4dCIsImxvZ28iLCJsb2dvV2lkdGgiLCJsb2dvVXJsIiwiaGVhZGVyTmFtZSIsImNvbWVyY2lhbF9uYW1lIiwiaGVhZGVyTmFtZTIiLCJsZWdhbF9uYW1lIiwidGVscyIsInRlbGVwaG9uZXMiLCJ0ZWxzVGV4dCIsImlkVHlwZSIsImlkIiwiaWRUZXh0IiwidG9VcHBlckNhc2UiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY291bnRyeSIsImVtYWlsIiwiRGF0YSIsImRhdGUiLCJjcmVhdGVkIiwiZ2V0RGF0ZSIsInNsaWNlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImNsaWVudEFkcmVzcyIsImFkcmVzcyIsIlRhYmxlIiwidGF4ZXNUZXh0IiwiZ2xvYmFsRGlzY291bnRSb3ciLCJOb3RlcyIsIkNvbXBhY3RJbnZvaWNlIiwiY29tZXJjaWFsTmFtZSIsImxlZ2FsTmFtZSIsInVzZVRheGVzIiwiVG9wQmFyIiwidG9wQmFyVG9nZ2xlVmlzaWJsZSIsImNvbmZpcm0iLCJyZXBsYWNlIiwiYnV0dG9uQ2xhc3MiLCJtZW51Q2xpY2siLCJob21lQ2xpY2siLCJsb2dPdXRDbGljayIsInRvZ2dsZUxheW91dCIsInRvZ2dsZUNvbmZpZ0JhciIsIm1haW5Db250YWluZXIiLCJzaWRlTWVudSIsInJlbW92ZSIsImFkZCIsImNvbmZpZ0JhciIsIlNpZGVNZW51Iiwic2lkZU1lbnVDbGFzcyIsIlNlYXJjaCIsIlVzZXIiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwidXNlcm5hbWUiLCJsYXN0TmFtZSIsImZ1bGxOYW1lIiwic3Vic3RyaW5nIiwibWlkZGxld2FyZSIsIm1lc3NhZ2VzIiwicmVkdWNlciIsInN0YXRlQ29uc3QiLCJhY3Rpb24iLCJlZGl0YWJsZSIsInVwZGF0ZWQiLCJpc051bGwiLCJjYXJ0SGFzSXRlbXMiLCJjYXJ0U3VidG90YWwiLCJuZXdDYXJ0Iiwic3BsaWNlIiwiaXRlbXNMZWZ0SW5DYXJ0IiwiY2xpZW50U2VsZWN0ZWRNb2RlbCIsImNsaWVudFR5cGUiLCJjcmVkaXRfZGF5cyIsImRvY1R5cGUiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiZGVmYXVsdERlc2luZyIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwiRGF0ZSIsImNvbXBsZXRlZCIsInNhbGVBY3RpdmVJZCIsImlzU2FsZXNQYW5lbFZpc2libGUiLCJpc1ByZXNhbGVzUGFuZWxWaXNpYmxlIiwicGFyc2UiLCJiaWxsX251bWJlciIsIk51bWJlciIsInByb3RvdHlwZSIsImMiLCJkIiwidCIsIm4iLCJNYXRoIiwiYWJzIiwidW5kZWZpbmVkIiwicyIsImkiLCJTdHJpbmciLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsIkZldGNoaW5nIiwicmVjYWxjQ2FydCIsInVwZGF0ZUl0ZW1EaXNjb3VudCIsInVwZGF0ZUl0ZW1Mb3RlIiwicHJvZHVjdFNlbGVjdGVkIiwidXBkYXRlUXR5IiwidXBkYXRlUXR5Q29kZSIsImFkZFN1Yk9uZSIsInV1aWR2MSIsIm5ld0l0ZW0iLCJjYWNsU3VidG90YWwiLCJ1cGRhdGVkQ2FydEl0ZW0iLCJsb3RlTnVtIiwicGVyTGluZSIsImNoZWNrSWZJbkNhcnQiLCJxdHlOdW0iLCJzdWJPckFkZCIsImRhdGFOZXdQcm9kIiwicHJvZHVjdERpc2NvdW50IiwicHJpY2UiLCJzdWJUb3RhbCIsIml2MSIsIml2MiIsImRpc2NvdW50Q3VycmVuY3lJbkxpbmUiLCJkaXNjb3VudEN1cnJlbmN5R2xvYmFsIiwibmV3UXR5IiwidXNlUHJpY2UyIiwicHJpY2UyIiwidXNlUHJpY2UzIiwicHJpY2UzIiwic2VhcmNoUHJvZHVjdCIsInByb2R1Y3RTZWxlY3RlZFRhYmxlIiwidGV4dCIsIm1hdGNocyIsImNvbnRyb2wiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUNnQkEsYyxHQUFBQSxjO1FBb0JBQyxZLEdBQUFBLFk7UUFvQkFDLFksR0FBQUEsWTtBQXhDVCxTQUFTRixjQUFULENBQXdCRyxJQUF4QixFQUE4QkMsT0FBOUIsRUFBdUM7O0FBRTVDLE1BQU1KLGlCQUFpQkksUUFBUUMsU0FBUixDQUFrQjtBQUFBLFdBQVVDLE9BQU9ILElBQVAsSUFBZUEsSUFBekI7QUFBQSxHQUFsQixDQUF2QixDQUY0QyxDQUU0Qjs7QUFFeEUsTUFBTUksTUFBT1Asa0JBQWtCLENBQUMsQ0FBcEIsR0FBdUI7QUFDL0I7QUFDQVEsVUFBTSxrQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQURRLEdBS1I7QUFDQUQsVUFBTSxpQkFETjtBQUVBQyxhQUFTO0FBQ1BILGNBQVFGLFFBQVFKLGNBQVI7QUFERDtBQUZULEdBTEo7O0FBWUEsU0FBT08sR0FBUDtBQUVEOztBQUVNLFNBQVNOLFlBQVQsQ0FBc0JTLEdBQXRCLEVBQTJCQyxLQUEzQixFQUFrQzs7QUFFdkMsTUFBTVYsZUFBZVUsTUFBTU4sU0FBTixDQUFnQjtBQUFBLFdBQVFPLEtBQUtGLEdBQUwsSUFBWUEsR0FBcEI7QUFBQSxHQUFoQixDQUFyQixDQUZ1QyxDQUV1Qjs7QUFFOUQsTUFBTUgsTUFBT04sZ0JBQWdCLENBQUMsQ0FBbEIsR0FBcUI7QUFDN0I7QUFDQU8sVUFBTSxnQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQURRLEdBS1I7QUFDQUQsVUFBTSxlQUROO0FBRUFDLGFBQVM7QUFDUEcsWUFBTUQsTUFBTVYsWUFBTjtBQURDO0FBRlQsR0FMSjs7QUFZQSxTQUFPTSxHQUFQO0FBRUQ7O0FBRU0sU0FBU0wsWUFBVCxHQUF3Qjs7QUFFN0IsU0FBTyxFQUFDTSxNQUFNLG1CQUFQLEVBQTRCQyxTQUFTLENBQUMsQ0FBdEMsRUFBUDtBQUNEOzs7Ozs7OztnQ0EzQ2VULGM7O2dDQW9CQUMsWTs7Z0NBb0JBQyxZOzs7Ozs7Ozs7Ozs7Ozs7O1FDbkNBVyxxQixHQUFBQSxxQjtRQWVBQyxtQixHQUFBQSxtQjtRQWVBQyxxQixHQUFBQSxxQjtBQXBDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxTQUFTRixxQkFBVCxDQUErQkcsTUFBL0IsRUFBdUM7O0FBRTVDLE1BQU1ULE1BQU9TLE1BQUQsR0FBUztBQUNqQjtBQUNBUixVQUFNLG9CQUROO0FBRUFDLGFBQVNRLFdBQVdELE1BQVg7QUFGVCxHQURRLEdBS1I7QUFDQVIsVUFBTSxvQkFETjtBQUVBQyxhQUFTO0FBRlQsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRU0sU0FBU08sbUJBQVQsQ0FBNkJJLE1BQTdCLEVBQXFDOztBQUUxQyxNQUFNWCxNQUFPVyxNQUFELEdBQVM7QUFDakI7QUFDQVYsVUFBTSxrQkFETjtBQUVBQyxhQUFTUztBQUZULEdBRFEsR0FLUjtBQUNBVixVQUFNLGtCQUROO0FBRUFDLGFBQVM7QUFGVCxHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7QUFFTSxTQUFTUSxxQkFBVCxDQUErQkcsTUFBL0IsRUFBdUM7O0FBRTVDLE1BQU1YLE1BQU9XLE1BQUQsR0FBUztBQUNqQjtBQUNBVixVQUFNLG9CQUROO0FBRUFDLGFBQVNTO0FBRlQsR0FEUSxHQUtSO0FBQ0FWLFVBQU0sb0JBRE47QUFFQUMsYUFBUztBQUZULEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7O2dDQWxJZ0JNLHFCOztnQ0FlQUMsbUI7O2dDQWVBQyxxQjs7Ozs7Ozs7OztBQ3BDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFROztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsYUFBYTtBQUNoQyxtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLFNBQVM7QUFDNUIsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsa0JBQWtCOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsU0FBUztBQUM1QixtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsU0FBUztBQUN4QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQUE7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FDOS9CZUksZSxHQUFBQSxlO1FBdUJBQyxxQixHQUFBQSxxQjtRQXdCQUMsYSxHQUFBQSxhO1FBaUJBQyxPLEdBQUFBLE87UUE0Q0FDLFEsR0FBQUEsUTtRQThDQUMsVSxHQUFBQSxVO1FBeUNBQyxTLEdBQUFBLFM7UUE0Q0FDLFUsR0FBQUEsVTtRQXlFQUMsVSxHQUFBQSxVO1FBcUNBQyxnQixHQUFBQSxnQjtRQXNFQUMsa0IsR0FBQUEsa0I7UUFrQkFDLGUsR0FBQUEsZTs7QUF2Y2hCOzs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFUQTtBQUNBO0FBQ0E7QUFTQSxnQkFBTUMsUUFBTixDQUFlQyxjQUFmLEdBQWdDLFdBQWhDO0FBQ0EsZ0JBQU1ELFFBQU4sQ0FBZUUsY0FBZixHQUFnQyxhQUFoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU2QsZUFBVCxDQUF5QmUsTUFBekIsRUFBaUM7O0FBRXRDLE1BQU1DLE1BQU1ELE9BQU9DLEdBQW5CO0FBQ0EsTUFBTUMsY0FBY0YsT0FBT0UsV0FBM0I7QUFDQSxNQUFNQyxZQUFZSCxPQUFPRyxTQUF6Qjs7QUFFQSxTQUFPLFVBQVNDLFFBQVQsRUFBbUI7QUFDeEIsb0JBQU1DLEdBQU4sQ0FBVUosR0FBVixFQUFlSyxJQUFmLENBQW9CLFVBQVNDLFFBQVQsRUFBbUI7QUFDckNILGVBQVMsRUFBQzlCLE1BQU00QixXQUFQLEVBQW9CM0IsU0FBU2dDLFNBQVNDLElBQXRDLEVBQVQ7QUFDQUosZUFBUyxFQUFDOUIsTUFBTSxlQUFQLEVBQXdCQyxTQUFTLEVBQWpDLEVBQVQ7QUFDRCxLQUhELEVBR0drQyxLQUhILENBR1MsVUFBU0MsS0FBVCxFQUFnQjtBQUN2QkMsY0FBUUMsR0FBUixDQUFZRixNQUFNSCxRQUFOLENBQWVNLE1BQTNCO0FBQ0E7QUFDQSxVQUFJSCxNQUFNSCxRQUFOLENBQWVNLE1BQWYsSUFBeUIsR0FBN0IsRUFBa0M7QUFDaEMsNkJBQVNDLEtBQVQsQ0FBZSxPQUFmLHVKQUNtREosS0FEbkQ7QUFFQU4saUJBQVMsRUFBQzlCLE1BQU02QixTQUFQLEVBQWtCNUIsU0FBU21DLEtBQTNCLEVBQVQ7QUFDRDtBQUNGLEtBWEQ7QUFZRCxHQWJEO0FBZUQ7O0FBRU0sU0FBU3hCLHFCQUFULENBQStCYyxNQUEvQixFQUF1Qzs7QUFFNUMsTUFBTUMsTUFBTUQsT0FBT0MsR0FBbkI7QUFDQSxNQUFNQyxjQUFjRixPQUFPRSxXQUEzQjtBQUNBLE1BQU1hLGVBQWVmLE9BQU9lLFlBQTVCO0FBQ0EsTUFBTVosWUFBWUgsT0FBT0csU0FBekI7O0FBRUEsU0FBTyxVQUFTQyxRQUFULEVBQW1CO0FBQ3hCLG9CQUFNQyxHQUFOLENBQVVKLEdBQVYsRUFBZUssSUFBZixDQUFvQixVQUFTQyxRQUFULEVBQW1CO0FBQ3JDSCxlQUFTLEVBQUM5QixNQUFNNEIsV0FBUCxFQUFvQjNCLFNBQVNnQyxTQUFTQyxJQUF0QyxFQUFUO0FBQ0FKLGVBQVMsRUFBQzlCLE1BQU15QyxZQUFQLEVBQXFCeEMsU0FBUyxFQUE5QixFQUFUO0FBQ0E2QixlQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUNELEtBSkQsRUFJR2tDLEtBSkgsQ0FJUyxVQUFTQyxLQUFULEVBQWdCO0FBQ3ZCQyxjQUFRQyxHQUFSLENBQVlGLE1BQU1ILFFBQU4sQ0FBZU0sTUFBM0I7QUFDQSxVQUFJSCxNQUFNSCxRQUFOLENBQWVNLE1BQWYsSUFBeUIsR0FBN0IsRUFBa0M7QUFDaEMsNkJBQVNDLEtBQVQsQ0FBZSxPQUFmLHVKQUNtREosS0FEbkQ7QUFFQU4saUJBQVMsRUFBQzlCLE1BQU02QixTQUFQLEVBQWtCNUIsU0FBU21DLEtBQTNCLEVBQVQ7QUFDRDtBQUNGLEtBWEQ7QUFZRCxHQWJEO0FBZUQ7O0FBRU0sU0FBU3ZCLGFBQVQsQ0FBdUJhLE1BQXZCLEVBQStCOztBQUVwQyxNQUFNQyxNQUFNRCxPQUFPQyxHQUFuQjs7QUFFQSxrQkFBTUksR0FBTixDQUFVSixHQUFWLEVBQWVLLElBQWYsQ0FBb0IsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQyxXQUFPQSxTQUFTQyxJQUFoQjtBQUNELEdBRkQsRUFFR0MsS0FGSCxDQUVTLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdkIseUJBQVNJLEtBQVQsQ0FBZSxPQUFmLG1KQUNtREosS0FEbkQ7QUFFQSxXQUFPQSxLQUFQO0FBQ0QsR0FORDtBQVFEOztBQUVEO0FBQ0E7QUFDQTtBQUNPLFNBQVN0QixPQUFULENBQWlCWSxNQUFqQixFQUF5Qjs7QUFFOUIsTUFBTWdCLGNBQWNoQixPQUFPZ0IsV0FBM0I7QUFDQSxNQUFNQyxjQUFjakIsT0FBT2lCLFdBQTNCO0FBQ0EsTUFBTUMsVUFBVWxCLE9BQU9rQixPQUF2QjtBQUNBLE1BQU1DLGNBQWNuQixPQUFPbUIsV0FBM0I7QUFDQSxNQUFNbEIsTUFBTUQsT0FBT0MsR0FBbkI7O0FBRUEsU0FBTyxVQUFTRyxRQUFULEVBQW1CO0FBQ3hCTyxZQUFRQyxHQUFSLENBQWVYLEdBQWYsU0FBc0JnQixXQUF0QixTQUFxQ0QsV0FBckM7QUFDQSxvQkFBTVgsR0FBTixDQUFhSixHQUFiLFNBQW9CZ0IsV0FBcEIsU0FBbUNELFdBQW5DLEVBQWtEVixJQUFsRCxDQUF1RCxVQUFTQyxRQUFULEVBQW1COztBQUV4RUksY0FBUUMsR0FBUixDQUFZTCxTQUFTQyxJQUFyQjs7QUFFQSxVQUFJRCxTQUFTQyxJQUFULENBQWNZLE1BQWxCLEVBQTBCO0FBQ3hCO0FBQ0EsWUFBSWIsU0FBU0MsSUFBVCxDQUFjWSxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCLCtCQUFTTixLQUFULENBQWUsVUFBZix3QkFBK0NkLE9BQU9xQixTQUF0RCxnQkFBMEVyQixPQUFPc0IsVUFBakYscUJBQ0V0QixPQUFPZ0IsV0FEVDtBQUlEOztBQUVEWixpQkFBUyxFQUFDOUIsTUFBTTBCLE9BQU91QixZQUFkLEVBQTRCaEQsU0FBU2dDLFNBQVNDLElBQVQsQ0FBYyxDQUFkLENBQXJDLEVBQVQ7QUFDQUosaUJBQVMsRUFBQzlCLE1BQU0wQixPQUFPd0IsYUFBZCxFQUE2QmpELFNBQVNnQyxTQUFTQyxJQUFULENBQWMsQ0FBZCxDQUF0QyxFQUFUO0FBQ0FKLGlCQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUVELE9BYkQsTUFhTztBQUNMNkIsaUJBQVMsRUFBQzlCLE1BQU0wQixPQUFPeUIsaUJBQWQsRUFBaUNsRCxTQUFTLEVBQTFDLEVBQVQ7QUFDQSw2QkFBU3VDLEtBQVQsQ0FBZSxPQUFmLGNBQWtDZCxPQUFPcUIsU0FBekMseUJBQXNFckIsT0FBT3NCLFVBQTdFLFVBQTRGdEIsT0FBT2dCLFdBQW5HLEVBQ0UsWUFBVztBQUFFRSxrQkFBUVEsSUFBUixDQUFhUCxXQUFiO0FBQTJCLFNBRDFDO0FBRUQ7QUFFRixLQXZCRCxFQXVCR1YsS0F2QkgsQ0F1QlMsVUFBU0MsS0FBVCxFQUFnQjtBQUN2QiwyQkFBU0ksS0FBVCxDQUFlLE9BQWYscUpBQ21ESixLQURuRDtBQUVELEtBMUJEO0FBMkJELEdBN0JEO0FBK0JEOztBQUVEO0FBQ0E7QUFDQTtBQUNPLFNBQVNyQixRQUFULENBQWtCVyxNQUFsQixFQUEwQjtBQUMvQixNQUFNMkIsT0FBTzNCLE9BQU8yQixJQUFwQjtBQUNBLFNBQU9BLEtBQUssSUFBTCxDQUFQO0FBQ0EsTUFBTTFCLE1BQU1ELE9BQU9DLEdBQW5CO0FBQ0EsTUFBTTJCLFVBQVU1QixPQUFPNEIsT0FBdkI7QUFDQSxNQUFNQyxVQUFVN0IsT0FBTzZCLE9BQXZCO0FBQ0EsTUFBTUMsV0FBVzlCLE9BQU84QixRQUF4QjtBQUNBLE1BQU1DLGlCQUFpQi9CLE9BQU8rQixjQUE5QjtBQUNBLE1BQU1yRCxPQUFPc0IsT0FBT3RCLElBQXBCO0FBQ0EsTUFBTXNELFNBQVNoQyxPQUFPZ0MsTUFBdEI7QUFDQSxTQUFPLFVBQVM1QixRQUFULEVBQW1COztBQUV4Qix5QkFBTTtBQUNKNkIsY0FBUSxNQURKO0FBRUpoQyxXQUFLQSxHQUZEO0FBR0pPLFlBQU1tQjtBQUhGLEtBQU4sRUFLR3JCLElBTEgsQ0FLUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsMkJBQVNPLEtBQVQsQ0FBZSxZQUFmLEVBQTZCZCxPQUFPa0MsYUFBcEMsRUFDR0MsR0FESCxDQUNPLE1BRFAsRUFDZSxZQUFXO0FBQ3RCLFlBQUluQyxPQUFPbUIsV0FBWCxFQUF3QjtBQUN0Qm5CLGlCQUFPa0IsT0FBUCxDQUFlUSxJQUFmLENBQW9CMUIsT0FBT21CLFdBQTNCO0FBQ0Q7QUFDRixPQUxIO0FBTUFmLGVBQVMsRUFBQzlCLE1BQU0wQixPQUFPdUIsWUFBZCxFQUE0QmhELFNBQVMsRUFBckMsRUFBVDtBQUNBNkQsY0FBUVIsT0FBUixFQUFpQkUsUUFBakIsRUFBMkJELE9BQTNCLEVBQW9DRixJQUFwQyxFQUEwQ0ksY0FBMUMsRUFBMERyRCxJQUExRDtBQUNBMEIsZUFBUyxFQUFDOUIsTUFBTSxlQUFQLEVBQXdCQyxTQUFTLEVBQWpDLEVBQVQ7QUFDQSxVQUFJeUQsTUFBSixFQUFZO0FBQ1Y1QixpQkFBUyxFQUFDOUIsTUFBTSxVQUFQLEVBQW1CQyxTQUFTZ0MsU0FBU0MsSUFBckMsRUFBVDtBQUNBSixpQkFBUyxFQUFDOUIsTUFBTSxvQkFBUCxFQUE2QkMsU0FBUyxFQUF0QyxFQUFUO0FBQ0Q7QUFDRixLQW5CSCxFQW1CS2tDLEtBbkJMLENBbUJXLFVBQUM0QixHQUFELEVBQVM7QUFDaEIxQixjQUFRQyxHQUFSLENBQVl5QixHQUFaO0FBQ0EsVUFBSUEsSUFBSTlCLFFBQVIsRUFBa0I7QUFDaEJJLGdCQUFRQyxHQUFSLENBQVl5QixJQUFJOUIsUUFBSixDQUFhQyxJQUF6QjtBQUNEO0FBQ0QsMkJBQVNNLEtBQVQsQ0FBZSxPQUFmLEVBQTJCZCxPQUFPc0MsWUFBbEMsZ0JBQXlERCxHQUF6RDtBQUNELEtBekJIO0FBMkJELEdBN0JEO0FBOEJEOztBQUVEO0FBQ0E7QUFDQTs7QUFFTyxTQUFTL0MsVUFBVCxDQUFvQlUsTUFBcEIsRUFBNEI7QUFDakMsTUFBTTJCLE9BQU8zQixPQUFPMkIsSUFBcEI7QUFDQSxNQUFNMUIsTUFBTUQsT0FBT0MsR0FBbkI7QUFDQSxNQUFNMkIsVUFBVTVCLE9BQU80QixPQUF2QjtBQUNBLE1BQU1DLFVBQVU3QixPQUFPNkIsT0FBdkI7QUFDQSxNQUFNQyxXQUFXOUIsT0FBTzhCLFFBQXhCO0FBQ0EsTUFBTUMsaUJBQWlCL0IsT0FBTytCLGNBQTlCO0FBQ0EsTUFBTXJELE9BQU9zQixPQUFPdEIsSUFBcEI7O0FBRUEsU0FBTyxVQUFTMEIsUUFBVCxFQUFtQjs7QUFFeEIseUJBQU07QUFDSjZCLGNBQVEsS0FESjtBQUVKaEMsV0FBS0EsR0FGRDtBQUdKTyxZQUFNbUI7QUFIRixLQUFOLEVBS0dyQixJQUxILENBS1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLDJCQUFTTyxLQUFULENBQWUsWUFBZixFQUE2QmQsT0FBT2tDLGFBQXBDLEVBQ0dDLEdBREgsQ0FDTyxNQURQLEVBQ2UsWUFBVztBQUN0QixZQUFJbkMsT0FBT21CLFdBQVgsRUFBd0I7QUFDdEJuQixpQkFBT2tCLE9BQVAsQ0FBZVEsSUFBZixDQUFvQjFCLE9BQU9tQixXQUEzQjtBQUNEO0FBQ0YsT0FMSDtBQU1BZixlQUFTLEVBQUM5QixNQUFNMEIsT0FBT3VCLFlBQWQsRUFBNEJoRCxTQUFTLEVBQXJDLEVBQVQ7QUFDQTZELGNBQVFSLE9BQVIsRUFBaUJFLFFBQWpCLEVBQTJCRCxPQUEzQixFQUFvQ0YsSUFBcEMsRUFBMENJLGNBQTFDLEVBQTBEckQsSUFBMUQ7QUFDQTBCLGVBQVMsRUFBQzlCLE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFUO0FBQ0QsS0FmSCxFQWVLa0MsS0FmTCxDQWVXLFVBQUM0QixHQUFELEVBQVM7QUFDaEIxQixjQUFRQyxHQUFSLENBQVl5QixHQUFaO0FBQ0EsVUFBSUEsSUFBSTlCLFFBQVIsRUFBa0I7QUFDaEJJLGdCQUFRQyxHQUFSLENBQVl5QixJQUFJOUIsUUFBSixDQUFhQyxJQUF6QjtBQUNEO0FBQ0QsMkJBQVNNLEtBQVQsQ0FBZSxPQUFmLEVBQTJCZCxPQUFPc0MsWUFBbEMsZ0JBQXlERCxHQUF6RDtBQUNELEtBckJIO0FBdUJELEdBekJEO0FBMEJEOztBQUVEO0FBQ0E7QUFDQTs7QUFFTyxTQUFTOUMsU0FBVCxDQUFtQlMsTUFBbkIsRUFBMkI7QUFDaEMsTUFBTTJCLE9BQU8zQixPQUFPMkIsSUFBcEI7QUFDQSxNQUFNMUIsTUFBTUQsT0FBT0MsR0FBbkI7QUFDQSxNQUFNMkIsVUFBVTVCLE9BQU80QixPQUF2QjtBQUNBLE1BQU1DLFVBQVU3QixPQUFPNkIsT0FBdkI7QUFDQSxNQUFNQyxXQUFXOUIsT0FBTzhCLFFBQXhCO0FBQ0EsTUFBTUMsaUJBQWlCL0IsT0FBTytCLGNBQTlCO0FBQ0EsTUFBTXJELE9BQU9zQixPQUFPdEIsSUFBcEI7O0FBRUEsU0FBTyxVQUFTMEIsUUFBVCxFQUFtQjs7QUFFeEIseUJBQU07QUFDSjZCLGNBQVEsT0FESjtBQUVKaEMsV0FBS0EsR0FGRDtBQUdKTyxZQUFNbUI7QUFIRixLQUFOLEVBS0dyQixJQUxILENBS1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFVBQUlQLE9BQU9rQyxhQUFYLEVBQTBCO0FBQ3hCLDZCQUFTcEIsS0FBVCxDQUFlLFlBQWYsRUFBNkJkLE9BQU9rQyxhQUFwQyxFQUNHQyxHQURILENBQ08sTUFEUCxFQUNlLFlBQVc7QUFDdEIsY0FBSW5DLE9BQU9tQixXQUFYLEVBQXdCO0FBQ3RCbkIsbUJBQU9rQixPQUFQLENBQWVRLElBQWYsQ0FBb0IxQixPQUFPbUIsV0FBM0I7QUFDRDtBQUNGLFNBTEg7QUFNRDtBQUNEZixlQUFTLEVBQUM5QixNQUFNMEIsT0FBT3VCLFlBQWQsRUFBNEJoRCxTQUFTLEVBQXJDLEVBQVQ7QUFDQTZELGNBQVFSLE9BQVIsRUFBaUJFLFFBQWpCLEVBQTJCRCxPQUEzQixFQUFvQ0YsSUFBcEMsRUFBMENJLGNBQTFDLEVBQTBEckQsSUFBMUQ7QUFDQTBCLGVBQVMsRUFBQzlCLE1BQU0sYUFBUCxFQUFzQkMsU0FBUyxFQUEvQixFQUFUO0FBQ0E2QixlQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUNELEtBbEJILEVBa0JLa0MsS0FsQkwsQ0FrQlcsVUFBQzRCLEdBQUQsRUFBUztBQUNoQjFCLGNBQVFDLEdBQVIsQ0FBWXlCLEdBQVo7QUFDQSxVQUFJQSxJQUFJOUIsUUFBUixFQUFrQjtBQUNoQkksZ0JBQVFDLEdBQVIsQ0FBWXlCLElBQUk5QixRQUFKLENBQWFDLElBQXpCO0FBQ0Q7QUFDRCwyQkFBU00sS0FBVCxDQUFlLE9BQWYsRUFBMkJkLE9BQU9zQyxZQUFsQyxnQkFBeURELEdBQXpEO0FBQ0QsS0F4Qkg7QUEwQkQsR0E1QkQ7QUE2QkQ7O0FBRUQ7QUFDQTtBQUNBOztBQUVPLFNBQVM3QyxVQUFULENBQW9CUSxNQUFwQixFQUE0QnVDLE9BQTVCLEVBQXFDO0FBQzFDLE1BQU1aLE9BQU8zQixPQUFPMkIsSUFBcEI7QUFDQSxNQUFNMUIsTUFBTUQsT0FBT0MsR0FBbkI7QUFDQSxNQUFNMkIsVUFBVTVCLE9BQU80QixPQUF2QjtBQUNBLE1BQU1DLFVBQVU3QixPQUFPNkIsT0FBdkI7QUFDQSxNQUFNQyxXQUFXOUIsT0FBTzhCLFFBQXhCO0FBQ0EsTUFBTUMsaUJBQWlCL0IsT0FBTytCLGNBQTlCO0FBQ0EsTUFBTXJELE9BQU9zQixPQUFPdEIsSUFBcEI7O0FBRUEsTUFBTThELFFBQVFELFFBQVFaLElBQXRCO0FBQ0EsTUFBTWMsT0FBT0YsUUFBUXRDLEdBQXJCO0FBQ0EsTUFBTXlDLFdBQVdILFFBQVFYLE9BQXpCO0FBQ0EsTUFBTWUsV0FBV0osUUFBUVYsT0FBekI7QUFDQSxNQUFNZSxZQUFZTCxRQUFRVCxRQUExQjtBQUNBLE1BQU1lLGtCQUFrQk4sUUFBUVIsY0FBaEM7O0FBRUEsU0FBTyxVQUFTM0IsUUFBVCxFQUFtQjs7QUFFeEIseUJBQU07QUFDSjZCLGNBQVEsT0FESjtBQUVKaEMsV0FBS0EsR0FGRDtBQUdKTyxZQUFNbUI7QUFIRixLQUFOO0FBS0U7QUFMRixLQU1HckIsSUFOSCxDQU1RLFVBQUNDLFFBQUQsRUFBYzs7QUFFbEJILGVBQVMsRUFBQzlCLE1BQU0wQixPQUFPdUIsWUFBZCxFQUE0QmhELFNBQVMsRUFBckMsRUFBVDtBQUNBNkQsY0FBUVIsT0FBUixFQUFpQkUsUUFBakIsRUFBMkJELE9BQTNCLEVBQW9DRixJQUFwQyxFQUEwQ0ksY0FBMUMsRUFBMERyRCxJQUExRDs7QUFFQTtBQUNBLDJCQUFNO0FBQ0p1RCxnQkFBUSxPQURKO0FBRUpoQyxhQUFLd0MsSUFGRDtBQUdKakMsY0FBTWdDO0FBSEYsT0FBTjtBQUtFO0FBTEYsT0FNR2xDLElBTkgsQ0FNUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBSWdDLFFBQVFMLGFBQVosRUFBMkI7QUFDekIsK0JBQVNwQixLQUFULENBQWUsWUFBZixFQUE2QnlCLFFBQVFMLGFBQXJDLEVBQ0dDLEdBREgsQ0FDTyxNQURQLEVBQ2UsWUFBVztBQUN0QixnQkFBSUksUUFBUXBCLFdBQVosRUFBeUI7QUFDdkJvQixzQkFBUXJCLE9BQVIsQ0FBZ0JRLElBQWhCLENBQXFCYSxRQUFRcEIsV0FBN0I7QUFDRDtBQUNGLFdBTEg7QUFNRDtBQUNEZixpQkFBUyxFQUFDOUIsTUFBTWlFLFFBQVFoQixZQUFmLEVBQTZCaEQsU0FBUyxFQUF0QyxFQUFUO0FBQ0E2RCxnQkFBUU0sUUFBUixFQUFrQkUsU0FBbEIsRUFBNkJELFFBQTdCLEVBQXVDSCxLQUF2QyxFQUE4Q0ssZUFBOUMsRUFBK0RuRSxJQUEvRDtBQUNBMEIsaUJBQVMsRUFBQzlCLE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFUOztBQUVGO0FBQ0MsT0FwQkgsRUFvQktrQyxLQXBCTCxDQW9CVyxVQUFDNEIsR0FBRCxFQUFTO0FBQ2hCMUIsZ0JBQVFDLEdBQVIsQ0FBWXlCLEdBQVo7QUFDQSxZQUFJQSxJQUFJOUIsUUFBUixFQUFrQjtBQUNoQkksa0JBQVFDLEdBQVIsQ0FBWXlCLElBQUk5QixRQUFKLENBQWFDLElBQXpCO0FBQ0Q7QUFDRCw2QkFBU00sS0FBVCxDQUFlLE9BQWYsRUFBMkJ5QixRQUFRRCxZQUFuQyxnQkFBMERELEdBQTFEO0FBQ0QsT0ExQkg7O0FBNEJGO0FBQ0MsS0F6Q0gsRUF5Q0s1QixLQXpDTCxDQXlDVyxVQUFDNEIsR0FBRCxFQUFTO0FBQ2hCMUIsY0FBUUMsR0FBUixDQUFZeUIsR0FBWjtBQUNBLFVBQUlBLElBQUk5QixRQUFSLEVBQWtCO0FBQ2hCSSxnQkFBUUMsR0FBUixDQUFZeUIsSUFBSTlCLFFBQUosQ0FBYUMsSUFBekI7QUFDRDtBQUNELDJCQUFTTSxLQUFULENBQWUsT0FBZixFQUEyQmQsT0FBT3NDLFlBQWxDLGdCQUF5REQsR0FBekQ7QUFDRCxLQS9DSDtBQWlERCxHQW5ERDtBQW9ERDs7QUFFRDtBQUNBO0FBQ0E7QUFDTyxTQUFTNUMsVUFBVCxDQUFvQk8sTUFBcEIsRUFBNEI7O0FBRWpDLE1BQU0yQixPQUFPM0IsT0FBTzJCLElBQXBCO0FBQ0EsTUFBTTFCLE1BQU1ELE9BQU9DLEdBQW5CO0FBQ0EsTUFBTTZDLFFBQVE5QyxPQUFPcUIsU0FBckI7QUFDQSxNQUFNTyxVQUFVNUIsT0FBTzRCLE9BQXZCO0FBQ0EsTUFBTUMsVUFBVTdCLE9BQU82QixPQUF2QjtBQUNBLE1BQU1DLFdBQVc5QixPQUFPOEIsUUFBeEI7QUFDQSxNQUFNQyxpQkFBaUIvQixPQUFPK0IsY0FBOUI7QUFDQSxNQUFNckQsT0FBT3NCLE9BQU90QixJQUFwQjs7QUFFQSxTQUFPLFVBQVMwQixRQUFULEVBQW1COztBQUV4Qix5QkFBTTtBQUNKNkIsY0FBUSxRQURKO0FBRUpoQyxXQUFLQTtBQUZELEtBQU4sRUFJR0ssSUFKSCxDQUlRLFVBQUNDLFFBQUQsRUFBYzs7QUFFbEIsMkJBQVNPLEtBQVQsQ0FBZSxZQUFmLEVBQTZCLHNDQUE3QixFQUNHcUIsR0FESCxDQUNPLE1BRFAsRUFDZSxZQUFXO0FBQ3RCLFlBQUluQyxPQUFPbUIsV0FBWCxFQUF3QjtBQUN0Qm5CLGlCQUFPa0IsT0FBUCxDQUFlUSxJQUFmLENBQW9CMUIsT0FBT21CLFdBQTNCO0FBQ0Q7QUFDRixPQUxIO0FBTUFpQixjQUFRUixPQUFSLEVBQWlCRSxRQUFqQixFQUEyQkQsT0FBM0IsRUFBb0NGLElBQXBDLEVBQTBDSSxjQUExQyxFQUEwRHJELElBQTFEO0FBQ0EwQixlQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUVELEtBZkgsRUFlS2tDLEtBZkwsQ0FlVyxVQUFDNEIsR0FBRCxFQUFTO0FBQ2hCLDJCQUFTdkIsS0FBVCxDQUFlLE9BQWYsb0NBQXdEZ0MsS0FBeEQsZ0JBQXdFVCxHQUF4RTtBQUNELEtBakJIO0FBa0JELEdBcEJEO0FBcUJEOztBQUVEO0FBQ0E7QUFDQTtBQUNPLFNBQVMzQyxnQkFBVCxDQUEwQnFELE9BQTFCLEVBQW1DQyxJQUFuQyxFQUF5Q0MsT0FBekMsRUFBa0RDLElBQWxELEVBQXdEO0FBQzdELFNBQU8sVUFBUzlDLFFBQVQsRUFBbUI7QUFDeEIsUUFBSTRDLElBQUosRUFBVTs7QUFFUixzQkFBTTNDLEdBQU4sc0JBQTZCMEMsT0FBN0IsVUFBeUNDLElBQXpDLEVBQWlEMUMsSUFBakQsQ0FBc0QsVUFBU0MsUUFBVCxFQUFtQjtBQUN2RTtBQUNELE9BRkQsRUFFR0UsS0FGSCxDQUVTLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdkJOLGlCQUFTLEVBQUM5QixNQUFNNEUsSUFBUCxFQUFhM0UsU0FBU21DLEtBQXRCLEVBQVQ7QUFDRCxPQUpEO0FBTUQsS0FSRCxNQVFPO0FBQ0wsc0JBQU1MLEdBQU4scUJBQThCQyxJQUE5QixDQUFtQyxVQUFTQyxRQUFULEVBQW1CO0FBQ3BEO0FBQ0EsWUFBTTRDLFNBQVM1QyxTQUFTQyxJQUFULEdBQ1hELFNBQVNDLElBQVQsQ0FBYzRDLE1BQWQsQ0FBcUIsZ0JBQVE7QUFDN0IsaUJBQU96QixLQUFLb0IsT0FBTCxJQUFnQkEsT0FBdkI7QUFDRCxTQUZDLENBRFcsR0FJWCxFQUpKO0FBS0EsWUFBTXZDLE9BQU8sRUFBYjtBQUNBMkMsZUFBT0UsT0FBUCxDQUFlLGdCQUFRO0FBQ3JCN0MsZUFBS21CLEtBQUtxQixJQUFWLElBQWtCckIsS0FBSzJCLEtBQXZCO0FBQ0QsU0FGRDs7QUFJQWxELGlCQUFTLEVBQUM5QixNQUFNMkUsT0FBUCxFQUFnQjFFLFNBQVMsRUFBQ2lDLE1BQU1BLElBQVAsRUFBYXVDLFNBQVNBLE9BQXRCLEVBQXpCLEVBQVQ7QUFDRCxPQWJELEVBYUd0QyxLQWJILENBYVMsVUFBU0MsS0FBVCxFQUFnQjtBQUN2Qk4saUJBQVMsRUFBQzlCLE1BQU00RSxJQUFQLEVBQWEzRSxTQUFTbUMsS0FBdEIsRUFBVDtBQUNELE9BZkQ7QUFnQkQ7QUFDRixHQTNCRDtBQTRCRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxTQUFTMEIsT0FBVCxDQUFrQm5FLElBQWxCLEVBQXdCNkUsS0FBeEIsRUFBK0JTLFNBQS9CLEVBQTBDQyxNQUExQyxFQUFrREMsV0FBbEQsRUFBK0QvRSxJQUEvRCxFQUFxRTs7QUFFbkUsTUFBTWdGLGFBQWFDLEtBQUtDLFNBQUwsQ0FBZUwsU0FBZixDQUFuQjtBQUNBLE1BQU1NLFlBQVlGLEtBQUtDLFNBQUwsQ0FBZUosTUFBZixDQUFsQjtBQUNBLE1BQU1NLFFBQVFILEtBQUtDLFNBQUwsQ0FBZWxGLElBQWYsQ0FBZDs7QUFFQSxNQUFNaUQsT0FBTztBQUNYMUQsVUFBTUEsSUFESztBQUVYNkUsV0FBT0EsS0FGSTtBQUdYaUIsaUJBQWFMLFVBSEY7QUFJWE0sZ0JBQVlILFNBSkQ7QUFLWEosaUJBQWFBLFdBTEY7QUFNWC9FLFVBQU1vRjtBQU5LLEdBQWI7O0FBU0EsdUJBQU07QUFDSjdCLFlBQVEsTUFESjtBQUVKaEMsU0FBSyxZQUZEO0FBR0pPLFVBQU1tQjtBQUhGLEdBQU4sRUFLR3JCLElBTEgsQ0FLUSxVQUFDQyxRQUFELEVBQWMsQ0FFbkIsQ0FQSCxFQU9LRSxLQVBMLENBT1csVUFBQzRCLEdBQUQsRUFBUztBQUNoQjFCLFlBQVFDLEdBQVIsQ0FBWXlCLEdBQVo7QUFDQSxRQUFJQSxJQUFJOUIsUUFBUixFQUFrQjtBQUNoQkksY0FBUUMsR0FBUixDQUFZeUIsSUFBSTlCLFFBQUosQ0FBYUMsSUFBekI7QUFDRDtBQUNELHlCQUFTTSxLQUFULENBQWUsT0FBZixvREFBd0V1QixHQUF4RTtBQUNELEdBYkg7QUFjRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxTQUFTMUMsa0JBQVQsQ0FBNEJzRSxRQUE1QixFQUFzQ0MsS0FBdEMsRUFBNkM7O0FBRWxELE1BQUlELFNBQVM3QyxNQUFiLEVBQXFCOztBQUVuQixRQUFJK0MsT0FBT0YsU0FBU0csR0FBVCxDQUFhO0FBQUEsYUFBV0MsUUFBUUgsS0FBUixDQUFYO0FBQUEsS0FBYixDQUFYOztBQUVBQyxXQUFPQSxLQUFLRyxJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUQsSUFBSUMsQ0FBZDtBQUFBLEtBQVYsQ0FBUDtBQUNBLFFBQU1DLE1BQU1OLEtBQUtPLEdBQUwsRUFBWjtBQUNBLFFBQU1DLE9BQU9DLFNBQVNILEdBQVQsSUFBZ0IsQ0FBN0I7QUFDQSxXQUFPRSxLQUFLRSxRQUFMLEVBQVA7QUFFRDs7QUFFRCxTQUFPLENBQVA7QUFFRDs7QUFFRDtBQUNPLFNBQVNqRixlQUFULENBQXlCSSxNQUF6QixFQUFpQzs7QUFFdEMsTUFBTS9CLE9BQU8rQixPQUFPL0IsSUFBcEI7QUFDQSxNQUFNNkcsUUFBUTlFLE9BQU84RSxLQUFyQjtBQUNBLE1BQU1DLFlBQVkvRSxPQUFPK0UsU0FBekI7QUFDQSxNQUFJQyxXQUFXLENBQWY7QUFDQSxNQUFJTCxPQUFPLENBQVg7O0FBRUFHLFFBQU1SLElBQU4sQ0FBVyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNuQixXQUFPRCxFQUFFUSxTQUFGLElBQWVQLEVBQUVPLFNBQUYsQ0FBdEI7QUFDRCxHQUZEOztBQUlBRCxRQUFNekIsT0FBTixDQUFjLFVBQUMxQixJQUFELEVBQU9zRCxLQUFQLEVBQWlCO0FBQzdCLFFBQUl0RCxLQUFLb0QsU0FBTCxLQUFtQjlHLElBQXZCLEVBQTZCO0FBQzNCMEcsYUFBT00sUUFBUSxDQUFmO0FBQ0FELGlCQUFXQyxRQUFRLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1DLFdBQVdKLE1BQU1ILElBQU4sSUFBY0csTUFBTUgsSUFBTixFQUFZSSxTQUFaLENBQWQsR0FBdUNELE1BQU0sQ0FBTixFQUFTQyxTQUFULENBQXhEO0FBQ0EsTUFBTUksV0FBV0wsTUFBTUUsUUFBTixJQUFrQkYsTUFBTUUsUUFBTixFQUFnQkQsU0FBaEIsQ0FBbEIsR0FBK0NELE1BQU1KLEdBQU4sR0FBWUssU0FBWixDQUFoRTs7QUFFQSxTQUFPLFVBQVMzRSxRQUFULEVBQW1CO0FBQ3hCQSxhQUFTLEVBQUM5QixNQUFNMEIsT0FBT3VCLFlBQWQsRUFBNEJoRCxTQUFTLEVBQUNvRyxNQUFNTyxRQUFQLEVBQWlCRixVQUFVRyxRQUEzQixFQUFyQyxFQUFUO0FBQ0QsR0FGRDtBQUdEOzs7Ozs7OztnQ0EvY2VsRyxlOztnQ0F1QkFDLHFCOztnQ0F3QkFDLGE7O2dDQWlCQUMsTzs7Z0NBNENBQyxROztnQ0E4Q0FDLFU7O2dDQXlDQUMsUzs7Z0NBNENBQyxVOztnQ0F5RUFDLFU7O2dDQXFDQUMsZ0I7O2dDQWtDUDBDLE87O2dDQW9DT3pDLGtCOztnQ0FrQkFDLGU7Ozs7Ozs7Ozs7Ozs7QUMxY2hCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBR0E7O0FBRUE7Ozs7QUFHQTs7Ozs7O0FBSkE7QUFNQXdGLE9BQU9DLFFBQVA7O0FBSEE7OztBQUxBOztBQVNBOztBQUVBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsc0JBQVY7QUFDRTtBQURGLENBREYsRUFHZUMsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUhmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNqQkE7Ozs7O0FBU0E7O0FBTkE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBUXFCQyxJLFdBTnBCLHlCQUFRLFVBQUNDLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xDLGNBQVVELE1BQU1DLFFBQU4sQ0FBZUEsUUFEcEI7QUFFTEMscUJBQWlCRixNQUFNRyxNQUFOLENBQWFEO0FBRnpCLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7O3lDQVFzQjtBQUNuQixXQUFLRSxLQUFMLENBQVcxRixRQUFYLENBQW9CLDRCQUFwQjtBQUNEOztBQUVEOzs7OzZCQUNTOztBQUVQLFVBQU11RixXQUFXLEtBQUtHLEtBQUwsQ0FBV0gsUUFBWCxHQUFzQix1REFBdEIsR0FBcUMsRUFBdEQ7QUFDQSxVQUFNSSxxQkFBcUIsS0FBS0QsS0FBTCxDQUFXRixlQUFYLEdBQTZCLGVBQTdCLEdBQStDLDBCQUExRTtBQUNBLFVBQU1JLFVBQVU7QUFBQTtBQUFBO0FBQ2Q7QUFBQTtBQUFBO0FBQ0UsaUVBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxJQUFHLGVBQVIsRUFBd0IsV0FBV0Qsa0JBQW5DO0FBQ0UsaUVBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx1QkFBZjtBQUFBO0FBRUdKO0FBRkg7QUFGRjtBQUZGO0FBRGMsT0FBaEI7O0FBYUEsYUFBTztBQUFBO0FBQUE7QUFDSks7QUFESSxPQUFQO0FBR0Q7Ozs7RUEzQitCLGdCQUFNQyxTO2tCQUFuQlIsSTs7Ozs7Ozs7Z0NBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7UUNyQkxTLFksR0FBQUEsWTtRQVlBQyxrQixHQUFBQSxrQjs7QUFkaEI7Ozs7OztBQUVPLFNBQVNELFlBQVQsR0FBd0I7O0FBRTdCLFNBQU8sVUFBUzlGLFFBQVQsRUFBbUI7QUFDeEIsb0JBQU1DLEdBQU4sQ0FBVSxXQUFWLEVBQXVCQyxJQUF2QixDQUE0QixVQUFTQyxRQUFULEVBQW1CO0FBQzdDSCxlQUFTLEVBQUM5QixNQUFNLHlCQUFQLEVBQWtDQyxTQUFTLEVBQUNHLE1BQU02QixTQUFTQyxJQUFULENBQWMsQ0FBZCxFQUFpQjRGLE1BQXhCLEVBQWdDQyxTQUFTOUYsU0FBU0MsSUFBVCxDQUFjLENBQWQsRUFBaUI0RixNQUExRCxFQUEzQyxFQUFUO0FBQ0FoRyxlQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUNELEtBSEQsRUFHR2tDLEtBSEgsQ0FHUyxVQUFTQyxLQUFULEVBQWdCO0FBQ3ZCTixlQUFTLEVBQUM5QixNQUFNLHdCQUFQLEVBQWlDQyxTQUFTbUMsS0FBMUMsRUFBVDtBQUNELEtBTEQ7QUFNRCxHQVBEO0FBUUQ7O0FBRU0sU0FBU3lGLGtCQUFULEdBQThCOztBQUVuQyxTQUFPLFVBQVMvRixRQUFULEVBQW1CO0FBQ3hCLG9CQUFNQyxHQUFOLENBQVUsd0NBQVYsRUFBb0RDLElBQXBELENBQXlELFVBQVNDLFFBQVQsRUFBbUI7QUFDMUVILGVBQVMsRUFBQzlCLE1BQU0saUNBQVAsRUFBMENDLFNBQVNnQyxTQUFTQyxJQUFULENBQWM4QyxLQUFqRSxFQUFUO0FBQ0FsRCxlQUFTLEVBQUM5QixNQUFNLGVBQVAsRUFBd0JDLFNBQVMsRUFBakMsRUFBVDtBQUNELEtBSEQsRUFHR2tDLEtBSEgsQ0FHUyxVQUFTQyxLQUFULEVBQWdCO0FBQ3ZCTixlQUFTLEVBQUM5QixNQUFNLGdDQUFQLEVBQXlDQyxTQUFTbUMsS0FBbEQsRUFBVDtBQUNELEtBTEQ7QUFNRCxHQVBEO0FBUUQ7Ozs7Ozs7O2dDQXRCZXdGLFk7O2dDQVlBQyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaEI7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7Ozs7QUFIQTs7QUFLQSxJQUFNRyxTQUFTO0FBQUE7QUFBQSxJQUFLLFdBQVUsVUFBZjtBQUViLHlEQUFPLFdBQVAsRUFBYSxNQUFLLFFBQWxCLEVBQTJCLHlCQUEzQixHQUZhO0FBR2IseURBQU8sTUFBSyxhQUFaLEVBQTBCLHlCQUExQjtBQUhhLENBQWY7O2VBT2VBLE07Ozs7Ozs7OztnQ0FQVEEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNSTjs7OztBQUlBO0FBQ0E7OztBQUZBOzs7O0FBR0E7Ozs7Ozs7Ozs7SUFNcUJDLEksV0FKcEIseUJBQVEsVUFBQ2IsS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBUDtBQUVELENBSEEsQzs7Ozs7Ozs7Ozs7eUNBTXNCOztBQUVuQixXQUFLSSxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLG9CQUFQLEVBQTZCQyxTQUFTLEVBQXRDLEVBQXBCO0FBRUQ7QUFDRDs7QUFFQTs7Ozs2QkFDUzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUFBO0FBQUEsT0FBUDtBQUlEOzs7O0VBaEIrQixnQkFBTTBILFM7a0JBQW5CTSxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDWnJCOzs7O0FBSUE7QUFDQTs7O0FBRkE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztJQU1xQkMsSSxXQUpwQix5QkFBUSxVQUFDZCxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFQO0FBRUQsQ0FIQSxDOzs7Ozs7Ozs7Ozt5Q0FNc0I7O0FBRW5CLFdBQUtJLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsRUFBdEMsRUFBcEI7QUFFRDtBQUNEOztBQUVBOzs7OzZCQUNTOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0wsOERBREs7QUFFTCw0REFGSztBQUlMLGtFQUpLO0FBS0wsa0VBTEs7QUFNTCwrREFOSztBQU9MO0FBUEssT0FBUDtBQVdEOzs7O0VBdkIrQixnQkFBTTBILFM7a0JBQW5CTyxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDbkJyQjs7Ozs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQVFxQmYsSSxXQU5wQix5QkFBUSxVQUFDQyxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMZSxlQUFXZixNQUFNZ0IsSUFBTixDQUFXRCxTQURqQjtBQUVMRSxXQUFPakIsTUFBTWtCLElBQU4sQ0FBV0M7QUFGYixHQUFQO0FBSUQsQ0FMQSxDOzs7Ozs7Ozs7OztrQ0FRZ0I7QUFDYixXQUFLZixLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLG1CQUFQLEVBQTRCQyxTQUFTLEVBQXJDLEVBQXBCO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7QUFDUCxVQUFNdUksZUFBZSxLQUFLaEIsS0FBTCxDQUFXVyxTQUFYLEdBQXVCLHdCQUF2QixHQUFrRCxjQUF2RTtBQUNBLFVBQU1NLFlBQVksS0FBS2pCLEtBQUwsQ0FBV1csU0FBWCxHQUF1QixtQkFBdkIsR0FBNkMsOEJBQS9EO0FBQ0EsVUFBTU8sYUFBYSxLQUFLbEIsS0FBTCxDQUFXVyxTQUFYLEdBQXVCLG9CQUF2QixHQUE4Qyw4QkFBakU7O0FBRUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFXSyxZQUFoQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRTtBQURGLFNBREs7QUFJTDtBQUFBO0FBQUEsWUFBSyxXQUFXQyxTQUFoQjtBQUNFO0FBREYsU0FKSztBQU9MO0FBQUE7QUFBQSxZQUFLLFdBQVdDLFVBQWhCO0FBQUE7QUFDSyxlQUFLbEIsS0FBTCxDQUFXYSxLQUFYLENBQWlCTSxXQUFqQixFQURMO0FBRUUsK0NBQUcsV0FBVSxvQkFBYixFQUFrQyxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTNDO0FBRkY7QUFQSyxPQUFQO0FBYUQ7Ozs7RUF6QitCLGdCQUFNbEIsUztrQkFBbkJSLEk7Ozs7Ozs7O2dDQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNmckI7Ozs7O0FBR0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQWNxQjJCLE8sV0FacEIseUJBQVEsVUFBQzFCLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0wyQixjQUFVM0IsTUFBTTJCLFFBQU4sQ0FBZUEsUUFEcEI7QUFFTGpKLFlBQVFzSCxNQUFNeEgsT0FBTixDQUFjSixjQUZqQjtBQUdMd0osaUJBQWE1QixNQUFNa0IsSUFBTixDQUFXVyxTQUhuQjtBQUlMQyxjQUFVOUIsTUFBTTJCLFFBQU4sQ0FBZUcsUUFKcEI7QUFLTEMsb0JBQWdCL0IsTUFBTWtCLElBQU4sQ0FBV2E7QUFDM0I7QUFDQTtBQUNBO0FBUkssR0FBUDtBQVVELENBWEEsQzs7Ozs7Ozs7Ozs7d0NBY3FCO0FBQ2xCLFdBQUtDLFNBQUwsQ0FBZUMsS0FBZjtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0Q7Ozt5Q0FFb0I7O0FBRW5CLFdBQUs3QixLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLEVBQXBDLEVBQXBCO0FBQ0EsV0FBS3VILEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sZ0JBQVAsRUFBeUJDLFNBQVMsRUFBbEMsRUFBcEI7O0FBRUEsVUFBTXFKLGdCQUFnQjtBQUNwQjNILGFBQUssZUFEZTtBQUVwQkMscUJBQWEsMEJBRk87QUFHcEJDLG1CQUFXO0FBSFMsT0FBdEI7O0FBTUEsV0FBSzJGLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsMEJBQWdCd0gsYUFBaEIsQ0FBcEI7QUFFRDs7O3lDQUVvQjs7QUFFbkIsV0FBSzlCLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFwQjtBQUVEOzs7a0NBRWFzSixFLEVBQUk7QUFDaEI7QUFDQSxVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1QjtBQUNyQixZQUFJRCxHQUFHRSxNQUFILENBQVV6RSxLQUFkLEVBQXFCO0FBQ25CLGNBQU1yRixPQUFPNEosR0FBR0UsTUFBSCxDQUFVekUsS0FBVixDQUFnQjBFLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQWIsQ0FEbUIsQ0FDd0I7QUFDM0MsY0FBSUMsTUFBTUosR0FBR0UsTUFBSCxDQUFVekUsS0FBVixDQUFnQjBFLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQVY7QUFDQUMsZ0JBQU9DLE1BQU1ELEdBQU4sQ0FBRCxHQUNGLENBREUsR0FFRmxKLFdBQVdrSixHQUFYLENBRkosQ0FIbUIsQ0FLQzs7QUFFcEIsZUFBS25DLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsOEJBQWdCbkMsSUFBaEIsRUFBc0JnSyxHQUF0QixFQUEyQixLQUFLbkMsS0FBTCxDQUFXdUIsUUFBdEMsRUFBZ0QsS0FBS3ZCLEtBQUwsQ0FBV3dCLFdBQTNELEVBQ2xCLEtBQUt4QixLQUFMLENBQVcyQixjQURPLEVBQ1MsS0FBSzNCLEtBQUwsQ0FBVzFILE1BRHBCLEVBQzRCLEtBQUswSCxLQUFMLENBQVdxQyxhQUR2QyxFQUNzRCxLQUFLckMsS0FBTCxDQUFXc0MsVUFEakUsQ0FBcEI7QUFFQTtBQUNBO0FBQ0EsZUFBS3RDLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sMkJBQVAsRUFBb0NDLFNBQVMsQ0FBN0MsRUFBcEI7QUFDQSxlQUFLdUgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSw0QkFBUCxFQUFxQ0MsU0FBU04sSUFBOUMsRUFBcEI7QUFDRDtBQUNGLE9BZkQsTUFlTztBQUNMLGFBQUs2SCxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLHlCQUFQLEVBQWtDQyxTQUFTc0osR0FBR0UsTUFBSCxDQUFVekUsS0FBckQsRUFBcEI7QUFDRDtBQUVGOztBQUVEOzs7OzZCQUNTO0FBQUE7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxxQkFBZjtBQUNFLGlEQUFHLFdBQVUsZUFBYixHQURGO0FBRUUscURBQU8sSUFBRyx1QkFBVixFQUFrQyxVQUFVLEtBQUt3QyxLQUFMLENBQVd1QyxRQUF2RDtBQUNFLHlCQUFXLEtBQUtDLGFBQUwsQ0FBbUJuQixJQUFuQixDQUF3QixJQUF4QixDQURiO0FBRUUscUJBQU8sS0FBS3JCLEtBQUwsQ0FBVzBCLFFBRnBCO0FBR0Usd0JBQVUsS0FBS2MsYUFBTCxDQUFtQm5CLElBQW5CLENBQXdCLElBQXhCLENBSFo7QUFJRSxtQkFBSyxhQUFDb0IsS0FBRCxFQUFXO0FBQ2QsdUJBQUtiLFNBQUwsR0FBaUJhLEtBQWpCO0FBQ0QsZUFOSDtBQU9FLG9CQUFLLE1BUFAsRUFPYyxhQUFZLG1DQVAxQjtBQVFFLHlCQUFVLDJEQVJaO0FBRkYsV0FERjtBQWFFO0FBQUE7QUFBQSxjQUFRLFVBQVUsS0FBS3pDLEtBQUwsQ0FBV3VDLFFBQTdCLEVBQXVDLFNBQVMsS0FBS0csa0JBQUwsQ0FBd0JyQixJQUF4QixDQUE2QixJQUE3QixDQUFoRDtBQUNFLHlCQUFVLHVCQURaO0FBRUU7QUFBQTtBQUFBO0FBQ0UsbURBQUcsV0FBVSxjQUFiO0FBREY7QUFGRjtBQWJGO0FBTkssT0FBUDtBQThCRDs7OztFQXZGa0MsZ0JBQU1sQixTO2tCQUF0Qm1CLE87Ozs7Ozs7O2dDQUFBQSxPOzs7Ozs7Ozs7O0FDcEJyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RCQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNcUIsWUFBWSxtQkFBQUMsQ0FBUSxFQUFSLENBQWxCOztJQVNxQkMsSSxXQVBwQix5QkFBUSxVQUFDakQsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTDtBQUNBO0FBQ0E7QUFISyxHQUFQO0FBS0QsQ0FOQSxDOzs7Ozs7Ozs7Ozt5Q0FTc0I7O0FBRW5CLFVBQU1rRCxRQUFRLElBQWQ7QUFDQUgsZ0JBQVV0QixJQUFWLENBQWUsT0FBZixFQUF3QixVQUFTMEIsQ0FBVCxFQUFZOztBQUVsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEOztBQUVESCxjQUFNOUMsS0FBTixDQUFZMUYsUUFBWixDQUFxQixFQUFDOUIsTUFBTSw2QkFBUCxFQUFzQ0MsU0FBUyxDQUFDLENBQWhELEVBQXJCO0FBQ0FnSCxpQkFBU0MsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0RtQyxLQUFoRDtBQUNBcEMsaUJBQVNDLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEbEMsS0FBaEQsR0FBd0QsRUFBeEQ7O0FBRUFtRixrQkFBVXRCLElBQVYsQ0FBZSxLQUFmLEVBQXNCLFlBQVc7QUFDL0J5QixnQkFBTTlDLEtBQU4sQ0FBWTFGLFFBQVosQ0FBcUIsRUFBQzlCLE1BQU0sNkJBQVAsRUFBc0NDLFNBQVMsQ0FBQyxDQUFoRCxFQUFyQjtBQUNBZ0gsbUJBQVNDLGNBQVQsQ0FBd0IsdUJBQXhCLEVBQWlEbUMsS0FBakQ7QUFDQXBDLG1CQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRGxDLEtBQWpELEdBQXlELEVBQXpEO0FBQ0FtRixvQkFBVU8sTUFBVixDQUFpQixLQUFqQjtBQUNELFNBTEQ7QUFNRCxPQW5CRDs7QUFxQkFQLGdCQUFVdEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBUzBCLENBQVQsRUFBWTs7QUFFbEMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFREgsY0FBTTlDLEtBQU4sQ0FBWTFGLFFBQVosQ0FBcUIsRUFBQzlCLE1BQU0sNEJBQVAsRUFBcUNDLFNBQVMsQ0FBQyxDQUEvQyxFQUFyQjtBQUNBZ0gsaUJBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDbUMsS0FBL0M7QUFDQXBDLGlCQUFTQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ2xDLEtBQS9DLEdBQXVELEVBQXZEOztBQUVBbUYsa0JBQVV0QixJQUFWLENBQWUsS0FBZixFQUFzQixZQUFXO0FBQy9CeUIsZ0JBQU05QyxLQUFOLENBQVkxRixRQUFaLENBQXFCLEVBQUM5QixNQUFNLDRCQUFQLEVBQXFDQyxTQUFTLENBQUMsQ0FBL0MsRUFBckI7QUFDQWdILG1CQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRG1DLEtBQWpEO0FBQ0FwQyxtQkFBU0MsY0FBVCxDQUF3Qix1QkFBeEIsRUFBaURsQyxLQUFqRCxHQUF5RCxFQUF6RDtBQUNBbUYsb0JBQVVPLE1BQVYsQ0FBaUIsS0FBakI7QUFDRCxTQUxEO0FBTUQsT0FuQkQ7QUFvQkQ7O0FBRUQ7Ozs7NkJBQ1M7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUpGO0FBT0U7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQVBGO0FBVUU7QUFBQTtBQUFBLGNBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQVZGO0FBYUU7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQWJGO0FBZ0JFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FoQkY7QUFtQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQW5CRixTQURLO0FBeUJMO0FBekJLLE9BQVA7QUE2QkQ7Ozs7RUF2RitCLGdCQUFNL0MsUztrQkFBbkIwQyxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDZnJCOzs7OztBQUdBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1GLFlBQVksbUJBQUFDLENBQVEsRUFBUixDQUFsQjs7SUFhcUJPLFMsV0FYcEIseUJBQVEsVUFBQ3ZELEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0x3RCxZQUFReEQsTUFBTWtCLElBQU4sQ0FBV1csU0FEZDtBQUVMbkosWUFBUXNILE1BQU14SCxPQUFOLENBQWNKLGNBRmpCO0FBR0wySixvQkFBZ0IvQixNQUFNa0IsSUFBTixDQUFXYSxjQUh0QjtBQUlMO0FBQ0EwQixvQkFBZ0J6RCxNQUFNa0IsSUFBTixDQUFXdUM7QUFDM0I7QUFDQTtBQVBLLEdBQVA7QUFTRCxDQVZBLEM7Ozs7Ozs7Ozs7Ozs7QUFhQzt1Q0FDbUJDLFMsRUFBVzs7QUFFNUIsV0FBS3RELEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsMkJBQWEsS0FBSzBGLEtBQUwsQ0FBV29ELE1BQXhCLENBQXBCOztBQUVBO0FBQ0EsVUFBTUcsT0FBTzlELFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBNkQsV0FBS0MsU0FBTCxHQUFpQkQsS0FBS0UsWUFBdEI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O3lDQUVxQjs7QUFFbkIsVUFBTVgsUUFBUSxJQUFkO0FBQ0FILGdCQUFVdEIsSUFBVixDQUFlLFVBQWYsRUFBMkIsVUFBUzBCLENBQVQsRUFBWTs7QUFFckMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFREgsY0FBTTlDLEtBQU4sQ0FBWTFGLFFBQVosQ0FBcUIseUJBQVV3SSxNQUFNOUMsS0FBTixDQUFZcUQsY0FBdEIsRUFBc0MsSUFBdEMsRUFBNENQLE1BQU05QyxLQUFOLENBQVlvRCxNQUF4RCxFQUFnRU4sTUFBTTlDLEtBQU4sQ0FBWTJCLGNBQTVFLEVBQ25CbUIsTUFBTTlDLEtBQU4sQ0FBWTFILE1BRE8sQ0FBckI7QUFFRCxPQVhEOztBQWFBcUssZ0JBQVV0QixJQUFWLENBQWUsT0FBZixFQUF3QixVQUFTMEIsQ0FBVCxFQUFZOztBQUVsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEOztBQUVEeEQsaUJBQVNDLGNBQVQsU0FBOEJvRCxNQUFNOUMsS0FBTixDQUFZcUQsY0FBMUMsRUFBNER4QixLQUE1RDtBQUNELE9BVkQ7O0FBWUFjLGdCQUFVdEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBUzBCLENBQVQsRUFBWTtBQUNsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEO0FBQ0RILGNBQU05QyxLQUFOLENBQVkxRixRQUFaLENBQXFCLHlCQUFVd0ksTUFBTTlDLEtBQU4sQ0FBWXFELGNBQXRCLEVBQXNDLEtBQXRDLEVBQTZDUCxNQUFNOUMsS0FBTixDQUFZb0QsTUFBekQsRUFBaUVOLE1BQU05QyxLQUFOLENBQVkyQixjQUE3RSxFQUNuQm1CLE1BQU05QyxLQUFOLENBQVkxSCxNQURPLENBQXJCO0FBRUQsT0FURDs7QUFXQXFLLGdCQUFVdEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBUzBCLENBQVQsRUFBWTs7QUFFbEMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFRCxZQUFNUyxTQUFTWixLQUFmO0FBQ0EsNkJBQVNhLE1BQVQsaURBQWdFLHlEQUFoRSxFQUEySCxFQUEzSCxFQUNJLFVBQVNDLEdBQVQsRUFBY3BHLEtBQWQsRUFBcUI7QUFDckJrRyxpQkFBTzFELEtBQVAsQ0FBYTFGLFFBQWIsQ0FBc0IsNkJBQWNvSixPQUFPMUQsS0FBUCxDQUFhcUQsY0FBM0IsRUFBMkM3RixLQUEzQyxFQUFrRGtHLE9BQU8xRCxLQUFQLENBQWFvRCxNQUEvRCxFQUNwQk0sT0FBTzFELEtBQVAsQ0FBYTJCLGNBRE8sRUFDUytCLE9BQU8xRCxLQUFQLENBQWExSCxNQUR0QixDQUF0QjtBQUVELFNBSkgsRUFLSSxZQUFXLENBQUUsQ0FMakIsRUFNRytELEdBTkgsQ0FNTyxRQU5QLEVBTWlCLEVBQUN3SCxJQUFJLElBQUwsRUFBV0MsUUFBUSxVQUFuQixFQU5qQjtBQU9ELE9BakJEO0FBa0JEOzs7MENBRXFCM0wsSSxFQUFNNEosRSxFQUFJOztBQUU5QixVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1QjtBQUNyQkQsV0FBR2lCLGNBQUg7QUFDQSxZQUFNZSxXQUFZaEMsR0FBR0UsTUFBSCxDQUFVekUsS0FBWCxHQUNidUUsR0FBR0UsTUFBSCxDQUFVekUsS0FERyxHQUViLENBRko7QUFHQSxhQUFLd0MsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixrQ0FBbUIsS0FBSzBGLEtBQUwsQ0FBV29ELE1BQTlCLEVBQXNDakwsSUFBdEMsRUFBNEM0TCxRQUE1QyxFQUFzRCxLQUFLL0QsS0FBTCxDQUFXMkIsY0FBakUsRUFDbEIsS0FBSzNCLEtBQUwsQ0FBVzFILE1BRE8sQ0FBcEI7QUFHRDtBQUVGOzs7d0NBRW1CSCxJLEVBQU00SixFLEVBQUk7O0FBRTVCLFVBQU1nQyxXQUFZaEMsR0FBR0UsTUFBSCxDQUFVekUsS0FBWCxHQUNidUUsR0FBR0UsTUFBSCxDQUFVekUsS0FERyxHQUViLENBRko7QUFHQSxXQUFLd0MsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixrQ0FBbUIsS0FBSzBGLEtBQUwsQ0FBV29ELE1BQTlCLEVBQXNDakwsSUFBdEMsRUFBNEM0TCxRQUE1QyxFQUFzRCxLQUFLL0QsS0FBTCxDQUFXMkIsY0FBakUsRUFDbEIsS0FBSzNCLEtBQUwsQ0FBVzFILE1BRE8sQ0FBcEI7QUFHRDs7O21DQUVjSCxJLEVBQU00SixFLEVBQUk7O0FBRXZCLFVBQU1JLE1BQU1sSixXQUFZOEksR0FBR0UsTUFBSCxDQUFVekUsS0FBdEIsSUFDUnVFLEdBQUdFLE1BQUgsQ0FBVXpFLEtBREYsR0FFUixDQUZKO0FBR0EsV0FBS3dDLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IseUJBQVVuQyxJQUFWLEVBQWdCZ0ssR0FBaEIsRUFBcUIsS0FBS25DLEtBQUwsQ0FBV29ELE1BQWhDLEVBQXdDLEtBQUtwRCxLQUFMLENBQVcyQixjQUFuRCxFQUFtRSxLQUFLM0IsS0FBTCxDQUFXMUgsTUFBOUUsQ0FBcEI7QUFFRDs7O3FDQUVnQnlKLEUsRUFBSTtBQUNuQkEsU0FBR2lCLGNBQUg7QUFDQW5JLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsVUFBSWlILEdBQUdDLEdBQUgsSUFBVSxPQUFkLEVBQXVCO0FBQ3JCbkgsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCaUgsR0FBR0MsR0FBM0I7QUFDQXZDLGlCQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRG1DLEtBQWpEO0FBQ0Q7QUFDRjs7O3NDQUVpQjFKLEksRUFBTTRKLEUsRUFBSTs7QUFFMUIsVUFBSUEsR0FBR0MsR0FBSCxJQUFVLE9BQWQsRUFBdUI7QUFDckJELFdBQUdpQixjQUFIO0FBQ0EsWUFBTWdCLE9BQVFqQyxHQUFHRSxNQUFILENBQVV6RSxLQUFYLEdBQ1R1RSxHQUFHRSxNQUFILENBQVV6RSxLQURELEdBRVQsQ0FGSjtBQUdBLGFBQUt3QyxLQUFMLENBQVcxRixRQUFYLENBQW9CLDhCQUFlLEtBQUswRixLQUFMLENBQVdvRCxNQUExQixFQUFrQ2pMLElBQWxDLEVBQXdDNkwsSUFBeEMsQ0FBcEI7QUFFRDtBQUVGOzs7b0NBRWU3TCxJLEVBQU00SixFLEVBQUk7O0FBRXhCLFVBQU1pQyxPQUFRakMsR0FBR0UsTUFBSCxDQUFVekUsS0FBWCxHQUNUdUUsR0FBR0UsTUFBSCxDQUFVekUsS0FERCxHQUVULENBRko7QUFHQSxXQUFLd0MsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQiw4QkFBZSxLQUFLMEYsS0FBTCxDQUFXb0QsTUFBMUIsRUFBa0NqTCxJQUFsQyxFQUF3QzZMLElBQXhDLENBQXBCO0FBRUQ7OztzQ0FFaUI3TCxJLEVBQU00SixFLEVBQUk7O0FBRTFCLFdBQUsvQixLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLDRCQUFQLEVBQXFDQyxTQUFTTixJQUE5QyxFQUFwQjtBQUVEOzs7K0JBRVVBLEksRUFBTTRKLEUsRUFBSTs7QUFFbkIsV0FBSy9CLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsNkJBQWUsS0FBSzBGLEtBQUwsQ0FBV29ELE1BQTFCLEVBQWtDakwsSUFBbEMsQ0FBcEI7QUFFRDs7OytCQUVVNEosRSxFQUFJO0FBQ2JBLFNBQUdFLE1BQUgsQ0FBVWdDLE1BQVY7QUFDRDs7QUFFRDs7Ozs2QkFFUztBQUFBOztBQUVQLFVBQU14QyxZQUFZLEtBQUt6QixLQUFMLENBQVdvRCxNQUE3QjtBQUNBLFVBQU1jLFNBQVN6QyxVQUFVbkQsR0FBVixDQUFjLFVBQUN6QyxJQUFELEVBQU9zRCxLQUFQLEVBQWlCOztBQUU1QyxZQUFNZ0YsY0FBZXRJLEtBQUt1SSxPQUFMLENBQWFqTSxJQUFiLElBQXFCLE9BQUs2SCxLQUFMLENBQVdxRCxjQUFoQyxJQUFrRHhILEtBQUt1SSxPQUFMLENBQWFDLE9BQWIsSUFBd0IsT0FBS3JFLEtBQUwsQ0FBV3FELGNBQXRGLEdBQ2hCLCtCQURnQixHQUVoQixnQkFGSjs7QUFJQSxZQUFNaUIsa0JBQWtCLE9BQUt0RSxLQUFMLENBQVd1QyxRQUFYLEdBQXNCLHlCQUF0QixHQUFrRCxnQkFBMUU7O0FBRUEsWUFBTWdDLFNBQVUxSSxLQUFLdUksT0FBTCxDQUFhSSxTQUFkLEdBQ1gzSSxLQUFLdUksT0FBTCxDQUFhSyxLQURGLEdBRVgsQ0FGSjs7QUFJQSxZQUFNQyxXQUFXO0FBQ2Ysc0JBQVU3SSxLQUFLdUksT0FBTCxDQUFhak0sSUFEUjtBQUVmLG9CQUFVLE9BQUs2SCxLQUFMLENBQVd1QyxRQUZOO0FBR2Ysb0JBQVUsT0FBS29DLGNBQUwsQ0FBb0J0RCxJQUFwQixTQUErQnhGLEtBQUsrSSxJQUFwQyxDQUhLO0FBSWYsbUJBQVMsT0FBS0MsVUFBTCxDQUFnQnhELElBQWhCLFFBSk07QUFLZixtQkFBUyxPQUFLeUQsZ0JBQUwsQ0FBc0J6RCxJQUF0QixRQUxNO0FBTWYsZ0JBQUssUUFOVTtBQU9mLHFCQUFVLGNBUEs7QUFRZixpQkFBT3hGLEtBQUtzRztBQVJHLFVBQWpCOztBQVdBLFlBQU00QyxnQkFBZ0IsT0FBSy9FLEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0IwTSxVQUFsQixHQUNsQjtBQUNBLG9CQUFVLE9BQUtoRixLQUFMLENBQVd1QyxRQURyQjtBQUVBLHNCQUFZLE9BQUswQyxxQkFBTCxDQUEyQjVELElBQTNCLFNBQXNDeEYsS0FBSytJLElBQTNDLENBRlo7QUFHQSxrQkFBUSxPQUFLTSxtQkFBTCxDQUF5QjdELElBQXpCLFNBQW9DeEYsS0FBSytJLElBQXpDLENBSFI7QUFJQSxtQkFBUyxPQUFLQyxVQUFMLENBQWdCeEQsSUFBaEIsUUFKVDtBQUtBLGdCQUFLLFFBTEwsRUFLYyxXQUFVLGNBTHhCO0FBTUEsd0JBQWNwSSxXQUFXNEMsS0FBS2tJLFFBQWhCO0FBTmQsVUFEa0IsR0FTbEI7QUFDQSxvQkFBVSxPQUFLL0QsS0FBTCxDQUFXdUMsUUFEckI7QUFFQSxzQkFBWSxPQUFLMEMscUJBQUwsQ0FBMkI1RCxJQUEzQixTQUFzQ3hGLEtBQUsrSSxJQUEzQyxDQUZaO0FBR0Esa0JBQVEsT0FBS00sbUJBQUwsQ0FBeUI3RCxJQUF6QixTQUFvQ3hGLEtBQUsrSSxJQUF6QyxDQUhSO0FBSUEsbUJBQVMsT0FBS0MsVUFBTCxDQUFnQnhELElBQWhCLFFBSlQ7QUFLQSxnQkFBSyxRQUxMLEVBS2MsV0FBVTtBQUx4QixVQVRKOztBQWlCQSxlQUFPO0FBQUE7QUFBQSxZQUFLLFdBQVc4QyxXQUFoQjtBQUNMLGlCQUFLdEksS0FBSytJLElBREw7QUFFTCxxQkFBUyxPQUFLTyxpQkFBTCxDQUF1QjlELElBQXZCLFNBQWtDeEYsS0FBS3VJLE9BQUwsQ0FBYWpNLElBQS9DLENBRko7QUFJTDtBQUFBO0FBQUEsY0FBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUcwRCxpQkFBS3VJLE9BQUwsQ0FBYWpNO0FBRmhCLFdBSks7QUFRTDtBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUcwRCxpQkFBS3VJLE9BQUwsQ0FBYXpHO0FBRmhCLFdBUks7QUFZTDtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUcrRztBQUZILFdBWks7QUFnQkw7QUFBQTtBQUFBLGNBQUssV0FBVSwwQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBRUt6TCx1QkFBVzRDLEtBQUt1SixVQUFoQixFQUE0QmpFLFdBQTVCLENBQXdDLENBQXhDLEVBQTJDLEdBQTNDLEVBQWdELEdBQWhEO0FBRkwsV0FoQks7QUFvQkw7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVHNEQ7QUFGSCxXQXBCSztBQXdCTDtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUdSO0FBRkgsV0F4Qks7QUE0Qkw7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBRU8xSSxpQkFBS3dKLFdBQUwsQ0FBaUJsRSxXQUFqQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQztBQUZQLFdBNUJLO0FBaUNMO0FBQUE7QUFBQSxjQUFNLFdBQVdtRCxlQUFqQjtBQUNFLGlEQUFHLFNBQVMsT0FBS2dCLFVBQUwsQ0FBZ0JqRSxJQUFoQixTQUEyQnhGLEtBQUsrSSxJQUFoQyxDQUFaLEVBQW1ELFdBQVUsb0JBQTdEO0FBREY7QUFqQ0ssU0FBUDtBQXNDRCxPQTlFYyxDQUFmOztBQWdGQTtBQUNBO0FBQ0E7O0FBRUEsYUFBTztBQUFBO0FBQUEsVUFBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxXQUE5QjtBQUNKVjtBQURJLE9BQVA7QUFJRDs7OztFQTNQb0MsZ0JBQU0vRCxTO2tCQUF4QmdELFM7Ozs7Ozs7O2dDQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7O1FDaEJMb0MsWSxHQUFBQSxZO1FBNkNBQyxjLEdBQUFBLGM7QUFsRGhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNELFlBQVQsQ0FBc0JuQyxNQUF0QixFQUE4Qjs7QUFFbkMsTUFBSXFDLFdBQVcsQ0FBZjtBQUNBLE1BQUlDLHFCQUFxQixDQUF6QjtBQUNBLE1BQUlqQixRQUFRLENBQVo7QUFDQSxNQUFJNUQsUUFBUSxDQUFaO0FBQ0EsTUFBSThFLGdCQUFnQixDQUFwQjs7QUFFQTtBQUNBdkMsU0FBTzdGLE9BQVAsQ0FBZSxVQUFDMUIsSUFBRCxFQUFVOztBQUV2QjZKLHlCQUFxQkEscUJBQXFCN0osS0FBSzZKLGtCQUEvQzs7QUFFQUQsZUFBV0EsV0FBVzVKLEtBQUs0SixRQUEzQjs7QUFFQSxRQUFNRyxZQUFhL0osS0FBS3VJLE9BQUwsQ0FBYUksU0FBZCxHQUNkM0ksS0FBSzRKLFFBQUwsSUFBaUI1SixLQUFLdUksT0FBTCxDQUFhSyxLQUFiLEdBQXFCLEdBQXRDLENBRGMsR0FFZCxDQUZKOztBQUlBLFFBQU1vQixhQUFjaEssS0FBS3VJLE9BQUwsQ0FBYTBCLFVBQWQsR0FDZmpLLEtBQUs0SixRQUFMLElBQWlCNUosS0FBS3VJLE9BQUwsQ0FBYTJCLE1BQWIsR0FBc0IsR0FBdkMsQ0FEZSxHQUVmLENBRko7O0FBSUF0QixZQUFRQSxRQUFRbUIsU0FBUixHQUFvQkMsVUFBNUI7O0FBRUFGLG9CQUFnQkEsZ0JBQWdCOUosS0FBS21LLGdCQUFyQyxDQWhCdUIsQ0FnQitCO0FBRXZELEdBbEJEO0FBbUJBO0FBQ0E7QUFDQW5GLFVBQVE0RSxXQUFXaEIsS0FBbkI7QUFDQTtBQUNBLFNBQU87QUFDTGpNLFVBQU0sb0JBREQ7QUFFTEMsYUFBUztBQUNQZ04sZ0JBQVVBLFFBREg7QUFFUGhCLGFBQU9BLEtBRkE7QUFHUDVELGFBQU9BLEtBSEE7QUFJUDhFLHFCQUFlQSxhQUpSO0FBS1BELDBCQUFvQkE7QUFMYjtBQUZKLEdBQVA7QUFVRDs7QUFFRDtBQUNPLFNBQVNGLGNBQVQsQ0FBd0JoRSxXQUF4QixFQUFxQ3JKLElBQXJDLEVBQTJDOztBQUVoRCxNQUFNOE4sY0FBY3pFLFlBQVluSixTQUFaLENBQXNCO0FBQUEsV0FBUXdELEtBQUsrSSxJQUFMLElBQWF6TSxJQUFyQjtBQUFBLEdBQXRCLENBQXBCLENBRmdELENBRXFCOztBQUVyRSxNQUFNSSxNQUFPME4sZUFBZSxDQUFDLENBQWpCLEdBQW9CO0FBQzVCO0FBQ0F6TixVQUFNLDJCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGtCQUROO0FBRUFDLGFBQVN3TjtBQUZULEdBTEo7O0FBVUEsU0FBTzFOLEdBQVA7QUFDRDs7Ozs7Ozs7Z0NBNURlZ04sWTs7Z0NBNkNBQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNsRGhCOzs7OztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFRcUJVLEssV0FOcEIseUJBQVEsVUFBQ3RHLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xlLGVBQVdmLE1BQU1nQixJQUFOLENBQVdELFNBRGpCO0FBRUxFLFdBQU9qQixNQUFNa0IsSUFBTixDQUFXQztBQUZiLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7O2tDQVFnQjtBQUNiLFdBQUtmLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sbUJBQVAsRUFBNEJDLFNBQVMsRUFBckMsRUFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLFVBQU0wTixhQUFhLEtBQUtuRyxLQUFMLENBQVdXLFNBQVgsR0FBdUIsc0JBQXZCLEdBQWdELFlBQW5FO0FBQ0EsVUFBTXlGLHNCQUFzQixLQUFLcEcsS0FBTCxDQUFXVyxTQUFYLEdBQXVCLDhCQUF2QixHQUF3RCxvQkFBcEY7QUFDQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVd3RixVQUFoQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVdDLG1CQUFoQjtBQU1FLGdFQU5GO0FBT0UsK0RBUEY7QUFRRTtBQVJGLFNBREs7QUFZTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQUE7QUFDSyxlQUFLcEcsS0FBTCxDQUFXYSxLQUFYLENBQWlCTSxXQUFqQixFQURMO0FBRUUsK0NBQUcsV0FBVSxxQkFBYixFQUFtQyxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTVDO0FBRkY7QUFaSyxPQUFQO0FBaUJEOzs7O0VBM0JnQyxnQkFBTWxCLFM7a0JBQXBCK0YsSzs7Ozs7Ozs7Z0NBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2hCckI7Ozs7O0FBR0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0lBZ0JxQkcsTyxXQWRwQix5QkFBUSxVQUFDekcsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTHhILGFBQVN3SCxNQUFNeEgsT0FBTixDQUFjQSxPQURsQjtBQUVMSixvQkFBZ0I0SCxNQUFNeEgsT0FBTixDQUFjSixjQUZ6QjtBQUdMOEksVUFBTWxCLE1BQU1rQixJQUFOLENBQVdXLFNBSFo7QUFJTEUsb0JBQWdCL0IsTUFBTWtCLElBQU4sQ0FBV2EsY0FKdEI7QUFLTHJKLFlBQVFzSCxNQUFNeEgsT0FBTixDQUFjSixjQUxqQjtBQU1MVyxXQUFPaUgsTUFBTXhILE9BQU4sQ0FBY08sS0FOaEI7QUFPTEMsVUFBTWdILE1BQU14SCxPQUFOLENBQWNILFlBUGY7QUFRTDtBQUNBcU8sVUFBTTFHLE1BQU14SCxPQUFOLENBQWNtTztBQUNwQjtBQVZLLEdBQVA7QUFZRCxDQWJBLEM7Ozs7Ozs7Ozs7OzhDQWdCMkJDLFMsRUFBVztBQUNuQyxVQUFJQSxVQUFVeE8sY0FBVixJQUE0QixLQUFLZ0ksS0FBTCxDQUFXaEksY0FBM0MsRUFBMkQ7QUFDekQ7O0FBRUEsWUFBSSxDQUFDd08sVUFBVXhPLGNBQVYsQ0FBeUJnTixVQUE5QixFQUEwQztBQUN4QyxjQUFNakIsV0FBV3lDLFVBQVVsTyxNQUFWLENBQWlCbU8sZUFBakIsR0FBbUNELFVBQVVsTyxNQUFWLENBQWlCbU8sZUFBcEQsR0FBc0UsQ0FBdkY7QUFDQTtBQUNBLGVBQUt6RyxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLHFCQUFQLEVBQThCQyxTQUFTc0wsUUFBdkMsRUFBcEI7O0FBRUE7QUFDQSxjQUFJeUMsVUFBVWxPLE1BQVYsQ0FBaUJtTyxlQUFyQixFQUFzQztBQUNwQ2hILHFCQUFTQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDbEMsS0FBekMsR0FBaUR1RyxRQUFqRDtBQUNBdEUscUJBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUM2QyxRQUF6QyxHQUFvRCxJQUFwRDtBQUNELFdBSEQsTUFHTztBQUNMOUMscUJBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNsQyxLQUF6QyxHQUFpRCxFQUFqRDtBQUNBaUMscUJBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUM2QyxRQUF6QyxHQUFvRCxLQUFwRDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUVEO0FBQ0Y7Ozt5Q0FFb0I7O0FBRW5CLFdBQUt2QyxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLEVBQXBDLEVBQXBCO0FBQ0EsV0FBS3VILEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFwQjs7QUFFQSxVQUFNaU8sZUFBZTtBQUNuQnZNLGFBQUssY0FEYztBQUVuQkMscUJBQWEseUJBRk07QUFHbkJDLG1CQUFXO0FBSFEsT0FBckI7O0FBTUEsV0FBSzJGLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsMEJBQWdCb00sWUFBaEIsQ0FBcEI7QUFFRDs7O2tDQUVhM0UsRSxFQUFJO0FBQ2hCO0FBQ0EsVUFBSUEsR0FBR0MsR0FBSCxJQUFVLE9BQWQsRUFBdUI7O0FBRXJCLFlBQU03SixPQUFPNEosR0FBR0UsTUFBSCxDQUFVekUsS0FBdkIsQ0FGcUIsQ0FFUTtBQUM3QixhQUFLd0MsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQiw2QkFBZW5DLElBQWYsRUFBcUIsS0FBSzZILEtBQUwsQ0FBVzVILE9BQWhDLENBQXBCLEVBSHFCLENBR3lDO0FBQy9EO0FBRUY7OzsrQkFFVTJKLEUsRUFBSTtBQUNiLFVBQU1ySixNQUFNcUosR0FBR0UsTUFBSCxDQUFVekUsS0FBdEI7QUFDQSxXQUFLd0MsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQiwyQkFBYTVCLEdBQWIsRUFBa0IsS0FBS3NILEtBQUwsQ0FBV3JILEtBQTdCLENBQXBCLEVBRmEsQ0FFNEM7QUFDMUQ7OztpQ0FFWW9KLEUsRUFBSTtBQUNmLFdBQUsvQixLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLFlBQVAsRUFBcUJDLFNBQVMsRUFBOUIsRUFBcEIsRUFEZSxDQUN3QztBQUN4RDs7O3dDQUVtQjs7QUFFbEIsV0FBS3VILEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsNEJBQXBCO0FBRUQ7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVA7QUFDQTtBQUNBOztBQUVBLFVBQU1xTSxlQUFnQixLQUFLM0csS0FBTCxDQUFXaEksY0FBWixHQUNkLEtBQUtnSSxLQUFMLENBQVdoSSxjQUFYLENBQTBCa0YsSUFEWixTQUNvQixLQUFLOEMsS0FBTCxDQUFXaEksY0FBWCxDQUEwQjRPLFNBRDlDLEdBRWpCLGlCQUZKOztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFLGlEQUFLLFVBQVUsS0FBSzVHLEtBQUwsQ0FBV3VDLFFBQTFCLEVBQW9DLFNBQVMsS0FBS3NFLGlCQUFMLENBQXVCeEYsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBN0M7QUFDRSxpQkFBSTtBQUROO0FBREYsU0FGSztBQVFMO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRSxxREFBTyxVQUFVLEtBQUtyQixLQUFMLENBQVd1QyxRQUE1QixFQUFzQyxXQUFXLEtBQUtDLGFBQUwsQ0FBbUJuQixJQUFuQixDQUF3QixJQUF4QixDQUFqRDtBQUNFLG9CQUFLO0FBRFA7QUFGRixXQUZGO0FBU0U7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFPc0Y7QUFBUDtBQUZGO0FBVEY7QUFSSyxPQUFQO0FBMEJEOzs7O0VBNUdrQyxnQkFBTXhHLFM7a0JBQXRCa0csTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3pCckI7Ozs7O0FBR0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBY3FCUyxNLFdBWnBCLHlCQUFRLFVBQUNsSCxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMaUIsV0FBT2pCLE1BQU1rQixJQUFOLENBQVdDLFNBRGI7QUFFTHpJLFlBQVFzSCxNQUFNeEgsT0FBTixDQUFjSixjQUZqQjtBQUdMeU0sV0FBTzdFLE1BQU1rQixJQUFOLENBQVdpRyxTQUhiO0FBSUxwQixtQkFBZS9GLE1BQU1rQixJQUFOLENBQVc2RSxhQUpyQjtBQUtMRCx3QkFBb0I5RixNQUFNa0IsSUFBTixDQUFXa0csc0JBTDFCO0FBTUx4RixpQkFBYTVCLE1BQU1rQixJQUFOLENBQVdXLFNBTm5CO0FBT0xFLG9CQUFnQi9CLE1BQU1rQixJQUFOLENBQVdhO0FBQzNCO0FBUkssR0FBUDtBQVVELENBWEEsQzs7O0FBY0Msa0JBQVkzQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtpSCxLQUFMLEdBQWE7QUFDWEMsbUJBQWE7QUFERixLQUFiO0FBRmlCO0FBS2xCOzs7O3VDQUVrQjtBQUNqQixXQUFLbEgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxvQkFBUCxFQUE2QkMsU0FBUyxDQUFDLENBQXZDLEVBQXBCO0FBQ0Q7OztrQ0FFYXNKLEUsRUFBSTtBQUNoQjtBQUNBLFVBQUlBLEdBQUdDLEdBQUgsSUFBVSxPQUFkLEVBQXVCOztBQUVyQixZQUFNK0IsV0FBWWhDLEdBQUdFLE1BQUgsQ0FBVXpFLEtBQVgsR0FDYnVFLEdBQUdFLE1BQUgsQ0FBVXpFLEtBREcsR0FFYixDQUZKO0FBR0E7QUFDQSxZQUFNMkosY0FBYyxLQUFLbkgsS0FBTCxDQUFXMUgsTUFBWCxDQUFrQjZPLFdBQWxCLEdBQWdDLEtBQUtuSCxLQUFMLENBQVcxSCxNQUFYLENBQWtCNk8sV0FBbEQsR0FBZ0UsR0FBcEY7QUFDQSxZQUFJcEQsWUFBWW9ELFdBQWhCLEVBQTZCO0FBQzNCLGVBQUtuSCxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLHFCQUFQLEVBQThCQyxTQUFTc0wsUUFBdkMsRUFBcEI7QUFDQSxlQUFLL0QsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQix5QkFBVyxLQUFLMEYsS0FBTCxDQUFXd0IsV0FBdEIsRUFBbUMsS0FBS3lGLEtBQUwsQ0FBV0MsV0FBOUMsRUFBMkQsS0FBS2xILEtBQUwsQ0FBVzFILE1BQXRFLENBQXBCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsK0JBQVMwQyxLQUFULENBQWUsT0FBZix1RUFBMkZtTSxXQUEzRjtBQUNBMUgsbUJBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNsQyxLQUF6QyxHQUFpRHZFLFdBQVcsS0FBSytHLEtBQUwsQ0FBVzJCLGNBQXRCLENBQWpEO0FBQ0Q7QUFDRixPQWRELE1BY087QUFDTCxhQUFLc0YsS0FBTCxDQUFXQyxXQUFYLEdBQTBCbkYsR0FBR0UsTUFBSCxDQUFVekUsS0FBWCxHQUNyQnZFLFdBQVc4SSxHQUFHRSxNQUFILENBQVV6RSxLQUFyQixDQURxQixHQUVyQixDQUZKO0FBR0Q7QUFFRjs7O2dDQUVXdUUsRSxFQUFJO0FBQ2Q7O0FBRUEsVUFBTWdDLFdBQVloQyxHQUFHRSxNQUFILENBQVV6RSxLQUFYLEdBQ2J1RSxHQUFHRSxNQUFILENBQVV6RSxLQURHLEdBRWIsQ0FGSjtBQUdBO0FBQ0EsVUFBTTJKLGNBQWMsS0FBS25ILEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0I2TyxXQUFsQixHQUFnQyxLQUFLbkgsS0FBTCxDQUFXMUgsTUFBWCxDQUFrQjZPLFdBQWxELEdBQWdFLEdBQXBGO0FBQ0EsVUFBSXBELFlBQVlvRCxXQUFoQixFQUE2QjtBQUMzQixhQUFLbkgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxxQkFBUCxFQUE4QkMsU0FBU3NMLFFBQXZDLEVBQXBCO0FBQ0EsYUFBSy9ELEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IseUJBQVcsS0FBSzBGLEtBQUwsQ0FBV3dCLFdBQXRCLEVBQW1DLEtBQUt5RixLQUFMLENBQVdDLFdBQTlDLEVBQTJELEtBQUtsSCxLQUFMLENBQVcxSCxNQUF0RSxDQUFwQjtBQUNELE9BSEQsTUFHTztBQUNMLDZCQUFTMEMsS0FBVCxDQUFlLE9BQWYsdUVBQTJGbU0sV0FBM0Y7QUFDQTFILGlCQUFTQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDbEMsS0FBekMsR0FBaUR2RSxXQUFXLEtBQUsrRyxLQUFMLENBQVcyQixjQUF0QixDQUFqRDtBQUNEO0FBRUY7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDTDtBQUFBO0FBQUEsWUFBSyxPQUFPO0FBQ1YsNEJBQWMsR0FESjtBQUVWLDJCQUFhO0FBRkgsYUFBWixFQUdHLFdBQVUscUJBSGI7QUFPRTtBQUFBO0FBQUEsY0FBTyxXQUFVLG9CQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxPQUFkO0FBQUE7QUFBeUIsdUJBQUszQixLQUFMLENBQVcwRixrQkFBWCxDQUE4QnZFLFdBQTlCLENBQTBDLENBQTFDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxEO0FBQXpCO0FBRkYsZUFERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxvQkFBSSxPQUFPO0FBQ1QsK0JBQVM7QUFEQSxxQkFBWDtBQUFBO0FBQUEsaUJBREY7QUFJRTtBQUFBO0FBQUEsb0JBQUksT0FBTztBQUNULGlDQUFXO0FBREYscUJBQVg7QUFHRTtBQUNFLHdCQUFHLGVBREw7QUFFRSw4QkFBVSxLQUFLbkIsS0FBTCxDQUFXdUMsUUFGdkI7QUFHRSxnQ0FBWSxLQUFLQyxhQUFMLENBQW1CbkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FIZDtBQUlFLDhCQUFVLEtBQUttQixhQUFMLENBQW1CbkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FKWjtBQUtFLDRCQUFRLEtBQUsrRixXQUFMLENBQWlCL0YsSUFBakIsQ0FBc0IsSUFBdEIsQ0FMVjtBQU1FLDBCQUFLLFFBTlA7QUFPRSwyQkFBTztBQUNMLCtCQUFTLE1BREo7QUFFTCxnQ0FBVSxNQUZMO0FBR0wsaUNBQVcsWUFITjtBQUlMLGtDQUFZLE1BSlA7QUFLTCxnQ0FBVSxHQUxMO0FBTUwsa0NBQVksVUFOUDtBQU9MLGlDQUFXO0FBUE4scUJBUFQ7QUFnQkUsK0JBQVUseUNBaEJaO0FBSEY7QUFKRixlQU5GO0FBaUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxPQUFkO0FBQUE7QUFBeUIsdUJBQUtyQixLQUFMLENBQVcyRixhQUFYLENBQXlCeEUsV0FBekIsQ0FBcUMsQ0FBckMsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0M7QUFBekI7QUFGRixlQWpDRjtBQXVDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFJLFdBQVUsT0FBZDtBQUFBO0FBQXlCLHVCQUFLbkIsS0FBTCxDQUFXeUUsS0FBWCxDQUFpQnRELFdBQWpCLENBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQXpCO0FBRkYsZUF2Q0Y7QUEyQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLE9BQWQ7QUFBQTtBQUF5Qix1QkFBS25CLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQk0sV0FBakIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFBekI7QUFIRjtBQTNDRjtBQURGO0FBUEY7QUFESyxPQUFQO0FBK0REOzs7O0VBekhpQyxnQkFBTWhCLFM7a0JBQXJCMkcsTTs7Ozs7Ozs7Z0NBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3JCckI7Ozs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQk8sTyxXQUhwQix5QkFBUSxVQUFDekgsS0FBRCxFQUFXO0FBQ2xCO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7OzttQ0FLZ0I7QUFDYixXQUFLSSxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLGdCQUFQLEVBQXlCQyxTQUFTLENBQUMsQ0FBbkMsRUFBcEI7QUFDRDs7O3NDQUNpQjtBQUNoQixXQUFLdUgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxvQkFBUCxFQUE2QkMsU0FBUyxDQUFDLENBQXZDLEVBQXBCO0FBQ0Q7OztvQ0FDZTtBQUNkLFdBQUt1SCxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLENBQUMsQ0FBckMsRUFBcEI7QUFDRDs7O3dDQUNtQjtBQUNsQixXQUFLdUgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxxQkFBUCxFQUE4QkMsU0FBUyxDQUFDLENBQXhDLEVBQXBCO0FBQ0Q7Ozs4QkFDUztBQUNSO0FBQ0E2RyxhQUFPZ0ksUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsWUFBdkI7QUFDQTtBQUNEOztBQUVEOzs7OzZCQUNTOztBQUVQLFVBQU1DLFVBQVUsS0FBS3hILEtBQUwsQ0FBV3VDLFFBQVgsR0FDWjtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDRSxxQkFBUyxLQUFLa0YsZUFBTCxDQUFxQnBHLElBQXJCLENBQTBCLElBQTFCLENBRFg7QUFFRSxtQkFBTztBQUNMLHdCQUFVLE1BREw7QUFFTCx1QkFBUyxLQUZKO0FBR0wsMkJBQWE7QUFIUixhQUZUO0FBT0UsdUJBQVUsbUNBUFo7QUFBQTtBQVNFO0FBQUE7QUFBQTtBQUNFLGlEQUFHLFdBQVUsYUFBYjtBQURGO0FBVEYsU0FEQTtBQWNBO0FBQUE7QUFBQTtBQUNFLHFCQUFTLEtBQUtxRyxPQUFMLENBQWFyRyxJQUFiLENBQWtCLElBQWxCLENBRFg7QUFFRSxtQkFBTztBQUNMLHdCQUFVLE1BREw7QUFFTCx1QkFBUyxLQUZKO0FBR0wsMkJBQWE7QUFIUixhQUZUO0FBT0UsdUJBQVUsbUNBUFo7QUFBQTtBQVNFO0FBQUE7QUFBQTtBQUNFLGlEQUFHLFdBQVUsZUFBYjtBQURGO0FBVEY7QUFkQSxPQURZLEdBNkJaLEVBN0JKOztBQStCQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFNTDtBQUFBO0FBQUE7QUFDRSxzQkFBVSxLQUFLckIsS0FBTCxDQUFXdUMsUUFEdkI7QUFFRSxxQkFBUyxLQUFLb0YsWUFBTCxDQUFrQnRHLElBQWxCLENBQXVCLElBQXZCLENBRlg7QUFHRSxtQkFBTztBQUNMLHdCQUFVLE1BREw7QUFFTCx1QkFBUyxLQUZKO0FBR0wsMkJBQWE7QUFIUixhQUhUO0FBUUUsdUJBQVUsbUNBUlo7QUFBQTtBQVVFO0FBQUE7QUFBQTtBQUNFLGlEQUFHLFdBQVUsbUJBQWI7QUFERjtBQVZGLFNBTks7QUFxQkw7QUFBQTtBQUFBO0FBQ0Usc0JBQVUsS0FBS3JCLEtBQUwsQ0FBV3VDLFFBRHZCO0FBRUUscUJBQVMsS0FBS3FGLGFBQUwsQ0FBbUJ2RyxJQUFuQixDQUF3QixJQUF4QixDQUZYO0FBR0UsbUJBQU87QUFDTCx3QkFBVSxNQURMO0FBRUwsdUJBQVMsS0FGSjtBQUdMLDJCQUFhO0FBSFIsYUFIVDtBQVFFLHVCQUFVLG1DQVJaO0FBQUE7QUFVRTtBQUFBO0FBQUE7QUFDRSxpREFBRyxXQUFVLFlBQWI7QUFERjtBQVZGLFNBckJLO0FBb0NMO0FBQUE7QUFBQTtBQUNFLHNCQUFVLEtBQUtyQixLQUFMLENBQVd1QyxRQUR2QjtBQUVFLHFCQUFTLEtBQUtzRixpQkFBTCxDQUF1QnhHLElBQXZCLENBQTRCLElBQTVCLENBRlg7QUFHRSxtQkFBTztBQUNMLHdCQUFVLE1BREw7QUFFTCx1QkFBUyxLQUZKO0FBR0wsMkJBQWE7QUFIUixhQUhUO0FBUUUsdUJBQVUsbUNBUlo7QUFBQTtBQVVFO0FBQUE7QUFBQTtBQUNFLGlEQUFHLFdBQVUsWUFBYjtBQURGO0FBVkYsU0FwQ0s7QUFtREptRztBQW5ESSxPQUFQO0FBdUREOzs7O0VBN0drQyxnQkFBTXJILFM7a0JBQXRCa0gsTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ1RyQjs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNMUUsWUFBWSxtQkFBQUMsQ0FBUSxFQUFSLENBQWxCOztJQU1xQmtGLGMsV0FKcEIseUJBQVEsVUFBQ2xJLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUNtSSxTQUFTbkksTUFBTWtJLGNBQU4sQ0FBcUJDLE9BQS9CLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7OytCQU1ZaEcsRSxFQUFJOztBQUViLFVBQUlBLEdBQUdFLE1BQUgsQ0FBVStGLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLFVBQTdCLENBQUosRUFBOEM7QUFDNUMsYUFBS2pJLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IseUJBQXBCO0FBQ0FtRixpQkFBU0MsY0FBVCxDQUF3Qix1QkFBeEIsRUFBaURtQyxLQUFqRDtBQUNBYyxrQkFBVU8sTUFBVixDQUFpQixLQUFqQjtBQUNEO0FBRUY7QUFDRDs7Ozs2QkFDUzs7QUFFUCxVQUFNZ0YsZUFBZ0IsS0FBS2xJLEtBQUwsQ0FBVytILE9BQVosR0FDakIsdURBRGlCLEdBRWpCLDRDQUZKOztBQUlBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBV0csWUFBaEIsRUFBOEIsU0FBUyxLQUFLQyxVQUFMLENBQWdCOUcsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdkM7QUFFTDtBQUFBO0FBQUEsWUFBUSxXQUFVLGlCQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUZLO0FBTUw7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBRUUsdUVBRkY7QUFHRTtBQUhGO0FBREY7QUFERjtBQU5LLE9BQVA7QUFpQkQ7Ozs7RUFuQ3lDLGdCQUFNbEIsUztrQkFBN0IySCxjOzs7Ozs7OztnQ0FBQUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JyQjs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7O0lBUXFCTSxVLFdBTnBCLHlCQUFRLFVBQUN4SSxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMMkIsY0FBVTNCLE1BQU0yQixRQUFOLENBQWVBLFFBRHBCO0FBRUw4RyxpQkFBYXpJLE1BQU1rSSxjQUFOLENBQXFCTztBQUY3QixHQUFQO0FBSUQsQ0FMQSxDOzs7QUFRQyxzQkFBWXJJLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS2lILEtBQUwsR0FBYTtBQUNYcUIsaUJBQVc7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhdkcsRSxFQUFJOztBQUVoQixVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1Qjs7QUFFckJELFdBQUdpQixjQUFIO0FBQ0EsYUFBS3VGLG1CQUFMO0FBRUQsT0FMRCxNQUtPO0FBQ0wsYUFBS3ZJLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sZ0NBQVAsRUFBeUNDLFNBQVNzSixHQUFHRSxNQUFILENBQVV6RSxLQUE1RCxFQUFwQjtBQUNEO0FBRUY7OzswQ0FFcUI7QUFDcEIsV0FBS3dDLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsNEJBQWMsS0FBSzBGLEtBQUwsQ0FBV3FJLFdBQXpCLEVBQXNDLEtBQUtySSxLQUFMLENBQVd1QixRQUFqRCxDQUFwQjtBQUNEOzs7NkJBRVE7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBTSxRQUFPLEVBQWIsRUFBZ0IsV0FBVSwyQkFBMUI7QUFDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxzQkFBZjtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsbUJBQWY7QUFDRSx1REFBTyxXQUFXLEtBQUtpQixhQUFMLENBQW1CbkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEIsRUFBaUQsVUFBVSxLQUFLbUIsYUFBTCxDQUFtQm5CLElBQW5CLENBQXdCLElBQXhCLENBQTNELEVBQTBGLE9BQU8sS0FBS3JCLEtBQUwsQ0FBV3FJLFdBQTVHLEVBQXlILE1BQUssTUFBOUgsRUFBcUksT0FBTztBQUMxSSwyQkFBUztBQURpSSxpQkFBNUksRUFFRyxJQUFHLHNCQUZOLEVBRTZCLFdBQVUsaUNBRnZDO0FBREYsYUFERjtBQU1FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsU0FBUyxLQUFLRSxtQkFBTCxDQUF5QmxILElBQXpCLENBQThCLElBQTlCLENBQWpCLEVBQXNELE1BQUssUUFBM0QsRUFBb0UsSUFBRyxvQkFBdkUsRUFBNEYsT0FBTztBQUNqRyw4QkFBVSxNQUR1RjtBQUVqRyw2QkFBUztBQUZ3RixtQkFBbkcsRUFHRyxXQUFVLDRDQUhiO0FBSUUsd0RBQU0sV0FBVSxjQUFoQjtBQUpGO0FBREY7QUFORjtBQUpGO0FBREssT0FBUDtBQXVCRDs7OztFQW5EcUMsZ0JBQU1sQixTO2tCQUF6QmlJLFU7Ozs7Ozs7O2dDQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFLcUJJLFksV0FIcEIseUJBQVEsVUFBQzVJLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUM2SSxTQUFTN0ksTUFBTWtJLGNBQU4sQ0FBcUJZLGVBQS9CLEVBQWdEbkgsVUFBVTNCLE1BQU0yQixRQUFOLENBQWVBLFFBQXpFLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O2tDQUtlcEosSSxFQUFNNEosRSxFQUFJO0FBQ3RCLFdBQUsvQixLQUFMLENBQVcxRixRQUFYLENBQW9CLG1DQUFxQm5DLElBQXJCLENBQXBCLEVBRHNCLENBQzBCO0FBQ2hELFdBQUs2SCxLQUFMLENBQVcxRixRQUFYLENBQW9CLHlCQUFwQjtBQUNBbUYsZUFBU0MsY0FBVCxDQUF3Qix1QkFBeEIsRUFBaURtQyxLQUFqRDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFFUCxVQUFNTixXQUFXLEtBQUt2QixLQUFMLENBQVd5SSxPQUFYLENBQW1CbkssR0FBbkIsQ0FBdUIsVUFBQ3pDLElBQUQsRUFBVTs7QUFFaEQsZUFBTztBQUFBO0FBQUEsWUFBSSxlQUFlLE9BQUs4TSxhQUFMLENBQW1CdEgsSUFBbkIsU0FBOEJ4RixLQUFLMUQsSUFBbkMsQ0FBbkIsRUFBNkQsS0FBSzBELEtBQUsxRCxJQUF2RTtBQUNMO0FBQUE7QUFBQTtBQUNHMEQsaUJBQUsxRDtBQURSLFdBREs7QUFJTDtBQUFBO0FBQUE7QUFDRzBELGlCQUFLOEI7QUFEUixXQUpLO0FBTUw7QUFBQTtBQUFBO0FBQ0c5QixpQkFBSytNO0FBRFI7QUFOSyxTQUFQO0FBV0QsT0FiZ0IsQ0FBakI7O0FBZUEsYUFBTztBQUFBO0FBQUEsVUFBTSxRQUFPLEVBQWIsRUFBZ0IsV0FBVSwyQkFBMUI7QUFDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sSUFBRyx1QkFBVixFQUFrQyxXQUFVLGtDQUE1QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBREYsZUFERjtBQVNFO0FBQUE7QUFBQSxrQkFBTyxXQUFVLDJCQUFqQjtBQUNHckg7QUFESDtBQVRGO0FBREY7QUFERjtBQURLLE9BQVA7QUFvQkQ7Ozs7RUE3Q3VDLGdCQUFNcEIsUztrQkFBM0JxSSxZOzs7Ozs7OztnQ0FBQUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDUnJCOzs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU03RixZQUFZLG1CQUFBQyxDQUFRLEVBQVIsQ0FBbEI7O0lBTXFCaUcsYSxXQUpwQix5QkFBUSxVQUFDakosS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ21JLFNBQVNuSSxNQUFNaUosYUFBTixDQUFvQmQsT0FBOUIsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7K0JBTVloRyxFLEVBQUk7O0FBRWIsVUFBSUEsR0FBR0UsTUFBSCxDQUFVK0YsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUM1QyxhQUFLakksS0FBTCxDQUFXMUYsUUFBWCxDQUFvQix5QkFBcEI7QUFDQW1GLGlCQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRG1DLEtBQWpEO0FBQ0FjLGtCQUFVTyxNQUFWLENBQWlCLEtBQWpCO0FBQ0Q7QUFFRjtBQUNEOzs7OzZCQUNTOztBQUVQLFVBQU1nRixlQUFnQixLQUFLbEksS0FBTCxDQUFXK0gsT0FBWixHQUNqQix1REFEaUIsR0FFakIsNENBRko7O0FBSUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFXRyxZQUFoQixFQUE4QixTQUFTLEtBQUtDLFVBQUwsQ0FBZ0I5RyxJQUFoQixDQUFxQixJQUFyQixDQUF2QztBQUVMO0FBQUE7QUFBQSxZQUFRLFdBQVUsaUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBRks7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFFRSx1RUFGRjtBQUdFO0FBSEY7QUFERjtBQURGO0FBTkssT0FBUDtBQWlCRDs7OztFQW5Dd0MsZ0JBQU1sQixTO2tCQUE1QjBJLGE7Ozs7Ozs7O2dDQUFBQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFLcUJULFUsV0FIcEIseUJBQVEsVUFBQ3hJLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUN4SCxTQUFTd0gsTUFBTXhILE9BQU4sQ0FBY0EsT0FBeEIsRUFBUDtBQUNELENBRkEsQzs7O0FBS0Msc0JBQVk0SCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtpSCxLQUFMLEdBQWE7QUFDWHFCLGlCQUFXO0FBREEsS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYXZHLEUsRUFBSTs7QUFFaEIsVUFBSUEsR0FBR0MsR0FBSCxJQUFVLE9BQWQsRUFBdUI7QUFDckJELFdBQUdpQixjQUFIO0FBQ0EsYUFBSzhGLGtCQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBSzdCLEtBQUwsQ0FBV3FCLFNBQVgsR0FBdUJ2RyxHQUFHRSxNQUFILENBQVV6RSxLQUFqQztBQUNEO0FBRUY7Ozt5Q0FFb0I7QUFDbkIsVUFBTXVMLE1BQU0sS0FBSzlCLEtBQUwsQ0FBV3FCLFNBQXZCO0FBQ0EsV0FBS3RJLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsMkJBQWF5TyxHQUFiLEVBQWtCLEtBQUsvSSxLQUFMLENBQVc1SCxPQUE3QixDQUFwQjtBQUNEOzs7NkJBRVE7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBTSxRQUFPLEVBQWIsRUFBZ0IsV0FBVSwyQkFBMUI7QUFDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxxQkFBZjtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsbUJBQWY7QUFDRSx1REFBTyxZQUFZLEtBQUtvSyxhQUFMLENBQW1CbkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbkIsRUFBa0QsVUFBVSxLQUFLbUIsYUFBTCxDQUFtQm5CLElBQW5CLENBQXdCLElBQXhCLENBQTVELEVBQTJGLE1BQUssTUFBaEcsRUFBdUcsT0FBTztBQUM1RywyQkFBUztBQURtRyxpQkFBOUcsRUFFRyxJQUFHLHFCQUZOLEVBRTRCLFdBQVUsaUNBRnRDO0FBREYsYUFERjtBQU1FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsU0FBUyxLQUFLeUgsa0JBQUwsQ0FBd0J6SCxJQUF4QixDQUE2QixJQUE3QixDQUFqQixFQUFxRCxNQUFLLFFBQTFELEVBQW1FLElBQUcsbUJBQXRFLEVBQTBGLE9BQU87QUFDL0YsOEJBQVUsTUFEcUY7QUFFL0YsNkJBQVM7QUFGc0YsbUJBQWpHLEVBR0csV0FBVSw0Q0FIYjtBQUlFLHdEQUFNLFdBQVUsY0FBaEI7QUFKRjtBQURGO0FBTkY7QUFKRjtBQURLLE9BQVA7QUF1QkQ7Ozs7RUFsRHFDLGdCQUFNbEIsUztrQkFBekJpSSxVOzs7Ozs7OztnQ0FBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBS3FCSSxZLFdBSHBCLHlCQUFRLFVBQUM1SSxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDNkksU0FBUzdJLE1BQU1pSixhQUFOLENBQW9CRyxjQUE5QixFQUE4QzVRLFNBQVN3SCxNQUFNeEgsT0FBTixDQUFjQSxPQUFyRSxFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7OztpQ0FLY0QsSSxFQUFNNEosRSxFQUFJO0FBQ3JCLFdBQUsvQixLQUFMLENBQVcxRixRQUFYLENBQW9CLDZCQUFlbkMsSUFBZixFQUFxQixLQUFLNkgsS0FBTCxDQUFXNUgsT0FBaEMsQ0FBcEIsRUFEcUIsQ0FDeUM7QUFDOUQsV0FBSzRILEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsMEJBQXBCO0FBQ0FtRixlQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRG1DLEtBQWpEO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUVQLFVBQU16SixVQUFVLEtBQUs0SCxLQUFMLENBQVd5SSxPQUFYLENBQW1CbkssR0FBbkIsQ0FBdUIsVUFBQ3pDLElBQUQsRUFBVTs7QUFFL0MsWUFBTW9OLFlBQWFwTixLQUFLcU4sVUFBTixHQUNkLElBRGMsR0FFZCxJQUZKOztBQUlBLGVBQU87QUFBQTtBQUFBLFlBQUksZUFBZSxPQUFLQyxZQUFMLENBQWtCOUgsSUFBbEIsU0FBNkJ4RixLQUFLMUQsSUFBbEMsQ0FBbkIsRUFBNEQsS0FBSzBELEtBQUsxRCxJQUF0RTtBQUNMO0FBQUE7QUFBQTtBQUNHMEQsaUJBQUsxRDtBQURSLFdBREs7QUFJTDtBQUFBO0FBQUE7QUFDTTBELGlCQUFLcUIsSUFEWCxTQUNtQnJCLEtBQUsrSztBQUR4QixXQUpLO0FBT0w7QUFBQTtBQUFBO0FBQ0dxQztBQURILFdBUEs7QUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkssU0FBUDtBQWVELE9BckJlLENBQWhCOztBQXVCQSxhQUFPO0FBQUE7QUFBQSxVQUFNLFFBQU8sRUFBYixFQUFnQixXQUFVLDJCQUExQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxJQUFHLHNCQUFWLEVBQWlDLFdBQVUsa0NBQTNDO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBREYsZUFERjtBQVVFO0FBQUE7QUFBQSxrQkFBTyxXQUFVLDBCQUFqQjtBQUNHN1E7QUFESDtBQVZGO0FBREY7QUFERjtBQURLLE9BQVA7QUFxQkQ7Ozs7RUF0RHVDLGdCQUFNK0gsUztrQkFBM0JxSSxZOzs7Ozs7OztnQ0FBQUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBS3FCWSxRLFdBSHBCLHlCQUFRLFVBQUN4SixLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDeUosY0FBY3pKLE1BQU0wSixHQUFOLENBQVVDLFNBQXpCLEVBQW9DQyxXQUFXNUosTUFBTTBKLEdBQU4sQ0FBVUUsU0FBekQsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7Z0NBS2E7O0FBRVYsV0FBS3hKLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sZ0JBQVAsRUFBeUJDLFNBQVMsQ0FBQyxDQUFuQyxFQUFwQjtBQUNEOzs7NkJBRVE7O0FBRVAsVUFBTThRLFlBQWEsS0FBS3ZKLEtBQUwsQ0FBV3FKLFlBQVosR0FDZCxzQkFEYyxHQUVkLFdBRko7O0FBSUEsVUFBSUcsWUFBWSxFQUFoQjtBQUNBLGNBQVEsS0FBS3hKLEtBQUwsQ0FBV3dKLFNBQW5COztBQUVFLGFBQUssTUFBTDtBQUNBO0FBQ0VBLHdCQUFZLHNEQUFaO0FBQ0E7QUFDRCxXQU5ILENBTUk7O0FBRUYsYUFBSyxNQUFMO0FBQ0E7QUFDRUEsd0JBQVksc0RBQVo7QUFDQTtBQUNELFdBWkgsQ0FZSTs7QUFFRixhQUFLLFFBQUw7QUFDQTtBQUNFQSx3QkFBWSx3REFBWjtBQUNBO0FBQ0QsV0FsQkgsQ0FrQkk7O0FBRUYsYUFBSyxPQUFMO0FBQ0E7QUFDRUEsd0JBQVksdURBQVo7QUFDQTtBQUNELFdBeEJILENBd0JJOztBQXhCSixPQVBPLENBaUNMOztBQUVGLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBV0QsU0FBaEI7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUFBO0FBRUUsaURBQUcsU0FBUyxLQUFLRSxTQUFMLENBQWVwSSxJQUFmLENBQW9CLElBQXBCLENBQVosRUFBdUMsV0FBVSxhQUFqRCxFQUErRCxlQUFZLE1BQTNFO0FBRkYsV0FERjtBQU1FLGtFQU5GO0FBUUU7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUVHbUkscUJBRkg7QUFJRTtBQUpGO0FBUkY7QUFGSyxPQUFQO0FBc0JEOzs7O0VBaEVtQyxnQkFBTXJKLFM7a0JBQXZCaUosUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQk0sUyxXQUhwQix5QkFBUSxVQUFDOUosS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQzRKLFdBQVc1SixNQUFNMEosR0FBTixDQUFVRSxTQUF0QixFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7Ozt5Q0FLc0JyTixNLEVBQVE0RixFLEVBQUk7O0FBRS9CLFdBQUsvQixLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLG1CQUFQLEVBQTRCQyxTQUFTMEQsTUFBckMsRUFBcEI7QUFFRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFNBQVMsS0FBS3dOLG9CQUFMLENBQTBCdEksSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUMsTUFBckMsQ0FBZCxFQUE0RCxXQUFZLEtBQUtyQixLQUFMLENBQVd3SixTQUFYLElBQXdCLE1BQXhCLEdBQ3BFLGlDQURvRSxHQUVwRSx3QkFGSjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FKRjtBQVFFLCtDQUFHLFdBQVUsYUFBYixFQUEyQixlQUFZLE1BQXZDO0FBUkYsU0FGSztBQWNMO0FBQUE7QUFBQSxZQUFLLFNBQVMsS0FBS0csb0JBQUwsQ0FBMEJ0SSxJQUExQixDQUErQixJQUEvQixFQUFxQyxNQUFyQyxDQUFkLEVBQTRELFdBQVksS0FBS3JCLEtBQUwsQ0FBV3dKLFNBQVgsSUFBd0IsTUFBeEIsR0FDcEUsaUNBRG9FLEdBRXBFLHdCQUZKO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSwrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUpGO0FBUUUsK0NBQUcsV0FBVSxtQkFBYixFQUFpQyxlQUFZLE1BQTdDO0FBUkYsU0FkSztBQTJCTDtBQUFBO0FBQUEsWUFBSyxTQUFTLEtBQUtHLG9CQUFMLENBQTBCdEksSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUMsUUFBckMsQ0FBZCxFQUE4RCxXQUFZLEtBQUtyQixLQUFMLENBQVd3SixTQUFYLElBQXdCLFFBQXhCLEdBQ3RFLGlDQURzRSxHQUV0RSx3QkFGSjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FKRjtBQVFFLCtDQUFHLFdBQVUsYUFBYixFQUEyQixlQUFZLE1BQXZDO0FBUkYsU0EzQks7QUF3Q0w7QUFBQTtBQUFBLFlBQUssV0FBWSxLQUFLeEosS0FBTCxDQUFXd0osU0FBWCxJQUF3QixPQUF4QixHQUNiLGlDQURhLEdBRWIsd0JBRko7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLCtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBSkY7QUFRRSwrQ0FBRyxXQUFVLGFBQWIsRUFBMkIsZUFBWSxNQUF2QztBQVJGO0FBeENLLE9BQVA7QUFzREQ7Ozs7RUFoRW9DLGdCQUFNckosUztrQkFBeEJ1SixTOzs7Ozs7OztnQ0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBS3FCRSxPLFdBSHBCLHlCQUFRLFVBQUNoSyxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDaUssWUFBWWpLLE1BQU0wSixHQUFOLENBQVVPLFVBQXZCLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3FDQUtrQjlILEUsRUFBSTs7QUFFbkIsV0FBSy9CLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0Isb0NBQXNCeUgsR0FBR0UsTUFBSCxDQUFVekUsS0FBaEMsQ0FBcEI7QUFDRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRSxtREFBTyxPQUFPLEtBQUt3QyxLQUFMLENBQVc2SixVQUF6QixFQUFxQyxVQUFVLEtBQUtDLGdCQUFMLENBQXNCekksSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBL0MsRUFBaUYsTUFBSyxRQUF0RixFQUErRixXQUFVLGNBQXpHLEdBSEY7QUFLRSxtREFMRjtBQU1FO0FBTkY7QUFOSyxPQUFQO0FBa0JEOzs7O0VBM0JrQyxnQkFBTWxCLFM7a0JBQXRCeUosTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUtxQkcsTyxXQUhwQix5QkFBUSxVQUFDbkssS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ29LLFVBQVVwSyxNQUFNMEosR0FBTixDQUFVVSxRQUFyQixFQUErQkMsWUFBWXJLLE1BQU0wSixHQUFOLENBQVVXLFVBQXJELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3VDQUtvQmxJLEUsRUFBSTs7QUFFckIsV0FBSy9CLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0Isa0NBQW9CeUgsR0FBR0UsTUFBSCxDQUFVekUsS0FBOUIsQ0FBcEI7QUFDRDs7O3lDQUVvQnVFLEUsRUFBSTs7QUFFdkIsV0FBSy9CLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0Isb0NBQXNCeUgsR0FBR0UsTUFBSCxDQUFVekUsS0FBaEMsQ0FBcEI7QUFDRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRSxtREFBTyxPQUFPLEtBQUt3QyxLQUFMLENBQVdpSyxVQUF6QixFQUFxQyxVQUFVLEtBQUtDLG9CQUFMLENBQTBCN0ksSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBL0MsRUFBcUYsTUFBSyxRQUExRixFQUFtRyxXQUFVLGNBQTdHLEdBSEY7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBTEY7QUFNRSxtREFBTyxPQUFPLEtBQUtyQixLQUFMLENBQVdnSyxRQUF6QixFQUFtQyxVQUFVLEtBQUtHLGtCQUFMLENBQXdCOUksSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBN0MsRUFBaUYsTUFBSyxRQUF0RixFQUErRixXQUFVLGNBQXpHLEdBTkY7QUFRRSxtREFSRjtBQVNFO0FBVEY7QUFOSyxPQUFQO0FBcUJEOzs7O0VBbkNrQyxnQkFBTWxCLFM7a0JBQXRCNEosTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQkssUyxXQUhwQix5QkFBUSxVQUFDeEssS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ3RILFFBQVFzSCxNQUFNeEgsT0FBTixDQUFjSixjQUF2QixFQUF1Q3NPLE1BQU0xRyxNQUFNeEgsT0FBTixDQUFjbU8sa0JBQTNELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7OzZCQUtVO0FBQ1AsVUFBTThELFlBQVksS0FBS3JLLEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0JnUyxZQUFsQixHQUFpQyxLQUFLdEssS0FBTCxDQUFXc0csSUFBOUQ7QUFDQSxVQUFNaUUsY0FBYyxLQUFLdkssS0FBTCxDQUFXMUgsTUFBWCxDQUFrQjRRLFVBQWxCLGVBQ1gsS0FBS2xKLEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0JnUyxZQUFsQixDQUErQm5KLFdBQS9CLENBQTJDLENBQTNDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELENBRFcsR0FFaEIsYUFGSjtBQUdBLFVBQU1xSixrQkFBa0IsS0FBS3hLLEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0I0USxVQUFsQixlQUNmbUIsVUFBVWxKLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FEZSxHQUVwQixhQUZKOztBQUlBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDR29KO0FBREgsV0FIRjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsV0FQRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNHQztBQURILFdBUkY7QUFXRSxtREFYRjtBQVlFO0FBWkY7QUFOSyxPQUFQO0FBd0JEOzs7O0VBbkNvQyxnQkFBTXJLLFM7a0JBQXhCaUssUzs7Ozs7Ozs7Z0NBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQU1xQkssUSxXQUpwQix5QkFBUSxVQUFDN0ssS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBUDtBQUVELENBSEEsQzs7Ozs7Ozs7Ozs7NkJBTVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QztBQUFBO0FBQUEsU0FGSztBQUdMO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSxtREFERjtBQUVFO0FBRkY7QUFISyxPQUFQO0FBU0Q7Ozs7RUFabUMsZ0JBQU1PLFM7a0JBQXZCc0ssUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7O0FBREE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQU05SCxZQUFZLG1CQUFBQyxDQUFRLEVBQVIsQ0FBbEI7O0lBZ0JxQjhILFUsV0FkcEIseUJBQVEsVUFBQzlLLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xrQixVQUFNbEIsTUFBTWtCLElBRFA7QUFFTDBJLGVBQVc1SixNQUFNMEosR0FBTixDQUFVRSxTQUZoQjtBQUdMRixTQUFLMUosTUFBTTBKLEdBSE47QUFJTGhSLFlBQVFzSCxNQUFNeEgsT0FBTixDQUFjSixjQUpqQjtBQUtMWSxVQUFNZ0gsTUFBTXhILE9BQU4sQ0FBY0gsWUFMZjtBQU1McU8sVUFBTTFHLE1BQU14SCxPQUFOLENBQWNtTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQVZLLEdBQVA7QUFZRCxDQWJBLEM7Ozs7Ozs7Ozs7OzhCQWdCVztBQUNSO0FBQ0EsVUFBTTNOLE9BQU8sS0FBS29ILEtBQUwsQ0FBV3BILElBQXhCO0FBQ0EsVUFBTWdJLE9BQU87QUFDWEUsY0FBTWpELEtBQUtDLFNBQUwsQ0FBZSxLQUFLa0MsS0FBTCxDQUFXYyxJQUExQixDQURLO0FBRVh4SSxnQkFBUXVGLEtBQUtDLFNBQUwsQ0FBZSxLQUFLa0MsS0FBTCxDQUFXMUgsTUFBMUIsQ0FGRztBQUdYTSxjQUFNaUYsS0FBS0MsU0FBTCxDQUFlLEtBQUtrQyxLQUFMLENBQVdwSCxJQUExQixDQUhLO0FBSVgwUSxhQUFLekwsS0FBS0MsU0FBTCxDQUFlLEtBQUtrQyxLQUFMLENBQVdzSixHQUExQjtBQUpNLE9BQWI7O0FBT0EsVUFBSSxLQUFLdEosS0FBTCxDQUFXc0osR0FBWCxDQUFlRSxTQUFmLElBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDNUksYUFBSzBJLEdBQUwsQ0FBU2hELElBQVQsR0FBZ0IsS0FBS3RHLEtBQUwsQ0FBV2MsSUFBWCxDQUFnQkMsU0FBaEM7QUFDQUgsYUFBSzBJLEdBQUwsQ0FBU3FCLEtBQVQsR0FBaUIsS0FBakI7QUFDRDs7QUFFRCxVQUFNelEsU0FBUztBQUNiQyxhQUFLLGFBRFE7QUFFYjBCLGNBQU0rRSxJQUZPO0FBR2I5RSxpQkFBUyxhQUhJO0FBSWJHLHdCQUFnQix5QkFKSDtBQUtiRCxrQkFBVSxNQUxHO0FBTWJwRCxjQUFNQSxJQU5PO0FBT2JtRCxpQkFBUyxFQVBJO0FBUWJLLHVCQUFlLDZCQVJGO0FBU2JJLHNCQUFjLG9EQVREO0FBVWJmLHNCQUFjLFlBVkQ7QUFXYlMsZ0JBQVE7QUFYSyxPQUFmOztBQWNBLFdBQUs4RCxLQUFMLENBQVcxRixRQUFYLENBQW9CLEVBQUM5QixNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLEVBQXBDLEVBQXBCO0FBQ0EsV0FBS3VILEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsbUJBQVNKLE1BQVQsQ0FBcEI7QUFDQSxXQUFLOEYsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxnQkFBUCxFQUF5QkMsU0FBUyxFQUFsQyxFQUFwQjs7QUFFQWtLLGdCQUFVaUksS0FBVjtBQUVEOzs7NkJBRVE7O0FBRVAsVUFBSUMsU0FBUyxDQUFiO0FBQ0EsVUFBSUMsaUJBQWlCLG9CQUFyQjtBQUNBLFVBQU1qSyxRQUFRNUgsV0FBVyxLQUFLK0csS0FBTCxDQUFXYyxJQUFYLENBQWdCQyxTQUEzQixDQUFkO0FBQ0EsVUFBTWdLLE9BQU85UixXQUFXLEtBQUsrRyxLQUFMLENBQVdzSixHQUFYLENBQWVPLFVBQTFCLENBQWI7O0FBRUEsY0FBUSxLQUFLN0osS0FBTCxDQUFXd0osU0FBbkI7O0FBRUUsYUFBSyxNQUFMO0FBQ0E7QUFDRXFCLHFCQUFTRSxPQUFPbEssS0FBaEI7QUFDQWlLLDZCQUFrQmpLLFFBQVEsQ0FBUixJQUFhZ0ssVUFBVSxDQUF4QixHQUNiLDJCQURhLEdBRWIsb0JBRko7QUFHQTtBQUNEOztBQUVELGFBQUssTUFBTDtBQUNBO0FBQ0UsZ0JBQU1HLE9BQU8sS0FBS2hMLEtBQUwsQ0FBV3NKLEdBQVgsQ0FBZVUsUUFBNUI7QUFDQSxnQkFBTWlCLFNBQVMsS0FBS2pMLEtBQUwsQ0FBV3NKLEdBQVgsQ0FBZVcsVUFBOUI7QUFDQVkscUJBQVM1UixXQUFXLEtBQUsrRyxLQUFMLENBQVdzSixHQUFYLENBQWVPLFVBQTFCLElBQXdDNVEsV0FBVyxLQUFLK0csS0FBTCxDQUFXYSxLQUF0QixDQUFqRDtBQUNBaUssNkJBQWtCakssUUFBUSxDQUFSLElBQWFtSyxJQUFiLElBQXFCQyxNQUF0QixHQUNiLDJCQURhLEdBRWIsb0JBRko7QUFHQTtBQUNEO0FBQ0QsYUFBSyxRQUFMO0FBQ0E7QUFDRSxnQkFBTVosWUFBWXBSLFdBQVcsS0FBSytHLEtBQUwsQ0FBVzFILE1BQVgsQ0FBa0JnUyxZQUE3QixJQUE2Q3JSLFdBQVcsS0FBSytHLEtBQUwsQ0FBV3NHLElBQXRCLENBQS9EO0FBQ0F3RSw2QkFBa0JqSyxRQUFRLENBQVIsSUFBYUEsU0FBU3dKLFNBQXRCLElBQW1DLEtBQUtySyxLQUFMLENBQVcxSCxNQUFYLENBQWtCNFEsVUFBdEQsR0FDYiwyQkFEYSxHQUViLG9CQUZKO0FBR0E7QUFDRDs7QUE1Qkg7O0FBZ0NBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQURLO0FBS0w7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsV0FGRjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUFBO0FBQ0ssaUJBQUtsSixLQUFMLENBQVdjLElBQVgsQ0FBZ0JDLFNBQWhCLENBQTBCSSxXQUExQixDQUFzQyxDQUF0QyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QztBQURMLFdBSkY7QUFPRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBUEY7QUFRRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFBQTtBQUNLMEosbUJBQU8xSixXQUFQLENBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCO0FBREwsV0FSRjtBQVdFLG1EQVhGO0FBYUU7QUFBQTtBQUFBLGNBQUssU0FBUyxLQUFLK0osT0FBTCxDQUFhN0osSUFBYixDQUFrQixJQUFsQixDQUFkLEVBQXVDLFdBQVd5SixjQUFsRDtBQUFBO0FBRUUsaURBQUcsV0FBVSxtQkFBYixFQUFpQyxlQUFZLE1BQTdDO0FBRkY7QUFiRjtBQUxLLE9BQVA7QUEyQkQ7Ozs7RUF6R3FDLGdCQUFNM0ssUztrQkFBekJ1SyxVOzs7Ozs7OztnQ0FBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCckI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFLcUJTLFksV0FIcEIseUJBQVEsVUFBQ3ZMLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUN5SixjQUFjekosTUFBTXdMLE9BQU4sQ0FBYzdCLFNBQTdCLEVBQXdDOEIsUUFBUXpMLE1BQU13TCxPQUFOLENBQWNDLE1BQTlELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3lDQUt1QjtBQUNwQixXQUFLckwsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQiwyQkFBaUIsU0FBakIsRUFBNEIsS0FBNUIsRUFBbUMsd0JBQW5DLEVBQTZELHVCQUE3RCxDQUFwQjtBQUNEOzs7Z0NBRVc7O0FBRVYsV0FBSzBGLEtBQUwsQ0FBVzFGLFFBQVgsQ0FBb0IsRUFBQzlCLE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFwQjtBQUNBO0FBQ0Q7OztrQ0FFYTs7QUFFWixXQUFLdUgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSxzQkFBUCxFQUErQkMsU0FBUyxDQUFDLENBQXpDLEVBQXBCO0FBRUQ7OztvQ0FFZTs7QUFFZCxXQUFLdUgsS0FBTCxDQUFXMUYsUUFBWCxDQUFvQixFQUFDOUIsTUFBTSx1QkFBUCxFQUFnQ0MsU0FBUyxDQUFDLENBQTFDLEVBQXBCO0FBRUQ7OztpQ0FFWTtBQUNYNkcsYUFBT2dNLFFBQVAsQ0FBZ0IsZUFBaEI7QUFDRDs7OzZCQUVROztBQUVQLFVBQU0vQixZQUFhLEtBQUt2SixLQUFMLENBQVdxSixZQUFaLEdBQ2QsMEJBRGMsR0FFZCxlQUZKO0FBR0EsVUFBTWtDLGNBQWUsS0FBS3ZMLEtBQUwsQ0FBV3FMLE1BQVosR0FDaEIsRUFEZ0IsR0FFaEIscUJBRko7O0FBSUEsVUFBTUcsbUJBQW9CLEtBQUt4TCxLQUFMLENBQVdxTCxNQUFaLEdBQ3JCLDBEQURxQixHQUVyQiw2REFGSjs7QUFJQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVc5QixTQUFoQjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVcsdUJBQXVCZ0MsV0FBdkM7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsbURBQUcsU0FBUyxLQUFLOUIsU0FBTCxDQUFlcEksSUFBZixDQUFvQixJQUFwQixDQUFaLEVBQXVDLFdBQVUsYUFBakQsRUFBK0QsZUFBWSxNQUEzRSxHQURGO0FBRUUsbURBQUcsU0FBUyxLQUFLb0ssV0FBTCxDQUFpQnBLLElBQWpCLENBQXNCLElBQXRCLENBQVosRUFBeUMsV0FBVSxtQkFBbkQsRUFBdUUsZUFBWSxNQUFuRixHQUZGO0FBR0UsbURBQUcsU0FBUyxLQUFLcUssVUFBTCxDQUFnQnJLLElBQWhCLENBQXFCLElBQXJCLENBQVosRUFBd0MsV0FBVSxhQUFsRCxFQUFnRSxlQUFZLE1BQTVFO0FBSEY7QUFKRixXQURGO0FBYUU7QUFBQTtBQUFBLGNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVcsNEJBQTRCa0ssV0FBL0Q7QUFFR0M7QUFGSDtBQWJGO0FBRkssT0FBUDtBQXlCRDs7OztFQWxFdUMsZ0JBQU1yTCxTO2tCQUEzQmdMLFk7Ozs7Ozs7O2dDQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQlEsVzs7Ozs7Ozs7Ozs7NkJBRVY7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFFTCw2REFGSztBQUdMLDJEQUhLO0FBSUwsNERBSks7QUFLTCw2REFMSztBQU1MO0FBTkssT0FBUDtBQVVEOzs7O0VBZHNDLGdCQUFNeEwsUzs7a0JBQTFCd0wsVzs7Ozs7Ozs7Z0NBQUFBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQVFxQkMsTSxXQU5wQix5QkFBUSxVQUFDaE0sS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGdCLFVBQU1oQixNQUFNaU0sS0FBTixDQUFZQyxVQURiO0FBRUxDLGFBQVNuTSxNQUFNdkMsTUFBTixDQUFhME87QUFGakIsR0FBUDtBQUlELENBTEEsQzs7Ozs7Ozs7Ozs7NkJBUVU7QUFDUDtBQUNBLFVBQU1DLGFBQWEsS0FBS2hNLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQjBJLEdBQWhCLENBQW9CRSxTQUFwQixJQUFpQyxRQUFqQyxHQUE0QyxvQkFBNUMsR0FBbUUsb0JBQXRGO0FBQ0E7QUFDQSxVQUFNeUMsT0FBTyxLQUFLak0sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQkUsSUFBbkIsSUFBMkIsRUFBeEM7QUFDQSxVQUFNQyxZQUFZLEtBQUtsTSxLQUFMLENBQVcrTCxPQUFYLENBQW1CRyxTQUFuQixJQUFnQyxPQUFsRDtBQUNBLFVBQU1DLDRCQUEwQkYsSUFBaEM7O0FBRUE7QUFDQSxVQUFNRyxhQUFhLEtBQUtwTSxLQUFMLENBQVcrTCxPQUFYLENBQW1CTSxjQUFuQixJQUFxQyxFQUF4RDtBQUNBLFVBQU1DLGNBQWMsS0FBS3RNLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJRLFVBQW5CLElBQWlDLEVBQXJEOztBQUVBLFVBQU1DLE9BQU8sS0FBS3hNLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJVLFVBQW5CLElBQWlDLEVBQTlDO0FBQ0EsVUFBTUMsV0FBV0YsS0FBS3RLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCNUcsTUFBaEIsR0FBeUIsQ0FBekIsY0FBc0NrUixJQUF0QyxhQUF1REEsSUFBeEU7O0FBRUEsVUFBTUcsU0FBUyxLQUFLM00sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQlksTUFBbkIsSUFBNkIsUUFBNUM7QUFDQSxVQUFNQyxLQUFLLEtBQUs1TSxLQUFMLENBQVcrTCxPQUFYLENBQW1CYSxFQUFuQixJQUF5QixFQUFwQztBQUNBLFVBQU1DLFNBQVNGLFVBQVUsUUFBVix3QkFBcUNDLEVBQXJDLGtCQUFzREEsRUFBckU7O0FBRUEsYUFBTztBQUFBO0FBQUE7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSwwQkFBZjtBQUNFLG1EQUFLLE9BQU8sRUFBQyxjQUFZVixTQUFiLEVBQVosRUFBdUMsS0FBS0MsT0FBNUM7QUFERixXQUZGO0FBS0U7QUFBQTtBQUFBLGNBQUssV0FBVSwwQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLQyx5QkFBV1UsV0FBWDtBQUFMLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBS1I7QUFBTCxhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtPO0FBQUwsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLG1CQUFLN00sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQmdCLFFBQW5CLElBQStCO0FBQXBDLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSyxtQkFBSy9NLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJpQixRQUFuQixJQUErQjtBQUFwQyxhQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUssbUJBQUtoTixLQUFMLENBQVcrTCxPQUFYLENBQW1Ca0IsT0FBbkIsSUFBOEI7QUFBbkMsYUFORjtBQU9FO0FBQUE7QUFBQTtBQUFLUDtBQUFMLGFBUEY7QUFRRTtBQUFBO0FBQUE7QUFBSyxtQkFBSzFNLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJtQixLQUFuQixJQUE0QjtBQUFqQztBQVJGO0FBTEYsU0FGSztBQW9CTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBQ0UscURBREY7QUFHRTtBQUFBO0FBQUE7QUFBS2xCO0FBQUwsV0FIRjtBQUlFO0FBSkY7QUFwQkssT0FBUDtBQTRCRDs7OztFQWpEaUMsZ0JBQU03TCxTO2tCQUFyQnlMLE07Ozs7Ozs7O2dDQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFLcUJ1QixJLFdBSHBCLHlCQUFRLFVBQUN2TixLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDZ0IsTUFBTWhCLE1BQU1pTSxLQUFOLENBQVlDLFVBQW5CLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7OzZCQUtVOztBQUVQLFVBQU1sTCxPQUFPLEtBQUtaLEtBQUwsQ0FBV1ksSUFBeEI7QUFDQSxVQUFNd00sT0FBT3hNLEtBQUt5TSxPQUFMLEdBQ04sQ0FBQyxNQUFNek0sS0FBS3lNLE9BQUwsQ0FBYUMsT0FBYixFQUFQLEVBQStCQyxLQUEvQixDQUFxQyxDQUFDLENBQXRDLENBRE0saUJBRVQsQ0FBQyxPQUFPM00sS0FBS3lNLE9BQUwsQ0FBYUcsUUFBYixLQUEwQixDQUFqQyxDQUFELEVBQXNDRCxLQUF0QyxDQUE0QyxDQUFDLENBQTdDLENBRlMsaUJBR1QzTSxLQUFLeU0sT0FBTCxDQUFhSSxXQUFiLEVBSFMsR0FJVCxZQUpKO0FBS0EsVUFBTW5WLFNBQVNzSSxLQUFLdEksTUFBTCxHQUFpQnNJLEtBQUt0SSxNQUFMLENBQVlILElBQTdCLFdBQXVDeUksS0FBS3RJLE1BQUwsQ0FBWTRFLElBQW5ELFNBQTJEMEQsS0FBS3RJLE1BQUwsQ0FBWXNPLFNBQXZFLEdBQXFGLHlCQUFwRztBQUNBLFVBQU04RyxlQUFlOU0sS0FBS3RJLE1BQUwsQ0FBWXFWLE1BQVosR0FDakI7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFlBQUksV0FBVSxjQUFkO0FBQUE7QUFBeUMvTSxlQUFLdEksTUFBTCxDQUFZcVY7QUFBckQ7QUFEQSxPQURpQixHQUlqQix5Q0FKSjtBQUtBLFVBQU1mLEtBQUtoTSxLQUFLZ00sRUFBTCxHQUFVaE0sS0FBS2dNLEVBQWYsR0FBb0IsT0FBL0I7O0FBRUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLG1CQUFmO0FBRUw7QUFBQTtBQUFBLFlBQU8sV0FBVSxjQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS3RVO0FBQUw7QUFERixhQURGO0FBSUdvVjtBQUpIO0FBTkYsU0FGSztBQWdCTDtBQUFBO0FBQUEsWUFBTyxXQUFVLGVBQWpCO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssaUJBQUMsVUFBVWQsRUFBWCxFQUFlVyxLQUFmLENBQXFCLENBQUMsQ0FBdEI7QUFBTDtBQUZGLGFBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0g7QUFBTDtBQUZGO0FBTkY7QUFGRjtBQWhCSyxPQUFQO0FBa0NEOzs7O0VBcEQrQixnQkFBTWpOLFM7a0JBQW5CZ04sSTs7Ozs7Ozs7Z0NBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQlMsSyxXQUhwQix5QkFBUSxVQUFDaE8sS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ3dELFFBQVF4RCxNQUFNa0IsSUFBTixDQUFXVyxTQUFwQixFQUErQkUsZ0JBQWdCL0IsTUFBTWtCLElBQU4sQ0FBV2EsY0FBMUQsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7OztBQUtDOzZCQUNTOztBQUVQLFVBQU1GLFlBQVksS0FBS3pCLEtBQUwsQ0FBV29ELE1BQTdCO0FBQ0EsVUFBTXpCLGlCQUFrQixLQUFLM0IsS0FBTCxDQUFXMkIsY0FBWixHQUNuQjtBQUFBO0FBQUEsVUFBSSxXQUFVLGdCQUFkO0FBQWdDLGFBQUszQixLQUFMLENBQVcyQjtBQUEzQyxPQURtQixHQUVuQjtBQUFBO0FBQUEsVUFBSSxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQVg7QUFBQTtBQUFBLE9BRko7QUFHQSxVQUFNM0MsUUFBUXlDLFVBQVVuRyxNQUFWLEdBQ1ZtRyxVQUFVbkQsR0FBVixDQUFjLFVBQUN6QyxJQUFELEVBQVU7QUFDeEIsWUFBTWdTLFlBQWFoUyxLQUFLdUksT0FBTCxDQUFhSSxTQUFkLFlBQWxCOztBQUlBLGVBQU87QUFBQTtBQUFBLFlBQUksS0FBSzNJLEtBQUsrSSxJQUFkO0FBQ0w7QUFBQTtBQUFBO0FBQ0cvSSxpQkFBS3VJLE9BQUwsQ0FBYWpNO0FBRGhCLFdBREs7QUFJTDtBQUFBO0FBQUE7QUFDRzBELGlCQUFLdUksT0FBTCxDQUFhekc7QUFEaEIsV0FKSztBQU9MO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFDRzlCLGlCQUFLc0c7QUFEUixXQVBLO0FBVUw7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUFBO0FBQ0tsSix1QkFBVzRDLEtBQUt1SixVQUFoQixFQUE0QmpFLFdBQTVCLENBQXdDLENBQXhDLEVBQTJDLEdBQTNDLEVBQWdELEdBQWhEO0FBREwsV0FWSztBQWFMO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFDR3RGLGlCQUFLa0k7QUFEUixXQWJLO0FBZ0JKcEMsd0JBaEJJO0FBaUJMO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFDR2tNO0FBREgsV0FqQks7QUFvQkw7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUFBO0FBQ0toUyxpQkFBSzZKLGtCQUFMLENBQXdCdkUsV0FBeEIsQ0FBb0MsQ0FBcEMsRUFBdUMsR0FBdkMsRUFBNEMsR0FBNUM7QUFETDtBQXBCSyxTQUFQO0FBd0JELE9BN0JDLENBRFUsR0ErQlY7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5BO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBLE9BL0JKOztBQXlDQSxVQUFNMk0sb0JBQW9CLEtBQUs5TixLQUFMLENBQVcyQixjQUFYLEdBQTRCO0FBQUE7QUFBQSxVQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BQTVCLEdBQ3RCO0FBQUE7QUFBQSxVQUFJLE9BQU8sRUFBQyxXQUFXLE1BQVosRUFBWDtBQUFBO0FBQUEsT0FESjs7QUFHQSxhQUFPO0FBQUE7QUFBQSxVQUFPLFdBQVUsMEJBQWpCO0FBQ0w7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsaUJBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxnQkFBZDtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxhQUpGO0FBS0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLGFBTEY7QUFNR21NLDZCQU5IO0FBT0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxnQkFBZDtBQUFBO0FBQUE7QUFSRjtBQURGLFNBREs7QUFhTDtBQUFBO0FBQUE7QUFBUTlPO0FBQVI7QUFiSyxPQUFQO0FBZ0JEOzs7O0VBckVnQyxnQkFBTW1CLFM7a0JBQXBCeU4sSzs7Ozs7Ozs7Z0NBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQVlxQjlHLE0sV0FWcEIseUJBQVEsVUFBQ2xILEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xpQixXQUFPakIsTUFBTWtCLElBQU4sQ0FBV0MsU0FEYjtBQUVMMEQsV0FBTzdFLE1BQU1rQixJQUFOLENBQVdpRyxTQUZiO0FBR0xwQixtQkFBZS9GLE1BQU1rQixJQUFOLENBQVc2RSxhQUhyQjtBQUlMRCx3QkFBb0I5RixNQUFNa0IsSUFBTixDQUFXa0csc0JBSjFCO0FBS0x4RixpQkFBYTVCLE1BQU1rQixJQUFOLENBQVdXLFNBTG5CO0FBTUxFLG9CQUFnQi9CLE1BQU1rQixJQUFOLENBQVdhO0FBTnRCLEdBQVA7QUFRRCxDQVRBLEM7Ozs7Ozs7Ozs7OzZCQVlVOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUszQixLQUFMLENBQVcwRixrQkFBWCxDQUE4QnZFLFdBQTlCLENBQTBDLENBQTFDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxEO0FBQVA7QUFGRixhQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBS25CLEtBQUwsQ0FBVzJGLGFBQVgsQ0FBeUJ4RSxXQUF6QixDQUFxQyxDQUFyQyxFQUF3QyxHQUF4QyxFQUE2QyxHQUE3QztBQUFQO0FBRkYsYUFORjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUtuQixLQUFMLENBQVd5RSxLQUFYLENBQWlCdEQsV0FBakIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFBUDtBQUZGLGFBVkY7QUFjRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxXQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBS25CLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQk0sV0FBakIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFBUDtBQUZGO0FBZEY7QUFERjtBQUZLLE9BQVA7QUEwQkQ7Ozs7RUE5QmlDLGdCQUFNaEIsUztrQkFBckIyRyxNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7Ozs7Ozs7OztJQUVxQmlILEs7Ozs7Ozs7Ozs7OzZCQUVWOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISyxPQUFQO0FBT0Q7Ozs7RUFYZ0MsZ0JBQU01TixTOztrQkFBcEI0TixLOzs7Ozs7OztnQ0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLGM7Ozs7Ozs7Ozs7OzZCQUVWOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMLDZEQUZLO0FBR0wsMkRBSEs7QUFJTCw0REFKSztBQUtMLDZEQUxLO0FBTUw7QUFOSyxPQUFQO0FBVUQ7Ozs7RUFkeUMsZ0JBQU03TixTOztrQkFBN0I2TixjOzs7Ozs7OztnQ0FBQUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBUXFCcEMsTSxXQU5wQix5QkFBUSxVQUFDaE0sS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGdCLFVBQU1oQixNQUFNaU0sS0FBTixDQUFZQyxVQURiO0FBRUxDLGFBQVNuTSxNQUFNdkMsTUFBTixDQUFhME87QUFGakIsR0FBUDtBQUlELENBTEEsQzs7Ozs7Ozs7Ozs7NkJBUVU7O0FBRVAsVUFBTUMsYUFBYSxLQUFLaE0sS0FBTCxDQUFXWSxJQUFYLENBQWdCMEksR0FBaEIsQ0FBb0JFLFNBQXBCLElBQWlDLFFBQWpDLEdBQTRDLG9CQUE1QyxHQUFtRSxvQkFBdEY7O0FBRUE7QUFDQSxVQUFNNEMsYUFBYSxLQUFLcE0sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQmtDLGFBQW5CLElBQW9DLEVBQXZEOztBQUVBLFVBQU0zQixjQUFjLEtBQUt0TSxLQUFMLENBQVcrTCxPQUFYLENBQW1CbUMsU0FBbkIsSUFBZ0MsRUFBcEQ7O0FBRUEsVUFBTTFCLE9BQU8sS0FBS3hNLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJVLFVBQW5CLElBQWlDLEVBQTlDO0FBQ0EsVUFBTUMsV0FBV0YsS0FBS3RLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCNUcsTUFBaEIsR0FBeUIsQ0FBekIsY0FBc0NrUixJQUF0QyxhQUF1REEsSUFBeEU7O0FBRUEsVUFBTUcsU0FBUyxLQUFLM00sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQlksTUFBbkIsSUFBNkIsRUFBNUM7QUFDQSxVQUFNQyxLQUFLLEtBQUs1TSxLQUFMLENBQVcrTCxPQUFYLENBQW1CYSxFQUFuQixJQUF5QixRQUFwQztBQUNBLFVBQU1DLFNBQVNGLFVBQVUsUUFBVix3QkFBcUNDLEVBQXJDLGtCQUFzREEsRUFBckU7O0FBRUEsYUFBTztBQUFBO0FBQUE7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLUjtBQUFMLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0U7QUFBTCxhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtPO0FBQUwsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLG1CQUFLN00sS0FBTCxDQUFXK0wsT0FBWCxDQUFtQmdCLFFBQW5CLElBQStCO0FBQXBDLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSyxtQkFBSy9NLEtBQUwsQ0FBVytMLE9BQVgsQ0FBbUJpQixRQUFuQixJQUErQjtBQUFwQyxhQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUssbUJBQUtoTixLQUFMLENBQVcrTCxPQUFYLENBQW1Ca0IsT0FBbkIsSUFBOEI7QUFBbkMsYUFORjtBQU9FO0FBQUE7QUFBQTtBQUFLUDtBQUFMO0FBUEY7QUFGRixTQUZLO0FBZ0JMO0FBQUE7QUFBQSxZQUFLLFdBQVUsMkJBQWY7QUFDRSxxREFERjtBQUdFO0FBQUE7QUFBQTtBQUFLVjtBQUFMLFdBSEY7QUFLRTtBQUxGO0FBaEJLLE9BQVA7QUF5QkQ7Ozs7RUEzQ2lDLGdCQUFNN0wsUztrQkFBckJ5TCxNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCZ0MsSyxXQUhwQix5QkFBUSxVQUFDaE8sS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ3dELFFBQVF4RCxNQUFNa0IsSUFBTixDQUFXVyxTQUFwQixFQUErQkUsZ0JBQWdCL0IsTUFBTWtCLElBQU4sQ0FBV2EsY0FBMUQsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7OztBQUtDOzZCQUNTOztBQUVQLFVBQU1GLFlBQVksS0FBS3pCLEtBQUwsQ0FBV29ELE1BQTdCO0FBQ0EsVUFBTXBFLFFBQVF5QyxVQUFVbkQsR0FBVixDQUFjLFVBQUN6QyxJQUFELEVBQVU7O0FBRXBDLFlBQU1nUyxZQUFhaFMsS0FBS3VJLE9BQUwsQ0FBYStKLFFBQWQsWUFBbEI7O0FBSUEsZUFBTztBQUFBO0FBQUEsWUFBSSxLQUFLdFMsS0FBSytJLElBQWQ7QUFDTDtBQUFBO0FBQUE7QUFDRy9JLGlCQUFLc0c7QUFEUixXQURLO0FBSUw7QUFBQTtBQUFBO0FBQ0d0RyxpQkFBS3VJLE9BQUwsQ0FBYXpHO0FBRGhCLFdBSks7QUFPTDtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0drUTtBQURILFdBUEs7QUFVTDtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQUE7QUFDS2hTLGlCQUFLNkosa0JBQUwsQ0FBd0J2RSxXQUF4QixDQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxFQUE0QyxHQUE1QztBQURMO0FBVkssU0FBUDtBQWNELE9BcEJhLENBQWQ7O0FBc0JBLGFBQU87QUFBQTtBQUFBLFVBQU8sV0FBVSw2QkFBakI7QUFDTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxpQkFBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBO0FBSkY7QUFERixTQURLO0FBU0w7QUFBQTtBQUFBLFlBQU8sV0FBVSxFQUFqQjtBQUNHbkM7QUFESDtBQVRLLE9BQVA7QUFlRDs7OztFQTNDZ0MsZ0JBQU1tQixTO2tCQUFwQnlOLEs7Ozs7Ozs7O2dDQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFLcUJULEksV0FIcEIseUJBQVEsVUFBQ3ZOLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUNnQixNQUFNaEIsTUFBTWlNLEtBQU4sQ0FBWUMsVUFBbkIsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7NkJBS1U7QUFDUCxVQUFNbEwsT0FBTyxLQUFLWixLQUFMLENBQVdZLElBQXhCO0FBQ0EsVUFBTXdNLE9BQU94TSxLQUFLeU0sT0FBTCxHQUNOLENBQUMsTUFBTXpNLEtBQUt5TSxPQUFMLENBQWFDLE9BQWIsRUFBUCxFQUErQkMsS0FBL0IsQ0FBcUMsQ0FBQyxDQUF0QyxDQURNLGlCQUVULENBQUMsT0FBTzNNLEtBQUt5TSxPQUFMLENBQWFHLFFBQWIsS0FBMEIsQ0FBakMsQ0FBRCxFQUFzQ0QsS0FBdEMsQ0FBNEMsQ0FBQyxDQUE3QyxDQUZTLGlCQUdUM00sS0FBS3lNLE9BQUwsQ0FBYUksV0FBYixFQUhTLEdBSVQsWUFKSjtBQUtBLFVBQU1uVixTQUFTc0ksS0FBS3RJLE1BQUwsR0FBaUJzSSxLQUFLdEksTUFBTCxDQUFZSCxJQUE3QixXQUF1Q3lJLEtBQUt0SSxNQUFMLENBQVk0RSxJQUFuRCxTQUEyRDBELEtBQUt0SSxNQUFMLENBQVlzTyxTQUF2RSxHQUFxRix5QkFBcEc7QUFDQSxVQUFNZ0csS0FBS2hNLEtBQUtnTSxFQUFMLEdBQVVoTSxLQUFLZ00sRUFBZixHQUFvQixNQUEvQjtBQUNBLFVBQU1jLGVBQWU5TSxLQUFLdEksTUFBTCxDQUFZcVYsTUFBWixHQUNqQjtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQTtBQUFBO0FBQUE7QUFBSy9NLGVBQUt0SSxNQUFMLENBQVlxVjtBQUFqQjtBQUZBLE9BRGlCLEdBS2pCLHlDQUxKOztBQU9BLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxzQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFPLFdBQVUsZUFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBS1A7QUFBTDtBQUZGLGFBREY7QUFLRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxpQkFBQyxVQUFVUixFQUFYLEVBQWVXLEtBQWYsQ0FBcUIsQ0FBQyxDQUF0QjtBQUFMO0FBRkYsYUFMRjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLalY7QUFBTDtBQUZGLGFBVkY7QUFlR29WO0FBZkg7QUFERjtBQUZLLE9BQVA7QUEwQkQ7Ozs7RUE1QytCLGdCQUFNdk4sUztrQkFBbkJnTixJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7O0lBWXFCckcsTSxXQVZwQix5QkFBUSxVQUFDbEgsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGlCLFdBQU9qQixNQUFNa0IsSUFBTixDQUFXQyxTQURiO0FBRUwwRCxXQUFPN0UsTUFBTWtCLElBQU4sQ0FBV2lHLFNBRmI7QUFHTHBCLG1CQUFlL0YsTUFBTWtCLElBQU4sQ0FBVzZFLGFBSHJCO0FBSUxELHdCQUFvQjlGLE1BQU1rQixJQUFOLENBQVdrRyxzQkFKMUI7QUFLTHhGLGlCQUFhNUIsTUFBTWtCLElBQU4sQ0FBV1csU0FMbkI7QUFNTEUsb0JBQWdCL0IsTUFBTWtCLElBQU4sQ0FBV2E7QUFOdEIsR0FBUDtBQVFELENBVEEsQzs7Ozs7Ozs7Ozs7NkJBWVU7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBRUw7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBSzNCLEtBQUwsQ0FBVzBGLGtCQUFYLENBQThCdkUsV0FBOUIsQ0FBMEMsQ0FBMUMsRUFBNkMsR0FBN0MsRUFBa0QsR0FBbEQ7QUFBUDtBQUZGLGFBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFPLHFCQUFLbkIsS0FBTCxDQUFXMkYsYUFBWCxDQUF5QnhFLFdBQXpCLENBQXFDLENBQXJDLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDO0FBQVA7QUFGRixhQU5GO0FBVUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBS25CLEtBQUwsQ0FBV3lFLEtBQVgsQ0FBaUJ0RCxXQUFqQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQztBQUFQO0FBRkYsYUFWRjtBQWNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLFdBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFPLHFCQUFLbkIsS0FBTCxDQUFXYSxLQUFYLENBQWlCTSxXQUFqQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQztBQUFQO0FBRkY7QUFkRjtBQURGO0FBRkssT0FBUDtBQTBCRDs7OztFQTlCaUMsZ0JBQU1oQixTO2tCQUFyQjJHLE07Ozs7Ozs7O2dDQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JyQjs7Ozs7Ozs7Ozs7O0lBRXFCaUgsSzs7Ozs7Ozs7Ozs7NkJBRVY7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURLO0FBRUw7QUFBQTtBQUFBLFlBQUssV0FBVSwrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUZLLE9BQVA7QUFRRDs7OztFQVpnQyxnQkFBTTVOLFM7O2tCQUFwQjROLEs7Ozs7Ozs7O2dDQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNGckI7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBT3FCSyxNLFdBTHBCLHlCQUFRLFVBQUN4TyxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMeU8seUJBQXFCek8sTUFBTUcsTUFBTixDQUFhc087QUFEN0IsR0FBUDtBQUdELENBSkEsQzs7Ozs7Ozs7Ozs7OEJBT1d0TSxFLEVBQUk7O0FBRVo7QUFFRDs7O2tDQUVhOztBQUVaO0FBQ0EsMkJBQVN1TSxPQUFULENBQWlCLGVBQWpCLGtEQUE0RSxZQUFXO0FBQ3JGaFAsZUFBT2dJLFFBQVAsQ0FBZ0JpSCxPQUFoQixDQUF3QixTQUF4QjtBQUNELE9BRkQsRUFFRyxZQUFXO0FBQ1osZUFBTyxJQUFQO0FBQ0QsT0FKRCxFQUlHbFMsR0FKSCxDQUlPLFFBSlAsRUFJaUI7QUFDZndILFlBQUksUUFEVztBQUVmQyxnQkFBUTtBQUZPLE9BSmpCO0FBUUQ7OztnQ0FFVztBQUNWO0FBQ0EsMkJBQVN3SyxPQUFULENBQWlCLHNCQUFqQix3Q0FBeUUsWUFBVztBQUNsRmhQLGVBQU9nSSxRQUFQLENBQWdCaUgsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxPQUZELEVBRUcsWUFBVztBQUNaLGVBQU8sSUFBUDtBQUNELE9BSkQsRUFJR2xTLEdBSkgsQ0FJTyxRQUpQLEVBSWlCO0FBQ2Z3SCxZQUFJLElBRFc7QUFFZkMsZ0JBQVE7QUFGTyxPQUpqQjtBQVFEOztBQUVEOzs7OzZCQUNTO0FBQ1AsVUFBTTBLLGNBQWMsS0FBS3hPLEtBQUwsQ0FBV3FPLG1CQUFYLEdBQ2hCLDhDQURnQixHQUNpQyxzQ0FEckQ7O0FBR0EsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDTDtBQUFBO0FBQUEsWUFBSyxTQUFTLEtBQUtJLFNBQUwsQ0FBZXBOLElBQWYsQ0FBb0IsSUFBcEIsQ0FBZCxFQUF5QyxXQUFXbU4sV0FBcEQ7QUFDRSxrREFBTSxXQUFVLFlBQWhCO0FBREYsU0FESztBQUlMO0FBQUE7QUFBQSxZQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFNBQVMsS0FBS0UsU0FBTCxDQUFlck4sSUFBZixDQUFvQixJQUFwQixDQUFkLEVBQXlDLFdBQVUsZ0NBQW5EO0FBQ0Usb0RBQU0sV0FBVSxZQUFoQjtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxTQUFTLEtBQUtzTixXQUFMLENBQWlCdE4sSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxFQUEyQyxXQUFVLG9DQUFyRDtBQUNFLG9EQUFNLFdBQVUsaUJBQWhCO0FBREY7QUFKRjtBQUpLLE9BQVA7QUFjRDs7OztFQXBEaUMsZ0JBQU1sQixTO2tCQUFyQmlPLE07Ozs7Ozs7O2dDQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7O1FDWkxRLFksR0FBQUEsWTtRQWlCQUMsZSxHQUFBQSxlO0FBakJULFNBQVNELFlBQVQsR0FBd0I7O0FBRTdCLE1BQU1FLGdCQUFnQnJQLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxNQUFNcVAsV0FBV3RQLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7O0FBRUEsTUFBSW9QLGNBQWM5RyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQyxDQUFKLEVBQWdEOztBQUU5QzZHLGtCQUFjOUcsU0FBZCxDQUF3QmdILE1BQXhCLENBQStCLFFBQS9CO0FBQ0FELGFBQVMvRyxTQUFULENBQW1CZ0gsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREYsZ0JBQWM5RyxTQUFkLENBQXdCaUgsR0FBeEIsQ0FBNEIsUUFBNUI7QUFDQUYsV0FBUy9HLFNBQVQsQ0FBbUJpSCxHQUFuQixDQUF1QixRQUF2QjtBQUVEOztBQUVNLFNBQVNKLGVBQVQsR0FBMkI7O0FBRWhDLE1BQU1LLFlBQVl6UCxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWxCOztBQUVBLE1BQUl3UCxVQUFVbEgsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsYUFBN0IsQ0FBSixFQUFpRDs7QUFFL0NpSCxjQUFVbEgsU0FBVixDQUFvQmdILE1BQXBCLENBQTJCLGFBQTNCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURFLFlBQVVsSCxTQUFWLENBQW9CaUgsR0FBcEIsQ0FBd0IsYUFBeEI7QUFFRDs7Ozs7Ozs7Z0NBN0JlTCxZOztnQ0FpQkFDLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2xCaEI7Ozs7QUFNQTs7O0FBSEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFPcUJNLFEsV0FMcEIseUJBQVEsVUFBQ3ZQLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xFLHFCQUFpQkYsTUFBTUcsTUFBTixDQUFhRDtBQUR6QixHQUFQO0FBR0QsQ0FKQSxDOzs7Ozs7Ozs7Ozt3Q0FPcUI7QUFDbEJMLGVBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NzSSxTQUFsQyxDQUE0Q2dILE1BQTVDLENBQW1ELFFBQW5EO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBTUksZ0JBQWdCLEtBQUtwUCxLQUFMLENBQVdGLGVBQVgsR0FBNkIsVUFBN0IsR0FBMEMsc0JBQWhFO0FBQ0EsYUFBTztBQUFBO0FBQUEsVUFBSyxJQUFHLFVBQVIsRUFBbUIsV0FBV3NQLGFBQTlCO0FBR0wsMkRBSEs7QUFLTCw2REFMSztBQU9MO0FBQUE7QUFBQSxZQUFLLFdBQVUsNEJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLElBQUcsUUFBVDtBQUNFLHdEQUFNLFdBQVUsa0JBQWhCLEdBREY7QUFBQTtBQUFBO0FBREYsYUFERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBTSxJQUFHLGFBQVQ7QUFDRSx3REFBTSxXQUFVLGtCQUFoQixHQURGO0FBQUE7QUFBQTtBQURGLGFBTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQU0sSUFBRyxpQkFBVDtBQUNFLHdEQUFNLFdBQVUsWUFBaEIsR0FERjtBQUFBO0FBQUE7QUFERixhQVhGO0FBZ0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBTSxJQUFHLGdCQUFUO0FBQ0Usd0RBQU0sV0FBVSxZQUFoQixHQURGO0FBQUE7QUFBQTtBQURGO0FBaEJGO0FBREY7QUFQSyxPQUFQO0FBbUNEOzs7O0VBOURtQyxnQkFBTWpQLFM7a0JBQXZCZ1AsUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCOzs7Ozs7Ozs7OytlQURBOzs7SUFHcUJFLE07Ozs7Ozs7Ozs7Ozs7QUFFbkI7NkJBQ1M7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLDJCQUFmO0FBRUwsaURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksV0FBL0I7QUFGSyxPQUFQO0FBTUQ7Ozs7RUFYaUMsZ0JBQU1sUCxTOztrQkFBckJrUCxNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSHJCOzs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFRcUJDLEksV0FOcEIseUJBQVEsVUFBQzFQLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xoSCxVQUFNZ0gsTUFBTWhILElBQU4sQ0FBV0EsSUFEWjtBQUVMMkgsYUFBU1gsTUFBTWhILElBQU4sQ0FBVzJIO0FBRmYsR0FBUDtBQUlELENBTEEsQzs7Ozs7Ozs7Ozs7OztBQVFDOzZCQUNTOztBQUVQLFVBQU1nUCxTQUFTLEtBQUt2UCxLQUFMLENBQVdPLE9BQVgsQ0FBbUJnUCxNQUFuQixlQUFzQyxLQUFLdlAsS0FBTCxDQUFXTyxPQUFYLENBQW1CZ1AsTUFBekQsR0FBb0UsNEJBQW5GOztBQUVBLFVBQU1yUyxPQUFPLEtBQUs4QyxLQUFMLENBQVdwSCxJQUFYLENBQWdCNFcsVUFBaEIsR0FDVCxLQUFLeFAsS0FBTCxDQUFXcEgsSUFBWCxDQUFnQjRXLFVBRFAsR0FFUixLQUFLeFAsS0FBTCxDQUFXcEgsSUFBWCxDQUFnQjZXLFFBQWhCLEdBQ0MsS0FBS3pQLEtBQUwsQ0FBV3BILElBQVgsQ0FBZ0I2VyxRQURqQixHQUM0QixFQUhqQzs7QUFLQSxVQUFNQyxXQUFXLEtBQUsxUCxLQUFMLENBQVdwSCxJQUFYLENBQWdCZ08sU0FBaEIsR0FBNEIsS0FBSzVHLEtBQUwsQ0FBV3BILElBQVgsQ0FBZ0JnTyxTQUE1QyxHQUF3RCxFQUF6RTs7QUFFQSxVQUFJK0ksV0FBY3pTLElBQWQsU0FBc0J3UyxRQUExQjtBQUNBLFVBQUlDLFNBQVNyVSxNQUFULEdBQWtCLEVBQXRCLEVBQTBCcVUsV0FBV0EsU0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixFQUF0QixDQUFYOztBQUUxQixhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsMEJBQWY7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0UsaURBQUssS0FBS0wsTUFBVjtBQURGLFNBRks7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQU9JO0FBQVAsV0FERjtBQUVFO0FBRkY7QUFOSyxPQUFQO0FBWUQ7Ozs7RUE3QitCLGdCQUFNeFAsUztrQkFBbkJtUCxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNackI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1PLGFBQWEsNEJBQWdCLHVDQUFoQiw4Q0FBbkI7O0FBRUE7O2VBRWUsMkNBQXFCQSxVQUFyQixDOzs7Ozs7Ozs7O2dDQUpUQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk47O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2VBRWUsNEJBQWdCO0FBQzdCaFEsNkJBRDZCO0FBRTdCRSwyQkFGNkI7QUFHN0JuSCx5QkFINkI7QUFJN0JrSSx5QkFKNkI7QUFLN0IxSSw2QkFMNkI7QUFNN0JtSiw4QkFONkI7QUFPN0JYLDBCQVA2QjtBQVE3QmtQLDhCQVI2QjtBQVM3QmpILG1DQVQ2QjtBQVU3QmYsb0NBVjZCO0FBVzdCd0IseUJBWDZCO0FBWTdCOEIsNkJBWjZCO0FBYTdCUywyQkFiNkI7QUFjN0J4TztBQWQ2QixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNaUzBTLE87QUFMeEIsSUFBTUMsYUFBYTtBQUNqQjNCLHVCQUFxQixLQURKO0FBRWpCdk8sbUJBQWlCO0FBRkEsQ0FBbkI7O0FBS2UsU0FBU2lRLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLeU8sS0FETDtBQUVFb0gsK0JBQXFCLElBRnZCO0FBR0V2TywyQkFBaUI7QUFIbkI7QUFLRCxPQVRILENBU0k7O0FBRUYsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0ttSCxLQURMO0FBRUVvSCwrQkFBcUIsS0FGdkI7QUFHRXZPLDJCQUFpQjtBQUhuQjtBQUtELE9BbEJILENBa0JJOztBQWxCSixHQUYwRCxDQXNCeEQ7O0FBRUYsU0FBT21ILEtBQVAsQ0F4QjBELENBd0I3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQS9CSStJLFU7O2dDQUtrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNBQUEsTztBQUx4QixJQUFNQyxhQUFhO0FBQ2pCcFgsUUFBTSxFQURXO0FBRWpCMkgsV0FBUztBQUZRLENBQW5COztBQUtlLFNBQVN3UCxPQUFULEdBQTZDO0FBQUEsTUFBNUI5SSxLQUE0Qix1RUFBcEIrSSxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPelgsSUFBZjs7QUFFRSxTQUFLLHlCQUFMO0FBQ0E7QUFDRSw0QkFDS3lPLEtBREw7QUFFRXJPLGdCQUFNcVgsT0FBT3hYLE9BQVAsQ0FBZUcsSUFGdkI7QUFHRTJILG1CQUFTMFAsT0FBT3hYLE9BQVAsQ0FBZThIO0FBSDFCO0FBTUQsT0FWSCxDQVVJOztBQUVGLFNBQUssd0JBQUw7QUFDQTtBQUNFLDRCQUNLMEcsS0FETDtBQUVFck8sZ0JBQU0sRUFGUjtBQUdFMkgsbUJBQVM7QUFIWDtBQU1ELE9BcEJILENBb0JJOztBQXBCSixHQUYwRCxDQXdCeEQ7O0FBRUYsU0FBTzBHLEtBQVAsQ0ExQjBELENBMEI3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWpDSStJLFU7O2dDQUtrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNXQUEsTzs7OztBQWhCeEIsSUFBTUMsYUFBYTtBQUNqQkUsWUFBVSxJQURPO0FBRWpCN0MsV0FBUyxFQUZRO0FBR2pCOEMsV0FBUyxFQUhRO0FBSWpCQyxVQUFRLEtBSlM7QUFLakJDLGdCQUFjLEtBTEcsRUFLSTtBQUNyQjVPLGFBQVcsRUFOTSxFQU1GO0FBQ2Z1RiwwQkFBd0IsQ0FQUCxFQU9VO0FBQzNCc0osZ0JBQWMsQ0FSRyxFQVFBO0FBQ2pCdkosYUFBVyxDQVRNLEVBU0g7QUFDZGhHLGFBQVcsQ0FWTSxFQVVIO0FBQ2RZLGtCQUFnQixDQVhDLEVBV0U7QUFDbkJnRSxpQkFBZSxDQVpFLEVBWUM7QUFDbEJ0QyxrQkFBZ0I7QUFiQyxDQUFuQjs7QUFnQmUsU0FBUzBNLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssV0FBTDtBQUNBO0FBQ0UsNEJBQ0t5TyxLQURMO0FBRUVpSixvQkFBVSxJQUZaO0FBR0U3QyxtQkFBUyxFQUhYO0FBSUU4QyxtQkFBUyxFQUpYO0FBS0VDLGtCQUFRLEtBTFY7QUFNRUMsd0JBQWMsS0FOaEIsRUFNdUI7QUFDckI1TyxxQkFBVyxFQVBiLEVBT2lCO0FBQ2Z1RixrQ0FBd0IsQ0FSMUIsRUFRNkI7QUFDM0JzSix3QkFBYyxDQVRoQixFQVNtQjtBQUNqQnZKLHFCQUFXLENBVmIsRUFVZ0I7QUFDZGhHLHFCQUFXLENBWGIsRUFXZ0I7QUFDZFksMEJBQWdCLENBWmxCLEVBWXFCO0FBQ25CZ0UseUJBQWUsQ0FiakIsRUFhb0I7QUFDbEJ0QywwQkFBZ0I7QUFkbEI7QUFnQkQ7O0FBRUQsU0FBSyxhQUFMO0FBQ0E7O0FBRUUsNEJBQ0s0RCxLQURMO0FBRUVvSix3QkFBYyxJQUZoQjtBQUdFNU8sa0RBRUt3RixNQUFNeEYsU0FGWCxJQUdFd08sT0FBT3hYLE9BSFQ7QUFIRjtBQVNELE9BbENILENBa0NJOztBQUVGLFNBQUssa0JBQUw7QUFDQTs7QUFFRSxZQUFNOFgsdUNBQWN0SixNQUFNeEYsU0FBcEIsRUFBTjs7QUFFQThPLGdCQUFRQyxNQUFSLENBQWVQLE9BQU94WCxPQUF0QixFQUErQixDQUEvQjs7QUFFQSxZQUFNZ1ksa0JBQW1CRixRQUFRalYsTUFBUixHQUFpQixDQUExQztBQUNBO0FBQ0E7O0FBRUEsNEJBQ0syTCxLQURMO0FBRUVvSix3QkFBY0ksZUFGaEI7QUFHRWhQLHFCQUFXOE87QUFIYjtBQUtELE9BcERILENBb0RJOztBQUVGLFNBQUssYUFBTDtBQUNBOztBQUVFLFlBQU1BLHdDQUFjdEosTUFBTXhGLFNBQXBCLEVBQU47QUFDQThPLGlCQUFRTixPQUFPeFgsT0FBUCxDQUFlMEcsS0FBdkIsSUFBZ0M4USxPQUFPeFgsT0FBUCxDQUFlb0QsSUFBL0M7O0FBRUEsNEJBQ0tvTCxLQURMO0FBRUV4RixxQkFBVzhPO0FBRmI7QUFJRCxPQWhFSCxDQWdFSTs7QUFFRixTQUFLLHVCQUFMO0FBQ0E7O0FBRUUsWUFBTUEseUNBQWN0SixNQUFNeEYsU0FBcEIsRUFBTjtBQUNBOE8sa0JBQVFOLE9BQU94WCxPQUFQLENBQWUwRyxLQUF2QixFQUE4QixNQUE5QixJQUF3QzhRLE9BQU94WCxPQUFQLENBQWV1TCxJQUF2RDs7QUFFQSw0QkFDS2lELEtBREw7QUFFRXhGLHFCQUFXOE87QUFGYjtBQUlELE9BNUVILENBNEVJOztBQUVGLFNBQUssb0JBQUw7QUFDQTs7QUFFRSw0QkFDS3RKLEtBREw7QUFFRXFKLHdCQUFjTCxPQUFPeFgsT0FBUCxDQUFlZ04sUUFGL0I7QUFHRXNCLHFCQUFXa0osT0FBT3hYLE9BQVAsQ0FBZWdNLEtBSDVCO0FBSUUxRCxxQkFBV2tQLE9BQU94WCxPQUFQLENBQWVvSSxLQUo1QjtBQUtFOEUseUJBQWVzSyxPQUFPeFgsT0FBUCxDQUFla04sYUFMaEM7QUFNRXFCLGtDQUF3QmlKLE9BQU94WCxPQUFQLENBQWVpTjtBQU56QztBQVFELE9BekZILENBeUZJOztBQUVGLFNBQUsscUJBQUw7QUFDQTs7QUFFRSw0QkFDS3VCLEtBREw7QUFFRXRGLDBCQUFnQnNPLE9BQU94WDtBQUZ6QjtBQUlELE9BbEdILENBa0dJOztBQUVGLFNBQUssY0FBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUV4RixxQkFBV3dPLE9BQU94WDtBQUZwQjtBQUlEOztBQUVELFNBQUssc0JBQUw7QUFDQTtBQUNFLFlBQU04WCx5Q0FBY3RKLE1BQU14RixTQUFwQixFQUFOO0FBQ0E4TyxrQkFBUU4sT0FBT3hYLE9BQVAsQ0FBZTBHLEtBQXZCLEVBQThCNEUsUUFBOUIsR0FBeUNrTSxPQUFPeFgsT0FBUCxDQUFlK0UsS0FBeEQ7O0FBRUEsNEJBQ0t5SixLQURMO0FBRUV4RixxQkFBVzhPO0FBRmI7QUFJRDs7QUFFRCxTQUFLLFVBQUw7QUFDQTtBQUNFdEosZ0JBQVErSSxVQUFSO0FBQ0EsNEJBQ0svSSxLQURMLElBQ1krSTtBQURaO0FBR0QsT0E3SEgsQ0E2SEk7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDSy9JLEtBREw7QUFFRW9HLG1CQUFTNEMsT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0J1TSxPQUYvQjtBQUdFK0Msa0JBQVFILE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9Cc1AsTUFIOUI7QUFJRUMsd0JBQWNKLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CdVAsWUFKcEMsRUFJa0Q7QUFDaEQ1TyxxQkFBV3dPLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CVyxTQUxqQyxFQUs0QztBQUMxQ3VGLGtDQUF3QmlKLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9Ca0csc0JBTjlDLEVBTXNFO0FBQ3BFc0osd0JBQWNMLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9Cd1AsWUFQcEMsRUFPa0Q7QUFDaER2SixxQkFBV2tKLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CaUcsU0FSakMsRUFRNEM7QUFDMUNoRyxxQkFBV2tQLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CQyxTQVRqQyxFQVM0QztBQUMxQ1ksMEJBQWdCc08sT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JhLGNBVnRDLEVBVXNEO0FBQ3BEZ0UseUJBQWVzSyxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQjZFLGFBWHJDLENBV21EO0FBWG5EO0FBYUQ7O0FBRUQsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0tzQixLQURMO0FBRUVvRyxtQkFBUzRDLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CdU0sT0FGL0I7QUFHRStDLGtCQUFRSCxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQnNQLE1BSDlCO0FBSUVDLHdCQUFjSixPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQnVQLFlBSnBDLEVBSWtEO0FBQ2hENU8scUJBQVd3TyxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQlcsU0FMakMsRUFLNEM7QUFDMUN1RixrQ0FBd0JpSixPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQmtHLHNCQU45QyxFQU1zRTtBQUNwRXNKLHdCQUFjTCxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQndQLFlBUHBDLEVBT2tEO0FBQ2hEdkoscUJBQVdrSixPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQmlHLFNBUmpDLEVBUTRDO0FBQzFDaEcscUJBQVdrUCxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQkMsU0FUakMsRUFTNEM7QUFDMUNZLDBCQUFnQnNPLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CYSxjQVZ0QyxFQVVzRDtBQUNwRGdFLHlCQUFlc0ssT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0I2RSxhQVhyQyxDQVdtRDtBQVhuRDtBQWFEOztBQUVELFNBQUssZ0JBQUw7QUFDQTtBQUNFLDRCQUNLc0IsS0FETDtBQUVFb0csbUJBQVM0QyxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQnVNLE9BRi9CO0FBR0UrQyxrQkFBUUgsT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JzUCxNQUg5QjtBQUlFQyx3QkFBY0osT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0J1UCxZQUpwQyxFQUlrRDtBQUNoRDVPLHFCQUFXd08sT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JXLFNBTGpDLEVBSzRDO0FBQzFDdUYsa0NBQXdCaUosT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JrRyxzQkFOOUMsRUFNc0U7QUFDcEVzSix3QkFBY0wsT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0J3UCxZQVBwQyxFQU9rRDtBQUNoRHZKLHFCQUFXa0osT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JpRyxTQVJqQyxFQVE0QztBQUMxQ2hHLHFCQUFXa1AsT0FBT3hYLE9BQVAsQ0FBZXFJLElBQWYsQ0FBb0JDLFNBVGpDLEVBUzRDO0FBQzFDWSwwQkFBZ0JzTyxPQUFPeFgsT0FBUCxDQUFlcUksSUFBZixDQUFvQmEsY0FWdEMsRUFVc0Q7QUFDcERnRSx5QkFBZXNLLE9BQU94WCxPQUFQLENBQWVxSSxJQUFmLENBQW9CNkUsYUFYckMsQ0FXbUQ7QUFYbkQ7QUFhRDs7QUFFRCxTQUFLLDRCQUFMO0FBQ0E7QUFDRSw0QkFDS3NCLEtBREw7QUFFRTVELDBCQUFnQjRNLE9BQU94WDtBQUZ6QjtBQUlELE9BeExILENBd0xJOztBQXhMSixHQUYwRCxDQTRMeEQ7O0FBRUYsU0FBT3dPLEtBQVAsQ0E5TDBELENBOEw3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWhOSStJLFU7O2dDQWdCa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDb0JBQSxPOztBQW5DeEIsSUFBTVcsc0JBQXNCO0FBQzFCdlksUUFBTSxNQURvQjtBQUUxQndZLGNBQVksU0FGYztBQUcxQnRELFdBQVMsRUFIaUI7QUFJMUJ1RCxlQUFhLENBSmE7QUFLMUJ0RyxnQkFBYyxDQUxZO0FBTTFCdUcsV0FBUyxRQU5pQjtBQU8xQjNILGNBQVksS0FQYztBQVExQjBELE1BQUksV0FSc0I7QUFTMUJoRyxhQUFXLFNBVGU7QUFVMUIxSixRQUFNLFNBVm9CO0FBVzFCaVQsV0FBUyxFQVhpQjtBQVkxQm5MLGNBQVksS0FaYztBQWExQnRNLE9BQUs7QUFicUIsQ0FBNUI7O0FBZ0JBLElBQU1vWSxvQkFBb0I7QUFDeEJsWSxRQUFNLE1BRGtCO0FBRXhCc0UsUUFBTSxFQUZrQjtBQUd4QjBKLGFBQVcsRUFIYTtBQUl4QmdHLE1BQUksTUFKb0I7QUFLeEJsVSxPQUFLO0FBTG1CLENBQTFCOztBQVFBLElBQU1zWCxhQUFhO0FBQ2pCZSxtQkFBaUIsS0FEQTtBQUVqQkMsaUJBQWUsS0FGRTtBQUdqQkMscUJBQW1CLEVBSEY7QUFJakI3WSxXQUFTLEVBSlE7QUFLakJPLFNBQU8sRUFMVTtBQU1qQlgsa0JBQWdCMFksbUJBTkM7QUFPakJ6WSxnQkFBYzZZLGlCQVBHO0FBUWpCdkssc0JBQW9CO0FBUkgsQ0FBbkI7O0FBV2UsU0FBU3dKLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssV0FBTDtBQUNBO0FBQ0UsNEJBQ0t5TyxLQURMO0FBRUVqUCwwQkFBZ0IwWSxtQkFGbEI7QUFHRXpZLHdCQUFjNlk7QUFIaEI7QUFLRDs7QUFFRCxTQUFLLGVBQUw7QUFDQTtBQUNFLDRCQUNLN0osS0FETDtBQUVFOEosMkJBQWlCO0FBRm5CO0FBSUQsT0FqQkgsQ0FpQkk7O0FBRUYsU0FBSyx3QkFBTDtBQUNBO0FBQ0UsNEJBQ0s5SixLQURMO0FBRUU4SiwyQkFBaUIsS0FGbkI7QUFHRUUsNkJBQW1CaEIsT0FBT3hYO0FBSDVCO0FBS0QsT0ExQkgsQ0EwQkk7O0FBRUYsU0FBSyx5QkFBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUU4SiwyQkFBaUIsS0FGbkI7QUFHRUMseUJBQWUsSUFIakI7QUFJRTVZLG1CQUFTNlgsT0FBT3hYO0FBSmxCO0FBTUQsT0FwQ0gsQ0FvQ0k7O0FBRUYsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUVqUCwwQkFBZ0JpWSxPQUFPeFgsT0FBUCxDQUFlSDtBQUZqQztBQUlELE9BNUNILENBNENJOztBQUVGO0FBQ0EsU0FBSyxzQkFBTDtBQUNBO0FBQ0UsNEJBQ0syTyxLQURMO0FBRUVoUCx3QkFBYzZZO0FBRmhCO0FBSUQsT0FyREgsQ0FxREk7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0s3SixLQURMO0FBRUV0TyxpQkFBT3NYLE9BQU94WDtBQUZoQjtBQUlELE9BN0RILENBNkRJOztBQUVGLFNBQUssZUFBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUVoUCx3QkFBY2dZLE9BQU94WCxPQUFQLENBQWVHO0FBRi9CO0FBSUQsT0FyRUgsQ0FxRUk7O0FBRUYsU0FBSyxZQUFMO0FBQ0E7QUFDRSw0QkFDS3FPLEtBREw7QUFFRWhQLHdCQUFjNlk7QUFGaEI7QUFJRCxPQTdFSCxDQTZFSTs7QUFFRjs7QUFFQSxTQUFLLGlCQUFMO0FBQ0E7QUFDRSw0QkFDSzdKLEtBREw7QUFFRVYsOEJBQW9CMEosT0FBT3hYO0FBRjdCO0FBSUQ7O0FBRUQsU0FBSyxVQUFMO0FBQ0E7QUFDRSxZQUFNTCxVQUFVNk8sTUFBTTdPLE9BQXRCO0FBQ0E2TyxnQkFBUStJLFVBQVI7QUFDQSw0QkFDSy9JLEtBREwsSUFDWTdPLFNBQVNBO0FBRHJCO0FBR0QsT0FoR0gsQ0FnR0k7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDSzZPLEtBREw7QUFFRWpQLDBCQUFnQmlZLE9BQU94WCxPQUFQLENBQWVILE1BRmpDO0FBR0VMLHdCQUFjZ1ksT0FBT3hYLE9BQVAsQ0FBZUc7QUFIL0I7QUFLRDs7QUFFRCxTQUFLLGdCQUFMO0FBQ0E7QUFDRSw0QkFDS3FPLEtBREw7QUFFRWpQLDBCQUFnQmlZLE9BQU94WCxPQUFQLENBQWVIO0FBRmpDO0FBSUQ7O0FBRUQsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0syTyxLQURMO0FBRUVqUCwwQkFBZ0JpWSxPQUFPeFgsT0FBUCxDQUFlSDtBQUZqQztBQUlEOztBQUVELFNBQUssYUFBTDtBQUNBO0FBQ0UsWUFBTUEsU0FBUzJPLE1BQU1qUCxjQUFyQjtBQUNBTSxlQUFPME0sVUFBUCxHQUFvQixJQUFwQjtBQUNBLDRCQUNLaUMsS0FETDtBQUVFalAsMEJBQWdCTTtBQUZsQjtBQUlEOztBQUVELFNBQUssY0FBTDtBQUNBO0FBQ0UsWUFBTUEsVUFBUzJPLE1BQU1qUCxjQUFyQjtBQUNBTSxnQkFBTzBNLFVBQVAsR0FBb0IsS0FBcEI7QUFDQSw0QkFDS2lDLEtBREw7QUFFRWpQLDBCQUFnQk07QUFGbEI7QUFJRDs7QUE3SUgsR0FGMEQsQ0FpSnhEOztBQUVGLFNBQU8yTyxLQUFQLENBbkowRCxDQW1KN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0F4TEl5SixtQjs7Z0NBZ0JBSSxpQjs7Z0NBUUFkLFU7O2dDQVdrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkMvQkFBLE87QUFMeEIsSUFBTUMsYUFBYTtBQUNqQnpPLFlBQVUsRUFETztBQUVqQkcsWUFBVTtBQUZPLENBQW5COztBQUtlLFNBQVNxTyxPQUFULEdBQTZDO0FBQUEsTUFBNUI5SSxLQUE0Qix1RUFBcEIrSSxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPelgsSUFBZjs7QUFFRSxTQUFLLHlCQUFMO0FBQ0E7QUFDRSw0QkFDS3lPLEtBREw7QUFFRTFGLG9CQUFVO0FBRlo7QUFJRCxPQVJILENBUUk7O0FBRUYsU0FBSywwQkFBTDtBQUNBO0FBQ0UsNEJBQ0swRixLQURMO0FBRUUxRixvQkFBVTBPLE9BQU94WDtBQUZuQjtBQUlELE9BaEJILENBZ0JJOztBQUVGLFNBQUsseUJBQUw7QUFDQTtBQUNFLDRCQUNLd08sS0FETDtBQUVFdkYsb0JBQVV1TyxPQUFPeFg7QUFGbkI7QUFJRCxPQXhCSCxDQXdCSTs7QUFFRixTQUFLLDJCQUFMO0FBQ0E7QUFDRSw0QkFDS3dPLEtBREw7QUFFRXZGLG9CQUFVO0FBRlo7QUFJRCxPQWhDSCxDQWdDSTs7QUFFRixTQUFLLFVBQUw7QUFDQTtBQUNFLFlBQU1ILFdBQVcwRixNQUFNMUYsUUFBdkI7QUFDQTBGLGdCQUFRK0ksVUFBUjtBQUNBLDRCQUNLL0ksS0FETCxJQUNZMUYsVUFBVUE7QUFEdEI7QUFHRCxPQXpDSCxDQXlDSTs7QUF6Q0osR0FGMEQsQ0E2Q3hEOztBQUVGLFNBQU8wRixLQUFQLENBL0MwRCxDQStDN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0F0REkrSSxVOztnQ0FLa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDREFBLE87QUFKeEIsSUFBTUMsYUFBYTtBQUNqQnJQLGFBQVc7QUFETSxDQUFuQjs7QUFJZSxTQUFTb1AsT0FBVCxHQUE2QztBQUFBLE1BQTVCOUksS0FBNEIsdUVBQXBCK0ksVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3pYLElBQWY7O0FBRUUsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsWUFBTTBZLFFBQVEsQ0FBQ2pLLE1BQU10RyxTQUFyQjtBQUNBLDRCQUNLc0csS0FETDtBQUVFdEcscUJBQVd1UTtBQUZiO0FBSUQsT0FUSCxDQVNJOztBQVRKLEdBRjBELENBYXhEOztBQUVGLFNBQU9qSyxLQUFQLENBZjBELENBZTdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBckJJK0ksVTs7Z0NBSWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0VBQSxPOztBQU54Qjs7Ozs7O0FBRUEsSUFBTUMsYUFBYTtBQUNqQkYsWUFBVTtBQURPLENBQW5COztBQUllLFNBQVNDLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssbUJBQUw7QUFDQTtBQUNFLDZCQUFTd0MsS0FBVCxDQUFlLDRCQUFmLEVBQTZDLHVFQUE3QztBQUNBLDRCQUNLaU0sS0FETDtBQUVFNkksb0JBQVU7QUFGWjtBQUlELE9BVEgsQ0FTSTs7QUFFRixTQUFLLGdCQUFMO0FBQ0E7QUFDRSw2QkFBUzlVLEtBQVQsQ0FBZSw0QkFBZixpQkFBMERpVixPQUFPeFgsT0FBakU7QUFDQSw0QkFDS3dPLEtBREw7QUFFRTZJLG9CQUFVO0FBRlo7QUFJRCxPQWxCSCxDQWtCSTs7QUFFRixTQUFLLDJCQUFMO0FBQ0E7QUFDRSw2QkFBUzlVLEtBQVQsQ0FBZSxRQUFmLEVBQXlCLDZKQUF6QjtBQUNBLDRCQUNLaU0sS0FETDtBQUVFNkksb0JBQVU7QUFGWjtBQUlELE9BM0JILENBMkJJOztBQUVGLFNBQUsseUJBQUw7QUFDQTtBQUNFLDZCQUFTOVUsS0FBVCxDQUFlLGdDQUFmLG1NQUU2QmlWLE9BQU94WCxPQUZwQzs7QUFJQSw0QkFDS3dPLEtBREw7QUFFRTZJLG9CQUFVO0FBRlo7QUFJRCxPQXZDSCxDQXVDSTs7QUFFRixTQUFLLGtCQUFMO0FBQ0E7QUFDRSw2QkFBUzlVLEtBQVQsQ0FBZSwyQkFBZixFQUE0QyxzRkFBNUM7QUFDQSw0QkFDS2lNLEtBREw7QUFFRTZJLG9CQUFVO0FBRlo7QUFJRCxPQWhESCxDQWdESTs7QUFFRixTQUFLLHdCQUFMO0FBQ0E7QUFDRSw2QkFBUzlVLEtBQVQsQ0FBZSwrQkFBZixrTUFFNkJpVixPQUFPeFgsT0FGcEM7O0FBSUEsNEJBQ0t3TyxLQURMO0FBRUU2SSxvQkFBVTtBQUZaO0FBSUQsT0E1REgsQ0E0REk7O0FBRUYsU0FBSyxVQUFMO0FBQ0E7QUFDRTdJLGdCQUFRK0ksVUFBUjtBQUNBLDRCQUNLL0ksS0FETDtBQUVFK0k7QUFGRjtBQUlELE9BckVILENBcUVJOztBQXJFSixHQUYwRCxDQXlFeEQ7O0FBRUYsU0FBTy9JLEtBQVAsQ0EzRTBELENBMkU3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWpGSStJLFU7O2dDQUlrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNEQUEsTztBQUx4QixJQUFNQyxhQUFhO0FBQ2pCakksV0FBUyxLQURRO0FBRWpCaUIsa0JBQWdCO0FBRkMsQ0FBbkI7O0FBS2UsU0FBUytHLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssNEJBQUw7QUFDQTtBQUNFLFlBQU11UCxVQUFVLENBQUNkLE1BQU1jLE9BQXZCO0FBQ0EsNEJBQ0tkLEtBREw7QUFFRWMsbUJBQVNBO0FBRlg7QUFJRCxPQVRILENBU0k7O0FBRUYsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsNEJBQ0tkLEtBREw7QUFFRWMsbUJBQVM7QUFGWDtBQUlELE9BakJILENBaUJJO0FBQ0YsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsNEJBQ0tkLEtBREw7QUFFRWMsbUJBQVM7QUFGWDtBQUlELE9BeEJILENBd0JJO0FBQ0YsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0tkLEtBREw7QUFFRStCLDBCQUFnQmlILE9BQU94WDtBQUZ6QjtBQUlELE9BL0JILENBK0JJO0FBQ0YsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUUrQiwwQkFBZ0I7QUFGbEI7QUFJRCxPQXRDSCxDQXNDSTtBQUNGLFNBQUssVUFBTDtBQUNBO0FBQ0UvQixnQkFBUStJLFVBQVI7QUFDQSw0QkFDSy9JLEtBREw7QUFFRStJO0FBRkY7QUFJRCxPQTlDSCxDQThDSTs7QUE5Q0osR0FGMEQsQ0FrRHhEOztBQUVGLFNBQU8vSSxLQUFQLENBcEQwRCxDQW9EN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0EzREkrSSxVOztnQ0FLa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQ0FBLE87QUFOeEIsSUFBTUMsYUFBYTtBQUNqQmpJLFdBQVMsS0FEUTtBQUVqQlcsbUJBQWlCLEVBRkE7QUFHakJMLGVBQWE7QUFISSxDQUFuQjs7QUFNZSxTQUFTMEgsT0FBVCxHQUE2QztBQUFBLE1BQTVCOUksS0FBNEIsdUVBQXBCK0ksVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3pYLElBQWY7O0FBRUUsU0FBSyxnQ0FBTDtBQUNBO0FBQ0UsNEJBQ0t5TyxLQURMO0FBRUVvQix1QkFBYTRILE9BQU94WDtBQUZ0QjtBQUlELE9BUkgsQ0FRSTs7QUFFRixTQUFLLGtDQUFMO0FBQ0E7QUFDRSw0QkFDS3dPLEtBREw7QUFFRW9CLHVCQUFhO0FBRmY7QUFJRCxPQWhCSCxDQWdCSTs7QUFFRixTQUFLLDZCQUFMO0FBQ0E7QUFDRSxZQUFNTixVQUFVLENBQUNkLE1BQU1jLE9BQXZCO0FBQ0EsNEJBQ0tkLEtBREw7QUFFRWMsbUJBQVNBLE9BRlg7QUFHRU0sdUJBQWE7QUFIZjtBQUtELE9BMUJILENBMEJJOztBQUVGLFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLcEIsS0FETDtBQUVFYyxtQkFBUztBQUZYO0FBSUQsT0FsQ0gsQ0FrQ0k7QUFDRixTQUFLLG9CQUFMO0FBQ0E7QUFDRSw0QkFDS2QsS0FETDtBQUVFYyxtQkFBUztBQUZYO0FBSUQsT0F6Q0gsQ0F5Q0k7QUFDRixTQUFLLHdCQUFMO0FBQ0E7QUFDRSw0QkFDS2QsS0FETDtBQUVFeUIsMkJBQWlCdUgsT0FBT3hYO0FBRjFCO0FBSUQsT0FoREgsQ0FnREk7QUFDRixTQUFLLHFCQUFMO0FBQ0E7QUFDRSw0QkFDS3dPLEtBREw7QUFFRXlCLDJCQUFpQjtBQUZuQjtBQUlELE9BdkRILENBdURJOztBQUVGLFNBQUssVUFBTDtBQUNBO0FBQ0V6QixnQkFBUStJLFVBQVI7QUFDQSw0QkFDSy9JLEtBREw7QUFFRStJO0FBRkY7QUFJRCxPQWhFSCxDQWdFSTs7QUFoRUosR0FGMEQsQ0FvRXhEOztBQUVGLFNBQU8vSSxLQUFQLENBdEUwRCxDQXNFN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0E5RUkrSSxVOztnQ0FNa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRUFBLE87QUFSeEIsSUFBTUMsYUFBYTtBQUNqQnpHLGFBQVcsS0FETTtBQUVqQkMsYUFBVyxNQUZNO0FBR2pCSyxjQUFZLENBSEs7QUFJakJJLGNBQVksRUFKSztBQUtqQkQsWUFBVTtBQUxPLENBQW5COztBQVFlLFNBQVMrRixPQUFULEdBQTZDO0FBQUEsTUFBNUI5SSxLQUE0Qix1RUFBcEIrSSxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPelgsSUFBZjs7QUFFRSxTQUFLLGdCQUFMO0FBQ0E7QUFDRSw0QkFDS3lPLEtBREw7QUFFRXNDLHFCQUFXO0FBRmI7QUFJRCxPQVJILENBUUk7O0FBRUYsU0FBSyxnQkFBTDtBQUNBO0FBQ0UsNEJBQ0t0QyxLQURMO0FBRUVzQyxxQkFBVztBQUZiO0FBSUQsT0FoQkgsQ0FnQkk7O0FBRUYsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsNEJBQ0t0QyxLQURMO0FBRUV1QyxxQkFBV3lHLE9BQU94WDtBQUZwQjtBQUlELE9BeEJILENBd0JJOztBQUVGLFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLd08sS0FETDtBQUVFNEMsc0JBQVlvRyxPQUFPeFg7QUFGckI7QUFJRDs7QUFFRCxTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDS3dPLEtBREw7QUFFRStDLG9CQUFVaUcsT0FBT3hYO0FBRm5CO0FBSUQ7O0FBRUQsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0t3TyxLQURMO0FBRUVnRCxzQkFBWWdHLE9BQU94WDtBQUZyQjtBQUlEOztBQUVELFNBQUssVUFBTDtBQUNBO0FBQ0V3TyxnQkFBUStJLFVBQVI7QUFDQSw0QkFDSy9JLEtBREwsSUFDWStJO0FBRFo7QUFHRCxPQXhESCxDQXdESTs7QUFFRixTQUFLLGFBQUw7QUFDQTtBQUNFLDRCQUNLL0ksS0FETDtBQUVFdUMscUJBQVd5RyxPQUFPeFgsT0FBUCxDQUFlNlEsR0FBZixDQUFtQkUsU0FGaEM7QUFHRUssc0JBQVlvRyxPQUFPeFgsT0FBUCxDQUFlNlEsR0FBZixDQUFtQk8sVUFIakM7QUFJRUksc0JBQVlnRyxPQUFPeFgsT0FBUCxDQUFlNlEsR0FBZixDQUFtQlcsVUFKakM7QUFLRUQsb0JBQVVpRyxPQUFPeFgsT0FBUCxDQUFlNlEsR0FBZixDQUFtQlU7QUFML0I7QUFPRDs7QUFuRUgsR0FGMEQsQ0F1RXhEOztBQUVGLFNBQU8vQyxLQUFQLENBekUwRCxDQXlFN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0FuRkkrSSxVOztnQ0FRa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRkFBLE87QUFOeEIsSUFBTUMsYUFBYTtBQUNqQnpHLGFBQVcsS0FETTtBQUVqQjhCLFVBQVEsSUFGUztBQUdqQjhGLGlCQUFlO0FBSEUsQ0FBbkI7O0FBTWUsU0FBU3BCLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLeU8sS0FETDtBQUVFc0MscUJBQVc7QUFGYjtBQUlELE9BUkgsQ0FRSTs7QUFFRixTQUFLLG9CQUFMO0FBQ0E7QUFDRSw0QkFDS3RDLEtBREw7QUFFRXNDLHFCQUFXO0FBRmI7QUFJRCxPQWhCSCxDQWdCSTs7QUFFRixTQUFLLHNCQUFMO0FBQ0E7QUFDRSxZQUFNNkgsWUFBWW5LLE1BQU1vRSxNQUF4QjtBQUNBLDRCQUNLcEUsS0FETDtBQUVFb0Usa0JBQVEsQ0FBQytGO0FBRlg7QUFJRCxPQXpCSCxDQXlCSTs7QUFFRixTQUFLLHVCQUFMO0FBQ0E7QUFDRSxZQUFNQyxjQUFjcEssTUFBTWtLLGFBQTFCO0FBQ0EsNEJBQ0tsSyxLQURMO0FBRUVrSyx5QkFBZSxDQUFDRTtBQUZsQjtBQUlELE9BbENILENBa0NJOztBQUVGLFNBQUssVUFBTDtBQUNBO0FBQ0VwSyxnQkFBUStJLFVBQVI7QUFDQSw0QkFDSy9JLEtBREwsSUFDWStJO0FBRFo7QUFHRCxPQTFDSCxDQTBDSTs7QUExQ0osR0FGMEQsQ0E4Q3hEOztBQUVGLFNBQU8vSSxLQUFQLENBaEQwRCxDQWdEN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0F4REkrSSxVOztnQ0FNa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDYUFBLE87QUFuQnhCLElBQU11QixrQkFBa0I7QUFDdEIxRSxNQUFJLENBRGtCO0FBRXRCaUUsV0FBUyxNQUZhO0FBR3RCL1AsUUFBTSxFQUhnQjtBQUl0QnhJLFVBQVEsRUFKYztBQUt0QmdSLE9BQUssRUFMaUI7QUFNdEIrRCxXQUFTLElBQUlrRSxJQUFKO0FBTmEsQ0FBeEI7O0FBU0EsSUFBTXZCLGFBQWE7QUFDakJuRSxTQUFPLEVBRFU7QUFFakJDLGNBQVl3RixlQUZLO0FBR2pCRSxhQUFXLEtBSE07QUFJakJDLGdCQUFjLENBSkc7QUFLakJDLHVCQUFxQixLQUxKO0FBTWpCQywwQkFBd0I7O0FBTlAsQ0FBbkI7O0FBVWUsU0FBUzVCLE9BQVQsR0FBNkM7QUFBQSxNQUE1QjlJLEtBQTRCLHVFQUFwQitJLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96WCxJQUFmOztBQUVFLFNBQUssV0FBTDtBQUNBO0FBQ0UsNEJBQ0t5TyxLQURMO0FBRUU2RSxzQkFBWXdGLGVBRmQ7QUFHRUUscUJBQVcsS0FIYjtBQUlFQyx3QkFBYyxDQUpoQjtBQUtFQywrQkFBcUIsS0FMdkI7QUFNRUMsa0NBQXdCO0FBTjFCO0FBUUQsT0FaSCxDQVlJOztBQUVGLFNBQUssa0JBQUw7QUFDQTtBQUNFLDRCQUNLMUssS0FETDtBQUVFeUssK0JBQXFCO0FBRnZCO0FBSUQsT0FwQkgsQ0FvQkk7O0FBRUYsU0FBSyxxQkFBTDtBQUNBO0FBQ0UsNEJBQ0t6SyxLQURMO0FBRUUwSyxrQ0FBd0I7QUFGMUI7QUFJRCxPQTVCSCxDQTRCSTs7QUFFRixTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDSzFLLEtBREw7QUFFRXlLLCtCQUFxQjtBQUZ2QjtBQUlELE9BcENILENBb0NJOztBQUVGLFNBQUsscUJBQUw7QUFDQTtBQUNFLDRCQUNLekssS0FETDtBQUVFMEssa0NBQXdCO0FBRjFCO0FBSUQsT0E1Q0gsQ0E0Q0k7O0FBRUYsU0FBSyxzQkFBTDtBQUNBO0FBQ0UsNEJBQ0sxSyxLQURMO0FBRUU0RSxpQkFBTztBQUZUO0FBSUQsT0FwREgsQ0FvREk7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0s1RSxLQURMO0FBRUU0RSxpQkFBT29FLE9BQU94WDtBQUZoQjtBQUlELE9BNURILENBNERJOztBQUVGLFNBQUssVUFBTDtBQUNBO0FBQ0UsWUFBTXFJLE9BQU9qRCxLQUFLK1QsS0FBTCxDQUFXM0IsT0FBT3hYLE9BQVAsQ0FBZXFJLElBQTFCLENBQWI7QUFDQSxZQUFNeEksU0FBU3VGLEtBQUsrVCxLQUFMLENBQVczQixPQUFPeFgsT0FBUCxDQUFlSCxNQUExQixDQUFmO0FBQ0EsWUFBTU0sT0FBT2lGLEtBQUsrVCxLQUFMLENBQVczQixPQUFPeFgsT0FBUCxDQUFlRyxJQUExQixDQUFiO0FBQ0EsWUFBTTBRLE1BQU16TCxLQUFLK1QsS0FBTCxDQUFXM0IsT0FBT3hYLE9BQVAsQ0FBZTZRLEdBQTFCLENBQVo7O0FBRUEsWUFBTTFJLE9BQU87QUFDWEUsZ0JBQU1BLElBREs7QUFFWHhJLGtCQUFRQSxNQUZHO0FBR1hNLGdCQUFNQSxJQUhLO0FBSVgwUSxlQUFLQSxHQUpNO0FBS1grRCxtQkFBUyxJQUFJa0UsSUFBSixDQUFTdEIsT0FBT3hYLE9BQVAsQ0FBZTRVLE9BQXhCLENBTEU7QUFNWFQsY0FBSXFELE9BQU94WCxPQUFQLENBQWVvWjtBQU5SLFNBQWI7QUFRQSw0QkFDSzVLLEtBREw7QUFFRTZFLHNCQUFZbEw7QUFGZDtBQUlELE9BakZILENBaUZJOztBQUVGLFNBQUssYUFBTDtBQUNBO0FBQ0UsNEJBQ0txRyxLQURMO0FBRUV1SyxxQkFBVztBQUZiO0FBSUQsT0F6RkgsQ0F5Rkk7O0FBRUYsU0FBSyxnQkFBTDtBQUNBO0FBQ0UsNEJBQ0t2SyxLQURMO0FBRUV1SyxxQkFBVztBQUZiO0FBSUQsT0FqR0gsQ0FpR0k7O0FBRUYsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0t2SyxLQURMO0FBRUV1SyxxQkFBVztBQUZiO0FBSUQsT0F6R0gsQ0F5R0k7O0FBRUYsU0FBSyxVQUFMO0FBQ0E7QUFDRSxZQUFNM0YsUUFBUTVFLE1BQU00RSxLQUFwQjtBQUNBNUUsZ0JBQVErSSxVQUFSO0FBQ0EsNEJBQ0svSSxLQURMLElBQ1k0RSxPQUFPQTtBQURuQjtBQUdELE9BbEhILENBa0hJOztBQUVGLFNBQUssYUFBTDtBQUNBO0FBQ0UsNEJBQ0s1RSxLQURMO0FBRUU2RSxzQkFBWW1FLE9BQU94WCxPQUZyQjtBQUdFZ1osd0JBQWN4QixPQUFPeFgsT0FBUCxDQUFlbVU7QUFIL0I7QUFLRDs7QUFFRCxTQUFLLGdCQUFMO0FBQ0E7QUFDRSxZQUFNaE0sUUFBTzBRLGVBQWI7QUFDQTFRLGNBQUtFLElBQUwsR0FBWW1QLE9BQU94WCxPQUFQLENBQWVxSSxJQUEzQjtBQUNBRixjQUFLdEksTUFBTCxHQUFjMlgsT0FBT3hYLE9BQVAsQ0FBZUgsTUFBN0I7QUFDQSw0QkFDSzJPLEtBREw7QUFFRTZFLHNCQUFZbEw7QUFGZDtBQUlEOztBQUVELFNBQUssaUJBQUw7QUFDQTtBQUNFLFlBQU1BLFNBQU8wUSxlQUFiO0FBQ0ExUSxlQUFLRSxJQUFMLEdBQVltUCxPQUFPeFgsT0FBUCxDQUFlcUksSUFBM0I7QUFDQUYsZUFBS3RJLE1BQUwsR0FBYzJYLE9BQU94WCxPQUFQLENBQWVILE1BQTdCO0FBQ0EsNEJBQ0syTyxLQURMO0FBRUU2RSxzQkFBWWxMO0FBRmQ7QUFJRDs7QUFqSkgsR0FGMEQsQ0FxSnhEOztBQUVGLFNBQU9xRyxLQUFQLENBdkowRCxDQXVKN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0E1S0lxSyxlOztnQ0FTQXRCLFU7O2dDQVVrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNmQUEsTzs7OztBQUp4QixJQUFNQyxhQUFhO0FBQ2pCakUsV0FBUztBQURRLENBQW5COztBQUllLFNBQVNnRSxPQUFULEdBQTZDO0FBQUEsTUFBNUI5SSxLQUE0Qix1RUFBcEIrSSxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPelgsSUFBZjs7QUFFRSxTQUFLLHdCQUFMO0FBQ0E7QUFDRSw0QkFDS3lPLEtBREwsc0JBRUdnSixPQUFPeFgsT0FBUCxDQUFld0UsT0FGbEIsRUFFNEJnVCxPQUFPeFgsT0FBUCxDQUFlaUMsSUFGM0M7QUFLRCxPQVRILENBU0k7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0t1TSxLQURMLHNCQUVHZ0osT0FBT3hYLE9BQVAsQ0FBZXdFLE9BRmxCLEVBRTRCLEVBRjVCO0FBS0QsT0FsQkgsQ0FrQkk7O0FBRUYsU0FBSyxZQUFMO0FBQ0E7QUFDRSw0QkFDS2dLLEtBREwsc0JBRUdnSixPQUFPeFgsT0FBUCxDQUFld0UsT0FGbEIsRUFFNEJnVCxPQUFPeFgsT0FBUCxDQUFlaUMsSUFGM0M7QUFLRCxPQTNCSCxDQTJCSTs7QUEzQko7O0FBK0JBLFNBQU91TSxLQUFQLENBakMwRCxDQWlDN0M7QUFDZDs7Ozs7Ozs7Z0NBdENLK0ksVTs7Z0NBSWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7OztlQ0hULG9CQUFVOztBQUVyQitCLFdBQU9DLFNBQVAsQ0FBaUI1USxXQUFqQixHQUErQixVQUFTNlEsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBaUI7QUFDaEQsWUFBSUMsSUFBSSxJQUFSO0FBQUEsWUFDSUgsSUFBSTVQLE1BQU00UCxJQUFJSSxLQUFLQyxHQUFMLENBQVNMLENBQVQsQ0FBVixJQUF5QixDQUF6QixHQUE2QkEsQ0FEckM7QUFBQSxZQUVJQyxJQUFJQSxLQUFLSyxTQUFMLEdBQWlCLEdBQWpCLEdBQXVCTCxDQUYvQjtBQUFBLFlBR0lDLElBQUlBLEtBQUtJLFNBQUwsR0FBaUIsR0FBakIsR0FBdUJKLENBSC9CO0FBQUEsWUFJSUssSUFBSUosSUFBSSxDQUFKLEdBQVEsR0FBUixHQUFjLEVBSnRCO0FBQUEsWUFLSUssSUFBSUMsT0FBTzNULFNBQVNxVCxJQUFJQyxLQUFLQyxHQUFMLENBQVNQLE9BQU9LLENBQVAsS0FBYSxDQUF0QixFQUF5Qk8sT0FBekIsQ0FBaUNWLENBQWpDLENBQWIsQ0FBUCxDQUxSO0FBQUEsWUFNSVcsSUFBSSxDQUFDQSxJQUFJSCxFQUFFbFgsTUFBUCxJQUFpQixDQUFqQixHQUFxQnFYLElBQUksQ0FBekIsR0FBNkIsQ0FOckM7QUFPRyxlQUFPSixLQUFLSSxJQUFJSCxFQUFFSSxNQUFGLENBQVMsQ0FBVCxFQUFZRCxDQUFaLElBQWlCVCxDQUFyQixHQUF5QixFQUE5QixJQUFvQ00sRUFBRUksTUFBRixDQUFTRCxDQUFULEVBQVlwRSxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxPQUFPMkQsQ0FBN0MsQ0FBcEMsSUFBdUZGLElBQUlDLElBQUlHLEtBQUtDLEdBQUwsQ0FBU0YsSUFBSUssQ0FBYixFQUFnQkUsT0FBaEIsQ0FBd0JWLENBQXhCLEVBQTJCekUsS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBUixHQUE4QyxFQUFySSxDQUFQO0FBQ0QsS0FURjtBQVdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUtxQnNGLFE7Ozs7Ozs7Ozs7Ozs7QUFFbkI7NkJBQ1M7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLG1CQUFmO0FBQ0wsK0NBQUssS0FBSyxvQ0FBVixHQURLO0FBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZLLE9BQVA7QUFLRDs7OztFQVZtQyxnQkFBTTFTLFM7O2tCQUF2QjBTLFE7Ozs7Ozs7O2dDQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0RHOUMsTztBQUp4QixJQUFNQyxhQUFhO0FBQ2pCblEsWUFBVTtBQURPLENBQW5COztBQUllLFNBQVNrUSxPQUFULEdBQTZDO0FBQUEsTUFBNUI5SSxLQUE0Qix1RUFBcEIrSSxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPelgsSUFBZjs7QUFFRSxTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDS3lPLEtBREw7QUFFRXBILG9CQUFVO0FBRlo7QUFLRCxPQVRILENBU0k7O0FBRUYsU0FBSyxlQUFMO0FBQ0E7QUFDRSw0QkFDS29ILEtBREw7QUFFRXBILG9CQUFVO0FBRlo7QUFLRCxPQWxCSCxDQWtCSTs7QUFsQkosR0FGMEQsQ0FzQnhEOztBQUVGLFNBQU9vSCxLQUFQLENBeEIwRCxDQXdCN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0E5QkkrSSxVOztnQ0FJa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7UUNLUitDLFUsR0FBQUEsVTtRQXVCQUMsa0IsR0FBQUEsa0I7UUF1QkFDLGMsR0FBQUEsYztRQXNCQUMsZSxHQUFBQSxlO1FBcUJBQyxTLEdBQUFBLFM7UUFlQUMsYSxHQUFBQSxhO1FBaUJBQyxTLEdBQUFBLFM7QUFsSWhCO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFNBQVMsbUJBQUF6USxDQUFRLEdBQVIsQ0FBZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNrUSxVQUFULENBQW9CdFIsV0FBcEIsRUFBaUNHLGNBQWpDLEVBQWlEckosTUFBakQsRUFBeUQ7O0FBRTlELE1BQU1pWSxVQUFVL08sWUFBWWxELEdBQVosQ0FBZ0IsZ0JBQVE7O0FBRXRDLFFBQU1nVixVQUFVelgsSUFBaEI7O0FBRUEsUUFBTW5CLE9BQU82WSxhQUFhMVgsS0FBS3VJLE9BQWxCLEVBQTJCdkksS0FBS3NHLEdBQWhDLEVBQXFDdEcsS0FBS2tJLFFBQTFDLEVBQW9EcEMsY0FBcEQsRUFBb0VySixNQUFwRSxDQUFiOztBQUVBZ2IsWUFBUTdOLFFBQVIsR0FBbUIvSyxLQUFLK0ssUUFBeEI7QUFDQTZOLFlBQVFqTyxXQUFSLEdBQXNCM0ssS0FBSzJLLFdBQTNCO0FBQ0FpTyxZQUFRdE4sZ0JBQVIsR0FBMkJ0TCxLQUFLc0wsZ0JBQWhDO0FBQ0FzTixZQUFRNU4sa0JBQVIsR0FBNkJoTCxLQUFLZ0wsa0JBQWxDO0FBQ0E0TixZQUFRbE8sVUFBUixHQUFxQjFLLEtBQUswSyxVQUExQjs7QUFFQSxXQUFPa08sT0FBUDtBQUVELEdBZGUsQ0FBaEI7O0FBZ0JBLFNBQU8sRUFBQzlhLE1BQU0sY0FBUCxFQUF1QkMsU0FBUzhYLE9BQWhDLEVBQVA7QUFFRDs7QUFFRDtBQUNPLFNBQVN3QyxrQkFBVCxDQUE0QnZSLFdBQTVCLEVBQXlDckosSUFBekMsRUFBK0M0TCxRQUEvQyxFQUF5RHBDLGNBQXpELEVBQXlFckosTUFBekUsRUFBaUY7O0FBRXRGLE1BQU0yTixjQUFjekUsWUFBWW5KLFNBQVosQ0FBc0I7QUFBQSxXQUFRd0QsS0FBSytJLElBQUwsSUFBYXpNLElBQXJCO0FBQUEsR0FBdEIsQ0FBcEIsQ0FGc0YsQ0FFakI7O0FBRXJFLE1BQU1JLE1BQU8wTixlQUFlLENBQUMsQ0FBakIsR0FBb0I7QUFDNUI7QUFDQXpOLFVBQU0sMkJBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0sYUFETjtBQUVBQyxhQUFTO0FBQ1BvRCxZQUFNMlgsZ0JBQWdCaFMsV0FBaEIsRUFBNkJ5RSxXQUE3QixFQUEwQ3pFLFlBQVl5RSxXQUFaLEVBQXlCOUQsR0FBbkUsRUFBd0U0QixRQUF4RSxFQUFrRnBDLGNBQWxGLEVBQWtHckosTUFBbEcsRUFDSmtKLFlBQVl5RSxXQUFaLEVBQXlCckIsSUFEckIsQ0FEQztBQUdQekYsYUFBTzhHO0FBSEE7QUFGVCxHQUxKOztBQWNBLFNBQU8xTixHQUFQO0FBRUQ7O0FBRUQ7QUFDTyxTQUFTeWEsY0FBVCxDQUF3QnhSLFdBQXhCLEVBQXFDckosSUFBckMsRUFBMkM2TCxJQUEzQyxFQUFpRDtBQUN0RCxNQUFNeVAsVUFBVSxDQUFDelAsSUFBRCxHQUFRLEdBQVIsR0FBY0EsSUFBOUI7QUFDQSxNQUFNaUMsY0FBY3pFLFlBQVluSixTQUFaLENBQXNCO0FBQUEsV0FBUXdELEtBQUsrSSxJQUFMLElBQWF6TSxJQUFyQjtBQUFBLEdBQXRCLENBQXBCLENBRnNELENBRWU7O0FBRXJFLE1BQU1JLE1BQU8wTixlQUFlLENBQUMsQ0FBakIsR0FBb0I7QUFDNUI7QUFDQXpOLFVBQU0sMkJBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSO0FBQ0FELFVBQU0sdUJBRE47QUFFQUMsYUFBUztBQUNQdUwsWUFBTXlQLE9BREM7QUFFUHRVLGFBQU84RztBQUZBO0FBRlQsR0FMSjs7QUFhQSxTQUFPMU4sR0FBUDtBQUVEOztBQUVEO0FBQ08sU0FBUzBhLGVBQVQsQ0FBeUI5YSxJQUF6QixFQUErQmdLLEdBQS9CLEVBQW9DWixRQUFwQyxFQUE4Q0MsV0FBOUMsRUFBMkRHLGNBQTNELEVBQTJFckosTUFBM0UsRUFBbUYrSixhQUFuRixFQUFrR0MsVUFBbEcsRUFBOEc7O0FBRW5ILE1BQU1vUixVQUFVLEtBQWhCOztBQUVBLE1BQU1ULGtCQUFrQjFSLFNBQVNsSixTQUFULENBQW1CLG1CQUFXO0FBQ3BELFdBQU8rTCxRQUFRak0sSUFBUixJQUFnQkEsSUFBaEIsSUFBd0JpTSxRQUFRQyxPQUFSLElBQW1CbE0sSUFBbEQ7QUFDRCxHQUZ1QixDQUF4QixDQUptSCxDQU1oSDs7QUFFSCxNQUFNSSxNQUFPMGEsbUJBQW1CLENBQUMsQ0FBckIsR0FBd0I7QUFDaEM7QUFDQXphLFVBQU0sbUJBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSa2IsY0FBY3hiLElBQWQsRUFBb0JnSyxHQUFwQixFQUF5QlosUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdERyxjQUFoRCxFQUFnRXNSLGVBQWhFLEVBQWlGM2EsTUFBakYsRUFBeUZvYixPQUF6RixDQUxKOztBQU9BLFNBQU9uYixHQUFQO0FBRUQ7O0FBRUQ7O0FBRU8sU0FBUzJhLFNBQVQsQ0FBb0IvYSxJQUFwQixFQUEwQmdLLEdBQTFCLEVBQStCWCxXQUEvQixFQUE0Q0csY0FBNUMsRUFBNERySixNQUE1RCxFQUFvRTs7QUFFekUsTUFBTTJOLGNBQWN6RSxZQUFZbkosU0FBWixDQUFzQjtBQUFBLFdBQVF3RCxLQUFLK0ksSUFBTCxJQUFhek0sSUFBckI7QUFBQSxHQUF0QixDQUFwQjtBQUNBLE1BQU15YixTQUFTM2EsV0FBV2tKLEdBQVgsQ0FBZjtBQUNBLE1BQU01SixNQUFNO0FBQ1ZDLFVBQU0sYUFESTtBQUVWQyxhQUFTO0FBQ1BvRCxZQUFNMlgsZ0JBQWdCaFMsV0FBaEIsRUFBNkJ5RSxXQUE3QixFQUEwQzJOLE1BQTFDLEVBQWtEcFMsWUFBWXlFLFdBQVosRUFBeUJsQyxRQUEzRSxFQUFxRnBDLGNBQXJGLEVBQXFHckosTUFBckcsRUFDSmtKLFlBQVl5RSxXQUFaLEVBQXlCckIsSUFEckIsQ0FEQztBQUdQekYsYUFBTzhHO0FBSEE7QUFGQyxHQUFaO0FBUUEsU0FBTzFOLEdBQVA7QUFDRDs7QUFFTSxTQUFTNGEsYUFBVCxDQUF3QmhiLElBQXhCLEVBQThCZ0ssR0FBOUIsRUFBbUNYLFdBQW5DLEVBQWdERyxjQUFoRCxFQUFnRXJKLE1BQWhFLEVBQXdFOztBQUU3RSxNQUFNMk4sY0FBY3pFLFlBQVluSixTQUFaLENBQXNCO0FBQUEsV0FBUXdELEtBQUt1SSxPQUFMLENBQWFqTSxJQUFiLElBQXFCQSxJQUFyQixJQUE2QjBELEtBQUt1SSxPQUFMLENBQWFDLE9BQWIsSUFBd0JsTSxJQUE3RDtBQUFBLEdBQXRCLENBQXBCO0FBQ0EsTUFBTXliLFNBQVMzYSxXQUFXa0osR0FBWCxDQUFmO0FBQ0EsTUFBTTVKLE1BQU07QUFDVkMsVUFBTSxhQURJO0FBRVZDLGFBQVM7QUFDUG9ELFlBQU0yWCxnQkFBZ0JoUyxXQUFoQixFQUE2QnlFLFdBQTdCLEVBQTBDMk4sTUFBMUMsRUFBa0RwUyxZQUFZeUUsV0FBWixFQUF5QmxDLFFBQTNFLEVBQXFGcEMsY0FBckYsRUFBcUdySixNQUFyRyxFQUNKa0osWUFBWXlFLFdBQVosRUFBeUJyQixJQURyQixDQURDO0FBR1B6RixhQUFPOEc7QUFIQTtBQUZDLEdBQVo7QUFRQSxTQUFPMU4sR0FBUDtBQUNEOztBQUVEOztBQUVPLFNBQVM2YSxTQUFULENBQW9CamIsSUFBcEIsRUFBMEIwYixRQUExQixFQUFvQ3JTLFdBQXBDLEVBQWlERyxjQUFqRCxFQUFpRXJKLE1BQWpFLEVBQXlFOztBQUU5RSxNQUFNMk4sY0FBY3pFLFlBQVluSixTQUFaLENBQXNCO0FBQUEsV0FBUXdELEtBQUt1SSxPQUFMLENBQWFqTSxJQUFiLElBQXFCQSxJQUE3QjtBQUFBLEdBQXRCLENBQXBCO0FBQ0EsTUFBTXliLFNBQVNDLFdBQVc1YSxXQUFXdUksWUFBWXlFLFdBQVosRUFBeUI5RCxHQUF6QixHQUErQixDQUExQyxDQUFYLEdBQTBEbEosV0FBV3VJLFlBQVl5RSxXQUFaLEVBQXlCOUQsR0FBekIsR0FBK0IsQ0FBMUMsQ0FBekU7QUFDQSxNQUFNNUosTUFBTTtBQUNWQyxVQUFNLGFBREk7QUFFVkMsYUFBUztBQUNQb0QsWUFBTTJYLGdCQUFnQmhTLFdBQWhCLEVBQTZCeUUsV0FBN0IsRUFBMEMyTixNQUExQyxFQUFrRHBTLFlBQVl5RSxXQUFaLEVBQXlCbEMsUUFBM0UsRUFBcUZwQyxjQUFyRixFQUFxR3JKLE1BQXJHLEVBQ0prSixZQUFZeUUsV0FBWixFQUF5QnJCLElBRHJCLENBREM7QUFHUHpGLGFBQU84RztBQUhBO0FBRkMsR0FBWjtBQVFBLFNBQU8xTixHQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBU29iLGFBQVQsQ0FBdUJ4YixJQUF2QixFQUE2QmdLLEdBQTdCLEVBQWtDWixRQUFsQyxFQUE0Q0MsV0FBNUMsRUFBeURHLGNBQXpELEVBQXlFc1IsZUFBekUsRUFBMEYzYSxNQUExRixFQUFrR29iLE9BQWxHLEVBQTJHOztBQUV6RztBQUNBLE1BQU16TixjQUFjekUsWUFBWW5KLFNBQVosQ0FBc0I7QUFBQSxXQUFReUksS0FBS3NELE9BQUwsQ0FBYWpNLElBQWIsSUFBcUJBLElBQXJCLElBQTZCMkksS0FBS3NELE9BQUwsQ0FBYUMsT0FBYixJQUF3QmxNLElBQTdEO0FBQUEsR0FBdEIsQ0FBcEI7O0FBRUEsTUFBTTJiLGNBQWNQLGFBQWFoUyxTQUFTMFIsZUFBVCxDQUFiLEVBQXdDOVEsR0FBeEMsRUFBNkMsQ0FBN0MsRUFBZ0RSLGNBQWhELEVBQWdFckosTUFBaEUsQ0FBcEI7O0FBRUE7QUFDQSxNQUFJb2IsT0FBSixFQUFhO0FBQ1gsUUFBTTlPLE9BQU95TyxRQUFiO0FBQ0EsUUFBTTlhLE1BQU8wTixlQUFlLENBQUMsQ0FBakIsR0FBb0I7QUFDNUI7QUFDQXpOLFlBQU0sYUFETjtBQUVBQyxlQUFTO0FBQ1BtTSxjQUFNQSxJQURDO0FBRVBSLGlCQUFTN0MsU0FBUzBSLGVBQVQsQ0FGRjtBQUdQOVEsYUFBS0EsR0FIRTtBQUlQNEIsa0JBQVUsQ0FKSDtBQUtQaUMsMEJBQWtCOE4sWUFBWTlOLGdCQUx2QjtBQU1QTiw0QkFBb0JvTyxZQUFZcE8sa0JBTnpCO0FBT1BELGtCQUFVcU8sWUFBWXJPLFFBUGY7QUFRUEoscUJBQWF5TyxZQUFZek8sV0FSbEI7QUFTUHJCLGNBQU0sR0FUQztBQVVQb0Isb0JBQVkwTyxZQUFZMU87QUFWakI7QUFGVCxLQURRLEdBaUJSO0FBQ0E1TSxZQUFNLGFBRE47QUFFQUMsZUFBUztBQUNQb0QsY0FBTTJYLGdCQUFnQmhTLFdBQWhCLEVBQTZCeUUsV0FBN0IsRUFBMEN6RSxZQUFZeUUsV0FBWixFQUF5QjlELEdBQXpCLEdBQStCQSxHQUF6RSxFQUNKWCxZQUFZeUUsV0FBWixFQUF5QmxDLFFBRHJCLEVBQytCcEMsY0FEL0IsRUFDK0NySixNQUQvQyxFQUN1RGtKLFlBQVl5RSxXQUFaLEVBQXlCckIsSUFEaEYsQ0FEQztBQUdQekYsZUFBTzhHO0FBSEE7QUFGVCxLQWpCSjtBQXlCQSxXQUFPMU4sR0FBUDs7QUFFRjtBQUNDLEdBOUJELE1BOEJPO0FBQ0wsUUFBTXFNLFFBQU95TyxRQUFiO0FBQ0EsUUFBTTlhLE9BQU07QUFDVkMsWUFBTSxhQURJO0FBRVZDLGVBQVM7QUFDUG1NLGNBQU1BLEtBREM7QUFFUFIsaUJBQVM3QyxTQUFTMFIsZUFBVCxDQUZGO0FBR1A5USxhQUFLQSxHQUhFO0FBSVA0QixrQkFBVSxDQUpIO0FBS1BpQywwQkFBa0I4TixZQUFZOU4sZ0JBTHZCO0FBTVBOLDRCQUFvQm9PLFlBQVlwTyxrQkFOekI7QUFPUEQsa0JBQVVxTyxZQUFZck8sUUFQZjtBQVFQSixxQkFBYXlPLFlBQVl6TyxXQVJsQjtBQVNQckIsY0FBTSxHQVRDO0FBVVBvQixvQkFBWTBPLFlBQVkxTztBQVZqQjtBQUZDLEtBQVo7QUFlQSxXQUFPN00sSUFBUDtBQUNEO0FBRUY7O0FBRUQ7QUFDQSxTQUFTZ2IsWUFBVCxDQUFzQm5QLE9BQXRCLEVBQStCakMsR0FBL0IsRUFBb0M0UixlQUFwQyxFQUFxRHBTLGNBQXJELEVBQXFFckosTUFBckUsRUFBNkU7O0FBRTNFLE1BQU0wYixRQUFRNU8sV0FBV2hCLE9BQVgsRUFBb0I5TCxNQUFwQixDQUFkOztBQUVBLE1BQU1vTixxQkFBcUJzTyxRQUFRN1IsR0FBbkM7O0FBRUEsTUFBTThSLFdBQVdELFFBQVE3UixHQUFSLElBQWUsSUFBSzRSLGtCQUFrQixHQUF0QyxLQUErQyxJQUFLcFMsaUJBQWlCLEdBQXJFLENBQWpCOztBQUVBLE1BQU11UyxNQUFPOVAsUUFBUUksU0FBVCxHQUNSeVAsWUFBWTdQLFFBQVFLLEtBQVIsR0FBZ0IsR0FBNUIsQ0FEUSxHQUVSLENBRko7O0FBSUEsTUFBTTBQLE1BQU8vUCxRQUFRMEIsVUFBVCxHQUNSbU8sWUFBWTdQLFFBQVEyQixNQUFSLEdBQWlCLEdBQTdCLENBRFEsR0FFUixDQUZKOztBQUlBLE1BQU1WLGNBQWM0TyxXQUFXQyxHQUFYLEdBQWlCQyxHQUFyQzs7QUFFQSxNQUFNQyx5QkFBeUJKLFFBQVE3UixHQUFSLElBQWU0UixrQkFBa0IsR0FBakMsQ0FBL0I7QUFDQSxNQUFNTSx5QkFBeUIsQ0FBRUwsUUFBUTdSLEdBQVQsR0FBZ0JpUyxzQkFBakIsS0FBNEN6UyxpQkFBaUIsR0FBN0QsQ0FBL0I7O0FBRUEsTUFBTXFFLG1CQUFtQm9PLHlCQUF5QkMsc0JBQWxEOztBQUVBLFNBQU87QUFDTDVPLGNBQVV3TyxRQURMO0FBRUw1TyxpQkFBYUEsV0FGUjtBQUdMVyxzQkFBa0JBLGdCQUhiO0FBSUxOLHdCQUFvQkEsa0JBSmY7QUFLTE4sZ0JBQVk0TztBQUxQLEdBQVA7QUFRRDs7QUFFRDtBQUNBLFNBQVNSLGVBQVQsQ0FBeUJoUyxXQUF6QixFQUFzQ3JDLEtBQXRDLEVBQTZDbVYsTUFBN0MsRUFBcURQLGVBQXJELEVBQXNFcFMsY0FBdEUsRUFBc0ZySixNQUF0RixFQUE4RnNNLElBQTlGLEVBQW9HOztBQUVsRyxNQUFNbEssT0FBTzZZLGFBQWEvUixZQUFZckMsS0FBWixFQUFtQmlGLE9BQWhDLEVBQXlDa1EsTUFBekMsRUFBaURQLGVBQWpELEVBQWtFcFMsY0FBbEUsRUFBa0ZySixNQUFsRixDQUFiOztBQUVBLFNBQU87QUFDTHNNLFVBQU1BLElBREQ7QUFFTFIsYUFBUzVDLFlBQVlyQyxLQUFaLEVBQW1CaUYsT0FGdkI7QUFHTDRCLHNCQUFrQnRMLEtBQUtzTCxnQkFIbEI7QUFJTDdELFNBQUttUyxNQUpBO0FBS0x2USxjQUFVZ1EsZUFMTDtBQU1Mck8sd0JBQW9CaEwsS0FBS2dMLGtCQU5wQjtBQU9MRCxjQUFVL0ssS0FBSytLLFFBUFY7QUFRTEosaUJBQWEzSyxLQUFLMkssV0FSYjtBQVNMckIsVUFBTXhDLFlBQVlyQyxLQUFaLEVBQW1CNkUsSUFUcEI7QUFVTG9CLGdCQUFZMUssS0FBSzBLO0FBVlosR0FBUDtBQVlEOztBQUVEO0FBQ0EsU0FBU0EsVUFBVCxDQUFvQmhCLE9BQXBCLEVBQTZCOUwsTUFBN0IsRUFBcUM7O0FBRW5DLE1BQUlBLE9BQU9xWSxVQUFQLElBQXFCLFNBQXpCLEVBQW9DLE9BQU92TSxRQUFRNFAsS0FBZjs7QUFFcEMsTUFBSTFiLE9BQU9xWSxVQUFQLElBQXFCLFNBQXJCLElBQWtDdk0sUUFBUW1RLFNBQTlDLEVBQXlELE9BQU9uUSxRQUFRb1EsTUFBZjtBQUN6RCxNQUFJbGMsT0FBT3FZLFVBQVAsSUFBcUIsU0FBekIsRUFBb0MsT0FBT3ZNLFFBQVE0UCxLQUFmOztBQUVwQyxNQUFJMWIsT0FBT3FZLFVBQVAsSUFBcUIsU0FBckIsSUFBa0N2TSxRQUFRcVEsU0FBOUMsRUFBeUQsT0FBT3JRLFFBQVFzUSxNQUFmO0FBQ3pELE1BQUlwYyxPQUFPcVksVUFBUCxJQUFxQixTQUFyQixJQUFrQ3ZNLFFBQVFtUSxTQUE5QyxFQUF5RCxPQUFPblEsUUFBUW9RLE1BQWY7QUFDekQsTUFBSWxjLE9BQU9xWSxVQUFQLElBQXFCLFNBQXpCLEVBQW9DLE9BQU92TSxRQUFRNFAsS0FBZjs7QUFFcEMsU0FBTzVQLFFBQVE0UCxLQUFmO0FBRUQ7Ozs7Ozs7O2dDQTVRZWxCLFU7O2dDQXVCQUMsa0I7O2dDQXVCQUMsYzs7Z0NBc0JBQyxlOztnQ0FxQkFDLFM7O2dDQWVBQyxhOztnQ0FpQkFDLFM7O2dDQW9CUE8sYTs7Z0NBNkRBSixZOztnQ0FrQ0FDLGU7O2dDQW1CQXBPLFU7Ozs7Ozs7Ozs7Ozs7Ozs7UUN4UU9xRSxTLEdBQUFBLFM7UUFLQWtMLGEsR0FBQUEsYTtRQXFDQUMsb0IsR0FBQUEsb0I7QUExQ1QsU0FBU25MLFNBQVQsR0FBcUI7O0FBRTFCLFNBQU8sRUFBQ2pSLE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU2tjLGFBQVQsQ0FBdUI1TCxHQUF2QixFQUE0QnhILFFBQTVCLEVBQXNDOztBQUUzQyxNQUFNc1QsT0FBTzlMLElBQUk3RyxLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0EsTUFBTTRTLFNBQVMsRUFBZjs7QUFFQXZULFdBQVNoRSxPQUFULENBQWlCLG1CQUFXO0FBQzFCLFFBQUl3WCxVQUFVLElBQWQ7QUFDQSxRQUFNcFgsY0FBY3lHLFFBQVF6RyxXQUFSLENBQW9Cb0IsUUFBcEIsRUFBcEI7O0FBRUE4VixTQUFLdFgsT0FBTCxDQUFhLGdCQUFRO0FBQ25CLFVBQU00QixRQUFReEIsWUFBWXFYLFdBQVosR0FBMEJDLE9BQTFCLENBQWtDQyxLQUFLRixXQUFMLEVBQWxDLENBQWQ7O0FBRUEsVUFBSTdWLFNBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2Y0VixrQkFBVSxLQUFWO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7QUFDRixLQVBEOztBQVNBLFFBQUlBLE9BQUosRUFBYTtBQUNYRCxhQUFPbFosSUFBUCxDQUFZd0ksT0FBWjtBQUNEO0FBRUYsR0FqQkQ7O0FBbUJBLE1BQU03TCxNQUFPdWMsT0FBT3haLE1BQVIsR0FDUjtBQUNBOUMsVUFBTSx3QkFETjtBQUVBQyxhQUFTcWM7QUFGVCxHQURRLEdBS1I7QUFDQXRjLFVBQU0scUJBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRU0sU0FBU3FjLG9CQUFULENBQThCemMsSUFBOUIsRUFBb0M7O0FBRXpDLFNBQU8sRUFBQ0ssTUFBTSx5QkFBUCxFQUFrQ0MsU0FBU04sSUFBM0MsRUFBUDtBQUVEOzs7Ozs7OztnQ0E5Q2VzUixTOztnQ0FLQWtMLGE7O2dDQXFDQUMsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7UUMxQ0FuTCxTLEdBQUFBLFM7UUFLQXZSLFksR0FBQUEsWTtBQUxULFNBQVN1UixTQUFULEdBQXFCOztBQUUxQixTQUFPLEVBQUNqUixNQUFNLG1CQUFQLEVBQTRCQyxTQUFTLENBQUMsQ0FBdEMsRUFBUDtBQUNEOztBQUVNLFNBQVNQLFlBQVQsQ0FBc0I2USxHQUF0QixFQUEyQjNRLE9BQTNCLEVBQW9DOztBQUV6QyxNQUFNeWMsT0FBTzlMLElBQUk3RyxLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0EsTUFBTTRTLFNBQVMsRUFBZjs7QUFFQWphLFVBQVFDLEdBQVIsQ0FBWTFDLE9BQVo7O0FBRUFBLFVBQVFtRixPQUFSLENBQWdCLGtCQUFVO0FBQ3hCLFFBQUl3WCxVQUFVLElBQWQ7QUFDQSxRQUFNN1gsT0FBTzVFLE9BQU80RSxJQUFQLENBQVk2QixRQUFaLEtBQXlCLEdBQXpCLEdBQStCekcsT0FBT3NPLFNBQVAsQ0FBaUI3SCxRQUFqQixFQUE1Qzs7QUFFQThWLFNBQUt0WCxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsVUFBTTRCLFFBQVFqQyxLQUFLOFgsV0FBTCxHQUFtQkMsT0FBbkIsQ0FBMkJDLEtBQUtGLFdBQUwsRUFBM0IsQ0FBZDs7QUFFQSxVQUFJN1YsU0FBUyxDQUFDLENBQWQsRUFBaUI7QUFDZjRWLGtCQUFVLEtBQVY7QUFDQSxlQUFPLEtBQVA7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBSUEsT0FBSixFQUFhO0FBQ1hELGFBQU9sWixJQUFQLENBQVl0RCxNQUFaO0FBQ0Q7QUFFRixHQWpCRDs7QUFtQkEsTUFBTUMsTUFBT3VjLE9BQU94WixNQUFSLEdBQ1I7QUFDQTlDLFVBQU0sdUJBRE47QUFFQUMsYUFBU3FjO0FBRlQsR0FEUSxHQUtSO0FBQ0F0YyxVQUFNLG9CQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOzs7Ozs7OztnQ0ExQ2VrUixTOztnQ0FLQXZSLFkiLCJmaWxlIjoic2FsZXMtZjhlN2EyMmIzMTViZmQ5ZmQ4OGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnRTZWxlY3RlZChjb2RlLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgY2xpZW50U2VsZWN0ZWQgPSBjbGllbnRzLmZpbmRJbmRleChjbGllbnQgPT4gY2xpZW50LmNvZGUgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGNsaWVudFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ0NMSUVOVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2xpZW50OiBjbGllbnRzW2NsaWVudFNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTZWxlY3RlZChfaWQsIHVzZXJzKSB7XG5cbiAgY29uc3QgdXNlclNlbGVjdGVkID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5faWQgPT0gX2lkKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAodXNlclNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1VTRVJfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VTRVJfU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB1c2Vyc1t1c2VyU2VsZWN0ZWRdXG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXNoQW1vdW50KGFtb3VudCkge1xuXG4gIGNvbnN0IHJlcyA9IChhbW91bnQpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcbiAgICAgIHBheWxvYWQ6IHBhcnNlRmxvYXQoYW1vdW50KVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogMFxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmRBdXRoKG51bWJlcikge1xuXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmREaWdpdHMobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxuICAgICAgcGF5bG9hZDogbnVtYmVyXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkU2FsZShpZCwgc2FsZXMpIHtcbi8vICAgY29uc3QgZmlsdGVyZWRTYWxlcyA9IHNhbGVzLmZpbHRlcihzYWxlID0+IHtcbi8vICAgICByZXR1cm4gc2FsZS5pZCA9PSBpZFxuLy8gICB9KVxuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBpZiAoZmlsdGVyZWRTYWxlcy5sZW5ndGgpIHtcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSA9IG5ldyBEYXRlKGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSlcbi8vICAgICAgIC8vIGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10gPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydjYXJ0J11bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC50aXRsZSA9IGBWZW50YSAjJHtpZH1gXG4vLyAgICAgICBmaWx0ZXJlZFNhbGVzWzBdWydjbGllbnQnXVsnc2FsZUxvYWRlZCddID0gdHJ1ZVxuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXS5faWR9KVxuXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9UX0ZPVU5EX1NBTEUnLCBwYXlsb2FkOiBpZH0pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MpIHtcblxuLy8gICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbi8vICAgY29uc3QgbW92ZW1lbnRzID0ga3dhcmdzLm1vdmVtZW50c1xuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBjb25zdCBkYiA9IG5ldyBQb3VjaERCKGt3YXJncy5kYilcblxuLy8gICAgIGRiLnBvc3QoaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IGl0ZW19KVxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmlkfSlcblxuLy8gICAgICAgaWYgKGl0ZW0ucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJykgeyAvLyBJRiBDUkVESVQgQ1JFQVRFIENSRURJVCBNT1ZFTUVOVFxuLy8gICAgICAgICBjb25zdCBkYjIgPSBuZXcgUG91Y2hEQignZ2VuZXJhbCcpXG4vLyAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCByZXNwb25zZS5pZCwgaXRlbSlcblxuLy8gICAgICAgICBkYjIucG9zdChtb3ZlbWVudCkudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgLy8gSUYgRVJST1IgU0hPVyBNRVNTQUdFXG4vLyAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIG1vdmltaWVudG8gZGUgY3LDqWRpdG8sIHBvciBmYXZvciBhbnVsZSBsYSBmYWN0dXJhIHkgY3JlZWxhXG4vLyAgICAgICAgICAgZGUgbnVldm8gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICB9IGVsc2UgeyAvLyBJRiBOT1QgQ1JFRElUIFNIT1cgUEFORUxTXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgfVxuXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCBzYWxlSWQsIHNhbGUpIHtcblxuLy8gICBjb25zdCBzb3J0ZWRNb3ZlbWVudHMgPSBtb3ZlbWVudHMubGVuZ3RoID4gMSA/IG1vdmVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPCBiLmRvY3VtZW50KSB7XG4vLyAgICAgICByZXR1cm4gMVxuLy8gICAgIH1cbi8vICAgICBpZiAoYS5kb2N1bWVudCA+IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAtMVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gMFxuLy8gICB9KSA6IG1vdmVtZW50c1xuXG4vLyAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZE1vdmVtZW50cy5sZW5ndGggPiAwID8gc29ydGVkTW92ZW1lbnRzWzBdLmRvY3VtZW50ICsgMSA6IDFcblxuLy8gICBjb25zdCBtb3ZlbWVudCA9IHtcbi8vICAgICAnZG9jdW1lbnQnOiBuZXh0SWQsXG4vLyAgICAgJ2RvY1R5cGUnOiAnQ0xJRU5UX01PVkVNRU5UJyxcbi8vICAgICAnY2xpZW50SWQnOiBzYWxlLmNsaWVudC5faWQsXG4vLyAgICAgJ3R5cGUnOiAnQ1JFRElUJyxcbi8vICAgICAnYW1vdW50JzogcGFyc2VGbG9hdChzYWxlLmNhcnQuY2FydFRvdGFsKSxcbi8vICAgICAnZGF0ZSc6IG5ldyBEYXRlKCksXG4vLyAgICAgJ3NhbGVfaWQnOiBzYWxlSWQsXG4vLyAgICAgJ3NhbGVJZCc6IHNhbGUuaWQsXG4vLyAgICAgJ2Rlc2NyaXB0aW9uJzogYFZlbnRhIGEgY3LDqWRpdG8gY29uIGZhY3R1cmEgIyR7c2FsZS5pZH1gXG4vLyAgIH1cblxuLy8gICByZXR1cm4gbW92ZW1lbnRcblxuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvYWN0aW9ucy5qcyIsIi8qZ2xvYmFsIGRlZmluZTpmYWxzZSAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE3IENyYWlnIENhbXBiZWxsXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogTW91c2V0cmFwIGlzIGEgc2ltcGxlIGtleWJvYXJkIHNob3J0Y3V0IGxpYnJhcnkgZm9yIEphdmFzY3JpcHQgd2l0aFxuICogbm8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKlxuICogQHZlcnNpb24gMS42LjFcbiAqIEB1cmwgY3JhaWcuaXMva2lsbGluZy9taWNlXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8vIENoZWNrIGlmIG1vdXNldHJhcCBpcyB1c2VkIGluc2lkZSBicm93c2VyLCBpZiBub3QsIHJldHVyblxuICAgIGlmICghd2luZG93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIG9mIHNwZWNpYWwga2V5Y29kZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBrZXlzXG4gICAgICpcbiAgICAgKiBldmVyeXRoaW5nIGluIHRoaXMgZGljdGlvbmFyeSBjYW5ub3QgdXNlIGtleXByZXNzIGV2ZW50c1xuICAgICAqIHNvIGl0IGhhcyB0byBiZSBoZXJlIHRvIG1hcCB0byB0aGUgY29ycmVjdCBrZXljb2RlcyBmb3JcbiAgICAgKiBrZXl1cC9rZXlkb3duIGV2ZW50c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX01BUCA9IHtcbiAgICAgICAgODogJ2JhY2tzcGFjZScsXG4gICAgICAgIDk6ICd0YWInLFxuICAgICAgICAxMzogJ2VudGVyJyxcbiAgICAgICAgMTY6ICdzaGlmdCcsXG4gICAgICAgIDE3OiAnY3RybCcsXG4gICAgICAgIDE4OiAnYWx0JyxcbiAgICAgICAgMjA6ICdjYXBzbG9jaycsXG4gICAgICAgIDI3OiAnZXNjJyxcbiAgICAgICAgMzI6ICdzcGFjZScsXG4gICAgICAgIDMzOiAncGFnZXVwJyxcbiAgICAgICAgMzQ6ICdwYWdlZG93bicsXG4gICAgICAgIDM1OiAnZW5kJyxcbiAgICAgICAgMzY6ICdob21lJyxcbiAgICAgICAgMzc6ICdsZWZ0JyxcbiAgICAgICAgMzg6ICd1cCcsXG4gICAgICAgIDM5OiAncmlnaHQnLFxuICAgICAgICA0MDogJ2Rvd24nLFxuICAgICAgICA0NTogJ2lucycsXG4gICAgICAgIDQ2OiAnZGVsJyxcbiAgICAgICAgOTE6ICdtZXRhJyxcbiAgICAgICAgOTM6ICdtZXRhJyxcbiAgICAgICAgMjI0OiAnbWV0YSdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBmb3Igc3BlY2lhbCBjaGFyYWN0ZXJzIHNvIHRoZXkgY2FuIHN1cHBvcnRcbiAgICAgKlxuICAgICAqIHRoaXMgZGljdGlvbmFyeSBpcyBvbmx5IHVzZWQgaW5jYXNlIHlvdSB3YW50IHRvIGJpbmQgYVxuICAgICAqIGtleXVwIG9yIGtleWRvd24gZXZlbnQgdG8gb25lIG9mIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgICAgMTA2OiAnKicsXG4gICAgICAgIDEwNzogJysnLFxuICAgICAgICAxMDk6ICctJyxcbiAgICAgICAgMTEwOiAnLicsXG4gICAgICAgIDExMSA6ICcvJyxcbiAgICAgICAgMTg2OiAnOycsXG4gICAgICAgIDE4NzogJz0nLFxuICAgICAgICAxODg6ICcsJyxcbiAgICAgICAgMTg5OiAnLScsXG4gICAgICAgIDE5MDogJy4nLFxuICAgICAgICAxOTE6ICcvJyxcbiAgICAgICAgMTkyOiAnYCcsXG4gICAgICAgIDIxOTogJ1snLFxuICAgICAgICAyMjA6ICdcXFxcJyxcbiAgICAgICAgMjIxOiAnXScsXG4gICAgICAgIDIyMjogJ1xcJydcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIG1hcHBpbmcgb2Yga2V5cyB0aGF0IHJlcXVpcmUgc2hpZnQgb24gYSBVUyBrZXlwYWRcbiAgICAgKiBiYWNrIHRvIHRoZSBub24gc2hpZnQgZXF1aXZlbGVudHNcbiAgICAgKlxuICAgICAqIHRoaXMgaXMgc28geW91IGNhbiB1c2Uga2V5dXAgZXZlbnRzIHdpdGggdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogbm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IHdvcmsgcmVsaWFibHkgb24gVVMga2V5Ym9hcmRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgICAnfic6ICdgJyxcbiAgICAgICAgJyEnOiAnMScsXG4gICAgICAgICdAJzogJzInLFxuICAgICAgICAnIyc6ICczJyxcbiAgICAgICAgJyQnOiAnNCcsXG4gICAgICAgICclJzogJzUnLFxuICAgICAgICAnXic6ICc2JyxcbiAgICAgICAgJyYnOiAnNycsXG4gICAgICAgICcqJzogJzgnLFxuICAgICAgICAnKCc6ICc5JyxcbiAgICAgICAgJyknOiAnMCcsXG4gICAgICAgICdfJzogJy0nLFxuICAgICAgICAnKyc6ICc9JyxcbiAgICAgICAgJzonOiAnOycsXG4gICAgICAgICdcXFwiJzogJ1xcJycsXG4gICAgICAgICc8JzogJywnLFxuICAgICAgICAnPic6ICcuJyxcbiAgICAgICAgJz8nOiAnLycsXG4gICAgICAgICd8JzogJ1xcXFwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBsaXN0IG9mIHNwZWNpYWwgc3RyaW5ncyB5b3UgY2FuIHVzZSB0byBtYXBcbiAgICAgKiB0byBtb2RpZmllciBrZXlzIHdoZW4geW91IHNwZWNpZnkgeW91ciBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TUEVDSUFMX0FMSUFTRVMgPSB7XG4gICAgICAgICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgJ2NvbW1hbmQnOiAnbWV0YScsXG4gICAgICAgICdyZXR1cm4nOiAnZW50ZXInLFxuICAgICAgICAnZXNjYXBlJzogJ2VzYycsXG4gICAgICAgICdwbHVzJzogJysnLFxuICAgICAgICAnbW9kJzogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyAnbWV0YScgOiAnY3RybCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZsaXBwZWQgdmVyc2lvbiBvZiBfTUFQIGZyb20gYWJvdmVcbiAgICAgKiBuZWVkZWQgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIHVzZSBrZXlwcmVzcyBvciBub3Qgd2hlbiBubyBhY3Rpb25cbiAgICAgKiBpcyBzcGVjaWZpZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHZhciBfUkVWRVJTRV9NQVA7XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdGhlIGYga2V5cywgZjEgdG8gZjE5IGFuZCBhZGQgdGhlbSB0byB0aGUgbWFwXG4gICAgICogcHJvZ3JhbWF0aWNhbGx5XG4gICAgICovXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCAyMDsgKytpKSB7XG4gICAgICAgIF9NQVBbMTExICsgaV0gPSAnZicgKyBpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0byBtYXAgbnVtYmVycyBvbiB0aGUgbnVtZXJpYyBrZXlwYWRcbiAgICAgKi9cbiAgICBmb3IgKGkgPSAwOyBpIDw9IDk7ICsraSkge1xuXG4gICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gdXNlIGEgc3RyaW5nIGNhdXNlIG90aGVyd2lzZSBzaW5jZSAwIGlzIGZhbHNleVxuICAgICAgICAvLyBtb3VzZXRyYXAgd2lsbCBuZXZlciBmaXJlIGZvciBudW1wYWQgMCBwcmVzc2VkIGFzIHBhcnQgb2YgYSBrZXlkb3duXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICAvL1xuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvbW91c2V0cmFwL3B1bGwvMjU4XG4gICAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcm9zcyBicm93c2VyIGFkZCBldmVudCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRG9jdW1lbnR9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgdGhlIGV2ZW50IGFuZCByZXR1cm5zIHRoZSBrZXkgY2hhcmFjdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSkge1xuXG4gICAgICAgIC8vIGZvciBrZXlwcmVzcyBldmVudHMgd2Ugc2hvdWxkIHJldHVybiB0aGUgY2hhcmFjdGVyIGFzIGlzXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgbm90IHByZXNzZWQgdGhlbiBpdCBpcyBzYWZlIHRvIGFzc3VtZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSB3YW50IHRoZSBjaGFyYWN0ZXIgdG8gYmUgbG93ZXJjYXNlLiAgdGhpcyBtZWFucyBpZlxuICAgICAgICAgICAgLy8geW91IGFjY2lkZW50YWxseSBoYXZlIGNhcHMgbG9jayBvbiB0aGVuIHlvdXIga2V5IGJpbmRpbmdzXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRpbnVlIHRvIHdvcmtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgb25seSBzaWRlIGVmZmVjdCB0aGF0IG1pZ2h0IG5vdCBiZSBkZXNpcmVkIGlzIGlmIHlvdVxuICAgICAgICAgICAgLy8gYmluZCBzb21ldGhpbmcgbGlrZSAnQScgY2F1c2UgeW91IHdhbnQgdG8gdHJpZ2dlciBhblxuICAgICAgICAgICAgLy8gZXZlbnQgd2hlbiBjYXBpdGFsIEEgaXMgcHJlc3NlZCBjYXBzIGxvY2sgd2lsbCBubyBsb25nZXJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50LiAgc2hpZnQrYSB3aWxsIHRob3VnaC5cbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIG5vbiBrZXlwcmVzcyBldmVudHMgdGhlIHNwZWNpYWwgbWFwcyBhcmUgbmVlZGVkXG4gICAgICAgIGlmIChfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfS0VZQ09ERV9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCBpcyBub3QgaW4gdGhlIHNwZWNpYWwgbWFwXG5cbiAgICAgICAgLy8gd2l0aCBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgdGhlIGNoYXJhY3RlciBzZWVtcyB0byBhbHdheXNcbiAgICAgICAgLy8gY29tZSBpbiBhcyBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyIHdoZXRoZXIgeW91IGFyZSBwcmVzc2luZyBzaGlmdFxuICAgICAgICAvLyBvciBub3QuICB3ZSBzaG91bGQgbWFrZSBzdXJlIGl0IGlzIGFsd2F5cyBsb3dlcmNhc2UgZm9yIGNvbXBhcmlzb25zXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMxXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMxLCBtb2RpZmllcnMyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllcnMxLnNvcnQoKS5qb2luKCcsJykgPT09IG1vZGlmaWVyczIuc29ydCgpLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIGtleSBldmVudCBhbmQgZmlndXJlcyBvdXQgd2hhdCB0aGUgbW9kaWZpZXJzIGFyZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXZlbnRNb2RpZmllcnMoZSkge1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnY3RybCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ21ldGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RpZmllcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgZGVmYXVsdCBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0b3BzIHByb3BvZ2F0aW9uIGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUga2V5Y29kZSBzcGVjaWZpZWQgaXMgYSBtb2RpZmllciBrZXkgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzTW9kaWZpZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NoaWZ0JyB8fCBrZXkgPT0gJ2N0cmwnIHx8IGtleSA9PSAnYWx0JyB8fCBrZXkgPT0gJ21ldGEnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldmVyc2VzIHRoZSBtYXAgbG9va3VwIHNvIHRoYXQgd2UgY2FuIGxvb2sgZm9yIHNwZWNpZmljIGtleXNcbiAgICAgKiB0byBzZWUgd2hhdCBjYW4gYW5kIGNhbid0IHVzZSBrZXlwcmVzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRSZXZlcnNlTWFwKCkge1xuICAgICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX01BUCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcHVsbCBvdXQgdGhlIG51bWVyaWMga2V5cGFkIGZyb20gaGVyZSBjYXVzZSBrZXlwcmVzcyBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBiZSBhYmxlIHRvIGRldGVjdCB0aGUga2V5cyBmcm9tIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfTUFQLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfUkVWRVJTRV9NQVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcGlja3MgdGhlIGJlc3QgYWN0aW9uIGJhc2VkIG9uIHRoZSBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBjaGFyYWN0ZXIgZm9yIGtleVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIHBhc3NlZCBpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKSB7XG5cbiAgICAgICAgLy8gaWYgbm8gYWN0aW9uIHdhcyBwaWNrZWQgaW4gd2Ugc2hvdWxkIHRyeSB0byBwaWNrIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCB3ZSB0aGluayB3b3VsZCB3b3JrIGJlc3QgZm9yIHRoaXMga2V5XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBfZ2V0UmV2ZXJzZU1hcCgpW2tleV0gPyAna2V5ZG93bicgOiAna2V5cHJlc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBkb24ndCB3b3JrIGFzIGV4cGVjdGVkIHdpdGgga2V5cHJlc3MsXG4gICAgICAgIC8vIHN3aXRjaCB0byBrZXlkb3duXG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAna2V5ZG93bic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGZyb20gYSBzdHJpbmcga2V5IGNvbWJpbmF0aW9uIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGxpa2UgXCJjb21tYW5kK3NoaWZ0K2xcIlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbikge1xuICAgICAgICBpZiAoY29tYmluYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmV0dXJuIFsnKyddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgJytwbHVzJyk7XG4gICAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdCgnKycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaW5mbyBmb3IgYSBzcGVjaWZpYyBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24ga2V5IGNvbWJpbmF0aW9uIChcImNvbW1hbmQrc1wiIG9yIFwiYVwiIG9yIFwiKlwiKVxuICAgICAqIEBwYXJhbSAge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbikge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICAvLyB0YWtlIHRoZSBrZXlzIGZyb20gdGhpcyBwYXR0ZXJuIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIGFjdHVhbFxuICAgICAgICAvLyBwYXR0ZXJuIGlzIGFsbCBhYm91dFxuICAgICAgICBrZXlzID0gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGtleSBuYW1lc1xuICAgICAgICAgICAgaWYgKF9TUEVDSUFMX0FMSUFTRVNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TUEVDSUFMX0FMSUFTRVNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBub3QgYSBrZXlwcmVzcyBldmVudCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gYmUgc21hcnQgYWJvdXQgdXNpbmcgc2hpZnQga2V5c1xuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG9ubHkgd29yayBmb3IgVVMga2V5Ym9hcmRzIGhvd2V2ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9ICdrZXlwcmVzcycgJiYgX1NISUZUX01BUFtrZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NISUZUX01BUFtrZXldO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGtleSBpcyBhIG1vZGlmaWVyIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG1vZGlmaWVyc1xuICAgICAgICAgICAgaWYgKF9pc01vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGtleSBjb21iaW5hdGlvbiBpc1xuICAgICAgICAvLyB3ZSB3aWxsIHRyeSB0byBwaWNrIHRoZSBiZXN0IGV2ZW50IGZvciBpdFxuICAgICAgICBhY3Rpb24gPSBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9iZWxvbmdzVG8oZWxlbWVudCwgYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JlbG9uZ3NUbyhlbGVtZW50LnBhcmVudE5vZGUsIGFuY2VzdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIE1vdXNldHJhcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGVsZW1lbnQgdG8gYXR0YWNoIGtleSBldmVudHMgdG9cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiBhbGwgdGhlIGNhbGxiYWNrcyBzZXR1cCB2aWEgTW91c2V0cmFwLmJpbmQoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRpcmVjdCBtYXAgb2Ygc3RyaW5nIGNvbWJpbmF0aW9ucyB0byBjYWxsYmFja3MgdXNlZCBmb3IgdHJpZ2dlcigpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICoga2VlcHMgdHJhY2sgb2Ygd2hhdCBsZXZlbCBlYWNoIHNlcXVlbmNlIGlzIGF0IHNpbmNlIG11bHRpcGxlXG4gICAgICAgICAqIHNlcXVlbmNlcyBjYW4gc3RhcnQgb3V0IHdpdGggdGhlIHNhbWUgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfc2VxdWVuY2VMZXZlbHMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIHNldFRpbWVvdXQgY2FsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVsbHxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3Jlc2V0VGltZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXl1cFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5cHJlc3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXlwcmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhcmUgd2UgY3VycmVudGx5IGluc2lkZSBvZiBhIHNlcXVlbmNlP1xuICAgICAgICAgKiB0eXBlIG9mIGFjdGlvbiAoXCJrZXl1cFwiIG9yIFwia2V5ZG93blwiIG9yIFwia2V5cHJlc3NcIikgb3IgZmFsc2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVzZXRzIGFsbCBzZXF1ZW5jZSBjb3VudGVycyBleGNlcHQgZm9yIHRoZSBvbmVzIHBhc3NlZCBpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZG9Ob3RSZXNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCkge1xuICAgICAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG5cbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIF9zZXF1ZW5jZUxldmVscykge1xuICAgICAgICAgICAgICAgIGlmIChkb05vdFJlc2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VxdWVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVTZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZmluZHMgYWxsIGNhbGxiYWNrcyB0aGF0IG1hdGNoIGJhc2VkIG9uIHRoZSBrZXljb2RlLCBtb2RpZmllcnMsXG4gICAgICAgICAqIGFuZCBhY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudHxPYmplY3R9IGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHRoZSBzZXF1ZW5jZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlLCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2s7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGUudHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyByZWxhdGVkIHRvIHRoaXMga2V5Y29kZVxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXkgaXMgY29taW5nIHVwIG9uIGl0cyBvd24gd2Ugc2hvdWxkIGFsbG93IGl0XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09ICdrZXl1cCcgJiYgX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA9IFtjaGFyYWN0ZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkXG4gICAgICAgICAgICAvLyBhbmQgc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgYSBzZXF1ZW5jZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQsIGJ1dCB0aGlzIGlzIGEgc2VxdWVuY2UgYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgd3JvbmcgbGV2ZWwgdGhlbiBtb3ZlIG9udG8gdGhlIG5leHQgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGFjdGlvbiB3ZSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBtYXRjaCB0aGUgYWN0aW9uIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd2Ugc2hvdWxkIGtlZXAgZ29pbmdcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEga2V5cHJlc3MgZXZlbnQgYW5kIHRoZSBtZXRhIGtleSBhbmQgY29udHJvbCBrZXlcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHByZXNzZWQgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gb25seSBsb29rIGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGNoYXJhY3Rlciwgb3RoZXJ3aXNlIGNoZWNrIHRoZSBtb2RpZmllcnMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gY2hyb21lIHdpbGwgbm90IGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIHNhZmFyaSB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIG1ldGErc2hpZnQgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIGZpcmVmb3ggd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSkgfHwgX21vZGlmaWVyc01hdGNoKG1vZGlmaWVycywgY2FsbGJhY2subW9kaWZpZXJzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4geW91IGJpbmQgYSBjb21iaW5hdGlvbiBvciBzZXF1ZW5jZSBhIHNlY29uZCB0aW1lIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZS4gIGlmIGEgc2VxdWVuY2VOYW1lIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbWJpbmF0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGlzIGNhbGwgaXQgZG9lcyBqdXN0IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRvZG8gbWFrZSBkZWxldGluZyBpdHMgb3duIG1ldGhvZD9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUNvbWJvID0gIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5jb21ibyA9PSBjb21iaW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVDb21ibyB8fCBkZWxldGVTZXF1ZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdHVhbGx5IGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgdGhpcyB3aWxsIHVzZSB0aGUganF1ZXJ5XG4gICAgICAgICAqIGNvbnZlbnRpb24gLSBwcmV2ZW50IGRlZmF1bHQgYW5kIHN0b3AgcHJvcG9nYXRpb24gb24gdGhlIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZXZlbnQgc2hvdWxkIG5vdCBoYXBwZW4gc3RvcCBoZXJlXG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9wQ2FsbGJhY2soZSwgZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LCBjb21ibywgc2VxdWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soZSwgY29tYm8pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICAgICAgICBfc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBjaGFyYWN0ZXIga2V5IGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSk7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBkb05vdFJlc2V0ID0ge307XG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhMZXZlbCBmb3Igc2VxdWVuY2VzIHNvIHdlIGNhbiBvbmx5IGV4ZWN1dGUgdGhlIGxvbmdlc3QgY2FsbGJhY2sgc2VxdWVuY2VcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaV0ubGV2ZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG1hdGNoaW5nIGNhbGxiYWNrcyBmb3IgdGhpcyBrZXkgZXZlbnRcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpcmUgZm9yIGFsbCBzZXF1ZW5jZSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgc3VjaCBhcyBcImcgaVwiIGFuZCBcImcgdFwiIHRoZXkgYm90aCBuZWVkIHRvIGZpcmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZm9yIG1hdGNoaW5nIGcgY2F1c2Ugb3RoZXJ3aXNlIHlvdSBjYW4gb25seSBldmVyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdGhlIGZpcnN0IG9uZVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBmaXJlIGNhbGxiYWNrcyBmb3IgdGhlIG1heExldmVsIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Vic2VxdWVuY2VzIGZyb20gYWxzbyBmaXJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgJ2Egb3B0aW9uIGInIHNob3VsZCBub3QgY2F1c2UgJ29wdGlvbiBiJyB0byBmaXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gdGhvdWdoICdvcHRpb24gYicgaXMgcGFydCBvZiB0aGUgb3RoZXIgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IHNlcXVlbmNlcyB0aGF0IGRvIG5vdCBtYXRjaCBoZXJlIHdpbGwgYmUgZGlzY2FyZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93IGJ5IHRoZSBfcmVzZXRTZXF1ZW5jZXMgY2FsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLmxldmVsICE9IG1heExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSBsaXN0IG9mIHdoaWNoIHNlcXVlbmNlcyB3ZXJlIG1hdGNoZXMgZm9yIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2ldLnNlcV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvLCBjYWxsYmFja3NbaV0uc2VxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2VyZSBubyBzZXF1ZW5jZSBtYXRjaGVzIGJ1dCB3ZSBhcmUgc3RpbGwgaGVyZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgbWVhbnMgdGhpcyBpcyBhIHJlZ3VsYXIgbWF0Y2ggc28gd2Ugc2hvdWxkIGZpcmUgdGhhdFxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBrZXkgeW91IHByZXNzZWQgbWF0Y2hlcyB0aGUgdHlwZSBvZiBzZXF1ZW5jZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBiZWluZyBhIG1vZGlmaWVyIChpZSBcImtleXVwXCIgb3IgXCJrZXlwcmVzc1wiKSB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHNlcXVlbmNlcyB0aGF0IHdlcmUgbm90IG1hdGNoZWQgYnkgdGhpcyBldmVudFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc28sIGZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGUgc2VxdWVuY2UgXCJoIGEgdFwiIGFuZCB5b3VcbiAgICAgICAgICAgIC8vIHR5cGUgXCJoIGUgYSByIHRcIiBpdCBkb2VzIG5vdCBtYXRjaC4gIGluIHRoaXMgY2FzZSB0aGUgXCJlXCIgd2lsbFxuICAgICAgICAgICAgLy8gY2F1c2UgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBhcmUgaWdub3JlZCBiZWNhdXNlIHlvdSBjYW4gaGF2ZSBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0aGF0IGNvbnRhaW5zIG1vZGlmaWVycyBzdWNoIGFzIFwiZW50ZXIgY3RybCtzcGFjZVwiIGFuZCBpbiBtb3N0XG4gICAgICAgICAgICAvLyBjYXNlcyB0aGUgbW9kaWZpZXIga2V5IHdpbGwgYmUgcHJlc3NlZCBiZWZvcmUgdGhlIG5leHQga2V5XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgaGF2ZSBhIHNlcXVlbmNlIHN1Y2ggYXMgXCJjdHJsK2IgYVwiIHRoZW4gcHJlc3NpbmcgdGhlXG4gICAgICAgICAgICAvLyBcImJcIiBrZXkgd2lsbCB0cmlnZ2VyIGEgXCJrZXlwcmVzc1wiIGFuZCBhIFwia2V5ZG93blwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIFwia2V5ZG93blwiIGlzIGV4cGVjdGVkIHdoZW4gdGhlcmUgaXMgYSBtb2RpZmllciwgYnV0IHRoZVxuICAgICAgICAgICAgLy8gXCJrZXlwcmVzc1wiIGVuZHMgdXAgbWF0Y2hpbmcgdGhlIF9uZXh0RXhwZWN0ZWRBY3Rpb24gc2luY2UgaXQgb2NjdXJzXG4gICAgICAgICAgICAvLyBhZnRlciBhbmQgdGhhdCBjYXVzZXMgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gd2UgaWdub3JlIGtleXByZXNzZXMgaW4gYSBzZXF1ZW5jZSB0aGF0IGRpcmVjdGx5IGZvbGxvdyBhIGtleWRvd25cbiAgICAgICAgICAgIC8vIGZvciB0aGUgc2FtZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHZhciBpZ25vcmVUaGlzS2V5cHJlc3MgPSBlLnR5cGUgPT0gJ2tleXByZXNzJyAmJiBfaWdub3JlTmV4dEtleXByZXNzO1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrICYmIGUudHlwZSA9PSAna2V5ZG93bic7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBrZXlkb3duIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2hhbmRsZUtleUV2ZW50KGUpIHtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGUud2hpY2ggZm9yIGtleSBldmVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjg1NjI3L2phdmFzY3JpcHQta2V5Y29kZS12cy1jaGFyY29kZS11dHRlci1jb25mdXNpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBlLndoaWNoID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcblxuICAgICAgICAgICAgLy8gbm8gY2hhcmFjdGVyIGZvdW5kIHRoZW4gc3RvcFxuICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5lZWQgdG8gdXNlID09PSBmb3IgdGhlIGNoYXJhY3RlciBjaGVjayBiZWNhdXNlIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIDBcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXVwJyAmJiBfaWdub3JlTmV4dEtleXVwID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmhhbmRsZUtleShjaGFyYWN0ZXIsIF9ldmVudE1vZGlmaWVycyhlKSwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2FsbGVkIHRvIHNldCBhIDEgc2Vjb25kIHRpbWVvdXQgb24gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiB0aGlzIGlzIHNvIGFmdGVyIGVhY2gga2V5IHByZXNzIGluIHRoZSBzZXF1ZW5jZSB5b3UgaGF2ZSAxIHNlY29uZFxuICAgICAgICAgKiB0byBwcmVzcyB0aGUgbmV4dCBrZXkgYmVmb3JlIHlvdSBoYXZlIHRvIHN0YXJ0IG92ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfcmVzZXRUaW1lcik7XG4gICAgICAgICAgICBfcmVzZXRUaW1lciA9IHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIGtleSBzZXF1ZW5jZSB0byBhbiBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYm8gLSBjb21ibyBzcGVjaWZpZWQgaW4gYmluZCBjYWxsXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGtleXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTZXF1ZW5jZShjb21ibywga2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuXG4gICAgICAgICAgICAvLyBzdGFydCBvZmYgYnkgYWRkaW5nIGEgc2VxdWVuY2UgbGV2ZWwgcmVjb3JkIGZvciB0aGlzIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICAvLyBhbmQgc2V0dGluZyB0aGUgbGV2ZWwgdG8gMFxuICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbGJhY2sgdG8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlIGxldmVsIGZvciB0aGlzIHNlcXVlbmNlIGFuZCByZXNldFxuICAgICAgICAgICAgICogYWxsIG90aGVyIHNlcXVlbmNlcyB0aGF0IHdlcmUgYWN0aXZlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5leHRBY3Rpb25cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2luY3JlYXNlU2VxdWVuY2UobmV4dEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IG5leHRBY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VUaW1lcigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd3JhcHMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayBpbnNpZGUgb2YgYW5vdGhlciBmdW5jdGlvbiBpbiBvcmRlclxuICAgICAgICAgICAgICogdG8gcmVzZXQgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGFzIHNvb24gYXMgdGhpcyBzZXF1ZW5jZSBpcyBkb25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2FsbGJhY2tBbmRSZXNldChlKSB7XG4gICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSB0aGUgbmV4dCBrZXkgdXAgaWYgdGhlIGFjdGlvbiBpcyBrZXkgZG93blxuICAgICAgICAgICAgICAgIC8vIG9yIGtleXByZXNzLiAgdGhpcyBpcyBzbyBpZiB5b3UgZmluaXNoIGEgc2VxdWVuY2UgYW5kXG4gICAgICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUga2V5IHRoZSBmaW5hbCBrZXkgd2lsbCBub3QgdHJpZ2dlciBhIGtleXVwXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2tleXVwJykge1xuICAgICAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZWlyZCByYWNlIGNvbmRpdGlvbiBpZiBhIHNlcXVlbmNlIGVuZHMgd2l0aCB0aGUga2V5XG4gICAgICAgICAgICAgICAgLy8gYW5vdGhlciBzZXF1ZW5jZSBiZWdpbnMgd2l0aFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzIG9uZSBhdCBhIHRpbWUgYW5kIGJpbmQgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBmdW5jdGlvbi4gIGZvciBhbnkga2V5IGxlYWRpbmcgdXAgdG8gdGhlIGZpbmFsIG9uZSBpdCBzaG91bGRcbiAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBzZXF1ZW5jZS4gYWZ0ZXIgdGhlIGZpbmFsLCBpdCBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlmIGFuIGFjdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsIGJpbmQgY2FsbCB0aGVuIHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gYmUgdXNlZCB0aHJvdWdob3V0LiAgb3RoZXJ3aXNlIHdlIHdpbGwgcGFzcyB0aGUgYWN0aW9uIHRoYXQgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IGtleSBpbiB0aGUgc2VxdWVuY2Ugc2hvdWxkIG1hdGNoLiAgdGhpcyBhbGxvd3MgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdG8gbWl4IGFuZCBtYXRjaCBrZXlwcmVzcyBhbmQga2V5ZG93biBldmVudHMgZGVwZW5kaW5nIG9uIHdoaWNoXG4gICAgICAgICAgICAvLyBvbmVzIGFyZSBiZXR0ZXIgc3VpdGVkIHRvIHRoZSBrZXkgcHJvdmlkZWRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsID0gaSArIDEgPT09IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ2FsbGJhY2sgPSBpc0ZpbmFsID8gX2NhbGxiYWNrQW5kUmVzZXQgOiBfaW5jcmVhc2VTZXF1ZW5jZShhY3Rpb24gfHwgX2dldEtleUluZm8oa2V5c1tpICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpXSwgd3JhcHBlZENhbGxiYWNrLCBhY3Rpb24sIGNvbWJvLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIHNpbmdsZSBrZXlib2FyZCBjb21iaW5hdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHNlcXVlbmNlIGlmIHBhcnQgb2Ygc2VxdWVuY2VcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbCAtIHdoYXQgcGFydCBvZiB0aGUgc2VxdWVuY2UgdGhlIGNvbW1hbmQgaXNcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTaW5nbGUoY29tYmluYXRpb24sIGNhbGxiYWNrLCBhY3Rpb24sIHNlcXVlbmNlTmFtZSwgbGV2ZWwpIHtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYSBkaXJlY3QgbWFwcGVkIHJlZmVyZW5jZSBmb3IgdXNlIHdpdGggTW91c2V0cmFwLnRyaWdnZXJcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtjb21iaW5hdGlvbiArICc6JyArIGFjdGlvbl0gPSBjYWxsYmFjaztcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIG11bHRpcGxlIHNwYWNlcyBpbiBhIHJvdyBiZWNvbWUgYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBjb21iaW5hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGluZm87XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgcGF0dGVybiBpcyBhIHNlcXVlbmNlIG9mIGtleXMgdGhlbiBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAgICAgICAgLy8gdG8gcmVwcm9jZXNzIGVhY2ggcGF0dGVybiBvbmUga2V5IGF0IGEgdGltZVxuICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmZvID0gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbml0aWFsaXplIGFycmF5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIC8vIGEgY2FsbGJhY2sgaXMgYWRkZWQgZm9yIHRoaXMga2V5XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldID0gc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSB8fCBbXTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIG1hdGNoIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgX2dldE1hdGNoZXMoaW5mby5rZXksIGluZm8ubW9kaWZpZXJzLCB7dHlwZTogaW5mby5hY3Rpb259LCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGlzIGNhbGwgYmFjayB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgc2VxdWVuY2UgcHV0IGl0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIC8vIGlmIG5vdCBwdXQgaXQgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHdheSB0aGVzZSBhcmUgcHJvY2Vzc2VkIGV4cGVjdHNcbiAgICAgICAgICAgIC8vIHRoZSBzZXF1ZW5jZSBvbmVzIHRvIGNvbWUgZmlyc3RcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV1bc2VxdWVuY2VOYW1lID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogaW5mby5tb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpbmZvLmFjdGlvbixcbiAgICAgICAgICAgICAgICBzZXE6IHNlcXVlbmNlTmFtZSxcbiAgICAgICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBtdWx0aXBsZSBjb21iaW5hdGlvbnMgdG8gdGhlIHNhbWUgY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29tYmluYXRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZSA9IGZ1bmN0aW9uKGNvbWJpbmF0aW9ucywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShjb21iaW5hdGlvbnNbaV0sIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN0YXJ0IVxuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXByZXNzJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlkb3duJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXl1cCcsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiBjYW4gYmUgYSBzaW5nbGUga2V5LCBhIGNvbWJpbmF0aW9uIG9mIGtleXMgc2VwYXJhdGVkIHdpdGggKyxcbiAgICAgKiBhbiBhcnJheSBvZiBrZXlzLCBvciBhIHNlcXVlbmNlIG9mIGtleXMgc2VwYXJhdGVkIGJ5IHNwYWNlc1xuICAgICAqXG4gICAgICogYmUgc3VyZSB0byBsaXN0IHRoZSBtb2RpZmllciBrZXlzIGZpcnN0IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgICAqIGNvcnJlY3Qga2V5IGVuZHMgdXAgZ2V0dGluZyBib3VuZCAodGhlIGxhc3Qga2V5IGluIHRoZSBwYXR0ZXJuKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIC0gJ2tleXByZXNzJywgJ2tleWRvd24nLCBvciAna2V5dXAnXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXlzID0ga2V5cyBpbnN0YW5jZW9mIEFycmF5ID8ga2V5cyA6IFtrZXlzXTtcbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB1bmJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogdGhlIHVuYmluZGluZyBzZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGtleSBjb21ib1xuICAgICAqIHRvIGFuIGVtcHR5IGZ1bmN0aW9uIGFuZCBkZWxldGVzIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiB0aGVcbiAgICAgKiBfZGlyZWN0TWFwIGRpY3QuXG4gICAgICpcbiAgICAgKiBUT0RPOiBhY3R1YWxseSByZW1vdmUgdGhpcyBmcm9tIHRoZSBfY2FsbGJhY2tzIGRpY3Rpb25hcnkgaW5zdGVhZFxuICAgICAqIG9mIGJpbmRpbmcgYW4gZW1wdHkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIHRoZSBrZXljb21ibythY3Rpb24gaGFzIHRvIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXNcbiAgICAgKiBpdCB3YXMgZGVmaW5lZCBpbiB0aGUgYmluZCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLmJpbmQuY2FsbChzZWxmLCBrZXlzLCBmdW5jdGlvbigpIHt9LCBhY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0cmlnZ2VycyBhbiBldmVudCB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSkge1xuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKHt9LCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogcmVzZXRzIHRoZSBsaWJyYXJ5IGJhY2sgdG8gaXRzIGluaXRpYWwgc3RhdGUuICB0aGlzIGlzIHVzZWZ1bFxuICAgICAqIGlmIHlvdSB3YW50IHRvIGNsZWFyIG91dCB0aGUgY3VycmVudCBrZXlib2FyZCBzaG9ydGN1dHMgYW5kIGJpbmRcbiAgICAgKiBuZXcgb25lcyAtIGZvciBleGFtcGxlIGlmIHlvdSBzd2l0Y2ggdG8gYW5vdGhlciBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNob3VsZCB3ZSBzdG9wIHRoaXMgZXZlbnQgYmVmb3JlIGZpcmluZyBvZmYgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnN0b3BDYWxsYmFjayA9IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgICBpZiAoKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgbW91c2V0cmFwICcpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfYmVsb25nc1RvKGVsZW1lbnQsIHNlbGYudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcCBmb3IgaW5wdXQsIHNlbGVjdCwgYW5kIHRleHRhcmVhXG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT0gJ0lOUFVUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdURVhUQVJFQScgfHwgZWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogZXhwb3NlcyBfaGFuZGxlS2V5IHB1YmxpY2x5IHNvIGl0IGNhbiBiZSBvdmVyd3JpdHRlbiBieSBleHRlbnNpb25zXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5oYW5kbGVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGFsbG93IGN1c3RvbSBrZXkgbWFwcGluZ3NcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuYWRkS2V5Y29kZXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgX01BUFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX1JFVkVSU0VfTUFQID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnNcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnMgdG8gd29ya1xuICAgICAqIG5vdyB0aGF0IG1vdXNldHJhcCBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIE1vdXNldHJhcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkb2N1bWVudE1vdXNldHJhcCA9IE1vdXNldHJhcChkb2N1bWVudCk7XG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBkb2N1bWVudE1vdXNldHJhcCkge1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIE1vdXNldHJhcFttZXRob2RdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kXS5hcHBseShkb2N1bWVudE1vdXNldHJhcCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IChtZXRob2QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNb3VzZXRyYXAuaW5pdCgpO1xuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCB0byB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIHdpbmRvdy5Nb3VzZXRyYXAgPSBNb3VzZXRyYXA7XG5cbiAgICAvLyBleHBvc2UgYXMgYSBjb21tb24ganMgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTW91c2V0cmFwO1xuICAgIH1cblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgYXMgYW4gQU1EIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vdXNldHJhcDtcbiAgICAgICAgfSk7XG4gICAgfVxufSkgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCwgdHlwZW9mICB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT05GSUcgREVGQVVMVCBBWElPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdFVCBGVU5DVElPTlMgKFJFVFJJRVZFIEFMTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1EaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICAvLyBJRiBUSEUgRVJST1IgSVMgVU5BVVRPUklaRUQgUEFHRSBXSUxMIFNIT1cgVEhFIE1FU1NBR0VcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRG91YmxlRGlzcGF0Y2goa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxuICBjb25zdCBzdWNjZXNzVHlwZTIgPSBrd2FyZ3Muc3VjY2Vzc1R5cGUyXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlMiwgcGF5bG9hZDogJyd9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJldHVybihrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG5cbiAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICByZXR1cm4gZXJyb3JcbiAgfSlcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNFVCBGVU5DVElPTiAoUkVUUklFVkUgSU5ESVZJRFVBTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgbG9va1VwVmFsdWUgPSBrd2FyZ3MubG9va1VwVmFsdWVcbiAgY29uc3QgbG9va1VwRmllbGQgPSBrd2FyZ3MubG9va1VwRmllbGRcbiAgY29uc3QgaGlzdG9yeSA9IGt3YXJncy5oaXN0b3J5XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0ga3dhcmdzLnJlZGlyZWN0VXJsXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YClcbiAgICBheGlvcy5nZXQoYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIElGIFRIRVJFIElTIE1PUkUgVEhBTiBPTkUgRUxFTUVOVCBGSUxURVJFRFxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0FURU5DScOTTicsIGBFeGlzdGUgbWFzIGRlIHVuICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsICR7a3dhcmdzLmxvb2tVcE5hbWV9OlxuICAgICAgICAgICR7a3dhcmdzLmxvb2tVcFZhbHVlfSwgc2UgdXRpbGl6YXLDoSBlbCBwcmltZXJvIGVuIGxpc3RhLCBwb3IgbG8gcXVlIHB1ZWRlIG5vIHNlciBlbCBtaXNtbyBxdWUgdWQgZGVzZWFcbiAgICAgICAgICBhY3R1YWxpemFyLCBlc3RvIHB1ZWRlIGRlYmVyc2UgYSB1biBlcnJvciwgcG9yIGZhdm9yIHJldmlzZSBsb3NcbiAgICAgICAgICBkYXRvcyBvIGNvbnRhY3RlIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hLmApXG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlMiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaEVycm9yVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgTm8gaGF5ICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsIHZhbG9yIGRlICR7a3dhcmdzLmxvb2tVcE5hbWV9OiAke2t3YXJncy5sb29rVXBWYWx1ZX1gLFxuICAgICAgICAgIGZ1bmN0aW9uKCkgeyBoaXN0b3J5LnB1c2gocmVkaXJlY3RVcmwpIH0pXG4gICAgICB9XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgZWwgdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIH0pXG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgRlVOQ1RJT04gKENSRUFURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuICBjb25zdCBpc1NhbGUgPSBrd2FyZ3MuaXNTYWxlXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgICBpZiAoaXNTYWxlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChrd2FyZ3Muc3VjZXNzTWVzc2FnZSkge1xuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBET1VCTEUgVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbXMoa3dhcmdzLCBrd2FyZ3MyKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgY29uc3QgaXRlbTIgPSBrd2FyZ3MyLml0ZW1cbiAgY29uc3QgdXJsMiA9IGt3YXJnczIudXJsXG4gIGNvbnN0IGxvZ0NvZGUyID0ga3dhcmdzMi5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQyID0ga3dhcmdzMi5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsMiA9IGt3YXJnczIubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24yID0ga3dhcmdzMi5sb2dEZXNjcmlwdGlvblxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC8vIEZJUlNUIFBBVENIIFRIRU5cbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuXG4gICAgICAgIC8vIFNFQ09ORCBQQVRDSFxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgICAgIHVybDogdXJsMixcbiAgICAgICAgICBkYXRhOiBpdGVtMlxuICAgICAgICB9KVxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBUSEVOXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzMi5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzMi5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrd2FyZ3MyLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGt3YXJnczIuaGlzdG9yeS5wdXNoKGt3YXJnczIucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MyLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICAgICAgc2F2ZUxvZyhsb2dDb2RlMiwgbG9nTW9kZWwyLCBpdGVtT2xkMiwgaXRlbTIsIGxvZ0Rlc2NyaXB0aW9uMiwgdXNlcilcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBDQVRDSFxuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MyLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgICAgIH0pXG5cbiAgICAgIC8vIEZJUlNUIFBBVENIIENBVENIXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERFTEVURSBGVU5DVElPTiAoREVMRVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBtb2RlbCA9IGt3YXJncy5tb2RlbE5hbWVcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsICdFbGVtZW50byBlbGltaW5hZG8gc2F0aWZhY3RvcmlhbWVudGUnKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgSHVibyB1biBlcnJvciBhbCBlbGltaW5hciBlbCAke21vZGVsfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9BRCBDT05GSUcgRlVOQ1RJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHbG9iYWxDb25maWcoc2VjdGlvbiwgbmFtZSwgc3VjY2VzcywgZmFpbCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBpZiAobmFtZSkge1xuXG4gICAgICBheGlvcy5nZXQoYC9hcGkvZ2xvYmFsY29uZi8ke3NlY3Rpb259X18ke25hbWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPIFNpbmdsZSBjb25maWcgZmV0Y2hcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxwcmVmc2ApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gVGhlIHByb3BlcnR5IHRvIG1vZGlmeSBpbiByZWR1Y2VyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICA/IHJlc3BvbnNlLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2VjdGlvbiA9PSBzZWN0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHt9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fVxuICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3MsIHBheWxvYWQ6IHtkYXRhOiBkYXRhLCBzZWN0aW9uOiBzZWN0aW9ufX0pXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIExPRyBGVU5DVElPTiAoQ1JFQVRFIExPRylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gc2F2ZUxvZyAoY29kZSwgbW9kZWwsIG9sZE9iamVjdCwgb2JqZWN0LCBkZXNjcmlwdGlvbiwgdXNlcikge1xuXG4gIGNvbnN0IHByZXZPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QpXG4gIGNvbnN0IG5ld09iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9iamVjdClcbiAgY29uc3QgdXNlcjIgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuXG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgY29kZTogY29kZSxcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgcHJldl9vYmplY3Q6IHByZXZPYmplY3QsXG4gICAgbmV3X29iamVjdDogbmV3T2JqZWN0LFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB1c2VyOiB1c2VyMlxuICB9XG5cbiAgYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbG9ncy8nLFxuICAgIGRhdGE6IGl0ZW1cbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICB9XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgTG9nIGRlbCBtb3ZpbWllbnRvLCBFUlJPUjogJHtlcnJ9LmApXG4gICAgfSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBVVggRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTkVYVCBOVU1FUklDIENPREVcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TnVtZXJpY0NvZGUoZWxlbWVudHMsIGZpZWxkKSB7XG5cbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuXG4gICAgbGV0IGtleXMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50W2ZpZWxkXSlcblxuICAgIGtleXMgPSBrZXlzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgIGNvbnN0IG1heCA9IGtleXMucG9wKClcbiAgICBjb25zdCBuZXh0ID0gcGFyc2VJbnQobWF4KSArIDFcbiAgICByZXR1cm4gbmV4dC50b1N0cmluZygpXG5cbiAgfVxuXG4gIHJldHVybiAxXG5cbn1cblxuLy8gTkVYVCBQUkVWSU9VUyBJVEVNU1xuZXhwb3J0IGZ1bmN0aW9uIHNldE5leHRQcmV2SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBjb2RlID0ga3dhcmdzLmNvZGVcbiAgY29uc3QgaXRlbXMgPSBrd2FyZ3MuaXRlbXNcbiAgY29uc3QgY29kZUZpZWxkID0ga3dhcmdzLmNvZGVGaWVsZFxuICBsZXQgcHJldmlvdXMgPSAwXG4gIGxldCBuZXh0ID0gMFxuXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtjb2RlRmllbGRdIC0gYltjb2RlRmllbGRdXG4gIH0pXG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbVtjb2RlRmllbGRdID09IGNvZGUpIHtcbiAgICAgIG5leHQgPSBpbmRleCArIDFcbiAgICAgIHByZXZpb3VzID0gaW5kZXggLSAxXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuZXh0Q29kZSA9IGl0ZW1zW25leHRdID8gaXRlbXNbbmV4dF1bY29kZUZpZWxkXSA6IGl0ZW1zWzBdW2NvZGVGaWVsZF1cbiAgY29uc3QgcHJldkNvZGUgPSBpdGVtc1twcmV2aW91c10gPyBpdGVtc1twcmV2aW91c11bY29kZUZpZWxkXSA6IGl0ZW1zLnBvcCgpW2NvZGVGaWVsZF1cblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDoge25leHQ6IG5leHRDb2RlLCBwcmV2aW91czogcHJldkNvZGV9fSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvdXRpbHMvYXBpLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vdXRpbHMvZm9ybWF0TW9uZXkuanMnXG5cbi8vIFJFRFVYIFBST1ZJREVSXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIENPTVBPTkVOVFNcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluLmpzeCdcblxuLy8gU1RPUkVcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJ1xuXG53aW5kb3cuYWxlcnRpZnkgPSBhbGVydGlmeVxuZm9ybWF0TW9uZXkoKVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxNYWluIC8+XG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvYXBwLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2ZlY3RoUHJvZmlsZX0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuLy8gQ09NUE9ORU5UU1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xuaW1wb3J0IEZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4J1xuXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaGluZzogc3RvcmUuZmV0Y2hpbmcuZmV0Y2hpbmcsXG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZWN0aFByb2ZpbGUoKSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGZldGNoaW5nID0gdGhpcy5wcm9wcy5mZXRjaGluZyA/IDxGZXRjaGluZyAvPiA6ICcnXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnbWFpbkNvbnRhaW5lcicgOiAnbWFpbkNvbnRhaW5lciBzaWRlSGlkZGVuJ1xuICAgIGNvbnN0IGNvbnRlbnQgPSA8Um91dGVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgIDxkaXYgaWQ9J21haW5Db250YWluZXInIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250YWluZXItY29udGVudCc+XG4gICAgICAgICAgICB7cm91dGVzfVxuICAgICAgICAgICAge2ZldGNoaW5nfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9tYWluL21haW4uanN4IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhQcm9maWxlKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL3Byb2ZpbGUvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHt1c2VyOiByZXNwb25zZS5kYXRhWzBdLmZpZWxkcywgcHJvZmlsZTogcmVzcG9uc2UuZGF0YVsxXS5maWVsZHN9fSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoSXNBZG1pbkxvY2tlZCgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnByZWZzL2FkbWluX19pc19hZG1pbl9sb2NrZWQvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfRlVMRklMTEVEJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS52YWx1ZX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL21haW4vYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbi8vIFJvdXRlcyBDb21wb25lbnRzXG5cbmltcG9ydCBIb21lIGZyb20gJy4uL2hvbWUvaG9tZS5qc3gnXG5pbXBvcnQgU2FsZSBmcm9tICcuLi9zYWxlL21haW4uanN4J1xuXG5jb25zdCByb3V0ZXMgPSA8ZGl2IGNsYXNzTmFtZT0naGVpZ2gxMDAnPlxuXG4gIDxSb3V0ZSBleGFjdCBwYXRoPScvc2FsZXMnIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgPFJvdXRlIHBhdGg9Jy9zYWxlcy9zYWxlJyBjb21wb25lbnQ9e1NhbGV9IC8+XG5cbjwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL21haW4vcm91dGVzLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgY2hlY2tVc2VyUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGVja1Blcm1pc3Npb25zJ1xuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSE9NRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxuXG4gIH1cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nTWFpbiBoZWlnaDEwMCc+XG4gICAgICBIT01FXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9ob21lL2hvbWUuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgY2hlY2tVc2VyUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGVja1Blcm1pc3Npb25zJ1xuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuanN4J1xuaW1wb3J0IEFzaWRlIGZyb20gJy4vYXNpZGUvYXNpZGUuanN4J1xuaW1wb3J0IFNlYXJjaFByb2R1Y3QgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4J1xuaW1wb3J0IFNlYXJjaENsaWVudCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCdcbmltcG9ydCBQYXlQYW5lbCBmcm9tICcuLi9nZW5lcmFsL3BheS9wYXlQYW5lbC5qc3gnXG5pbXBvcnQgSW52b2ljZVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0FMRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxuXG4gIH1cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2FsZSc+XG4gICAgICA8Q29udGVudCAvPlxuICAgICAgPEFzaWRlIC8+XG5cbiAgICAgIDxTZWFyY2hQcm9kdWN0IC8+XG4gICAgICA8U2VhcmNoQ2xpZW50IC8+XG4gICAgICA8UGF5UGFuZWwgLz5cbiAgICAgIDxJbnZvaWNlUGFuZWwgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9tYWluLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4J1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jYXJ0L2NhcnQuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50IGZ1bGxXaWR0aCcgOiAnc2FsZS1jb250ZW50J1xuICAgIGNvbnN0IGNhcnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC1jYXJ0JyA6ICdzYWxlLWNvbnRlbnQtY2FydCBmdWxsSGVpZ2h0J1xuICAgIGNvbnN0IHRvdGFsQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtdG90YWwnIDogJ3NhbGUtY29udGVudC10b3RhbCBjb2xsYXBzZWQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1jb250ZW50LXByb2R1Y3QnID5cbiAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcnRDbGFzc30gPlxuICAgICAgICA8Q2FydCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG90YWxDbGFzc30gPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLWxlZnQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBpbnB1dFZhbDogc3RvcmUucHJvZHVjdHMuaW5wdXRWYWwsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHRoaXMuY29kZUlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUUycsIHBheWxvYWQ6ICcnfSlcblxuICAgIGNvbnN0IHByb2R1Y3RLd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3Byb2R1Y3RzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJyxcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJ1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0SXRlbURpc3BhdGNoKHByb2R1Y3RLd2FyZ3MpKVxuXG4gIH1cblxuICBzZWFyY2hQcm9kdWN0Q2xpY2soKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnUFJPRFVDVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGlmIChldi50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZS5zcGxpdCgnKicpWzBdIC8vIFNwbGl0IHZhbCBbMF0gaXMgY29kZSBbMV0gaXMgcXR5XG4gICAgICAgIGxldCBxdHkgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVsxXVxuICAgICAgICBxdHkgPSAoaXNOYU4ocXR5KSlcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IHBhcnNlRmxvYXQocXR5KSAvLyBpZiBubyBxdHkgc2V0cyB0byAxXG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxuICAgICAgICAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcbiAgICAgICAgLy8gICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IDB9KVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgcHJvZHVjdFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGI+UHJvZHVjdG86PC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZSc+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1iYXJjb2RlJyAvPlxuICAgICAgICAgIDxpbnB1dCBpZD0ncHJvZHVjdENvZGVJbnB1dEZpZWxkJyBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dFZhbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29kZUlucHV0ID0gaW5wdXRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBlbCBDw7NkaWdvIGRlbCBQcm9kdWN0bydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZS1pbnB1dCBtb3VzZXRyYXAgZm9ybS1jb250cm9sIGlucHV0LWxnJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLXNlYXJjaCc+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4IiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDYwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FydEl0ZW1zIGZyb20gJy4vY2FydEl0ZW1zLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXMsXG4gICAgLy8gcHJvZHVjdFNlYXJjaHBhbmVsVmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtiJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXG5cbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2MnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcblxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHVzZUxvdGUgPSB0aGlzLnByb3BzLmRlZmF1bHRDb25maWdcbiAgICAvLyAgID8gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLmNhcnRJdGVtVXNlTG90ZVxuICAgIC8vICAgOiBmYWxzZVxuXG4gICAgLy8gY29uc3QgbG90ZUZpZWxkID0gdXNlTG90ZVxuICAgIC8vICAgPyA8dGg+TG90ZTwvdGg+XG4gICAgLy8gICA6IDx0aCAvPlxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjYXJ0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1jb2RlJz5cbiAgICAgICAgICA8aDU+Q8OzZDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoNT5BcnQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXF0eSc+XG4gICAgICAgICAgPGg1PkNhbnQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXVuaXRQcmljZSc+XG4gICAgICAgICAgPGg1PlAgVW5pdDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGlzY291bnQnPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1pdmEnPlxuICAgICAgICAgIDxoNT5JVjwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdG90YWwnPlxuICAgICAgICAgIDxoNT5Ub3RhbCBJVkk8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2FydEl0ZW1zIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VwZGF0ZVRvdGFscywgcmVtb3ZlRnJvbUNhcnR9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7dXBkYXRlSXRlbURpc2NvdW50LCB1cGRhdGVJdGVtTG90ZSwgdXBkYXRlUXR5LCBhZGRTdWJPbmUsIHVwZGF0ZVF0eUNvZGV9IGZyb20gJy4uL3Byb2R1Y3QvYWN0aW9ucydcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZCxcbiAgICBjYXJ0SXRlbUFjdGl2ZTogc3RvcmUuY2FydC5jYXJ0SXRlbUFjdGl2ZVxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBPbiBjb21wb25lbnQgdXBkYXRlIChUaGUgY2FydCBoYXMgYmVlbiBtb2RpZmllZCkgY2FsbHMgdGhlIHVwZGF0ZSB0b3RhbHMgbWV0aG9kIGluIGFjdGlvbnMgZmlsZS5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVUb3RhbHModGhpcy5wcm9wcy5pbkNhcnQpKVxuXG4gICAgLy8gQXV0byBTY3JvbGwgVG8gZW5kIG9mIGNvbnRhaW5lclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1ib2R5JylcbiAgICBlbGVtLnNjcm9sbFRvcCA9IGVsZW0uc2Nyb2xsSGVpZ2h0XG5cbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgLy8gICBpZiAodGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSAhPSBuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmUpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke25leHRQcm9wcy5jYXJ0SXRlbUFjdGl2ZX1gKSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK3BsdXMnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdWJPbmUoX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIHRydWUsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrZicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlfWApLmZvY3VzKClcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCstJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdWJPbmUoX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIGZhbHNlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICBfdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kKyonLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBfX3RoaXMgPSBfdGhpc1xuICAgICAgYWxlcnRpZnkucHJvbXB0KGBOdWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkb2AsICdJbmdyZXNlIGxhIG51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvJywgJydcbiAgICAgICAgLCBmdW5jdGlvbihldnQsIHZhbHVlKSB7XG4gICAgICAgICAgX190aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVF0eUNvZGUoX190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB2YWx1ZSwgX190aGlzLnByb3BzLmluQ2FydCxcbiAgICAgICAgICAgIF9fdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgX190aGlzLnByb3BzLmNsaWVudCkpXG4gICAgICAgIH1cbiAgICAgICAgLCBmdW5jdGlvbigpIHt9KVxuICAgICAgICAuc2V0KCdsYWJlbHMnLCB7b2s6ICdPaycsIGNhbmNlbDogJ0NhbmNlbGFyJ30pXG4gICAgfSlcbiAgfVxuXG4gIGRpc2NvdW50SW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgICB9XG5cbiAgfVxuXG4gIGRpc2NvdW50SW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1EaXNjb3VudCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgZGlzY291bnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgfVxuXG4gIHF0eUlucHV0Q2hhbmdlKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBxdHkgPSBwYXJzZUZsb2F0KChldi50YXJnZXQudmFsdWUpKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5KGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5pbkNhcnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICB9XG5cbiAgcXR5SW5wdXRLZXlQcmVzcyhldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcmVzc3NzcycsIGV2LmtleSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgbG90ZUlucHV0S2V5UHJlc3MoY29kZSwgZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgbG90ZSA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtTG90ZSh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgbG90ZSkpXG5cbiAgICB9XG5cbiAgfVxuXG4gIGxvdGVJbnB1dE9uQmx1cihjb2RlLCBldikge1xuXG4gICAgY29uc3QgbG90ZSA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtTG90ZSh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgbG90ZSkpXG5cbiAgfVxuXG4gIHNldENhcnRJdGVtQWN0aXZlKGNvZGUsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcblxuICB9XG5cbiAgcmVtb3ZlSXRlbShjb2RlLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVGcm9tQ2FydCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSkpXG5cbiAgfVxuXG4gIGZpZWxkRm9jdXMoZXYpIHtcbiAgICBldi50YXJnZXQuc2VsZWN0KClcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgaXRlbXMgaW4gY2FydCB1c2luZyB0YWJsZSByb3dzXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcbiAgICBjb25zdCBpdGVtczIgPSBjYXJ0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICBjb25zdCBhY3RpdmVDbGFzcyA9IChpdGVtLnByb2R1Y3QuY29kZSA9PSB0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUpXG4gICAgICAgID8gJ2NhcnQtYWN0aXZlUm93IGNhcnQtYm9keS1pdGVtJ1xuICAgICAgICA6ICdjYXJ0LWJvZHktaXRlbSdcblxuICAgICAgY29uc3QgcmVtb3ZlSWNvbkNsYXNzID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/ICdyZW1vdmVJdGVtSWNvbiBkaXNhYmxlZCcgOiAncmVtb3ZlSXRlbUljb24nXG5cbiAgICAgIGNvbnN0IHRheGVzMSA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgICA/IGl0ZW0ucHJvZHVjdC50YXhlc1xuICAgICAgICA6IDBcblxuICAgICAgY29uc3QgcXR5RmllbGQgPSA8aW5wdXRcbiAgICAgICAgaWQ9e2BxdHkke2l0ZW0ucHJvZHVjdC5jb2RlfWB9XG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5xdHlJbnB1dENoYW5nZS5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICBvbktleVVwPXt0aGlzLnF0eUlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgdmFsdWU9e2l0ZW0ucXR5fVxuICAgICAgLz5cblxuICAgICAgY29uc3QgZGlzY291bnRGaWVsZCA9IHRoaXMucHJvcHMuY2xpZW50LnNhbGVMb2FkZWRcbiAgICAgICAgPyA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpc2NvdW50SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRpc2NvdW50SW5wdXRPbkJsdXIuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYXJzZUZsb2F0KGl0ZW0uZGlzY291bnQpfVxuICAgICAgICAvPlxuICAgICAgICA6IDxpbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGlzY291bnRJbnB1dE9uQmx1ci5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgLz5cblxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cbiAgICAgICAga2V5PXtpdGVtLnV1aWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0Q2FydEl0ZW1BY3RpdmUuYmluZCh0aGlzLCBpdGVtLnByb2R1Y3QuY29kZSl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1jb2RlJz5cbiAgICAgICAgICA8aDU+Q8OzZGlnbzwvaDU+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1xdHknPlxuICAgICAgICAgIDxoNT5DYW50aWRhZDwvaDU+XG4gICAgICAgICAge3F0eUZpZWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXVuaXRQcmljZSc+XG4gICAgICAgICAgPGg1PlAgVW5pdDwvaDU+XG4gICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWRpc2NvdW50Jz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgICAge2Rpc2NvdW50RmllbGR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0taXZhJz5cbiAgICAgICAgICA8aDU+SVZBPC9oNT5cbiAgICAgICAgICB7dGF4ZXMxfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXRvdGFsJz5cbiAgICAgICAgICA8aDU+VG90YWw8L2g1PlxuICAgICAgICAgICAg4oKhIHtpdGVtLnRvdGFsV2l0aEl2LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZW1vdmVJY29uQ2xhc3N9PlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMtY2lyY2xlJyAvPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIH0pXG5cbiAgICAvLyByZXR1cm4gPHRib2R5IGNsYXNzTmFtZT0ndGFibGUtYm9keSc+XG4gICAgLy8gICB7aXRlbXN9XG4gICAgLy8gPC90Ym9keT5cblxuICAgIHJldHVybiA8ZGl2IGlkPSdjYXJ0LWJvZHknIGNsYXNzTmFtZT0nY2FydC1ib2R5Jz5cbiAgICAgIHtpdGVtczJ9XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydEl0ZW1zLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdG90YWxzIHRoZSBjYXJ0IHN0b3JlIGl0ZW0sIGdlbmVyYXRlcyBuZXcgdmFsdWVzIGFjY29yZGluZyBjYXJ0IGl0ZW0gb2JqZWN0cywgdGhlbiBwdXNoIHRoZSB0byBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFscyhpbkNhcnQpIHtcblxuICBsZXQgc3VidG90YWwgPSAwXG4gIGxldCBzdWJUb3RhbE5vRGlzY291bnQgPSAwXG4gIGxldCB0YXhlcyA9IDBcbiAgbGV0IHRvdGFsID0gMFxuICBsZXQgZGlzY291bnRUb3RhbCA9IDBcblxuICAvLyBmb3IgRWFjaCBlbGVtZW50IGFkZHMgdGhlIHZhbHVlcyB0byBnZXQgdG90YWxzXG4gIGluQ2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG5cbiAgICBzdWJUb3RhbE5vRGlzY291bnQgPSBzdWJUb3RhbE5vRGlzY291bnQgKyBpdGVtLnN1YlRvdGFsTm9EaXNjb3VudFxuXG4gICAgc3VidG90YWwgPSBzdWJ0b3RhbCArIGl0ZW0uc3VidG90YWxcblxuICAgIGNvbnN0IHRheGVzQ2FsYyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlcyAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjMiA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzMilcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICB0YXhlcyA9IHRheGVzICsgdGF4ZXNDYWxjICsgdGF4ZXNDYWxjMlxuXG4gICAgZGlzY291bnRUb3RhbCA9IGRpc2NvdW50VG90YWwgKyBpdGVtLmRpc2NvdW50Q3VycmVuY3kgLy8gdGhpcyBpcyB0aGUgdmFsdWUgaW4gY3VycmVuY3lcblxuICB9KVxuICAvLyBUT0RPIENvbmZpZyBmb3Igcm91bmQgb3Igbm90XG4gIC8vIHRvdGFsID0gTWF0aC5yb3VuZChzdWJ0b3RhbCArIHRheGVzKVxuICB0b3RhbCA9IHN1YnRvdGFsICsgdGF4ZXNcbiAgLy8gcmV0dXJzIGEgZGlzcGF0Y2ggd2l0aCBhIHBheWxvYWQgb2YgdGhlIG9idGFpbmVkIHZhbHVlc1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9UT1RBTFMnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHN1YnRvdGFsOiBzdWJ0b3RhbCxcbiAgICAgIHRheGVzOiB0YXhlcyxcbiAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgIGRpc2NvdW50VG90YWw6IGRpc2NvdW50VG90YWwsXG4gICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudFxuICAgIH1cbiAgfVxufVxuXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGl0ZW1zSW5DYXJ0LCBjb2RlKSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnUkVNT1ZFX0ZST01fQ0FSVCcsXG4gICAgICBwYXlsb2FkOiBpbmRleEluQ2FydFxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4uLy4uL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3gnXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuLi9idXR0b25zL2J1dHRvbnMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzaWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICB0b2dnbGVXaWR0aCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBhc2lkZUNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZSBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUnXG4gICAgY29uc3QgYXNpZGVDb250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUtY29udGVudCBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUtY29udGVudCdcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FzaWRlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FzaWRlQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLWFycm93LWNvbnRhaW5lcicgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8Q2xpZW50IC8+XG4gICAgICAgIDxUb3RhbHMgLz5cbiAgICAgICAgPEJ1dHRvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b25zIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtdG90YWwnID5cbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NsaWVudFNlbGVjdGVkLCBzZWFyY2hDbGllbnQsIHVzZXJTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaSdcbi8vIGltcG9ydCB7Z2V0Q2xpZW50RGVidH0gZnJvbSAnLi4vLi4vLi4vLi4vYWRtaW4vdXRpbHMvcmVjZWl2YWJsZSdcbi8vIGltcG9ydCB7cmVjYWxjQ2FydH0gZnJvbSAnLi4vLi4vbWFpbi9wcm9kdWN0L2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50cyxcbiAgICBjbGllbnRTZWxlY3RlZDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcnM6IHN0b3JlLmNsaWVudHMudXNlcnMsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzLFxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmNsaWVudFNlbGVjdGVkICE9IHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpIHtcbiAgICAgIC8vIHNldCB0aGUgZGlzY291bnQ6IGRlZmF1bHQgdmFsdWUgb3IgMFxuXG4gICAgICBpZiAoIW5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5zYWxlTG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KG5leHRQcm9wcy5jYXJ0LCBkaXNjb3VudCwgbmV4dFByb3BzLmNsaWVudCkpXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuXG4gICAgICAgIC8vIFNFVFMgVkFMVUUgT0YgREVGQVVMVCBESVNDT1VOVCBUTyBGSUVMRCBPUiAwXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBkaXNjb3VudFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgZGVidCA9IGdldENsaWVudERlYnQobmV4dFByb3BzLmNsaWVudC5faWQsIG5leHRQcm9wcy5tb3ZlbWVudHMpXG4gICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0NMSUVOVF9ERUJUJywgcGF5bG9hZDogZGVidH0pXG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfQ0xJRU5UUycsIHBheWxvYWQ6ICcnfSlcblxuICAgIGNvbnN0IGNsaWVudEt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvY2xpZW50cycsXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJyxcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRJdGVtRGlzcGF0Y2goY2xpZW50S3dhcmdzKSlcblxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUgLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xpZW50U2VsZWN0ZWQoY29kZSwgdGhpcy5wcm9wcy5jbGllbnRzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgfVxuXG4gIH1cblxuICB1c2VyU2VsZWN0KGV2KSB7XG4gICAgY29uc3QgX2lkID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1c2VyU2VsZWN0ZWQoX2lkLCB0aGlzLnByb3BzLnVzZXJzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gIH1cblxuICB1c2VyVW5TZWxlY3QoZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVNFUl9DTEVBUicsIHBheWxvYWQ6ICcnfSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gIH1cblxuICBzZWFyY2hDbGllbnRDbGljaygpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoQ2xpZW50KCkpXG5cbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gU0VMRUNUMiBEQVRBXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGNvbnN0IGNsaWVudFRvU2hvdyA9ICh0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkKVxuICAgICAgPyBgJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLm5hbWV9ICR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5sYXN0X25hbWV9YFxuICAgICAgOiAnQ2xpZW50ZSBDb250YWRvJ1xuXG4gICAgLy8gY29uc3QgY3JlZGl0SWNvbiA9ICh0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkICYmIHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQuaGFzX2NyZWRpdClcbiAgICAvLyAgID8gJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcbiAgICAvLyAgIDogJ2ZhIGZhLXRpbWVzLWNpcmNsZSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1pbWcnPlxuICAgICAgICA8aW1nIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3JjPScvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxuICAgICAgICAgIDxoMz5DbGllbnRlIDo8L2gzPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPk5vbWJyZSA6PC9oMz5cbiAgICAgICAgICA8c3Bhbj57Y2xpZW50VG9TaG93fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc2NvdW50VmFsOiAwXG4gICAgfVxuICB9XG5cbiAgc2hvd0ludm9pY2VQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXG4gICAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZGlzY291bnRWYWwgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA6IDBcbiAgICB9XG5cbiAgfVxuXG4gIGlucHV0T25CbHVyKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcblxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgIH1cblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3RhbHMnPlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAncGFkZGluZ1RvcCc6ICcwJyxcbiAgICAgICAgJ21hcmdpblRvcCc6ICcwJ1xuICAgICAgfX0gY2xhc3NOYW1lPSdiZy13aGl0ZSByaWdodC1pdGVtJz5cbiAgICAgICAgey8qIDxzcGFuPlxuICAgICAgICAgIDxiPlRvdGFsZXM6PC9iPlxuICAgICAgICA8L3NwYW4+PGJyIC8+ICovfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0b3RhbHMtdGFibGUnPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlN1Yi1Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzM3JSdcbiAgICAgICAgICAgICAgfX0+RGVzY3VlbnRvICU8L3RoPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPSdkaXNjb3VudEZpZWxkJ1xuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5pbnB1dE9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzM3cHgnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDAgMCAxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnRTaXplJzogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzYWxlX2dsb2JhbF9kaXNjb3VudF9pbnB1dCBmb3JtLWNvbnRyb2wnIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EZXNjdWVudG86PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5JVjo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgey8qIDx0aCBvbkNsaWNrPXt0aGlzLnNob3dJbnZvaWNlUGFuZWwuYmluZCh0aGlzKX0+VG90YWw6PC90aD4gKi99XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgLy8gcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNob3dQYXlQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd0lub2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd1NhbGVQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19TQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93UHJlc2FsZXNQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QUkVTQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBuZXdTYWxlKCkge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9wb3MnXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ05FV19TQUxFJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgID8gPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0lub2ljZVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgICBGYWN0dXJhXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5ld1NhbGUuYmluZCh0aGlzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICAgIE51ZXZhIFZlbnRhXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgOiAnJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgYnV0dG9ucyc+XG5cbiAgICAgIHsvKiA8c3Bhbj5cbiAgICAgICAgPGI+UGFnbzo8YnIgLz48L2I+XG4gICAgICA8L3NwYW4+ICovfVxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQYXlQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIENvYnJhclxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93U2FsZVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgVmVudGFzIGRlbCBkw61hXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXNhbGVzUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBQcmUtVmVudGFzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtidXR0b25zfVxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZX1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIFByb2R1Y3RvPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7c2VhcmNoUHJvZHVjdH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXG4gICAgc2VhcmNoVmFsdWU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnNlYXJjaFZhbHVlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hWYWw6ICcnXG4gICAgfVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbigpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gIH1cblxuICBzZWFyY2hQcm9kdWN0QWN0aW9uKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoUHJvZHVjdCh0aGlzLnByb3BzLnNlYXJjaFZhbHVlLCB0aGlzLnByb3BzLnByb2R1Y3RzKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Byb2R1Y3Qtc2VhcmNoLWlucHV0Jz5Cw7pzcXVlZGEgcG9yIERlc2NyaXBjacOzbjo8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNyBjb2wtc20tOCc+XG4gICAgICAgICAgICA8aW5wdXQgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXG4gICAgICAgICAgICB9fSBpZD0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaFByb2R1Y3RBY3Rpb24uYmluZCh0aGlzKX0gdHlwZT0nYnV0dG9uJyBpZD0ncHJvZHVjdC1zZWFyY2gtYnRuJyBzdHlsZT17e1xuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgICAnd2lkdGgnOiAnNDhweCdcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIGZvcm0tY29udHJvbCBtYXJnaW5CdG5BZGQyJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkVGFibGUsIGhpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5wcm9kdWN0c01hdGNoZWQsIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNlbGVjdFByb2R1Y3QoY29kZSwgZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdFByb2R1Y3QuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnNlbGxwcmljZX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICA8dGFibGUgaWQ9J3Byb2R1Y3RlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXBjacOzbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByZWNpbzwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdwcm9kdWN0LXNlYXJjaC10YWJsZS1ib2R5Jz5cbiAgICAgICAgICAgICAge3Byb2R1Y3RzfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoQ2xpZW50cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGFuZWxDbGljayhldikge1xuXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICB9XG5cbiAgfVxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxuICAgICAgPyAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLWNsaWVudCBmcm9tLXJpZ2h0IGlzLXZpc2libGUnXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Zpc2libGVPck5vdH0gb25DbGljaz17dGhpcy5wYW5lbENsaWNrLmJpbmQodGhpcyl9PlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgPGgxPkLDunNxdWVkYSBkZSBDbGllbnRlPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZWFyY2hDbGllbnR9IGZyb20gJy4vYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2VhcmNoQ2xpZW50QWN0aW9uKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWwgPSBldi50YXJnZXQudmFsdWVcbiAgICB9XG5cbiAgfVxuXG4gIHNlYXJjaENsaWVudEFjdGlvbigpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnN0YXRlLnNlYXJjaFZhbFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoQ2xpZW50KHZhbCwgdGhpcy5wcm9wcy5jbGllbnRzKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NsaWVudC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgTm9tYnJlOjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBvbktleVByZXNzPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICAgIH19IGlkPSdjbGllbnQtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0yJz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hDbGllbnRBY3Rpb24uYmluZCh0aGlzKX0gdHlwZT0nYnV0dG9uJyBpZD0nY2xpZW50LXNlYXJjaC1idG4nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NsaWVudFNlbGVjdGVkfSBmcm9tICcuLi8uLi9jbGllbnRzL2FjdGlvbnMuanMnXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hDbGllbnRzLmNsaWVudHNNYXRjaGVkLCBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzZWxlY3RDbGllbnQoY29kZSwgZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsaWVudFNlbGVjdGVkKGNvZGUsIHRoaXMucHJvcHMuY2xpZW50cykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IGhhc0NyZWRpdCA9IChpdGVtLmhhc19jcmVkaXQpXG4gICAgICAgID8gJ1NJJ1xuICAgICAgICA6ICdOTydcblxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdENsaWVudC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmNvZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7YCR7aXRlbS5uYW1lfSAke2l0ZW0ubGFzdF9uYW1lfWB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aGFzQ3JlZGl0fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgMFxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgIH0pXG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgIDx0YWJsZSBpZD0nY2xpZW50ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5DcsOpZGl0bzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlNhbGRvPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J2NsaWVudC1zZWFyY2gtdGFibGUtYm9keSc+XG4gICAgICAgICAgICAgIHtjbGllbnRzfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBQYXlNZXRob2QgZnJvbSAnLi9jb21wb25lbnRzL3BheU1ldGhvZC5qc3gnXG5pbXBvcnQgUGF5Q2FzaCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2Focy5qc3gnXG5pbXBvcnQgUGF5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2FyZC5qc3gnXG5pbXBvcnQgUGF5Q3JlZGl0IGZyb20gJy4vY29tcG9uZW50cy9wYXlDcmVkaXQuanN4J1xuaW1wb3J0IFBheU90aGVyIGZyb20gJy4vY29tcG9uZW50cy9wYXlPdGhlci5qc3gnXG5pbXBvcnQgUGF5U2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUucGF5LmlzVmlzaWJsZSwgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdwYXktcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ3BheS1wYW5lbCdcblxuICAgIGxldCBwYXlNZXRob2QgPSAnJ1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcblxuICAgICAgY2FzZSAnQ0FTSCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXNoIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXJkIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ1JFRElUJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNyZWRpdCAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyAgY2FzZVxuXG4gICAgICBjYXNlICdPVEhFUic6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlPdGhlciAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyBjYXNlXG5cbiAgICB9IC8vIHN3aXRjaFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLW1haW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgUmVnaXN0cmFyIFBhZ29cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBheU1ldGhvZCAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktYXJlYS1jb250YWluZXInPlxuXG4gICAgICAgICAge3BheU1ldGhvZH1cblxuICAgICAgICAgIDxQYXlTaWRlQmFyIC8+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9wYXlQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5TWV0aG9kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjbGlja0NoYW5nZVBheU1ldGhvZChtZXRob2QsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0hBTkdFX1BBWV9NRVRIT0QnLCBwYXlsb2FkOiBtZXRob2R9KVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0Jz5cblxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NBU0gnKX0gY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ0NBU0gnXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cbiAgICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FSRCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FSRCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ1JFRElUJyl9ICovfVxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NSRURJVCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ1JFRElUJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+Q3LDqWRpdG88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlcnMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdPVEhFUidcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPk90cm88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2hhcmUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlNZXRob2QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXNoQW1vdW50fSBmcm9tICcuLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjYXNoQW1vdW50OiBzdG9yZS5wYXkuY2FzaEFtb3VudH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYXlBbW91bnRDaGFuZ2VkKGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FzaEFtb3VudChldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RUZFQ1RJVk86PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXNoQW1vdW50fSBvbkNoYW5nZT17dGhpcy5wYXlBbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VwZGF0ZVN0b3JlQ2FyZEF1dGgsIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0c30gZnJvbSAnLi4vYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2FyZEF1dGg6IHN0b3JlLnBheS5jYXJkQXV0aCwgY2FyZERpZ2l0czogc3RvcmUucGF5LmNhcmREaWdpdHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGF5Q2FyZEF1dGhDaGFuZ2VkKGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZEF1dGgoZXYudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIHBheUNhcmREaWdpdHNDaGFuZ2VkKGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz40IERJR0lUT1M6PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkRGlnaXRzfSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkRGlnaXRzQ2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkFVVE9SSVpBQ0nDk046PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkQXV0aH0gb25DaGFuZ2U9e3RoaXMucGF5Q2FyZEF1dGhDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wYXkvY29tcG9uZW50cy9wYXlDYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCwgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q3JlZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0IC0gdGhpcy5wcm9wcy5kZWJ0XG4gICAgY29uc3QgY2xpZW50TGltaXQgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHt0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcbiAgICBjb25zdCBjbGllbnRBdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHthdmFpbGFibGUuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkzDjU1JVEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50TGltaXR9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkRJU1BPTklCTEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50QXZhaWxhYmxlfTwvZGl2PlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlPdGhlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPiA8c3Bhbj5PdHJvPC9zcGFuPiA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtzYXZlSXRlbSwgbG9hZFNhbGV9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxuICAgIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZCxcbiAgICBwYXk6IHN0b3JlLnBheSxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXG4gICAgLy8gc2FsZUlkOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlSWQsXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNhdmVCdG4oKSB7XG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlclxuICAgIGNvbnN0IHNhbGUgPSB7XG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxuICAgICAgY2xpZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCksXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7XG4gICAgICBzYWxlLnBheS5kZWJ0ID0gdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxuICAgICAgc2FsZS5wYXkucGF5ZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvc2FsZXMvJyxcbiAgICAgIGl0ZW06IHNhbGUsXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxuICAgICAgbG9nRGVzY3JpcHRpb246ICdDcmVhY2nDs24gZGUgbnVldmEgVmVudGEnLFxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBpdGVtT2xkOiAnJyxcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxuICAgICAgZGlzcGF0Y2hUeXBlOiAnQ0xFQVJfU0FMRScsXG4gICAgICBpc1NhbGU6IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncykpXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuXG4gICAgTW91c2V0cmFwLnJlc2V0KClcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGNoYW5nZSA9IDBcbiAgICBsZXQgcGF5QnV0dG9uQ2xhc3MgPSAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsKVxuICAgIGNvbnN0IGNhc2ggPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpXG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XG5cbiAgICAgIGNhc2UgJ0NBU0gnOlxuICAgICAge1xuICAgICAgICBjaGFuZ2UgPSBjYXNoIC0gdG90YWxcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGNoYW5nZSA+PSAwKVxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdDQVJEJzpcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMucHJvcHMucGF5LmNhcmRBdXRoXG4gICAgICAgIGNvbnN0IGRpZ2l0cyA9IHRoaXMucHJvcHMucGF5LmNhcmREaWdpdHNcbiAgICAgICAgY2hhbmdlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy50b3RhbClcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGF1dGggJiYgZGlnaXRzKVxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnQ1JFRElUJzpcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiB0b3RhbCA8PSBhdmFpbGFibGUgJiYgdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LXNpZGUtYmFyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+UGFnbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlxuICAgICAgICAgIFRPVEFMIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7dGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+VlVFTFRPIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7Y2hhbmdlLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuc2F2ZUJ0bi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e3BheUJ1dHRvbkNsYXNzfT5cbiAgICAgICAgICBSZWdpc3RyYXJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7bG9hZEdsb2JhbENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IEZ1bGxJbnZvaWNlIGZyb20gJy4uL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCdcbmltcG9ydCBDb21wYWN0SW52b2ljZSBmcm9tICcuLi9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUuaW52b2ljZS5pc1Zpc2libGUsIGlzRnVsbDogc3RvcmUuaW52b2ljZS5pc0Z1bGx9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9hZEdsb2JhbENvbmZpZygnY29tcGFueScsIGZhbHNlLCAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCcsICdGRVRDSF9DT05GSUdfUkVKRUNURUQnKSlcbiAgfVxuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgLy8gcHJpbnREaXYoJ2Z1bGwtaW52b2ljZS1wcmludCcpXG4gIH1cblxuICB0b2dnbGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgdG9nZ2xlSW52b2ljZSgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHByaW50UGFuZWwoKSB7XG4gICAgd2luZG93LnByaW50RGl2KCdpbnZvaWNlLXByaW50JylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ2ludm9pY2UtcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2ludm9pY2UtcGFuZWwnXG4gICAgY29uc3QgaXNGdWxsQ2xhc3MgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/ICcnXG4gICAgICA6ICcgY29tcGFjdC1pbnZvaWNlLW9uJ1xuXG4gICAgY29uc3QgY29tcG9uZW50VG9Nb3VudCA9ICh0aGlzLnByb3BzLmlzRnVsbClcbiAgICAgID8gPEZ1bGxJbnZvaWNlIC8+XG4gICAgICA6IDxDb21wYWN0SW52b2ljZSAvPlxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtbWFpbicgKyBpc0Z1bGxDbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlLXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEZhY3R1cmEgZGUgVmVudGFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS10ZXh0LW8nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5wcmludFBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtcHJpbnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgey8qIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW52b2ljZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWNvZmZlZScgYXJpYS1oaWRkZW49J3RydWUnIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdpbnZvaWNlLXByaW50JyBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLWNvbnRhaW5lcicgKyBpc0Z1bGxDbGFzc30+XG5cbiAgICAgICAgICB7Y29tcG9uZW50VG9Nb3VudH1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsSW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIENyZWRpdCBvciBjYXNoXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IHRoaXMucHJvcHMuc2FsZS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnID8gJ0ZhY3R1cmEgZGUgY3LDqWRpdG8nIDogJ0ZhY3R1cmEgZGUgY29udGFkbydcbiAgICAvLyBMT0dPXG4gICAgY29uc3QgbG9nbyA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvIHx8ICcnXG4gICAgY29uc3QgbG9nb1dpZHRoID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ29XaWR0aCB8fCAnMTMwcHgnXG4gICAgY29uc3QgbG9nb1VybCA9IGAvbWVkaWEvbG9nb3MvJHtsb2dvfWBcblxuICAgIC8vIEJJTEwgREFUQVxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsX25hbWUgfHwgJydcbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbF9uYW1lIHx8ICcnXG5cbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcblxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJ1BFUlNPTidcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnJ1xuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxuXG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlci1sb2dvJz5cbiAgICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzogYCR7bG9nb1dpZHRofWB9fSBzcmM9e2xvZ29Vcmx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWUudG9VcHBlckNhc2UoKX08L2gyPlxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmVtYWlsIHx8ICcnfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1zZXBhcmF0b3InPlxuICAgICAgICA8c3BhbiAvPlxuXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0nY2xpZW50QWRyZXNzJz5ESVJFQ0NJw5NOOiB7c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiA8dHIgLz5cbiAgICBjb25zdCBpZCA9IHNhbGUuaWQgPyBzYWxlLmlkIDogJzAwMDAxJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2NsaWVudC10YWJsZSc+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q0xJRU5URTo8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2NsaWVudEFkcmVzc31cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2RhdGVudW0tdGFibGUnPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Ti4gZGUgZmFjdHVyYTo8L3RoPlxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlY2hhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50ID0gKHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxuICAgICAgOiA8dGQgc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90ZD5cbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5sZW5ndGhcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgICA/IGBHYFxuICAgICAgICAgIDogYEVgXG5cbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLmRpc2NvdW50fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgfSlcbiAgICAgIDogPHRyPlxuICAgICAgICA8dGQ+LS08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgPC90cj5cblxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50Um93ID0gdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCA/IDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMyICU8L3RoPlxuICAgICAgOiA8dGggc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90aD5cblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QLlU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMlPC90aD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UHJlY2lvPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e2l0ZW1zfTwvdGJvZHk+XG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10b3RhbHMnPlxuXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG5cbiAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0SW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IHRoaXMucHJvcHMuc2FsZS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnID8gJ0ZhY3R1cmEgZGUgY3LDqWRpdG8nIDogJ0ZhY3R1cmEgZGUgY29udGFkbydcblxuICAgIC8vIEJJTEwgREFUQVxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsTmFtZSB8fCAnJ1xuXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLmNvbXBhbnkubGVnYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcblxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJydcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnUEVSU09OJ1xuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxuXG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWV9PC9oMj5cbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MyIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGVsc1RleHR9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXNlcGFyYXRvcic+XG4gICAgICAgIDxzcGFuIC8+XG5cbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XG5cbiAgICAgICAgPHNwYW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZVRheGVzKVxuICAgICAgICA/IGBHYFxuICAgICAgICA6IGBFYFxuXG4gICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICB7dGF4ZXNUZXh0fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIH0pXG5cbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5DYW50PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkFydGljdWxvPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5Ub3RhbDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0nJz5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC90Ym9keT5cblxuICAgIDwvdGFibGU+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgaWQgPSBzYWxlLmlkID8gc2FsZS5pZCA6ICcwMDAxJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0aD5EaXJlYzo8L3RoPlxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuXG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRvdGFscyc+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPklWPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcyc+XG4gICAgICA8aDE+Tm90YXM6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMtY29udGVudCc+XG4gICAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXlvdXQoKSB7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxuXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG4gIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcblxuICBjb25zdCBjb25maWdCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQmFyJylcblxuICBpZiAoY29uZmlnQmFyLmNsYXNzTGlzdC5jb250YWlucygnbm90LXZpc2libGUnKSkge1xuXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uZmlnQmFyLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcyc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgSW5pY2lvPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9zYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgICBOdWV2YSBWZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJvZm9ybWEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIENvdGl6YWNpw7NuPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcmVzYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBQcmV2ZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdG9yZS51c2VyLnVzZXIsXG4gICAgcHJvZmlsZTogc3RvcmUudXNlci5wcm9maWxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBhdmF0YXIgPSB0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyID8gYC9tZWRpYS8ke3RoaXMucHJvcHMucHJvZmlsZS5hdmF0YXJ9YCA6ICcvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgOiAodGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgPyB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lIDogJydcblxuICAgIGxldCBmdWxsTmFtZSA9IGAke25hbWV9ICR7bGFzdE5hbWV9YFxuICAgIGlmIChmdWxsTmFtZS5sZW5ndGggPiAyMikgZnVsbE5hbWUgPSBmdWxsTmFtZS5zdWJzdHJpbmcoMCwgMjIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXIgY29sLXhzLTEyICc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItbmFtZSc+XG4gICAgICAgIDxzcGFuPntmdWxsTmFtZX08L3NwYW4+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmssIGxvZ2dlcilcblxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcbmltcG9ydCBjbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMvcmVkdWNlci5qcydcbmltcG9ydCBzZWFyY2hDbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcbmltcG9ydCBwYXkgZnJvbSAnLi9nZW5lcmFsL3BheS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGludm9pY2UgZnJvbSAnLi9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvcmVkdWNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmV0Y2hpbmcsXG4gIGxheW91dCxcbiAgdXNlcixcbiAgY2FydCxcbiAgY2xpZW50cyxcbiAgcHJvZHVjdHMsXG4gIHNhbGUsXG4gIG1lc3NhZ2VzLFxuICBzZWFyY2hDbGllbnRzLFxuICBzZWFyY2hQcm9kdWN0cyxcbiAgcGF5LFxuICBpbnZvaWNlLFxuICBzYWxlcyxcbiAgY29uZmlnXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICBzaWRlTWVudVZpc2libGU6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NBTEVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHRydWUsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hPTUVfUEFORUxfTU9VTlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxuICAgICAgICBzaWRlTWVudVZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdXNlcjoge30sXG4gIHByb2ZpbGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBwcm9maWxlOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgY3JlYXRlZDogJycsXG4gIHVwZGF0ZWQ6ICcnLFxuICBpc051bGw6IGZhbHNlLFxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxuICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgaXNOdWxsOiBmYWxzZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiB0cnVlLFxuICAgICAgICBjYXJ0SXRlbXM6IFtcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0SXRlbXMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVNT1ZFX0ZST01fQ0FSVCc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cblxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG5cbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXG4gICAgICAvLyA/IHRydWVcbiAgICAgIC8vIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX0lURU1fTE9URSc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX1RPVEFMUyc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC50YXhlcyxcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfTElORV9ESVNDT1VOVCc6XG4gICAge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XS5kaXNjb3VudCA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIlxuY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnRzID0gc3RhdGUuY2xpZW50c1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgY2xpZW50czogY2xpZW50c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50LFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1RSVUUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IHRydWVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX0ZBTFNFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnQgPSBzdGF0ZS5jbGllbnRTZWxlY3RlZFxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHByb2R1Y3RzOiB7fSxcbiAgaW5wdXRWYWw6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7fVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XG4gICAge1xuICAgICAgY29uc3Qgd2lkdGggPSAhc3RhdGUuZnVsbFdpZHRoXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB3aWR0aFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwiaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIG1lc3NhZ2VzOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnUFJPRFVDVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIFBST0RVQ1RPIScsICdFbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdOT1RfRk9VTkRfU0FMRSc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgTEEgVkVOVEEhJywgYExhIHZlbnRhICMke2FjdGlvbi5wYXlsb2FkfSBubyBleGlzdGUsIG8gaGF5IHVuIHByb2JsZW1hIHBhcmEgY2FyZ2FybGEsIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLmApXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiEnLCAnSHVibyB1biBlcnJvciBhbCBlbmNvbnRyYXIgZWwgcHJvZHVjdG8gZW4gbGEgbGlzdGEgZGUgcHJvZHVjdG9zIGFncmVnYWRvcyxwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBQUk9EVUNUT1MhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBwcm9kdWN0b3MsIHBvciBmYXZvciBpbnRlbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAke2FjdGlvbi5wYXlsb2FkfWApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgQ0xJRU5URSEnLCAnRWwgY2xpZW50ZSBjb24gZWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgQ0xJRU5URVMhJywgYEh1Ym8gdW4gZXJyb3IgYWwgY2FyZ2FyIGxvcyBjbGllbnRlcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBjbGllbnRzTWF0Y2hlZDogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfSElERV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBwcm9kdWN0c01hdGNoZWQ6IFtdLFxuICBzZWFyY2hWYWx1ZTogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdQUk9EVUNUX1NIT1dfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9ISURFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2UsXG4gIHBheU1ldGhvZDogJ0NBU0gnLFxuICBjYXNoQW1vdW50OiAwLFxuICBjYXJkRGlnaXRzOiAnJyxcbiAgY2FyZEF1dGg6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTSE9XX1BBWV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9QQVlfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDSEFOR0VfUEFZX01FVEhPRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheU1ldGhvZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVNIX0FNT1VOVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfQVVUSCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0RJR0lUUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5wYXkucGF5TWV0aG9kLFxuICAgICAgICBjYXNoQW1vdW50OiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FzaEFtb3VudCxcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWQucGF5LmNhcmREaWdpdHMsXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZEF1dGhcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3BheS9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgaXNGdWxsOiB0cnVlLFxuICBkZWZhdWx0RGVzaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTSE9XX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCBmdWxsT3JOb3QgPSBzdGF0ZS5pc0Z1bGxcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0Z1bGw6ICFmdWxsT3JOb3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX0RFU0lORyc6XG4gICAge1xuICAgICAgY29uc3QgZGVzaW5nT3JOb3QgPSBzdGF0ZS5kZWZhdWx0RGVzaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVmYXVsdERlc2luZzogIWRlc2luZ09yTm90XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMiLCJjb25zdCBzYWxlQWN0aXZlTW9kZWwgPSB7XG4gIGlkOiAwLFxuICBkb2NUeXBlOiAnU0FMRScsXG4gIGNhcnQ6IHt9LFxuICBjbGllbnQ6ICcnLFxuICBwYXk6IHt9LFxuICBjcmVhdGVkOiBuZXcgRGF0ZSgpXG59XG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHNhbGVzOiBbXSxcbiAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICBjb21wbGV0ZWQ6IGZhbHNlLFxuICBzYWxlQWN0aXZlSWQ6IDAsXG4gIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlQWN0aXZlTW9kZWwsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogMCxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTSE9XX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19QUkVTQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9QUkVTQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9TQUxFU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBbXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3QgY2FydCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2FydClcbiAgICAgIGNvbnN0IGNsaWVudCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2xpZW50KVxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQudXNlcilcbiAgICAgIGNvbnN0IHBheSA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQucGF5KVxuXG4gICAgICBjb25zdCBzYWxlID0ge1xuICAgICAgICBjYXJ0OiBjYXJ0LFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgcGF5OiBwYXksXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLmNyZWF0ZWQpLFxuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuYmlsbF9udW1iZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfU0FMRV9JRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1BSRVNBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUk9GT1JNQV9JRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHNhbGVzID0gc3RhdGUuc2FsZXNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHNhbGVzOiBzYWxlc1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgc2FsZUFjdGl2ZUlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcbiAgICAgIHNhbGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkLmNhcnRcbiAgICAgIHNhbGUuY2xpZW50ID0gYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZVxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGNvbXBhbnk6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9DT05GSUdfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiBhY3Rpb24ucGF5bG9hZC5kYXRhXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NPTkZJR19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXToge31cbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX0NPTkZJRyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfVxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cbiAgICBOdW1iZXIucHJvdG90eXBlLmZvcm1hdE1vbmV5ID0gZnVuY3Rpb24oYywgZCwgdCl7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgICBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxuICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmZXRjaW5nLWNvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvdmVuZG9yL2xvYWRlcnMvRWNsaXBzZS5naWYnfSAvPlxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hJTkdfU1RBUlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENISU5HX0RPTkUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjQ2FydChpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxuXG4gICAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtLnByb2R1Y3QsIGl0ZW0ucXR5LCBpdGVtLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcbiAgICBuZXdJdGVtLnRvdGFsV2l0aEl2ID0gZGF0YS50b3RhbFdpdGhJdlxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcbiAgICBuZXdJdGVtLnByaWNlVG9Vc2UgPSBkYXRhLnByaWNlVG9Vc2VcblxuICAgIHJldHVybiBuZXdJdGVtXG5cbiAgfSlcblxuICByZXR1cm4ge3R5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBuZXdDYXJ0fVxuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb3RlOiBsb3RlTnVtLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XG5cbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXG5cbiAgY29uc3QgcHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDogY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSkge1xuXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChjYXJ0ID0+IGNhcnQucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgY2FydC5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcblxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcbiAgaWYgKHBlckxpbmUpIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxuICAgICAgPyB7XG4gICAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgcXR5LFxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gcmVzXG5cbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuXG4vLyBjYWxjdWxhdGVzIHRoZSBzdWJ0b3RhbCBieSBsaW5lLCBhbHNvIHRoZSB0b3RhbCB3aXRoIGl2IGluY2x1ZGVkLCB0aGUgZGlzY291bnQgaW4gY3VycmVuY3kgZm9ybWF0XG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBwcmljZSA9IHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KVxuXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxuXG4gIGNvbnN0IGl2MSA9IChwcm9kdWN0LnVzZV90YXhlcylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjJcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcblxuICByZXR1cm4ge1xuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGlzY291bnRDdXJyZW5jeSxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBwcmljZVRvVXNlOiBwcmljZVxuICB9XG5cbn1cblxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xuXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIHJldHVybiB7XG4gICAgdXVpZDogdXVpZCxcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgcXR5OiBuZXdRdHksXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxuICAgIGxvdGU6IGl0ZW1zSW5DYXJ0W2luZGV4XS5sb3RlLFxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxuZnVuY3Rpb24gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpIHtcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnUFJPRFVDVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHZhbCwgcHJvZHVjdHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvZHVjdC5kZXNjcmlwdGlvbi50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChwcm9kdWN0KVxuICAgIH1cblxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkge1xuXG4gIHJldHVybiB7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogY29kZX1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBjb25zb2xlLmxvZyhjbGllbnRzKVxuXG4gIGNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfRkFJTCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9