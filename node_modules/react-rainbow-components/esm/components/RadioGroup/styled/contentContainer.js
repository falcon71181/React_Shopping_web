import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled, { css } from 'styled-components';
import { PADDING_MEDIUM } from '../../../styles/paddings';
var StyledContentContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n    justify-content: flex-start;\n    ", "\n"])), function (_ref) {
  var orientation = _ref.orientation;
  return orientation === 'vertical' ? 'column' : 'row';
}, function (_ref2) {
  var orientation = _ref2.orientation;
  return orientation === 'horizontal' && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            & > div {\n                padding-right: ", ";\n            }\n        "])), PADDING_MEDIUM);
});
export default StyledContentContainer;