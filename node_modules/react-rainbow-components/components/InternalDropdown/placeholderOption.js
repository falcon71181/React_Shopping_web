"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headerLabel = _interopRequireDefault(require("../Option/styled/headerLabel"));

var _styled = require("./styled");

var _excluded = ["label", "title", "isChecked", "onClick"];

function PlaceholderOption(props) {
  var label = props.label,
      title = props.title,
      isChecked = props.isChecked,
      onClick = props.onClick,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_styled.StyledTopHeader, {
    title: title,
    role: "presentation",
    onMouseDown: onClick
  }, _react["default"].createElement(_styled.StyledPrimitiveCheckbox, (0, _extends2["default"])({
    type: "checkbox",
    label: "",
    checked: isChecked
  }, rest)), _react["default"].createElement(_headerLabel["default"], null, label));
}

PlaceholderOption.propTypes = {
  label: _propTypes["default"].string,
  title: _propTypes["default"].string,
  isChecked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  onClick: _propTypes["default"].func
};
PlaceholderOption.defaultProps = {
  label: undefined,
  title: undefined,
  isChecked: false,
  onClick: function onClick() {}
};
var _default = PlaceholderOption;
exports["default"] = _default;