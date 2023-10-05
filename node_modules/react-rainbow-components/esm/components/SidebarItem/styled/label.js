import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
var StyledLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-family: 'Lato Regular', Arial, sans-serif;\n    font-size: ", ";\n    letter-spacing: -0.2px;\n    text-align: center;\n    color: ", ";\n\n    ", ";\n"])), FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.isSelected && "\n        color: ".concat(props.palette.text.main, ";\n    ");
});
export default StyledLabel;