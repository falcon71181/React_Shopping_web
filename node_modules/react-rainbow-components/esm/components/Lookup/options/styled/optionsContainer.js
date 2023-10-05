import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledOptionsContainer = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    box-sizing: border-box;\n    ", "\n    ", "\n"])), function (props) {
  return props.as === 'div' && "\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            padding: 24px 16px;\n            letter-spacing: normal;\n            text-align: center;\n    ";
}, function (props) {
  return props.as !== 'div' && "\n            margin: 0;\n            list-style: none;\n    ";
});
export default StyledOptionsContainer;