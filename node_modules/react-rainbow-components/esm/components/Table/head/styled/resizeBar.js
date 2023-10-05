import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledResizeBar = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: transparent;\n    border-radius: 100px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 3px;\n    z-index: 1000;\n    cursor: col-resize;\n\n    :hover {\n        background-color: ", " !important;\n\n        & span {\n            background-color: ", ";\n        }\n    }\n\n    :active {\n        background-color: ", " !important;\n\n        & span {\n            background-color: ", ";\n        }\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.brand.dark;
});
export default StyledResizeBar;