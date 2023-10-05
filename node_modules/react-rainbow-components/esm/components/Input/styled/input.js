import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_2, BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM, FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

var hasLeftIcon = function hasLeftIcon(props) {
  return props.icon && props.iconPosition === 'left';
};

var hasRightIcon = function hasRightIcon(props) {
  return props.icon && props.iconPosition === 'right';
};

var Input = attachThemeAttrs(styled.input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    width: 100%;\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: inline-block;\n    padding: 0 1rem;\n    line-height: 2.5rem;\n    height: 2.5rem;\n    color: ", ";\n    font-size: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    \n    ", ";\n\n    ", ";\n    text-align: ", ";\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &[type='number']::-webkit-inner-spin-button,\n    &[type='number']::-webkit-outer-spin-button {\n        height: auto;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0 0.9375rem;\n        border: 2px solid ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    ::placeholder {\n        color: ", ";\n        font-weight: 500;\n        font-size: ", ";\n        ", ";\n    \n        ", ";\n    }\n\n    &[disabled] {\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        user-select: none;\n        ", "\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: ", ";\n            border: 1px solid ", ";\n        }\n    }\n    ", "\n\n    ", "    \n    ", "\n    ", ";\n    \n    ", ";\n    ", ";\n\n    &[type='datetime']:focus,\n    &[type='datetime']:active,\n    &[type='date']:focus,\n    &[type='date']:active,\n    &[type='datetime-local']:focus,\n    &[type='datetime-local']:active,\n    &[type='time']:focus,\n    &[type='time']:active,\n    &[type='month']:focus,\n    &[type='month']:active,\n    &[type='week']:focus,\n    &[type='week']:active {\n        line-height: 2.5rem;\n    }\n\n    @supports (-webkit-overflow-scrolling: touch) {\n        &[type='date'],\n        &[type='datetime-local'],\n        &[type='time'],\n        &[type='week'],\n        &[type='month'] {\n            appearance: textfield;\n            position: relative;\n\n            &::after {\n                content: '';\n                position: absolute;\n                display: block;\n                right: 1rem;\n                bottom: 45%;\n                pointer-events: none;\n                width: 0.45rem;\n                height: 0.45rem;\n                border-style: solid;\n                border-width: 0.15em 0.15em 0 0;\n                transform: rotate(135deg);\n                vertical-align: top;\n                color: ", ";\n                box-sizing: border-box;\n            }\n\n            &[disabled]::after {\n                color: ", ";\n                box-sizing: border-box;\n            }\n        }\n    }\n    ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, BORDER_RADIUS_2, function (props) {
  return props.palette.text.main;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n            padding: 0 1.2rem;\n            line-height: 3.275rem;\n            font-size: ".concat(FONT_SIZE_HEADING_MEDIUM, ";\n            height: 3.4rem;\n        ");
}, function (props) {
  return props.size === 'small' && "\n            padding: 0 0.8rem;\n            line-height: 1.775rem;\n            font-size: ".concat(FONT_SIZE_TEXT_MEDIUM, ";\n            height: 1.9rem;\n        ");
}, function (props) {
  return props.valueAlignment;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.size === 'large' && "\n                padding: 0 1.125rem;\n            ";
}, function (props) {
  return props.size === 'small' && "\n                padding: 0 0.75rem;\n            ";
}, function (props) {
  return props.palette.text.header;
}, FONT_SIZE_TEXT_LARGE, function (props) {
  return props.size === 'large' && "\n                font-size: ".concat(FONT_SIZE_HEADING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(FONT_SIZE_TEXT_MEDIUM, ";\n            ");
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return !props.icon && 'padding: 0 1rem;';
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.variant === 'shaded' && "\n        box-shadow:".concat(props.disabled || props.readOnly ? '' : props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n    ");
}, function (props) {
  return props.variant === 'bare' && "\n        background-color: transparent;\n        border: 0;\n        padding: 0 0.75rem;\n        color: ".concat(props.palette.text.main, ";\n        line-height: 2.5rem;\n        transition: none;\n\n        &:focus,\n        &:active {\n            outline: 0;\n            box-shadow: none;\n            padding: 0 0.75rem;\n            background-color: transparent;\n            border: 0;\n        }\n    ");
}, function (props) {
  return props.error && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: 2px solid ").concat(props.palette.error.main, ";\n        background-clip: padding-box;\n\n        :focus,\n        :active {\n            background-color: ").concat(props.palette.background.main, ";\n            border: 2px solid ").concat(props.palette.error.main, ";\n            box-shadow: ").concat(props.shadows.error, ";\n            padding: 0 1rem;\n            outline: 0;\n            ").concat(props.size === 'large' && "\n                    padding: 0 1.2rem;\n                ", ";\n        \n            ").concat(props.size === 'small' && "\n                    padding: 0 0.8rem;\n                ", ";\n        }\n\n        &[disabled] {\n            &:focus,\n            &:active {\n                padding: 0 1rem;\n\n                ").concat(hasLeftIcon(props) && "\n                    padding-left: 2.35rem;\n                    padding-right: 1rem;\n                ", "\n                ").concat(hasRightIcon(props) && "\n                    padding-left: 1rem;\n                    padding-right: 2.35rem\n                ", "\n            }\n        }\n    ");
}, function (props) {
  return props.isBare && !props.disabled && !props.readOnly && "\n            background-color: transparent;\n            border: 0;\n            padding: 0 0.75rem;\n            color: ".concat(props.palette.text.main, ";\n            line-height: 2.5rem;\n            transition: none;\n\n            &:focus,\n            &:active {\n                outline: 0;\n                box-shadow: none;\n                padding: 0 0.75rem;\n                background-color: transparent;\n                border: 0;\n            }\n        ");
}, function (props) {
  return hasLeftIcon(props) && "\n        padding-left: 2.35rem;\n        padding-right: 1rem;\n\n        &:focus,\n        &:active {\n            padding-left: ".concat(props.isBare || props.error ? '2.35rem' : '2.2875rem', ";\n            ").concat(props.isBare && 'padding-right: 1rem', "\n        }\n\n        &[disabled] {\n            padding-left: 2.35rem;\n            padding-right: 1rem;\n        }\n    ");
}, function (props) {
  return hasRightIcon(props) && "\n        padding-left: 1rem;\n        padding-right: 2.35rem;\n\n        &:focus,\n        &:active {\n            padding-right: ".concat(props.isBare ? '2.35rem' : '2.2875rem', ";\n            ").concat(props.isBare ? 'padding-left: 1rem' : '', "\n        }\n\n        &[disabled] {\n            padding-left: 1rem;\n            padding-right: 2.35rem;\n        }\n    ");
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default Input;