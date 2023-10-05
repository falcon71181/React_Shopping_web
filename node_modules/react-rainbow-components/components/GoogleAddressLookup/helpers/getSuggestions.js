"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSuggestions;

var _react = _interopRequireDefault(require("react"));

var _getSearchForOption = _interopRequireDefault(require("./getSearchForOption"));

var _getFormattedValue = _interopRequireDefault(require("./getFormattedValue"));

var _locationItemIcon = _interopRequireDefault(require("../icons/locationItemIcon"));

function getSuggestions(results, searchValue) {
  return [(0, _getSearchForOption["default"])(searchValue)].concat(results.map(function (place) {
    return (0, _getFormattedValue["default"])(place, true, _react["default"].createElement(_locationItemIcon["default"], null));
  }));
}