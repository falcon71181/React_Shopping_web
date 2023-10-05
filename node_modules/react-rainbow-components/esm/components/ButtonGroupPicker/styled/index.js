import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import styled from 'styled-components';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
import StyledButtonGroup from './buttonGroup';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
var StyledErrorText = styled(ErrorText)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: center;\n"])));
var StyledHelpText = styled(HelpText)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-align: center;\n"])));
var StyledContainer = styled.fieldset(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin: 0;\n    padding: 0;\n    border: 0;\n    position: relative;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, " !important;\n            label:first-child > span {\n                border-radius: ").concat(BORDER_RADIUS_SQUARE, " 0 0 ").concat(BORDER_RADIUS_SQUARE, " !important;\n            };\n            label:last-child > span {\n                border-radius: 0 ").concat(BORDER_RADIUS_SQUARE, " ").concat(BORDER_RADIUS_SQUARE, " 0 !important;\n            };\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, " !important;\n            label:first-child > span {\n                border-radius: ").concat(BORDER_RADIUS_SEMI_SQUARE, " 0 0 ").concat(BORDER_RADIUS_SEMI_SQUARE, " !important;\n            };\n            label:last-child > span {\n                border-radius: 0 ").concat(BORDER_RADIUS_SEMI_SQUARE, " ").concat(BORDER_RADIUS_SEMI_SQUARE, " 0 !important;\n            };\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, " !important;\n            label:first-child > span {\n                border-radius: ").concat(BORDER_RADIUS_SEMI_ROUNDED, " 0 0 ").concat(BORDER_RADIUS_SEMI_ROUNDED, " ;\n            };\n            label:last-child > span {\n                border-radius: 0 ").concat(BORDER_RADIUS_SEMI_ROUNDED, " ").concat(BORDER_RADIUS_SEMI_ROUNDED, " 0 ;\n            };\n\n        ");
});
export { StyledErrorText, StyledHelpText, StyledContainer, StyledButtonGroup };