import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var ItemContainerLi = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n\n    &:focus {\n        outline: 0;\n    }\n\n    &:focus > div {\n        box-shadow: ", ";\n    }\n"])), function (props) {
  return props.shadows.brand;
});
export default ItemContainerLi;