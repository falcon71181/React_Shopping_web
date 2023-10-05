import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledSortArrowIcon = styled.svg(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    visibility: hidden;\n    margin-left: 12px;\n    ", ";\n    ", "\n"])), function (props) {
  return props.arrowAscendent && "\n            transform: rotate(-180deg);\n        ";
}, function (props) {
  return props.headerAlignment === 'right' && "\n        margin-left: 0;\n        margin-right: 12px;\n    ";
});
export default StyledSortArrowIcon;