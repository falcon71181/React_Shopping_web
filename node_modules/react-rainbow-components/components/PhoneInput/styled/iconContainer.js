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

var StyledIconContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 0 auto;\n    color: ", ";\n    height: 100%;\n    width: 22px;\n    line-height: 1;\n    border: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n        width: 16px !important;\n        height: 16px !important;\n        font-size: 16px !important;\n        ", ";\n    \n        ", ";\n    }\n\n    :not(button) {\n        pointer-events: none;\n    }\n\n    ", "\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.size === 'large' && "\n            width: 20px !important;\n            height: 20px !important;\n            font-size: 20px !important;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            width: 14px !important;\n            height: 14px !important;\n            font-size: 14px !important;\n        ";
}, function (props) {
  return props.error && "\n        fill: ".concat(props.palette.error.main, ";\n        color: ").concat(props.palette.error.main, ";\n    ");
});
var _default = StyledIconContainer;
exports["default"] = _default;