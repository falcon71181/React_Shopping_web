"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _icon = _interopRequireDefault(require("./styled/icon"));

function Icon(_ref) {
  var icon = _ref.icon,
      isVisible = _ref.isVisible,
      position = _ref.position;
  return _react["default"].createElement(_RenderIf["default"], {
    isTrue: isVisible
  }, _react["default"].createElement(_icon["default"], {
    position: position
  }, icon));
}

Icon.propTypes = {
  icon: _propTypes["default"].node,
  isVisible: _propTypes["default"].bool.isRequired,
  position: _propTypes["default"].string.isRequired
};
Icon.defaultProps = {
  icon: null
};