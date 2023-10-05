"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlexContainer = exports.StyledContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n"])));

exports.StyledContainer = StyledContainer;

var StyledFlexContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex: 0 0 auto;\n"])));

exports.StyledFlexContainer = StyledFlexContainer;