import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL, MARGIN_XX_SMALL } from '../../../styles/margins';
var StyledLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    margin-left: ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_MEDIUM, MARGIN_SMALL, function (props) {
  return props.labelAlignment === 'left' && "\n            margin-right: 12px;\n        ";
}, function (props) {
  return props.labelAlignment === 'top' && "\n            margin-left: 0;\n            margin-bottom: ".concat(MARGIN_XX_SMALL, ";\n        ");
});
export default StyledLabel;