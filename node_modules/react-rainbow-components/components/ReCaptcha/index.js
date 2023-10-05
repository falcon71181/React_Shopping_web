"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAsyncScriptLoader = _interopRequireDefault(require("react-async-script-loader"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _getUrl = _interopRequireDefault(require("./getUrl"));

var _wrapper = _interopRequireDefault(require("./wrapper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ReCaptcha = function (_Component) {
  (0, _inherits2["default"])(ReCaptcha, _Component);

  var _super = _createSuper(ReCaptcha);

  function ReCaptcha(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ReCaptcha);
    _this = _super.call(this, props);
    var lang = props.lang;
    _this.ReCaptchaComponent = (0, _reactAsyncScriptLoader["default"])((0, _getUrl["default"])(lang))(_wrapper["default"]);
    return _this;
  }

  (0, _createClass2["default"])(ReCaptcha, [{
    key: "reset",
    value: function reset() {
      if (window.grecaptcha && this.optWidgetID) {
        window.grecaptcha.reset(this.optWidgetID);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var ReCaptchaComponent = this.ReCaptchaComponent;
      return _react["default"].createElement(ReCaptchaComponent, (0, _extends2["default"])({}, this.props, {
        onCreateRecaptcha: function onCreateRecaptcha(optWidgetID) {
          _this2.optWidgetID = optWidgetID;
        }
      }));
    }
  }]);
  return ReCaptcha;
}(_react.Component);

ReCaptcha.propTypes = {
  siteKey: _propTypes["default"].string.isRequired,
  lang: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['light', 'dark']),
  size: _propTypes["default"].oneOf(['normal', 'compact']),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
ReCaptcha.defaultProps = {
  lang: undefined,
  theme: 'light',
  size: 'normal',
  tabIndex: 0,
  error: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};

var _default = (0, _withReduxForm["default"])(ReCaptcha);

exports["default"] = _default;