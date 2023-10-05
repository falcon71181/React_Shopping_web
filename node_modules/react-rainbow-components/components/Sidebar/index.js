"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sidebar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _nav = _interopRequireDefault(require("./styled/nav"));

var _ul = _interopRequireDefault(require("./styled/ul"));

function Sidebar(props) {
  var ariaLabel = props.ariaLabel,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      className = props.className,
      children = props.children,
      id = props.id,
      hideSelectedItemIndicator = props.hideSelectedItemIndicator;
  var context = {
    selectedItem: selectedItem,
    onSelect: onSelect,
    hideSelectedItemIndicator: hideSelectedItemIndicator
  };
  return _react["default"].createElement(_nav["default"], {
    id: id,
    className: className,
    style: style,
    "aria-label": ariaLabel
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, _react["default"].createElement(_ul["default"], null, children)));
}

Sidebar.propTypes = {
  id: _propTypes["default"].string,
  selectedItem: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  hideSelectedItemIndicator: _propTypes["default"].bool
};
Sidebar.defaultProps = {
  selectedItem: null,
  onSelect: function onSelect() {},
  ariaLabel: undefined,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined,
  hideSelectedItemIndicator: false
};