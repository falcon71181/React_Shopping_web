import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["labels", "type"],
    _excluded2 = ["type", "labels", "plugins"];

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import ChartJS from './chart';
import resolveOptions from './resolveOptions';
import StyledContainer from './styled/container';
import DatasetContainer from './styled/datasetContainer';
import unregisterGlobalPlugins from './helpers/unregisterGlobalPlugins';
import ChartContext from './context';
export var Chart = function (_Component) {
  _inherits(Chart, _Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props);
    _this.chartRef = React.createRef();
    _this.datasets = {};
    _this.registerDataset = _this.registerDataset.bind(_assertThisInitialized(_this));
    _this.unregisterDataset = _this.unregisterDataset.bind(_assertThisInitialized(_this));
    _this.updateDataset = _this.updateDataset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Chart, [{
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
          conditions = _objectWithoutProperties(_this$props, _excluded);

      this.chartInstance.config.type = type;
      this.chartInstance.data.labels = labels;
      this.chartInstance.data.datasets = Object.values(this.datasets);
      this.chartInstance.options = resolveOptions(_objectSpread({
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
          rest = _objectWithoutProperties(_this$datasets, [id].map(_toPropertyKey));

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
      unregisterGlobalPlugins(ChartJS);

      var _this$props2 = this.props,
          type = _this$props2.type,
          labels = _this$props2.labels,
          plugins = _this$props2.plugins,
          conditions = _objectWithoutProperties(_this$props2, _excluded2);

      var node = this.chartRef.current;
      this.chartInstance = new ChartJS(node, {
        type: type,
        data: {
          labels: labels
        },
        plugins: plugins || null,
        options: resolveOptions(_objectSpread({
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
      return React.createElement(ChartContext.Provider, {
        value: context
      }, React.createElement(StyledContainer, {
        className: className,
        style: style
      }, React.createElement("canvas", {
        ref: this.chartRef
      }), React.createElement(DatasetContainer, null, children)));
    }
  }]);

  return Chart;
}(Component);
Chart.propTypes = {
  type: PropTypes.oneOf(['bar', 'horizontalBar', 'line', 'radar', 'pie', 'doughnut', 'polarArea', 'bubble']),
  labels: PropTypes.arrayOf(PropTypes.string),
  showStacked: PropTypes.bool,
  showLegend: PropTypes.bool,
  disableXAxisGridLines: PropTypes.bool,
  disableYAxisGridLines: PropTypes.bool,
  disableXAxisBorders: PropTypes.bool,
  disableYAxisBorders: PropTypes.bool,
  disableXAxisTickLabels: PropTypes.bool,
  disableYAxisTickLabels: PropTypes.bool,
  legendPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  disableAnimations: PropTypes.bool,
  disableLines: PropTypes.bool,
  disableCurves: PropTypes.bool,
  maintainAspectRatio: PropTypes.bool,
  plugins: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
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
export default withTheme(Chart);