import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledMonth = attachThemeAttrs(styled.h3)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 2rem;\n    line-height: 2.5rem;\n    text-align: center;\n    margin: 0 1.5rem;\n    min-width: 220px;\n    text-transform: capitalize;\n    font-weight: 300;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledMonth;