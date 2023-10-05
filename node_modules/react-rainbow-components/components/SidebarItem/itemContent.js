"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var _label = _interopRequireDefault(require("./styled/label"));

function ItemContent(props) {
  var label = props.label,
      icon = props.icon,
      isSelected = props.isSelected;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_icon["default"], null, icon), _react["default"].createElement(_RenderIf["default"], {
    isTrue: label
  }, _react["default"].createElement(_label["default"], {
    isSelected: isSelected
  }, label)));
}

ItemContent.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  isSelected: _propTypes["default"].bool.isRequired
};
ItemContent.defaultProps = {
  label: undefined,
  icon: null
};