import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Alpha } from '..';
describe('<Alpha />', function () {
  it('should fire onChange with object containing the new alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Alpha, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
      target: {
        value: 1
      }
    });
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      rgba: [0, 0, 0, 0.01]
    }));
  });
  it('should fire onChange with object containing the default alpha', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 0.5],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Alpha, null)));
    wrapper.find('input[type="range"]').first().simulate('change', {
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