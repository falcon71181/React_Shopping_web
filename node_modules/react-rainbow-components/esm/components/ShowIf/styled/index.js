import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var AnimatedContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    animation: ", " 250ms forwards;\n    overflow: hidden;\n    ", "\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n    @keyframes slideVerticalIn {\n        from {\n            max-height: 0;\n        }\n\n        to {\n            max-height: ", "px;\n        }\n    }\n\n    @keyframes slideVerticalOut {\n        from {\n            max-height: ", "px;\n        }\n\n        to {\n            max-height: 0;\n        }\n    }\n\n    @keyframes slideHorizontalIn {\n        from {\n            max-width: 0;\n        }\n\n        to {\n            max-width: ", "px;\n        }\n    }\n\n    @keyframes slideHorizontalOut {\n        from {\n            max-width: ", "px;\n        }\n\n        to {\n            max-width: 0;\n        }\n    }\n"])), function (props) {
  return props.animation;
}, function (props) {
  return !props.isVisible && "display: none;";
}, function (props) {
  return props.dimensions ? props.dimensions.height : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.height : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.width : 9999;
}, function (props) {
  return props.dimensions ? props.dimensions.width : 9999;
});
export default AnimatedContainer;