"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _margins = require("../../../styles/margins");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].article)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    background-color: ", ";\n    color: ", ";\n    border: 0.0625rem solid ", ";\n    border-radius: ", ";\n    background-clip: padding-box;\n    box-shadow: ", ";\n    overflow: hidden;\n\n    &:hover {\n        box-shadow: ", ";\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    }\n\n    .rainbow-carousel-image {\n        box-shadow: none;\n    }\n\n    & > .rainbow-google-map {\n        .rainbow-google-map_map-container {\n            border: none;\n            border-radius: ", " ", " 0 0;\n            box-shadow: none;\n            height: 100%;\n            width: 100%;\n        }\n\n        .rainbow-google-map_coordinates-container {\n            margin-bottom: ", ";\n            padding: 0 1rem;\n            width: 100%;\n        }\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.border.divider;
}, _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.shadows.shadow_6;
}, _borderRadius.BORDER_RADIUS_1, _borderRadius.BORDER_RADIUS_1, _margins.MARGIN_LARGE, function (props) {
  return props.hasHeader && "\n            > .rainbow-google-map > .rainbow-google-map_map-container {\n                border-radius: 0;\n            }\n        ";
});
var _default = StyledContainer;
exports["default"] = _default;