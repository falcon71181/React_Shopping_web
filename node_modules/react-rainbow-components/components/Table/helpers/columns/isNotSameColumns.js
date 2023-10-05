"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNotSameColumns;

function isNotSameColumns(prevColumns, currentColumns) {
  if (prevColumns.length !== currentColumns.length) {
    return true;
  }

  return prevColumns.some(function (column, index) {
    var _currentColumns$index = currentColumns[index],
        field = _currentColumns$index.field,
        type = _currentColumns$index.type,
        header = _currentColumns$index.header,
        component = _currentColumns$index.component,
        defaultWidth = _currentColumns$index.defaultWidth,
        width = _currentColumns$index.width,
        sortable = _currentColumns$index.sortable,
        children = _currentColumns$index.children;
    return column.field !== field || column.type !== type || column.header !== header || column.defaultWidth !== defaultWidth || column.component !== component || column.sortable !== sortable || column.width !== width || column.children !== children;
  });
}