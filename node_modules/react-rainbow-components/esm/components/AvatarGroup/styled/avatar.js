import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Avatar from '../../Avatar';
var StyledAvatar = attachThemeAttrs(styled(Avatar))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 2px solid ", ";\n    ", "\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.zIndex && "\n        z-index: ".concat(props.zIndex, ";\n        ");
});
export default StyledAvatar;