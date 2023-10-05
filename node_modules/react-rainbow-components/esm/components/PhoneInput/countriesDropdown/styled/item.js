import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';
var StyledItem = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    font-size: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 0.75rem;\n    height: 45px;\n    color: ", ";\n    white-space: nowrap;\n    cursor: pointer;\n    text-decoration: none;\n\n    &:hover,\n    &:active,\n    &[aria-selected=\"true\"] {\n        background-color: ", ";\n    }\n\n    ", ";\n\n    &[aria-disabled='true'] {\n        color: ", ";\n        cursor: default;\n\n        &:hover,\n        &:focus {\n            background-color: transparent;\n        }\n    }\n"])), FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return !props.isSelected && "\n            padding-right: 37px;\n        ";
}, function (props) {
  return props.palette.text.disabled;
});
export default StyledItem;