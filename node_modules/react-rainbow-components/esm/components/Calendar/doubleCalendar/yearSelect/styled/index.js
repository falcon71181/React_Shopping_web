import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../../styles/fontSizes';
export var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n\n    ", ";\n"])), function (props) {
  return props.editMode && "\n        ::after {\n            content: '';\n            position: absolute;\n            display: block;\n            right: 0.6rem;\n            bottom: 45%;\n            pointer-events: none;\n            width: 0.45rem;\n            height: 0.45rem;\n            border-style: solid;\n            border-width: 0.15em 0.15em 0 0;\n            transform: rotate(135deg);\n            vertical-align: top;\n            color: ".concat(props.palette.brand.main, ";\n            box-sizing: border-box;\n        }\n        ");
});
export var StyledSelect = attachThemeAttrs(styled.select)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font: inherit;\n    margin: 0;\n    text-transform: none;\n    font-size: ", ";\n    background: ", ";\n    color: ", ";\n    line-height: 2.12rem;\n    height: 2.25rem;\n    border-radius: 18px;\n    box-sizing: border-box;\n    transition: all 0.1s linear;\n    border: 1px solid transparent;\n    appearance: none;\n    padding: 0 1.25rem 0 1rem;\n\n    &::-ms-expand {\n        display: none;\n    }\n\n    option {\n        font-size: ", ";\n    }\n\n    &:hover,\n    &:focus,\n    &:active,\n    &:visited {\n        outline: 0;\n        background: ", ";\n        color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:visited\n    &:focus,\n    &:active {\n        box-shadow: ", ";\n    }\n"])), FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.text.main;
}, FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.shadows.brand;
});