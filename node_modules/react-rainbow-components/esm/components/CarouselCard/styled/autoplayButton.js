import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledAutoplayButton = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledAutoplayButton;