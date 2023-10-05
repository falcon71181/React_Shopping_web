import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import Saturation from '../saturation';
import { StyledColor, StyledCircle } from '../saturation/styled';
import { RIGHT_KEY, DOWN_KEY, LEFT_KEY, UP_KEY } from '../../../../libs/constants';
jest.mock('../saturation/helpers/calculateBright', function () {
  return function () {
    return 100;
  };
});
jest.mock('../saturation/helpers/calculateSaturation', function () {
  return function () {
    return 100;
  };
});
describe('<Saturation />', function () {
  it('should fire onChange with object containing the new color', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0],
      onChange: onChangeMockFn
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Saturation, null)));
    wrapper.find(StyledColor).first().simulate('mousedown');
    wrapper.update();
    expect(onChangeMockFn).toHaveBeenCalledWith({
      hex: '#ff0000',
      hsv: [0, 100, 100],
      rgba: [255, 0, 0, 1]
    });
  });
  it('should render the pointer in the right position', function () {
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0]
    };
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Saturation, null)));
    expect(wrapper.find(StyledCircle).first().prop('style')).toEqual({
      top: '100%',
      left: '0%'
    });
  });
  it('should fire onChange with object containing the new color when using keyboard', function () {
    var onChangeMockFn = jest.fn();
    var context = {
      rgba: [0, 0, 0, 1],
      hsv: [0, 0, 0],
      onChange: onChangeMockFn
    };
    var values = [{
      key: RIGHT_KEY,
      result: [0, 1, 0]
    }, {
      key: UP_KEY,
      result: [0, 1, 1]
    }, {
      key: LEFT_KEY,
      result: [0, 0, 1]
    }, {
      key: DOWN_KEY,
      result: [0, 0, 0]
    }];
    var wrapper = mount(React.createElement(Provider, {
      value: context
    }, React.createElement(Saturation, null)));
    wrapper.find(StyledCircle).first().simulate('focus');
    wrapper.update();
    values.forEach(function (_ref) {
      var key = _ref.key,
          result = _ref.result;
      wrapper.find(StyledColor).first().simulate('keydown', {
        keyCode: key
      });
      wrapper.update();
      expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
        hsv: result
      }));
    });
  });
});