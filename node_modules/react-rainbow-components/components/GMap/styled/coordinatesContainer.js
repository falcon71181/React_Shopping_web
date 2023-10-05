"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledCoordinatesContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: ", ";\n    align-self: center;\n    width: 99%;\n"])), _margins.MARGIN_MEDIUM);

var _default = StyledCoordinatesContainer;
exports["default"] = _default;