import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledIndicatorButton = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    width: 0.5rem;\n    height: 0.5rem;\n    background: ", ";\n    border-radius: 50%;\n    border: 1px solid ", ";\n    padding: 0;\n    box-sizing: border-box;\n    cursor: pointer;\n    color: inherit;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    :hover {\n        background-color: ", ";\n        border: 1px solid ", ";\n    }\n\n    :focus {\n        outline: 0;\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isSelected && "\n            background: ".concat(props.palette.brand.main, ";\n            border: 1px solid ").concat(props.palette.brand.main, ";\n\n            :hover {\n                background: ").concat(props.palette.brand.dark, ";\n                border: 1px solid ").concat(props.palette.brand.dark, ";\n            }\n        ");
});
export default StyledIndicatorButton;