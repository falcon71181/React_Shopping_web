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

var StyledGridLine = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 40px;\n\n    ::after {\n        content: '';\n        border-bottom: 1px solid ", ";\n        position: absolute;\n        width: 100%;\n        margin-top: -1px;\n        z-index: 0;\n        pointer-events: none;\n    }\n"])), function (props) {
  return props.palette.border.divider;
});
var _default = StyledGridLine;
exports["default"] = _default;