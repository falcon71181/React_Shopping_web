import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
var StyledDescription = attachThemeAttrs(styled.h2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    font-size: ", ";\n    color: ", ";\n    text-align: center;\n"])), FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
});
export default StyledDescription;