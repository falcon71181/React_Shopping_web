import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledInnerContainer = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: flex-start;\n    width: 100%;\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    ", ";\n"])), function (props) {
  return props.fullWidth && "\n            justify-content: space-between;\n        ";
});
export default StyledInnerContainer;