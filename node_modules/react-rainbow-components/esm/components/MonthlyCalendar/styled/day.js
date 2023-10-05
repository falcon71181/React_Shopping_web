import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDay = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n"])), function (props) {
  return !props.disabled && "\n        :hover {\n            background: ".concat(props.palette.action.hover, ";\n        }\n    ");
}, function (props) {
  return props.isSelected && "\n        background: ".concat(props.palette.background.secondary, ";\n    ");
});
export default StyledDay;