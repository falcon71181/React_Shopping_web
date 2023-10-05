"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledHeader = _styledComponents["default"].li(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0 0.75rem;\n    height: 45px;\n    line-height: 45px;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n\n    &:hover {\n        cursor: default;\n    }\n"])));

var _default = StyledHeader;
exports["default"] = _default;