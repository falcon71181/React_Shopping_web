import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_HEADING_X_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTitle = attachThemeAttrs(styled.h3)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 300;\n    line-height: 2.5rem;\n    text-align: center;\n    margin: 0 1.5rem;\n    min-width: 380px;\n    padding: 0;\n    text-transform: capitalize;\n"])), FONT_SIZE_HEADING_X_LARGE, function (props) {
  return props.palette.brand.main;
});
export default StyledTitle;