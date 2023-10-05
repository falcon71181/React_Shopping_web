"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledArrowButton = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            color: ".concat(props.palette.text.disabled, ";\n        ");
});
var _default = StyledArrowButton;
exports["default"] = _default;