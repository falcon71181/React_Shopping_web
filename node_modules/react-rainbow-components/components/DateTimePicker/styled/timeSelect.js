"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _timeSelect = _interopRequireDefault(require("../../TimePicker/timeSelect"));

var _templateObject;

var StyledTimeSelect = (0, _styledComponents["default"])(_timeSelect["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-top: 60px;\n\n    @media (max-width: 800px) {\n        margin-top: 0;\n    }\n\n    div[role='presentation'] {\n        @media (max-width: 800px) {\n            margin-top: 0;\n            margin-bottom: 10px;\n            height: 76px;\n        }\n    }\n\n    footer {\n        justify-content: flex-end;\n    }\n"])));
var _default = StyledTimeSelect;
exports["default"] = _default;