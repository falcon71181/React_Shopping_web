import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledLabelContainer = attachThemeAttrs(styled.label)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    box-sizing: border-box;\n\n    .rainbow-checkbox-toggle_faux {\n        display: block;\n        width: 2.75rem;\n        height: 1.5rem;\n        padding: 0.125rem;\n        transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);\n        border-radius: 1rem;\n        border: solid 0.125rem ", ";\n        background-color: ", ";\n        position: relative;\n        box-sizing: border-box;\n\n        &:hover,\n        &:focus {\n            cursor: pointer;\n            background-color: ", ";\n            border: solid 0.125rem ", ";\n        }\n\n        &::after {\n            content: '';\n            top: 0;\n            bottom: 0;\n            margin: auto;\n            left: 0.015625rem;\n            width: 1.25rem;\n            height: 1.25rem;\n            box-shadow: ", ";\n            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);\n            border-radius: 1rem;\n            border: solid 0.125rem transparent;\n            background-color: ", ";\n            position: absolute;\n            box-sizing: border-box;\n        }\n    }\n\n    [type='checkbox'] + .rainbow-checkbox-toggle_faux-container {\n        font-size: 0.625rem;\n        color: ", ";\n    }\n\n    [type='checkbox'] {\n        :focus + .rainbow-checkbox-toggle_faux,\n        :focus ~ .rainbow-checkbox-toggle_faux,\n        :focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {\n            border-color: ", ";\n            background-color: ", ";\n            outline: 0;\n            box-shadow: ", "\n        }\n\n        :checked + .rainbow-checkbox-toggle_faux,\n        :checked ~ .rainbow-checkbox-toggle_faux,\n        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {\n            border-color: ", ";\n            background-color: ", ";\n        }\n\n        :checked + .rainbow-checkbox-toggle_faux:hover,\n        :checked + .rainbow-checkbox-toggle_faux:focus,\n        :checked ~ .rainbow-checkbox-toggle_faux:hover,\n        :checked ~ .rainbow-checkbox-toggle_faux:focus,\n        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:hover,\n        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux:focus {\n            background-color: ", ";\n            border-color: ", ";\n        }\n\n        :checked + .rainbow-checkbox-toggle_faux::after,\n        :checked ~ .rainbow-checkbox-toggle_faux::after,\n        :checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {\n            box-shadow: 0 0 0 0 transparent;\n            transition: all 0.3s cubic-bezier(0.75, 0, 0.08, 1);\n            transform: translateX(20px);\n            box-sizing: border-box;\n        }\n\n        :checked:focus + .rainbow-checkbox-toggle_faux,\n        :checked:focus ~ .rainbow-checkbox-toggle_faux,\n        :checked:focus + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {\n            background-color: ", ";\n        }\n\n        &[disabled] + .rainbow-checkbox-toggle_faux,\n        &[disabled] ~ .rainbow-checkbox-toggle_faux,\n        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux {\n            pointer-events: none;\n            border-radius: 1rem;\n            border: solid 0.125rem rgba(164, 167, 181, 0.1);\n            background-color: ", ";\n            position: relative;\n        }\n\n        &[disabled] + .rainbow-checkbox-toggle_faux::after,\n        &[disabled] ~ .rainbow-checkbox-toggle_faux::after,\n        &[disabled] + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {\n            background-color: ", ";\n            box-sizing: border-box;\n        }\n\n        /* prettier-ignore */\n        &[disabled]:checked + .rainbow-checkbox-toggle_faux-container .rainbow-checkbox-toggle_faux::after {\n            background-color: transparent;\n            box-sizing: border-box;\n        }\n    }\n\n    ", ";\n\n    ", ";\n    \n\n"])), function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.background.disabled;
}, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.labelAlignment === 'left' && "\n            flex-direction: row-reverse;\n        ";
}, function (props) {
  return props.labelAlignment === 'top' && "\n            flex-direction: column-reverse;\n            align-items: start;\n        ";
});
export default StyledLabelContainer;