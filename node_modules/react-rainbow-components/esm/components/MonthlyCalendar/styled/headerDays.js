import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledHeaderDays = attachThemeAttrs(styled.th)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: 900;\n    line-height: 40px;\n    text-align: center;\n    height: 40px;\n    padding: 0;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.palette.border.divider;
});
export default StyledHeaderDays;