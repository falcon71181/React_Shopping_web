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

var StyledSelectValue = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input).attrs(function (props) {
  var _props$palette = props.palette,
      getContrastText = _props$palette.getContrastText,
      brand = _props$palette.brand;
  var brandDarkContrastText = getContrastText(brand.dark);
  var brandMainContrastText = getContrastText(brand.main);
  return {
    brandDarkContrastText: brandDarkContrastText,
    brandMainContrastText: brandMainContrastText
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 40px;\n    font-weight: 200;\n    text-transform: uppercase;\n    color: ", ";\n    border: none;\n    width: 82px;\n    background-color: transparent;\n    border-radius: 4px;\n    height: 100%;\n    text-align: center;\n    box-sizing: border-box;\n    margin: 0;\n    line-height: normal;\n\n    &::selection {\n        color: ", ";\n        background: ", ";\n    }\n\n    &::-moz-selection {\n        color: ", ";\n        background: ", ";\n    }\n\n    &[placeholder]:focus::-webkit-input-placeholder {\n        color: ", ";\n    }\n\n    &[placeholder]:focus::-moz-placeholder {\n        color: ", ";\n    }\n\n    &[placeholder]:focus:-ms-input-placeholder {\n        color: ", ";\n    }\n\n    &[placeholder]:focus:-moz-placeholder {\n        color: ", ";\n    }\n\n    &::-webkit-input-placeholder {\n        color: ", ";\n        font-size: 40px;\n        font-weight: 200;\n        text-transform: uppercase;\n    }\n\n    &::-moz-placeholder {\n        color: ", ";\n        font-size: 40px;\n        font-weight: 200;\n        text-transform: uppercase;\n    }\n\n    &:-ms-input-placeholder {\n        color: ", ";\n        font-size: 40px;\n        font-weight: 200;\n        text-transform: uppercase;\n    }\n\n    &:-moz-placeholder {\n        color: ", ";\n        font-size: 40px;\n        font-weight: 200;\n        text-transform: uppercase;\n    }\n\n    &:focus,\n    &:active {\n        color: ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n        outline: none;\n        caret-color: transparent;\n    }\n\n    ", ";\n    ", ";\n\n    @media (max-width: 600px) {\n        width: 24%;\n        font-size: 32px;\n        font-weight: 100;\n\n        &::placeholder {\n            font-size: 34px;\n            font-weight: 100;\n        }\n    }\n\n    @media (max-width: 340px) {\n        font-size: 24px;\n\n        &::placeholder {\n            font-size: 24px;\n        }\n    }\n\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.brandDarkContrastText;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.brandDarkContrastText;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.isFocused === true && "\n        color: ".concat(props.brandMainContrastText, ";\n        background-color: ").concat(props.palette.brand.main, ";\n        box-shadow: ").concat(props.shadows.brand, ";\n        outline: none;\n        caret-color: transparent;\n\n        &[placeholder]::-webkit-input-placeholder {\n            color: ").concat(props.brandMainContrastText, ";\n        }\n\n        &[placeholder]::-moz-placeholder {\n            color: ").concat(props.brandMainContrastText, ";\n        }\n\n        &[placeholder]:-ms-input-placeholder {\n            color: ").concat(props.brandMainContrastText, ";\n        }\n\n        &[placeholder]:-moz-placeholder {\n            color: ").concat(props.brandMainContrastText, ";\n        }\n\n    ");
}, function (props) {
  return props.isFocused === false && "\n        &[placeholder]::-webkit-input-placeholder {\n            color: ".concat(props.palette.brand.main, ";\n        }\n\n        &[placeholder]::-moz-placeholder {\n            color: ").concat(props.palette.brand.main, ";\n        }\n\n        &[placeholder]:-ms-input-placeholder {\n            color: ").concat(props.palette.brand.main, ";\n        }\n\n        &[placeholder]:-moz-placeholder {\n            color: ").concat(props.palette.brand.main, ";\n        }\n\n    ");
}, function (props) {
  return !props.as === 'fieldset' && "\n            margin: 0;\n            line-height: normal;\n            box-sizing: border-box;\n            padding: 0;\n        ";
}, function (props) {
  return props.as === 'fieldset' && "\n            border: 0;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            flex-direction: column;\n        ";
});
var _default = StyledSelectValue;
exports["default"] = _default;