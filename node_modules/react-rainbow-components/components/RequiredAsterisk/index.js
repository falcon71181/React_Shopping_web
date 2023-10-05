"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RequiredAsterisk;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _styledAsterisk = _interopRequireDefault(require("./styledAsterisk"));

function RequiredAsterisk(_ref) {
  var required = _ref.required;
  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: required
  }, _react["default"].createElement(_styledAsterisk["default"], {
    title: "required"
  }, "* "));
}

RequiredAsterisk.propTypes = {
  required: _propTypes["default"].bool.isRequired
};