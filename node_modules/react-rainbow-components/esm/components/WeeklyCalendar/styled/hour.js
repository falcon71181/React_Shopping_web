import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledHour = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    height: 40px;\n    min-height: 40px;\n    padding-right: 8px;\n    text-align: right;\n    color: ", ";\n    font-size: ", ";\n\n    :first-child>div {\n        display: none;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_SMALL);
export default StyledHour;