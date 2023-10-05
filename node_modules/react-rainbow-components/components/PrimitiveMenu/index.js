"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("@rainbow-modules/hooks");

var _hooks2 = require("../../libs/hooks");

var _constants = require("../../libs/constants");

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var _menuContent = _interopRequireDefault(require("./menuContent"));

var _styled = require("./styled");

var _utils = require("./utils");

var _excluded = ["id", "className", "style", "children", "isLoading", "menuAlignment", "menuSize", "title", "assistiveText", "trigger", "borderRadius"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PrimitiveMenu = _react["default"].forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      style = props.style,
      children = props.children,
      isLoading = props.isLoading,
      menuAlignment = props.menuAlignment,
      menuSize = props.menuSize,
      title = props.title,
      assistiveText = props.assistiveText,
      Trigger = props.trigger,
      borderRadius = props.borderRadius,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var listboxId = (0, _hooks2.useUniqueIdentifier)('listbox');
  var ariaLabel = title || assistiveText;
  var triggerRef = (0, _react.useRef)();
  var dropdownRef = (0, _react.useRef)();

  var _useDisclosure = (0, _hooks2.useDisclosure)(false),
      isOpen = _useDisclosure.isOpen,
      closeMenu = _useDisclosure.close,
      toggleMenu = _useDisclosure.toggle;

  (0, _hooks2.useOutsideClick)(dropdownRef, function (event) {
    if (triggerRef.current.htmlElementRef.current.contains(event.target)) {
      return null;
    }

    return closeMenu();
  }, isOpen);
  (0, _hooks2.useWindowResize)(function () {
    return closeMenu();
  }, isOpen);
  (0, _hooks.useWindowScrolling)(closeMenu, isOpen);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        triggerRef.current.focus();
      },
      click: function click() {
        triggerRef.current.click();
      },
      blur: function blur() {
        triggerRef.current.blur();
      }
    };
  });
  var positionResolver = (0, _react.useCallback)(function (opts) {
    return (0, _utils.resolvePosition)(opts, menuAlignment);
  }, [menuAlignment]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    if (isOpen) {
      var keyCode = event.keyCode;
      if (keyCode !== _constants.TAB_KEY) event.preventDefault();

      if (keyCode === _constants.TAB_KEY || keyCode === _constants.ESCAPE_KEY) {
        closeMenu();
        triggerRef.current.focus();
      }
    }
  }, [closeMenu, isOpen]);
  return _react["default"].createElement(_styled.StyledContainer, {
    id: id,
    role: "presentation",
    className: className,
    style: style,
    onKeyDown: handleKeyDown
  }, _react["default"].createElement(Trigger, (0, _extends2["default"])({}, rest, {
    isOpen: isOpen,
    title: title,
    ariaControls: listboxId,
    ariaExpanded: isOpen,
    ariaHaspopup: true,
    assistiveText: assistiveText,
    onClick: toggleMenu,
    ref: triggerRef,
    borderRadius: borderRadius
  })), _react["default"].createElement(_InternalOverlay["default"], {
    isVisible: isOpen,
    positionResolver: positionResolver,
    triggerElementRef: function triggerElementRef() {
      return triggerRef.current.htmlElementRef;
    }
  }, _react["default"].createElement(_styled.StyledDropdown, {
    id: listboxId,
    "data-id": "primitive-menu_dropdown",
    ref: dropdownRef,
    menuSize: menuSize,
    menuAlignment: menuAlignment,
    isLoading: isLoading,
    borderRadius: borderRadius
  }, _react["default"].createElement(_menuContent["default"], {
    ariaLabel: ariaLabel,
    onRequestClose: closeMenu,
    isLoading: isLoading
  }, children))));
});

PrimitiveMenu.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  menuSize: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: _propTypes["default"].oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  isLoading: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  trigger: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]).isRequired,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
PrimitiveMenu.defaultProps = {
  children: null,
  menuSize: 'xx-small',
  menuAlignment: 'left',
  isLoading: false,
  title: undefined,
  assistiveText: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  borderRadius: 'rounded'
};
var _default = PrimitiveMenu;
exports["default"] = _default;