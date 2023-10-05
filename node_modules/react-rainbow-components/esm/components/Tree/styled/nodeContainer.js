import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var PADDING_LEFT = 16;

function getMarginLeft(props) {
  var marginLeft = props.ariaLevelValue === 1 ? 0 : PADDING_LEFT;
  return "-".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + marginLeft, "px");
}

function getPaddingLeft(props) {
  if (props.hasChildren) {
    return "".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + PADDING_LEFT, "px}");
  }

  return "".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + 28 + PADDING_LEFT, "px}");
}

var NodeContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-left: ", ";\n    padding-left: ", ";\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n    }\n\n    ", ";\n"])), getMarginLeft, getPaddingLeft, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.isSelected && "\n        background-color: ".concat(props.palette.brand.light, ";\n\n        &:hover {\n            background-color: ").concat(props.palette.brand.light, ";\n        }\n    ");
});
export default NodeContainer;