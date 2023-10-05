import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDay = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1 0 auto;\n    border-right: 1px solid ", ";\n    position: relative;\n    height: 100%;\n    width: 90px;\n    min-width: 90px;\n\n    :last-child {\n        border-right: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDay;