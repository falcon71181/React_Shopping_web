"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BasicTimeline;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ul = _interopRequireDefault(require("./styled/ul"));

function BasicTimeline(props) {
  var id = props.id,
      children = props.children,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_ul["default"], {
    id: id,
    className: className,
    style: style
  }, children);
}

BasicTimeline.propTypes = {
  id: _propTypes["default"].string,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
BasicTimeline.defaultProps = {
  id: undefined,
  children: null,
  className: undefined,
  style: undefined
};