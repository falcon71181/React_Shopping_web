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

var StyledInputIcon = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100%;\n    width: 22px;\n    position: absolute;\n    top: 0;\n    right: 0.8rem;\n    line-height: 1;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s linear;\n\n    svg {\n        width: 16px;\n        height: 16px;\n        font-size: 16px;\n    }\n\n    :not(button) {\n        pointer-events: none;\n    }\n\n    ", ";\n"])), function (props) {
  return props.error && "\n            fill: ".concat(props.palette.error.main, ";\n            color: ").concat(props.palette.error.main, ";\n        ");
});
var _default = StyledInputIcon;
exports["default"] = _default;