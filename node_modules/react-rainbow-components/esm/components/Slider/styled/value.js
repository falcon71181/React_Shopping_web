import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
var StyledValue = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0 0.5rem;\n    color: ", ";\n    font-size: ", ";\n    width: ", "ch;\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.width;
});
export default StyledValue;