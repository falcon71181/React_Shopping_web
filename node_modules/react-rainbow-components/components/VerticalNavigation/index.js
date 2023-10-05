"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerticalNavigation;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _nav = _interopRequireDefault(require("./styled/nav"));

function VerticalNavigation(props) {
  var id = props.id,
      ariaLabel = props.ariaLabel,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      compact = props.compact,
      shaded = props.shaded,
      className = props.className,
      children = props.children;
  var context = {
    selectedItem: selectedItem,
    onSelect: onSelect
  };
  return _react["default"].createElement(_nav["default"], {
    id: id,
    className: className,
    style: style,
    "aria-label": ariaLabel,
    compact: compact,
    shaded: shaded
  }, _react["default"].createElement(_context.Provider, {
    value: context
  }, children));
}

VerticalNavigation.propTypes = {
  selectedItem: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  compact: _propTypes["default"].bool,
  shaded: _propTypes["default"].bool,
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  id: _propTypes["default"].string
};
VerticalNavigation.defaultProps = {
  selectedItem: null,
  onSelect: function onSelect() {},
  compact: false,
  shaded: false,
  ariaLabel: undefined,
  className: undefined,
  style: undefined,
  children: null,
  id: undefined
};