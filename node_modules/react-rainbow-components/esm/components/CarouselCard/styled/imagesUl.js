import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
var StyledImagesUl = attachThemeAttrs(styled.ul)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    border-radius: ", ";\n    border: 1px solid ", ";\n    box-shadow: ", ";\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n\n    :active,\n    :focus {\n        color: inherit;\n        text-decoration: inherit;\n        box-shadow: 0 0 1px ", ";\n        outline: none;\n    }\n"])), BORDER_RADIUS_1, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.palette.brand.main;
});
export default StyledImagesUl;