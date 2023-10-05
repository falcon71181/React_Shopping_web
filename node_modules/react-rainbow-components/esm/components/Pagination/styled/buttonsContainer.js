import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_X_SMALL } from '../../../styles/margins';
var ButtonsContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    box-shadow:", ";\n    border-radius: 100px;\n    margin-left: ", ";\n    margin-right: ", ";\n"])), function (props) {
  return props.shadows.shadow_10;
}, MARGIN_X_SMALL, MARGIN_X_SMALL);
export default ButtonsContainer;