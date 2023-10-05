import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { COLOR_GRAY_3, COLOR_GRAY_TRANSPARENT_3 } from '../../../../styles/colors';
import { darken, lighten } from '../../../../styles/helpers/color';
import ButtonIcon from '../../../ButtonIcon';
var COLOR = darken(COLOR_GRAY_3, 0.2);
var TogglePasswordButton = styled(ButtonIcon)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0.4rem;\n    font-size: 1em;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 100px;\n    border: none;\n    width: 1.5rem;\n    height: 1.5rem;\n    ", ";\n    ", ";\n\n    &:hover,\n    &:focus {\n        color: ", ";\n        background-color: ", ";\n    }\n"])), COLOR, COLOR_GRAY_TRANSPARENT_3, function (props) {
  return props.size === 'large' && "\n            top: 0.2rem;\n            width: 2rem;\n            height: 2rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            width: 1.1rem;\n            height: 1.1rem;\n        ";
}, COLOR, lighten(COLOR_GRAY_TRANSPARENT_3, 0.4));
export default TogglePasswordButton;