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

var StyledControls = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex: 0 0 auto;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 0 8px 0;\n\n    > div:first-child {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        flex-grow: 1;\n        margin-right: ", ";\n    }\n"])), _margins.MARGIN_MEDIUM);

var _default = StyledControls;
exports["default"] = _default;