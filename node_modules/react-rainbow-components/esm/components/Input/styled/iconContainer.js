import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var IconContainer = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    height: 100%;\n    width: 22px;\n    top: 0;\n    position: absolute;\n    line-height: 1;\n    border: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n        width: 17px !important;\n        height: 17px !important;\n        font-size: 17px !important;\n        ", ";\n    \n        ", ";\n    }\n\n    :not(button) {\n        pointer-events: none;\n    }\n\n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.size === 'large' && "\n            width: 20px !important;\n            height: 20px !important;\n            font-size: 20px !important;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            width: 14px !important;\n            height: 14px !important;\n            font-size: 14px !important;\n        ";
}, function (props) {
  return props.iconPosition === 'left' && "\n        left: ".concat(props.readOnly ? 0 : '0.8rem', ";\n    ");
}, function (props) {
  return props.iconPosition === 'right' && "\n        right: ".concat(props.readOnly ? 0 : '0.8rem', ";\n    ");
}, function (props) {
  return props.error && "\n        fill: ".concat(props.palette.error.main, ";\n        color: ").concat(props.palette.error.main, ";\n    ");
});
export default IconContainer;