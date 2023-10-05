import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import defaultTheme from '../defaultTheme';
import { darken, lighten, isDark, getContrastText, isValidColor } from './color';
import normalizeThemeColors from './normalizeThemeColors';

function pickColors(colors) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return colors.reduce(function (seed, color) {
    if (typeof obj[color] === 'string') {
      seed[color] = obj[color];
    }

    return seed;
  }, {});
}

function get(obj, path) {
  return path.split('.').reduce(function (acc, item) {
    if (_typeof(acc) === 'object' && acc !== null) {
      return acc[item];
    }

    return undefined;
  }, obj);
}

function normalizeColors(colors) {
  return Object.keys(colors).reduce(function (seed, key) {
    seed[key] = {
      main: colors[key],
      dark: darken(colors[key]),
      light: lighten(colors[key])
    };
    return seed;
  }, {});
}

function resolveCustomBackground(background) {
  if (background && isValidColor(background)) {
    var dark = isDark(background);
    var mainText = getContrastText(background);
    var theme = {
      background: {
        main: background,
        secondary: dark ? lighten(background, 0.04) : darken(background, 0.04),
        highlight: dark ? lighten(background, 0.15) : darken(background, 0.1),
        disabled: dark ? lighten(background, 0.08) : darken(background, 0.08)
      },
      text: {
        main: mainText,
        title: dark ? darken(mainText, 0.25) : lighten(mainText, 0.24),
        header: dark ? darken(mainText, 0.6) : lighten(mainText, 0.6),
        label: dark ? darken(mainText, 0.3) : lighten(mainText, 0.3),
        disabled: dark ? darken(mainText, 0.7) : lighten(mainText, 0.7)
      },
      border: {
        main: dark ? lighten(background, 0.3) : darken(background, 0.3),
        divider: dark ? lighten(background, 0.1) : darken(background, 0.1),
        disabled: dark ? lighten(background, 0.1) : darken(background, 0.1)
      },
      action: {
        active: dark ? lighten(background, 0.08) : darken(background, 0.08),
        hover: dark ? lighten(background, 0.08) : darken(background, 0.08)
      },
      isDark: dark
    };
    return theme;
  }

  return {};
}

function resolveCustomShadows(colors, background) {
  var shadows = {};

  if (colors.brand) {
    shadows.brand = "0 0 2px ".concat(colors.brand.main);
  }

  if (colors.success) {
    shadows.success = "0 0 2px ".concat(colors.success.main);
  }

  if (colors.error) {
    shadows.error = "0 0 2px ".concat(colors.error.main);
  }

  if (background && isValidColor(background)) {
    var gray1 = darken(background, 0.1);
    var gray2 = darken(background, 0.3);
    var gray3 = darken(background, 0.5);
    shadows = _objectSpread(_objectSpread({}, shadows), {}, {
      shadow_1: "0 0 2px 0 ".concat(gray3),
      shadow_2: "0 2px 4px 0 ".concat(gray2),
      shadow_3: "0 0 1px 0 ".concat(gray3),
      shadow_4: "0 1px 2px 0 ".concat(gray2),
      shadow_5: "0 0 3px ".concat(gray1),
      shadow_6: "0 2px 12px 0 ".concat(gray2),
      shadow_7: "0 0 0 4px ".concat(gray2),
      shadow_8: "0 1px 0 0 ".concat(gray2),
      shadow_9: "0 1px 1px 0 ".concat(gray2),
      shadow_10: "0 0 4px 0 ".concat(gray3),
      shadow_11: "0 0 4px 2px ".concat(gray3)
    });
  }

  return shadows;
}

export default function normalizeTheme(theme) {
  var colors = normalizeColors(pickColors(['brand', 'success', 'error', 'warning'], get(theme, 'rainbow.palette')));
  var mainBackground = get(theme, 'rainbow.palette.mainBackground');
  return {
    rainbow: _objectSpread(_objectSpread({}, normalizeThemeColors({
      palette: _objectSpread(_objectSpread(_objectSpread({}, defaultTheme.palette), colors), resolveCustomBackground(mainBackground))
    })), {}, {
      shadows: _objectSpread(_objectSpread({}, defaultTheme.shadows), resolveCustomShadows(colors, mainBackground))
    })
  };
}