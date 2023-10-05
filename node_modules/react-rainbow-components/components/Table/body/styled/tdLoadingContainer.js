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

var StyledTdLoadingContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].td)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    text-align: left;\n    box-sizing: border-box;\n\n    :first-of-type > div {\n        padding: 0 12px 0 16px;\n    }\n\n    :last-of-type > div {\n        padding: 0 12px;\n    }\n\n    ", "\n"])), function (props) {
  return props.theme.variant === 'listview' && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: none;\n        text-align: center;\n        border-top: 1px solid ").concat(props.palette.border.divider, ";\n        border-right: 1px solid ").concat(props.palette.border.divider, ";\n\n        :first-child {\n            border-left: 1px solid ").concat(props.palette.border.divider, ";\n            border-left-style: solid;\n            border-top-left-radius: 13px; \n            border-bottom-left-radius: 13px;\n        }\n        \n        :last-child {\n            border-right-style: solid;\n            border-bottom-right-radius: 13px; \n            border-top-right-radius: 13px; \n        }\n\n        :last-child > div {\n            border-bottom-right-radius: 12px; \n            border-top-right-radius: 12px;\n            overflow: hidden;\n        }\n\n        :first-child > div {\n            border-top-left-radius: 12px; \n            border-bottom-left-radius: 12px;\n            overflow: hidden;\n            padding-left: 0.75rem;\n        }\n    ");
});
var _default = StyledTdLoadingContainer;
exports["default"] = _default;