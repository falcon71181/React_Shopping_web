import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../../styles/fontSizes';
var StyledSearch = attachThemeAttrs(styled.input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    background-color: transparent;\n    border: 0;\n    color: ", ";\n    font-size: ", ";\n    margin: 0;\n    width: 100%;\n    padding: 0;\n    line-height: 2rem;\n    height: 2rem;\n\n    :focus,\n    :active {\n        outline: 0;\n        background-color: transparent;\n        border: 0;\n    }\n"])), function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE);
export default StyledSearch;