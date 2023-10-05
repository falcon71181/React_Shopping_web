"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getTheme = _interopRequireDefault(require("../../../styles/helpers/getTheme"));

var _color = require("../../../styles/helpers/color");

var _templateObject;

var StyledContainer = _styledComponents["default"].div.attrs(function (props) {
  var theme = (0, _getTheme["default"])(props);
  var _theme$palette = theme.palette,
      brand = _theme$palette.brand,
      success = _theme$palette.success;
  var brandLightColor = brand.light;
  var successLightColor = success.light;
  return {
    brandLightColor: brandLightColor,
    successLightColor: successLightColor
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    border: 0;\n    position: relative;\n    display: block;\n    background: ", ";\n    height: 0.5rem;\n    border-radius: 1rem;\n    ", "\n    ", "\n    ", "\n    ", "\n    ", ";\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.brandLightColor, 0.7);
}, function (props) {
  return props.size === 'x-small' && 'height: 0.125rem;';
}, function (props) {
  return props.size === 'small' && 'height: 0.25rem;';
}, function (props) {
  return props.size === 'medium' && 'height: 0.625rem;';
}, function (props) {
  return props.size === 'large' && 'height: 1rem;';
}, function (props) {
  return props.variant === 'success' && "\n            background: ".concat((0, _color.replaceAlpha)(props.successLightColor, 0.7), ";\n        ");
});

var _default = StyledContainer;
exports["default"] = _default;