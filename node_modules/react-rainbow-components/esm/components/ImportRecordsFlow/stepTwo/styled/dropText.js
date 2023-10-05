import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDropText = attachThemeAttrs(styled.p)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 14px;\n    font-weight: 300;\n    text-align: center;\n    color: ", ";\n    bottom: 8px;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    pointer-events: none;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledDropText;