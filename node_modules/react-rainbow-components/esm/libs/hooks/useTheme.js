import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import normalizeThemeColors from '../../styles/helpers/normalizeThemeColors';
import defaultTheme from '../../styles/defaultTheme';
export default function useTheme() {
  var themeContext = useContext(ThemeContext);
  return useMemo(function () {
    if (themeContext && !themeContext.rainbow) {
      themeContext.rainbow = _objectSpread(_objectSpread({}, defaultTheme), normalizeThemeColors(defaultTheme));
    }

    return themeContext || {
      rainbow: _objectSpread(_objectSpread({}, defaultTheme), normalizeThemeColors(defaultTheme))
    };
  }, [themeContext]);
}