import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledPercentValue = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 2rem;\n    font-weight: 400;\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.variant === 'success' && "\n            color: ".concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.variant === 'warning' && "\n            color: ".concat(props.palette.warning.main, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
});
export default StyledPercentValue;