"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCountryCodeItem = exports.StyledCheckmarkIcon = void 0;
Object.defineProperty(exports, "StyledDropdown", {
  enumerable: true,
  get: function get() {
    return _dropdown["default"];
  }
});
Object.defineProperty(exports, "StyledItem", {
  enumerable: true,
  get: function get() {
    return _item["default"];
  }
});
exports.StyledScrollable = exports.StyledScrollControls = void 0;
Object.defineProperty(exports, "StyledSearch", {
  enumerable: true,
  get: function get() {
    return _search["default"];
  }
});
exports.StyledUl = exports.StyledSearchContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _checkmark = _interopRequireDefault(require("../../../Option/checkmark"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _item = _interopRequireDefault(require("./item"));

var _search = _interopRequireDefault(require("./search"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var StyledScrollable = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0;\n    padding: 0;\n    max-height: 225px;\n    box-sizing: border-box;\n    overflow-y: auto;\n"])));

exports.StyledScrollable = StyledScrollable;

var StyledUl = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    height: ", "px;\n"])), function (props) {
  return props.listHeight;
});

exports.StyledUl = StyledUl;
var StyledSearchContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    border-bottom: 1px solid ", ";\n    padding: 0 1rem;\n    margin-top: 5px;\n    box-sizing: border-box;\n"])), function (props) {
  return props.palette.border.divider;
});
exports.StyledSearchContainer = StyledSearchContainer;
var StyledCountryCodeItem = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 0 0 auto;\n"])));
exports.StyledCountryCodeItem = StyledCountryCodeItem;

var StyledScrollControls = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    padding-top: 1rem;\n"])));

exports.StyledScrollControls = StyledScrollControls;
var StyledCheckmarkIcon = (0, _styledComponents["default"])(_checkmark["default"])(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 1;\n    margin-left: 0.75rem;\n    flex-shrink: 0;\n"])));
exports.StyledCheckmarkIcon = StyledCheckmarkIcon;