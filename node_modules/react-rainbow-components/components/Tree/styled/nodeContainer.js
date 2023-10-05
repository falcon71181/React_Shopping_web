"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var PADDING_LEFT = 16;

function getMarginLeft(props) {
  var marginLeft = props.ariaLevelValue === 1 ? 0 : PADDING_LEFT;
  return "-".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + marginLeft, "px");
}

function getPaddingLeft(props) {
  if (props.hasChildren) {
    return "".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + PADDING_LEFT, "px}");
  }

  return "".concat((props.ariaLevelValue - 1) * 20 + props.ariaLevelValue - 1 + 28 + PADDING_LEFT, "px}");
}

var NodeContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-left: ", ";\n    padding-left: ", ";\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n    }\n\n    ", ";\n"])), getMarginLeft, getPaddingLeft, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.isSelected && "\n        background-color: ".concat(props.palette.brand.light, ";\n\n        &:hover {\n            background-color: ").concat(props.palette.brand.light, ";\n        }\n    ");
});
var _default = NodeContainer;
exports["default"] = _default;