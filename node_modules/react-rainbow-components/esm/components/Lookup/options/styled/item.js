import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledItem = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    align-items: center;\n    display: flex;\n    height: 48px;\n    padding: 0 1.15rem 0 1.15rem;\n    position: relative;\n    white-space: nowrap;\n    cursor: pointer;\n    ", "\n"])), function (props) {
  return props.isActive && "\n            background-color: ".concat(props.palette.action.active, ";\n    ");
});
export default StyledItem;