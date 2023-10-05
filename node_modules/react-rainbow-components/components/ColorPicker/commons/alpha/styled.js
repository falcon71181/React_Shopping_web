"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _slider = _interopRequireDefault(require("../slider"));

var _templateObject;

var StyledAlphaSlider = (0, _styledComponents["default"])(_slider["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    input::-webkit-slider-runnable-track {\n        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);\n    }\n\n    input::-moz-range-track {\n        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%) !important;\n    }\n"])));
var _default = StyledAlphaSlider;
exports["default"] = _default;