import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTitle = attachThemeAttrs(styled.h2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 1.5rem;\n    font-weight: 500;\n    text-transform: capitalize;\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledTitle;