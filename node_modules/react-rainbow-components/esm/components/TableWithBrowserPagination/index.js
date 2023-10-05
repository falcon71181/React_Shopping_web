import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["style", "className", "paginationAlignment", "pageSize", "data", "children", "variant"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import RenderIf from '../RenderIf';
import Options from './options';
import getPageItems from './helpers/getPageItems';
import { StyledContainer, StyledTable } from './styled/container';
import StyledPaginationContainer from './styled/paginationContainer';
import StyledSelectContainer from './styled/selectContainer';
import StyledSelect from './styled/select';

var TableWithBrowserPagination = function (_Component) {
  _inherits(TableWithBrowserPagination, _Component);

  var _super = _createSuper(TableWithBrowserPagination);

  function TableWithBrowserPagination(props) {
    var _this;

    _classCallCheck(this, TableWithBrowserPagination);

    _this = _super.call(this, props);
    var data = props.data,
        pageSize = props.pageSize;
    _this.state = {
      activePage: 1,
      pageItems: getPageItems({
        data: data,
        activePage: 1,
        pageSize: pageSize
      })
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSelectChange = _this.handleSelectChange.bind(_assertThisInitialized(_this));
    _this.table = React.createRef();
    return _this;
  }

  _createClass(TableWithBrowserPagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          data = _this$props.data,
          pageSize = _this$props.pageSize;

      if (prevProps.data !== data || prevProps.pageSize !== pageSize) {
        this.updateData();
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          pageSize = _this$props2.pageSize;
      var activePage = this.state.activePage;
      var totalPages = Math.ceil(data.length / pageSize);
      var nextActivePage = activePage <= totalPages ? activePage : 1;
      this.setState({
        activePage: nextActivePage,
        pageItems: getPageItems({
          data: data,
          activePage: nextActivePage,
          pageSize: pageSize
        })
      });
    }
  }, {
    key: "moveToPage",
    value: function moveToPage(page) {
      var _this$props3 = this.props,
          data = _this$props3.data,
          pageSize = _this$props3.pageSize;
      this.setState({
        activePage: page,
        pageItems: getPageItems({
          data: data,
          activePage: page,
          pageSize: pageSize
        })
      });
      this.table.current.scrollTop();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, page) {
      this.moveToPage(page);
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      var page = Number(event.target.value);
      this.moveToPage(page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          style = _this$props4.style,
          className = _this$props4.className,
          paginationAlignment = _this$props4.paginationAlignment,
          pageSize = _this$props4.pageSize,
          data = _this$props4.data,
          children = _this$props4.children,
          variant = _this$props4.variant,
          rest = _objectWithoutProperties(_this$props4, _excluded);

      var _this$state = this.state,
          activePage = _this$state.activePage,
          pageItems = _this$state.pageItems;
      var pages = Math.ceil(data.length / pageSize);
      var showPagination = pages > 1;
      var paginationVariant = variant === 'listview' ? 'shaded' : 'default';
      return React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement(StyledTable, _extends({
        data: pageItems
      }, rest, {
        ref: this.table,
        variant: variant
      }), children), React.createElement(RenderIf, {
        isTrue: showPagination
      }, React.createElement(StyledPaginationContainer, {
        paginationAlignment: paginationAlignment,
        variant: variant
      }, React.createElement(Pagination, {
        pages: pages,
        activePage: activePage,
        onChange: this.handleChange,
        variant: paginationVariant
      }), React.createElement(RenderIf, {
        isTrue: pages > 6
      }, React.createElement(StyledSelectContainer, null, React.createElement(StyledSelect, {
        onChange: this.handleSelectChange,
        value: activePage,
        variant: variant
      }, React.createElement(Options, {
        pages: pages
      })))))));
    }
  }]);

  return TableWithBrowserPagination;
}(Component);

export { TableWithBrowserPagination as default };
TableWithBrowserPagination.propTypes = {
  paginationAlignment: PropTypes.oneOf(['center', 'left', 'right']),
  pageSize: PropTypes.number,
  data: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'listview']),
  children: PropTypes.node
};
TableWithBrowserPagination.defaultProps = {
  paginationAlignment: 'center',
  className: undefined,
  style: undefined,
  pageSize: Infinity,
  data: [],
  children: undefined,
  variant: 'default'
};