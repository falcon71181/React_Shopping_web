"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _templateObject;

var StyledGradient = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 38px;\n    background-image: linear-gradient(\n        to bottom,\n        ", ",\n        ", " 71%\n    );\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.main, 0);
}, function (props) {
  return (0, _color.replaceAlpha)(props.palette.background.main, 0.88);
});
var _default = StyledGradient;
exports["default"] = _default;