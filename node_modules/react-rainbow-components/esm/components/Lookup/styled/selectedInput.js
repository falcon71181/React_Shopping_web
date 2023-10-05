import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import Input from '../../Input/styled/input';
var StyledSelectedInput = attachThemeAttrs(styled(Input))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    caret-color: transparent;\n    color: ", ";\n    font-size: ", ";\n    padding-right: 2.35rem;\n    text-overflow: ellipsis;\n    box-shadow: inset 0 0 0 3px ", ",\n                inset 0 0 0 4px ", ";\n\n    :focus,\n    :active {\n        box-shadow: inset 0 0 0 2px ", ",\n                    inset 0 0 0 3px ", ";\n                    ", ";\n        padding-right: 2.35rem;\n        text-overflow: ellipsis;\n    }\n\n    &[disabled] {\n        box-shadow: none;\n\n        &:focus,\n        &:active {\n            padding-right: 1rem;\n        }\n    }\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.shadows.brand;
});
export default StyledSelectedInput;