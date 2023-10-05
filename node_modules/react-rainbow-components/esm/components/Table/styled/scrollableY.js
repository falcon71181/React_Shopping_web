import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledScrollableY = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid ", ";\n    background-color: ", ";\n    ", ";\n    ", ";\n        \n    ", ";    \n    \n    ", ";\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.isEmpty && !props.isLoading && "\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n        ";
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n            border-top: none;\n        ";
}, function (props) {
  return props.theme.variant === 'listview' && props.isEmpty && "\n            border-top: 1px solid ".concat(props.palette.border.divider, ";\n        ");
}, function (props) {
  return props.theme.variant === 'listview' && props.isLoading && "\n            border-top: none;\n        ";
});
export default StyledScrollableY;