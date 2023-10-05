import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledHours = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: none;\n    color: ", ";\n    height: auto;\n    padding: 0;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    min-width: 65px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n"])), function (props) {
  return props.palette.text.main;
});
export default StyledHours;