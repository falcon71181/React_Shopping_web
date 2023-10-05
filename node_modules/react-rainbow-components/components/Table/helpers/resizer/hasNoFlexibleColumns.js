"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hasNoFlexibleColumns;

function hasNoFlexibleColumns(widthsMeta) {
  return widthsMeta.totalFlexibleColumns === 0;
}