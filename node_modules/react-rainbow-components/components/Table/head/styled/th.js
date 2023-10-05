"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../../styles/fontSizes");

var _templateObject;

var StyledTh = (0, _attachThemeAttrs["default"])(_styledComponents["default"].th)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    text-transform: uppercase;\n    font-size: ", ";\n    font-weight: 900;\n    color: ", ";\n    line-height: normal;\n    white-space: nowrap;\n    position: static;\n    padding: 0;\n    border-top: 0;\n    box-sizing: border-box;\n\n    &:first-of-type .rainbow-table_header-container {\n        padding-left: 18px;\n    }\n\n    :focus {\n        outline:none;\n\n        .rainbow-table_header-container {\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n        }\n\n        .rainbow-table_header-arrow {\n            visibility: visible;\n        }\n\n        .rainbow-table_header-resize-bar,\n        &:hover .rainbow-table_header-resize-bar {\n            background-color: ", ";\n        }\n\n        &:hover .rainbow-table_header-container {\n            border-color: ", ";\n        }\n    }\n\n    ", ";\n    ", ";\n\n        ", "\n\n    ", ";\n"])), _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.title;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isResizable && "\n            cursor: pointer;\n\n            &:hover {\n                > div {\n                    background-color: ".concat(props.palette.background.main, ";\n                }\n\n                .rainbow-table_header-resize-bar {\n                    background-color: ").concat(props.palette.border.divider, ";\n                }\n\n                .rainbow-table_header-container {\n                    border-color: transparent;\n                    border-right-color: transparent;\n                }\n            }\n        ");
}, function (props) {
  return props.sortable && "\n            cursor: pointer;\n\n            :hover {\n                > div {\n                    background-color: ".concat(props.palette.background.main, ";\n                }\n            \n                .rainbow-table_header-resize-bar {\n                    background-color: ").concat(props.palette.border.divider, ";\n                }\n            \n                .rainbow-table_header-container {\n                    border-color: ").concat(props.palette.border.divider, ";\n                }\n            \n                .rainbow-table_header-arrow {\n                    visibility: visible;\n                    margin-left: 12px;\n                }\n            }\n        ");
}, function (props) {
  return props.theme.variant === 'listview' && "\n            :hover {\n                > div, .rainbow-table_header-resize-bar {\n                    background-color: transparent;\n                }\n\n                .rainbow-table_header-container {\n                    border-color: transparent;\n                }\n            }\n\n            :focus {\n        \n                .rainbow-table_header-container {\n                    background-color: transparent;\n                    border-color: transparent;\n                }\n\n                .rainbow-table_header-resize-bar,\n                &:hover .rainbow-table_header-resize-bar {\n                    background-color: transparent;\n                    border-color: transparent;\n                }\n        \n                &:hover .rainbow-table_header-container {\n                    background-color: transparent;\n                    border-color: transparent;\n                }\n            }\n        ";
}, function (props) {
  return props.isSorted && "\n            .rainbow-table_header-arrow {\n                visibility: visible;\n                margin-left: 12px;\n            }\n        ";
});
var _default = StyledTh;
exports["default"] = _default;