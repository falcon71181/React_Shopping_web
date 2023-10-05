"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _margins = require("../../../styles/margins");

var _templateObject;

var StyledVerticalButtonsContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 ", " 0 ", ";\n\n    > :first-child {\n        border-radius: 24px 24px 0 0;\n    }\n\n    > :last-child {\n        border-radius: 0 0 24px 24px;\n        margin-top: -1px;\n    }\n\n    @media (max-width: 600px) {\n        margin-left: 0;\n    }\n"])), _margins.MARGIN_XX_SMALL, _margins.MARGIN_X_SMALL);

var _default = StyledVerticalButtonsContainer;
exports["default"] = _default;