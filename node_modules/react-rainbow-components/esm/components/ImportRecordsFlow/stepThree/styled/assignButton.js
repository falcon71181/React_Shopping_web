import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';
var StyledAssignButton = styled.button.attrs(function (props) {
  var brandMainColor = getTheme(props).palette.brand.main;
  return {
    brandMainColor: brandMainColor
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font: inherit;\n    background: transparent;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    text-align: center;\n    text-decoration: underline;\n    vertical-align: middle;\n    white-space: normal;\n    user-select: none;\n    margin: 0;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    box-sizing: border-box;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n"])), function (props) {
  return props.brandMainColor;
});
export default StyledAssignButton;