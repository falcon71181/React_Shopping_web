import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledStepButton = attachThemeAttrs(styled(ButtonIcon)).attrs(function (props) {
  var contrastText = props.palette.getContrastText(props.palette.brand.main);
  return {
    contrastText: contrastText
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 1.25rem;\n    height: 1.25rem;\n    cursor: auto;\n    z-index: 1;\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.stepState === 'Inactive' && "\n            width: 0.75rem;\n            height: 0.75rem;\n            margin: 0.25rem;\n            background-color: ".concat(props.palette.background.highlight, ";\n        ");
}, function (props) {
  return props.stepState === 'Completed' && "\n            color: ".concat(props.contrastText, ";\n            background-color: ").concat(props.palette.brand.main, ";\n            \n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.contrastText, ";\n            }\n\n            > svg {\n                width: 0.75rem !important;\n                height: 0.75rem !important;\n            }\n        ");
}, function (props) {
  return props.stepState === 'Active' && "\n            background-color: ".concat(props.contrastText, ";\n        ");
}, function (props) {
  return props.stepState === 'Error' && "\n            color: ".concat(props.palette.error.main, ";\n\n            &:hover, &:focus, &:active {\n                color: ").concat(props.palette.error.main, ";\n            }\n\n            > svg {\n                width: 100% !important;\n                height: 100% !important;\n        ");
});
export default StyledStepButton;