"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../../styles/helpers/color");

var _helpers = require("../helpers");

var _templateObject;

var StyledEvent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div).attrs(function (props) {
  var color = props.color,
      backgroundColor = props.backgroundColor,
      palette = props.palette;
  var currentColor = (0, _helpers.getCurrentColor)({
    color: color,
    backgroundColor: backgroundColor,
    palette: palette
  });
  var currentBackgroundColor = (0, _helpers.getCurrentBackgroundColor)({
    backgroundColor: backgroundColor,
    palette: palette
  });
  return {
    currentColor: currentColor,
    currentBackgroundColor: currentBackgroundColor
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-align: left;\n    font-size: 12px;\n    border: 1px solid ", ";\n    color: ", ";\n    background-color: ", ";\n    width: 100%;\n    min-height: 20px;\n    border-radius: 8px;\n    padding: 0 5px;\n    overflow: hidden;\n    position: absolute;\n    cursor: pointer;\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.main, 0.8);
}, function (props) {
  return props.currentColor;
}, function (props) {
  return props.currentBackgroundColor;
});
var _default = StyledEvent;
exports["default"] = _default;