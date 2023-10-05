"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _AssistiveText = _interopRequireDefault(require("../../../AssistiveText"));

var _hooks = require("../../../../libs/hooks");

var _color = require("../../../../styles/helpers/color");

var Color = _react["default"].forwardRef(function (props, ref) {
  var color = props.color,
      name = props.name,
      tabIndex = props.tabIndex,
      isChecked = props.isChecked,
      onChange = props.onChange;
  var rgba = (0, _color.colorToRgba)(color);
  var colorId = (0, _hooks.useUniqueIdentifier)('color-picker-default');

  if (!(0, _color.isValidColor)(rgba)) {
    return null;
  }

  var handleChange = function handleChange() {
    onChange({
      hex: "#".concat((0, _color.rgbaToHex)(rgba)),
      rgba: (0, _color.decomposeColor)(rgba).values,
      hsv: (0, _color.decomposeColor)((0, _color.rgbToHsv)(rgba)).values
    });
  };

  var style = {
    backgroundColor: color
  };
  return _react["default"].createElement(_styled.StyledColor, null, _react["default"].createElement(_styled.StyledInput, {
    id: colorId,
    as: "input",
    name: name,
    checked: isChecked,
    value: color,
    type: "radio",
    onChange: handleChange,
    ref: ref,
    tabIndex: tabIndex
  }), _react["default"].createElement(_styled.StyledLabel, {
    htmlFor: colorId,
    style: style
  }, _react["default"].createElement(_AssistiveText["default"], null, color)));
});

Color.propTypes = {
  color: _propTypes["default"].string,
  name: _propTypes["default"].string,
  isChecked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
Color.defaultProps = {
  color: undefined,
  name: '',
  isChecked: false,
  onChange: function onChange() {}
};
var _default = Color;
exports["default"] = _default;