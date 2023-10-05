import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Label from '../../Input/label';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledLabel = attachThemeAttrs(styled(Label))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ";\n"])), function (props) {
  return props.variant === 'inverse' && "\n            color: ".concat(props.palette.isDark ? '#576574' : 'rgb(178,178,178)', "\n        ");
});
export default StyledLabel;