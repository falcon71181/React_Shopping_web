import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n\n    > :not(:first-child) {\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n"])), function (props) {
  return props.size === 'large' && "\n            margin-left: -1.6rem;\n            ";
}, function (props) {
  return props.size === 'medium' && "\n            margin-left: -1.25rem;\n            ";
}, function (props) {
  return props.size === 'small' && "\n            margin-left: -0.75rem;\n            ";
}, function (props) {
  return props.size === 'x-small' && "\n            margin-left: -0.625rem;\n            ";
});
export default StyledContainer;