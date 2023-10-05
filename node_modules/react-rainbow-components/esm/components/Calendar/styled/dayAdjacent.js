import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDayAdjacent = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    background-color: transparent;\n    color: ", ";\n    text-align: center;\n    font-size: ", ";\n    font-weight: 400;\n    line-height: 38px;\n    height: 38px;\n    width: 38px;\n    margin: 6px auto;\n    cursor: not-allowed;\n    user-select: none;\n    border-radius: 48px;\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n\n    &:focus,\n    &:active,\n    &:focus-visible {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n        line-height: 36px;\n        outline: none;\n    }\n"])), function (props) {
  return props.palette.text.disabled;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.palette.border.disabled;
});
export default StyledDayAdjacent;