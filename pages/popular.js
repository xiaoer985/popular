"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _Top = _interopRequireDefault(require("@/components/Top"));

var _Content = _interopRequireDefault(require("@/components/Content"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Popoular = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Popoular, _React$Component);

  var _super = _createSuper(Popoular);

  function Popoular(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popoular);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getList", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var nUrl;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nUrl = "q=stars:>1&sort=stars&order=desc&type=Repositories";

                if (data) {
                  nUrl = data;
                } else if (_this.props.match.params.src) {
                  nUrl = _this.props.match.params.src;
                } else {
                  nUrl = "q=stars:>1&sort=stars&order=desc&type=Repositories";
                }

                _this.setState({
                  url: nUrl,
                  caseArr: [],
                  loading: true,
                  page: 1
                });

                _context.next = 5;
                return _axios["default"].get("https://api.github.com/search/repositories?".concat(nUrl)).then(function (res) {
                  _this.setState({
                    caseArr: res.data.items
                  });
                })["catch"](function (err) {
                  console.error(err);
                  alert("API调用失败，重新刷新试试");
                });

              case 5:
                _this.setState({
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nextPage", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(page) {
        var _this$state, url, caseArr, nextUrl;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$state = _this.state, url = _this$state.url, caseArr = _this$state.caseArr;
                nextUrl = "https://api.github.com/search/repositories?".concat(url, "&page=").concat(page);

                _this.setState({
                  loading: true
                });

                _context2.next = 5;
                return _axios["default"].get(nextUrl).then(function (res) {
                  _this.setState({
                    caseArr: [].concat((0, _toConsumableArray2["default"])(caseArr), (0, _toConsumableArray2["default"])(res.data.items)),
                    loading: false,
                    btn: true
                  });
                })["catch"](function (err) {
                  console.error(err);
                  alert("API调用失败，重新刷新试试");
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this.state = {
      url: 'q=stars:>1&sort=stars&order=desc&type=Repositories',
      caseArr: [],
      loading: false,
      page: 1,
      btn: true
    };
    return _this;
  }

  (0, _createClass2["default"])(Popoular, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getList();
      window.addEventListener('scroll', function () {
        var clientHeight = document.documentElement.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight;
        var scrollTop = document.documentElement.scrollTop;

        if (scrollTop + clientHeight >= scrollHeight - 5 && _this2.state.btn) {
          var page = _this2.state.page;
          var newPage = page + 1;

          _this2.setState({
            page: newPage,
            btn: false
          });

          _this2.nextPage(newPage);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          caseArr = _this$state2.caseArr,
          loading = _this$state2.loading;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Top["default"], {
        getArr: this.getList,
        btnkey: this.state.url
      }), /*#__PURE__*/_react["default"].createElement(_Content["default"], {
        msg: caseArr,
        loading: loading
      }));
    }
  }]);
  return Popoular;
}(_react["default"].Component);

exports["default"] = Popoular;