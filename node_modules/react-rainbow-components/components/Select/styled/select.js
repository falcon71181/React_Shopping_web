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

var _paddings = require("../../../styles/paddings");

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledSelect = (0, _attachThemeAttrs["default"])(_styledComponents["default"].select)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    margin: 0;\n    text-transform: none;\n    width: 100%;\n    appearance: none;\n    line-height: 2rem;\n    height: 2.5rem;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 0 1.8rem 0 ", ";\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    transition: all 0.1s linear;\n    box-sizing: border-box;\n\n    ", ";\n\n    ", ";\n\n    &::-ms-expand {\n        display: none;\n    }\n\n    &:focus,\n    &:active,\n    &:visited {\n        outline: 0;\n        padding-left: 0.9375rem;\n        padding-right: 1.7375rem;\n        border: 0.125rem ", " solid;\n        box-shadow: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    &[disabled] {\n        user-select: none;\n        cursor: not-allowed;\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 0.0626rem ", " solid;\n            padding-left: ", ";\n            padding-right: 1.8rem;\n            ", ";\n        \n            ", ";\n        }\n    }\n\n    ", "\n\n    ", ";\n\n        ", ";\n\n        ", ";\n    \n        ", ";\n"])), function (props) {
  return props.palette.border.main;
}, _borderRadius.BORDER_RADIUS_2, _paddings.PADDING_MEDIUM, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.main;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            padding-left: 1.2rem;\n            line-height: 3.125rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";\n            height: 3.4rem;\n        ");
}, function (props) {
  return props.size === 'small' && "\n            padding-left: 0.8rem;\n            line-height: 1.6rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n            height: 1.9rem;\n        ");
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.size === 'large' && "\n                padding-left: 1.125rem;\n            ";
}, function (props) {
  return props.size === 'small' && "\n                padding-left: 0.75rem;\n            ";
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.border.divider;
}, _paddings.PADDING_MEDIUM, function (props) {
  return props.size === 'large' && "\n                    padding-left: 1.2rem;\n                ";
}, function (props) {
  return props.size === 'small' && "\n                    padding-left: 0.8rem;\n                ";
}, function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:".concat(props.disabled ? '' : props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n    ");
}, function (props) {
  return props.error && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 0.125rem ").concat(props.palette.error.main, " solid;\n            background-clip: padding-box;\n            padding-left: ").concat(_paddings.PADDING_MEDIUM, ";\n            padding-right: 1.8rem;\n\n            &:focus, &:active {\n                box-shadow: ").concat(props.shadows.error, ";\n                border: 0.125rem ").concat(props.palette.error.main, " solid;\n            }\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n            ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n            ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n            ");
});
var _default = StyledSelect;
exports["default"] = _default;