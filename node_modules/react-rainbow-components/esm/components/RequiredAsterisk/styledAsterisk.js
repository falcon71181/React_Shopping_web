import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
var StyledAsterisk = attachThemeAttrs(styled.abbr)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-decoration: none;\n    cursor: help;\n    border: 0;\n    color: ", ";\n    margin: 0 0.125rem;\n    box-sizing: border-box;\n\n    &[title] {\n        border: 0;\n        text-decoration: none;\n        cursor: help;\n    }\n"])), function (props) {
  return props.palette.error.main;
});
export default StyledAsterisk;