import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
var StyledButton = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    display: flex;\n    align-items: center;\n    padding: 0.5rem;\n    width: 100%;\n    font-size: inherit;\n    color: inherit;\n    line-height: inherit;\n    background: transparent;\n    border: 0;\n    text-align: inherit;\n    border-radius: ", ";\n    cursor: pointer;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover {\n        background-color: ", ";\n    }\n\n    &:focus {\n        outline: none;\n        background-color: ", ";\n    }\n\n    &[aria-pressed='true'] {\n        background-color: ", ";\n    }\n\n    & * {\n        pointer-events: none;\n    }\n"])), BORDER_RADIUS_2, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.palette.action.active;
});
export default StyledButton;