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

var StyledAssignFieldTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    font-family: 'Lato Light', Arial, sans-serif;\n    padding: 1rem 2.5rem;\n    text-align: center;\n    font-size: 1.5rem;\n    color: ", ";\n    margin: 0;\n    font-weight: inherit;\n\n    b {\n        font-family: 'Lato Bold', Arial, sans-serif;\n    }\n"])), function (props) {
  return props.palette.text.title;
});
var _default = StyledAssignFieldTitle;
exports["default"] = _default;