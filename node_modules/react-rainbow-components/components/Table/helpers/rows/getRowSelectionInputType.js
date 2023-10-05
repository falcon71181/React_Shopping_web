"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRowSelectionInputType;

function getRowSelectionInputType(maxRowSelection, rowsLength) {
  if (maxRowSelection === 1 && rowsLength !== 1) {
    return 'radio';
  }

  return 'checkbox';
}