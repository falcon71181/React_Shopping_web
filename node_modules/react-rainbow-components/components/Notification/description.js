"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _description = _interopRequireDefault(require("./styled/description"));

function Description(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return _react["default"].createElement(_description["default"], null, text);
  }

  return text;
}

Description.propTypes = {
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Description.defaultProps = {
  text: null
};