import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledText from './text';
import StyledDivider from './divider';
var StyledLabel = attachThemeAttrs(styled.label)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    input:focus + span {\n        outline: 0;\n        box-shadow: ", ";\n        z-index: 1;\n    }\n    \n    input:hover + span,\n    input:focus + span,\n    input:active + span {\n        color: ", ";\n    }\n\n    input[disabled] + span {\n        color: ", ";\n        cursor: default;\n        background-color: transparent;\n    }  \n\n    input[disabled] + span {\n        cursor: default;\n        pointer-events: none;\n\n        svg {\n            fill: ", ";\n        }\n    }\n\n    ", "\n\n    ", "\n\n"])), function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.checked && "\n        z-index: 10;\n        ";
}, function (props) {
  return props.variant === 'shaded' && "\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ";
});
export { StyledLabel, StyledText, StyledDivider };