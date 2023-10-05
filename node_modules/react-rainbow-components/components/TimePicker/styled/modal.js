"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Modal = _interopRequireDefault(require("../../Modal"));

var _templateObject;

var StyledModal = (0, _styledComponents["default"])(_Modal["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n    height: fit-content;\n\n    @media (max-width: 600px) {\n        border-radius: 0 0 0.975rem 0.975rem !important;\n        align-self: flex-start;\n        width: 100% !important;\n        max-width: 100% !important;\n    }\n"])));
var _default = StyledModal;
exports["default"] = _default;