"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chart = _interopRequireDefault(require("../chart"));

var _index = require("../index");

var _Dataset = _interopRequireDefault(require("../../Dataset"));

jest.mock('../helpers/unregisterGlobalPlugins', function () {
  return jest.fn();
});
jest.mock('../chart', function () {
  return jest.fn(function () {
    return {
      data: {
        labels: [],
        datasets: []
      },
      update: jest.fn(),
      config: {}
    };
  });
});
describe('<Chart />', function () {
  it('should call ChartJS to render the chart when the component is mounted', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_index.Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }, _react["default"].createElement(_Dataset["default"], {
      values: [34, 345, 234, 234],
      title: "Dataset 1"
    })));
    expect(_chart["default"]).toHaveBeenCalledWith(expect.any(Object), {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D']
      },
      plugins: null,
      options: expect.any(Object)
    });
  });
  it('should call ChartJS update method to update the chart when the component changes', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }));

    var _component$instance = component.instance(),
        chartInstance = _component$instance.chartInstance;

    component.setProps({
      labels: ['A', 'B', 'C', 'D', 'E']
    });
    expect(chartInstance.update).toHaveBeenCalledTimes(1);
  });
  it('should call ChartJS update method to update the chart when the children changes', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }));

    var _component$instance2 = component.instance(),
        chartInstance = _component$instance2.chartInstance;

    component.setProps({
      children: [_react["default"].createElement(_Dataset["default"], {
        values: [34, 345, 234, 234, 90],
        title: "Dataset 1"
      })]
    });
    expect(chartInstance.update).toHaveBeenCalledTimes(2);
  });
  it('should update the chart type when changed dynamically', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }, _react["default"].createElement(_Dataset["default"], {
      values: [34, 345, 234, 234],
      title: "Dataset 1"
    })));
    component.setProps({
      type: 'bar'
    });
    expect(component.instance().chartInstance.config.type).toBe('bar');
  });
});