import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attchThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attchThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n    flex-shrink: 0;\n\n    ", ";\n"])), function (props) {
  return props.overlap === 'circle' && "\n            border-radius: 50%;\n        ";
});
export default StyledContainer;