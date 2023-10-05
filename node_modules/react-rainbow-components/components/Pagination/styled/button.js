"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    padding: 0;\n    transition: color 0.1s linear;\n    cursor: pointer;\n    height: 2rem;\n    width: 2rem;\n    border-radius: ", ";\n    font-weight: bold;\n    font-size: ", ";\n    line-height: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    outline: none;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    box-sizing: border-box;\n    color: ", ";\n    z-index: 0;\n\n    :focus,\n    :active {\n        box-shadow: ", ";\n        background-color: ", ";\n        outline: none;\n    }\n\n    :hover {\n        color: ", ";\n        background-color: ", ";\n        text-decoration: none;\n        outline: 0;\n    }\n\n    &:focus,\n    &:active,\n    &:visited {\n        font-size: ", ";\n        text-decoration: none;\n        color: ", ";\n        background-color: ", ";\n        z-index: 100;\n        outline: 0;\n    }\n\n    ", "\n\n    ", ";\n\n    ", ";\n"])), _borderRadius.BORDER_RADIUS_2, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.action.hover;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.variant === 'shaded' && !props.disabled && "\n        box-shadow:".concat(props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n    ");
}, function (props) {
  return props.isActivePage && "\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_LARGE, ";\n            line-height: 0;\n            color: ").concat(props.palette.text.main, ";\n            background-color: ").concat(props.palette.background.highlight, ";\n            z-index: 100;\n\n            :hover {\n                background-color: ").concat(props.palette.action.hover, ";\n                color: ").concat(props.palette.text.main, ";\n            }\n        ");
}, function (props) {
  return props.disabled && "\n            background-color: transparent;\n            pointer-events: none;\n            color: ".concat(props.palette.text.disabled, ";\n        \n            &:hover {\n                background-color: transparent;\n                pointer-events: none;\n            }\n        \n            &:focus,\n            &:active {\n                background-color: transparent;\n                pointer-events: none;\n                z-index: 100;\n            }      \n    ");
});
var _default = StyledButton;
exports["default"] = _default;