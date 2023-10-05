import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';
var StyledElementLoading = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 10px;\n    object-fit: contain;\n    border-radius: 24px;\n    z-index: 1;\n    background: ", "\n        linear-gradient(\n            90deg,\n            ", " 0%,\n            ", " 50%,\n            ", " 100%\n        );\n    background-size: 400% 400%;\n    animation: gradient 2.5s ease-in-out infinite;\n    filter: invert(3%); \n    \n    @keyframes gradient {\n        0% {\n            background-position: 14% 0;\n        }\n\n        50% {\n            background-position: 87% 100%;\n        }\n\n        100% {\n            background-position: 14% 0;\n        }\n    }\n"])), function (props) {
  return replaceAlpha(props.palette.background.secondary, 0.5);
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.01);
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.7);
}, function (props) {
  return replaceAlpha(props.palette.background.highlight, 0.01);
});
export default StyledElementLoading;