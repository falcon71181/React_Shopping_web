import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import styled from 'styled-components';
import '../../../styles/defaultTheme';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
export var IconCircleColor = attachThemeAttrs(styled.svg)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    fill: ", "\n"])), function (props) {
  return props.palette.text.disabled;
});
export var IconPinColor = attachThemeAttrs(styled.svg)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    fill: ", "\n"])), function (props) {
  return props.palette.background.main;
});
export var SearchValueIconColor = attachThemeAttrs(styled.svg)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    fill: ", "\n"])), function (props) {
  return props.palette.brand.main;
});