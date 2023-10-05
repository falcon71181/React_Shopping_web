import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';
export var StyledSection = styled.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr;\n    grid-column-gap: 2rem;\n    grid-row-gap: 0;\n    width: 100%;\n\n    @media (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n"])));
export var StyledControlsContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-grow: 1;\n    align-content: start;\n    justify-content: space-between;\n    padding: 0 0 8px 0;\n\n    @media (max-width: 768px) {\n        &:nth-child(1) {\n            order: 1;\n        }\n\n        &:nth-child(2) {\n            order: 3;\n            margin-top: 2rem;\n        }\n    }\n"])));
export var StyledCalendar = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    @media (max-width: 768px) {\n        &:nth-child(3) {\n            order: 2;\n        }\n\n        &:nth-child(4) {\n            order: 4;\n        }\n    }\n"])));
export var StyledHeaderContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n"])));
export var StyledMonthsContainer = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: stretch;\n    align-items: center;\n    flex-grow: 1;\n"])));
export var StyledMonth = attachThemeAttrs(styled.h3)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    text-transform: capitalize;\n    font-weight: 500;\n    margin: 0 1rem 0 0;\n    padding: 0;\n    box-sizing: border-box;\n"])), FONT_SIZE_HEADING_MEDIUM, function (props) {
  return props.palette.text.main;
});