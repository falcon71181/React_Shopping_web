import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { BorderRadiusElement } from '../../../Structural';
var StyledDropdown = attachThemeAttrs(styled(BorderRadiusElement))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    overflow: hidden;\n    float: left;\n    width: 100%;\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n    border: solid 1px ", ";\n    padding: 0 0 1rem 0;\n    font-size: 0.75rem;\n    background: ", ";\n    box-shadow: ", ";\n    top: 100%;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.shadow_2;
});
export default StyledDropdown;