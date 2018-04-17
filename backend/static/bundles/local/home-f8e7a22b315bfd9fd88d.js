webpackJsonp([2],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(297);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(343);

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

/***/ 297:
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

var _actions = __webpack_require__(323);

var _topBar = __webpack_require__(65);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(66);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _body = __webpack_require__(342);

var _body2 = _interopRequireDefault(_body);

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
            _react2.default.createElement(_topBar2.default, null),
            _react2.default.createElement(_body2.default, null)
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

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/github/iFact3/frontend/home/main/main.jsx');
}();

;

/***/ }),

/***/ 323:
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

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', '/Volumes/DATOS/github/iFact3/frontend/home/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', '/Volumes/DATOS/github/iFact3/frontend/home/main/actions.js');
}();

;

/***/ }),

/***/ 342:
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

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('loader').remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 row landing' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 landing-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Bienvenido'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'h3',
            null,
            'Elija una opcion para iniciar'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'buttons-container' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/admin' },
                'Administraci\xF3n'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/sales' },
                'Ventas'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/buys' },
                'Compras'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'buttons-container' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/inventories' },
                'Inventarios'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/reports' },
                'Reportes'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/' },
                'Home'
              )
            )
          )
        )
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Body, 'Body', '/Volumes/DATOS/github/iFact3/frontend/home/body/body.jsx');
}();

;

/***/ }),

/***/ 343:
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

var _reducer = __webpack_require__(345);

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

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Volumes/DATOS/github/iFact3/frontend/home/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/home/store.js');
}();

;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducer = __webpack_require__(346);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(347);

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

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/home/reducer.js');
}();

;

/***/ }),

/***/ 346:
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

  __REACT_HOT_LOADER__.register(stateConst, "stateConst", "/Volumes/DATOS/github/iFact3/frontend/home/body/reducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Volumes/DATOS/github/iFact3/frontend/home/body/reducer.js");
}();

;

/***/ }),

/***/ 347:
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/home/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/home/user/reducer.js');
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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(67);

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

/***/ 67:
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

},[261]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL21haW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9ib2R5L2JvZHkuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvYm9keS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS91c2VyL3VzZXIuanN4Il0sIm5hbWVzIjpbIndpbmRvdyIsImFsZXJ0aWZ5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW4iLCJzdG9yZSIsInByb2ZpbGUiLCJ1c2VyIiwicHJvcHMiLCJkaXNwYXRjaCIsInVubG9ja2VkIiwiY29udGVudCIsIkNvbXBvbmVudCIsImZlY3RoUHJvZmlsZSIsImZlY3RoSXNBZG1pbkxvY2tlZCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSIsImZpZWxkcyIsImNhdGNoIiwiZXJyb3IiLCJ2YWx1ZSIsIkJvZHkiLCJyZW1vdmUiLCJtaWRkbGV3YXJlIiwiYm9keSIsInJlZHVjZXIiLCJzdGF0ZUNvbnN0IiwiYm9keUxvY2tlZCIsInN0YXRlIiwiYWN0aW9uIiwiVG9wQmFyIiwiZXYiLCJtYWluQ29udGFpbmVyIiwic2lkZU1lbnUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImNvbmZpcm0iLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJzZXQiLCJvayIsImNhbmNlbCIsIm1lbnVDbGljayIsImJpbmQiLCJsb2dPdXQiLCJTaWRlTWVudSIsIlVzZXIiLCJhdmF0YXIiLCJuYW1lIiwiZmlyc3RfbmFtZSIsInVzZXJuYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiLCJmdWxsTmFtZSIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7OztBQUdBOzs7Ozs7QUFKQTtBQU1BQSxPQUFPQyxRQUFQOztBQUhBOzs7QUFMQTs7O0FBVUEsbUJBQVNDLE1BQVQsQ0FDRTtBQUFBO0FBQUEsSUFBVSxzQkFBVjtBQUNFO0FBREYsQ0FERixFQUdlQyxTQUFTQyxjQUFULENBQXdCLGVBQXhCLENBSGY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2RBOzs7OztBQVFBOztBQUxBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFPcUJDLEksV0FMcEIseUJBQVEsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTEMsYUFBU0QsTUFBTUUsSUFBTixDQUFXRDtBQURmLEdBQVA7QUFHRCxDQUpBLEM7Ozs7Ozs7Ozs7O3lDQU9zQjtBQUNuQixXQUFLRSxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsNEJBQXBCO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVAsVUFBTUMsV0FBVztBQUFBO0FBQUE7QUFDZjtBQUFBO0FBQUE7QUFDRSxpRUFERjtBQUVFO0FBQUE7QUFBQSxjQUFLLElBQUcsZUFBUixFQUF3QixXQUFVLGVBQWxDO0FBQ0UsaUVBREY7QUFFRTtBQUZGO0FBRkY7QUFEZSxPQUFqQjs7QUFVQTtBQUNBLFVBQU1DLFVBQVVELFFBQWhCOztBQUVBLGFBQU87QUFBQTtBQUFBO0FBQ0pD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ZjtBQUNFO0FBQUE7QUFBQTtBQUFPTTtBQUFQLFdBREY7QUFFRTtBQUZGO0FBTkssT0FBUDtBQWdCRDs7OztFQWpDK0IsZ0JBQU05QyxTO2tCQUFuQnVDLEk7Ozs7Ozs7O2dDQUFBQSxJIiwiZmlsZSI6ImhvbWUtZjhlN2EyMmIzMTViZmQ5ZmQ4OGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbi8vIFJFRFVYIFBST1ZJREVSXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIENPTVBPTkVOVFNcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluLmpzeCdcblxuLy8gU1RPUkVcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJ1xuXG53aW5kb3cuYWxlcnRpZnkgPSBhbGVydGlmeVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxNYWluIC8+XG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9hcHAuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7ZmVjdGhQcm9maWxlfSBmcm9tICcuL2FjdGlvbnMnXG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi8uLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vLi4vbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCdcbmltcG9ydCBCb2R5IGZyb20gJy4uL2JvZHkvYm9keS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB1bmxvY2tlZCA9IDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPSdtYWluQ29udGFpbmVyJz5cbiAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgPEJvZHkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdXRlcj5cblxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnByb3BzLmFkbWluTG9ja2VkID8gbG9ja2VkIDogdW5sb2NrZWRcbiAgICBjb25zdCBjb250ZW50ID0gdW5sb2NrZWRcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9tYWluL21haW4uanN4IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhQcm9maWxlKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL3Byb2ZpbGUvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHt1c2VyOiByZXNwb25zZS5kYXRhWzBdLmZpZWxkcywgcHJvZmlsZTogcmVzcG9uc2UuZGF0YVsxXS5maWVsZHN9fSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoSXNBZG1pbkxvY2tlZCgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnByZWZzL2FkbWluX19pc19hZG1pbl9sb2NrZWQvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfRlVMRklMTEVEJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS52YWx1ZX0pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2hvbWUvbWFpbi9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykucmVtb3ZlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cgbGFuZGluZyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEwIGNvbC1zbS04IGNvbC14cy1vZmZzZXQtMSBjb2wtc20tb2Zmc2V0LTIgbGFuZGluZy1jb250YWluZXInPlxuICAgICAgICA8aDE+QmllbnZlbmlkbzwvaDE+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8aDM+RWxpamEgdW5hIG9wY2lvbiBwYXJhIGluaWNpYXI8L2gzPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2J1dHRvbnMtY29udGFpbmVyJz5cbiAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnRuLWxnIGxhbmRpbmctYnRuJyBocmVmPScvYWRtaW4nPkFkbWluaXN0cmFjacOzbjwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidG4tbGcgbGFuZGluZy1idG4nIGhyZWY9Jy9zYWxlcyc+VmVudGFzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZyBsYW5kaW5nLWJ0bicgaHJlZj0nL2J1eXMnPkNvbXByYXM8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nYnV0dG9ucy1jb250YWluZXInPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidG4tbGcgbGFuZGluZy1idG4nIGhyZWY9Jy9pbnZlbnRvcmllcyc+SW52ZW50YXJpb3M8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnRuLWxnIGxhbmRpbmctYnRuJyBocmVmPScvcmVwb3J0cyc+UmVwb3J0ZXM8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnRuLWxnIGxhbmRpbmctYnRuJyBocmVmPScvJz5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL2JvZHkvYm9keS5qc3giLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlJ1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxuXG4vLyBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmspXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIG1pZGRsZXdhcmUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL3N0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBib2R5IGZyb20gJy4vYm9keS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyL3JlZHVjZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGJvZHksXG4gIHVzZXJcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBib2R5TG9ja2VkOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9ib2R5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB1c2VyOiB7fSxcbiAgcHJvZmlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHByb2ZpbGU6IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2hvbWUvdXNlci9yZWR1Y2VyLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKVxuICAgIGNvbnN0IHNpZGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVNZW51JylcblxuICAgIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgICAgc2lkZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcblxuICB9XG5cbiAgbG9nT3V0KCkge1xuXG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0NlcnJhciBTZXNpw7NuJywgYMK/RGVzZWEgQ2VycmFyIHN1IHNlc2nDs24gZW4gZWwgc2lzdGVtYT9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0NlcnJhcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIG5vdC12aXNpYmxlJyA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYmFycycgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1sb2dvdXQnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyL3VzZXIuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xuXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9J3NpZGVNZW51Jz5cblxuICAgICAgey8qIDxoMyBjbGFzc05hbWU9J3NpZGVNZW51LWhlYWRlcic+e3RpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMz4gKi99XG4gICAgICA8VXNlciAvPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtaG9tZScgLz5cbiAgICAgICAgICAgIEluaWNpbzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9hZG1pbi8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgU2l0aW8gQWRtaW5pc3RyYWRvcjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9zYWxlcy8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zaG9wcGluZy1jYXJ0JyAvPlxuICAgICAgICAgICAgVmVudGFzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0nL2ludmVudG9yaWVzLyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWdpZnQnIC8+XG4gICAgICAgICAgICBJbnZlbnRhcmlvczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9yZXBvcnRzLyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgICAgICBSZXBvcnRlczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9sb2dvdXQvJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtcG93ZXItb2ZmJyAvPlxuICAgICAgICAgICAgQ2VycmFyIHNlc2nDs248L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWxvY2snPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWxvY2snIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9sYXlvdXQvc2lkZU1lbnUvdXNlci91c2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=