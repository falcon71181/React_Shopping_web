import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import Loading from './loading';
import Empty from './empty';

function getData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var newData;

  if (isLoading) {
    newData = [].concat(_toConsumableArray(data), [{
      type: 'LOADING'
    }]);
  } else {
    newData = data;
  }

  return newData;
}

var Body = function (_PureComponent) {
  _inherits(Body, _PureComponent);

  var _super = _createSuper(Body);

  function Body() {
    _classCallCheck(this, Body);

    return _super.apply(this, arguments);
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          columns = _this$props.columns,
          rows = _this$props.rows,
          tableId = _this$props.tableId,
          _onSelectRow = _this$props.onSelectRow,
          _onDeselectRow = _this$props.onDeselectRow,
          isLoading = _this$props.isLoading,
          emptyIcon = _this$props.emptyIcon,
          emptyTitle = _this$props.emptyTitle,
          emptyDescription = _this$props.emptyDescription;
      var isEmpty = data.length === 0;
      var columnsLength = columns.length;

      if (isEmpty && isLoading) {
        return React.createElement(Loading, {
          columns: columns
        });
      }

      if (isEmpty && !isLoading) {
        return React.createElement(Empty, {
          columnsLength: columnsLength,
          emptyIcon: emptyIcon,
          emptyTitle: emptyTitle,
          emptyDescription: emptyDescription
        });
      }

      var newData = getData(data, isLoading);
      return newData.map(function (item, index) {
        var row = rows[index];
        var rowsLength = rows.length;
        var rowKeyValue = rows[index] && rows[index].key;
        var key = rowKeyValue || "row-".concat(index + 1);
        return React.createElement(Row, _extends({}, row, {
          key: key,
          rowData: item,
          columns: columns,
          tableId: tableId,
          rowIndex: index,
          rowsLength: rowsLength,
          onSelectRow: function onSelectRow(event, isMultiple) {
            return _onSelectRow(event, isMultiple, rowKeyValue);
          },
          onDeselectRow: function onDeselectRow(event, isMultiple) {
            return _onDeselectRow(event, isMultiple, rowKeyValue);
          }
        }));
      });
    }
  }]);

  return Body;
}(PureComponent);

export { Body as default };
Body.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  rows: PropTypes.array,
  tableId: PropTypes.string.isRequired,
  onSelectRow: PropTypes.func,
  onDeselectRow: PropTypes.func,
  emptyIcon: PropTypes.node,
  emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isLoading: PropTypes.bool
};
Body.defaultProps = {
  data: [],
  columns: [],
  rows: [],
  emptyIcon: undefined,
  emptyTitle: undefined,
  emptyDescription: undefined,
  onSelectRow: function onSelectRow() {},
  onDeselectRow: function onDeselectRow() {},
  isLoading: false
};