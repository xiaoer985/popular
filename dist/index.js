"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ReactBootstrap = _interopRequireWildcard(require("react-bootstrap"));

require("lazysizes");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ListGroup = ReactBootstrap.ListGroup;
var Spinner = ReactBootstrap.Spinner;
var Alert = ReactBootstrap.Alert;
var Container = ReactBootstrap.Container;
var Nav = ReactBootstrap.Nav;
var Card = ReactBootstrap.Card;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button; // import {Spinner,} from 'react-bootstrap'

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }

  return null; //console.log('Query variable %s not found', variable);
}

console.log('lanuage is : ' + getQueryVariable('language'));

var Header = function Header(props) {
  var menuItems = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'c#'];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Nav, {
    className: "justify-content-center",
    variant: "pills",
    activeKey: props.activeKey || 'All',
    onSelect: function onSelect(selectedKey) {
      return props.onClick(selectedKey);
    }
  }, menuItems.map(function (item, key) {
    return /*#__PURE__*/_react["default"].createElement(Nav.Item, {
      key: key
    }, /*#__PURE__*/_react["default"].createElement(Nav.Link, {
      eventKey: item
    }, item));
  }))));
};

var Content = function Content(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Container, null, props.children));
};

var Footer = function Footer(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Container, null, props.children));
};

var RepoCard = function RepoCard(props) {
  return /*#__PURE__*/_react["default"].createElement(Card, {
    border: "success",
    style: {
      marginTop: '8px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(Card.Header, {
    className: "text-center"
  }, props.no), /*#__PURE__*/_react["default"].createElement(Card.Body, null, /*#__PURE__*/_react["default"].createElement(Card.Img, {
    src: "images/image.png",
    "data-src": props.img,
    className: "lazyload"
  }), /*#__PURE__*/_react["default"].createElement(Card.Title, {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(Card.Link, {
    href: props.url,
    target: "_blank"
  }, props.title)), /*#__PURE__*/_react["default"].createElement(Card.Text, null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-user fa-lg fa-fw",
    style: {
      color: 'orange'
    }
  }), props.author), /*#__PURE__*/_react["default"].createElement(Card.Text, null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-star fa-lg fa-fw",
    style: {
      color: 'yellow'
    }
  }), props.stars), /*#__PURE__*/_react["default"].createElement(Card.Text, null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-code-fork fa-lg fa-fw",
    style: {
      color: 'lightblue'
    }
  }), props.forks), /*#__PURE__*/_react["default"].createElement(Card.Text, null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-warning fa-lg fa-fw",
    style: {
      color: 'purple'
    }
  }), props.issues)));
};

var App = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleNavClick", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var type,
          page,
          pushState,
          cards,
          url,
          beforeState,
          res,
          newCards,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'all';
              page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
              pushState = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
              cards = _this.state.cards;
              console.log('type', type);
              url = '';
              _context.t0 = type;
              _context.next = _context.t0 === 'Javascript' ? 9 : _context.t0 === 'Ruby' ? 11 : _context.t0 === 'Java' ? 13 : _context.t0 === 'Css' ? 15 : 17;
              break;

            case 9:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 11:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 13:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 15:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories';
              return _context.abrupt("break", 18);

            case 17:
              url = 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories';

            case 18:
              url = "".concat(url, "&page=").concat(page, "&per_page=10");
              _context.prev = 19;
              beforeState = {
                type: type,
                loading: true,
                error: null,
                lang: type
              };

              if (page === 1) {
                beforeState.cards = [];
              }

              if (pushState) {
                window.history.pushState('', '', "?language=".concat(type));
              } //window.location.search = `?language=${type}`


              _this.setState(beforeState);

              _context.next = 26;
              return _axios["default"].get(url);

            case 26:
              res = _context.sent;

              /* {
                  headers: {
                      'Authorization': 'token 23d18f1250269da629df6cdf1243c0203da72d04'
                  }
              })*/
              console.log('res', res.data);
              newCards = res.data.items.map(function (item, key) {
                return {
                  no: '#' + (page === 1 ? 1 + key : cards.length + 1 + key),
                  img: item.owner.avatar_url,
                  title: item.full_name,
                  author: item.owner.login,
                  stars: item.stargazers_count,
                  forks: item.forks,
                  issues: item.open_issues,
                  url: item.html_url
                };
              });

              if (page > 1) {
                _this.setState(function (state, props) {
                  return {
                    cards: [].concat((0, _toConsumableArray2["default"])(state.cards), (0, _toConsumableArray2["default"])(newCards)),
                    loading: false,
                    page: page
                  };
                });
              } else {
                _this.setState({
                  cards: newCards,
                  loading: false,
                  page: page
                });
              }

              _context.next = 35;
              break;

            case 32:
              _context.prev = 32;
              _context.t1 = _context["catch"](19);

              _this.setState({
                loading: false,
                error: _context.t1
              });

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[19, 32]]);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMore", function () {
      var _this$state = _this.state,
          type = _this$state.type,
          page = _this$state.page;

      _this.handleNavClick(type, page + 1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePopState", function (params) {
      var lang = getQueryVariable('language');

      _this.handleNavClick(lang, _this.state.page, false);

      console.log('lang', lang);
      console.log('params', params);
    });
    var _cards = [];
    _this.state = {
      cards: _cards,
      loading: false,
      error: null,
      type: 'all',
      page: 1
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var lang = getQueryVariable('language');
      this.handleNavClick(lang); //  this.setState({lang})

      window.addEventListener('popstate', this.handlePopState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('popstate', this.handlePopState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          cards = _this$state2.cards,
          loading = _this$state2.loading,
          error = _this$state2.error,
          lang = _this$state2.lang;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement(Header, {
        onClick: this.handleNavClick,
        activeKey: lang
      }), /*#__PURE__*/_react["default"].createElement(Content, null, /*#__PURE__*/_react["default"].createElement(Row, {
        className: "justify-content-around"
      }, cards.map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement(Col, {
          sm: 6,
          md: 4,
          lg: 3,
          key: key
        }, /*#__PURE__*/_react["default"].createElement(RepoCard, {
          no: item.no,
          img: item.img,
          title: item.title,
          author: item.author,
          stars: item.stars,
          forks: item.forks,
          issues: item.issues,
          url: item.url
        }));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, error && /*#__PURE__*/_react["default"].createElement(Alert, {
        variant: "danger"
      }, error.response.status, " ", error.response.statusText)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: this.loadMore,
        disabled: loading
      }, " ", loading && /*#__PURE__*/_react["default"].createElement(Spinner, {
        as: "span",
        animation: "grow",
        size: "sm",
        role: "status",
        "aria-hidden": "true"
      }), " \u52A0\u8F7D\u66F4\u591A"))), /*#__PURE__*/_react["default"].createElement(Footer, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, "\u7248\u6743\u6240\u6709 \xA9"))));
    }
  }]);
  return App;
}(_react["default"].Component);

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('container'));