import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { PADDING_SMALL } from '../../../styles/paddings';
var StyledTabset = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: flex-start;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 ", ";\n\n    @media (max-width: 600px) {\n        padding: 0;\n    }\n\n    ", ";\n"])), PADDING_SMALL, function (props) {
  return props.variant === 'line' && "\n            padding: 0;\n        ";
});
export default StyledTabset;