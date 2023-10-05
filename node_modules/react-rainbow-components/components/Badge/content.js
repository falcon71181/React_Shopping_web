"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Content;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _truncatedText = _interopRequireDefault(require("../Structural/truncatedText"));

function Content(props) {
  var label = props.label,
      children = props.children;

  if (children || children === 0) {
    return _react["default"].createElement(_truncatedText["default"], null, children);
  }

  return _react["default"].createElement(_truncatedText["default"], null, label);
}

Content.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node
};
Content.defaultProps = {
  label: null,
  children: null
};