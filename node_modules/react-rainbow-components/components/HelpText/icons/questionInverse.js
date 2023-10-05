"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

function QuestionInverseIcon(_ref) {
  var className = _ref.className,
      style = _ref.style;
  var color = (0, _hooks.useTheme)().rainbow.palette.text.header;
  return _react["default"].createElement("svg", {
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    className: className,
    style: style
  }, _react["default"].createElement("path", {
    fill: color,
    d: "M10.5.5c5.515 0 10 4.485 10 10s-4.485 10-10 10-10-4.485-10-10 4.485-10 10-10zm0 .952c-4.989 0-9.048 4.06-9.048 9.048 0 4.989 4.06 9.048 9.048 9.048 4.989 0 9.048-4.06 9.048-9.048 0-4.989-4.06-9.048-9.048-9.048zm0 13.112c.468 0 .847.37.847.825 0 .456-.38.825-.847.825a.836.836 0 01-.847-.825c0-.456.38-.825.847-.825zm0-10.73c2.1 0 3.81 1.666 3.81 3.714 0 1.115-.993 2.754-2.47 3.418a.828.828 0 00-.493.75v.371a.837.837 0 01-.847.826.837.837 0 01-.847-.826v-.37c0-.964.581-1.847 1.478-2.25.862-.387 1.485-1.415 1.485-1.92 0-1.137-.949-2.063-2.116-2.063-1.167 0-2.116.926-2.116 2.064a.836.836 0 01-.847.825.836.836 0 01-.847-.825c0-2.048 1.71-3.715 3.81-3.715z"
  }));
}

QuestionInverseIcon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
QuestionInverseIcon.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = QuestionInverseIcon;
exports["default"] = _default;