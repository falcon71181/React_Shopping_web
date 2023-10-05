import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import BorderRadiusElement from '../../Structural/borderRadiusElement';
export var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n\n    &:hover,\n    &:focus {\n        outline: 0;\n    }\n"])));
export var StyledContent = styled.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n"])));
export var StyledDropdown = attachThemeAttrs(styled(BorderRadiusElement))(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    min-width: 6rem;\n    max-width: 20rem;\n    max-height: 372px;\n    margin-top: 0.125rem;\n    margin-bottom: 0.125rem;\n    padding: 0.5rem 0;\n    font-size: 0.75rem;\n    background: ", ";\n    box-shadow: ", ";\n    display: block;\n    opacity: 1;\n    transition: opacity 0.1s linear, visibility 0.1s linear;\n    visibility: visible;\n    overflow-y: auto;\n    overflow-x: hidden;\n    top: 100%;\n\n    ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", ";    \n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_12;
}, function (props) {
  return props.isLoading && "\n            padding: 2rem;\n            height: 3rem;\n            width: 3rem;\n        ";
}, function (props) {
  return props.menuSize === 'xx-small' && 'min-width: 6rem;';
}, function (props) {
  return props.menuSize === 'x-small' && 'min-width: 12rem;';
}, function (props) {
  return props.menuSize === 'small' && 'min-width: 15rem;';
}, function (props) {
  return props.menuSize === 'medium' && 'min-width: 20rem;';
}, function (props) {
  return props.menuSize === 'large' && "\n            min-width: 25rem;\n            max-width: 512px;\n        ";
});