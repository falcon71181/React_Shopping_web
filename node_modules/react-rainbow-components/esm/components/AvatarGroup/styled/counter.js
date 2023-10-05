import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledContainer from '../../Avatar/styled/container';
var StyledCounter = attachThemeAttrs(styled(StyledContainer))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid ", ";\n"])), function (props) {
  return props.palette.background.main;
});
export default StyledCounter;