"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerticalItem;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../VerticalNavigation/context");

var _context2 = require("../VerticalSection/context");

var _context3 = require("../VerticalSectionOverflow/context");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _li = _interopRequireDefault(require("./styled/li"));

var _anchor = _interopRequireDefault(require("./styled/anchor"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var _button = _interopRequireDefault(require("./styled/button"));

var _itemContent = _interopRequireDefault(require("./itemContent"));

function Item(props) {
  var label = props.label,
      icon = props.icon,
      name = props.name,
      href = props.href,
      onClick = props.onClick,
      notification = props.notification,
      className = props.className,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      entityHeaderId = props.entityHeaderId,
      isExpanded = props.isExpanded;
  var isSelected = name === selectedItem;

  var getAriaCurrent = function getAriaCurrent() {
    if (isSelected) {
      return 'page';
    }

    return undefined;
  };

  var hanldeOnClick = function hanldeOnClick(event) {
    onClick(event);
    onSelect(event, name);
  };

  var resolveTabIndex = function resolveTabIndex() {
    if (isExpanded === false) {
      return -1;
    }

    return 0;
  };

  return _react["default"].createElement(_li["default"], {
    className: className,
    style: style,
    "data-active": isSelected,
    isSelected: isSelected,
    "data-id": "vertical-item"
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: href
  }, _react["default"].createElement(_anchor["default"], {
    "data-id": "vertical-item-clickable-element",
    className: "rainbow-vertical-item_action",
    href: href,
    onClick: hanldeOnClick,
    "aria-describedby": entityHeaderId,
    "aria-current": getAriaCurrent(),
    tabIndex: resolveTabIndex(),
    isSelected: isSelected
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_icon["default"], null, icon)), _react["default"].createElement(_itemContent["default"], {
    label: label,
    notification: notification
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !href
  }, _react["default"].createElement(_button["default"], {
    "data-id": "vertical-item-clickable-element",
    className: "rainbow-vertical-item_action",
    onClick: hanldeOnClick,
    "aria-describedby": entityHeaderId,
    "aria-current": getAriaCurrent(),
    tabIndex: resolveTabIndex(),
    isSelected: isSelected
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_icon["default"], null, icon)), _react["default"].createElement(_itemContent["default"], {
    label: label,
    notification: notification
  }))));
}

function VerticalItem(props) {
  return _react["default"].createElement(_context.Consumer, null, function (context) {
    return _react["default"].createElement(_context2.Consumer, null, function (entityHeaderId) {
      return _react["default"].createElement(_context3.Consumer, null, function (isExpanded) {
        return _react["default"].createElement(Item, (0, _extends2["default"])({}, props, context, {
          entityHeaderId: entityHeaderId,
          isExpanded: isExpanded
        }));
      });
    });
  });
}

VerticalItem.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  name: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  href: _propTypes["default"].string,
  notification: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
VerticalItem.defaultProps = {
  label: '',
  name: undefined,
  icon: undefined,
  href: undefined,
  onClick: function onClick() {},
  notification: null,
  className: undefined,
  style: undefined
};