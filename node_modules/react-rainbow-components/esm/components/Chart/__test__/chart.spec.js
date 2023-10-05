import React from 'react';
import { mount } from 'enzyme';
import ChartJS from '../chart';
import { Chart } from '../index';
import Dataset from '../../Dataset';
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
    mount(React.createElement(Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }, React.createElement(Dataset, {
      values: [34, 345, 234, 234],
      title: "Dataset 1"
    })));
    expect(ChartJS).toHaveBeenCalledWith(expect.any(Object), {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D']
      },
      plugins: null,
      options: expect.any(Object)
    });
  });
  it('should call ChartJS update method to update the chart when the component changes', function () {
    var component = mount(React.createElement(Chart, {
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
    var component = mount(React.createElement(Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }));

    var _component$instance2 = component.instance(),
        chartInstance = _component$instance2.chartInstance;

    component.setProps({
      children: [React.createElement(Dataset, {
        values: [34, 345, 234, 234, 90],
        title: "Dataset 1"
      })]
    });
    expect(chartInstance.update).toHaveBeenCalledTimes(2);
  });
  it('should update the chart type when changed dynamically', function () {
    var component = mount(React.createElement(Chart, {
      labels: ['A', 'B', 'C', 'D'],
      type: "line"
    }, React.createElement(Dataset, {
      values: [34, 345, 234, 234],
      title: "Dataset 1"
    })));
    component.setProps({
      type: 'bar'
    });
    expect(component.instance().chartInstance.config.type).toBe('bar');
  });
});