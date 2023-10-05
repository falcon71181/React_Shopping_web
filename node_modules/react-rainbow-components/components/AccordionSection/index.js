"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _context = require("../Accordion/context");

var _rightArrow = _interopRequireDefault(require("./rightArrow"));

var _helpers = require("./helpers");

var _li = _interopRequireDefault(require("./styled/li"));

var _summary = _interopRequireDefault(require("./styled/summary"));

var _heading = _interopRequireDefault(require("./styled/heading"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var _content = _interopRequireDefault(require("./styled/content"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _span = _interopRequireDefault(require("./styled/span"));

var _useUniqueIdentifier = _interopRequireDefault(require("../../libs/hooks/useUniqueIdentifier"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var contextDefault = {
  privateRegisterAccordionSection: function privateRegisterAccordionSection() {},
  privateUnregisterAccordionSection: function privateUnregisterAccordionSection() {}
};

var AccordionSection = function AccordionSection(props) {
  var _useContext;

  var style = props.style,
      disabled = props.disabled,
      children = props.children,
      label = props.label,
      icon = props.icon,
      assistiveText = props.assistiveText,
      className = props.className,
      variant = props.variant,
      name = props.name;

  var _ref = (_useContext = (0, _react.useContext)(_context.AccordionContext)) !== null && _useContext !== void 0 ? _useContext : contextDefault,
      activeNames = _ref.activeNames,
      multiple = _ref.multiple,
      privateOnToggleSection = _ref.privateOnToggleSection,
      privateOnFocusSection = _ref.privateOnFocusSection,
      privateRegisterAccordionSection = _ref.privateRegisterAccordionSection,
      privateUnregisterAccordionSection = _ref.privateUnregisterAccordionSection,
      privateOnKeyPressed = _ref.privateOnKeyPressed;

  var containerRef = (0, _react.useRef)();
  var buttonRef = (0, _react.useRef)();
  var uniqueName = (0, _useUniqueIdentifier["default"])('accordion-section');
  var accordionDetailsId = (0, _useUniqueIdentifier["default"])('accordion-section-details');
  var currentName = name || uniqueName;
  (0, _react.useEffect)(function () {
    if (!disabled) {
      privateRegisterAccordionSection({
        id: currentName,
        ref: containerRef.current,
        focusButton: function focusButton() {
          return buttonRef.current.focus();
        }
      });
    }

    return function () {
      if (!disabled) {
        privateUnregisterAccordionSection(currentName);
      }
    };
  }, []);
  var isExpanded = (0, _helpers.getIsExpanded)({
    multiple: multiple,
    activeNames: activeNames,
    currentName: currentName
  });

  var resolveActiveNamesWhenMultiple = function resolveActiveNamesWhenMultiple() {
    if (activeNames === undefined) {
      return [currentName];
    }

    if ((0, _helpers.isInArray)(activeNames, currentName)) {
      return activeNames.filter(function (element) {
        return element !== currentName;
      });
    }

    return [].concat((0, _toConsumableArray2["default"])(activeNames), [currentName]);
  };

  var resolveActiveNames = function resolveActiveNames() {
    if (multiple) {
      return resolveActiveNamesWhenMultiple();
    }

    if (currentName === activeNames) {
      return '';
    }

    return currentName;
  };

  var handleToggleSection = function handleToggleSection(event) {
    if (!disabled) {
      privateOnToggleSection(event, resolveActiveNames());
    }
  };

  var handleFocusSection = function handleFocusSection() {
    if (!disabled) {
      privateOnFocusSection(currentName);
    }
  };

  var handleKeyPressed = function handleKeyPressed(event) {
    if (!disabled) {
      privateOnKeyPressed(event);
    }
  };

  return _react["default"].createElement(_li["default"], {
    "data-id": "accordion-section-li",
    className: className,
    style: style,
    disabled: disabled,
    variant: variant,
    isExpanded: isExpanded,
    ref: containerRef
  }, _react["default"].createElement(_summary["default"], {
    "data-id": "accordion-section-summary",
    isExpanded: isExpanded,
    variant: variant,
    disabled: disabled,
    onClick: handleToggleSection,
    onFocus: handleFocusSection,
    onKeyDown: handleKeyPressed,
    "aria-controls": accordionDetailsId,
    "aria-expanded": isExpanded,
    type: "button",
    ref: buttonRef
  }, _react["default"].createElement(_rightArrow["default"], {
    isExpanded: isExpanded,
    disabled: disabled
  }), _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  }), _react["default"].createElement(_heading["default"], {
    disabled: disabled
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_icon["default"], null, icon)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_span["default"], {
    "data-id": "accordion-section-label"
  }, label)))), _react["default"].createElement(_content["default"], {
    "data-id": "accordion-section-content",
    "aria-hidden": !isExpanded,
    isCollapsed: !isExpanded,
    id: accordionDetailsId
  }, children));
};

AccordionSection.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  assistiveText: _propTypes["default"].string,
  name: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'error'])
};
AccordionSection.defaultProps = {
  className: undefined,
  style: undefined,
  assistiveText: undefined,
  disabled: false,
  children: null,
  label: undefined,
  icon: null,
  name: undefined,
  variant: 'default'
};
var _default = AccordionSection;
exports["default"] = _default;