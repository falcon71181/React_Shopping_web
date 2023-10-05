"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _normalizeTheme = _interopRequireDefault(require("../normalizeTheme"));

var _defaultTheme = _interopRequireDefault(require("../../defaultTheme"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

jest.mock('../color', function () {
  return {
    darken: jest.fn(function () {
      return '#ccc';
    }),
    lighten: jest.fn(function () {
      return '#ededed';
    }),
    colorToRgba: jest.fn(function () {
      return 'rgba(255, 255, 255, 1)';
    })
  };
});
var rainbowTheme = {
  rainbow: _defaultTheme["default"]
};
describe('normalizeTheme', function () {
  it('should return default values when no valid theme was passed', function () {
    var values = [null, undefined, {}, [], 'dsadsa', 123];
    values.forEach(function (theme) {
      expect((0, _normalizeTheme["default"])(theme)).toEqual(rainbowTheme);
    });
  });
  it('should return default values when palette is an empty string', function () {
    expect((0, _normalizeTheme["default"])({
      rainbow: {
        palette: ''
      }
    })).toEqual(rainbowTheme);
  });
  it('should return default values when palette is an empty object', function () {
    expect((0, _normalizeTheme["default"])({
      rainbow: {
        palette: {}
      }
    })).toEqual(rainbowTheme);
  });
  it('should return the theme with the brand passed', function () {
    expect((0, _normalizeTheme["default"])({
      rainbow: {
        palette: {
          brand: '#fff'
        }
      }
    })).toEqual({
      rainbow: {
        palette: _objectSpread(_objectSpread({}, _defaultTheme["default"].palette), {}, {
          brand: {
            main: 'rgba(255, 255, 255, 1)',
            dark: 'rgba(255, 255, 255, 1)',
            light: 'rgba(255, 255, 255, 1)'
          }
        }),
        shadows: _objectSpread(_objectSpread({}, _defaultTheme["default"].shadows), {}, {
          brand: '0 0 2px #fff'
        })
      }
    });
  });
});