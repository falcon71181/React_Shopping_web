import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
var StyledTextContainer = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1;\n    min-width: 0;\n    font-size: ", ";\n    color: ", ";\n"])), FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
});
export default StyledTextContainer;