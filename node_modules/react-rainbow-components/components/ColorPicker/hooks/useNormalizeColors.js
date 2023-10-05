"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useNormalizeColors;
exports.defaultColors = void 0;

var _react = require("react");

var _isValidColor = _interopRequireDefault(require("../../../styles/helpers/color/isValidColor"));

var defaultColors = ['#e3aaec', '#c3dbf7', '#9fd6ff', '#9de7da', '#9ef0bf', '#fef199', '#fdd499', '#d174e0', '#86baf3', '#5ebbff', '#42d8be', '#3be282', '#ffe654', '#ffb758', '#bd35bd', '#5779c1', '#4A90E2', '#06aea9', '#3dba4c', '#f5bc24', '#f99222', '#570e8c', '#021970', '#0b2399', '#0d7477', '#0a6b50', '#b67e12', '#b75d0c'];
exports.defaultColors = defaultColors;

function useNormalizeColors(props) {
  var colors = props.defaultColors,
      variant = props.variant;
  return (0, _react.useMemo)(function () {
    var validColors = Array.isArray(colors) ? colors.filter(function (color) {
      return (0, _isValidColor["default"])(color);
    }) : [];

    if (variant === 'colors-fixed') {
      if (!validColors.length > 0) {
        console.warn('If the props variant is colors-fixed, the defaultColors prop must contain at least one valid color');
        return defaultColors;
      }
    }

    return validColors;
  }, [colors, variant]);
}