import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledEnumerable = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    text-align: center;\n    color: ", ";\n\n    ", "\n\n    &::after {\n        content: counter(rowCounter);\n    }\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.theme.variant === 'listview' && "\n        color: ".concat(props.palette.text.main, ";\n    ");
});
export default StyledEnumerable;