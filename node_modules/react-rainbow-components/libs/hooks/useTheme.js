"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTheme;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _styledComponents = require("styled-components");

var _normalizeThemeColors = _interopRequireDefault(require("../../styles/helpers/normalizeThemeColors"));

var _defaultTheme = _interopRequireDefault(require("../../styles/defaultTheme"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useTheme() {
  var themeContext = (0, _react.useContext)(_styledComponents.ThemeContext);
  return (0, _react.useMemo)(function () {
    if (themeContext && !themeContext.rainbow) {
      themeContext.rainbow = _objectSpread(_objectSpread({}, _defaultTheme["default"]), (0, _normalizeThemeColors["default"])(_defaultTheme["default"]));
    }

    return themeContext || {
      rainbow: _objectSpread(_objectSpread({}, _defaultTheme["default"]), (0, _normalizeThemeColors["default"])(_defaultTheme["default"]))
    };
  }, [themeContext]);
}