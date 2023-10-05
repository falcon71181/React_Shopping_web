"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../Sidebar/context");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _InternalTooltip = _interopRequireDefault(require("../InternalTooltip"));

var _useDefaultTooltipConnector = _interopRequireDefault(require("../InternalTooltip/hooks/useDefaultTooltipConnector"));

var _li = _interopRequireDefault(require("./styled/li"));

var _anchorContent = _interopRequireDefault(require("./styled/anchorContent"));

var _buttonContent = _interopRequireDefault(require("./styled/buttonContent"));

var _itemContent = _interopRequireDefault(require("./itemContent"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SidebarItem(props) {
  var label = props.label,
      icon = props.icon,
      selectedIcon = props.selectedIcon,
      name = props.name,
      href = props.href,
      onClick = props.onClick,
      className = props.className,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      tooltip = props.tooltip,
      hideSelectedItemIndicator = props.hideSelectedItemIndicator;

  var _triggerRef = (0, _react.useRef)();

  var tooltipRef = (0, _react.useRef)();
  var isSelected = name === selectedItem;
  var currentIcon = isSelected && !!selectedIcon ? selectedIcon : icon;

  var _useDefaultTooltipCon = (0, _useDefaultTooltipConnector["default"])({
    tooltipRef: tooltipRef,
    triggerRef: function triggerRef() {
      return _triggerRef;
    }
  }),
      onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
      onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
      isVisible = _useDefaultTooltipCon.isVisible;

  var getAriaCurrent = function getAriaCurrent() {
    if (isSelected) {
      return 'page';
    }

    return undefined;
  };

  var handleOnClick = function handleOnClick(event) {
    onClick(event);
    onSelect(event, name);
  };

  return _react["default"].createElement(_li["default"], {
    "data-id": "sidebar-item-li",
    isSelected: isSelected,
    className: className,
    style: style,
    hideSelectedItemIndicator: hideSelectedItemIndicator
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: href
  }, _react["default"].createElement(_anchorContent["default"], {
    "data-id": "sidebar-item-clickable-element",
    href: href,
    onClick: handleOnClick,
    "aria-current": getAriaCurrent(),
    isSelected: isSelected,
    ref: _triggerRef,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, _react["default"].createElement(_itemContent["default"], {
    isSelected: isSelected,
    label: label,
    icon: currentIcon
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !href
  }, _react["default"].createElement(_buttonContent["default"], {
    "data-id": "sidebar-item-clickable-element",
    onClick: handleOnClick,
    "aria-current": getAriaCurrent(),
    isSelected: isSelected,
    ref: _triggerRef,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, _react["default"].createElement(_itemContent["default"], {
    isSelected: isSelected,
    label: label,
    icon: currentIcon
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: tooltip
  }, _react["default"].createElement(_InternalTooltip["default"], {
    triggerElementRef: function triggerElementRef() {
      return _triggerRef;
    },
    isVisible: isVisible,
    preferredPosition: "right",
    ref: tooltipRef
  }, tooltip)));
}

SidebarItem.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  selectedIcon: _propTypes["default"].node,
  href: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  tooltip: _propTypes["default"].node
};
SidebarItem.defaultProps = {
  name: undefined,
  label: undefined,
  icon: null,
  selectedIcon: null,
  href: undefined,
  onClick: function onClick() {},
  className: undefined,
  style: undefined,
  tooltip: undefined
};

var _default = (0, _context.withContext)(SidebarItem);

exports["default"] = _default;