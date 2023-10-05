import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CheckmarkIcon from '../checkmark';
var StyledCheckmarkIcon = attachThemeAttrs(styled(CheckmarkIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 1;\n    margin-left: 0.75rem;\n    flex-shrink: 0;\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledCheckmarkIcon;