import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledIcon = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 1rem;\n    height: 1rem;\n    line-height: 1.5;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.position === 'left' && "\n            margin-right: 0.75rem;\n            flex-shrink: 0;\n        ";
}, function (props) {
  return props.position === 'right' && "\n                margin-left: 0.75rem;\n                flex-shrink: 0;\n            ";
});
export default StyledIcon;