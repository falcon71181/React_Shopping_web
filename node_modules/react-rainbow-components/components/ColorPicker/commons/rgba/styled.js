"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = _interopRequireDefault(require("../../../Input"));

var _styled = require("../styled");

var _templateObject;

var StyledNumberInput = (0, _styledComponents["default"])(_Input["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 5px;\n\n    input {\n        ", "\n        padding: 0 0.7rem;\n\n        :focus,\n        :active {\n            padding: 0 0.65625rem;\n        }\n    }\n\n    input::-webkit-inner-spin-button {\n        appearance: none;\n        margin: 0;\n    }\n\n    input::-webkit-outer-spin-button {\n        appearance: none;\n        margin: 0;\n    }\n\n    input[type='number'] {\n        -moz-appearance: textfield;\n    }\n"])), _styled.CssInput);
var _default = StyledNumberInput;
exports["default"] = _default;