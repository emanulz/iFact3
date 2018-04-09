webpackJsonp([1],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(67);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(591);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(598);

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

/***/ 591:
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

var _actions = __webpack_require__(592);

var _topBar = __webpack_require__(593);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(595);

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

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fecthProfile = fecthProfile;
exports.fecthIsAdminLocked = fecthIsAdminLocked;

var _axios = __webpack_require__(23);

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


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _actions = __webpack_require__(594);

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

/***/ 594:
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

/***/ 595:
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

var _search = __webpack_require__(596);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(597);

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

/***/ 596:
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

/***/ 598:
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

var _reducer = __webpack_require__(599);

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

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducer = __webpack_require__(78);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(600);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(601);

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  fetching: _reducer2.default,
  layout: _reducer4.default,
  user: _reducer6.default
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

/***/ 600:
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

/***/ 601:
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

/***/ })

},[590]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFsZXJ0aWZ5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW4iLCJzdG9yZSIsImZldGNoaW5nIiwic2lkZU1lbnVWaXNpYmxlIiwibGF5b3V0IiwicHJvcHMiLCJkaXNwYXRjaCIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0eXBlIiwicGF5bG9hZCIsInVzZXIiLCJkYXRhIiwiZmllbGRzIiwicHJvZmlsZSIsImNhdGNoIiwiZXJyb3IiLCJ2YWx1ZSIsIlRvcEJhciIsInRvcEJhclRvZ2dsZVZpc2libGUiLCJldiIsImNvbmZpcm0iLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJzZXQiLCJvayIsImNhbmNlbCIsImJ1dHRvbkNsYXNzIiwibWVudUNsaWNrIiwiYmluZCIsImhvbWVDbGljayIsImxvZ091dENsaWNrIiwidG9nZ2xlTGF5b3V0IiwidG9nZ2xlQ29uZmlnQmFyIiwibWFpbkNvbnRhaW5lciIsInNpZGVNZW51IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjb25maWdCYXIiLCJTaWRlTWVudSIsInNpZGVNZW51Q2xhc3MiLCJTZWFyY2giLCJVc2VyIiwiYXZhdGFyIiwibmFtZSIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwiZnVsbE5hbWUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJtaWRkbGV3YXJlIiwicmVkdWNlciIsInN0YXRlQ29uc3QiLCJzdGF0ZSIsImFjdGlvbiIsIk51bWJlciIsInByb3RvdHlwZSIsImZvcm1hdE1vbmV5IiwiYyIsImQiLCJ0IiwibiIsImlzTmFOIiwiTWF0aCIsImFicyIsInVuZGVmaW5lZCIsInMiLCJpIiwiU3RyaW5nIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsInNsaWNlIiwiRmV0Y2hpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFFQTs7OztBQUdBOzs7Ozs7QUFKQTtBQU1BQSxPQUFP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QUUxRCxVQUFRQSxPQUFPakQsSUFBZjs7QUFFRSxTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDS2dELEtBREw7QUFFRTdELG9CQUFVO0FBRlo7QUFLRCxPQVRILENBU0k7O0FBRUYsU0FBSyxlQUFMO0FBQ0E7QUFDRSw0QkFDSzZELEtBREw7QUFFRTdELG9CQUFVO0FBRlo7QUFLRCxPQWxCSCxDQWtCSTs7QUFsQkosR0FGMEQsQ0FzQnhEOztBQUVGLFNBQU82RCxLQUFQLENBeEIwRCxDQXdCN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0E5QklELFU7O2dDQUlrQkQsTyIsImZpbGUiOiJzYWxlcy1mNjZjZWI3NzMzMzYwMzdlNjNiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcbmZvcm1hdE1vbmV5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2FwcC5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtmZWN0aFByb2ZpbGV9IGZyb20gJy4vYWN0aW9ucydcblxuLy8gQ09NUE9ORU5UU1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xuaW1wb3J0IEZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4J1xuXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaGluZzogc3RvcmUuZmV0Y2hpbmcuZmV0Y2hpbmcsXG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZWN0aFByb2ZpbGUoKSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGZldGNoaW5nID0gdGhpcy5wcm9wcy5mZXRjaGluZyA/IDxGZXRjaGluZyAvPiA6ICcnXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnbWFpbkNvbnRhaW5lcicgOiAnbWFpbkNvbnRhaW5lciBzaWRlSGlkZGVuJ1xuICAgIGNvbnN0IGNvbnRlbnQgPSA8Um91dGVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgIDxkaXYgaWQ9J21haW5Db250YWluZXInIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250YWluZXItY29udGVudCc+XG4gICAgICAgICAgICB7Lyoge3JvdXRlc30gKi99XG4gICAgICAgICAgICB7ZmV0Y2hpbmd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aFByb2ZpbGUoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvcHJvZmlsZS8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhJc0FkbWluTG9ja2VkKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycHJlZnMvYWRtaW5fX2lzX2FkbWluX2xvY2tlZC8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXlvdXQoKSB7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxuXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcblxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG4gIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcblxuICBjb25zdCBjb25maWdCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQmFyJylcblxuICBpZiAoY29uZmlnQmFyLmNsYXNzTGlzdC5jb250YWlucygnbm90LXZpc2libGUnKSkge1xuXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uZmlnQmFyLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3NhbGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XG4gICAgICAgICAgICAgIE51ZXZhIFZlbnRhPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcm9mb3JtYSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cbiAgICAgICAgICAgICAgTnVldmEgQ290aXphY2nDs248L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3ByZXNhbGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIFByZXZlbnRhPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtc2VhcmNoIGNvbC14cy0xMic+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQnVzY2FyLi4uJyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlJ1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxuXG4vLyBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmspXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIG1pZGRsZXdhcmUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgZmV0Y2hpbmcgZnJvbSAnLi4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyL3JlZHVjZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZldGNoaW5nLFxuICBsYXlvdXQsXG4gIHVzZXJcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0FMRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB1c2VyOiB7fSxcbiAgcHJvZmlsZToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHByb2ZpbGU6IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcblxuICAgIE51bWJlci5wcm90b3R5cGUuZm9ybWF0TW9uZXkgPSBmdW5jdGlvbihjLCBkLCB0KXtcbiAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG4gICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcbiAgICAgfTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvdXRpbHMvZm9ybWF0TW9uZXkuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2ZldGNpbmctY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy92ZW5kb3IvbG9hZGVycy9FY2xpcHNlLmdpZid9IC8+XG4gICAgICA8aDE+Q2FyZ2FuZG8gZWxlbWVudG9zPC9oMT5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4IiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgZmV0Y2hpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSElOR19TVEFSVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hJTkdfRE9ORSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiBmYWxzZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9