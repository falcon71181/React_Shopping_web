import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledBadge = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 20px;\n    line-height: 1;\n    padding: 0 6px;\n    height: 20px;\n    font-size: 12px;\n    font-weight: 600;\n    border-radius: 100px;\n    z-index: 1;\n    transition-timing-function: ease-in-out;\n    transition: 0.2s;\n    background-color: ", ";\n    color: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.error.main;
}, function (props) {
  return props.palette.getContrastText(props.palette.error.main);
}, function (props) {
  return props.variant === 'success' && "\n            background-color: ".concat(props.palette.success.main, ";\n            color: ").concat(props.palette.getContrastText(props.palette.success.main), ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            background-color: ".concat(props.palette.warning.main, ";\n            color: ").concat(props.palette.getContrastText(props.palette.warning.main), ";\n        ");
}, function (props) {
  return props.variant === 'brand' && "\n            background-color: ".concat(props.palette.brand.main, ";\n            color: ").concat(props.palette.getContrastText(props.palette.brand.main), ";\n        ");
}, function (props) {
  return props.position === 'top-left' && props.overlap === 'rectangle' && "\n            top: 0;\n            left: 0;\n            transform: scale(1) translate(-50%, -50%);\n            transform-origin: 0% 0%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(-50%, -50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'top-left' && props.overlap === 'circle' && "\n            top: 12%;\n            left: 12%;\n            transform: scale(1) translate(-50%, -50%);\n            transform-origin: 0% 0%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(-50%, -50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'top-right' && props.overlap === 'rectangle' && "\n            top: 0;\n            right: 0;\n            transform: scale(1) translate(50%, -50%);\n            transform-origin: 100% 0%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(50%, -50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'top-right' && props.overlap === 'circle' && "\n            top: 12%;\n            right: 12%;\n            transform: scale(1) translate(50%, -50%);\n            transform-origin: 100% 0%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(50%, -50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'bottom-left' && props.overlap === 'rectangle' && "\n            bottom: 0;\n            left: 0;\n            transform: scale(1) translate(-50%, 50%);\n            transform-origin: 0% 100%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(-50%, 50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'bottom-left' && props.overlap === 'circle' && "\n            bottom: 12%;\n            left: 12%;\n            transform: scale(1) translate(-50%, 50%);\n            transform-origin: 0% 100%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(-50%, 50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'bottom-right' && props.overlap === 'rectangle' && "\n            bottom: 0;\n            right: 0;\n            transform: scale(1) translate(50%, 50%);\n            transform-origin: 100% 100%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(50%, 50%);\n            ", ";\n        ");
}, function (props) {
  return props.position === 'bottom-right' && props.overlap === 'circle' && "\n            bottom: 12%;\n            right: 12%;\n            transform: scale(1) translate(50%, 50%);\n            transform-origin: 100% 100%;\n            ".concat(props.isHidden && "\n                    transform: scale(0) translate(50%, 50%);\n            ", ";\n        ");
}, function (props) {
  return !props.value && "\n            border-radius: 4px;\n            height: 8px;\n            min-width: 8px;\n            padding: 0;\n        ";
});
export default StyledBadge;