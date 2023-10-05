import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledCheckboxWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    padding: 10px 15px;\n    border: 1px solid transparent;\n    ", "\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        padding: 10px 10px;\n    ";
});
export default StyledCheckboxWrapper;