import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var LabelText = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline;\n    vertical-align: middle;\n    color: ", ";\n    font-size: ", ";\n    line-height: 1.65rem;\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
export default LabelText;