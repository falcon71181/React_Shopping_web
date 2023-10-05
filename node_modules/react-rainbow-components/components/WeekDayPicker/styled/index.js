"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledWeekDayLabel = exports.StyledWeekDayContainer = exports.StyledInput = exports.StyledHelpText = exports.StyledFieldset = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var StyledFieldset = _styledComponents["default"].fieldset(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    text-align: center;\n"])));

exports.StyledFieldset = StyledFieldset;
var StyledHelpText = (0, _styledComponents["default"])(_helpText["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: center;\n"])));
exports.StyledHelpText = StyledHelpText;
var StyledInput = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_hiddenElement["default"]))(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    &:focus + label {\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.readOnly && " \n            &:focus + label {\n                border-color: ".concat(props.palette.border.divider, ";\n                box-shadow: none;\n            }\n        ");
});
exports.StyledInput = StyledInput;

var StyledWeekDayContainer = _styledComponents["default"].span(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    line-height: inherit;\n    height: inherit;\n\n    :not(:last-child) {\n        margin-right: 0.25rem;\n    }\n"])));

exports.StyledWeekDayContainer = StyledWeekDayContainer;
var StyledWeekDayLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label).attrs(function (props) {
  var palette = props.palette;
  var borderColor = palette.border.divider;
  var defaultColor = palette.text.label;
  var defaultBackground = palette.background.main;
  var activeColor = palette.getContrastText(palette.brand.main);
  var activeBackground = palette.brand.main;
  return {
    borderColor: borderColor,
    defaultColor: defaultColor,
    defaultBackground: defaultBackground,
    activeColor: activeColor,
    activeBackground: activeBackground
  };
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    display: inline-block;\n    text-align: center;\n    font-size: 10px;\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: all 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        background-color: ", ";\n        border: 1px solid ", ";\n        cursor: pointer;\n    }\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n"])), function (props) {
  return props.defaultColor;
}, function (props) {
  return props.defaultBackground;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.activeColor;
}, function (props) {
  return props.activeBackground;
}, function (props) {
  return props.activeBackground;
}, function (props) {
  return props.isChecked && "\n        color: ".concat(props.activeColor, ";\n        background-color: ").concat(props.activeBackground, ";\n        border: 1px solid ").concat(props.activeBackground, ";\n\n        &:hover {\n            background-color: ").concat(props.palette.brand.dark, ";\n            border: 1px solid ").concat(props.palette.brand.dark, ";\n        }\n    ");
}, function (props) {
  return props.disabled && "\n        border-color: ".concat(props.palette.border.disabled, ";\n        background-color: ").concat(props.palette.background.disabled, ";\n        color: ").concat(props.palette.text.disabled, ";\n        cursor: default;\n\n        &:hover {\n            cursor: default;\n            border-color: transparent;\n            background-color: ").concat(props.palette.background.disabled, ";\n            color: ").concat(props.palette.text.disabled, ";\n            border-color: ").concat(props.palette.border.disabled, ";\n        }\n    ");
}, function (props) {
  return props.readOnly && "\n        &:hover {\n            color: ".concat(props.defaultColor, ";\n            background-color: ").concat(props.defaultBackground, ";\n            border: 1px solid ").concat(props.borderColor, ";\n            cursor: default;\n\n            ").concat(props.isChecked && "\n                color: ".concat(props.activeColor, ";\n                background-color: ").concat(props.activeBackground, ";\n                border: 1px solid ").concat(props.activeBackground, ";\n            "), "\n        }\n\n        ").concat(props.disabled && "\n            cursor: default;\n            border: 1px solid ".concat(props.activeBackground, ";\n        "), "\n    ");
});
exports.StyledWeekDayLabel = StyledWeekDayLabel;