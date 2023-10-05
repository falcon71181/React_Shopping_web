"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MarkdownOutput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMarkdownToReact = _interopRequireDefault(require("./hooks/useMarkdownToReact"));

var _styled = _interopRequireDefault(require("./styled"));

var _renderers = require("./renderers");

function MarkdownOutput(props) {
  var id = props.id,
      className = props.className,
      style = props.style,
      value = props.value,
      variant = props.variant;
  var renderer = variant === 'inline' ? _renderers.inlineRenderer : _renderers.defaultRenderer;
  var result = (0, _useMarkdownToReact["default"])(value, renderer);
  return _react["default"].createElement(_styled["default"], {
    id: id,
    className: className,
    style: style,
    variant: variant
  }, result);
}

MarkdownOutput.propTypes = {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  value: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'inline'])
};
MarkdownOutput.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
  value: '',
  variant: 'default'
};