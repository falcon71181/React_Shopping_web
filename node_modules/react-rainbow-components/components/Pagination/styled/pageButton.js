"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _margins = require("../../../styles/margins");

var _getPageBorderRadius = _interopRequireDefault(require("./getPageBorderRadius"));

var _templateObject;

var StyledPageButton = _styledComponents["default"].li(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n\n    > button {\n        border-radius: 0;\n        margin-left: -1px;\n    }\n\n    :nth-child(2) > button {\n        margin-left: ", ";\n        border-radius: 100px 0 0 100px;\n    }\n\n    :nth-last-child(2) > button {\n        margin-right: ", ";\n        border-radius: ", ";\n    }\n\n    ", "\n\n    ", "\n"])), _margins.MARGIN_X_SMALL, _margins.MARGIN_X_SMALL, function (props) {
  return (0, _getPageBorderRadius["default"])(props.pages);
}, function (props) {
  return props.pages === 1 && "\n            :nth-child(1) > button {\n                border-radius: 100px;\n            } \n        ";
}, function (props) {
  return props.variant === 'shaded' && "\n        > button {\n            box-shadow: none;\n        } \n\n        :nth-child(2) > button {\n            margin-left: 0;\n            border-radius: 0;\n        }\n\n        :nth-last-child(2) > button {\n            margin-right: 0;\n            border-radius: 0;\n        }\n        :nth-child(1) > button {\n            border-radius: 100px 0 0 100px;\n        }\n\n        :nth-last-child(1) > button {\n            border-radius: ".concat((0, _getPageBorderRadius["default"])(props.pages), ";   \n        ");
});

var _default = StyledPageButton;
exports["default"] = _default;