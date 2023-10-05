import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    box-sizing: border-box;\n\n    @media (max-width: 600px) {\n        background-color: ", ";\n\n        &::before {\n            content: \"\";\n            height: 1px;\n            width: 100%;\n            left: 0;\n            bottom: 0px;\n            position: absolute;\n            background-color: ", ";\n        }\n    }\n\n    ", ";\n"])), function (props) {
  return props.variant === 'card' ? props.palette.background.main : 'transparent';
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.variant === 'line' && "\n            &::before {\n                content: \"\";\n                height: 1px;\n                width: 100%;\n                left: 0;\n                bottom: 0px;\n                position: absolute;\n                background-color: ".concat(props.palette.border.divider, ";\n            }\n        ");
});
export default StyledContainer;