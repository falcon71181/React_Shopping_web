"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require(".."));

describe('<RainbowThemeContainer />', function () {
  it('should override the theme', function () {
    var theme = {
      rainbow: {
        palette: {
          brand: '#5c56b6'
        }
      }
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      theme: theme
    }));
    var normalizedTheme = component.find(_styledComponents.ThemeProvider).prop('theme');
    var main = normalizedTheme.rainbow.palette.brand.main;
    expect(main).toBe('rgba(92, 86, 182, 1)');
  });
});