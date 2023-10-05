import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { MARGIN_LARGE } from '../../../styles/margins';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attachThemeAttrs(styled.article)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    background-color: ", ";\n    color: ", ";\n    border: 0.0625rem solid ", ";\n    border-radius: ", ";\n    background-clip: padding-box;\n    box-shadow: ", ";\n    overflow: hidden;\n\n    &:hover {\n        box-shadow: ", ";\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    }\n\n    .rainbow-carousel-image {\n        box-shadow: none;\n    }\n\n    & > .rainbow-google-map {\n        .rainbow-google-map_map-container {\n            border: none;\n            border-radius: ", " ", " 0 0;\n            box-shadow: none;\n            height: 100%;\n            width: 100%;\n        }\n\n        .rainbow-google-map_coordinates-container {\n            margin-bottom: ", ";\n            padding: 0 1rem;\n            width: 100%;\n        }\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.border.divider;
}, BORDER_RADIUS_1, function (props) {
  return props.shadows.shadow_4;
}, function (props) {
  return props.shadows.shadow_6;
}, BORDER_RADIUS_1, BORDER_RADIUS_1, MARGIN_LARGE, function (props) {
  return props.hasHeader && "\n            > .rainbow-google-map > .rainbow-google-map_map-container {\n                border-radius: 0;\n            }\n        ";
});
export default StyledContainer;