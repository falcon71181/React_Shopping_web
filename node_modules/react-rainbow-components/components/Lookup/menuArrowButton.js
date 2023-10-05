"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuArrowButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowButton = _interopRequireDefault(require("./styled/arrowButton"));

function MenuArrowButton(props) {
  var arrow = props.arrow,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave;
  return _react["default"].createElement(_arrowButton["default"], {
    "data-id": "lookup-arrow-button-".concat(arrow),
    arrow: arrow,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  });
}

MenuArrowButton.propTypes = {
  arrow: _propTypes["default"].oneOf(['up', 'down']).isRequired,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func
};
MenuArrowButton.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};