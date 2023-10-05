"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _paddings = require("../../../styles/paddings");

var _templateObject;

var StyledSelectContent = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 100px;\n    width: 360px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: ", ";\n    border-radius: 8px;\n    margin: 48px 12px 32px 12px;\n    padding: ", ";\n\n    @media (max-width: 600px) {\n        width: 100%;\n        margin: 56px 0 40px 0;\n    }\n"])), function (props) {
  return props.palette.background.secondary;
}, _paddings.PADDING_X_SMALL);
var _default = StyledSelectContent;
exports["default"] = _default;