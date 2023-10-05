"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _margins = require("../../../styles/margins");

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledIconContainer = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: ", ";\n    border-radius: ", ";\n    height: 2.125rem;\n    width: 2.125rem;\n"])), _margins.MARGIN_SMALL, _borderRadius.BORDER_RADIUS_2);

var _default = StyledIconContainer;
exports["default"] = _default;