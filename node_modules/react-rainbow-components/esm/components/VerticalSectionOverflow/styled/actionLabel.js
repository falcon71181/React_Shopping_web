import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import TruncatedText from '../../Structural/truncatedText';
var StyledActionLabel = attachThemeAttrs(styled(TruncatedText))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 0.9375rem;\n    color: ", ";\n    max-width: 100%;\n"])), function (props) {
  return props.palette.brand.main;
});
export default StyledActionLabel;