"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _chartjsPluginDatalabels = _interopRequireDefault(require("chartjs-plugin-datalabels"));

var _resolveOptions = _interopRequireDefault(require("../resolveOptions"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

jest.mock('../../../styles/defaultTheme', function () {
  return {
    palette: {
      background: {
        main: '#000'
      },
      text: {
        main: 'main text color',
        label: 'label color'
      },
      border: {
        divider: 'divider color'
      },
      getContrastText: function getContrastText() {
        return 'contrast text';
      }
    }
  };
});
jest.mock('../../../styles/helpers/color/replaceAlpha', function () {
  return function () {
    return 'replace alpha color';
  };
});
var baseOptions = {
  legend: {
    display: true,
    position: 'bottom',
    fullWidth: true,
    labels: {
      usePointStyle: true,
      fontColor: 'label color'
    }
  },
  tooltips: {
    backgroundColor: 'replace alpha color',
    titleFontColor: 'contrast text',
    bodyFontColor: 'contrast text'
  }
};
describe('resolveOptions function', function () {
  it('should return the conf option with legend parameters only', function () {
    var conditions = {
      disableAnimations: false,
      disableLines: false,
      disableCurves: false,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: false
    };
    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(baseOptions);
  });
  it('should return the conf option with legend and animation parameters', function () {
    var conditions = {
      disableAnimations: true,
      disableLines: false,
      disableCurves: false,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: false
    };
    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0
    }));
  });
  it('should return the conf option with legend and line parameters', function () {
    var conditions = {
      disableAnimations: false,
      disableLines: true,
      disableCurves: false,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: false
    };
    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      showLines: false
    }));
  });
  it('should return the conf option with legend and curves parameters', function () {
    var conditions = {
      disableAnimations: false,
      disableLines: false,
      disableCurves: true,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: false
    };
    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      elements: {
        line: {
          tension: 0
        }
      }
    }));
  });
  it('should return the conf option with legend and stacked parameters', function () {
    var conditions = {
      disableAnimations: false,
      disableLines: false,
      disableCurves: false,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: true
    };
    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {
            color: 'divider color',
            zeroLineColor: 'divider color'
          },
          ticks: {
            fontColor: 'label color'
          }
        }],
        yAxes: [{
          stacked: true,
          gridLines: {
            color: 'divider color',
            zeroLineColor: 'divider color'
          },
          ticks: {
            fontColor: 'label color'
          }
        }]
      }
    }));
  });
  it('should return the conf option with legend, layout and plugins parameters', function () {
    var rest = {
      datalabels: {
        color: '#CCC'
      },
      className: 'rainbow-class'
    };

    var conditions = _objectSpread({
      disableAnimations: false,
      disableLines: false,
      disableCurves: false,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: false,
      plugins: [_chartjsPluginDatalabels["default"]]
    }, rest);

    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      layout: {
        padding: {
          bottom: 0,
          left: 0,
          right: 20,
          top: 20
        }
      },
      plugins: {
        datalabels: {
          color: '#CCC'
        }
      }
    }));
  });
  it('should return the conf option with all parameters', function () {
    var rest = {
      datalabels: {
        color: '#CCC'
      },
      className: 'rainbow-class'
    };

    var conditions = _objectSpread({
      disableAnimations: true,
      disableLines: true,
      disableCurves: true,
      showLegend: true,
      legendPosition: 'bottom',
      showStacked: true,
      plugins: [_chartjsPluginDatalabels["default"]]
    }, rest);

    var options = (0, _resolveOptions["default"])(conditions);
    expect(options).toEqual(_objectSpread(_objectSpread({}, baseOptions), {}, {
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0,
      showLines: false,
      elements: {
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          bottom: 0,
          left: 0,
          right: 20,
          top: 20
        }
      },
      plugins: {
        datalabels: {
          color: '#CCC'
        }
      },
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {
            color: 'divider color',
            zeroLineColor: 'divider color'
          },
          ticks: {
            fontColor: 'label color'
          }
        }],
        yAxes: [{
          stacked: true,
          gridLines: {
            color: 'divider color',
            zeroLineColor: 'divider color'
          },
          ticks: {
            fontColor: 'label color'
          }
        }]
      }
    }));
  });
});