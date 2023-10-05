import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Input from '../../../Input';
import { CssInput } from '../styled';
var StyledNumberInput = styled(Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-left: 5px;\n\n    input {\n        ", "\n        padding: 0 0.7rem;\n\n        :focus,\n        :active {\n            padding: 0 0.65625rem;\n        }\n    }\n\n    input::-webkit-inner-spin-button {\n        appearance: none;\n        margin: 0;\n    }\n\n    input::-webkit-outer-spin-button {\n        appearance: none;\n        margin: 0;\n    }\n\n    input[type='number'] {\n        -moz-appearance: textfield;\n    }\n"])), CssInput);
export default StyledNumberInput;