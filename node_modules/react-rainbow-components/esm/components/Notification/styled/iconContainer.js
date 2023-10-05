import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
var StyledIconContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-right: ", ";\n    flex-shrink: 0;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), MARGIN_SMALL, function (props) {
  return props.icon === 'info' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(BORDER_RADIUS_2, ";\n            margin-right: ").concat(MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return props.icon === 'success' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(BORDER_RADIUS_2, ";\n            margin-right: ").concat(MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.success.main, ";\n        ");
}, function (props) {
  return props.icon === 'error' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(BORDER_RADIUS_2, ";\n            margin-right: ").concat(MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.error.main, ";\n        ");
}, function (props) {
  return props.icon === 'warning' && "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 2rem;\n            height: 2rem;\n            border-radius: ".concat(BORDER_RADIUS_2, ";\n            margin-right: ").concat(MARGIN_SMALL, ";\n            background-color: ").concat(props.palette.warning.main, ";\n        ");
});
export default StyledIconContainer;