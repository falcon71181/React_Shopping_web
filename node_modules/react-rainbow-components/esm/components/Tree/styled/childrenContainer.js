import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var ChildrenContainerUl = attachThemeAttrs(styled.ul)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-left: 26px;\n    border-left: 1px solid ", ";\n    padding-left: 10px;\n\n    ", "\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.ariaLevelValue > 1 && "margin-left: 10px;";
});
export default ChildrenContainerUl;