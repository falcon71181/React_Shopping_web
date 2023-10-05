import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled, { keyframes } from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';

function getInitialBorder(props) {
  if (props.error) {
    return "2px solid ".concat(props.palette.error.main);
  }

  return "1px solid ".concat(props.palette.border.divider);
}

function getColor(props) {
  if (props.error) {
    return props.palette.error.main;
  }

  return props.palette.brand.main;
}

function getShadow(props) {
  if (props.error) {
    return props.shadows.error;
  }

  return props.shadows.brand;
}

var flash = function flash(color) {
  return keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    100% {\n        box-shadow: 0 0 0 5px ", ";\n    }\n"])), color);
};

var Checkbox = attachThemeAttrs(styled(HiddenElement))(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    & ~ label > .rainbow-input_faux {\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        border: ", ";\n        border-radius: ", ";\n        background: ", ";\n        margin-right: ", ";\n        transition: border 0.1s linear, background-color 0.1s linear;\n        box-sizing: border-box;\n    }\n\n    :checked ~ label > .rainbow-input_faux::after {\n        display: block;\n        content: '';\n        height: 0.4rem;\n        width: 0.65rem;\n        position: absolute;\n        top: 46%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n        border-bottom: 2px solid;\n        border-left: 2px solid;\n        border-color: ", ";\n        box-sizing: border-box;\n        padding: 0;\n    }\n\n    :checked ~ label > .rainbow-input_faux {\n        animation: ", " 0.2s linear;\n        border: 2px solid;\n        border-color: ", ";\n    }\n\n    :focus ~ label > .rainbow-input_faux {\n        content: '';\n        border: 2px solid;\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux {\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux::after {\n        border-color: ", ";\n        box-sizing: border-box;\n    }\n\n    :focus:checked ~ label > .rainbow-input_faux {\n        border-color: ", ";\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n"])), getInitialBorder, BORDER_RADIUS_3, function (props) {
  return props.palette.background.main;
}, MARGIN_SMALL, getColor, function (props) {
  return props.error ? flash(replaceAlpha(props.palette.error.main, 0.5)) : flash(replaceAlpha(props.palette.brand.main, 0.5));
}, getColor, getColor, getShadow, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.disabled;
}, function (props) {
  return props.palette.background.main;
}, getColor, function (props) {
  return props.palette.background.main;
}, getShadow);
export default Checkbox;