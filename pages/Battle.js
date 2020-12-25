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

var _axios = _interopRequireDefault(require("axios"));

var _reactRouterDom = require("react-router-dom");

var _BattleAfter = _interopRequireDefault(require("@/components/BattleAfter"));

var _BattleAgo = _interopRequireDefault(require("@/components/BattleAgo"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Battle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Battle, _React$Component);

  var _super = _createSuper(Battle);

  function Battle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Battle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getNewData1", function () {
      _axios["default"].get("https://api.github.com/search/repositories?q=".concat(_this.state.userName1, "&order=desc&sort=stars")).then(function (res) {
        _this.setState({
          userItem1: res.data.items[0]
        });
      })["catch"](function (err) {
        console.error(err); // alert("API调用失败，重新刷新试试")
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getNewData2", function () {
      _axios["default"].get("https://api.github.com/search/repositories?q=".concat(_this.state.userName2, "&order=desc&sort=stars")).then(function (res) {
        _this.setState({
          userItem2: res.data.items[0]
        });
      })["catch"](function (err) {
        console.error(err); // alert("API调用失败，重新刷新试试")
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getData", function (data) {
      var userName1 = data.userName1,
          userName2 = data.userName2,
          userItem1 = data.userItem1,
          userItem2 = data.userItem2,
          oneKey = data.oneKey,
          twoKey = data.twoKey;

      _this.setState({
        userName1: userName1,
        userName2: userName2,
        userItem1: userItem1,
        userItem2: userItem2,
        oneKey: oneKey,
        twoKey: twoKey
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openBattle", function () {
      if (_this.state.openKey) {
        _this.setState({
          openKey: 0,
          oneKey: 0,
          twoKey: 0
        });
      } else {
        _this.setState({
          openKey: 1
        });
      }
    });
    _this.state = {
      userName1: "",
      userName2: "",
      userItem1: [],
      userItem2: [],
      openKey: 0,
      oneKey: 0,
      twoKey: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(Battle, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var arr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.props.match.params.user) {
                  _context.next = 6;
                  break;
                }

                arr = this.props.match.params.user.split("&");
                _context.next = 4;
                return this.setState({
                  userName1: arr[0],
                  userName2: arr[1],
                  openKey: 1,
                  oneKey: 1,
                  twoKey: 1
                });

              case 4:
                this.getNewData1();
                this.getNewData2();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "battle"
      }, this.state.openKey ? /*#__PURE__*/_react["default"].createElement(_BattleAfter["default"], {
        Name1: this.state.userName1,
        Name2: this.state.userName2,
        Item1: this.state.userItem1,
        Item2: this.state.userItem2
      }) : /*#__PURE__*/_react["default"].createElement(_BattleAgo["default"], {
        getChildData: this.getData
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, this.state.oneKey && this.state.twoKey ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: this.state.openKey ? "/battle" : "/battle/".concat(this.state.userName1, "&").concat(this.state.userName2)
        }
      }, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: this.openBattle
      }, this.state.openKey ? "GOBACK" : "BATTLE"))) : null));
    }
  }]);
  return Battle;
}(_react["default"].Component); // name1={this.state.auserName1} name2={this.state.auserName2} oneDate={this.state.auserItem1} twoDate={this.state.auserItem2}


exports["default"] = Battle;