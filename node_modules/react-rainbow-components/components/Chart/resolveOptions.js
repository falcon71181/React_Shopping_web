"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveOptions;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _color = require("../../styles/helpers/color");

var _defaultTheme = _interopRequireDefault(require("../../styles/defaultTheme"));

var _getPluginsConf = _interopRequireDefault(require("./helpers/getPluginsConf"));

var _merge = _interopRequireDefault(require("./helpers/merge"));

var _excluded = ["disableAnimations", "disableLines", "disableCurves", "disableXAxisGridLines", "disableYAxisGridLines", "disableXAxisBorders", "disableYAxisBorders", "disableXAxisTickLabels", "disableYAxisTickLabels", "showLegend", "legendPosition", "showStacked", "maintainAspectRatio", "theme", "type", "plugins", "options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function resolveOptions(conditions) {
  var disableAnimations = conditions.disableAnimations,
      disableLines = conditions.disableLines,
      disableCurves = conditions.disableCurves,
      disableXAxisGridLines = conditions.disableXAxisGridLines,
      disableYAxisGridLines = conditions.disableYAxisGridLines,
      disableXAxisBorders = conditions.disableXAxisBorders,
      disableYAxisBorders = conditions.disableYAxisBorders,
      disableXAxisTickLabels = conditions.disableXAxisTickLabels,
      disableYAxisTickLabels = conditions.disableYAxisTickLabels,
      showLegend = conditions.showLegend,
      legendPosition = conditions.legendPosition,
      showStacked = conditions.showStacked,
      maintainAspectRatio = conditions.maintainAspectRatio,
      theme = conditions.theme,
      type = conditions.type,
      plugins = conditions.plugins,
      nativeOptions = conditions.options,
      rest = (0, _objectWithoutProperties2["default"])(conditions, _excluded);
  var palette = theme ? theme.rainbow.palette : _defaultTheme["default"].palette;
  var legend = {
    label: palette.text.label,
    border: palette.border.divider
  };
  var tooltips = {
    background: (0, _color.replaceAlpha)(palette.getContrastText(palette.background.main), 0.8),
    color: palette.getContrastText(palette.text.main)
  };
  var options = {
    maintainAspectRatio: maintainAspectRatio,
    legend: {
      display: showLegend,
      position: legendPosition,
      fullWidth: true,
      labels: {
        usePointStyle: true,
        fontColor: legend.label
      }
    },
    tooltips: {
      backgroundColor: tooltips.background,
      titleFontColor: tooltips.color,
      bodyFontColor: tooltips.color
    }
  };

  if (type === 'bar' || type === 'horizontalBar' || type === 'line') {
    options = _objectSpread(_objectSpread({}, options), {}, {
      scales: {
        xAxes: [{
          ticks: {
            display: !disableXAxisTickLabels,
            fontColor: legend.label
          },
          gridLines: {
            display: !disableXAxisGridLines,
            drawBorder: !disableXAxisBorders,
            color: legend.border,
            zeroLineColor: legend.border
          }
        }],
        yAxes: [{
          ticks: {
            display: !disableYAxisTickLabels,
            fontColor: legend.label
          },
          gridLines: {
            display: !disableYAxisGridLines,
            drawBorder: !disableYAxisBorders,
            color: legend.border,
            zeroLineColor: legend.border
          }
        }]
      }
    });
  }

  if (disableAnimations) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0
    });
  }

  if (disableLines) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      showLines: false
    });
  }

  if (disableCurves) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      elements: {
        line: {
          tension: 0
        }
      }
    });
  }

  if (showStacked) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            fontColor: legend.label
          },
          gridLines: {
            color: legend.border,
            zeroLineColor: legend.border
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            fontColor: legend.label
          },
          gridLines: {
            color: legend.border,
            zeroLineColor: legend.border
          }
        }]
      }
    });
  }

  if (plugins) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      layout: {
        padding: {
          top: 20,
          right: 20,
          left: 0,
          bottom: 0
        }
      },
      plugins: (0, _getPluginsConf["default"])(rest, plugins)
    });
  }

  return (0, _merge["default"])(options, nativeOptions);
}