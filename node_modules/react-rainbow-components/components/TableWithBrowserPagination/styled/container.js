"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTable = exports.StyledContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Table = _interopRequireDefault(require("../../Table"));

var _templateObject, _templateObject2;

var StyledContainer = _styledComponents["default"].section(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n"])));

exports.StyledContainer = StyledContainer;
var StyledTable = (0, _styledComponents["default"])(_Table["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    overflow: auto;\n"])));
exports.StyledTable = StyledTable;