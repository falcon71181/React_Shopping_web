"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _excluded = ["renderIf", "disabled", "rowData"];

var DynamicMenuItem = function DynamicMenuItem(props) {
  var renderIf = props.renderIf,
      disabled = props.disabled,
      row = props.rowData,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var shouldRender = typeof renderIf === 'function' ? renderIf({
    row: row
  }) : true;
  var isDisabled = typeof disabled === 'function' ? disabled({
    row: row
  }) : false;

  if (shouldRender) {
    return _react["default"].createElement(_MenuItem["default"], (0, _extends2["default"])({}, rest, {
      disabled: isDisabled
    }));
  }

  return null;
};

DynamicMenuItem.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  variant: _propTypes["default"].oneOf(['default', 'header']),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  onClick: _propTypes["default"].func,
  title: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  rowData: _propTypes["default"].object,
  renderIf: _propTypes["default"].func,
  disabled: _propTypes["default"].func
};
DynamicMenuItem.defaultProps = {
  label: null,
  variant: 'default',
  icon: null,
  iconPosition: 'left',
  onClick: function onClick() {},
  title: undefined,
  className: undefined,
  style: undefined,
  rowData: undefined,
  renderIf: function renderIf() {
    return true;
  },
  disabled: function disabled() {
    return false;
  }
};
var _default = DynamicMenuItem;
exports["default"] = _default;