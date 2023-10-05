import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledFooter = attachThemeAttrs(styled.footer)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-top: 0.0625px solid ", ";\n    padding: 0.75rem 1rem;\n    flex-shrink: 0;\n    display: block;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledFooter;