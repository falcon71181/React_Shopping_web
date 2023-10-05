"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledAbbrHeader = _styledComponents["default"].abbr(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    cursor: default;\n    text-transform: capitalize;\n    box-sizing: border-box;\n\n    &[title] {\n        border: 0;\n        text-decoration: none;\n        cursor: default;\n        text-transform: capitalize;\n    }\n"])));

var _default = StyledAbbrHeader;
exports["default"] = _default;