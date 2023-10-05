"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isValidMaxRowSelection;

function isValidMaxRowSelection(maxRowSelection, rowsLength) {
  var maxRowSelectionNumber = Number(maxRowSelection);
  return maxRowSelectionNumber <= rowsLength && !isNaN(maxRowSelectionNumber) && maxRowSelection !== null && !Array.isArray(maxRowSelection);
}