import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["content", "minColumnWidth", "maxColumnWidth", "computedWidth", "type", "onSelectAllRows", "onDeselectAllRows", "tableId", "maxRowSelection", "bulkSelection", "headerComponent"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';
import SortArrowIcon from './sortArrowIcon';
import ResizeBar from './resizeBar';
import SelectableHeader from './selectableHeader';
import StyledTh from './styled/th';
import StyledWrapper from './styled/wrapper';
import StyledHeaderContainer from './styled/headerContainer';
import StyledContent from './styled/content';

var Header = function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    _this.handleSort = _this.handleSort.bind(_assertThisInitialized(_this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
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
          rest = _objectWithoutProperties(_this$props4, _excluded);

      var sortDirection = rest.sortDirection,
          sortable = rest.sortable,
          isSorted = rest.isSorted,
          headerAlignment = rest.headerAlignment;
      var headerStyles = {
        width: computedWidth
      };
      var isResizable = this.isResizable();

      if (type === SELECTABLE_CHECKBOX) {
        return React.createElement(SelectableHeader, {
          onSelectAllRows: onSelectAllRows,
          onDeselectAllRows: onDeselectAllRows,
          tableId: tableId,
          maxRowSelection: maxRowSelection,
          bulkSelection: bulkSelection,
          style: headerStyles
        });
      }

      return React.createElement(StyledTh, {
        style: headerStyles,
        sortable: sortable,
        isSorted: isSorted,
        isResizable: isResizable,
        scope: "col",
        tabIndex: this.getTabIndex(),
        "aria-label": this.getHeaderContent()
      }, React.createElement(StyledWrapper, {
        style: headerStyles
      }, HeaderComponent ? React.createElement(HeaderComponent, _extends({}, rest, {
        header: content,
        onSort: this.handleSort
      })) : null, React.createElement(RenderIf, {
        isTrue: !HeaderComponent
      }, React.createElement(StyledHeaderContainer, {
        className: "rainbow-table_header-container",
        role: "presentation",
        headerAlignment: headerAlignment,
        onClick: this.handleSort
      }, React.createElement(StyledContent, {
        title: this.getHeaderContent(),
        className: "rainbow-table_header-content"
      }, content), React.createElement(RenderIf, {
        isTrue: sortable
      }, React.createElement(SortArrowIcon, {
        direction: sortDirection,
        headerAlignment: headerAlignment
      })))), React.createElement(ResizeBar, {
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
}(Component);

export { Header as default };
Header.propTypes = {
  content: PropTypes.any,
  colIndex: PropTypes.number.isRequired,
  isSorted: PropTypes.bool,
  sortable: PropTypes.bool,
  sortDirection: PropTypes.string,
  onSort: PropTypes.func,
  minColumnWidth: PropTypes.number,
  maxColumnWidth: PropTypes.number,
  onResize: PropTypes.func,
  resizeColumnDisabled: PropTypes.bool,
  field: PropTypes.string,
  width: PropTypes.number,
  computedWidth: PropTypes.number,
  type: PropTypes.string,
  onSelectAllRows: PropTypes.func,
  onDeselectAllRows: PropTypes.func,
  tableId: PropTypes.string.isRequired,
  maxRowSelection: PropTypes.number,
  bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
  headerAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  headerComponent: PropTypes.elementType
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