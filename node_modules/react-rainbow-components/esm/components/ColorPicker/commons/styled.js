import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import styled, { css } from 'styled-components';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
export var CssInput = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    line-height: 1.5rem;\n    height: 1.5rem;\n    font-size: ", ";\n    text-align: center;\n"])), FONT_SIZE_TEXT_SMALL);
export var CssCircleColor = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: 50%;\n    border: 1px solid ", ";\n"])), function (props) {
  return props.palette.border.divider;
});
export var StyledPreview = attachThemeAttrs(styled.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 40px;\n    height: 40px;\n    margin: 10px 0;\n    ", "\n"])), CssCircleColor);