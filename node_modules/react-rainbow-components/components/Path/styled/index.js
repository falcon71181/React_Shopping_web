"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStepsList = exports.StyledContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var StyledContainer = _styledComponents["default"].nav(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-sizing: border-box;\n    padding: 0.25rem;\n"])));

exports.StyledContainer = StyledContainer;

var StyledStepsList = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n"])));

exports.StyledStepsList = StyledStepsList;