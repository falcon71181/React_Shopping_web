import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDivider = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    box-sizing: border-box;\n    height: 1px;\n    background: ", ";\n    margin: 0 1.25rem;\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDivider;