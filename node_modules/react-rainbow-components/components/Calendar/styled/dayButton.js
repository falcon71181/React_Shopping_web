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

var StyledDayButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    border-radius: 48px;\n    line-height: 36px;\n    height: 38px;\n    width: 38px;\n    box-sizing: border-box;\n    cursor: pointer;\n    color: inherit;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    border: 1px solid transparent;\n    position: relative;\n    \n    ", "\n\n    &:active {\n        transform: scale(0.85);\n        transition: all 0.2s ease;\n    }\n\n    &:focus,\n    &:active {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n        line-height: 36px;\n    }\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return !props.isHovered && "\n        &:hover {\n            background-color: transparent;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n        }\n    ");
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isToday && "\n        font-weight: 900;\n\n        &::after {\n            content: '';\n            height: 4px;\n            width: 4px;\n            position: absolute;\n            top: 28px;\n            left: 16px;\n            border-radius: 50%;\n            background: ".concat(props.isSelected || props.isHovered ? props.palette.getContrastText(props.palette.brand.main) : props.palette.brand.main, ";\n        }\n\n        \n    ");
}, function (props) {
  return props.isSelected && props.isToday && "\n            &:hover,\n            &:focus,\n            &:active {\n                &::after {\n                    top: 27px;\n                    left: 16px;\n                }\n            }\n        ";
}, function (props) {
  return props.isSelected && "\n            color: ".concat(props.palette.getContrastText(props.palette.brand.main), ";\n            background-color: ").concat(props.palette.brand.main, ";\n            text-align: center;\n            font-size: ").concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            font-weight: 600;\n            border-radius: 48px;\n            line-height: 36px;\n            height: 38px;\n            width: 38px;\n            padding: 0;\n            border: none;\n            outline: none;\n        \n            &:active {\n                transform: scale(0.85);\n                transition: all 0.2s ease;\n            }\n        \n            &:hover {\n                background-color: ").concat(props.palette.brand.dark, ";\n            }\n\n            &:focus {\n                box-shadow: 0 0 8px ").concat(props.palette.brand.main, ";\n            }\n        ");
}, function (props) {
  return props.isHovered && "\n        color: ".concat(props.palette.getContrastText(props.palette.brand.main), ";\n        background-color: ").concat(props.palette.brand.dark, ";\n        ");
});
var _default = StyledDayButton;
exports["default"] = _default;