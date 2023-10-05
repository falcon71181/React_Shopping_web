import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Input from '../../Input/inputBase/styled/input';
var StyledInput = styled(Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), function (props) {
  return props.isLoading && "\n        padding-right: 5rem;\n\n        :focus,\n        :active {\n            padding-right: 5rem;\n        }\n    ";
});
export default StyledInput;