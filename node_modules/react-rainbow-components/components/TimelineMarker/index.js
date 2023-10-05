"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimelineMarker;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../ActivityTimeline/context");

var _calendarIcon = _interopRequireDefault(require("./calendarIcon"));

var _accordionMarker = _interopRequireDefault(require("./accordionMarker"));

var _basicMarker = _interopRequireDefault(require("./basicMarker"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TimelineMarker(props) {
  var context = (0, _react.useContext)(_context.ActivityTimelineContext);

  if (context) {
    return _react["default"].createElement(_accordionMarker["default"], props);
  }

  return _react["default"].createElement(_basicMarker["default"], props);
}

TimelineMarker.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  datetime: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  name: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool
};
TimelineMarker.defaultProps = {
  label: null,
  description: null,
  datetime: null,
  icon: _react["default"].createElement(_calendarIcon["default"], null),
  children: null,
  className: undefined,
  style: undefined,
  name: undefined,
  isLoading: false
};