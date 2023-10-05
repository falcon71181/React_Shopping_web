import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTitle = attachThemeAttrs(styled.h1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-family: 'Lato Light', Arial, sans-serif;\n    padding: 0;\n    text-align: center;\n    font-size: 1.5rem;\n    color: ", ";\n    margin: 0;\n    font-weight: inherit;\n"])), function (props) {
  return props.palette.text.title;
});
export default StyledTitle;