import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledIcon = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 2.5rem;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    line-height: 2.5rem;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    ", "\n"])), function (props) {
  return props.error && "\n            fill: ".concat(props.palette.error.main, ";\n            color: ").concat(props.palette.error.main, ";\n    ");
});
export default StyledIcon;