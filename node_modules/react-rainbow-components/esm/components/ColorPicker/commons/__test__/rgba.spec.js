import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Rgba } from '..';
describe('<Rgba />', function () {
  it('should fire onChange with object containing the new alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Rgba, null)));
    var result = [0, 0, 0, 1];
    var values = [255, 255, 255, 0.5];
    values.forEach(function (value, index) {
      result[index] = value;
      var normalizeValue = index === 3 ? value * 100 : value;
      wrapper.find('input[type="number"]').at(index).simulate('change', {
        target: {
          value: normalizeValue
        }
      });
      wrapper.update();
      expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
        rgba: result
      }));
    });
  });
  it('should fire onChange with object containing the default alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 0.5],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Rgba, null)));
    wrapper.find('input[type="number"]').at(3).simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 0]
    }));
  });
  it('should fire onChange with object containing the default component color', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [255, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Rgba, null)));
    wrapper.find('input[type="number"]').first().simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 1]
    }));
  });
});