"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _description = _interopRequireDefault(require("./styled/description"));

function Description(_ref) {
  var description = _ref.description,
      isExpanded = _ref.isExpanded;
  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: description
  }, _react["default"].createElement(_description["default"], {
    isExpanded: isExpanded
  }, description));
}

Description.propTypes = {
  description: _propTypes["default"].node,
  isExpanded: _propTypes["default"].bool.isRequired
};
Description.defaultProps = {
  description: ''
};