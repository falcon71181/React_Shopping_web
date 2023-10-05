"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.ActivityTimelineContext = void 0;

var _react = _interopRequireDefault(require("react"));

var ActivityTimelineContext = _react["default"].createContext();

exports.ActivityTimelineContext = ActivityTimelineContext;
var Provider = ActivityTimelineContext.Provider,
    Consumer = ActivityTimelineContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;