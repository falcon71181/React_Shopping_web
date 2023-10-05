"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getColumnWidthFromDef;

function getColumnWidthFromDef(column) {
  var isResized = column.isResized,
      computedWidth = column.computedWidth,
      width = column.width,
      defaultWidth = column.defaultWidth;
  var resizedWidth;

  if (isResized) {
    resizedWidth = computedWidth;
  }

  return width || resizedWidth || defaultWidth;
}