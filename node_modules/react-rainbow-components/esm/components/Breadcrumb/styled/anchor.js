import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
var StyledAnchor = attachThemeAttrs(styled.a)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    background: none;\n    border: none;\n    padding: 0;\n    outline: inherit;\n    cursor: pointer;\n    letter-spacing: 0.3px;\n    font-size: ", ";\n    color: ", ";\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    :hover {\n        color: ", ";\n    }\n\n    &:focus {\n        color: ", ";\n    }\n\n    :active {\n        transform: scale(0.95);\n        transition: all 0.2s ease;\n    }\n\n    ::after {\n        display: block;\n        content: \"\";\n        border-bottom: 2px solid ", ";\n        transform: scaleX(0);\n        transition: transform 250ms ease-in-out;\n    }\n\n    :hover::after {\n        transform: scaleX(1);\n    }\n\n    ", ";\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            color: ".concat(props.palette.text.disabled, ";\n            pointer-events: none;\n    ");
});
export default StyledAnchor;