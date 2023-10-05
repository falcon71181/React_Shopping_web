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

var Checkmark = function Checkmark(props) {
  var className = props.className,
      style = props.style;

  var _useTheme = (0, _hooks.useTheme)(),
      palette = _useTheme.rainbow.palette;

  var color = (0, _react.useMemo)(function () {
    return {
      background: palette.brand.main,
      foreground: palette.getContrastText(palette.brand.main)
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
  }), _react["default"].createElement("polyline", {
    transform: "scale(0.6) translate(4, 5.2)",
    stroke: color.foreground,
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    points: "20 6 9 17 4 12"
  })));
};

Checkmark.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Checkmark.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = Checkmark;
exports["default"] = _default;