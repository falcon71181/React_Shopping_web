"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getExpectedFlexibleColumnWidth;

function getExpectedFlexibleColumnWidth(widthsMeta, totalTableWidth) {
  var totalFixedWidth = widthsMeta.totalFixedWidth,
      totalResizedWidth = widthsMeta.totalResizedWidth,
      totalFlexibleColumns = widthsMeta.totalFlexibleColumns,
      minColumnWidth = widthsMeta.minColumnWidth,
      maxColumnWidth = widthsMeta.maxColumnWidth;
  var totalFlexibleWidth = totalTableWidth - totalFixedWidth - totalResizedWidth;
  var avgFlexibleColumnWidth = Math.floor(totalFlexibleWidth / totalFlexibleColumns);
  var allowedSpace = Math.max(avgFlexibleColumnWidth, minColumnWidth);
  return Math.min(maxColumnWidth, allowedSpace);
}