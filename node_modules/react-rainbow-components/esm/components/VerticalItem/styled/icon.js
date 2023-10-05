import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledIcon = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-items: center;\n    color: ", ";\n    display: flex;\n    line-height: 1;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 1.25rem;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledIcon;