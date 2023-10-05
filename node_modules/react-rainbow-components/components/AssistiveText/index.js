"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AssistiveText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hiddenElement = _interopRequireDefault(require("../Structural/hiddenElement"));

function AssistiveText(_ref) {
  var text = _ref.text;

  if (text) {
    return _react["default"].createElement(_hiddenElement["default"], null, text);
  }

  return null;
}

AssistiveText.propTypes = {
  text: _propTypes["default"].string
};
AssistiveText.defaultProps = {
  text: undefined
};