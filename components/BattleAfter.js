"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BatteAfter = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BatteAfter, _React$Component);

  var _super = _createSuper(BatteAfter);

  function BatteAfter() {
    (0, _classCallCheck2["default"])(this, BatteAfter);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(BatteAfter, [{
    key: "render",
    value: function render() {
      var _this = this;

      var LiSyle = {
        width: '100%',
        textAlign: 'left',
        paddingLeft: '15%',
        boxSizing: 'border-box',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px' // height:'4%',
        // overflow: "hidden"

      };
      var one = "";
      var two = "";

      var win = function win() {
        if (_this.props.Item1.stargazers_count && _this.props.Item2.stargazers_count) {
          if (_this.props.Item1.stargazers_count > _this.props.Item2.stargazers_count) {
            one = "Winning";
            two = "Failed";
          } else {
            two = "Winning";
            one = "Failed";
          }
        }
      };

      win();
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "result"
      }, /*#__PURE__*/_react["default"].createElement("li", {
        style: {
          width: '22%',
          backgroundColor: ' #efefef',
          marginBottom: '20px',
          textAlign: 'center',
          borderRadius: ' 5%'
        }
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        style: {
          color: '#2c95b6'
        }
      }, one), /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          height: '210px'
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        height: "100%",
        src: this.props.Name1 ? "https://github.com/".concat(this.props.Name1, ".png?size=200") : "./img/1.png",
        alt: "\u7CDF\u7CD5\uFF0CAPI\u51FA\u4E86\u70B9\u95EE\u9898"
      })), /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          marginTop: '30px',
          height: '60px',
          width: '308px',
          color: '#c72f32',
          display: 'table-cell',
          verticalAlign: 'middle'
        }
      }, this.props.Name1), /*#__PURE__*/_react["default"].createElement("ul", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUserCircle,
        style: {
          color: '#0a84ff',
          overflow: 'hidden'
        }
      }), "\xA0", this.props.Item1.name ? this.props.Item1.name : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt,
        style: {
          color: '#12ba1d'
        }
      }), "\xA0 ", this.props.Item1.forks_count ? this.props.Item1.forks_count : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faStar,
        style: {
          color: '#86c5f4'
        }
      }), "\xA0", this.props.Item1.stargazers_count ? this.props.Item1.stargazers_count : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faExclamationTriangle,
        style: {
          color: '#f09fa6'
        }
      }), "\xA0", this.props.Item1.open_issues_count ? this.props.Item1.open_issues_count : "稍等哈，马上就加载出来"))), /*#__PURE__*/_react["default"].createElement("li", {
        style: {
          width: '22%',
          backgroundColor: ' #efefef',
          marginBottom: '20px',
          textAlign: 'center',
          borderRadius: ' 5%'
        }
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        style: {
          color: '#2c95b6'
        }
      }, two), /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          height: '210px'
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        height: "100%",
        src: this.props.Name2 ? "https://github.com/".concat(this.props.Name2, ".png?size=200") : "./img/1.png",
        alt: "\u7CDF\u7CD5\uFF0CAPI\u51FA\u4E86\u70B9\u95EE\u9898"
      })), /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          marginTop: '30px',
          height: '60px',
          width: '308px',
          color: '#c72f32',
          display: 'table-cell',
          verticalAlign: 'middle'
        }
      }, this.props.Name2), /*#__PURE__*/_react["default"].createElement("ul", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUserCircle,
        style: {
          color: '#0a84ff',
          overflow: 'hidden'
        }
      }), "\xA0", this.props.Item2.name ? this.props.Item2.name : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faShareAlt,
        style: {
          color: '#12ba1d'
        }
      }), "\xA0 ", this.props.Item2.forks_count ? this.props.Item2.forks_count : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faStar,
        style: {
          color: '#86c5f4'
        }
      }), "\xA0", this.props.Item2.stargazers_count ? this.props.Item2.stargazers_count : "稍等哈，马上就加载出来"), /*#__PURE__*/_react["default"].createElement("li", {
        style: LiSyle
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faExclamationTriangle,
        style: {
          color: '#f09fa6'
        }
      }), "\xA0", this.props.Item2.open_issues_count ? this.props.Item2.open_issues_count : "稍等哈，马上就加载出来"))));
    }
  }]);
  return BatteAfter;
}(_react["default"].Component);

exports["default"] = BatteAfter;