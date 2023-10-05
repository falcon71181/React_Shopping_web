"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Slider;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

function Slider(props) {
  var value = props.value,
      min = props.min,
      max = props.max,
      tabIndex = props.tabIndex,
      onChange = props.onChange,
      style = props.style,
      className = props.className;
  return _react["default"].createElement(_styled.StyledSlider, {
    className: className,
    style: style
  }, _react["default"].createElement(_styled.StyledInputRange, {
    type: "range",
    value: value,
    min: min,
    max: max,
    onChange: onChange,
    tabIndex: tabIndex
  }));
}

Slider.propTypes = {
  value: _propTypes["default"].number,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Slider.defaultProps = {
  value: undefined,
  min: 0,
  max: 100,
  tabIndex: undefined,
  onChange: function onChange() {},
  className: undefined,
  style: undefined
};