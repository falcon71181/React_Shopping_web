"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlidersContainer = exports.StyledSaturationContainer = exports.StyledRgbaColorContainer = exports.StyledHexColorContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledSaturationContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    flex: 1 0 auto;\n    border-radius: 12px;\n    overflow: hidden;\n    border: 1px solid ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
exports.StyledSaturationContainer = StyledSaturationContainer;

var StyledSlidersContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1 0 auto;\n    margin-right: 15px;\n    margin-top: 5px;\n"])));

exports.StyledSlidersContainer = StyledSlidersContainer;

var StyledHexColorContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 3 auto;\n"])));

exports.StyledHexColorContainer = StyledHexColorContainer;

var StyledRgbaColorContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 4 auto;\n"])));

exports.StyledRgbaColorContainer = StyledRgbaColorContainer;