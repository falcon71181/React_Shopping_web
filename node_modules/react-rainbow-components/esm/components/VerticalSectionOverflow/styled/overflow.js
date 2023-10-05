import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledOverflow = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    max-height: 0;\n    overflow: hidden;\n    opacity: 0;\n    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n        max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    ", ";\n"])), function (props) {
  return props.isExpanded && "\n            opacity: 1;\n            transition:\n                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),\n                max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n        ";
});
export default StyledOverflow;