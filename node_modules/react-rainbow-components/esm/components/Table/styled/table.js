import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTable = attachThemeAttrs(styled.table)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    table-layout: fixed;\n    border-collapse: separate;\n    background-color: ", ";\n    border-spacing: 0;\n    width: 100%;\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
export default StyledTable;