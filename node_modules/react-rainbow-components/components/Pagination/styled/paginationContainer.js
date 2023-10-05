"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledPaginationContainer = _styledComponents["default"].ul(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n"])));

var _default = StyledPaginationContainer;
exports["default"] = _default;