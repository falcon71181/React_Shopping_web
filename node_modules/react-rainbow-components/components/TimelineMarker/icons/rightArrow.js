"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RightArrow;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function RightArrow(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    width: "6px",
    height: "10px",
    viewBox: "0 0 6 10",
    className: className,
    style: style
  }, _react["default"].createElement("g", {
    id: "components",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    id: "Components-Tree",
    transform: "translate(-173.000000, -660.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-18",
    transform: "translate(127.000000, 350.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-13-Copy",
    transform: "translate(41.000000, 107.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-12-Copy",
    transform: "translate(0.000000, 192.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-6",
    transform: "translate(0.000000, 8.000000)"
  }, _react["default"].createElement("path", {
    d: "M11.8583275,5.45142277 C12.1285441,5.19406045 12.5562312,5.20448084 12.8135935,5.47469735 C13.0475593,5.72034873 13.060217,6.09614112 12.8575671,6.35579695 L12.7903189,6.42996332 L8.46599569,10.5485785 C8.2311372,10.7722648 7.87548362,10.7946334 7.61646611,10.6156844 L7.53400431,10.5485785 L3.20968107,6.42996332 C2.93946456,6.17260101 2.92904417,5.74491387 3.18640648,5.47469735 C3.42037222,5.22904598 3.79510228,5.19810214 4.06431909,5.38786628 L4.14167245,5.45142277 L8,9.12537693 L11.8583275,5.45142277 Z",
    id: "Line-3",
    fill: "currentColor",
    fillRule: "nonzero",
    transform: "translate(8.000000, 8.000000) rotate(-90.000000) translate(-8.000000, -8.000000) "
  }))))))));
}

RightArrow.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
RightArrow.defaultProps = {
  className: undefined,
  style: undefined
};