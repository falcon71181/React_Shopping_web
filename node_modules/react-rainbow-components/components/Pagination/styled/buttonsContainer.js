"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _margins = require("../../../styles/margins");

var _templateObject;

var ButtonsContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    box-shadow:", ";\n    border-radius: 100px;\n    margin-left: ", ";\n    margin-right: ", ";\n"])), function (props) {
  return props.shadows.shadow_10;
}, _margins.MARGIN_X_SMALL, _margins.MARGIN_X_SMALL);
var _default = ButtonsContainer;
exports["default"] = _default;