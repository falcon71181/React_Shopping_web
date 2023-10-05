import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledCircle = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-block;\n    position: absolute;\n    top: -4px;\n    background-color: ", ";\n    border-radius: 50%;\n    content: \"\";\n    height: 10px;\n    width: 10px;\n"])), function (props) {
  return props.palette.error.main;
});
export default StyledCircle;