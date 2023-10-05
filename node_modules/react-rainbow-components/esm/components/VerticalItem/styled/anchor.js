import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
var StyledAnchor = attachThemeAttrs(styled.a)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 1rem 1rem 1rem 3rem;\n    border-radius: 0;\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    transition: color 0.1s linear;\n    box-sizing: border-box;\n\n    :hover,\n    :focus,\n    :active {\n        color: ", ";\n        text-decoration: none;\n        outline: 0;\n    }\n\n    :focus,\n    :active {\n        font-weight: bold;\n        background-color: ", ";\n    }\n\n    :hover {\n        background-color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.isSelected && "\n            color: ".concat(props.palette.text.main, ";\n            background-color: ").concat(props.palette.action.active, ";\n            font-weight: bold;\n        ");
});
export default StyledAnchor;