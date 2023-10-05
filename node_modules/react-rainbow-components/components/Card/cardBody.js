"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardBoddy;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function CardBoddy(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children;

  if (isLoading) {
    return _react["default"].createElement(_Spinner["default"], {
      isVisible: isLoading,
      size: "small"
    });
  }

  return children;
}

CardBoddy.propTypes = {
  isLoading: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
CardBoddy.defaultProps = {
  isLoading: null,
  children: null
};