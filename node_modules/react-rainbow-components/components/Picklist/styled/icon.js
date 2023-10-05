"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 2.5rem;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    line-height: 2.5rem;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    ", "\n"])), function (props) {
  return props.error && "\n            fill: ".concat(props.palette.error.main, ";\n            color: ").concat(props.palette.error.main, ";\n    ");
});
var _default = StyledIcon;
exports["default"] = _default;