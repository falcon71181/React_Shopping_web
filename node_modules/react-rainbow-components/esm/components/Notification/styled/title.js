import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';
var StyledTitle = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    font-weight: inherit;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1;\n    padding: 0 ", " 0 0;\n"])), FONT_SIZE_HEADING_SMALL, function (props) {
  return props.palette.text.main;
}, PADDING_MEDIUM);
export default StyledTitle;