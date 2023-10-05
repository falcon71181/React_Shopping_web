import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { getContrastText, replaceAlpha } from '../../../styles/helpers/color';
var StyledColumnLeft = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    position: relative;\n\n    ::before {\n        content: '';\n        background-color: ", ";\n        height: 100%;\n        width: 1px;\n        position: absolute;\n        right: 50%;\n        left: 50%;\n    }\n"])), function (props) {
  return replaceAlpha(getContrastText(props.palette.background.main), 0.1);
});
export default StyledColumnLeft;