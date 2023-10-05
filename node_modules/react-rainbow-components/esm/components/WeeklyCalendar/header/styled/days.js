import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDays = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: flex-start;\n    width: 100%;\n    flex: 1 1 auto;\n    overflow-y: hidden;\n    overflow-x: hidden;\n\n    > div:first-child {\n        width: 11px;\n        min-width: 11px;\n        height: 100%;\n        border-right: 1px solid ", ";\n    }\n    > div:last-child {\n        border-right: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDays;