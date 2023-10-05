import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Chip from '../../Chip';
var StyledChip = attachThemeAttrs(styled(Chip))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1 1 auto;\n    margin: 2px;\n    background-color: ", ";\n"])), function (props) {
  return props.palette.background.main;
});
export default StyledChip;