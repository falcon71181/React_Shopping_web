import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDivider = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    width: 2rem;\n\n    &::after {\n        content: '';\n        border: 0.5px solid ", ";\n        margin: 0 auto;\n        width: 1px;\n        height: 100%;\n        box-sizing: border-box;\n    }\n\n    @media (max-width: 800px) {\n        width: 100%;\n        height: 1rem;\n\n        &::after {\n            height: 1px;\n            width: 100%;\n        }\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDivider;