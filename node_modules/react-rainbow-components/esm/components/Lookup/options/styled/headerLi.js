import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledHeaderLi = attachThemeAttrs(styled.li)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-size: 14px;\n    font-weight: normal;\n    height: 48px;\n    padding: 0 1rem 0 1rem;\n    text-transform: uppercase;\n"])), function (props) {
  return props.palette.text.header;
});
export default StyledHeaderLi;