import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Input from '../../../Input';
import { CssInput } from '../styled';
export var StyledHexInput = styled(Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    input {\n        ", "\n        padding: 0 0.7rem 0 1rem;\n\n        :focus,\n        :active {\n            padding: 0 0.65625rem 0 0.9375rem;\n        }\n    }\n\n    > div > span {\n        left: 0.2rem;\n    }\n"])), CssInput);
export var StyledHexColorIcon = attachThemeAttrs(styled.span)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font: inherit;\n    line-height: 2.5rem;\n    font-size: 1rem;\n"])));