import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTableBody = attachThemeAttrs(styled.tbody)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    counter-reset: rowCounter ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.rowNumberOffset;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
export default StyledTableBody;