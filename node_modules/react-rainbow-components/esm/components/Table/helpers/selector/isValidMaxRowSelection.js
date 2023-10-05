export default function isValidMaxRowSelection(maxRowSelection, rowsLength) {
  var maxRowSelectionNumber = Number(maxRowSelection);
  return maxRowSelectionNumber <= rowsLength && !isNaN(maxRowSelectionNumber) && maxRowSelection !== null && !Array.isArray(maxRowSelection);
}