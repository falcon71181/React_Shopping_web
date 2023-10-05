import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledCellContainer = attachThemeAttrs(styled.td)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 0;\n    text-align: left;\n    box-sizing: border-box;\n\n    ", "\n\n    ", "\n\n    :focus {\n        outline: none;\n    }\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: none;\n        border-top: 1px solid ").concat(props.palette.border.divider, ";\n\n        :first-child {\n            border-left: 1px solid ").concat(props.palette.border.divider, ";\n            border-left-style: solid;\n            border-top-left-radius: 12px;\n            border-bottom-left-radius: 12px;\n        }\n\n        :first-child > div {\n            border-top-left-radius: 12px;\n            border-bottom-left-radius: 12px;\n            overflow: hidden;\n        }\n\n        :last-child {\n            border-right: 1px solid ").concat(props.palette.border.divider, ";\n            border-right-style: solid;\n            border-bottom-right-radius: 12px;\n            border-top-right-radius: 12px;\n        }\n        \n        :last-child > div {\n            border-bottom-right-radius: 12px;\n            border-top-right-radius: 12px;\n            overflow: hidden;\n            padding: 2px 0;\n        }\n    ");
}, function (props) {
  return props.variant === 'listview' && !props.hideBorderRight && "\n        border-right: 1px solid ".concat(props.palette.border.divider, ";\n    ");
});
export default StyledCellContainer;