"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledIndicator = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 8px;\n    display: flex;\n    align-items: center;\n\n    &::after {\n        content: '';\n        pointer-events: none;\n        display: inline-block;\n        bottom: 45%;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        box-sizing: border-box;\n    }\n"])));

var _default = StyledIndicator;
exports["default"] = _default;