import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CloseIcon from '../../Modal/closeIcon';
var StyledUncheckIcon = attachThemeAttrs(styled(CloseIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 1;\n    margin-left: 0.75rem;\n    flex-shrink: 0;\n    color: ", ";\n"])), function (props) {
  return props.palette.border.main;
});
export default StyledUncheckIcon;