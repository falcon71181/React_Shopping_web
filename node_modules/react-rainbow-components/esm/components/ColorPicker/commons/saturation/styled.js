import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
export var StyledColor = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    min-height: 160px;\n    height: 100%;\n    overflow: hidden;\n\n    &::before {\n        content: '';\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: linear-gradient(0deg, #000, rgba(0, 0, 0, 0.9) 1%, transparent 99%),\n            linear-gradient(90deg, #fff 1%, hsla(0, 0%, 100%, 0));\n    }\n"])));
export var StyledCircle = attachThemeAttrs(styled.button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset;\n    transform: translate(-6px, -6px);\n    padding: 0;\n    margin: 0;\n    border: 1px solid ", ";\n\n    &:focus,\n    &:active {\n        outline: 0;\n        border: 1px solid ", ";\n        box-shadow: ", ";\n    }\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.shadows.brand;
});