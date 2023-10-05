import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledCheckboxContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    padding: 0 15px;\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    ", "\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        padding: 0 10px;\n    ";
});
export default StyledCheckboxContainer;