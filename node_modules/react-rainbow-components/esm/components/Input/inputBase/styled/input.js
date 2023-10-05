import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Input from '../../styled/input';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../../styles/borderRadius';

var hasLeftIcon = function hasLeftIcon(props) {
  return props.icon && props.iconPosition === 'left';
};

var hasRightIcon = function hasRightIcon(props) {
  return props.icon && props.iconPosition === 'right';
};

var StyledInput = attachThemeAttrs(styled(Input))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", ";\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return !props.disabled && "\n        &[readonly] {\n            padding-left: 0;\n            padding-right: 0;\n            background-color: transparent;\n            border: 2px transparent solid;\n            color: ".concat(props.palette.text.main, ";\n            font-weight: 400;\n            cursor: text;\n            box-sizing: border-box;\n    \n            &:focus,\n            &:active {\n                box-shadow: none;\n                background-color: transparent;\n                border: 2px transparent solid;\n            }\n        }\n    ");
}, function (props) {
  return props.error && "\n        &[readonly] {\n            &:focus,\n            &:active {\n                padding: 0;\n\n                ".concat(hasLeftIcon(props) && "\n                    padding-left: 1.75rem;\n                    padding-right: 0;\n                ", "\n                ").concat(hasRightIcon(props) && "\n                    padding-left: 0;\n                    padding-right: 1.75rem;\n                ", "\n            }\n        }\n    ");
}, function (props) {
  return hasLeftIcon(props) && "\n        &[readonly] {\n            padding-left: 1.75rem;\n            padding-right: 0;\n        }\n    ";
}, function (props) {
  return hasRightIcon(props) && "\n        &[readonly] {\n            padding-left: 0;\n            padding-right: 1.75rem;\n        }\n    ";
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default StyledInput;