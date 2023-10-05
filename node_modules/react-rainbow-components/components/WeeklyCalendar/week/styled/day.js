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

var StyledDay = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1 0 auto;\n    border-right: 1px solid ", ";\n    position: relative;\n    height: 100%;\n    width: 90px;\n    min-width: 90px;\n\n    :last-child {\n        border-right: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
var _default = StyledDay;
exports["default"] = _default;