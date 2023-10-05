import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledArrowButton = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    ", ";\n\n    width: 2rem;\n    height: 2rem;\n    line-height: 2;\n\n    svg {\n        width: 0.7rem !important;\n        height: 0.7rem !important;\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.disabled && "\n            color: ".concat(props.palette.text.disabled, ";\n        ");
});
export default StyledArrowButton;