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

var StyledIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].svg)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    margin-left: 0.5rem;\n    margin-top: 0.625rem;\n    transform: rotate(0deg);\n    transition: transform 0.15s linear;\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isExpanded && "\n            transform: rotate(-180deg);\n            transition: transform 0.15s linear;\n        ";
});
var _default = StyledIcon;
exports["default"] = _default;