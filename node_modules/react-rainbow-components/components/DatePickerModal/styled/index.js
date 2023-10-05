"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModal = exports.StyledCalendar = exports.HeaderTitle = exports.Header = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _Modal = _interopRequireDefault(require("../../Modal"));

var _Calendar = _interopRequireDefault(require("../../Calendar"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledModal = (0, _styledComponents["default"])(_Modal["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto !important;\n    height: fit-content !important;\n\n    @media (max-width: 600px) {\n        border-radius: 0 0 0.975rem 0.975rem !important;\n        align-self: flex-start;\n        width: 100% !important;\n        max-width: 100% !important;\n    }\n"])));
exports.StyledModal = StyledModal;
var StyledCalendar = (0, _styledComponents["default"])(_Calendar["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 420px;\n    padding: 0 8px;\n    margin: 20px 0 0 0;\n    ", ";\n\n    @media (max-width: 600px) {\n        width: 100%;\n        padding: 0;\n    }\n"])), function (props) {
  return props.variant === 'double' && "\n            width: 800px;\n        ";
});
exports.StyledCalendar = StyledCalendar;

var Header = _styledComponents["default"].header(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    align-items: stretch;\n    padding: 4px 48px 8px 20px;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.variant === 'single' && "\n        width: 350px;\n        ";
}, function (props) {
  return props.variant === 'double' && "\n        width: 730px;\n        ";
});

exports.Header = Header;
var HeaderTitle = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h1)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.brand.main;
}, _fontSizes.FONT_SIZE_HEADING_LARGE);
exports.HeaderTitle = HeaderTitle;