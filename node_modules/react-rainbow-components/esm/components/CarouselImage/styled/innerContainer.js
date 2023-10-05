import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
var StyledInnerContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: ", ";\n    overflow: hidden;\n    line-height: inherit;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: none;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    :hover {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ", "\n"])), BORDER_RADIUS_1, function (props) {
  return props.as === 'a' && "\n        :active,\n        :focus {\n            color: inherit;\n            text-decoration: none;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n            outline: 0;\n        }\n    ");
});
export default StyledInnerContainer;