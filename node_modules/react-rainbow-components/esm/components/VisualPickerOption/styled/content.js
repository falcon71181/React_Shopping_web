import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var sizeMap = {
  large: '210px',
  medium: '142px',
  small: '100px'
};
var StyledContent = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: ", ";\n    width: ", ";\n    border-radius: 22px;\n    box-shadow: ", ";\n    border: solid 2px ", ";\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n"])), function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});
export default StyledContent;