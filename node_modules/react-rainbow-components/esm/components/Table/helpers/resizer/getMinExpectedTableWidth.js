export default function getMinExpectedTableWidth(widthsMeta) {
  var totalFixedWidth = widthsMeta.totalFixedWidth,
      totalResizedWidth = widthsMeta.totalResizedWidth,
      totalFlexibleColumns = widthsMeta.totalFlexibleColumns,
      minColumnWidth = widthsMeta.minColumnWidth;
  var minTotalFlexibleWidth = totalFlexibleColumns * minColumnWidth;
  return minTotalFlexibleWidth + totalFixedWidth + totalResizedWidth;
}