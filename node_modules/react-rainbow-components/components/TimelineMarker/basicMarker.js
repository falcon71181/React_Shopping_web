"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BasicTimelineMarker;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _calendarIcon = _interopRequireDefault(require("./calendarIcon"));

var _li = _interopRequireDefault(require("./styled/li"));

var _columnLeft = _interopRequireDefault(require("./styled/columnLeft"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

var _contentContainer = _interopRequireDefault(require("./styled/contentContainer"));

var _header = _interopRequireDefault(require("./styled/header"));

var _label = _interopRequireDefault(require("./styled/label"));

var _datetime = _interopRequireDefault(require("./styled/datetime"));

var _description = _interopRequireDefault(require("./styled/description"));

var _body = _interopRequireDefault(require("./styled/body"));

function BasicTimelineMarker(props) {
  var icon = props.icon,
      label = props.label,
      description = props.description,
      datetime = props.datetime,
      children = props.children,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_li["default"], {
    className: className,
    style: style
  }, _react["default"].createElement(_columnLeft["default"], null, _react["default"].createElement(_iconContainer["default"], null, icon)), _react["default"].createElement(_contentContainer["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_header["default"], null, _react["default"].createElement(_label["default"], null, label), _react["default"].createElement(_datetime["default"], null, datetime)), _react["default"].createElement(_description["default"], null, description)), _react["default"].createElement(_body["default"], null, children)));
}

BasicTimelineMarker.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  datetime: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
BasicTimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: _react["default"].createElement(_calendarIcon["default"], null),
  children: null,
  className: undefined,
  style: undefined
};