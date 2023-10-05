import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDay = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1 0 auto;\n    border-right: 1px solid ", ";\n    position: relative;\n    width: 90px;\n    min-width: 90px;\n    height: 100%;\n    color: ", ";\n    padding: 3px 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.brand.main;
});
export default StyledDay;