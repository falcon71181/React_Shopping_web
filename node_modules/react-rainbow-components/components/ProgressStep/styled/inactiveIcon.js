"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledInactiveIcon = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-radius: ", ";\n"])), _borderRadius.BORDER_RADIUS_2);

var _default = StyledInactiveIcon;
exports["default"] = _default;