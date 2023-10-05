"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PicklistOption;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Option = _interopRequireDefault(require("../Option"));

function PicklistOption(props) {
  return _react["default"].createElement(_Option["default"], props);
}

PicklistOption.propTypes = {
  label: _propTypes["default"].node,
  searchableText: _propTypes["default"].string,
  name: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['default', 'header']),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  disabled: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  value: _propTypes["default"].any,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
PicklistOption.defaultProps = {
  label: undefined,
  searchableText: undefined,
  name: undefined,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  title: undefined,
  className: undefined,
  style: undefined,
  value: undefined
};