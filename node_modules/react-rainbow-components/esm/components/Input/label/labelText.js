import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_MEDIUM } from '../../../styles/margins';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { COLOR_WHITE, COLOR_DARK_1 } from '../../../styles/colors';
import { lighten, darken } from '../../../styles/helpers/color';
var labelAlignmentMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
var Label = attachThemeAttrs(styled.label).attrs(function (props) {
  if (props.palette.isDark) {
    return {
      inverse: {
        text: lighten(COLOR_DARK_1, 0.3)
      }
    };
  }

  return {
    inverse: {
      text: darken(COLOR_WHITE, 0.3)
    }
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    margin-bottom: 0.125rem;\n    align-self: ", ";\n    box-sizing: border-box;\n\n    :empty {\n        margin: 0;\n    }\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", "\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, FONT_SIZE_TEXT_MEDIUM, function (props) {
  return labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center;
}, function (props) {
  return props.labelAlignment === 'left' && "\n            margin-left: ".concat(MARGIN_MEDIUM, ";\n        ");
}, function (props) {
  return props.labelAlignment === 'right' && "\n            margin-right: ".concat(MARGIN_MEDIUM, ";\n        ");
}, function (props) {
  return props.as === 'legend' && "\n            text-align: ".concat(Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment) ? props.labelAlignment : 'center', ";\n            margin-left: 0;\n            margin-right: 0;\n            padding: 0 ").concat(PADDING_MEDIUM, ";\n        ");
}, function (props) {
  return props.readOnly && "\n            align-self: flex-start;\n            margin-left: 0;\n        ";
}, function (props) {
  return props.variant === 'inverse' && "\n        color: ".concat(props.inverse.text, ";\n    ");
}, function (props) {
  return props.size === 'large' && "\n            font-size: ".concat(FONT_SIZE_TEXT_LARGE, ";\n        ");
});
export { labelAlignmentMap };
export default Label;