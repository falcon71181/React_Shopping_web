"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Application;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _context = require("./context");

var _hooks = require("../../libs/hooks");

var _rainbowLegacyStyles = _interopRequireDefault(require("./rainbowLegacyStyles"));

var _normalizeTheme = _interopRequireDefault(require("../../styles/helpers/normalizeTheme"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Application(props) {
  var children = props.children,
      className = props.className,
      style = props.style,
      locale = props.locale,
      theme = props.theme;
  var contextValue = {
    locale: (0, _hooks.useLocale)(locale)
  };

  var _useState = (0, _react.useState)(function () {
    return (0, _normalizeTheme["default"])(theme);
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      normalizedTheme = _useState2[0],
      setTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    setTheme((0, _normalizeTheme["default"])(theme));
  }, [theme]);
  return _react["default"].createElement(_context.Provider, {
    value: contextValue
  }, _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: normalizedTheme
  }, _react["default"].createElement("div", {
    className: className,
    style: style
  }, _react["default"].createElement(_rainbowLegacyStyles["default"], null), children)));
}

Application.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  locale: _propTypes["default"].string,
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
  })
};
Application.defaultProps = {
  children: [],
  className: undefined,
  style: undefined,
  locale: undefined,
  theme: {}
};