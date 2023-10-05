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

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n    :hover {\n        background-color: ", ";\n    }\n\n    .rainbow-vertical-item_action {\n        padding: 0.65rem 1rem 0.65rem 3rem;\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.isExpanded && "\n            background-color: ".concat(props.palette.background.secondary, ";\n            box-shadow: inset 0 0 2px 0 ").concat(props.palette.background.secondary, ";\n            padding-bottom: 16px;\n        ");
});
var _default = StyledContainer;
exports["default"] = _default;