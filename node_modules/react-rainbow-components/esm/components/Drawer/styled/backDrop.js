import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { ZINDEX_DRAWER } from '../../../styles/zIndex';
var StyledBackDrop = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: ", ";\n    opacity: 1;\n    backdrop-filter: blur(5px);\n"])), function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.64);
}, ZINDEX_DRAWER);
export default StyledBackDrop;