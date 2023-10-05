import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { lighten } from '../../../styles/helpers/color';
import { MARGIN_SMALL } from '../../../styles/margins';
var StyledItemDescription = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    display: inline-block;\n    margin-left: 2rem;\n    line-height: 1.35em;\n    margin-bottom: ", ";\n    ", ";\n"])), function (props) {
  return lighten(props.palette.text.label, 0.2);
}, MARGIN_SMALL, function (props) {
  return props.disabled && "color: ".concat(props.palette.text.disabled, ";");
});
export default StyledItemDescription;