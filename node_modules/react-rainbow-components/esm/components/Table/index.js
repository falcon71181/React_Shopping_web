import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Body from './body';
import Head from './head';
import { getNextSortDirection } from './helpers/sort';
import { getColumns, isNotSameColumns } from './helpers/columns';
import { getUpdatedColumns, getResizedColumns, getTableWidth } from './helpers/resizer';
import { getRows, getIndexes } from './helpers/rows';
import { getUpdatedRowsWhenSelect, getUpdatedRowsWhenDeselect, getUpdatedRowsWhenSelectAll, getUpdatedRowsWhenDeselectAll, getBulkSelectionState, getRowsWithInitalSelectedRows, isValidMaxRowSelection, getSelectedRowKeys, getSelectedRowKeysFromSelectedRows } from './helpers/selector';
import { normalizeData } from './helpers/data';
import ResizeSensor from '../../libs/ResizeSensor';
import debounce from '../../libs/debounce';
import { uniqueId } from '../../libs/utils';
import EmptyIcon from './body/icons/empty';
import StyledContainer from './styled/container';
import StyledScrollableX from './styled/scrollableX';
import StyledScrollableY from './styled/scrollableY';
import StyledTable from './styled/table';
import StyledTableBody from './styled/tableBody';
import StyledThead from './styled/thead';

var Table = function (_Component) {
  _inherits(Table, _Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    var children = props.children,
        showCheckboxColumn = props.showCheckboxColumn,
        keyField = props.keyField,
        data = props.data,
        showRowNumberColumn = props.showRowNumberColumn,
        rowNumberOffset = props.rowNumberOffset,
        maxRowSelection = props.maxRowSelection,
        minColumnWidth = props.minColumnWidth,
        maxColumnWidth = props.maxColumnWidth,
        selectedRows = props.selectedRows,
        variant = props.variant;
    _this.state = {
      columns: getColumns({
        children: children,
        showCheckboxColumn: showCheckboxColumn,
        showRowNumberColumn: showRowNumberColumn,
        rowNumberOffset: rowNumberOffset,
        minColumnWidth: minColumnWidth,
        maxColumnWidth: maxColumnWidth,
        variant: variant
      }),
      tableWidth: undefined,
      rows: getRows({
        keyField: keyField,
        rows: normalizeData(data),
        maxRowSelection: maxRowSelection && Number(maxRowSelection),
        selectedRowsKeys: {}
      }),
      bulkSelection: 'none'
    };
    var rows = _this.state.rows;
    _this.indexes = getIndexes(rows);
    _this.selectedRowsKeys = getSelectedRowKeysFromSelectedRows(selectedRows, _this.indexes);
    _this.tableId = uniqueId('table');
    _this.tableContainerRef = React.createRef();
    _this.resizeTarget = React.createRef();
    _this.handleSort = _this.handleSort.bind(_assertThisInitialized(_this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.updateColumnsAndTableWidth = _this.updateColumnsAndTableWidth.bind(_assertThisInitialized(_this));
    _this.handleSelectRow = _this.handleSelectRow.bind(_assertThisInitialized(_this));
    _this.handleDeselectRow = _this.handleDeselectRow.bind(_assertThisInitialized(_this));
    _this.handleSelectAllRows = _this.handleSelectAllRows.bind(_assertThisInitialized(_this));
    _this.handleDeselectAllRows = _this.handleDeselectAllRows.bind(_assertThisInitialized(_this));
    _this.scrollableY = React.createRef();
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.widthObserver = new ResizeSensor(this.resizeTarget.current, debounce(this.updateColumnsAndTableWidth, 200));
      this.updateRows();
      this.updateColumnsAndTableWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevChildren = prevProps.children,
          prevShowCheckboxColumn = prevProps.showCheckboxColumn,
          prevMaxRowSelection = prevProps.maxRowSelection,
          prevSelectedRows = prevProps.selectedRows,
          prevData = prevProps.data,
          prevMinColumnWidth = prevProps.minColumnWidth,
          prevMaxColumnWidth = prevProps.maxColumnWidth;
      var _this$props = this.props,
          children = _this$props.children,
          showCheckboxColumn = _this$props.showCheckboxColumn,
          showRowNumberColumn = _this$props.showRowNumberColumn,
          rowNumberOffset = _this$props.rowNumberOffset,
          maxRowSelection = _this$props.maxRowSelection,
          selectedRows = _this$props.selectedRows,
          data = _this$props.data,
          keyField = _this$props.keyField,
          minColumnWidth = _this$props.minColumnWidth,
          maxColumnWidth = _this$props.maxColumnWidth,
          onRowSelection = _this$props.onRowSelection,
          variant = _this$props.variant;
      var prevColumns = getColumns({
        children: prevChildren,
        showCheckboxColumn: prevShowCheckboxColumn,
        showRowNumberColumn: showRowNumberColumn,
        rowNumberOffset: rowNumberOffset,
        minColumnWidth: prevMinColumnWidth,
        maxColumnWidth: prevMaxColumnWidth,
        variant: variant
      });
      var currentColumns = getColumns({
        children: children,
        showCheckboxColumn: showCheckboxColumn,
        showRowNumberColumn: showRowNumberColumn,
        rowNumberOffset: rowNumberOffset,
        minColumnWidth: minColumnWidth,
        maxColumnWidth: maxColumnWidth,
        variant: variant
      });
      var isNotSameMaxRowSelection = prevMaxRowSelection !== maxRowSelection;
      var isNotSameData = data !== prevData;

      if (isNotSameMaxRowSelection || isNotSameData) {
        this.updateRows();
      }

      if (isNotSameColumns(prevColumns, currentColumns)) {
        this.updateColumnsAndTableWidth(currentColumns);
      }

      var isNotSameSelectedRows = prevSelectedRows !== selectedRows;

      if (isNotSameSelectedRows) {
        var selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;

        if (selectedRowsKeysLength !== selectedRows.length) {
          this.selectedRowsKeys = getSelectedRowKeysFromSelectedRows(selectedRows, this.indexes);
          var updatedRows = getRows({
            keyField: keyField,
            rows: normalizeData(data),
            maxRowSelection: maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys
          });
          onRowSelection(this.getSelectedRows(updatedRows));
          this.updateRows();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.widthObserver.detach();
    }
  }, {
    key: "getTableWidthFromDom",
    value: function getTableWidthFromDom() {
      var containerElement = this.tableContainerRef.current;

      if (containerElement) {
        return containerElement.offsetWidth;
      }

      return 0;
    }
  }, {
    key: "getSelectedRows",
    value: function getSelectedRows(rows) {
      var data = this.props.data;
      return normalizeData(data).filter(function (item, index) {
        return rows[index].isSelected;
      });
    }
  }, {
    key: "getMaxRowSelection",
    value: function getMaxRowSelection() {
      var _this$props2 = this.props,
          maxRowSelection = _this$props2.maxRowSelection,
          data = _this$props2.data;
      var rowsLength = normalizeData(data).length;
      var maxRowSelectionNumber = Number(maxRowSelection);

      if (!isValidMaxRowSelection(maxRowSelection, rowsLength)) {
        return rowsLength;
      }

      return maxRowSelectionNumber;
    }
  }, {
    key: "scrollTop",
    value: function scrollTop() {
      this.scrollableY.current.scrollTop = 0;
    }
  }, {
    key: "updateRows",
    value: function updateRows() {
      var _this$props3 = this.props,
          keyField = _this$props3.keyField,
          selectedRows = _this$props3.selectedRows,
          onRowSelection = _this$props3.onRowSelection,
          data = _this$props3.data;
      var maxRowSelection = this.getMaxRowSelection();
      var newRows = getRows({
        keyField: keyField,
        rows: normalizeData(data),
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      this.indexes = getIndexes(newRows);
      var selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;
      var currentSelectedRows = this.getSelectedRows(newRows);
      var isNotSameSelectedRowsWithNewData = selectedRowsKeysLength !== currentSelectedRows.length;

      if (isNotSameSelectedRowsWithNewData) {
        onRowSelection(currentSelectedRows);
        this.selectedRowsKeys = getSelectedRowKeys(currentSelectedRows, keyField);
      }

      this.setState({
        rows: getRowsWithInitalSelectedRows({
          rows: newRows,
          selectedRows: selectedRows,
          maxRowSelection: maxRowSelection,
          indexes: this.indexes,
          selectedRowsKeys: this.selectedRowsKeys
        }),
        bulkSelection: getBulkSelectionState({
          maxRowSelection: maxRowSelection,
          selectedRowsKeys: this.selectedRowsKeys
        })
      });
    }
  }, {
    key: "updateColumnsAndTableWidth",
    value: function updateColumnsAndTableWidth(newColumns) {
      var columns = this.state.columns;
      var _this$props4 = this.props,
          minColumnWidth = _this$props4.minColumnWidth,
          maxColumnWidth = _this$props4.maxColumnWidth;
      var domTableWidth = this.getTableWidthFromDom();
      var minColWidth = Number(minColumnWidth) || 50;
      var maxColWidth = Number(maxColumnWidth) || Infinity;
      var updatedColumns = getUpdatedColumns({
        columns: newColumns || columns,
        domTableWidth: domTableWidth,
        minColumnWidth: minColWidth,
        maxColumnWidth: maxColWidth
      });
      this.setState({
        columns: updatedColumns
      });

      if (this.hasFlexibleColumns()) {
        this.setState({
          tableWidth: getTableWidth(updatedColumns)
        });
      }
    }
  }, {
    key: "handleSelectAllRows",
    value: function handleSelectAllRows() {
      var onRowSelection = this.props.onRowSelection;
      var rows = this.state.rows;
      var maxRowSelection = this.getMaxRowSelection();
      this.selectedRowsKeys = {};
      var updatedRows = getUpdatedRowsWhenSelectAll({
        rows: rows,
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      var bulkSelection = getBulkSelectionState({
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      this.setState({
        rows: updatedRows,
        bulkSelection: bulkSelection
      });
      onRowSelection(this.getSelectedRows(updatedRows));
    }
  }, {
    key: "handleDeselectAllRows",
    value: function handleDeselectAllRows() {
      var onRowSelection = this.props.onRowSelection;
      var rows = this.state.rows;
      this.selectedRowsKeys = {};
      var updatedRows = getUpdatedRowsWhenDeselectAll(rows);
      var bulkSelection = getBulkSelectionState({
        maxRowSelection: this.getMaxRowSelection(),
        selectedRowsKeys: this.selectedRowsKeys
      });
      this.setState({
        rows: updatedRows,
        bulkSelection: bulkSelection
      });
      onRowSelection(this.getSelectedRows(updatedRows));
    }
  }, {
    key: "handleSelectRow",
    value: function handleSelectRow(event, isMultiple, rowKeyValue) {
      var onRowSelection = this.props.onRowSelection;
      var indexes = this.indexes;
      var rows = this.state.rows;
      var maxRowSelection = this.getMaxRowSelection();

      if (maxRowSelection > 1) {
        var updatedRows = getUpdatedRowsWhenSelect({
          maxRowSelection: maxRowSelection,
          rows: rows,
          indexes: indexes,
          isMultiple: isMultiple,
          rowKeyValue: rowKeyValue,
          lastSelectedRowKey: this.lastSelectedRowKey,
          selectedRowsKeys: this.selectedRowsKeys
        });
        var bulkSelection = getBulkSelectionState({
          maxRowSelection: maxRowSelection,
          selectedRowsKeys: this.selectedRowsKeys
        });
        this.setState({
          rows: updatedRows,
          bulkSelection: bulkSelection
        });
        onRowSelection(this.getSelectedRows(updatedRows));
      } else {
        this.selectedRowsKeys = {};
        this.selectedRowsKeys[rowKeyValue] = true;

        var _updatedRows = getUpdatedRowsWhenSelect({
          maxRowSelection: maxRowSelection,
          rows: rows,
          rowKeyValue: rowKeyValue,
          selectedRowsKeys: this.selectedRowsKeys
        });

        this.setState({
          rows: _updatedRows
        });
        onRowSelection(this.getSelectedRows(_updatedRows));
      }

      this.lastSelectedRowKey = rowKeyValue;
    }
  }, {
    key: "handleDeselectRow",
    value: function handleDeselectRow(event, isMultiple, rowKeyValue) {
      var onRowSelection = this.props.onRowSelection;
      var indexes = this.indexes;
      var rows = this.state.rows;
      var maxRowSelection = this.getMaxRowSelection();
      var updatedRows = getUpdatedRowsWhenDeselect({
        maxRowSelection: maxRowSelection,
        rows: rows,
        indexes: indexes,
        isMultiple: isMultiple,
        rowKeyValue: rowKeyValue,
        lastSelectedRowKey: this.lastSelectedRowKey,
        selectedRowsKeys: this.selectedRowsKeys
      });
      var bulkSelection = getBulkSelectionState({
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      this.setState({
        rows: updatedRows,
        bulkSelection: bulkSelection
      });
      this.lastSelectedRowKey = rowKeyValue;
      onRowSelection(this.getSelectedRows(updatedRows));
    }
  }, {
    key: "hasFlexibleColumns",
    value: function hasFlexibleColumns() {
      var columns = this.state.columns;
      return columns.some(function (column) {
        return column.isResized !== true;
      });
    }
  }, {
    key: "handleResize",
    value: function handleResize(widthDelta, colIndex) {
      var _this$state = this.state,
          columns = _this$state.columns,
          tableWidth = _this$state.tableWidth;

      if (widthDelta !== 0) {
        this.setState({
          columns: getResizedColumns({
            columns: columns,
            colIndex: colIndex,
            widthDelta: widthDelta
          }),
          tableWidth: tableWidth + widthDelta
        });
      }
    }
  }, {
    key: "handleSort",
    value: function handleSort(event, field, sortDirection) {
      var _this$props5 = this.props,
          onSort = _this$props5.onSort,
          sortedBy = _this$props5.sortedBy;
      var nextSortDirection = getNextSortDirection(field, sortedBy, sortDirection);
      onSort(event, field, nextSortDirection);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          id = _this$props6.id,
          data = _this$props6.data,
          sortedBy = _this$props6.sortedBy,
          sortDirection = _this$props6.sortDirection,
          defaultSortDirection = _this$props6.defaultSortDirection,
          resizeColumnDisabled = _this$props6.resizeColumnDisabled,
          rowNumberOffset = _this$props6.rowNumberOffset,
          minColumnWidth = _this$props6.minColumnWidth,
          maxColumnWidth = _this$props6.maxColumnWidth,
          style = _this$props6.style,
          className = _this$props6.className,
          isLoading = _this$props6.isLoading,
          emptyIcon = _this$props6.emptyIcon,
          emptyTitle = _this$props6.emptyTitle,
          emptyDescription = _this$props6.emptyDescription,
          keyField = _this$props6.keyField,
          hideTableHeader = _this$props6.hideTableHeader,
          variant = _this$props6.variant;
      var _this$state2 = this.state,
          columns = _this$state2.columns,
          tableWidth = _this$state2.tableWidth,
          rows = _this$state2.rows,
          bulkSelection = _this$state2.bulkSelection;
      var tableStyles = {
        width: tableWidth
      };
      var maxRowSelection = this.getMaxRowSelection();
      var minColWidth = Number(minColumnWidth) || 50;
      var maxColWidth = Number(maxColumnWidth) || 5000;
      var isEmpty = data.length === 0;
      var theme = {
        variant: variant,
        hideTableHeader: hideTableHeader,
        isEmpty: isEmpty
      };

      if (keyField && typeof keyField === 'string') {
        return React.createElement(StyledContainer, {
          id: id,
          className: className,
          style: style
        }, React.createElement("div", {
          ref: this.resizeTarget
        }), React.createElement(ThemeProvider, {
          theme: theme
        }, React.createElement(StyledContainer, null, React.createElement(StyledScrollableX, {
          ref: this.tableContainerRef
        }, React.createElement(StyledScrollableY, {
          isEmpty: isEmpty,
          isLoading: isLoading,
          ref: this.scrollableY,
          style: tableStyles
        }, React.createElement(StyledTable, {
          style: tableStyles
        }, React.createElement(StyledThead, null, React.createElement("tr", null, React.createElement(Head, {
          columns: columns,
          sortedBy: sortedBy,
          sortDirection: sortDirection,
          defaultSortDirection: defaultSortDirection,
          resizeColumnDisabled: resizeColumnDisabled,
          minColumnWidth: minColWidth,
          maxColumnWidth: maxColWidth,
          onSort: this.handleSort,
          onResize: this.handleResize,
          onSelectAllRows: this.handleSelectAllRows,
          onDeselectAllRows: this.handleDeselectAllRows,
          tableId: this.tableId,
          maxRowSelection: maxRowSelection,
          bulkSelection: bulkSelection
        }))), React.createElement(StyledTableBody, {
          rowNumberOffset: rowNumberOffset
        }, React.createElement(Body, {
          data: normalizeData(data),
          columns: columns,
          rows: rows,
          tableId: this.tableId,
          isLoading: isLoading,
          emptyIcon: emptyIcon,
          emptyTitle: emptyTitle,
          emptyDescription: emptyDescription,
          onSelectRow: this.handleSelectRow,
          onDeselectRow: this.handleDeselectRow
        }))))))));
      }

      console.error('The "keyField" is a required prop of the Table component.');
      return null;
    }
  }]);

  return Table;
}(Component);

export { Table as default };
Table.propTypes = {
  data: PropTypes.arrayOf(Object),
  sortedBy: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc']),
  defaultSortDirection: PropTypes.oneOf(['asc', 'desc']),
  onSort: PropTypes.func,
  resizeColumnDisabled: PropTypes.bool,
  minColumnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxColumnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showCheckboxColumn: PropTypes.bool,
  showRowNumberColumn: PropTypes.bool,
  rowNumberOffset: PropTypes.number,
  onRowSelection: PropTypes.func,
  maxRowSelection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedRows: PropTypes.array,
  keyField: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  emptyIcon: PropTypes.node,
  emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'listview']),
  id: PropTypes.string,
  hideTableHeader: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
Table.defaultProps = {
  data: [],
  sortedBy: undefined,
  sortDirection: undefined,
  defaultSortDirection: 'asc',
  onSort: function onSort() {},
  resizeColumnDisabled: false,
  minColumnWidth: 50,
  maxColumnWidth: Infinity,
  showCheckboxColumn: false,
  showRowNumberColumn: false,
  rowNumberOffset: 0,
  onRowSelection: function onRowSelection() {},
  maxRowSelection: undefined,
  selectedRows: [],
  isLoading: false,
  emptyIcon: React.createElement(EmptyIcon, null),
  emptyTitle: 'It’s empty here',
  emptyDescription: 'Our robots did not find any match...',
  variant: 'default',
  id: undefined,
  hideTableHeader: false,
  className: undefined,
  style: undefined,
  children: undefined
};