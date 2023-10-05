import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var Label = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    font-size: 1.1em;\n    color: ", ";\n    text-align: start;\n    line-height: 2;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n\n    ", ";\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.isSelected && "\n        color: ".concat(props.palette.getContrastText(props.palette.brand.light), ";\n        font-weight: 900;\n    ");
});
export default Label;