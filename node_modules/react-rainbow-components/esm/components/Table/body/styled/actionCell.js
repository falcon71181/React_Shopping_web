import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledActionCell = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    margin: auto;\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: ".concat(props.palette.background.main, ";\n        ");
});
export default StyledActionCell;