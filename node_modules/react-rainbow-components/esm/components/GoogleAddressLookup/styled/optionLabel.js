import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledOptionLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (props) {
  return props.palette.text.header;
});
export default StyledOptionLabel;