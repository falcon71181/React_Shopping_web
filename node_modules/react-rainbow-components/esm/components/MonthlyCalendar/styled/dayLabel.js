import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDayLabel = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    text-align: right;\n    padding: 7px 7px 0 0;\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE);
export default StyledDayLabel;