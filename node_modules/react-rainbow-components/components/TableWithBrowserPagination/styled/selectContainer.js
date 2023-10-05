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

var StyledSelectContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-shrink: 0;\n    position: relative;\n    margin: 0 12px;\n    height: 100%;\n\n    &::after {\n        content: '';\n        position: absolute;\n        display: block;\n        right: 12px;\n        bottom: 42.5%;\n        pointer-events: none;\n        width: 0.45rem;\n        height: 0.45rem;\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        transform: rotate(135deg);\n        vertical-align: top;\n        color: ", ";\n    }\n"])), function (props) {
  return props.palette.brand.main;
});
var _default = StyledSelectContainer;
exports["default"] = _default;