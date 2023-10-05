import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledGuideline = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: transparent;\n    height: 100vh;\n    position: absolute;\n    right: 0;\n    width: 1px;\n\n    :hover {\n        background-color: ", ";\n    }\n\n    :active {\n        background-color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.dark;
});
export default StyledGuideline;