import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledScrollableX = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    overflow-x: auto;\n    padding-top: 44px;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.theme.hideTableHeader && "\n        padding-top: 0;\n        border-top: none;\n    ";
}, function (props) {
  return props.theme.variant === 'listview' && "\n            border-top: none;\n            background-color: transparent;\n    ";
});
export default StyledScrollableX;