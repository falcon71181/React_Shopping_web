import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
import { MARGIN_X_SMALL } from '../../../../styles/margins';
var StyledEmptyDescription = attachThemeAttrs(styled.h2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    text-align: center;\n    color: ", ";\n    margin: 0;\n    margin-top: ", ";\n    padding: 0;\n    font-weight: inherit;\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.label;
}, MARGIN_X_SMALL);
export default StyledEmptyDescription;