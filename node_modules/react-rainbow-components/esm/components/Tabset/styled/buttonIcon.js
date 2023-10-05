import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';
var StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n\n    &:hover,\n    &:active,\n    &:focus {\n        color: ", ";\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.disabled;
});
export default StyledButtonIcon;