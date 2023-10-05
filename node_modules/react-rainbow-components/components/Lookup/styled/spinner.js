"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Spinner = _interopRequireDefault(require("../../Spinner"));

var _templateObject;

var StyledSpinner = (0, _styledComponents["default"])(_Spinner["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    left: unset;\n    right: 2.5rem;\n    top: 1.4rem;\n"])));
var _default = StyledSpinner;
exports["default"] = _default;