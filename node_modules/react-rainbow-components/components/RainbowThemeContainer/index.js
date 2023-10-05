"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _normalizeTheme = _interopRequireDefault(require("../../styles/helpers/normalizeTheme"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RainbowThemeContainer = function RainbowThemeContainer(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var _useState = (0, _react.useState)(function () {
    return (0, _normalizeTheme["default"])(theme);
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      normalizedTheme = _useState2[0],
      setTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    setTheme((0, _normalizeTheme["default"])(theme));
  }, [theme]);
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: normalizedTheme
  }, children);
};

RainbowThemeContainer.propTypes = {
  theme: _propTypes["default"].shape({
    rainbow: _propTypes["default"].shape({
      palette: _propTypes["default"].shape({
        brand: _propTypes["default"].string,
        success: _propTypes["default"].string,
        error: _propTypes["default"].string,
        warning: _propTypes["default"].string,
        mainBackground: _propTypes["default"].string
      })
    })
  }),
  children: _propTypes["default"].node
};
RainbowThemeContainer.defaultProps = {
  theme: undefined,
  children: undefined
};
var _default = RainbowThemeContainer;
exports["default"] = _default;