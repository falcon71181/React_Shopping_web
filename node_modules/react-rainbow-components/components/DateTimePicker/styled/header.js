"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledHeader = _styledComponents["default"].header(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: center;\n    margin: 4px 48px 8px 12px;\n\n    @media (max-width: 800px) {\n        margin: 0 48px 0 8px;\n    }\n"])));

var _default = StyledHeader;
exports["default"] = _default;