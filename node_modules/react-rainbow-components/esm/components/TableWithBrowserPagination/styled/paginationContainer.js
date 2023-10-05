import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_SMALL } from '../../../styles/paddings';
var StyledPaginationContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", ";\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    ", ";\n    ", ";\n    ", "\n"])), PADDING_SMALL, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.paginationAlignment === 'right' && "\n            justify-content: flex-start;\n            flex-direction: row-reverse;\n        ";
}, function (props) {
  return props.paginationAlignment === 'left' && "\n            justify-content: flex-start;\n        ";
}, function (props) {
  return props.variant === 'listview' && "\n        background-color: transparent;\n        border-top: none;\n        border-bottom: none;\n    ";
});
export default StyledPaginationContainer;