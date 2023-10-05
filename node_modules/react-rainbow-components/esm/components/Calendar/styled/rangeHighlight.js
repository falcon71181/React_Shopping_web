import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import replaceAlpha from '../../../styles/helpers/color/replaceAlpha';
var StyledRangeHighlight = attachThemeAttrs(styled.div).attrs(function (props) {
  var gradientStart = replaceAlpha(props.palette.brand.main, 0.2);
  var gradientEnd = replaceAlpha(props.palette.brand.main, 0);
  return {
    gradientStart: gradientStart,
    gradientEnd: gradientEnd
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 38px;\n    line-height: 38px;\n    margin: 5px auto;\n    color: ", ";\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n\n    ", "\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";                \n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.isToday && "\n        color: ".concat(props.palette.brand.main, ";\n    ");
}, function (props) {
  return props.isVisible && "\n        background: ".concat(props.gradientStart, ";\n        ");
}, function (props) {
  return props.isVisible && props.isFirstDayOfWeek && "\n        background: linear-gradient(\n            to left,\n            ".concat(props.gradientStart, ", \n            ").concat(props.gradientEnd, "\n        );    \n        ");
}, function (props) {
  return props.isVisible && props.isLastDayOfWeek && "\n        background: linear-gradient(\n            to right,\n            ".concat(props.gradientStart, ", \n            ").concat(props.gradientEnd, "\n        );    \n        ");
}, function (props) {
  return props.isVisible && props.isFirstDayOfWeek && props.isLastDayOfWeek && "\n        background: linear-gradient(\n            to right,\n            ".concat(props.gradientEnd, ", \n            ").concat(props.gradientStart, " 50%,\n            ").concat(props.gradientEnd, " \n        );    \n        ");
}, function (props) {
  return props.isVisible && props.isFirstInRange && !props.isLastDayOfWeek && "\n        background: linear-gradient(\n            to left,\n            ".concat(props.gradientStart, ", \n            ").concat(props.gradientStart, " 50%, \n            ").concat(props.gradientEnd, " 50%, \n            ").concat(props.gradientEnd, "\n            );    \n        ");
}, function (props) {
  return props.isVisible && props.isFirstInRange && props.isLastDayOfWeek && "\n        background: linear-gradient(\n            to right,\n            ".concat(props.gradientEnd, ",\n            ").concat(props.gradientEnd, " 50%,\n            ").concat(props.gradientStart, " 50%, \n            ").concat(props.gradientEnd, "\n            );    \n        ");
}, function (props) {
  return props.isVisible && props.isLastInRange && !props.isFirstDayOfWeek && "\n        background: linear-gradient(\n            to right,\n            ".concat(props.gradientStart, ", \n            ").concat(props.gradientStart, " 50%, \n            ").concat(props.gradientEnd, " 50%, \n            ").concat(props.gradientEnd, "\n            );    \n        ");
}, function (props) {
  return props.isVisible && props.isLastInRange && props.isFirstDayOfWeek && "\n        background: linear-gradient(\n            to left,\n            ".concat(props.gradientEnd, ",\n            ").concat(props.gradientEnd, " 50%,\n            ").concat(props.gradientStart, " 50%,\n            ").concat(props.gradientEnd, "\n            );    \n        ");
});
export default StyledRangeHighlight;