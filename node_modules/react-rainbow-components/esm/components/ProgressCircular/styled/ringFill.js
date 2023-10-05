import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledRingFill = attachThemeAttrs(styled.circle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    stroke: ", ";\n    transition: all 0.4s ease-out 0s;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.variant === 'success' && "\n            stroke: ".concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            stroke: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n            stroke: ".concat(props.palette.error.main, ";\n        ");
});
export default StyledRingFill;