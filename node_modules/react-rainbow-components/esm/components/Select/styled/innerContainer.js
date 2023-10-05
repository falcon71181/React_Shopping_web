import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInnerContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n\n    ::after {\n        content: '';\n        position: absolute;\n        display: block;\n        right: 1rem;\n        bottom: 45%;\n        pointer-events: none;\n        width: 0.5rem;\n        height: 0.5rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        vertical-align: top;\n        color: ", ";\n        box-sizing: border-box;\n    }\n\n    &[disabled]::after {\n        color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.error && "\n            ::after {\n                color: ".concat(props.palette.error.main, ";\n            }\n        ");
});
export default StyledInnerContainer;