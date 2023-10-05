import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
var StyledTitle = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    margin: 0 1.25rem;\n    padding: 1.375rem 0 1.325rem;\n    display: block;\n    box-sizing: border-box;\n    font-family: 'Lato Light';\n    font-weight: 300;\n    font-size: ", ";\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;  \n    letter-spacing: normal;\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_HEADING_LARGE);
export default StyledTitle;