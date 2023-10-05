"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _columns = require("../helpers/columns");

var _sortArrowIcon = _interopRequireDefault(require("./sortArrowIcon"));

var _resizeBar = _interopRequireDefault(require("./resizeBar"));

var _selectableHeader = _interopRequireDefault(require("./selectableHeader"));

var _th = _interopRequireDefault(require("./styled/th"));

var _wrapper = _interopRequireDefault(require("./styled/wrapper"));

var _headerContainer = _interopRequireDefault(require("./styled/headerContainer"));

var _content = _interopRequireDefault(require("./styled/content"));

var _excluded = ["content", "minColumnWidth", "maxColumnWidth", "computedWidth", "type", "onSelectAllRows", "onDeselectAllRows", "tableId", "maxRowSelection", "bulkSelection", "headerComponent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Header = function (_Component) {
  (0, _inherits2["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Header);
    _this = _super.call(this, props);
    _this.handleSort = _this.handleSort.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Header, [{
    key: "getTabIndex",
    value: function getTabIndex() {
      var isSorted = this.props.isSorted;

      if (isSorted) {
        return 0;
      }

      return -1;
    }
  }, {
    key: "getHeaderContent",
    value: function getHeaderContent() {
      var content = this.props.content;

      if (typeof content === 'string') {
        return content;
      }

      return undefined;
    }
  }, {
    key: "isResizable",
    value: function isResizable() {
      var _this$props = this.props,
          resizeColumnDisabled = _this$props.resizeColumnDisabled,
          width = _this$props.width;
      return !resizeColumnDisabled && width === undefined;
    }
  }, {
    key: "handleResize",
    value: function handleResize(widthDelta) {
      var _this$props2 = this.props,
          onResize = _this$props2.onResize,
          colIndex = _this$props2.colIndex;
      onResize(widthDelta, colIndex);
    }
  }, {
    key: "handleSort",
    value: function handleSort(event) {
      var _this$props3 = this.props,
          onSort = _this$props3.onSort,
          field = _this$props3.field,
          sortable = _this$props3.sortable,
          sortDirection = _this$props3.sortDirection;

      if (sortable) {
        onSort(event, field, sortDirection);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          content = _this$props4.content,
          minColumnWidth = _this$props4.minColumnWidth,
          maxColumnWidth = _this$props4.maxColumnWidth,
          computedWidth = _this$props4.computedWidth,
          type = _this$props4.type,
          onSelectAllRows = _this$props4.onSelectAllRows,
          onDeselectAllRows = _this$props4.onDeselectAllRows,
          tableId = _this$props4.tableId,
          maxRowSelection = _this$props4.maxRowSelection,
          bulkSelection = _this$props4.bulkSelection,
          HeaderComponent = _this$props4.headerComponent,
          rest = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);
      var sortDirection = rest.sortDirection,
          sortable = rest.sortable,
          isSorted = rest.isSorted,
          headerAlignment = rest.headerAlignment;
      var headerStyles = {
        width: computedWidth
      };
      var isResizable = this.isResizable();

      if (type === _columns.SELECTABLE_CHECKBOX) {
        return _react["default"].createElement(_selectableHeader["default"], {
          onSelectAllRows: onSelectAllRows,
          onDeselectAllRows: onDeselectAllRows,
          tableId: tableId,
          maxRowSelection: maxRowSelection,
          bulkSelection: bulkSelection,
          style: headerStyles
        });
      }

      return _react["default"].createElement(_th["default"], {
        style: headerStyles,
        sortable: sortable,
        isSorted: isSorted,
        isResizable: isResizable,
        scope: "col",
        tabIndex: this.getTabIndex(),
        "aria-label": this.getHeaderContent()
      }, _react["default"].createElement(_wrapper["default"], {
        style: headerStyles
      }, HeaderComponent ? _react["default"].createElement(HeaderComponent, (0, _extends2["default"])({}, rest, {
        header: content,
        onSort: this.handleSort
      })) : null, _react["default"].createElement(_RenderIf["default"], {
        isTrue: !HeaderComponent
      }, _react["default"].createElement(_headerContainer["default"], {
        className: "rainbow-table_header-container",
        role: "presentation",
        headerAlignment: headerAlignment,
        onClick: this.handleSort
      }, _react["default"].createElement(_content["default"], {
        title: this.getHeaderContent(),
        className: "rainbow-table_header-content"
      }, content), _react["default"].createElement(_RenderIf["default"], {
        isTrue: sortable
      }, _react["default"].createElement(_sortArrowIcon["default"], {
        direction: sortDirection,
        headerAlignment: headerAlignment
      })))), _react["default"].createElement(_resizeBar["default"], {
        minColumnWidth: minColumnWidth,
        maxColumnWidth: maxColumnWidth,
        isResizable: isResizable,
        ariaLabel: this.getHeaderContent(),
        onResize: this.handleResize,
        headerWidth: computedWidth
      })));
    }
  }]);
  return Header;
}(_react.Component);

exports["default"] = Header;
Header.propTypes = {
  content: _propTypes["default"].any,
  colIndex: _propTypes["default"].number.isRequired,
  isSorted: _propTypes["default"].bool,
  sortable: _propTypes["default"].bool,
  sortDirection: _propTypes["default"].string,
  onSort: _propTypes["default"].func,
  minColumnWidth: _propTypes["default"].number,
  maxColumnWidth: _propTypes["default"].number,
  onResize: _propTypes["default"].func,
  resizeColumnDisabled: _propTypes["default"].bool,
  field: _propTypes["default"].string,
  width: _propTypes["default"].number,
  computedWidth: _propTypes["default"].number,
  type: _propTypes["default"].string,
  onSelectAllRows: _propTypes["default"].func,
  onDeselectAllRows: _propTypes["default"].func,
  tableId: _propTypes["default"].string.isRequired,
  maxRowSelection: _propTypes["default"].number,
  bulkSelection: _propTypes["default"].oneOf(['none', 'some', 'all']),
  headerAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  headerComponent: _propTypes["default"].elementType
};
Header.defaultProps = {
  content: null,
  isSorted: false,
  sortable: false,
  sortDirection: undefined,
  onSort: function onSort() {},
  minColumnWidth: undefined,
  maxColumnWidth: undefined,
  onResize: function onResize() {},
  resizeColumnDisabled: false,
  field: undefined,
  width: undefined,
  computedWidth: 0,
  type: undefined,
  onSelectAllRows: function onSelectAllRows() {},
  onDeselectAllRows: function onDeselectAllRows() {},
  maxRowSelection: undefined,
  bulkSelection: 'none',
  headerAlignment: undefined,
  headerComponent: undefined
};