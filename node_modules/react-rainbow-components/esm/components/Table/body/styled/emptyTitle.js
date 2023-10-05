import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';
var StyledEmptyTitle = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: 900;\n    text-align: center;\n    color: ", ";\n    margin: 0;\n    padding: 0;\n"])), FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.text.main;
});
export default StyledEmptyTitle;