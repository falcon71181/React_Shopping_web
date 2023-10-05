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

var StyledIndicatorButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    width: 0.5rem;\n    height: 0.5rem;\n    background: ", ";\n    border-radius: 50%;\n    border: 1px solid ", ";\n    padding: 0;\n    box-sizing: border-box;\n    cursor: pointer;\n    color: inherit;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :hover {\n        background-color: ", ";\n        border: 1px solid ", ";\n    }\n\n    :focus {\n        outline: 0;\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isSelected && "\n            background: ".concat(props.palette.brand.main, ";\n            border: 1px solid ").concat(props.palette.brand.main, ";\n\n            :hover {\n                background: ").concat(props.palette.brand.dark, ";\n                border: 1px solid ").concat(props.palette.brand.dark, ";\n            }\n        ");
});
var _default = StyledIndicatorButton;
exports["default"] = _default;