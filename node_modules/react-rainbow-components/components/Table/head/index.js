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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("./header"));

var _excluded = ["columns"],
    _excluded2 = ["header", "field"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Head = function (_PureComponent) {
  (0, _inherits2["default"])(Head, _PureComponent);

  var _super = _createSuper(Head);

  function Head() {
    (0, _classCallCheck2["default"])(this, Head);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Head, [{
    key: "resolveSortDirection",
    value: function resolveSortDirection(field) {
      var _this$props = this.props,
          sortDirection = _this$props.sortDirection,
          defaultSortDirection = _this$props.defaultSortDirection;

      if (this.isSorted(field)) {
        return sortDirection;
      }

      return defaultSortDirection;
    }
  }, {
    key: "isSorted",
    value: function isSorted(field) {
      var sortedBy = this.props.sortedBy;

      if (field) {
        return field === sortedBy;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          columns = _this$props2.columns,
          rest = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);

      if (columns) {
        return columns.map(function (column, index) {
          var header = column.header,
              field = column.field,
              columnRest = (0, _objectWithoutProperties2["default"])(column, _excluded2);
          var key = "header-".concat(index);
          return _react["default"].createElement(_header["default"], (0, _extends2["default"])({}, rest, columnRest, {
            key: key,
            colIndex: index,
            content: header,
            sortDirection: _this.resolveSortDirection(field),
            isSorted: _this.isSorted(field),
            field: field
          }));
        });
      }

      return null;
    }
  }]);
  return Head;
}(_react.PureComponent);

exports["default"] = Head;
Head.propTypes = {
  columns: _propTypes["default"].array,
  sortDirection: _propTypes["default"].string,
  defaultSortDirection: _propTypes["default"].string,
  sortedBy: _propTypes["default"].string
};
Head.defaultProps = {
  columns: undefined,
  sortDirection: undefined,
  defaultSortDirection: 'asc',
  sortedBy: undefined
};