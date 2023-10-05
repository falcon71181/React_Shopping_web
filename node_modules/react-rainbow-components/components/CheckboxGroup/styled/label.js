"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _label = _interopRequireDefault(require("../../Input/label"));

var _templateObject;

var labelAlignmentMap = {
  left: 'left',
  center: 'center',
  right: 'right'
};
var StyledLabel = (0, _styledComponents["default"])(_label["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n    text-align: ", ";\n"])), function (props) {
  return Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment) ? props.labelAlignment : 'left';
});
var _default = StyledLabel;
exports["default"] = _default;