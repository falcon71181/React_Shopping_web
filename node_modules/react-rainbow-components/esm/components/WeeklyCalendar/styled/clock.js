import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledClock = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 8px;\n    width: 57px;\n    text-align: right;\n    color: ", ";\n    font-size: ", ";\n    z-index: 504;\n"])), function (props) {
  return props.palette.error.main;
}, FONT_SIZE_TEXT_SMALL);
export default StyledClock;