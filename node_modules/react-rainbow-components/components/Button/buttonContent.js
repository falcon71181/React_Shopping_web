"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonContent;

var _propTypes = _interopRequireDefault(require("prop-types"));

function ButtonContent(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return children || label || null;
}

ButtonContent.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node
};
ButtonContent.defaultProps = {
  label: undefined,
  children: undefined
};