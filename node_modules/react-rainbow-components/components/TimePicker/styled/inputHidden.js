"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledInputHidden = (0, _attachThemeAttrs["default"])((0, _styledComponents["default"])(_hiddenElement["default"]))(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    box-sizing: border-box;\n    visibility: hidden;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0 !important;\n    }\n\n    :checked + label,\n    :active + label,\n    :focus + label {\n        font-weight: 300;\n        color: ", ";\n        outline: none;\n        user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-drag: none;\n    }\n"])), function (props) {
  return props.palette.getContrastText(props.palette.brand.main);
});
var _default = StyledInputHidden;
exports["default"] = _default;