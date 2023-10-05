"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _templateObject;

var StyledCloseButton = (0, _styledComponents["default"])(_ButtonIcon["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    z-index: 1;\n"])));
var _default = StyledCloseButton;
exports["default"] = _default;