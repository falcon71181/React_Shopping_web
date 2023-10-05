import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { ZINDEX_MODAL } from '../../../styles/zIndex';
var StyledBackDrop = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    background: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    transition: opacity 0.3s linear, z-index 0.3s linear;\n\n    ", ";\n"])), function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.64);
}, function (props) {
  return props.isOpen && "\n            visibility: visible;\n            z-index: ".concat(ZINDEX_MODAL, ";\n            opacity: 1;\n            backdrop-filter: blur(5px);\n        ");
});
export default StyledBackDrop;