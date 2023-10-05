"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("./colors");

var _color = require("./helpers/color");

var _normalizeThemeColors = _interopRequireDefault(require("./helpers/normalizeThemeColors"));

var defaultTheme = {
  palette: {
    brand: {
      main: _colors.COLOR_BRAND,
      dark: (0, _color.darken)(_colors.COLOR_BRAND),
      light: (0, _color.lighten)(_colors.COLOR_BRAND)
    },
    success: {
      main: _colors.COLOR_SUCCESS,
      dark: (0, _color.darken)(_colors.COLOR_SUCCESS),
      light: (0, _color.lighten)(_colors.COLOR_SUCCESS)
    },
    error: {
      main: _colors.COLOR_ERROR,
      dark: (0, _color.darken)(_colors.COLOR_ERROR),
      light: (0, _color.lighten)(_colors.COLOR_ERROR)
    },
    warning: {
      main: _colors.COLOR_WARNING,
      dark: (0, _color.darken)(_colors.COLOR_WARNING),
      light: (0, _color.lighten)(_colors.COLOR_WARNING)
    },
    background: {
      main: _colors.COLOR_WHITE,
      highlight: '#eff1f5',
      secondary: '#f9fafc',
      disabled: _colors.COLOR_GRAY_1
    },
    text: {
      main: _colors.COLOR_DARK_1,
      title: _colors.COLOR_GRAY_4,
      header: _colors.COLOR_GRAY_3,
      label: _colors.COLOR_GRAY_4,
      disabled: _colors.COLOR_GRAY_2
    },
    border: {
      main: _colors.COLOR_GRAY_3,
      divider: _colors.COLOR_GRAY_2,
      disabled: _colors.COLOR_GRAY_TRANSPARENT_3
    },
    action: {
      active: _colors.COLOR_GRAY_1,
      hover: _colors.COLOR_GRAY_1
    },
    getContrastText: _color.getContrastText,
    isDark: false
  },
  shadows: {
    brand: "0 0 2px ".concat(_colors.COLOR_BRAND),
    success: "0 0 2px ".concat(_colors.COLOR_SUCCESS),
    error: "0 0 2px ".concat(_colors.COLOR_ERROR),
    shadow_1: "0 0 2px 0 ".concat(_colors.COLOR_GRAY_3),
    shadow_2: "0 2px 4px 0 ".concat(_colors.COLOR_GRAY_2),
    shadow_3: "0 0 1px 0 ".concat(_colors.COLOR_GRAY_3),
    shadow_4: "0 1px 2px 0 ".concat(_colors.COLOR_GRAY_2),
    shadow_5: "0 0 3px ".concat(_colors.COLOR_GRAY_1),
    shadow_6: "0 2px 16px 0 ".concat(_colors.COLOR_GRAY_DARK_TRANSPARENT),
    shadow_7: "0 0 0 4px ".concat(_colors.COLOR_GRAY_2),
    shadow_8: "0 1px 0 0 ".concat(_colors.COLOR_GRAY_2),
    shadow_9: "0 1px 1px 0 ".concat(_colors.COLOR_GRAY_2),
    shadow_10: "0 0 4px 0 ".concat(_colors.COLOR_GRAY_TRANSPARENT_3),
    shadow_11: "0 0 4px 2px ".concat(_colors.COLOR_GRAY_TRANSPARENT_3),
    shadow_12: "0 2px 8px 0 ".concat(_colors.COLOR_GRAY_DARK_TRANSPARENT)
  }
};

var _default = (0, _normalizeThemeColors["default"])(defaultTheme);

exports["default"] = _default;