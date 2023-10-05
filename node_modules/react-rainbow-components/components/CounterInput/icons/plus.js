"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PlusIcon = function PlusIcon(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, _react["default"].createElement("path", {
    fill: "currentColor",
    d: "M12.181 5.964H8.036V1.819C8.036 1.247 7.573.783 7 .783s-1.036.464-1.036 1.036v4.145H1.819C1.246 5.964.783 6.428.783 7c0 .572.463 1.036 1.036 1.036h4.145v4.145c0 .572.463 1.036 1.036 1.036s1.036-.464 1.036-1.036V8.036h4.145c.573 0 1.036-.464 1.036-1.036 0-.572-.463-1.036-1.036-1.036z"
  }));
};

PlusIcon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
PlusIcon.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = PlusIcon;
exports["default"] = _default;