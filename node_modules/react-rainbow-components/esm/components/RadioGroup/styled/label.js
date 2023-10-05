import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Label from '../../Input/label';
var labelAlignmentMap = {
  left: 'left',
  center: 'center',
  right: 'right'
};
var StyledLabel = styled(Label)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding-left: 0;\n    padding-right: 0;\n    text-align: ", ";\n"])), function (props) {
  return Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment) ? props.labelAlignment : 'left';
});
export default StyledLabel;