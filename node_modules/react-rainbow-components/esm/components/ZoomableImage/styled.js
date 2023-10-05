import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

import styled from 'styled-components';
import { ZINDEX_OVERLAY } from '../../styles/zIndex';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
export var StyledImage = styled.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: zoom-in;\n    visibility: ", ";\n"])), function (props) {
  return props.isOpen ? 'hidden' : 'visible';
});
export var StyledImageContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ", ";\n"])), ZINDEX_OVERLAY);
export var StyledBackdrop = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    opacity: 0;\n    transition: opacity 300ms ease 0s;\n\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.isCentered && "\n        opacity: 1;\n        ";
});
export var StyledCenteredImage = styled.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: ", "px;\n    left: ", "px;\n    transition: transform 300ms ease 0s;\n    transform: translate3d(0, 0, 0) scale(1);\n    will-change: transform;\n    transform-origin: center center;\n    cursor: zoom-out;\n    ", "\n"])), function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.isCentered && props.transform && "\n        transform: translate3d(".concat(props.transform.translateX, "px, ").concat(props.transform.translateY, "px, 0px) scale(").concat(props.transform.scale, ");\n        ");
});