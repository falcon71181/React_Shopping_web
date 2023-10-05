import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_SEMI_ROUNDED, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SQUARE } from '../../../styles/borderRadius';
import attchThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attchThemeAttrs(styled.span).attrs(function (props) {
  var inverse = props.palette.text.label;
  return {
    inverse: inverse
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    border: 1px solid;\n    border-color: transparent;\n    display: inline-flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    line-height: normal;\n    text-transform: uppercase;\n    letter-spacing: 0.0625em;\n    border-radius: 12rem;\n    overflow: hidden;\n    padding: 0.25rem 0.75rem;\n    font-size: 0.75rem;\n\n    & + & {\n        margin-left: 0.5rem;\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    \n    ", ";\n    \n    ", ";\n    \n"])), function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.size === 'large' && "\n            padding: 0.65rem 0.9rem;\n            font-size: 0.9rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            padding: 0.15rem 0.4rem;\n            font-size: 0.7rem;\n        ";
}, function (props) {
  return props.variant === 'lightest' && "\n            background-color: ".concat(props.palette.background.main, ";\n            border-color: ").concat(props.palette.border.divider, ";\n        ");
}, function (props) {
  return props.variant === 'brand' && "\n            color: ".concat(props.palette.getContrastText(props.palette.brand.main), ";\n            background-color: ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.variant === 'outline-brand' && "\n            color: ".concat(props.palette.brand.main, ";\n            background-color: transparent;\n            border-color: ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.variant === 'inverse' && "\n            color: ".concat(props.palette.getContrastText(props.inverse), ";\n            background-color: ").concat(props.inverse, ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            color: ".concat(props.palette.getContrastText(props.palette.warning.main), ";\n            background-color: ").concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.variant === 'success' && "\n            color: ".concat(props.palette.getContrastText(props.palette.success.main), ";\n            background-color: ").concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n            color: ".concat(props.palette.getContrastText(props.palette.error.main), ";\n            background-color: ").concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default StyledContainer;