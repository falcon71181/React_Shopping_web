import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledDayContainer = attachThemeAttrs(styled.td)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    min-width: 120px;\n    height: 100px;\n    padding: 0;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledDayContainer;