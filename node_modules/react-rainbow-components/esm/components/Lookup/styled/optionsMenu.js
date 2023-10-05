import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled, { keyframes } from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BorderRadiusElement } from '../../Structural';
var ListOptionsMenu = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n"])));
var StyledOptionsMenu = attachThemeAttrs(styled(BorderRadiusElement))(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    background-color: ", ";\n    box-shadow: ", ";\n    overflow: hidden;\n    margin-top: 0.2rem;\n    z-index: 2000;\n    animation: ", ";\n    animation-duration: 0.3s\n    padding: 1.15rem 0;\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_12;
}, ListOptionsMenu);
export default StyledOptionsMenu;