import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledHeaderLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1.25;\n    color: ", ";\n    font-weight: 400;\n    text-transform: uppercase;\n    letter-spacing: 0.025rem;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.header;
});
export default StyledHeaderLabel;