import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';
var Button = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-left: -1.75rem;\n    margin-right: 0.5rem;\n"])), function (props) {
  return props.palette.brand.main;
});
export default Button;