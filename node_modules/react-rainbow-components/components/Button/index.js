"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _content = _interopRequireDefault(require("./content"));

var _button = _interopRequireDefault(require("./styled/button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Button = function (_Component) {
  (0, _inherits2["default"])(Button, _Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Button);
    _this = _super.call(this, props);
    _this.buttonRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Button, [{
    key: "htmlElementRef",
    get: function get() {
      return this.buttonRef;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          isLoading = _this$props.isLoading;
      return disabled || isLoading;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.buttonRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.buttonRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.buttonRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          label = _this$props2.label,
          children = _this$props2.children,
          tabIndex = _this$props2.tabIndex,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onClick = _this$props2.onClick,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseLeave = _this$props2.onMouseLeave,
          title = _this$props2.title,
          type = _this$props2.type,
          ariaHaspopup = _this$props2.ariaHaspopup,
          id = _this$props2.id,
          isLoading = _this$props2.isLoading,
          variant = _this$props2.variant,
          shaded = _this$props2.shaded,
          ariaPressed = _this$props2.ariaPressed,
          ariaControls = _this$props2.ariaControls,
          ariaExpanded = _this$props2.ariaExpanded,
          onKeyDown = _this$props2.onKeyDown,
          form = _this$props2.form,
          className = _this$props2.className,
          size = _this$props2.size,
          borderRadius = _this$props2.borderRadius;
      return _react["default"].createElement(_button["default"], {
        "data-id": "button-element",
        id: id,
        className: className,
        style: style,
        variant: variant,
        isLoading: isLoading,
        shaded: shaded,
        disabled: this.isDisabled(),
        tabIndex: tabIndex,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        title: title,
        type: type,
        "aria-haspopup": ariaHaspopup,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        "aria-pressed": ariaPressed,
        onKeyDown: onKeyDown,
        form: form,
        ref: this.buttonRef,
        size: size,
        borderRadius: borderRadius
      }, _react["default"].createElement(_content["default"], {
        variant: variant,
        label: label,
        isLoading: isLoading,
        size: size
      }, children));
    }
  }]);
  return Button;
}(_react.Component);

exports["default"] = Button;
Button.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node,
  variant: _propTypes["default"].oneOf(['base', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'border', 'border-filled', 'inverse', 'border-inverse']),
  shaded: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset']),
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  ariaHaspopup: _propTypes["default"].bool,
  ariaControls: _propTypes["default"].string,
  ariaExpanded: _propTypes["default"].bool,
  ariaPressed: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Button.defaultProps = {
  label: undefined,
  children: null,
  variant: 'neutral',
  shaded: false,
  title: undefined,
  type: 'button',
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  ariaHaspopup: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  isLoading: false,
  ariaPressed: undefined,
  ariaControls: undefined,
  ariaExpanded: undefined,
  form: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};