import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDivider = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 60%;\n    width: 1px;\n    background-color: ", ";\n    display: inline-block;\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDivider;