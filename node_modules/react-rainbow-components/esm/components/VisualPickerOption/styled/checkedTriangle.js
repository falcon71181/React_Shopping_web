import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledCheckedTriangle = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    border: 1.5rem solid transparent;\n    border-radius: 0 20px 0 0;\n    border-right-color: ", ";\n    border-top-color: ", ";\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
});
export default StyledCheckedTriangle;