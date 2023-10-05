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

var StyledModal = (0, _styledComponents["default"])(_Modal["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: fit-content !important;\n\n    @media (max-width: 800px) {\n        align-self: flex-start;\n        border-radius: 0 0 0.875rem 0.875rem !important;\n        height: fit-content !important;\n        max-height: fit-content !important;\n        width: 100vw !important;\n    }\n\n    @media (max-width: 340px) {\n        height: 100vh !important;\n        max-height: 100vh !important;\n    }\n"])));
var _default = StyledModal;
exports["default"] = _default;