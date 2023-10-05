import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledNav = attachThemeAttrs(styled.nav)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    box-sizing: border-box;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.compact && "\n            li > a {\n                padding: 0.5rem 1rem 0.5rem 3rem;\n            }\n        ";
}, function (props) {
  return props.shaded && "\n            li {\n                background-color: ".concat(props.palette.background.secondary, ";\n\n                :hover,\n                :active {\n                    background-color: ").concat(props.palette.action.active, ";\n                }\n            }\n        ");
});
export default StyledNav;