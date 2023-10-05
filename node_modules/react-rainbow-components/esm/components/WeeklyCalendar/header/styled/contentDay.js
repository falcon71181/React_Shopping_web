import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledContentDay = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ";\n"])), function (props) {
  return props.isToday && "\n            padding: 0px 11px;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n            border-radius: 12px;\n        ");
});
export default StyledContentDay;