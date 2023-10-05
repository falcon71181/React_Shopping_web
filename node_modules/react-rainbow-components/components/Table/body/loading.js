"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _loadingCells = _interopRequireDefault(require("./loadingCells"));

var _row = _interopRequireDefault(require("./styled/row"));

function Loading(_ref) {
  var columns = _ref.columns;
  var columnsLength = columns.length;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_row["default"], null, _react["default"].createElement(_loadingCells["default"], {
    columns: columns,
    value: columnsLength
  })), _react["default"].createElement(_row["default"], null, _react["default"].createElement(_loadingCells["default"], {
    columns: columns,
    value: columnsLength
  })), _react["default"].createElement(_row["default"], null, _react["default"].createElement(_loadingCells["default"], {
    columns: columns,
    value: columnsLength - 1
  })), _react["default"].createElement(_row["default"], null, _react["default"].createElement(_loadingCells["default"], {
    columns: columns,
    value: columnsLength - 3
  })));
}

Loading.propTypes = {
  columns: _propTypes["default"].array
};
Loading.defaultProps = {
  columns: []
};