import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

import styled, { keyframes } from 'styled-components';
import getSizeValue from '../helpers/getSizeValue';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var dashXLarge = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 248;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 177, 248;\n        stroke-dashoffset: -75;\n    }\n\n    100% {\n        stroke-dasharray: 177, 248;\n        stroke-dashoffset: -246;\n    }\n"])));
var dashLarge = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 141;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 100, 141;\n        stroke-dashoffset: -43;\n    }\n\n    100% {\n        stroke-dasharray: 100, 141;\n        stroke-dashoffset: -139;\n    }\n"])));
var dashMedium = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 91;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 65, 91;\n        stroke-dashoffset: -28;\n    }\n\n    100% {\n        stroke-dasharray: 65, 91;\n        stroke-dashoffset: -89;\n    }\n"])));
var dashSmall = keyframes(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 72;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 51, 72;\n        stroke-dashoffset: -22;\n    }\n\n    100% {\n        stroke-dasharray: 51, 72;\n        stroke-dashoffset: -70;\n    }\n"])));
var dashXSmall = keyframes(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 53;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 38, 53;\n        stroke-dashoffset: -16;\n    }\n\n    100% {\n        stroke-dasharray: 38, 53;\n        stroke-dashoffset: -51;\n    }\n"])));
var dashXXSmall = keyframes(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1, 41;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 29, 41;\n        stroke-dashoffset: -12;\n    }\n\n    100% {\n        stroke-dasharray: 29, 41;\n        stroke-dashoffset: -39;\n    }\n"])));
var dashMap = {
  'x-large': dashXLarge,
  large: dashLarge,
  medium: dashMedium,
  small: dashSmall,
  'x-small': dashXSmall,
  'xx-small': dashXXSmall
};
var StyledArcSpinner = attachThemeAttrs(styled.svg)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    animation: rotate 1s linear infinite;\n    display: block;\n    transform-origin: 50% 50%;\n    width: ", "px;\n    height: ", "px;\n\n    & .path {\n        stroke: ", ";\n        stroke-linecap: round;\n        animation: ", " 1.5s ease-in-out infinite;\n    }\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return getSizeValue(props.size);
}, function (props) {
  return getSizeValue(props.size);
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return dashMap[props.size] || dashMap.medium;
}, function (props) {
  return props.variant === 'brand' && "\n            & .path {\n                stroke: ".concat(props.palette.brand.main, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'inverse' && "\n            & .path {\n                stroke: ".concat(props.palette.getContrastText(props.palette.text.main), ";\n            }\n        ");
}, function (props) {
  return props.variant === 'neutral' && "\n            & .path {\n                stroke: ".concat(props.palette.background.highlight, ";\n            }\n        ");
});
export default StyledArcSpinner;