import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["columns"],
    _excluded2 = ["header", "field"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

var Head = function (_PureComponent) {
  _inherits(Head, _PureComponent);

  var _super = _createSuper(Head);

  function Head() {
    _classCallCheck(this, Head);

    return _super.apply(this, arguments);
  }

  _createClass(Head, [{
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
          rest = _objectWithoutProperties(_this$props2, _excluded);

      if (columns) {
        return columns.map(function (column, index) {
          var header = column.header,
              field = column.field,
              columnRest = _objectWithoutProperties(column, _excluded2);

          var key = "header-".concat(index);
          return React.createElement(Header, _extends({}, rest, columnRest, {
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
}(PureComponent);

export { Head as default };
Head.propTypes = {
  columns: PropTypes.array,
  sortDirection: PropTypes.string,
  defaultSortDirection: PropTypes.string,
  sortedBy: PropTypes.string
};
Head.defaultProps = {
  columns: undefined,
  sortDirection: undefined,
  defaultSortDirection: 'asc',
  sortedBy: undefined
};