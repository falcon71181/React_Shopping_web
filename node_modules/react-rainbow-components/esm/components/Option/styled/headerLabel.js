import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
var StyledHeaderLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    font-weight: normal;\n    text-transform: uppercase;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.header;
});
export default StyledHeaderLabel;