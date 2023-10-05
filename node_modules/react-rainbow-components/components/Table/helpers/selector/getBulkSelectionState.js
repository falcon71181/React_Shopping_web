"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBulkSelectionState;

var _getCurrentSelectionLength = _interopRequireDefault(require("./getCurrentSelectionLength"));

function getBulkSelectionState() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var maxRowSelection = params.maxRowSelection,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;
  var selected = (0, _getCurrentSelectionLength["default"])(selectedRowsKeys);

  if (selected === 0) {
    return 'none';
  }

  if (selected === maxRowSelection) {
    return 'all';
  }

  return 'some';
}