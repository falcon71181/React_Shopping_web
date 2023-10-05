import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
export var StyledCountryCode = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 0 0 auto;\n    padding: 0 8px 0 8px;\n    line-height: 2.2rem;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.size === 'large' && "\n            line-height: 3.125rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            line-height: 1.6rem;\n    ";
});
export var StyledFlagIcon = styled.svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 28px !important;\n    height: 28px !important;\n    vertical-align: middle;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.size === 'small' && "\n            width: 20px !important;\n            height: 20px !important;\n        ";
}, function (props) {
  return props.size === 'large' && "\n            width: 40px !important;\n            height: 40px !important;\n        ";
});
export { default as StyledIndicator } from './indicator';
export { default as StyledInputContainer } from './inputContainer';
export { default as StyledInput } from './input';
export { default as StyledTrigger } from './trigger';
export { default as StyledIconContainer } from './iconContainer';
export { default as StyledFlagContainer } from './flagContainer';