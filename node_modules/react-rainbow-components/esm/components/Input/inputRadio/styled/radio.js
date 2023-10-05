import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import HiddenElement from '../../../Structural/hiddenElement';
import { BORDER_RADIUS_2 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

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

var Radio = attachThemeAttrs(styled(HiddenElement))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    & ~ label > .rainbow-input_faux {\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        border: ", ";\n        border-radius: ", ";\n        background: ", ";\n        margin-right: ", ";\n        transition: border 0.1s linear, background-color 0.1s linear;\n        box-sizing: border-box;\n        padding: 0;\n\n        &::after {\n            content: '';\n            height: 12px;\n            width: 12px;\n            position: absolute;\n            top: 2px;\n            left: 2px;\n            border-radius: ", ";\n            background: transparent;\n            opacity: 0;\n            transform: scale(0.1, 0.1);\n            transition: all 0.2s ease-in;\n            box-sizing: border-box;\n        }\n    }\n\n    :checked ~ label > .rainbow-input_faux {\n        background: ", ";\n        border: 2px solid;\n        border-color: ", ";\n\n        &::after {\n            opacity: 1;\n            transform: scale(1, 1);\n            transition: all 0.2s ease-in;\n            background: ", ";\n            box-sizing: border-box;\n        }\n    }\n\n    :focus ~ label > .rainbow-input_faux {\n        border: 2px solid;\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux {\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    &[disabled] ~ label > .rainbow-input_faux::after {\n        background: ", ";\n        box-sizing: border-box;\n    }\n"])), getInitialBorder, BORDER_RADIUS_2, function (props) {
  return props.palette.background.main;
}, MARGIN_SMALL, BORDER_RADIUS_2, function (props) {
  return props.palette.background.main;
}, getColor, getColor, getColor, getShadow, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
});
export default Radio;