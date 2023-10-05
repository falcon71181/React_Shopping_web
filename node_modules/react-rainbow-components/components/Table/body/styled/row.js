"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../../styles/helpers/color");

var _templateObject;

var StyledRow = (0, _attachThemeAttrs["default"])(_styledComponents["default"].tr)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    counter-increment: rowCounter;\n    box-sizing: border-box;\n    ", "\n\n    ", "\n\n    ", ";\n\n        height: 1px; // This is needed for expanding the cell height in Firefox\n    \n"])), function (props) {
  return props.theme.variant === 'default' && "\n        box-shadow: ".concat(props.shadows.shadow_8, ";\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n        &:hover {\n            background-color: ").concat((0, _color.replaceAlpha)(props.palette.action.hover, 0.4), ";\n            box-shadow: ").concat(props.shadows.shadow_9, ", ").concat(props.shadows.shadow_3, ";\n        }\n    ");
}, function (props) {
  return props.theme.variant === 'listview' && "\n        border-radius: 13px;\n        box-shadow: 0 1px 1px 0 ".concat(props.palette.border.divider, ";\n\n        :last-child th, :last-child td{\n            border-bottom: 1px solid ").concat(props.palette.border.divider, ";\n        }\n        \n\n        &:hover {\n            background-color: ").concat((0, _color.replaceAlpha)(props.palette.action.hover, 0.4), ";\n        }\n    ");
}, function (props) {
  return props.isSelected && "\n        background-color: ".concat((0, _color.replaceAlpha)(props.palette.action.active, 0.4), ";\n        ");
});
var _default = StyledRow;
exports["default"] = _default;