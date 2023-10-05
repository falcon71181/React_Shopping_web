import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
var StyledActiveIcon = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: ", ";\n    border: 0.375rem solid ", ";\n    box-sizing: border-box;\n"])), BORDER_RADIUS_2, function (props) {
  return props.palette.brand.main;
});
export default StyledActiveIcon;