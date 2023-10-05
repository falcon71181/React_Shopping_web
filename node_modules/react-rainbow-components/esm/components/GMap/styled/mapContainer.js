import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
var StyledMapContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-self: center;\n    border: solid 1px ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    height: 99%;\n    width: 99%;\n"])), function (props) {
  return props.palette.border.divider;
}, BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
});
export default StyledMapContainer;