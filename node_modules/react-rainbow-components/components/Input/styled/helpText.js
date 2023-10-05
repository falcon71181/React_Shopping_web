"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _margins = require("../../../styles/margins");

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

function getAlignSelf(props) {
  return props.alignSelf || 'center';
}

var HelpText = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    margin-top: ", ";\n    align-self: ", ";\n    color: ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_SMALL, _margins.MARGIN_X_SMALL, getAlignSelf, function (props) {
  return props.palette.text.header;
});
var _default = HelpText;
exports["default"] = _default;