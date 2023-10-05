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

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var variantMap = {
  card: 'card',
  line: 'line'
};
var StyledAnchor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    background: none;\n    border: none;\n    outline: inherit;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    background-color: transparent;\n    padding: ", " 1.75rem;\n    border-radius: 14px 14px 0 0;\n    line-height: 1rem;\n    letter-spacing: 1px;\n    font-size: ", ";\n    font-weight: 600;\n    color: ", ";\n    z-index: 0;\n    box-sizing: border-box;\n    cursor: pointer;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover,\n    &:active,\n    &:visited {\n        text-decoration: none;\n        outline: 0;\n        cursor: pointer;\n    }\n\n    &:hover {\n        color: ", ";\n        z-index: 1;\n    }\n\n    &:focus {\n        text-decoration: none;\n        outline: 0;\n    }\n\n    ", ";\n\n    ", ";\n\n    @media (max-width: 600px) {\n        height: 100%;\n        border-radius: 0;\n        color: ", ";\n        font-size: 16px;\n        width: 100%;\n        padding: 0 1rem 0 1rem;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        position: relative;\n\n        &::after {\n            content: unset;\n            position: unset;\n            left: unset;\n            height: unset;\n            width: unset;\n            background-color: unset;\n            box-sizing: border-box;\n        }\n\n        &:focus {\n            border-radius: 0;\n        }\n    }\n    \n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), _paddings.PADDING_X_SMALL, _fontSizes.FONT_SIZE_TEXT_SMALL, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return (variantMap[props.variant] === 'card' || !variantMap[props.variant]) && "\n            &:hover {\n                background-color: ".concat(props.palette.action.hover, ";\n            }\n\n            &::after {\n                content: '';\n                position: absolute;\n                left: -2px;\n                height: 20px;\n                width: 1px;\n                background-color: ").concat(props.palette.border.divider, ";\n                box-sizing: border-box;\n            }\n        \n            :hover::after {\n                background-color: transparent;\n            }\n        \n        ");
}, function (props) {
  return props.variant === 'line' && "\n            border-radius: 0;\n            font-size: 14px;\n            padding: ".concat(_paddings.PADDING_X_SMALL, " ").concat(_paddings.PADDING_SMALL, ";\n            line-height: 1.5; \n        ");
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isActive && (variantMap[props.variant] === 'card' || !variantMap[props.variant]) && "\n            z-index: 2;\n            background-color: ".concat(props.palette.background.main, ";\n            color: ").concat(props.palette.brand.main, ";\n            box-shadow: ").concat(props.shadows.shadow_4, ";\n\n            &:hover, &:active, &:visited, &:focus {\n                background-color: ").concat(props.palette.background.main, ";\n                color: ").concat(props.palette.brand.main, ";\n            }\n\n            &::after {\n                left: -40px;\n                content: '';\n                background: transparent;\n                position: absolute;\n                bottom: -16px;\n                height: 56px;\n                width: 56px;\n                border-radius: 100%;\n                border-width: 16px;\n                border-style: solid;\n                border-color: transparent ").concat(props.palette.background.main, " transparent transparent;\n                -webkit-transform: rotate(45deg);\n                box-sizing: border-box;\n            }\n\n            &::before {\n                right: -40px;\n                content: '';\n                background: transparent;\n                position: absolute;\n                bottom: -16px;\n                height: 56px;\n                width: 56px;\n                border-radius: 100%;\n                border-width: 16px;\n                border-style: solid;\n                border-color: transparent ").concat(props.palette.background.main, " transparent transparent;\n                -webkit-transform: rotate(145deg);\n                box-sizing: border-box;\n            }\n\n            @media (max-width: 600px) {\n                border-radius: 0;\n                position: relative;\n                width: 100%;\n\n                &::after {\n                    left: unset;\n                    content: unset;\n                    background: unset;\n                    position: unset;\n                    bottom: unset;\n                    height: unset;\n                    width: unset;\n                    border-radius: unset;\n                    border-width: unset;\n                    border-style: unset;\n                    border-color: unset;\n                    -webkit-transform: unset;\n                }\n            \n                &::before {\n                    background: unset;\n                    border-width: unset;\n                    border-style: unset;\n                    border-color: unset;\n                    -webkit-transform: unset;\n                    content: \"\";\n                    height: 0.15rem;\n                    width: 100%;\n                    left: 0;\n                    bottom: 0;\n                    position: absolute;\n                    background-color: ").concat(props.palette.brand.main, ";\n                    border-radius: 100px;\n                }\n            }\n        ");
}, function (props) {
  return props.isActive && props.variant === 'line' && "\n            z-index: 2;\n            color: ".concat(props.palette.brand.main, ";\n\n            &:hover, &:active, &:visited, &:focus {\n                color: ").concat(props.palette.brand.main, ";\n            }\n\n            &::before {\n                content: \"\";\n                height: 0.25rem;\n                width: 100%;\n                left: 0;\n                bottom: 0;\n                position: absolute;\n                background-color: ").concat(props.palette.brand.main, ";\n                border-radius: 100px;\n            }\n\n            @media (max-width: 600px) {\n                position: relative;\n                width: 100%;\n\n                &::before {\n                    content: \"\";\n                    height: 0.15rem;\n                    width: 100%;\n                    left: 0;\n                    bottom: 0;\n                    position: absolute;\n                    background-color: ").concat(props.palette.brand.main, ";\n                    border-radius: 100px;\n                }\n            }\n        ");
}, function (props) {
  return props.disabled && "\n            color: ".concat(props.palette.text.disabled, ";\n            cursor: pointer;\n            pointer-events: none;\n        \n            &:hover {\n                box-shadow: none;\n                background-color: transparent;\n            }\n        ");
}, function (props) {
  return props.fullWidth && "\n            flex-grow: 1;\n        ";
});
var _default = StyledAnchor;
exports["default"] = _default;