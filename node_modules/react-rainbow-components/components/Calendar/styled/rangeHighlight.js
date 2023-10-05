"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _replaceAlpha = _interopRequireDefault(require("../../../styles/helpers/color/replaceAlpha"));

var _templateObject;

var StyledRangeHighlight = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div).attrs(function (props) {
  var gradientStart = (0, _replaceAlpha["default"])(props.palette.brand.main, 0.2);
  var gradientEnd = (0, _replaceAlpha["default"])(props.palette.brand.main, 0);
  return {
    gradientStart: gradientStart,
    gradientEnd: gradientEnd
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 38px;\n    line-height: 38px;\n    margin: 5px auto;\n    color: ", ";\n\n    @media (max-width: 600px) {\n        margin: 3px auto;\n    }\n\n    ", "\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";                \n"])), function (props) {
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
var _default = StyledRangeHighlight;
exports["default"] = _default;