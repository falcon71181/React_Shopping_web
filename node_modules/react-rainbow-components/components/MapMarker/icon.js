"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

var _markerIcon = _interopRequireDefault(require("./markerIcon"));

var _icon = _interopRequireDefault(require("./styled/icon"));

var ICON_DESCRIPTION = 'marker icon';

function Icon(_ref) {
  var icon = _ref.icon;

  if (icon) {
    return _react["default"].createElement(_iconContainer["default"], null, icon);
  }

  return _react["default"].createElement(_icon["default"], {
    title: ICON_DESCRIPTION
  }, _react["default"].createElement(_markerIcon["default"], null), _react["default"].createElement(_AssistiveText["default"], {
    text: ICON_DESCRIPTION
  }));
}

Icon.propTypes = {
  icon: _propTypes["default"].node
};
Icon.defaultProps = {
  icon: null
};