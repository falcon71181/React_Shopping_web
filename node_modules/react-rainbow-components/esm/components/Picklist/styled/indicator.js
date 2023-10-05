import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledIndicator = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    right: 1.2rem;\n    position: absolute;\n    line-height: 1;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        bottom: 45%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        color: ", ";\n        box-sizing: border-box;\n    }\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            &::after {\n                color: ".concat(props.palette.text.disabled, ";\n            }\n    ");
}, function (props) {
  return props.error && "\n            ::after {\n                color: ".concat(props.palette.error.main, ";\n            }\n    ");
});
export default StyledIndicator;