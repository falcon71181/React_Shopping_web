import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CloseIcon from '../icons/closeIcon';
var StyledCloseIcon = attachThemeAttrs(styled(CloseIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledCloseIcon;