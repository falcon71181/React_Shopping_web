"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledInnerContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-radius: ", ";\n    overflow: hidden;\n    line-height: inherit;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: none;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    :hover {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ", "\n"])), _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.as === 'a' && "\n        :active,\n        :focus {\n            color: inherit;\n            text-decoration: none;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n            outline: 0;\n        }\n    ");
});
var _default = StyledInnerContainer;
exports["default"] = _default;