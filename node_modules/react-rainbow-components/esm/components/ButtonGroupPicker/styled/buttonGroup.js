import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledButtonGroup = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n\n    > span:first-child,\n    > label:first-child > span {\n        border-radius: 100px 0 0 100px;\n    }\n\n    > span:last-child,\n    > label:last-child > span {\n        border-radius: 0 100px 100px 0;\n    }\n\n    > span:only-child,\n    > label:only-child > span {\n        border-radius: 100px;\n    }\n\n    ", "\n"])), function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:".concat(props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n        background-color: ").concat(props.palette.background.main, ";\n        border-radius: 100px;\n        > label:last-child > div {\n            display: none;\n        }\n    ");
});
export default StyledButtonGroup;