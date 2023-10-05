import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import getPageBorderRadius from './getPageBorderRadius';
var StyledPageButton = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n\n    > button {\n        border-radius: 0;\n        margin-left: -1px;\n    }\n\n    :nth-child(2) > button {\n        margin-left: ", ";\n        border-radius: 100px 0 0 100px;\n    }\n\n    :nth-last-child(2) > button {\n        margin-right: ", ";\n        border-radius: ", ";\n    }\n\n    ", "\n\n    ", "\n"])), MARGIN_X_SMALL, MARGIN_X_SMALL, function (props) {
  return getPageBorderRadius(props.pages);
}, function (props) {
  return props.pages === 1 && "\n            :nth-child(1) > button {\n                border-radius: 100px;\n            } \n        ";
}, function (props) {
  return props.variant === 'shaded' && "\n        > button {\n            box-shadow: none;\n        } \n\n        :nth-child(2) > button {\n            margin-left: 0;\n            border-radius: 0;\n        }\n\n        :nth-last-child(2) > button {\n            margin-right: 0;\n            border-radius: 0;\n        }\n        :nth-child(1) > button {\n            border-radius: 100px 0 0 100px;\n        }\n\n        :nth-last-child(1) > button {\n            border-radius: ".concat(getPageBorderRadius(props.pages), ";   \n        ");
});
export default StyledPageButton;