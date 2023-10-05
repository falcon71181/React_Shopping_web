"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Options;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Options(_ref) {
  var options = _ref.options;
  return options.map(function (option, index) {
    var key = "option-".concat(index);
    return _react["default"].createElement("option", {
      value: option.value,
      disabled: option.disabled,
      key: key
    }, option.label);
  });
}

Options.propTypes = {
  options: _propTypes["default"].array.isRequired
};