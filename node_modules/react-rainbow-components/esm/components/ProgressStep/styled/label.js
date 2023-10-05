import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_X_SMALL } from '../../../styles/fontSizes';
import { MARGIN_XX_SMALL } from '../../../styles/margins';
var StyledLabel = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    margin-top: ", ";\n    position: absolute;\n    display: inline;\n    top: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n    text-align: center;\n    ", ";\n    ", ";\n"])), FONT_SIZE_TEXT_X_SMALL, function (props) {
  return props.palette.text.label;
}, MARGIN_XX_SMALL, function (props) {
  return props.stepState === 'Active' && "\n            color: ".concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.stepState === 'Error' && "\n            color: ".concat(props.palette.error.main, ";\n        ");
});
export default StyledLabel;