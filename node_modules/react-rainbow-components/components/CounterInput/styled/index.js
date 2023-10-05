"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.StyledContainer = exports.StyledButton = exports.ButtonContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _borderRadius = require("../../../styles/borderRadius");

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n"])));

exports.StyledContainer = StyledContainer;
var StyledInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    text-align: center;\n    font: inherit;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    width: 100%;\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: inline-block;\n    padding: 0 2.5rem;\n    line-height: 2.5rem;\n    height: 2.5rem;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n    margin: 0;\n\n    ", ";\n\n    ", ";\n    \n    ::-moz-focus-inner {\n        border: 0;\n    }\n\n    ::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        height: auto;\n        -webkit-appearance: none;\n        margin: 0;\n    }\n\n    -moz-appearance: textfield;\n\n    :focus,\n    :active {\n        outline: 0;\n        border: 2px solid ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 500;\n        font-size: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 1px solid ", ";\n        }\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    "])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            line-height: 3.275rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";\n            height: 3.4rem;\n        ");
}, function (props) {
  return props.size === 'small' && "\n            line-height: 1.775rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            height: 1.9rem;\n        ");
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            ");
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:".concat(props.disabled || props.readOnly ? '' : props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n    ");
}, function (props) {
  return props.variant === 'bare' && "\n        background: transparent;\n        border-color: transparent;\n        ";
}, function (props) {
  return props.error && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: 2px solid ").concat(props.palette.error.main, ";\n        background-clip: padding-box;\n\n        :focus,\n        :active {\n            background-color: ").concat(props.palette.background.main, ";\n            border: 2px solid ").concat(props.palette.error.main, ";\n            box-shadow: ").concat(props.shadows.error, ";\n            outline: 0;\n        }\n\n        &[disabled] {\n            &:focus,\n            &:active {\n                padding-left: 2.5rem;\n                padding-right: 2.5rem;\n            }\n        }\n    ");
}, function (props) {
  return props.isBare && !props.disabled && !props.readOnly && "\n            background-color: transparent;\n            border: 0;\n            padding: 0 2.5rem;\n            color: ".concat(props.palette.text.main, ";\n            line-height: 2.5rem;\n            transition: none;\n\n            &:focus,\n            &:active {\n                outline: 0;\n                box-shadow: none;\n                padding: 0 2.5rem;\n                background-color: transparent;\n                border: 0;\n            }\n    ");
}, function (props) {
  return !props.disabled && "\n        &[readonly] {\n            padding-left: 2.5rem;\n            padding-right: 2.5rem;\n            background-color: transparent;\n            border: 2px transparent solid;\n            color: ".concat(props.palette.text.main, ";\n            font-weight: 400;\n            cursor: text;\n            box-sizing: border-box;\n    \n            &:focus,\n            &:active {\n                box-shadow: none;\n                background-color: transparent;\n                border: 2px transparent solid;\n            }\n        }\n    ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
exports.StyledInput = StyledInput;
var StyledButton = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_ButtonIcon["default"]))(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    svg {\n        width: 17px !important;\n        height: 17px !important;\n    }\n    :hover{\n        background-color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.secondary;
});
exports.StyledButton = StyledButton;
var ButtonContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    height: 100%;\n    top: 0;\n    position: absolute;\n    line-height: 1;\n    border: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.iconPosition === 'left' && "\n        left: 0.4rem;\n    ";
}, function (props) {
  return props.iconPosition === 'right' && "\n        right: 0.4rem;\n    ";
}, function (props) {
  return props.error && "\n        fill: ".concat(props.palette.error.main, ";\n        color: ").concat(props.palette.error.main, ";\n    ");
});
exports.ButtonContainer = ButtonContainer;