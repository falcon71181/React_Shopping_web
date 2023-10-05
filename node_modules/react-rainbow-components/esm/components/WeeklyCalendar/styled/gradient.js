import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
var StyledGradient = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 38px;\n    background-image: linear-gradient(\n        to bottom,\n        ", ",\n        ", " 71%\n    );\n"])), function (props) {
  return replaceAlpha(props.palette.background.main, 0);
}, function (props) {
  return replaceAlpha(props.palette.background.main, 0.88);
});
export default StyledGradient;