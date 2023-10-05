import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledAnchorContent = attachThemeAttrs(styled.a)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 0.5rem 0;\n    background-color: transparent;\n    text-decoration: none;\n    transition: color 0.1s linear;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    border-radius: 12px;\n    cursor: pointer;\n    flex-direction: column;\n    box-sizing: border-box;\n    color: transparent;\n\n    :hover,\n    :active,\n    :focus {\n        background-color: ", ";\n        text-decoration: none;\n        color: transparent;\n        outline: 0;\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.isSelected && "\n            background-color: ".concat(props.palette.action.active, ";\n            outline: 0;\n        ");
});
export default StyledAnchorContent;