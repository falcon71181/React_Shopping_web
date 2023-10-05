import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_2, BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInputContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    font: inherit;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    width: 100%;\n    transition: all 0.1s linear, padding 0s, border 0s;\n    padding: 1px 1rem 1px 1px;\n    line-height: 2.5rem;\n    height: 2.5rem;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    display: flex;\n\n    ", ";\n\n    ", ";\n\n\n    ", ";\n\n    ", "\n\n    ", ";\n\n\n    &[disabled] {\n        padding: 1px 0.9375rem 1px 1px;\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n        ", "\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 1px solid ", ";\n        }\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, BORDER_RADIUS_2, function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            padding: 1px 1.2rem 1px 1px;\n            line-height: 3.275rem;\n            font-size: ".concat(FONT_SIZE_HEADING_MEDIUM, ";\n            height: 3.4rem;\n        ");
}, function (props) {
  return props.size === 'small' && "\n            padding:1px 0.8rem 1px 1px;\n            line-height: 1.775rem;\n            font-size: ".concat(FONT_SIZE_TEXT_MEDIUM, ";\n            height: 1.9rem;\n        ");
}, function (props) {
  return props.isFocus && "\n        outline: 0;\n        padding: 0 0.9375rem 0 0;\n        border: 2px solid ".concat(props.palette.brand.main, ";\n        background-color: ").concat(props.palette.background.main, ";\n        box-shadow: ").concat(props.shadows.brand, ";\n        ").concat(props.size === 'large' && "\n                padding: 0 1.125rem 0 0;\n            ", ";\n    \n        ").concat(props.size === 'small' && "\n                padding: 0 0.75rem 0 0;\n            ", ";\n    ");
}, function (props) {
  return props.error && "\n        padding: 0 0.9375rem 0 0;\n        background-color: ".concat(props.palette.background.main, ";\n        border: 2px solid ").concat(props.palette.error.main, ";\n        background-clip: padding-box;\n\n        ").concat(props.size === 'large' && "\n                padding: 0 1.125rem 0 0;\n            ", ";\n    \n        ").concat(props.size === 'small' && "\n                padding: 0 0.75rem 0 0;\n            ", ";\n\n        ").concat(props.isFocus && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 2px solid ").concat(props.palette.error.main, ";\n            box-shadow: ").concat(props.shadows.error, ";\n            outline: 0;\n        "), "\n\n    ");
}, function (props) {
  return props.readOnly && "\n        padding: 0 1rem 0 0;\n        background-color: transparent;\n        border: 2px transparent solid;\n        box-sizing: border-box;\n        box-shadow: inherit;\n    ";
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return !props.icon && 'padding-right: 0.9375rem;';
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default StyledInputContainer;