import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDivider = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-top: solid 1px ", ";\n    box-sizing: border-box;\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.variant === 'space' && "\n            margin-top: 0.5rem;\n            padding-top: 0.5rem;\n        ";
});
export default StyledDivider;