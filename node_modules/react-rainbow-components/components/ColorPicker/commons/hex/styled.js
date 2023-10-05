"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHexInput = exports.StyledHexColorIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _Input = _interopRequireDefault(require("../../../Input"));

var _styled = require("../styled");

var _templateObject, _templateObject2;

var StyledHexInput = (0, _styledComponents["default"])(_Input["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    input {\n        ", "\n        padding: 0 0.7rem 0 1rem;\n\n        :focus,\n        :active {\n            padding: 0 0.65625rem 0 0.9375rem;\n        }\n    }\n\n    > div > span {\n        left: 0.2rem;\n    }\n"])), _styled.CssInput);
exports.StyledHexInput = StyledHexInput;
var StyledHexColorIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    line-height: 2.5rem;\n    font-size: 1rem;\n"])));
exports.StyledHexColorIcon = StyledHexColorIcon;