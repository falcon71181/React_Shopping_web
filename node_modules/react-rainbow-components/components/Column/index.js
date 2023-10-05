"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Column;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Column() {
  return _react["default"].createElement("div", null);
}

Column.propTypes = {
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  headerAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  headerComponent: _propTypes["default"].elementType,
  component: _propTypes["default"].func,
  field: _propTypes["default"].string,
  sortable: _propTypes["default"].bool,
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  defaultWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  type: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf(['text', 'action'])]),
  isEditable: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  onChange: _propTypes["default"].func,
  cellAlignment: _propTypes["default"].oneOf(['left', 'right', 'center'])
};
Column.defaultProps = {
  header: undefined,
  headerAlignment: undefined,
  headerComponent: undefined,
  component: undefined,
  field: undefined,
  sortable: false,
  width: undefined,
  defaultWidth: undefined,
  type: 'text',
  isEditable: false,
  onChange: function onChange() {},
  cellAlignment: undefined
};