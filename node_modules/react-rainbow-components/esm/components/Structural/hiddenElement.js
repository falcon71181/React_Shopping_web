import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var HiddenElement = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute !important;\n    margin: -1px !important;\n    border: 0 !important;\n    padding: 0 !important;\n    width: 1px !important;\n    height: 1px !important;\n    overflow: hidden !important;\n    clip: rect(0 0 0 0) !important;\n    text-transform: none !important;\n    white-space: nowrap !important;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.as === 'input' && "\n            box-sizing: border-box;\n        ";
}, function (props) {
  return props.as === 'label' && "\n            box-sizing: border-box;\n        ";
});
export default HiddenElement;