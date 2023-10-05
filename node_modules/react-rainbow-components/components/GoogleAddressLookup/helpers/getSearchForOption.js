"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSearchForOption;

var _react = _interopRequireDefault(require("react"));

var _searchValueIcon = _interopRequireDefault(require("../icons/searchValueIcon"));

var _optionLabel = _interopRequireDefault(require("../styled/optionLabel"));

var _optionTyping = _interopRequireDefault(require("../styled/optionTyping"));

function getSearchForOption(searchValue) {
  return {
    label: _react["default"].createElement(_optionLabel["default"], null, "Search for:", _react["default"].createElement(_optionTyping["default"], null, "\u2018", searchValue, "\u2019")),
    data: searchValue,
    icon: _react["default"].createElement(_searchValueIcon["default"], null)
  };
}