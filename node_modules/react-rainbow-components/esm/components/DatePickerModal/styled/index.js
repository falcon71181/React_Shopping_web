import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

import styled from 'styled-components';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import Modal from '../../Modal';
import Calendar from '../../Calendar';
export var StyledModal = styled(Modal)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: auto !important;\n    height: fit-content !important;\n\n    @media (max-width: 600px) {\n        border-radius: 0 0 0.975rem 0.975rem !important;\n        align-self: flex-start;\n        width: 100% !important;\n        max-width: 100% !important;\n    }\n"])));
export var StyledCalendar = styled(Calendar)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 420px;\n    padding: 0 8px;\n    margin: 20px 0 0 0;\n    ", ";\n\n    @media (max-width: 600px) {\n        width: 100%;\n        padding: 0;\n    }\n"])), function (props) {
  return props.variant === 'double' && "\n            width: 800px;\n        ";
});
export var Header = styled.header(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: stretch;\n    padding: 4px 48px 8px 20px;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.variant === 'single' && "\n        width: 350px;\n        ";
}, function (props) {
  return props.variant === 'double' && "\n        width: 730px;\n        ";
});
export var HeaderTitle = attachThemeAttrs(styled.h1)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    color: ", ";\n    font-size: ", ";\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n"])), function (props) {
  return props.palette.brand.main;
}, FONT_SIZE_HEADING_LARGE);