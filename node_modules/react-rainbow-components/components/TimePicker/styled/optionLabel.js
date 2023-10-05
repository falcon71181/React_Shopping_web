"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _color = require("../../../styles/helpers/color");

var _templateObject;

var StyledOptionLabel = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    font-size: 24px;\n    font-weight: 200;\n    text-transform: uppercase;\n    color: ", ";\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 50%;\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n        border-radius: 4px;\n    }\n\n    @media (max-width: 340px) {\n        font-size: 22px;\n    }\n"])), function (props) {
  return (0, _color.replaceAlpha)(props.palette.getContrastText(props.palette.brand.main), 0.3);
}, function (props) {
  return props.palette.brand.dark;
});
var _default = StyledOptionLabel;
exports["default"] = _default;