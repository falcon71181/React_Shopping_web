import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { MARGIN_XX_SMALL, MARGIN_X_SMALL } from '../../../styles/margins';
var StyledVerticalButtonsContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 ", " 0 ", ";\n\n    > :first-child {\n        border-radius: 24px 24px 0 0;\n    }\n\n    > :last-child {\n        border-radius: 0 0 24px 24px;\n        margin-top: -1px;\n    }\n\n    @media (max-width: 600px) {\n        margin-left: 0;\n    }\n"])), MARGIN_XX_SMALL, MARGIN_X_SMALL);
export default StyledVerticalButtonsContainer;