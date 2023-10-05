import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HelpText from '../../Input/styled/helpText';
import StyledTextError from '../../Input/styled/errorText';
var StyledErrorMessage = styled(StyledTextError)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 0;\n"])));
var StyledInput = attachThemeAttrs(styled.input).attrs(function (props) {
  return {
    renderFocusStyle: props.isActive && !props.error && !props.readOnly
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font: inherit;\n    background-color: ", ";\n    border: 1px solid ", ";\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: inline-block;\n    padding: 0 1rem;\n    width: 56px;\n    height: 56px;\n    border-radius: 20px;\n    line-height: 2.5rem;\n    color: ", ";\n    font-size: 28px;\n    box-sizing: border-box;\n    margin: 0 6px 12px 6px;\n    text-align: center;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0 0.9375rem;\n\n        ", "\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 500;\n        font-size: ", ";\n    }\n\n    &[readonly] {\n        border: 2px solid transparent;\n        background-color: transparent;\n        box-shadow: none;\n        margin: 0 0 12px 0;\n\n        &:focus,\n        &:active {\n            border: 2px solid transparent;\n            background-color: transparent;\n            box-shadow: none;\n        }\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 1px solid ", ";\n        }\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.renderFocusStyle && "\n            border: 2px solid ".concat(props.palette.brand.main, ";\n            background-color: ").concat(props.palette.background.main, ";\n            box-shadow: ").concat(props.shadows.brand, ";\n        ");
}, function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_LARGE, function (props) {
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
var StyledHelpText = styled(HelpText)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-top: 0;\n"])));
var StyledFieldset = styled.fieldset(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    line-height: 1.5rem;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    text-align: center;\n"])));
export { StyledErrorMessage, StyledInput, StyledHelpText, StyledFieldset };