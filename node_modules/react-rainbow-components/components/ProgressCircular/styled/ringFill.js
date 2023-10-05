"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledRingFill = (0, _attachThemeAttrs["default"])(_styledComponents["default"].circle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    stroke: ", ";\n    transition: all 0.4s ease-out 0s;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.variant === 'success' && "\n            stroke: ".concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            stroke: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n            stroke: ".concat(props.palette.error.main, ";\n        ");
});
var _default = StyledRingFill;
exports["default"] = _default;