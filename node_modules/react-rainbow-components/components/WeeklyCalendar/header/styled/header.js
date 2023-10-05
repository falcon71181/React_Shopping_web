"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledHeader = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: row;\n    flex: 0 0 auto;\n    border: 1px solid ", ";\n\n    > div:last-child {\n        overflow: scroll;\n        visibility: hidden;\n        flex: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
var _default = StyledHeader;
exports["default"] = _default;