"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeThemeColors;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _color = require("./color");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function normalizePaletteColors(palette) {
  var normalizedPalette = {};
  Object.keys(palette).forEach(function (key) {
    var value = palette[key];

    if (typeof value === 'string') {
      normalizedPalette[key] = (0, _color.colorToRgba)(value);
    } else if ((0, _typeof2["default"])(value) === 'object') {
      normalizedPalette[key] = normalizePaletteColors(palette[key]);
    } else {
      normalizedPalette[key] = palette[key];
    }
  });
  return normalizedPalette;
}

function normalizeThemeColors(theme) {
  return _objectSpread(_objectSpread({}, theme), {}, {
    palette: _objectSpread({}, normalizePaletteColors(theme.palette))
  });
}