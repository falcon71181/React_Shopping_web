"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelAlignmentMap = exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _margins = require("../../../styles/margins");

var _paddings = require("../../../styles/paddings");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _colors = require("../../../styles/colors");

var _color = require("../../../styles/helpers/color");

var _templateObject;

var labelAlignmentMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
exports.labelAlignmentMap = labelAlignmentMap;
var Label = (0, _attachThemeAttrs["default"])(_styledComponents["default"].label).attrs(function (props) {
  if (props.palette.isDark) {
    return {
      inverse: {
        text: (0, _color.lighten)(_colors.COLOR_DARK_1, 0.3)
      }
    };
  }

  return {
    inverse: {
      text: (0, _color.darken)(_colors.COLOR_WHITE, 0.3)
    }
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    margin-bottom: 0.125rem;\n    align-self: ", ";\n    box-sizing: border-box;\n\n    :empty {\n        margin: 0;\n    }\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", "\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center;
}, function (props) {
  return props.labelAlignment === 'left' && "\n            margin-left: ".concat(_margins.MARGIN_MEDIUM, ";\n        ");
}, function (props) {
  return props.labelAlignment === 'right' && "\n            margin-right: ".concat(_margins.MARGIN_MEDIUM, ";\n        ");
}, function (props) {
  return props.as === 'legend' && "\n            text-align: ".concat(Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment) ? props.labelAlignment : 'center', ";\n            margin-left: 0;\n            margin-right: 0;\n            padding: 0 ").concat(_paddings.PADDING_MEDIUM, ";\n        ");
}, function (props) {
  return props.readOnly && "\n            align-self: flex-start;\n            margin-left: 0;\n        ";
}, function (props) {
  return props.variant === 'inverse' && "\n        color: ".concat(props.inverse.text, ";\n    ");
}, function (props) {
  return props.size === 'large' && "\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_LARGE, ";\n        ");
});
var _default = Label;
exports["default"] = _default;