import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledLi = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    padding: 0 0.5rem;\n    margin: 1rem 0;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    :last-child {\n        margin-bottom: 0;\n    }\n\n    ", ";\n"])), function (props) {
  return !props.hideSelectedItemIndicator && props.isSelected && "\n            ::before {\n                content: \"\";\n                width: 0.25rem;\n                right: 0;\n                top: 0;\n                bottom: 0;\n                position: absolute;\n                background-color: ".concat(props.palette.brand.main, ";\n                border-radius: 100px;\n        ");
});
export default StyledLi;