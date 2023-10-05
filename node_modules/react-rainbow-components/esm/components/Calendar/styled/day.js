import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDay = attachThemeAttrs(styled.td)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: center;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 400;\n    border-radius: 100%;\n    width: 38px;\n    padding: 0;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_MEDIUM);
export default StyledDay;