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

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _options = _interopRequireDefault(require("./options"));

var _getPageItems = _interopRequireDefault(require("./helpers/getPageItems"));

var _container = require("./styled/container");

var _paginationContainer = _interopRequireDefault(require("./styled/paginationContainer"));

var _selectContainer = _interopRequireDefault(require("./styled/selectContainer"));

var _select = _interopRequireDefault(require("./styled/select"));

var _excluded = ["style", "className", "paginationAlignment", "pageSize", "data", "children", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableWithBrowserPagination = function (_Component) {
  (0, _inherits2["default"])(TableWithBrowserPagination, _Component);

  var _super = _createSuper(TableWithBrowserPagination);

  function TableWithBrowserPagination(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TableWithBrowserPagination);
    _this = _super.call(this, props);
    var data = props.data,
        pageSize = props.pageSize;
    _this.state = {
      activePage: 1,
      pageItems: (0, _getPageItems["default"])({
        data: data,
        activePage: 1,
        pageSize: pageSize
      })
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectChange = _this.handleSelectChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.table = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(TableWithBrowserPagination, [{
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
        pageItems: (0, _getPageItems["default"])({
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
        pageItems: (0, _getPageItems["default"])({
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
          rest = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);
      var _this$state = this.state,
          activePage = _this$state.activePage,
          pageItems = _this$state.pageItems;
      var pages = Math.ceil(data.length / pageSize);
      var showPagination = pages > 1;
      var paginationVariant = variant === 'listview' ? 'shaded' : 'default';
      return _react["default"].createElement(_container.StyledContainer, {
        className: className,
        style: style
      }, _react["default"].createElement(_container.StyledTable, (0, _extends2["default"])({
        data: pageItems
      }, rest, {
        ref: this.table,
        variant: variant
      }), children), _react["default"].createElement(_RenderIf["default"], {
        isTrue: showPagination
      }, _react["default"].createElement(_paginationContainer["default"], {
        paginationAlignment: paginationAlignment,
        variant: variant
      }, _react["default"].createElement(_Pagination["default"], {
        pages: pages,
        activePage: activePage,
        onChange: this.handleChange,
        variant: paginationVariant
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: pages > 6
      }, _react["default"].createElement(_selectContainer["default"], null, _react["default"].createElement(_select["default"], {
        onChange: this.handleSelectChange,
        value: activePage,
        variant: variant
      }, _react["default"].createElement(_options["default"], {
        pages: pages
      })))))));
    }
  }]);
  return TableWithBrowserPagination;
}(_react.Component);

exports["default"] = TableWithBrowserPagination;
TableWithBrowserPagination.propTypes = {
  paginationAlignment: _propTypes["default"].oneOf(['center', 'left', 'right']),
  pageSize: _propTypes["default"].number,
  data: _propTypes["default"].array,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'listview']),
  children: _propTypes["default"].node
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