"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _normalizeValue = _interopRequireDefault(require("./normalizeValue"));

var _container = _interopRequireDefault(require("./styled/container"));

var _bar = _interopRequireDefault(require("./styled/bar"));

function ProgressBar(props) {
  var className = props.className,
      style = props.style,
      assistiveText = props.assistiveText,
      value = props.value,
      size = props.size,
      variant = props.variant;
  var normalizedValue = (0, _normalizeValue["default"])(value);
  var WIDTH = {
    width: "".concat(normalizedValue, "%")
  };
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    size: size,
    variant: variant,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": normalizedValue,
    role: "progressbar",
    "aria-label": assistiveText
  }, _react["default"].createElement(_bar["default"], {
    variant: variant,
    style: WIDTH
  }, _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  })));
}

ProgressBar.propTypes = {
  value: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  variant: _propTypes["default"].oneOf(['brand', 'success']),
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
ProgressBar.defaultProps = {
  value: 0,
  size: 'medium',
  variant: 'brand',
  assistiveText: '',
  className: undefined,
  style: undefined
};