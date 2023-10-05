"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledIndicatorList = _styledComponents["default"].ol(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: auto;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n"])));

var _default = StyledIndicatorList;
exports["default"] = _default;