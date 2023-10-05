import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HelpText from '../../Input/styled/helpText';
import HiddenElement from '../../Structural/hiddenElement';
export var StyledFieldset = styled.fieldset(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    text-align: center;\n"])));
export var StyledHelpText = styled(HelpText)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-align: center;\n"])));
export var StyledInput = attachThemeAttrs(styled(HiddenElement))(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    &:focus + label {\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.readOnly && " \n            &:focus + label {\n                border-color: ".concat(props.palette.border.divider, ";\n                box-shadow: none;\n            }\n        ");
});
export var StyledWeekDayContainer = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    line-height: inherit;\n    height: inherit;\n\n    :not(:last-child) {\n        margin-right: 0.25rem;\n    }\n"])));
export var StyledWeekDayLabel = attachThemeAttrs(styled.label).attrs(function (props) {
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
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    display: inline-block;\n    text-align: center;\n    font-size: 10px;\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: all 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        background-color: ", ";\n        border: 1px solid ", ";\n        cursor: pointer;\n    }\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n"])), function (props) {
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