import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
var StyledLi = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: ", ";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transform: translateX(-100%);\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), BORDER_RADIUS_1, function (props) {
  return props.shouldShow && props.direction === 'right-to-left' && "\n            transform: translateX(0) !important;\n            position: relative;\n            animation: slide-in-right-to-left;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-in-right-to-left {\n                0% {\n                    transform: translateX(100%);\n                }\n            \n                100% {\n                    transform: translateX(0);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldShow && props.direction === 'left-to-right' && "\n            transform: translateX(0) !important;\n            position: relative;\n            animation: slide-in-left-to-right;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-in-left-to-right {\n                0% {\n                    transform: translateX(-100%);\n                }\n            \n                100% {\n                    transform: translateX(0);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldHide && props.direction === 'right-to-left' && "\n            transform: translateX(-100%) !important;\n            animation: slide-out-right-to-left;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-out-right-to-left {\n                0% {\n                    transform: translateX(0);\n                }\n            \n                100% {\n                    transform: translateX(-100%);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldHide && props.direction === 'left-to-right' && "\n            transform: translateX(100%) !important;\n            animation: slide-out-left-to-right;\n            animation-timing-function: linear;\n            animation-duration: 550ms;\n\n            @keyframes slide-out-left-to-right {\n                0% {\n                    transform: translateX(0);\n                }\n            \n                100% {\n                    transform: translateX(100%);\n                }\n            }\n        ";
}, function (props) {
  return props.shouldBeActive && "\n            transform: translateX(0);\n            position: relative;\n        ";
});
export default StyledLi;