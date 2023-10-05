"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("./styled/header"));

function Header(_ref) {
  var text = _ref.text;

  if (typeof text === 'string') {
    return _react["default"].createElement(_header["default"], null, text);
  }

  return text;
}

Header.propTypes = {
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
Header.defaultProps = {
  text: undefined
};