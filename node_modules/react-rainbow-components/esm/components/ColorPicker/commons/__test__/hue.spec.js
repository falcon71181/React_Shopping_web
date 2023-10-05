import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Hue } from '..';
describe('<Hue />', function () {
  it('should fire onChange with object containing the new hue.', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      hsv: [0, 0, 0],
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Hue, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 100
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      hsv: [100, 0, 0]
    }));
  });
  it('should fire onChange with object containing the default hue.', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      hsv: [360, 0, 0],
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Hue, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 'foo'
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      hsv: [0, 0, 0]
    }));
  });
});