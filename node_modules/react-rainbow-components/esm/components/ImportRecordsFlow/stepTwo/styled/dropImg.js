import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import DropIcon from '../../icons/drop';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledDropImg = attachThemeAttrs(styled(DropIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    pointer-events: none;\n    color: ", ";\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledDropImg;