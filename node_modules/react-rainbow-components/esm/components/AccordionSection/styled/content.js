import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_4 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { PADDING_MEDIUM, PADDING_XX_LARGE } from '../../../styles/paddings';
var StyledContent = attachThemeAttrs(styled.section)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1.57;\n    color: $color-gray-4;\n    padding-left: ", ";\n    padding-right: ", ";\n    padding-bottom: 0.875rem;\n    padding-top: 0.875rem;\n    ", ";\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-top: 0;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n"])), PADDING_XX_LARGE, PADDING_MEDIUM, function (props) {
  return props.isCollapsed && 'display: none;';
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, BORDER_RADIUS_4, BORDER_RADIUS_4);
export default StyledContent;