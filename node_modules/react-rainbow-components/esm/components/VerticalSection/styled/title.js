import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTitle = attachThemeAttrs(styled.h2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0.5rem 0.5rem 0.5rem 1.25rem;\n    line-height: 1.5rem;\n    font-size: 0.9375rem;\n    font-weight: inherit;\n    color: ", ";\n    text-transform: uppercase;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledTitle;