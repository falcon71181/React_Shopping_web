import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledInputHidden = attachThemeAttrs(styled(HiddenElement))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    box-sizing: border-box;\n    visibility: hidden;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0 !important;\n    }\n\n    :checked + label,\n    :active + label,\n    :focus + label {\n        font-weight: 300;\n        color: ", ";\n        outline: none;\n        user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-drag: none;\n    }\n"])), function (props) {
  return props.palette.getContrastText(props.palette.brand.main);
});
export default StyledInputHidden;