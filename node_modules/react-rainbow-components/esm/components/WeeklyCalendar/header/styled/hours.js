import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../../styles/fontSizes';
var StyledHours = attachThemeAttrs(styled.h4)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex:none;\n    text-align: center;\n    color: ", ";\n    min-width: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: ", ";\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_SMALL);
export default StyledHours;