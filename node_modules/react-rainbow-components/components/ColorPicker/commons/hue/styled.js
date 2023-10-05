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

var StyledHueSlider = (0, _styledComponents["default"])(_slider["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    input::-webkit-slider-runnable-track {\n        background: linear-gradient(\n            to right,\n            rgb(255, 0, 0) 0%,\n            rgb(255, 255, 0) 17%,\n            rgb(0, 255, 0) 33%,\n            rgb(0, 255, 255) 50%,\n            rgb(0, 0, 255) 67%,\n            rgb(255, 0, 255) 83%,\n            rgb(255, 0, 0) 100%\n        ) !important;\n    }\n\n    input::-moz-range-track {\n        background: linear-gradient(\n            to right,\n            rgb(255, 0, 0) 0%,\n            rgb(255, 255, 0) 17%,\n            rgb(0, 255, 0) 33%,\n            rgb(0, 255, 255) 50%,\n            rgb(0, 0, 255) 67%,\n            rgb(255, 0, 255) 83%,\n            rgb(255, 0, 0) 100%\n        ) !important;\n    }\n"])));
var _default = StyledHueSlider;
exports["default"] = _default;