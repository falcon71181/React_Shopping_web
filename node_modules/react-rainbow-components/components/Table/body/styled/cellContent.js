"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledCellContent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px solid transparent;\n    color: ", ";\n    font-size: ", ";\n    min-height: 42px;\n    line-height: 40px;\n    padding: 0 0.5rem;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    box-sizing: border-box;\n    height: 100%;\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.component && "\n        padding: 0;\n    ";
}, function (props) {
  return props.isEditable && !props.component && "\n        min-height: 20px;\n        line-height: 12px;\n        max-width: 100%;\n        margin: auto;\n        padding: 0.3rem 0.5rem;\n    ";
});
var _default = StyledCellContent;
exports["default"] = _default;