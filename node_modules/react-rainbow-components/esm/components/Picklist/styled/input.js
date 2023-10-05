import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import StyledInput from '../../Input/styled/input';
import { COLOR_WHITE, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten, darken } from '../../../styles/helpers/color';
var PickerInput = attachThemeAttrs(styled(StyledInput)).attrs(function (props) {
  if (props.palette.isDark) {
    return {
      inverse: {
        text: COLOR_DARK_1,
        active: lighten(COLOR_DARK_1, 0.9),
        border: lighten(COLOR_DARK_1, 0.9),
        disabled: lighten(COLOR_DARK_1, 0.7)
      }
    };
  }

  return {
    inverse: {
      text: COLOR_WHITE,
      active: darken(COLOR_WHITE, 0.7),
      border: darken(COLOR_WHITE, 0.7),
      disabled: darken(COLOR_WHITE, 0.5)
    }
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding-right: 2.35rem;\n    font-weight: 400;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :focus,\n    :active {\n        padding-right: 2.35rem;\n    }\n\n    &[disabled] {\n        cursor: not-allowed;\n    }\n\n    ", "\n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return props.variant === 'shaded' && "\n        box-shadow: ".concat(props.shadows.shadow_10, ";\n        border: 1px solid transparent;\n        ").concat(props.error && "\n            border: 2px solid ".concat(props.palette.error.main, ";\n        "), "\n        ").concat(props.readOnly && "\n            box-shadow: none;\n        ", "\n    ");
}, function (props) {
  return props.variant === 'bare' && "\n        :hover {\n            box-shadow: ".concat(props.shadows.shadow_10, ";\n            background-color: ").concat(props.palette.background.main, ";\n        }\n    ");
}, function (props) {
  return props.variant === 'inverse' && "\n        background-color: transparent;\n        border: 1px solid transparent;\n        color: ".concat(props.inverse.text, ";\n        box-shadow: none;\n\n        &:hover,\n        &:focus,\n        &:active {\n            color: ").concat(props.inverse.text, ";\n            background-color: ").concat(props.inverse.active, ";\n            border: 1px solid ").concat(props.inverse.border, ";\n            box-shadow: none;\n        }\n    \n        &:focus {\n            outline: none;\n            background-color: ").concat(props.inverse.active, ";\n            border: 1px solid ").concat(props.inverse.border, ";\n            box-shadow: none;\n        }\n    \n        &[disabled] {\n            background-color: transparent;\n            color: ").concat(props.inverse.disabled, ";\n            border: 1px solid transparent;\n            box-shadow: none;\n\n            &:focus,\n            &:active {\n                outline: none;\n                background-color: transparent;\n                border: 1px solid transparent;\n                box-shadow: none;\n            }\n        }\n    ");
}, function (props) {
  return props.isReadOnly && !props.disabled && "\n        box-shadow: none;\n        background-color: transparent;\n        border: 2px solid transparent;\n        user-select: none;\n        pointer-events: none;\n        padding-left: 0;\n        padding-right: 0;\n        outline: 0;\n\n        ".concat(props.icon && "\n            border: 1px solid transparent;\n            padding-left: 2.35rem;\n        ", ";        \n\n        &::-ms-expand {\n            display: none;\n        }\n\n        :focus,\n        :active {\n            padding-left: 0;\n            padding-right: 0;\n            outline: 0;\n            box-shadow: none;\n            border-color: transparent;\n            background-color: transparent;\n\n            ").concat(props.icon && "\n                border: 1px solid transparent;\n                padding-left: 2.35rem;\n            ", "\n        }\n    ");
});
export default PickerInput;