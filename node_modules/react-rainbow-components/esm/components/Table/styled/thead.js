import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledThead = attachThemeAttrs(styled.thead)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ";\n"])), function (props) {
  return props.theme.hideTableHeader && "\n        visibility: hidden;\n    ";
});
export default StyledThead;