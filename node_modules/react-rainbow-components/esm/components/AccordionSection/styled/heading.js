import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';
var StyledHeading = attachThemeAttrs(styled.h3)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: ", ";\n    font-weight: bold;\n    line-height: 1.25;\n    color: ", ";\n    width: 100%;\n    margin: 0;\n    padding: 0 ", ";\n    ", ";\n    text-align: left;\n"])), FONT_SIZE_HEADING_SMALL, function (props) {
  return props.palette.text.main;
}, PADDING_MEDIUM, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
export default StyledHeading;