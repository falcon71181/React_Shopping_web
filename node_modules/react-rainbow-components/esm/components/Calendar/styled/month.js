import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledMonth = attachThemeAttrs(styled.h3)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n"])), FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.text.main;
});
export default StyledMonth;