"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSection = exports.StyledMonthsContainer = exports.StyledMonth = exports.StyledHeaderContainer = exports.StyledControlsContainer = exports.StyledCalendar = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StyledSection = _styledComponents["default"].section(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr;\n    grid-column-gap: 2rem;\n    grid-row-gap: 0;\n    width: 100%;\n\n    @media (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n"])));

exports.StyledSection = StyledSection;

var StyledControlsContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-grow: 1;\n    align-content: start;\n    justify-content: space-between;\n    padding: 0 0 8px 0;\n\n    @media (max-width: 768px) {\n        &:nth-child(1) {\n            order: 1;\n        }\n\n        &:nth-child(2) {\n            order: 3;\n            margin-top: 2rem;\n        }\n    }\n"])));

exports.StyledControlsContainer = StyledControlsContainer;

var StyledCalendar = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    @media (max-width: 768px) {\n        &:nth-child(3) {\n            order: 2;\n        }\n\n        &:nth-child(4) {\n            order: 4;\n        }\n    }\n"])));

exports.StyledCalendar = StyledCalendar;

var StyledHeaderContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n"])));

exports.StyledHeaderContainer = StyledHeaderContainer;

var StyledMonthsContainer = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: stretch;\n    align-items: center;\n    flex-grow: 1;\n"])));

exports.StyledMonthsContainer = StyledMonthsContainer;
var StyledMonth = (0, _attachThemeAttrs["default"])(_styledComponents["default"].h3)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 500;\n    margin: 0 1rem 0 0;\n    padding: 0;\n    box-sizing: border-box;\n"])), _fontSizes.FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.text.main;
});
exports.StyledMonth = StyledMonth;