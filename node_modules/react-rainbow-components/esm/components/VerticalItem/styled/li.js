import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledLi = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    ", ";\n"])), function (props) {
  return props.isSelected && "\n            ::before {\n                content: \"\";\n                width: 0.25rem;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                position: absolute;\n                background-color: ".concat(props.palette.brand.main, ";\n            }\n        ");
});
export default StyledLi;