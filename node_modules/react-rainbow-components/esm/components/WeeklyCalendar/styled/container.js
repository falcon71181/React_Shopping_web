import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n"])), function (props) {
  return props.palette.background.main;
});
export default StyledContainer;