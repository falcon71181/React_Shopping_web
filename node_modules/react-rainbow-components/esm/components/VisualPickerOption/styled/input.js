import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HiddenElement from '../../Structural/hiddenElement';
var StyledInput = attachThemeAttrs(styled(HiddenElement))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    line-height: normal;\n\n    :hover ~ label > [data-id='visual-picker_option'] {\n        cursor: pointer;\n        border: solid 1.5px ", ";\n        box-shadow: ", ";\n    }\n\n    :focus ~ label > [data-id='visual-picker_option'] {\n        border: solid 1px ", ";\n        box-shadow: ", ", ", ";\n    }\n\n    :checked ~ label > [data-id='visual-picker_option'] {\n        border: solid 2px ", ";\n        position: relative;\n    }\n\n    &[disabled] ~ label > [data-id='visual-picker_option'] {\n        border: solid 1.5px ", ";\n        box-shadow: 0 0 0 0 transparent;\n        background-color: ", ";\n        cursor: not-allowed;\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.palette.brand.light;
}, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.background.disabled;
});
export default StyledInput;