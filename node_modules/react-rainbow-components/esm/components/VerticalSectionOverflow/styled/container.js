import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n    :hover {\n        background-color: ", ";\n    }\n\n    .rainbow-vertical-item_action {\n        padding: 0.65rem 1rem 0.65rem 3rem;\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.isExpanded && "\n            background-color: ".concat(props.palette.background.secondary, ";\n            box-shadow: inset 0 0 2px 0 ").concat(props.palette.background.secondary, ";\n            padding-bottom: 16px;\n        ");
});
export default StyledContainer;