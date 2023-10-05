import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledGridLine = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 40px;\n\n    ::after {\n        content: '';\n        border-bottom: 1px solid ", ";\n        position: absolute;\n        width: 100%;\n        margin-top: -1px;\n        z-index: 0;\n        pointer-events: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
export default StyledGridLine;