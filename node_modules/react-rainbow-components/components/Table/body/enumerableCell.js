"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EnumerableCell;

var _react = _interopRequireDefault(require("react"));

var _cellContainer = _interopRequireDefault(require("./styled/cellContainer"));

var _cellContent = _interopRequireDefault(require("./styled/cellContent"));

var _enumerable = _interopRequireDefault(require("./styled/enumerable"));

function EnumerableCell() {
  return _react["default"].createElement(_cellContainer["default"], {
    role: "gridcell",
    tabIndex: -1,
    hideBorderRight: true
  }, _react["default"].createElement(_cellContent["default"], null, _react["default"].createElement(_enumerable["default"], null)));
}