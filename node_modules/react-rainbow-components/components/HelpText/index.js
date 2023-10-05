"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("@rainbow-modules/hooks");

var _hooks2 = require("../../libs/hooks");

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _constants = require("../../libs/constants");

var _styled = require("./styled");

var _icons = require("./icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iconMap = {
  question: _icons.QuestionIcon,
  info: _icons.InfoIcon,
  error: _icons.ErrorIcon,
  warning: _icons.WarningIcon
};
var inverseIconMap = {
  question: _react["default"].createElement(_icons.QuestionInverseIcon, null),
  info: _react["default"].createElement(_icons.InfoInverseIcon, null),
  error: _react["default"].createElement(_icons.ErrorInverseIcon, null),
  warning: _react["default"].createElement(_icons.WarningInverseIcon, null)
};

var HelpText = _react["default"].forwardRef(function (props, ref) {
  var id = props.id,
      title = props.title,
      text = props.text,
      variant = props.variant,
      tabIndex = props.tabIndex,
      iconSize = props.iconSize,
      className = props.className,
      style = props.style;
  var triggerRef = (0, _react.useRef)();
  var helpTextId = (0, _hooks2.useUniqueIdentifier)('help-text');

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var isHoverTooltip = (0, _react.useRef)(false);
  var isClickTooltip = (0, _react.useRef)(false);

  var _useDisclosure = (0, _hooks2.useDisclosure)(false),
      isOpen = _useDisclosure.isOpen,
      openOverlay = _useDisclosure.open,
      closeOverlay = _useDisclosure.close;

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      close: closeOverlay
    };
  });
  (0, _react.useEffect)(function () {
    if (isFocused) {
      openOverlay();
    } else {
      closeOverlay();
    }
  }, [closeOverlay, isFocused, openOverlay]);
  (0, _hooks2.useWindowResize)(function () {
    return closeOverlay();
  }, isOpen);
  (0, _hooks.useWindowScrolling)(closeOverlay, isOpen);

  var handleBlur = function handleBlur() {
    if (!isClickTooltip.current) {
      setIsFocused(false);
    }
  };

  var handleButtonMouseLeave = function handleButtonMouseLeave() {
    if (!isFocused) {
      setTimeout(function () {
        if (!isHoverTooltip.current) closeOverlay();
      }, 50);
    }
  };

  var handleTooltipMouseDown = function handleTooltipMouseDown() {
    isClickTooltip.current = true;
  };

  var handleTooltipMouseUp = function handleTooltipMouseUp() {
    isClickTooltip.current = false;
    setTimeout(function () {
      return triggerRef.current.focus();
    });
  };

  var handleTooltipMouseEnter = function handleTooltipMouseEnter() {
    isHoverTooltip.current = true;
  };

  var handleTooltipMouseLeave = function handleTooltipMouseLeave() {
    isHoverTooltip.current = false;

    if (!isFocused) {
      closeOverlay();
    }
  };

  var handleKeyPressed = function handleKeyPressed(event) {
    if (event.keyCode === _constants.ESCAPE_KEY) {
      event.preventDefault();
      closeOverlay();
    }
  };

  var Icon = iconMap[variant] || iconMap.info;
  var inverseIcon = inverseIconMap[variant] || inverseIconMap.info;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styled.StyledButton, {
    id: id,
    className: className,
    style: style,
    ref: triggerRef,
    onMouseEnter: openOverlay,
    onMouseLeave: handleButtonMouseLeave,
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: handleBlur,
    onKeyDown: handleKeyPressed,
    type: "button",
    tabIndex: tabIndex,
    ariaLabelledby: helpTextId,
    variant: variant,
    iconSize: iconSize
  }, _react["default"].createElement(Icon, {
    isFocused: isFocused,
    iconSize: iconSize
  }), _react["default"].createElement(_AssistiveText["default"], {
    text: variant
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: text
  }, _react["default"].createElement(_InternalOverlay["default"], {
    isVisible: isOpen,
    render: function render() {
      return _react["default"].createElement(_styled.StyledTooltip, {
        id: helpTextId,
        role: "tooltip",
        onMouseDown: handleTooltipMouseDown,
        onMouseUp: handleTooltipMouseUp,
        onMouseEnter: handleTooltipMouseEnter,
        onMouseLeave: handleTooltipMouseLeave
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: title
      }, _react["default"].createElement(_styled.StyledTitle, {
        variant: variant
      }, _react["default"].createElement(_styled.StyledIconContainer, null, inverseIcon), title)), _react["default"].createElement(_styled.StyledText, null, text));
    },
    triggerElementRef: triggerRef
  })));
});

HelpText.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  title: _propTypes["default"].string,
  text: _propTypes["default"].node,
  variant: _propTypes["default"].oneOf(['question', 'info', 'error', 'warning']),
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  iconSize: _propTypes["default"].oneOf(['small', 'medium'])
};
HelpText.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  title: undefined,
  text: undefined,
  variant: 'info',
  tabIndex: undefined,
  iconSize: 'medium'
};
var _default = HelpText;
exports["default"] = _default;