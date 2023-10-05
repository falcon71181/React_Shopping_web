import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import darken from '../../../styles/helpers/color/darken';
import AvatarIcon from '../icons/avatar';
import ImageIcon from '../icons/image';
var StyledShapeContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n"])));
var StyledImageIcon = attachThemeAttrs(styled(ImageIcon))(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shape === 'square' && "\n        width: 85%;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        width: 60%;\n        ";
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        height: 80%;\n        ";
});
var StyledAvatarIcon = attachThemeAttrs(styled(AvatarIcon))(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shape === 'square' && "\n        width: 85%;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        width: 60%;\n        ";
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        height: 80%;\n        ";
});
var StyledLoadingShape = attachThemeAttrs(styled.div)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background: ", "\n        linear-gradient(\n            90deg,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n        );\n    background-size: 400% 400%;\n    animation: gradient 2.5s ease-in-out infinite;\n\n    @keyframes gradient {\n        0% {\n            background-position: 14% 0;\n        }\n\n        50% {\n            background-position: 87% 100%;\n        }\n\n        100% {\n            background-position: 14% 0;\n        }\n    }\n\n    ", "\n    \n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.1);
}, function (props) {
  return darken(props.palette.background.highlight, 0.1);
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.1);
}, function (props) {
  return (props.shape === 'rect' || props.shape === 'rounded-rect') && "\n        min-height: 12px;\n        min-width: 92px;\n        height: 100%;\n        ";
}, function (props) {
  return (props.shape === 'circle' || props.shape === 'square') && "\n        min-width: 48px;\n        min-height: 48px;\n        ";
}, function (props) {
  return (props.variant === 'image' || props.variant === 'avatar') && "\n        min-width: 48px;\n        min-height: 48px;\n        ";
}, function (props) {
  return props.shape === 'rounded-rect' && "\n        border-radius: 1rem;\n        ";
}, function (props) {
  return props.shape === 'circle' && "\n        border-radius: 50%;\n        ";
});
export { StyledShapeContainer, StyledImageIcon, StyledAvatarIcon, StyledLoadingShape };