import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["rowData", "columns", "isSelected"],
    _excluded2 = ["header", "component", "field", "sortable", "width", "defaultWidth", "computedWidth", "isResized", "type", "isFirstDataColumn", "children", "isEditable", "onChange", "cellAlignment"];
import React from 'react';
import PropTypes from 'prop-types';
import { getFieldValue } from '../helpers/rows';
import Cell from './cell';
import LoadingCells from './loadingCells';
import StyledRow from './styled/row';
export default function Row(props) {
  var rowData = props.rowData,
      columns = props.columns,
      isSelected = props.isSelected,
      rest = _objectWithoutProperties(props, _excluded);

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
        restColumnProps = _objectWithoutProperties(column, _excluded2);

    var key = "cell-".concat(index);
    var value = getFieldValue(rowData, field);
    return React.createElement(Cell, _extends({}, rest, {
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
    return React.createElement(StyledRow, null, React.createElement(LoadingCells, {
      columns: columns,
      value: columns.length
    }));
  }

  return React.createElement(StyledRow, {
    "data-id": "table_body-row",
    tabIndex: -1,
    "aria-selected": isSelected,
    isSelected: isSelected
  }, cells);
}
Row.propTypes = {
  rowData: PropTypes.object,
  columns: PropTypes.array,
  isSelected: PropTypes.bool
};
Row.defaultProps = {
  rowData: {},
  columns: [],
  isSelected: false
};