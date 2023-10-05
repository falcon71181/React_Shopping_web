"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _row = _interopRequireDefault(require("./row"));

var _loading = _interopRequireDefault(require("./loading"));

var _empty = _interopRequireDefault(require("./empty"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function getData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var newData;

  if (isLoading) {
    newData = [].concat((0, _toConsumableArray2["default"])(data), [{
      type: 'LOADING'
    }]);
  } else {
    newData = data;
  }

  return newData;
}

var Body = function (_PureComponent) {
  (0, _inherits2["default"])(Body, _PureComponent);

  var _super = _createSuper(Body);

  function Body() {
    (0, _classCallCheck2["default"])(this, Body);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Body, [{
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
        return _react["default"].createElement(_loading["default"], {
          columns: columns
        });
      }

      if (isEmpty && !isLoading) {
        return _react["default"].createElement(_empty["default"], {
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
        return _react["default"].createElement(_row["default"], (0, _extends2["default"])({}, row, {
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
}(_react.PureComponent);

exports["default"] = Body;
Body.propTypes = {
  data: _propTypes["default"].array,
  columns: _propTypes["default"].array,
  rows: _propTypes["default"].array,
  tableId: _propTypes["default"].string.isRequired,
  onSelectRow: _propTypes["default"].func,
  onDeselectRow: _propTypes["default"].func,
  emptyIcon: _propTypes["default"].node,
  emptyTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  emptyDescription: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  isLoading: _propTypes["default"].bool
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