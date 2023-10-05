import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
export var DefaultHitContainer = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: bold;\n    font-size: 1rem;\n    font-family: 'Lato Black';\n"])), function (props) {
  return props.palette.text.main;
});
export var DefaultTextContainer = attachThemeAttrs(styled.span)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 1rem;\n"])), function (props) {
  return props.palette.text.main;
});