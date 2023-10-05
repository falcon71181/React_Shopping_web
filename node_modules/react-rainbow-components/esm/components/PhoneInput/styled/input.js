import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInput = attachThemeAttrs(styled.input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1 0 auto;\n    font: inherit;\n    background-color: transparent;\n    line-height: 2.5rem;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    border: 0;\n    padding: 0;\n\n    ", ";\n\n    ", ";\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0;\n    }\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 300;\n        font-size: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    &[readonly] {\n        color: ", ";\n        font-weight: 400;\n        cursor: text;\n        box-sizing: border-box;\n    }\n\n    &[disabled] {\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            line-height: 3.275rem;\n            font-size: ".concat(FONT_SIZE_HEADING_MEDIUM, ";\n        ");
}, function (props) {
  return props.size === 'small' && "\n            line-height: 1.775rem;\n            font-size: ".concat(FONT_SIZE_TEXT_MEDIUM, ";\n        ");
}, function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n                font-size: ".concat(FONT_SIZE_HEADING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(FONT_SIZE_TEXT_MEDIUM, ";\n            ");
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.disabled;
});
export default StyledInput;