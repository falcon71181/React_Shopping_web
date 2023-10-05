"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

var _getIconSize = _interopRequireDefault(require("../helpers/getIconSize"));

function ErrorIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      isFocused = _ref.isFocused,
      iconSize = _ref.iconSize;
  var error = (0, _hooks.useTheme)().rainbow.palette.error;
  var background = isFocused ? error.dark : error.main;
  var size = (0, _getIconSize["default"])(iconSize);
  return _react["default"].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    className: className,
    style: style
  }, _react["default"].createElement("path", {
    fill: background,
    d: "M10.979 0c6.063 0 10.978 4.915 10.978 10.979 0 6.063-4.915 10.978-10.978 10.978C4.915 21.957 0 17.042 0 10.98 0 4.915 4.915 0 10.979 0zm.229 14.993c-.367 0-.676.127-.93.38-.252.253-.378.56-.378.92 0 .413.132.734.396.963.264.23.574.344.929.344.349 0 .654-.116.915-.348.262-.233.393-.552.393-.959 0-.36-.13-.668-.388-.92-.26-.253-.57-.38-.937-.38zm.07-10.593c-.413 0-.746.135-1 .406-.252.27-.378.646-.378 1.129 0 .354.026.938.078 1.752l.28 4.176c.051.54.139.944.261 1.208s.34.396.654.396c.307 0 .529-.136.662-.41.134-.273.222-.665.262-1.177l.375-4.298c.04-.394.06-.784.06-1.168 0-.65-.084-1.15-.252-1.495-.168-.346-.503-.519-1.003-.519z"
  }));
}

ErrorIcon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  isFocused: _propTypes["default"].bool,
  iconSize: _propTypes["default"].oneOf(['small', 'medium'])
};
ErrorIcon.defaultProps = {
  className: undefined,
  style: undefined,
  isFocused: false,
  iconSize: 'medium'
};
var _default = ErrorIcon;
exports["default"] = _default;