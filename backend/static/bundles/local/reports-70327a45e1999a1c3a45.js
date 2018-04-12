webpackJsonp([3],{

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(345);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(347);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COMPONENTS
window.alertify = _alertifyjs2.default;

// STORE


// REDUX PROVIDER


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

/***/ 345:
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

var _actions = __webpack_require__(346);

var _topBar = __webpack_require__(64);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(65);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    profile: store.user.profile
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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('loader').remove();
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var unlocked = _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_sideMenu2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'mainContainer', className: 'mainContainer' },
            _react2.default.createElement(_topBar2.default, null)
          )
        )
      );

      // const content = this.props.adminLocked ? locked : unlocked
      var content = unlocked;

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

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/github/iFact3/frontend/reports/main/main.jsx');
}();

;

/***/ }),

/***/ 346:
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
    }).catch(function (error) {
      dispatch({ type: 'FETCH_PROFILE_REJECTED', payload: error });
    });
  };
}

function fecthIsAdminLocked() {

  return function (dispatch) {
    _axios2.default.get('/api/userprefs/admin__is_admin_locked/').then(function (response) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_FULFILLED', payload: response.data.value });
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

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', '/Volumes/DATOS/github/iFact3/frontend/reports/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', '/Volumes/DATOS/github/iFact3/frontend/reports/main/actions.js');
}();

;

/***/ }),

/***/ 347:
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

var _reducer = __webpack_require__(348);

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

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Volumes/DATOS/github/iFact3/frontend/reports/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/reports/store.js');
}();

;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducer = __webpack_require__(349);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(350);

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  body: _reducer2.default,
  user: _reducer4.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/reports/reducer.js');
}();

;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
var stateConst = {
  bodyLocked: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {} // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, "stateConst", "/Volumes/DATOS/github/iFact3/frontend/reports/body/reducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Volumes/DATOS/github/iFact3/frontend/reports/body/reducer.js");
}();

;

/***/ }),

/***/ 350:
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/reports/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/reports/user/reducer.js');
}();

;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TopBar = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'menuClick',
    value: function menuClick(ev) {

      var mainContainer = document.getElementById('mainContainer');
      var sideMenu = document.getElementById('sideMenu');

      if (mainContainer.classList.contains('pulled')) {

        mainContainer.classList.remove('pulled');
        sideMenu.classList.remove('visible');
        return true;
      }

      mainContainer.classList.add('pulled');
      sideMenu.classList.add('visible');
    }
  }, {
    key: 'logOut',
    value: function logOut() {

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

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'topBar' },
        _react2.default.createElement(
          'div',
          { onClick: this.menuClick.bind(this), className: 'topBar-button topBar-button-collapse not-visible' },
          _react2.default.createElement('span', { className: 'fa fa-bars' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.logOut.bind(this), className: 'topBar-button topBar-button-logout' },
          _react2.default.createElement('span', { className: 'fa fa-power-off' })
        )
      );
    }
  }]);

  return TopBar;
}(_react2.default.Component);

exports.default = TopBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', '/Volumes/DATOS/github/iFact3/frontend/layout/topBar/topBar.jsx');
}();

;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(66);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SideMenu = function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'render',


    // Main Layout
    value: function render() {
      // const title = this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || 'APP'

      return _react2.default.createElement(
        'div',
        { id: 'sideMenu', className: 'sideMenu' },
        _react2.default.createElement(_user2.default, null),
        _react2.default.createElement(
          'ul',
          { className: 'sideMenu-items' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement('span', { className: 'fa fa-home' }),
              'Inicio'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/admin/' },
              _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
              'Sitio Administrador'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/sales/' },
              _react2.default.createElement('span', { className: 'fa fa-shopping-cart' }),
              'Ventas'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/inventories/' },
              _react2.default.createElement('span', { className: 'fa fa-gift' }),
              'Inventarios'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/reports/' },
              _react2.default.createElement('span', { className: 'fa fa-list' }),
              'Reportes'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/logout/' },
              _react2.default.createElement('span', { className: 'fa fa-power-off' }),
              'Cerrar sesi\xF3n'
            )
          )
        )
      );
    }
  }]);

  return SideMenu;
}(_react2.default.Component);

exports.default = SideMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SideMenu, 'SideMenu', '/Volumes/DATOS/github/iFact3/frontend/layout/sideMenu/sideMenu.jsx');
}();

;

/***/ }),

/***/ 66:
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

  __REACT_HOT_LOADER__.register(User, 'User', '/Volumes/DATOS/github/iFact3/frontend/layout/sideMenu/user/user.jsx');
}();

;

/***/ })

},[344]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZXBvcnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZXBvcnRzL21haW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVwb3J0cy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVwb3J0cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZXBvcnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVwb3J0cy9ib2R5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVwb3J0cy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGF5b3V0L3NpZGVNZW51L3VzZXIvdXNlci5qc3giXSwibmFtZXMiOlsid2luZG93IiwiYWxlcnRpZnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFpbiIsInN0b3JlIiwicHJvZmlsZSIsInVzZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwicmVtb3ZlIiwidW5sb2NrZWQiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZmVjdGhQcm9maWxlIiwiZmVjdGhJc0FkbWluTG9ja2VkIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIiwiZmllbGRzIiwiY2F0Y2giLCJlcnJvciIsInZhbHVlIiwibWlkZGxld2FyZSIsImJvZHkiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImJvZHlMb2NrZWQiLCJzdGF0ZSIsImFjdGlvbiIsIlRvcEJhciIsImV2IiwibWFpbkNvbnRhaW5lciIsInNpZGVNZW51IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJjb25maXJtIiwibG9jYXRpb24iLCJyZXBsYWNlIiwic2V0Iiwib2siLCJjYW5jZWwiLCJtZW51Q2xpY2siLCJiaW5kIiwibG9nT3V0IiwiU2lkZU1lbnUiLCJVc2VyIiwiYXZhdGFyIiwibmFtZSIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwiZnVsbE5hbWUiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7Ozs7QUFHQTs7Ozs7O0FBSkE7QUFNQUEsT0FBT0MsUUFBUDs7QUFIQTs7O0FBTEE7OztBQVVBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsc0JBQVY7QUFDRTtBQURGLENBREYsRUFHZUMsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUhmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNkQTs7Ozs7QUFRQTs7QUFMQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQU9xQkMsSSxXQUxwQix5QkFBUSxVQUFDQyxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMQyxhQUFTRCxNQUFNRSxJQUFOLENBQVdEO0FBRGYsR0FBUDtBQUdELENBSkEsQzs7Ozs7Ozs7Ozs7eUNBT3NCO0FBQ25CLFdBQUtFLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQiw0QkFBcEI7QUFDRDs7O3dDQUVtQjtBQUNsQlAsZUFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ08sTUFBbEM7QUFDRDs7QUFFRDs7Ozs2QkFDUzs7QUFFUCxVQUFNQyxXQUFXO0FBQUE7QUFBQTtBQUNmO0FBQUE7QUFBQTtBQUNFLGlFQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVUsZUFBbEM7QUFDRTtBQURGO0FBRkY7QUFEZSxPQUFqQjs7QUFVQTtBQUNBLFVBQU1DLFVBQVVELFFBQWhCOztBQUVBLGFBQU87QUFBQTtB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QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBT007QUFBUCxXQURGO0FBRUU7QUFGRjtBQU5LLE9BQVA7QUFnQkQ7Ozs7RUFqQytCLGdCQUFNNUMsUztrQkFBbkJxQyxJOzs7Ozs7OztnQ0FBQUEsSSIsImZpbGUiOiJyZXBvcnRzLTcwMzI3YTQ1ZTE5OTlhMWMzYTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3JlcG9ydHMvYXBwLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2ZlY3RoUHJvZmlsZX0gZnJvbSAnLi9hY3Rpb25zJ1xuXG4vLyBDT01QT05FTlRTXG5cbmltcG9ydCBUb3BCYXIgZnJvbSAnLi4vLi4vbGF5b3V0L3RvcEJhci90b3BCYXIuanN4J1xuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uLy4uL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykucmVtb3ZlKClcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHVubG9ja2VkID0gPFJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9J21haW5Db250YWluZXInPlxuICAgICAgICAgIDxUb3BCYXIgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuXG4gICAgLy8gY29uc3QgY29udGVudCA9IHRoaXMucHJvcHMuYWRtaW5Mb2NrZWQgPyBsb2NrZWQgOiB1bmxvY2tlZFxuICAgIGNvbnN0IGNvbnRlbnQgPSB1bmxvY2tlZFxuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9yZXBvcnRzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aFByb2ZpbGUoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvcHJvZmlsZS8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhJc0FkbWluTG9ja2VkKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycHJlZnMvYWRtaW5fX2lzX2FkbWluX2xvY2tlZC8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvcmVwb3J0cy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlJ1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxuXG4vLyBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmspXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIG1pZGRsZXdhcmUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9yZXBvcnRzL3N0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBib2R5IGZyb20gJy4vYm9keS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyL3JlZHVjZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGJvZHksXG4gIHVzZXJcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9yZXBvcnRzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBib2R5TG9ja2VkOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvcmVwb3J0cy9ib2R5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB1c2VyOiB7fSxcbiAgcHJvZmlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHByb2ZpbGU6IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3JlcG9ydHMvdXNlci9yZWR1Y2VyLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKVxuICAgIGNvbnN0IHNpZGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVNZW51JylcblxuICAgIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgICAgc2lkZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcblxuICB9XG5cbiAgbG9nT3V0KCkge1xuXG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0NlcnJhciBTZXNpw7NuJywgYMK/RGVzZWEgQ2VycmFyIHN1IHNlc2nDs24gZW4gZWwgc2lzdGVtYT9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0NlcnJhcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIG5vdC12aXNpYmxlJyA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYmFycycgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1sb2dvdXQnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyL3VzZXIuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xuXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9J3NpZGVNZW51Jz5cblxuICAgICAgey8qIDxoMyBjbGFzc05hbWU9J3NpZGVNZW51LWhlYWRlcic+e3RpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMz4gKi99XG4gICAgICA8VXNlciAvPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtaG9tZScgLz5cbiAgICAgICAgICAgIEluaWNpbzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9hZG1pbi8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgU2l0aW8gQWRtaW5pc3RyYWRvcjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9zYWxlcy8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zaG9wcGluZy1jYXJ0JyAvPlxuICAgICAgICAgICAgVmVudGFzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0nL2ludmVudG9yaWVzLyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWdpZnQnIC8+XG4gICAgICAgICAgICBJbnZlbnRhcmlvczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9yZXBvcnRzLyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgICAgICBSZXBvcnRlczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9sb2dvdXQvJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtcG93ZXItb2ZmJyAvPlxuICAgICAgICAgICAgQ2VycmFyIHNlc2nDs248L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWxvY2snPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWxvY2snIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9sYXlvdXQvc2lkZU1lbnUvdXNlci91c2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=