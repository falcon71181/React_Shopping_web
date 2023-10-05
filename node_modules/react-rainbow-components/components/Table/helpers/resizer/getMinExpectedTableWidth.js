"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMinExpectedTableWidth;

function getMinExpectedTableWidth(widthsMeta) {
  var totalFixedWidth = widthsMeta.totalFixedWidth,
      totalResizedWidth = widthsMeta.totalResizedWidth,
      totalFlexibleColumns = widthsMeta.totalFlexibleColumns,
      minColumnWidth = widthsMeta.minColumnWidth;
  var minTotalFlexibleWidth = totalFlexibleColumns * minColumnWidth;
  return minTotalFlexibleWidth + totalFixedWidth + totalResizedWidth;
}