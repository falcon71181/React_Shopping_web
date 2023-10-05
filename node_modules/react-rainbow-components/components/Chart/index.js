"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Chart = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _chart = _interopRequireDefault(require("./chart"));

var _resolveOptions = _interopRequireDefault(require("./resolveOptions"));

var _container = _interopRequireDefault(require("./styled/container"));

var _datasetContainer = _interopRequireDefault(require("./styled/datasetContainer"));

var _unregisterGlobalPlugins = _interopRequireDefault(require("./helpers/unregisterGlobalPlugins"));

var _context = _interopRequireDefault(require("./context"));

var _excluded = ["labels", "type"],
    _excluded2 = ["type", "labels", "plugins"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Chart = function (_Component) {
  (0, _inherits2["default"])(Chart, _Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Chart);
    _this = _super.call(this, props);
    _this.chartRef = _react["default"].createRef();
    _this.datasets = {};
    _this.registerDataset = _this.registerDataset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.unregisterDataset = _this.unregisterDataset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateDataset = _this.updateDataset.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateChart();
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      var _this$props = this.props,
          labels = _this$props.labels,
          type = _this$props.type,
          conditions = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      this.chartInstance.config.type = type;
      this.chartInstance.data.labels = labels;
      this.chartInstance.data.datasets = Object.values(this.datasets);
      this.chartInstance.options = (0, _resolveOptions["default"])(_objectSpread({
        type: type
      }, conditions));
      this.chartInstance.update();
    }
  }, {
    key: "registerDataset",
    value: function registerDataset(id, dataset) {
      this.datasets[id] = dataset;
      this.updateChart();
    }
  }, {
    key: "unregisterDataset",
    value: function unregisterDataset(id) {
      var _this$datasets = this.datasets,
          remove = _this$datasets[id],
          rest = (0, _objectWithoutProperties2["default"])(_this$datasets, [id].map(_toPropertyKey));
      this.datasets = rest;
      this.chartInstance.update();
    }
  }, {
    key: "updateDataset",
    value: function updateDataset(id, dataset) {
      var _this2 = this;

      var keys = Object.keys(dataset);
      keys.forEach(function (key) {
        _this2.datasets[id][key] = dataset[key];
      });
      this.updateChart();
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      (0, _unregisterGlobalPlugins["default"])(_chart["default"]);
      var _this$props2 = this.props,
          type = _this$props2.type,
          labels = _this$props2.labels,
          plugins = _this$props2.plugins,
          conditions = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded2);
      var node = this.chartRef.current;
      this.chartInstance = new _chart["default"](node, {
        type: type,
        data: {
          labels: labels
        },
        plugins: plugins || null,
        options: (0, _resolveOptions["default"])(_objectSpread({
          type: type,
          plugins: plugins
        }, conditions))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          className = _this$props3.className,
          children = _this$props3.children;
      var context = {
        registerDataset: this.registerDataset,
        unregisterDataset: this.unregisterDataset,
        updateDataset: this.updateDataset
      };
      return _react["default"].createElement(_context["default"].Provider, {
        value: context
      }, _react["default"].createElement(_container["default"], {
        className: className,
        style: style
      }, _react["default"].createElement("canvas", {
        ref: this.chartRef
      }), _react["default"].createElement(_datasetContainer["default"], null, children)));
    }
  }]);
  return Chart;
}(_react.Component);

exports.Chart = Chart;
Chart.propTypes = {
  type: _propTypes["default"].oneOf(['bar', 'horizontalBar', 'line', 'radar', 'pie', 'doughnut', 'polarArea', 'bubble']),
  labels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  showStacked: _propTypes["default"].bool,
  showLegend: _propTypes["default"].bool,
  disableXAxisGridLines: _propTypes["default"].bool,
  disableYAxisGridLines: _propTypes["default"].bool,
  disableXAxisBorders: _propTypes["default"].bool,
  disableYAxisBorders: _propTypes["default"].bool,
  disableXAxisTickLabels: _propTypes["default"].bool,
  disableYAxisTickLabels: _propTypes["default"].bool,
  legendPosition: _propTypes["default"].oneOf(['top', 'bottom', 'right', 'left']),
  disableAnimations: _propTypes["default"].bool,
  disableLines: _propTypes["default"].bool,
  disableCurves: _propTypes["default"].bool,
  maintainAspectRatio: _propTypes["default"].bool,
  plugins: _propTypes["default"].arrayOf(_propTypes["default"].object),
  options: _propTypes["default"].object,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node
};
Chart.defaultProps = {
  type: 'bar',
  labels: [],
  showStacked: false,
  showLegend: true,
  legendPosition: 'bottom',
  disableAnimations: false,
  disableLines: false,
  disableCurves: false,
  disableXAxisGridLines: false,
  disableYAxisGridLines: false,
  disableXAxisBorders: false,
  disableYAxisBorders: false,
  disableXAxisTickLabels: false,
  disableYAxisTickLabels: false,
  maintainAspectRatio: true,
  plugins: undefined,
  options: {},
  className: undefined,
  style: undefined,
  children: undefined
};

var _default = (0, _styledComponents.withTheme)(Chart);

exports["default"] = _default;