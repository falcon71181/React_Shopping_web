import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var sizeMap = {
  large: '3rem',
  medium: '2.5rem',
  small: '1.8rem',
  'x-small': '1.3rem'
};
var StyledMarkerContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    line-height: ", ";\n    height: ", ";\n"])), function (props) {
  return sizeMap[props.size] || sizeMap.medium;
}, function (props) {
  return sizeMap[props.size] || sizeMap.medium;
});
export default StyledMarkerContainer;