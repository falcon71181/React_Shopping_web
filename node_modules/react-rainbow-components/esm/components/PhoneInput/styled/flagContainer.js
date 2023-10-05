import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledFlagContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    padding-right: 12px;\n    border-right: 1px solid ", ";\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.readOnly && "\n        border-right: 1px solid transparent;\n        padding-right: 8px;\n    ";
}, function (props) {
  return props.disabled && "\n        border-right: 1px solid ".concat(props.palette.border.disabled, ";\n    ");
});
export default StyledFlagContainer;