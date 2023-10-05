export default function isSelectedRow() {
  var selectedRowsKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rowKeyValue = arguments.length > 1 ? arguments[1] : undefined;
  return !!selectedRowsKeys[rowKeyValue];
}