import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDescription = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 10px;\n    font-weight: normal;\n    color: ", ";\n    letter-spacing: 0.5px;\n"])), function (props) {
  return props.palette.text.label;
});
export default StyledDescription;