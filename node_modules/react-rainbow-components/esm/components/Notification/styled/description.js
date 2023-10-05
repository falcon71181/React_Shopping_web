import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_XX_SMALL } from '../../../styles/paddings';
var StyledDescription = attachThemeAttrs(styled.p)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    font-size: ", ";\n    font-weight: 300;\n    color: ", ";\n    padding: ", " 0 0 0;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.label;
}, PADDING_XX_SMALL);
export default StyledDescription;