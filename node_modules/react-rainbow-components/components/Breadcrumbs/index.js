"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ol = _interopRequireDefault(require("./styled/ol"));

var _nav = _interopRequireDefault(require("./styled/nav"));

function Breadcrumbs(props) {
  var children = props.children,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_nav["default"], {
    "aria-label": "Breadcrumbs",
    style: style,
    className: className
  }, _react["default"].createElement(_ol["default"], null, children));
}

Breadcrumbs.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object])
};
Breadcrumbs.defaultProps = {
  className: undefined,
  style: undefined,
  children: []
};