"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _input = _interopRequireDefault(require("../../styled/input"));

var _templateObject;

var PickerInput = (0, _styledComponents["default"])(_input["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    :hover {\n        cursor: pointer;\n    }\n\n    &[disabled] {\n        cursor: not-allowed;\n    }\n"])));
var _default = PickerInput;
exports["default"] = _default;