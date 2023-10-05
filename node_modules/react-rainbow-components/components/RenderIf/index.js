"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderIf;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function RenderIf(_ref) {
  var isTrue = _ref.isTrue,
      children = _ref.children;

  if (isTrue) {
    return _react["default"].createElement(_react["default"].Fragment, null, children);
  }

  return null;
}

RenderIf.propTypes = {
  isTrue: _propTypes["default"].any,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object, _propTypes["default"].node])
};
RenderIf.defaultProps = {
  isTrue: false,
  children: []
};