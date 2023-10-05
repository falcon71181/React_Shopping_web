import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledWrapper = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    outline: none;\n    position: absolute;\n    top: 0;\n    height: 44px;\n    background-color: ", ";\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
export default StyledWrapper;