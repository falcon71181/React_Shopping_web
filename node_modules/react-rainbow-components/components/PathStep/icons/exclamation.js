"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Exclamation = function Exclamation(props) {
  var className = props.className,
      style = props.style;

  var _useTheme = (0, _hooks.useTheme)(),
      palette = _useTheme.rainbow.palette;

  var color = (0, _react.useMemo)(function () {
    return {
      background: palette.error.main,
      foreground: palette.getContrastText(palette.error.main)
    };
  }, [palette]);
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    width: "1rem",
    height: "1rem",
    viewBox: "0 0 20 20"
  }, _react["default"].createElement("g", {
    id: "components"
  }, _react["default"].createElement("circle", {
    fill: color.background,
    cx: "10",
    cy: "10",
    r: "10"
  }), _react["default"].createElement("path", {
    transform: "translate(8.5, -2)",
    fill: color.foreground,
    d: "m1.57577 5.85161c-.552285 0-1 .453036-1 .99703v6.00594c0 .550645.443865.99703 1 .99703 .552285 0 1-.453036 1-.99703v-6.00594c0-.550644-.443865-.99703-1-.99703v0Zm0 12c.552285 0 1-.447715 1-1 0-.552285-.447715-1-1-1 -.552285 0-1 .447715-1 1 0 .552285.447715 1 1 1v0Z"
  })));
};

Exclamation.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Exclamation.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = Exclamation;
exports["default"] = _default;