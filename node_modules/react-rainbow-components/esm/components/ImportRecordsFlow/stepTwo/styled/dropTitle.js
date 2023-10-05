import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDropTitle = attachThemeAttrs(styled.p)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 20px;\n    pointer-events: none;\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledDropTitle;