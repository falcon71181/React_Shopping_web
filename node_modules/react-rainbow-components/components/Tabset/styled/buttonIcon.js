"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _templateObject;

var StyledButtonIcon = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n\n    &:hover,\n    &:active,\n    &:focus {\n        color: ", ";\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.disabled;
});
var _default = StyledButtonIcon;
exports["default"] = _default;