import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledTitleHour = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    top: -7px;\n    visibility: ", ";\n"])), function (props) {
  return props.visible ? 'visible' : 'hidden';
});
export default StyledTitleHour;