import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Input from '../../Input/styled/input';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

var hasLeftIcon = function hasLeftIcon(props) {
  return props.icon && props.iconPosition === 'left';
};

var hasRightIcon = function hasRightIcon(props) {
  return props.icon && props.iconPosition === 'right';
};

var StyledInput = attachThemeAttrs(styled(Input)).attrs(function (props) {
  var shadowWarning = "0 0 2px ".concat(props.palette.warning.main);
  return {
    shadowWarning: shadowWarning
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    &[readonly] {\n        padding-left: 0;\n        padding-right: 0;\n        background-color: transparent;\n        border: 2px transparent solid;\n        color: ", ";\n        font-weight: 400;\n        cursor: text;\n        box-sizing: border-box;\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            background-color: transparent;\n            border: 2px transparent solid;\n        }\n    }\n\n    ", "\n    ", ";\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"])), function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.error && "\n        &[readonly] {\n            &:focus,\n            &:active {\n                padding: 0;\n\n                ".concat(hasLeftIcon(props) && "\n                    padding-left: 1.75rem;\n                    padding-right: 0;\n                ", "\n                ").concat(hasRightIcon(props) && "\n                    padding-left: 0;\n                    padding-right: 1.75rem;\n                ", "\n            }\n        }\n    ");
}, function (props) {
  return hasLeftIcon(props) && "\n        &[readonly] {\n            padding-left: 1.75rem;\n            padding-right: 0;\n        }\n    ";
}, function (props) {
  return hasRightIcon(props) && "\n        &[readonly] {\n            padding-left: 0;\n            padding-right: 1.75rem;\n        }\n    ";
}, function (props) {
  return props.status === 'error' && "\n            border: 1px solid ".concat(props.palette.error.main, ";\n            transition-property: border;\n            transition-duration: .25s;\n\n            :focus,\n            :active {\n                border: 2px solid ").concat(props.palette.error.main, ";\n                box-shadow: ").concat(props.shadows.error, ";\n            }\n        ");
}, function (props) {
  return props.status === 'warning' && "\n            border: 1px solid ".concat(props.palette.warning.main, ";\n            transition-property: border;\n            transition-duration: .25s;\n\n            :focus,\n            :active {\n                border: 2px solid ").concat(props.palette.warning.main, ";\n                box-shadow: ").concat(props.shadowWarning, ";\n            }\n        ");
}, function (props) {
  return props.status === 'success' && "\n            border: 1px solid ".concat(props.palette.success.main, ";\n            transition-property: border;\n            transition-duration: .25s;\n\n            :focus,\n            :active {\n                border: 2px solid ").concat(props.palette.success.main, ";\n                box-shadow: ").concat(props.shadows.success, ";\n            }\n        ");
});
export default StyledInput;