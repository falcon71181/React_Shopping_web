"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.StyledHelpText = exports.StyledFieldset = exports.StyledErrorMessage = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledErrorMessage = (0, _styledComponents["default"])(_errorText["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: 0;\n"])));
exports.StyledErrorMessage = StyledErrorMessage;
var StyledInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].input).attrs(function (props) {
  return {
    renderFocusStyle: props.isActive && !props.error && !props.readOnly
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: inline-block;\n    padding: 0 1rem;\n    width: 56px;\n    height: 56px;\n    border-radius: 20px;\n    line-height: 2.5rem;\n    color: ", ";\n    font-size: 28px;\n    box-sizing: border-box;\n    margin: 0 6px 12px 6px;\n    text-align: center;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0 0.9375rem;\n\n        ", "\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 500;\n        font-size: ", ";\n    }\n\n    &[readonly] {\n        border: 2px solid transparent;\n        background-color: transparent;\n        box-shadow: none;\n        margin: 0 0 12px 0;\n\n        &:focus,\n        &:active {\n            border: 2px solid transparent;\n            background-color: transparent;\n            box-shadow: none;\n        }\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 1px solid ", ";\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.renderFocusStyle && "\n            border: 2px solid ".concat(props.palette.brand.main, ";\n            background-color: ").concat(props.palette.background.main, ";\n            box-shadow: ").concat(props.shadows.brand, ";\n        ");
}, function (props) {
  return props.palette.text.header;
}, _fontSizes.FONT_SIZE_TEXT_LARGE, function (props) {
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
  return props.error && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: 2px solid ").concat(props.palette.error.main, ";\n        background-clip: padding-box;\n\n        :focus,\n        :active {\n            box-shadow: ").concat(props.shadows.error, ";\n            padding: 0 1rem;\n            outline: 0;\n        }\n    ");
});
exports.StyledInput = StyledInput;
var StyledHelpText = (0, _styledComponents["default"])(_helpText["default"])(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: 0;\n"])));
exports.StyledHelpText = StyledHelpText;

var StyledFieldset = _styledComponents["default"].fieldset(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    text-align: center;\n"])));

exports.StyledFieldset = StyledFieldset;