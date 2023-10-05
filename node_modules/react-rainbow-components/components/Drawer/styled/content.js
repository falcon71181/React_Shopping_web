"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledContent = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1;\n    padding: 1rem;\n    overflow: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    box-sizing: border-box;\n"])));

var _default = StyledContent;
exports["default"] = _default;