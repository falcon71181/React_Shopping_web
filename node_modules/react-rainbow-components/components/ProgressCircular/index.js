"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressCircular;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _normalizeValue = _interopRequireDefault(require("./normalizeValue"));

var _progressRing = _interopRequireDefault(require("./progressRing"));

var _container = _interopRequireDefault(require("./styled/container"));

var _percentValue = _interopRequireDefault(require("./styled/percentValue"));

function ProgressCircular(props) {
  var value = props.value,
      variant = props.variant,
      assistiveText = props.assistiveText,
      className = props.className,
      style = props.style;
  var normalizedValue = (0, _normalizeValue["default"])(value);
  return _react["default"].createElement(_container["default"], {
    className: className,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": normalizedValue,
    role: "progressbar",
    "aria-label": assistiveText,
    style: style
  }, _react["default"].createElement(_progressRing["default"], {
    variant: variant,
    percent: normalizedValue
  }), _react["default"].createElement(_percentValue["default"], {
    variant: variant
  }, "".concat(normalizedValue, "%")), _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  }));
}

ProgressCircular.propTypes = {
  value: _propTypes["default"].number,
  variant: _propTypes["default"].oneOf(['brand', 'success', 'warning', 'error']),
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
ProgressCircular.defaultProps = {
  value: 0,
  variant: 'brand',
  assistiveText: '',
  className: undefined,
  style: undefined
};