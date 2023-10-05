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

var StyledPercentValue = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 2rem;\n    font-weight: 400;\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.variant === 'success' && "\n            color: ".concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            color: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
});
var _default = StyledPercentValue;
exports["default"] = _default;