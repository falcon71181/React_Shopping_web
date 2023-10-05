import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import SearchIcon from '../icons/searchIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledSearchIcon = attachThemeAttrs(styled(SearchIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (props) {
  return props.palette.text.main;
});
export default StyledSearchIcon;