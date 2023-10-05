import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL } from '../../../styles/margins';
var StyledDatetime = attachThemeAttrs(styled.p)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    margin: 0;\n    padding: 0;\n    margin-left: ", ";\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_MEDIUM, MARGIN_SMALL);
export default StyledDatetime;