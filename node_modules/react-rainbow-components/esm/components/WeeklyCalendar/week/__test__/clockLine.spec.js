import React from 'react';
import { mount } from 'enzyme';
import ClockLine from '../clockLine';
import StyledClockLine from '../styled/clockLine';
jest.mock('../../hooks', function () {
  return {
    useTimer: function useTimer() {
      return new Date().setHours(8, 0, 0, 0);
    }
  };
});
describe('<ClockLine />', function () {
  it('should render on top 320px when the clock is 8:00 AM', function () {
    var wrapper = mount(React.createElement(ClockLine, null));
    expect(wrapper.find(StyledClockLine).prop('style').top).toBe('320px');
  });
});