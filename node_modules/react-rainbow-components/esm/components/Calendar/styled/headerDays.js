import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledHeaderDays = attachThemeAttrs(styled.th)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: center;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 40px;\n    height: 40px;\n    padding: 0;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_MEDIUM);
export default StyledHeaderDays;