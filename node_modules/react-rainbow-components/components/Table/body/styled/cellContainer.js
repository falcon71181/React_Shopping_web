"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledCellContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    text-align: left;\n    box-sizing: border-box;\n\n    ", "\n\n    ", "\n\n    :focus {\n        outline: none;\n    }\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: none;\n        border-top: 1px solid ").concat(props.palette.border.divider, ";\n\n        :first-child {\n            border-left: 1px solid ").concat(props.palette.border.divider, ";\n            border-left-style: solid;\n            border-top-left-radius: 12px;\n            border-bottom-left-radius: 12px;\n        }\n\n        :first-child > div {\n            border-top-left-radius: 12px;\n            border-bottom-left-radius: 12px;\n            overflow: hidden;\n        }\n\n        :last-child {\n            border-right: 1px solid ").concat(props.palette.border.divider, ";\n            border-right-style: solid;\n            border-bottom-right-radius: 12px;\n            border-top-right-radius: 12px;\n        }\n        \n        :last-child > div {\n            border-bottom-right-radius: 12px;\n            border-top-right-radius: 12px;\n            overflow: hidden;\n            padding: 2px 0;\n        }\n    ");
}, function (props) {
  return props.variant === 'listview' && !props.hideBorderRight && "\n        border-right: 1px solid ".concat(props.palette.border.divider, ";\n    ");
});
var _default = StyledCellContainer;
exports["default"] = _default;