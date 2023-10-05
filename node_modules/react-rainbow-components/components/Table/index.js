"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _body = _interopRequireDefault(require("./body"));

var _head = _interopRequireDefault(require("./head"));

var _sort = require("./helpers/sort");

var _columns = require("./helpers/columns");

var _resizer = require("./helpers/resizer");

var _rows = require("./helpers/rows");

var _selector = require("./helpers/selector");

var _data = require("./helpers/data");

var _ResizeSensor = _interopRequireDefault(require("../../libs/ResizeSensor"));

var _debounce = _interopRequireDefault(require("../../libs/debounce"));

var _utils = require("../../libs/utils");

var _empty = _interopRequireDefault(require("./body/icons/empty"));

var _container = _interopRequireDefault(require("./styled/container"));

var _scrollableX = _interopRequireDefault(require("./styled/scrollableX"));

var _scrollableY = _interopRequireDefault(require("./styled/scrollableY"));

var _table = _interopRequireDefault(require("./styled/table"));

var _tableBody = _interopRequireDefault(require("./styled/tableBody"));

var _thead = _interopRequireDefault(require("./styled/thead"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Table = function (_Component) {
  (0, _inherits2["default"])(Table, _Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Table);
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
      columns: (0, _columns.getColumns)({
        children: children,
        showCheckboxColumn: showCheckboxColumn,
        showRowNumberColumn: showRowNumberColumn,
        rowNumberOffset: rowNumberOffset,
        minColumnWidth: minColumnWidth,
        maxColumnWidth: maxColumnWidth,
        variant: variant
      }),
      tableWidth: undefined,
      rows: (0, _rows.getRows)({
        keyField: keyField,
        rows: (0, _data.normalizeData)(data),
        maxRowSelection: maxRowSelection && Number(maxRowSelection),
        selectedRowsKeys: {}
      }),
      bulkSelection: 'none'
    };
    var rows = _this.state.rows;
    _this.indexes = (0, _rows.getIndexes)(rows);
    _this.selectedRowsKeys = (0, _selector.getSelectedRowKeysFromSelectedRows)(selectedRows, _this.indexes);
    _this.tableId = (0, _utils.uniqueId)('table');
    _this.tableContainerRef = _react["default"].createRef();
    _this.resizeTarget = _react["default"].createRef();
    _this.handleSort = _this.handleSort.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateColumnsAndTableWidth = _this.updateColumnsAndTableWidth.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectRow = _this.handleSelectRow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDeselectRow = _this.handleDeselectRow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectAllRows = _this.handleSelectAllRows.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDeselectAllRows = _this.handleDeselectAllRows.bind((0, _assertThisInitialized2["default"])(_this));
    _this.scrollableY = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.widthObserver = new _ResizeSensor["default"](this.resizeTarget.current, (0, _debounce["default"])(this.updateColumnsAndTableWidth, 200));
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
      var prevColumns = (0, _columns.getColumns)({
        children: prevChildren,
        showCheckboxColumn: prevShowCheckboxColumn,
        showRowNumberColumn: showRowNumberColumn,
        rowNumberOffset: rowNumberOffset,
        minColumnWidth: prevMinColumnWidth,
        maxColumnWidth: prevMaxColumnWidth,
        variant: variant
      });
      var currentColumns = (0, _columns.getColumns)({
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

      if ((0, _columns.isNotSameColumns)(prevColumns, currentColumns)) {
        this.updateColumnsAndTableWidth(currentColumns);
      }

      var isNotSameSelectedRows = prevSelectedRows !== selectedRows;

      if (isNotSameSelectedRows) {
        var selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;

        if (selectedRowsKeysLength !== selectedRows.length) {
          this.selectedRowsKeys = (0, _selector.getSelectedRowKeysFromSelectedRows)(selectedRows, this.indexes);
          var updatedRows = (0, _rows.getRows)({
            keyField: keyField,
            rows: (0, _data.normalizeData)(data),
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
      return (0, _data.normalizeData)(data).filter(function (item, index) {
        return rows[index].isSelected;
      });
    }
  }, {
    key: "getMaxRowSelection",
    value: function getMaxRowSelection() {
      var _this$props2 = this.props,
          maxRowSelection = _this$props2.maxRowSelection,
          data = _this$props2.data;
      var rowsLength = (0, _data.normalizeData)(data).length;
      var maxRowSelectionNumber = Number(maxRowSelection);

      if (!(0, _selector.isValidMaxRowSelection)(maxRowSelection, rowsLength)) {
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
      var newRows = (0, _rows.getRows)({
        keyField: keyField,
        rows: (0, _data.normalizeData)(data),
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      this.indexes = (0, _rows.getIndexes)(newRows);
      var selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;
      var currentSelectedRows = this.getSelectedRows(newRows);
      var isNotSameSelectedRowsWithNewData = selectedRowsKeysLength !== currentSelectedRows.length;

      if (isNotSameSelectedRowsWithNewData) {
        onRowSelection(currentSelectedRows);
        this.selectedRowsKeys = (0, _selector.getSelectedRowKeys)(currentSelectedRows, keyField);
      }

      this.setState({
        rows: (0, _selector.getRowsWithInitalSelectedRows)({
          rows: newRows,
          selectedRows: selectedRows,
          maxRowSelection: maxRowSelection,
          indexes: this.indexes,
          selectedRowsKeys: this.selectedRowsKeys
        }),
        bulkSelection: (0, _selector.getBulkSelectionState)({
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
      var updatedColumns = (0, _resizer.getUpdatedColumns)({
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
          tableWidth: (0, _resizer.getTableWidth)(updatedColumns)
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
      var updatedRows = (0, _selector.getUpdatedRowsWhenSelectAll)({
        rows: rows,
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: this.selectedRowsKeys
      });
      var bulkSelection = (0, _selector.getBulkSelectionState)({
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
      var updatedRows = (0, _selector.getUpdatedRowsWhenDeselectAll)(rows);
      var bulkSelection = (0, _selector.getBulkSelectionState)({
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
        var updatedRows = (0, _selector.getUpdatedRowsWhenSelect)({
          maxRowSelection: maxRowSelection,
          rows: rows,
          indexes: indexes,
          isMultiple: isMultiple,
          rowKeyValue: rowKeyValue,
          lastSelectedRowKey: this.lastSelectedRowKey,
          selectedRowsKeys: this.selectedRowsKeys
        });
        var bulkSelection = (0, _selector.getBulkSelectionState)({
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

        var _updatedRows = (0, _selector.getUpdatedRowsWhenSelect)({
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
      var updatedRows = (0, _selector.getUpdatedRowsWhenDeselect)({
        maxRowSelection: maxRowSelection,
        rows: rows,
        indexes: indexes,
        isMultiple: isMultiple,
        rowKeyValue: rowKeyValue,
        lastSelectedRowKey: this.lastSelectedRowKey,
        selectedRowsKeys: this.selectedRowsKeys
      });
      var bulkSelection = (0, _selector.getBulkSelectionState)({
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
          columns: (0, _resizer.getResizedColumns)({
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
      var nextSortDirection = (0, _sort.getNextSortDirection)(field, sortedBy, sortDirection);
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
        return _react["default"].createElement(_container["default"], {
          id: id,
          className: className,
          style: style
        }, _react["default"].createElement("div", {
          ref: this.resizeTarget
        }), _react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, _react["default"].createElement(_container["default"], null, _react["default"].createElement(_scrollableX["default"], {
          ref: this.tableContainerRef
        }, _react["default"].createElement(_scrollableY["default"], {
          isEmpty: isEmpty,
          isLoading: isLoading,
          ref: this.scrollableY,
          style: tableStyles
        }, _react["default"].createElement(_table["default"], {
          style: tableStyles
        }, _react["default"].createElement(_thead["default"], null, _react["default"].createElement("tr", null, _react["default"].createElement(_head["default"], {
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
        }))), _react["default"].createElement(_tableBody["default"], {
          rowNumberOffset: rowNumberOffset
        }, _react["default"].createElement(_body["default"], {
          data: (0, _data.normalizeData)(data),
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
}(_react.Component);

exports["default"] = Table;
Table.propTypes = {
  data: _propTypes["default"].arrayOf(Object),
  sortedBy: _propTypes["default"].string,
  sortDirection: _propTypes["default"].oneOf(['asc', 'desc']),
  defaultSortDirection: _propTypes["default"].oneOf(['asc', 'desc']),
  onSort: _propTypes["default"].func,
  resizeColumnDisabled: _propTypes["default"].bool,
  minColumnWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxColumnWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  showCheckboxColumn: _propTypes["default"].bool,
  showRowNumberColumn: _propTypes["default"].bool,
  rowNumberOffset: _propTypes["default"].number,
  onRowSelection: _propTypes["default"].func,
  maxRowSelection: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  selectedRows: _propTypes["default"].array,
  keyField: _propTypes["default"].string.isRequired,
  isLoading: _propTypes["default"].bool,
  emptyIcon: _propTypes["default"].node,
  emptyTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  emptyDescription: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  variant: _propTypes["default"].oneOf(['default', 'listview']),
  id: _propTypes["default"].string,
  hideTableHeader: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
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
  emptyIcon: _react["default"].createElement(_empty["default"], null),
  emptyTitle: 'It’s empty here',
  emptyDescription: 'Our robots did not find any match...',
  variant: 'default',
  id: undefined,
  hideTableHeader: false,
  className: undefined,
  style: undefined,
  children: undefined
};