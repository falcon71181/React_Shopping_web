"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Options;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Options(_ref) {
  var pages = _ref.pages;
  var options = [];
  var count = 1;

  while (count <= pages) {
    options.push(_react["default"].createElement("option", {
      key: count
    }, count));
    count += 1;
  }

  return options;
}

Options.propTypes = {
  pages: _propTypes["default"].number.isRequired
};