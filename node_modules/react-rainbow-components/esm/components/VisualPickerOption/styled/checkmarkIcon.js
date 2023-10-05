import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CheckmarkIcon from '../checkmark';
var StyledCheckmarkIcon = attachThemeAttrs(styled(CheckmarkIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    width: 16px;\n    height:10px;\n    color: ", ";\n"])), function (props) {
  return props.palette.getContrastText(props.palette.brand.main);
});
export default StyledCheckmarkIcon;