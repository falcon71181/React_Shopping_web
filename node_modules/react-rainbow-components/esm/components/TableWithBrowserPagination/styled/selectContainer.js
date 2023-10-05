import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledSelectContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    position: relative;\n    margin: 0 12px;\n    height: 100%;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        right: 12px;\n        bottom: 42.5%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        vertical-align: top;\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledSelectContainer;