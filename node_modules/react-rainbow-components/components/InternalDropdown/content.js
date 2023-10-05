"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Content;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _styled = require("./styled");

function Content(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading;

  if (isLoading) {
    return _react["default"].createElement(_styled.SpinnerContainer, null, _react["default"].createElement(_Spinner["default"], {
      assistiveText: "loading menu",
      isVisible: true,
      size: "small"
    }));
  }

  return children;
}

Content.propTypes = {
  children: _propTypes["default"].node,
  isLoading: _propTypes["default"].bool
};
Content.defaultProps = {
  children: undefined,
  isLoading: false
};