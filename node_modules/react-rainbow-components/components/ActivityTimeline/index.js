"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActivityTimeline;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _accordionTimeline = _interopRequireDefault(require("./accordionTimeline"));

var _basicTimeline = _interopRequireDefault(require("./basicTimeline"));

var _excluded = ["variant"];

function ActivityTimeline(props) {
  var variant = props.variant,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  if (variant === 'accordion') {
    return _react["default"].createElement(_accordionTimeline["default"], rest);
  }

  return _react["default"].createElement(_basicTimeline["default"], rest);
}

ActivityTimeline.propTypes = {
  id: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  multiple: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['default', 'accordion']),
  activeSectionNames: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string]),
  onToggleSection: _propTypes["default"].func
};
ActivityTimeline.defaultProps = {
  id: undefined,
  children: null,
  className: undefined,
  style: undefined,
  variant: 'default',
  multiple: false,
  onToggleSection: undefined,
  activeSectionNames: undefined
};