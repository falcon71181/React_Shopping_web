import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    outline: none;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n        outline: 0;\n    }\n\n    ", "\n"])), function (props) {
  return props.isReadOnly && "\n            display: flex;\n    ";
});
export default StyledContainer;