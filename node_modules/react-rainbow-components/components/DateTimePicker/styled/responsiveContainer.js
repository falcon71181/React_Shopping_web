"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledResponsiveContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 1rem;\n\n    @media (max-width: 800px) {\n        padding: 26px 0 8px 0;\n        justify-content: center;\n        align-items: center;\n    }\n"])));

var _default = StyledResponsiveContainer;
exports["default"] = _default;