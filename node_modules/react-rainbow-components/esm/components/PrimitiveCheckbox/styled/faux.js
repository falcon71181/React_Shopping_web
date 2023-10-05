import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';
var StyledFaux = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 1.25rem;\n    height: 1.25rem;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    background: ", ";\n    margin-right: $margin-small;\n    transition: border 0.1s linear, background-color 0.1s linear;\n"])), function (props) {
  return props.palette.border.divider;
}, BORDER_RADIUS_3, function (props) {
  return props.palette.background.main;
});
export default StyledFaux;