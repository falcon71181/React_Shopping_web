"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Title;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _title = _interopRequireDefault(require("./styled/title"));

function Title(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return _react["default"].createElement(_title["default"], null, text);
  }

  return text;
}

Title.propTypes = {
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Title.defaultProps = {
  text: null
};