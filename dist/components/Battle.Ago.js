"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _axios = _interopRequireDefault(require("axios"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BatteAgo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BatteAgo, _React$Component);

  var _super = _createSuper(BatteAgo);

  function BatteAgo(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BatteAgo);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "userChange", function (ev) {
      ev.persist();

      _this.setState({
        userName1: ev.target.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "userChange2", function (ev) {
      ev.persist();

      _this.setState({
        userName2: ev.target.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "userSubmit", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.state.userName1 === '')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.setState({
                loadKey1: true,
                bKey1: 0
              });

              _context.next = 5;
              return _axios["default"].get("https://api.github.com/search/repositories?q=".concat(_this.state.userName1, "&order=desc&sort=stars")).then(function (res) {
                // console.log("数据1", res);
                _this.setState({
                  userItem1: res.data.items[0],
                  oneKey: 1,
                  loadKey1: false,
                  bKey1: 1
                });
              })["catch"](function (err) {
                console.error(err);
              });

            case 5:
              _this.props.getChildData(_this.state);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "twoSubmit", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.state.userName2 === '')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _this.setState({
                loadKey2: true,
                bKey2: 0
              });

              _context2.next = 5;
              return _axios["default"].get("https://api.github.com/search/repositories?q=".concat(_this.state.userName2, "&order=desc&sort=stars")).then(function (res) {
                _this.setState({
                  userItem2: res.data.items[0],
                  twoKey: 1,
                  loadKey2: false,
                  bKey2: 1
                });
              })["catch"](function (err) {
                console.error(err); // alert("API调用失败，重新刷新试试")
              });

            case 5:
              _this.props.getChildData(_this.state);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selKey1", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.setState({
                oneKey: 0,
                userName1: ""
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selKey2", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.setState({
                twoKey: 0,
                userName2: ""
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    _this.state = {
      userName1: "",
      userName2: "",
      userItem1: [],
      userItem2: [],
      oneKey: 0,
      twoKey: 0,
      loadKey1: false,
      loadKey2: false,
      bKey1: 1,
      bKey2: 1
    };
    return _this;
  }

  (0, _createClass2["default"])(BatteAgo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "instrutions"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, "Instrutions"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h5", null, "Enter Two Users"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "a",
        style: {
          color: "#e06c75"
        },
        icon: _freeSolidSvgIcons.faPeopleArrows
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h5", null, "Battle"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "a",
        style: {
          color: "#ec981d"
        },
        icon: _freeSolidSvgIcons.faBalanceScale
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("h5", null, "See The Winner"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "a",
        style: {
          color: "#e06c75"
        },
        icon: _freeSolidSvgIcons.faTrophy
      })))), /*#__PURE__*/_react["default"].createElement("h2", null, "Players")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "players"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "player1"
      }, this.state.oneKey ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "submit1"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: 0 ? "".concat(this.state.userItem1.owner.avatar_url, "?size=200") : "https://github.com/".concat(this.state.userName1, ".png?size=200"),
        alt: "API\u51FA\u4E86\u70B9\u95EE\u9898"
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.state.userName1), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "b",
        icon: _freeSolidSvgIcons.faWindowClose,
        onClick: this.selKey1
      })) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "input"
      }, /*#__PURE__*/_react["default"].createElement("h4", null, "palyers one"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Github UserName",
        value: this.state.userName1,
        onChange: this.userChange,
        onKeyDown: function onKeyDown() {
          if (window.event.keyCode === 13) {
            _this2.userSubmit();
          }
        }
      }), this.state.userName1 !== "" && this.state.bKey1 ? /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: this.userSubmit
      }, "submit") : /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        disabled: "disabled",
        style: {
          backgroundColor: "#6495d0"
        }
      }, "Input.."), this.state.loadKey1 ? /*#__PURE__*/_react["default"].createElement("h5", {
        style: {
          textAlign: 'center'
        },
        className: "loading"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSpinner,
        spin: true,
        style: {
          fontSize: '30px'
        }
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "sr-only"
      }, "Loading...")) : /*#__PURE__*/_react["default"].createElement("span", null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "player2"
      }, this.state.twoKey ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "submit1"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: 0 ? "".concat(this.state.userItem2.owner.avatar_url, "?size=200") : "https://github.com/".concat(this.state.userName2, ".png?size=200"),
        alt: "API\u51FA\u4E86\u70B9\u95EE\u9898"
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.state.userName2), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "b",
        icon: _freeSolidSvgIcons.faWindowClose,
        onClick: this.selKey2
      })) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "input"
      }, /*#__PURE__*/_react["default"].createElement("h4", null, "palyers two"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Github UserName",
        value: this.state.userName2,
        onChange: this.userChange2,
        onKeyDown: function onKeyDown() {
          if (window.event.keyCode === 13) {
            _this2.twoSubmit();
          }
        }
      }), this.state.userName2 !== "" && this.state.bKey2 ? /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: this.twoSubmit
      }, "submit") : /*#__PURE__*/_react["default"].createElement("button", {
        disabled: "disabled",
        type: "button",
        style: {
          backgroundColor: "#6495d0"
        }
      }, "Input.."), this.state.loadKey2 ? /*#__PURE__*/_react["default"].createElement("h5", {
        style: {
          textAlign: 'center'
        },
        className: "loading"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSpinner,
        spin: true,
        style: {
          fontSize: '30px'
        }
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "sr-only"
      }, "Loading...")) : /*#__PURE__*/_react["default"].createElement("span", null)))));
    }
  }]);
  return BatteAgo;
}(_react["default"].Component);

exports["default"] = BatteAgo;