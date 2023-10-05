import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledCloseButton = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    z-index: 1;\n    color: ", ";\n"])), function (props) {
  return props.palette.text.header;
});
export default StyledCloseButton;