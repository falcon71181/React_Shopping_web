"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("../../../../components/Button"));

var _ = _interopRequireDefault(require(".."));

describe('withRainbowTheme', function () {
  it('should return a function that renders the passed component inside RainbowThemeContainer', function () {
    var theme = {
      rainbow: {
        palette: {
          brand: '#5c56b6'
        }
      }
    };
    var FancyButton = (0, _["default"])(_Button["default"], theme);
    var component = (0, _enzyme.mount)(_react["default"].createElement(FancyButton, {
      label: "Fancy button"
    }));
    var themeContainer = component.find('RainbowThemeContainer');
    expect(themeContainer.exists()).toBe(true);
    expect(themeContainer.find(_Button["default"]).prop('label')).toBe('Fancy button');
  });
});