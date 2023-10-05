import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
import Input from '../../Input/pickerInput';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
export var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n"])));
export var StyledInput = styled(Input)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-transform: capitalize;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});