"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlider = exports.StyledInputRange = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../../styles/borderRadius");

var _colors = require("../../../../styles/colors");

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2;

var StyledSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    position: relative;\n    width: 100%;\n    padding: 2px 0;\n"])));

exports.StyledSlider = StyledSlider;
var StyledInputRange = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    appearance: none;\n    width: 100%;\n    margin: 0.5rem 0;\n    background: transparent;\n    border-radius: ", ";\n    box-sizing: border-box;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &::-webkit-slider-thumb {\n        appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #fff;\n        border: 0;\n        box-shadow: ", ";\n        cursor: pointer;\n        transition: all 0.3s ease 0s;\n        margin-top: calc(((1rem / 2) - (4px / 2)) * -1);\n    }\n\n    &::-webkit-slider-runnable-track {\n        width: 100%;\n        height: 4px;\n        cursor: pointer;\n        background: ", ";\n        border-radius: ", ";\n    }\n\n    &::-moz-range-thumb {\n        appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #fff;\n        border: 0;\n        box-shadow: ", ";\n        cursor: pointer;\n        transition: background 0.15s ease-in-out;\n    }\n\n    &::-moz-range-track {\n        width: 100%;\n        height: 4px;\n        cursor: pointer;\n        background: ", ";\n        border-radius: ", ";\n    }\n\n    &::-ms-track {\n        width: 100%;\n        height: 4px;\n        cursor: pointer;\n        border-radius: ", ";\n        background: transparent;\n        border-color: transparent;\n        color: transparent;\n    }\n\n    &::-ms-thumb {\n        width: 1rem;\n        height: 1rem;\n        border-radius: ", ";\n        background: #fff;\n        border: 0;\n        box-shadow: rgba(0, 0, 0, 0.16) 0 2px 3px;\n        cursor: pointer;\n        transition: background 0.15s ease-in-out;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n\n    &::-webkit-slider-thumb:hover {\n        background-color: ", ";\n    }\n\n    &::-moz-range-thumb:hover {\n        background-color: ", ";\n    }\n\n    &::-ms-thumb:hover {\n        background-color: ", ";\n    }\n\n    &:focus::-webkit-slider-thumb {\n        background-color: #fff;\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n\n    &:active::-webkit-slider-thumb {\n        background-color: #fff;\n        transition: all 0.3s ease 0s;\n        transform: scale3d(1.5, 1.5, 1);\n    }\n\n    &:focus::-moz-range-thumb {\n        background-color: #fff;\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n\n    &:active::-moz-range-thumb {\n        background-color: #fff;\n    }\n"])), _borderRadius.BORDER_RADIUS_3, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.palette.background.highlight;
}, _borderRadius.BORDER_RADIUS_3, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.palette.background.highlight;
}, _borderRadius.BORDER_RADIUS_3, _borderRadius.BORDER_RADIUS_3, _borderRadius.BORDER_RADIUS_2, _colors.COLOR_GRAY_1, _colors.COLOR_GRAY_1, _colors.COLOR_GRAY_1, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});
exports.StyledInputRange = StyledInputRange;