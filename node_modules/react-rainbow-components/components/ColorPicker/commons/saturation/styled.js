"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledColor = exports.StyledCircle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2;

var StyledColor = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    min-height: 160px;\n    height: 100%;\n    overflow: hidden;\n\n    &::before {\n        content: '';\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: linear-gradient(0deg, #000, rgba(0, 0, 0, 0.9) 1%, transparent 99%),\n            linear-gradient(90deg, #fff 1%, hsla(0, 0%, 100%, 0));\n    }\n"])));

exports.StyledColor = StyledColor;
var StyledCircle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;\n    transform: translate(-6px, -6px);\n    padding: 0;\n    margin: 0;\n    border: 1px solid ", ";\n\n    &:focus,\n    &:active {\n        outline: 0;\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});
exports.StyledCircle = StyledCircle;