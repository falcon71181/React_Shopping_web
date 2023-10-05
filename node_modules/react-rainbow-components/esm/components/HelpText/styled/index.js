import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import getIconSize from '../helpers/getIconSize';
export var StyledButton = attachThemeAttrs(styled.button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    background: transparent;\n    height: ", "px;\n    width: ", "px;\n    line-height: 0;\n    padding: 0;\n    border-radius: 1rem;\n\n    &:focus,\n    &:active {\n        outline: 0;\n\n        ", ";\n\n        ", ";\n\n        ", ";\n    }\n"])), function (props) {
  return getIconSize(props.iconSize);
}, function (props) {
  return getIconSize(props.iconSize);
}, function (props) {
  return props.variant === 'info' && "\n                box-shadow: ".concat(props.shadows.brand, ";\n        ");
}, function (props) {
  return props.variant === 'error' && "\n                box-shadow: ".concat(props.shadows.error, ";\n        ");
}, function (props) {
  return props.variant === 'question' && "\n                box-shadow: ".concat(props.shadows.shadow_10, ";\n        ");
});
export var StyledTooltip = attachThemeAttrs(styled.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 10px;\n    border-radius: 0.875rem;\n    box-shadow: ", ";\n    border: solid 1px ", ";\n    background-color: ", ";\n    min-width: 60px;\n    max-width: 400px;\n"])), function (props) {
  return props.shadows.shadow_2;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});
export var StyledTitle = attachThemeAttrs(styled.div).attrs(function (props) {
  var palette = props.palette,
      variant = props.variant;
  var variantColorMap = {
    info: palette.text.header,
    error: palette.error.main,
    warning: palette.warning.main,
    question: palette.text.header
  };
  var variantColor = variantColorMap[variant] || variantColorMap.info;
  return {
    variantColor: variantColor
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.3rem;\n    margin-bottom: 5px;\n    color: ", ";\n    align-items: center;\n"])), function (props) {
  return props.variantColor;
});
export var StyledIconContainer = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 8px;\n"])));
export var StyledText = attachThemeAttrs(styled.div)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: 0.8125rem;\n    line-height: 1.42;\n    color: ", "\n"])), function (props) {
  return props.palette.text.main;
});