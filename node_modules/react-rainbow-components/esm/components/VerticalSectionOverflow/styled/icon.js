import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledIcon = attachThemeAttrs(styled.svg)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-left: 0.5rem;\n    margin-top: 0.625rem;\n    transform: rotate(0deg);\n    transition: transform 0.15s linear;\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isExpanded && "\n            transform: rotate(-180deg);\n            transition: transform 0.15s linear;\n        ";
});
export default StyledIcon;