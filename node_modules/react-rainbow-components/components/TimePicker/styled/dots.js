"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paddings = require("../../../styles/paddings");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledDots = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 32px;\n    font-weight: 200;\n    height: 100%;\n    color: ", ";\n    margin: auto ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 600px) {\n        margin: 0;\n    }\n"])), function (props) {
  return props.palette.brand.main;
}, _paddings.PADDING_XX_SMALL);
var _default = StyledDots;
exports["default"] = _default;