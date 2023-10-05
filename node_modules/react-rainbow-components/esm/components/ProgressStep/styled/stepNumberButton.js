import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledStepNumberButton = attachThemeAttrs(styled.button).attrs(function (props) {
  var contrastText = props.palette.getContrastText(props.palette.brand.main);
  return {
    contrastText: contrastText
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 1.25rem;\n    height: 1.25rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    cursor: auto;\n    z-index: 1;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:active {\n        transform: scale(0.7);\n        transition: all 0.3s ease;\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.stepState === 'Inactive' && "\n            background-color: ".concat(props.palette.background.highlight, ";\n        ");
}, function (props) {
  return props.stepState === 'Active' && "\n            color: ".concat(props.contrastText, ";\n            background-color: ").concat(props.palette.brand.main, ";            \n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.contrastText, ";\n            }\n        ");
});
export default StyledStepNumberButton;