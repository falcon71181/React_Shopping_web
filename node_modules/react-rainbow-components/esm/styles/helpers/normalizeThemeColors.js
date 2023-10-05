import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { colorToRgba } from './color';

function normalizePaletteColors(palette) {
  var normalizedPalette = {};
  Object.keys(palette).forEach(function (key) {
    var value = palette[key];

    if (typeof value === 'string') {
      normalizedPalette[key] = colorToRgba(value);
    } else if (_typeof(value) === 'object') {
      normalizedPalette[key] = normalizePaletteColors(palette[key]);
    } else {
      normalizedPalette[key] = palette[key];
    }
  });
  return normalizedPalette;
}

export default function normalizeThemeColors(theme) {
  return _objectSpread(_objectSpread({}, theme), {}, {
    palette: _objectSpread({}, normalizePaletteColors(theme.palette))
  });
}