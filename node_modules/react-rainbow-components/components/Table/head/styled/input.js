"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hiddenElement = _interopRequireDefault(require("../../../Structural/hiddenElement"));

var _templateObject;

var StyledInput = (0, _styledComponents["default"])(_hiddenElement["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-width: 0 !important;\n    border-style: initial !important;\n    border-color: initial !important;\n    border-image: initial !important;\n    text-transform: none !important;\n    white-space: nowrap !important;\n"])));
var _default = StyledInput;
exports["default"] = _default;