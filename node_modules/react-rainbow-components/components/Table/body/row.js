"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Row;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rows = require("../helpers/rows");

var _cell = _interopRequireDefault(require("./cell"));

var _loadingCells = _interopRequireDefault(require("./loadingCells"));

var _row = _interopRequireDefault(require("./styled/row"));

var _excluded = ["rowData", "columns", "isSelected"],
    _excluded2 = ["header", "component", "field", "sortable", "width", "defaultWidth", "computedWidth", "isResized", "type", "isFirstDataColumn", "children", "isEditable", "onChange", "cellAlignment"];

function Row(props) {
  var rowData = props.rowData,
      columns = props.columns,
      isSelected = props.isSelected,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var cells = columns.map(function (column, index) {
    var header = column.header,
        component = column.component,
        field = column.field,
        sortable = column.sortable,
        width = column.width,
        defaultWidth = column.defaultWidth,
        computedWidth = column.computedWidth,
        isResized = column.isResized,
        columnType = column.type,
        isFirstDataColumn = column.isFirstDataColumn,
        children = column.children,
        isEditable = column.isEditable,
        onChange = column.onChange,
        cellAlignment = column.cellAlignment,
        restColumnProps = (0, _objectWithoutProperties2["default"])(column, _excluded2);
    var key = "cell-".concat(index);
    var value = (0, _rows.getFieldValue)(rowData, field);
    return _react["default"].createElement(_cell["default"], (0, _extends2["default"])({}, rest, {
      restColumnProps: restColumnProps,
      key: key,
      rowData: rowData,
      header: header,
      component: component,
      value: value,
      columnType: columnType,
      isFirst: isFirstDataColumn,
      isSelected: isSelected,
      columnChildren: children,
      isEditable: isEditable,
      onChange: onChange,
      cellAlignment: cellAlignment,
      field: field
    }));
  });

  if (rowData.type === 'LOADING') {
    return _react["default"].createElement(_row["default"], null, _react["default"].createElement(_loadingCells["default"], {
      columns: columns,
      value: columns.length
    }));
  }

  return _react["default"].createElement(_row["default"], {
    "data-id": "table_body-row",
    tabIndex: -1,
    "aria-selected": isSelected,
    isSelected: isSelected
  }, cells);
}

Row.propTypes = {
  rowData: _propTypes["default"].object,
  columns: _propTypes["default"].array,
  isSelected: _propTypes["default"].bool
};
Row.defaultProps = {
  rowData: {},
  columns: [],
  isSelected: false
};