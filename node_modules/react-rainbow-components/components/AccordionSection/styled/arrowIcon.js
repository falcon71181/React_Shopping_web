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

var StyledArrowIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    transform: rotate(0deg);\n    fill: ", ";\n    transition: transform 0.15s linear;\n    vertical-align: middle;\n    width: 1rem;\n\n    :not(:root) {\n        overflow: hidden;\n    }\n\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.isExpanded && "\n            transform: rotate(-180deg);\n            transition: transform 0.15s linear;\n        ";
}, function (props) {
  return props.disabled && "fill: ".concat(props.palette.text.disabled, ";");
});
var _default = StyledArrowIcon;
exports["default"] = _default;