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

var StyledButtonGroup = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n\n    > span:first-child,\n    > label:first-child > span {\n        border-radius: 100px 0 0 100px;\n    }\n\n    > span:last-child,\n    > label:last-child > span {\n        border-radius: 0 100px 100px 0;\n    }\n\n    > span:only-child,\n    > label:only-child > span {\n        border-radius: 100px;\n    }\n\n    ", "\n"])), function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:".concat(props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n        background-color: ").concat(props.palette.background.main, ";\n        border-radius: 100px;\n        > label:last-child > div {\n            display: none;\n        }\n    ");
});
var _default = StyledButtonGroup;
exports["default"] = _default;