"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withReduxForm;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["error", "input", "meta"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function withReduxForm(WrappedComponent) {
  return function (_Component) {
    (0, _inherits2["default"])(_class, _Component);

    var _super = _createSuper(_class);

    function _class(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, _class);
      _this = _super.call(this, props);
      _this.fieldRef = _react["default"].createRef();
      return _this;
    }

    (0, _createClass2["default"])(_class, [{
      key: "getErrorMessage",
      value: function getErrorMessage() {
        var _this$props = this.props,
            meta = _this$props.meta,
            error = _this$props.error;

        if (meta) {
          var touched = meta.touched,
              submitFailed = meta.submitFailed,
              metaError = meta.error;

          if ((touched || submitFailed) && metaError) {
            return metaError;
          }
        }

        return error;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.fieldRef.current.focus();
      }
    }, {
      key: "click",
      value: function click() {
        this.fieldRef.current.click();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.fieldRef.current.blur();
      }
    }, {
      key: "reset",
      value: function reset() {
        this.fieldRef.current.reset();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            error = _this$props2.error,
            input = _this$props2.input,
            meta = _this$props2.meta,
            rest = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, rest, input, {
          error: this.getErrorMessage(),
          dirty: meta && meta.dirty,
          ref: this.fieldRef
        }));
      }
    }]);
    return _class;
  }(_react.Component);
}