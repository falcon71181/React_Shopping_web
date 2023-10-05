import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledArrowIcon = attachThemeAttrs(styled.svg)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    transform: rotate(0deg);\n    fill: ", ";\n    transition: transform 0.15s linear;\n    vertical-align: middle;\n    width: 1rem;\n\n    :not(:root) {\n        overflow: hidden;\n    }\n\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.isExpanded && "\n            transform: rotate(-180deg);\n            transition: transform 0.15s linear;\n        ";
}, function (props) {
  return props.disabled && "fill: ".concat(props.palette.text.disabled, ";");
});
export default StyledArrowIcon;