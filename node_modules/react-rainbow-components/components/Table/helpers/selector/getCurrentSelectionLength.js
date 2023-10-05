"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCurrentSelectionLength;

function getSelectedRowsKeys(selectedRowsKeys) {
  return Object.keys(selectedRowsKeys).filter(function (key) {
    return selectedRowsKeys[key];
  });
}

function getCurrentSelectionLength(selectedRowsKeys) {
  return getSelectedRowsKeys(selectedRowsKeys).length;
}