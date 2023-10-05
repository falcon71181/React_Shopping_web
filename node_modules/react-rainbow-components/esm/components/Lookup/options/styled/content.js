import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
var StyledContent = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    flex-direction: column;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
});
export default StyledContent;