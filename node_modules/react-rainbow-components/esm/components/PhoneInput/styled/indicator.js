import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
var StyledIndicator = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-left: 8px;\n    display: flex;\n    align-items: center;\n\n    &::after {\n        content: '';\n        pointer-events: none;\n        display: inline-block;\n        bottom: 45%;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        box-sizing: border-box;\n    }\n"])));
export default StyledIndicator;