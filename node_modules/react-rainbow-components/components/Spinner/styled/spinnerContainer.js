"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _zIndex = require("../../../styles/zIndex");

var _templateObject;

var StyledSpinnerContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: ", ";\n    transform: translate(-50%, -50%);\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 0;\n    color: #ddd;\n"])), _zIndex.ZINDEX_SPINNER);

var _default = StyledSpinnerContainer;
exports["default"] = _default;