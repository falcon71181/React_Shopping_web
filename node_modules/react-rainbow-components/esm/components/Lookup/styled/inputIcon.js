import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInputIcon = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 22px;\n    position: absolute;\n    top: 0;\n    right: 0.8rem;\n    line-height: 1;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s linear;\n\n    svg {\n        width: 16px;\n        height: 16px;\n        font-size: 16px;\n    }\n\n    :not(button) {\n        pointer-events: none;\n    }\n\n    ", ";\n"])), function (props) {
  return props.error && "\n            fill: ".concat(props.palette.error.main, ";\n            color: ").concat(props.palette.error.main, ";\n        ");
});
export default StyledInputIcon;