import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledFooter = attachThemeAttrs(styled.footer)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: normal;\n    color: inherit;\n    text-align: center;\n    border-top: 0.0625rem solid ", ";\n    padding: ", " ", ";\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.border.divider;
}, PADDING_SMALL, PADDING_MEDIUM);
export default StyledFooter;