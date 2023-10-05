"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    align-items: center;\n    display: flex;\n    font-size: ", ";\n    justify-content: center;\n    position: relative;\n    background-clip: border-box;\n    border: 1px solid transparent;\n    text-decoration: none;\n    padding: 0 1rem;\n    cursor: pointer;\n    white-space: normal;\n    user-select: none;\n    text-align: center;\n    vertical-align: middle;\n    transition: border 0.15s linear;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    box-sizing: border-box;\n    border-radius: 0;\n    border-width: 1px;\n    margin-left: ", ";\n    height: 2.5rem;\n    line-height: 2.5;\n\n    ::-moz-focus-inner,\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover,\n    &:focus,\n    &:active,\n    &:visited {\n        text-decoration: none;\n    }    \n\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    transition: border 0.15s linear;\n\n    &:hover,\n    &:focus,\n    &:active {\n        color: ", ";\n        z-index: 1;\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    &:active {\n        transform: scale(0.95);\n        transition: all 0.2s ease;\n    }\n\n    svg,\n    span {\n        width: 1rem !important;\n        height: 1rem !important;\n        font-size: 1rem !important;\n    }\n\n    ", ";\n    ", ";\n    ", ";\n\n    ", ";\n\n    ", "\n"])), _fontSizes.FONT_SIZE_HEADING_SMALL, function (props) {
  return props.variant === 'shaded' ? '0' : '-1px';
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.size === 'x-small' && "\n            height: 1.25rem;\n            line-height: 1.25;\n            padding: 0 0.3rem;\n            font-size: 0.65rem !important;\n\n            svg, span {\n                width: 0.65rem !important;\n                height: 0.65rem !important;\n                font-size: 0.65rem !important;\n            }\n        ";
}, function (props) {
  return props.size === 'small' && "\n            height: 1.75rem;\n            line-height: 1.75;\n            padding: 0 0.7rem;\n            font-size: 0.875rem !important;\n\n            svg, span {\n                width: 0.875rem !important;\n                height: 0.875rem !important;\n        \n                font-size: 0.875rem !important;\n            }\n        ";
}, function (props) {
  return props.size === 'large' && "\n            height: 3rem;\n            line-height: 3;\n\n            svg, span {\n                width: 1.5rem !important;\n                height: 1.5rem !important;\n                font-size: 1rem !important;\n            }\n        ";
}, function (props) {
  return props.checked && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 1px solid ").concat(props.palette.brand.main, ";\n            color: ").concat(props.palette.brand.main, ";\n        \n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.palette.border.divider, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:none;\n        border: 1px solid transparent;\n    ";
});
var _default = StyledText;
exports["default"] = _default;