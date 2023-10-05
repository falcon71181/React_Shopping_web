import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';
import { getCurrentColor, getCurrentBackgroundColor } from '../helpers';
var StyledEvent = attachThemeAttrs(styled.div).attrs(function (props) {
  var color = props.color,
      backgroundColor = props.backgroundColor,
      palette = props.palette;
  var currentColor = getCurrentColor({
    color: color,
    backgroundColor: backgroundColor,
    palette: palette
  });
  var currentBackgroundColor = getCurrentBackgroundColor({
    backgroundColor: backgroundColor,
    palette: palette
  });
  return {
    currentColor: currentColor,
    currentBackgroundColor: currentBackgroundColor
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: left;\n    font-size: 12px;\n    border: 1px solid ", ";\n    color: ", ";\n    background-color: ", ";\n    width: 100%;\n    min-height: 20px;\n    border-radius: 8px;\n    padding: 0 5px;\n    overflow: hidden;\n    position: absolute;\n    cursor: pointer;\n"])), function (props) {
  return replaceAlpha(props.palette.background.main, 0.8);
}, function (props) {
  return props.currentColor;
}, function (props) {
  return props.currentBackgroundColor;
});
export default StyledEvent;