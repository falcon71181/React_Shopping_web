import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledHeader = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex: 0 0 auto;\n    border: 1px solid ", ";\n\n    > div:last-child {\n        overflow: scroll;\n        visibility: hidden;\n        flex: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledHeader;