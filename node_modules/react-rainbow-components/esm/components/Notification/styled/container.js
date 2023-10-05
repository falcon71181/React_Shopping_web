import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { PADDING_SMALL } from '../../../styles/paddings';
var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    border-radius: ", ";\n    box-shadow: ", ";\n    padding: ", ";\n    background-color: ", ";\n    width: 20rem;\n    border: solid 1px ", ";\n    transition-duration: 0.4s;\n    transition-timing-function: ease-in-out;\n    transition-property: margin, max-height, opacity, top;\n    min-height: 2.625rem;\n\n    :hover {\n        background-color: ", ";\n        cursor: pointer;\n    }\n"])), BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
}, PADDING_SMALL, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.action.hover;
});
export default StyledContainer;