"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _assignFieldTitle = _interopRequireDefault(require("./styled/assignFieldTitle"));

var AssignFieldModalTitle = function AssignFieldModalTitle(_ref) {
  var field = _ref.field;
  return _react["default"].createElement(_assignFieldTitle["default"], null, "Assign to the field: ", _react["default"].createElement("b", null, field));
};

AssignFieldModalTitle.propTypes = {
  field: _propTypes["default"].string
};
AssignFieldModalTitle.defaultProps = {
  field: ''
};
var _default = AssignFieldModalTitle;
exports["default"] = _default;