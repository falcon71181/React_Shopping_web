"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _button = _interopRequireDefault(require("./styled/button"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _InternalTooltip = _interopRequireDefault(require("../InternalTooltip"));

var _useDefaultTooltipConnector = _interopRequireDefault(require("../InternalTooltip/hooks/useDefaultTooltipConnector"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonIcon = _react["default"].forwardRef(function (props, ref) {
  var buttonRef = (0, _react.useRef)();
  var tooltipRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      get htmlElementRef() {
        return buttonRef;
      },

      get buttonRef() {
        return buttonRef;
      },

      focus: function focus() {
        buttonRef.current.focus();
      },
      click: function click() {
        buttonRef.current.click();
      },
      blur: function blur() {
        buttonRef.current.blur();
      }
    };
  });
  var title = props.title,
      type = props.type,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      focusInProps = props.onFocus,
      blurInProps = props.onBlur,
      assistiveText = props.assistiveText,
      ariaHaspopup = props.ariaHaspopup,
      ariaPressed = props.ariaPressed,
      style = props.style,
      id = props.id,
      ariaControls = props.ariaControls,
      ariaExpanded = props.ariaExpanded,
      icon = props.icon,
      form = props.form,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      mouseEnterInProps = props.onMouseEnter,
      mouseLeaveInProps = props.onMouseLeave,
      className = props.className,
      shaded = props.shaded,
      variant = props.variant,
      size = props.size,
      tooltip = props.tooltip,
      borderRadius = props.borderRadius;

  var _useDefaultTooltipCon = (0, _useDefaultTooltipConnector["default"])({
    tooltipRef: tooltipRef,
    triggerRef: function triggerRef() {
      return buttonRef;
    }
  }),
      onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
      onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
      onFocus = _useDefaultTooltipCon.onFocus,
      onBlur = _useDefaultTooltipCon.onBlur,
      isTooltipVisible = _useDefaultTooltipCon.isVisible;

  var handleMouseEnter = function handleMouseEnter(event) {
    onMouseEnter();
    mouseEnterInProps(event);
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    onMouseLeave();
    mouseLeaveInProps(event);
  };

  var handleOnFocus = function handleOnFocus(event) {
    onFocus();
    focusInProps(event);
  };

  var handleOnBlur = function handleOnBlur(event) {
    onBlur();
    blurInProps(event);
  };

  return _react["default"].createElement(_button["default"], {
    onMouseDown: onMouseDown,
    "data-id": "button-icon-element",
    id: id,
    className: className,
    shaded: shaded,
    variant: variant,
    size: size,
    style: style,
    disabled: disabled,
    tabIndex: tabIndex,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: onClick,
    title: title,
    type: type,
    "aria-haspopup": ariaHaspopup,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-pressed": ariaPressed,
    onKeyDown: onKeyDown,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    form: form,
    ref: buttonRef,
    borderRadius: borderRadius
  }, icon, _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: tooltip
  }, _react["default"].createElement(_InternalTooltip["default"], {
    triggerElementRef: function triggerElementRef() {
      return buttonRef;
    },
    isVisible: isTooltipVisible,
    preferredPosition: "top",
    ref: tooltipRef
  }, tooltip)));
});

ButtonIcon.propTypes = {
  icon: _propTypes["default"].node,
  variant: _propTypes["default"].oneOf(['base', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'border', 'border-filled', 'border-inverse', 'inverse']),
  size: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  shaded: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset']),
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  tooltip: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  assistiveText: _propTypes["default"].string,
  ariaControls: _propTypes["default"].string,
  ariaExpanded: _propTypes["default"].bool,
  ariaHaspopup: _propTypes["default"].bool,
  ariaPressed: _propTypes["default"].bool,
  form: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonIcon.defaultProps = {
  icon: null,
  variant: 'base',
  size: 'medium',
  shaded: false,
  title: undefined,
  type: 'button',
  disabled: false,
  tabIndex: undefined,
  tooltip: undefined,
  onClick: function onClick() {},
  onMouseDown: function onMouseDown() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  assistiveText: undefined,
  ariaHaspopup: undefined,
  className: undefined,
  ariaPressed: undefined,
  style: undefined,
  id: undefined,
  ariaControls: undefined,
  ariaExpanded: undefined,
  form: undefined,
  borderRadius: 'rounded'
};
var _default = ButtonIcon;
exports["default"] = _default;