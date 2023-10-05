import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
var StyledLabel = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_HEADING_SMALL);
export default StyledLabel;