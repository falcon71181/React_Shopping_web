import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import Hours from '../hours';
import StyledClock from '../styled/clock';
import StyledTitleHour from '../styled/titleHour';
jest.mock('../hooks/useTimer', function () {
  return jest.fn().mockReturnValue(new Date()).mockReturnValueOnce(new Date().setHours(3, 10, 0, 0)).mockReturnValueOnce(new Date().setHours(3, 16, 0, 0)).mockReturnValueOnce(new Date().setHours(3, 0, 0, 0)).mockReturnValueOnce(new Date().setHours(8, 0, 0, 0));
});
describe('<Hours />', function () {
  it('should hidden 3 AM when clock is 3:10 AM', function () {
    var wrapper = mount(React.createElement(Hours, null));
    expect(wrapper.find('ListHours').find({
      visible: false
    }).find(StyledTitleHour).text()).toBe('3 AM');
  });
  it('should render all visible hours  when clock is 3:15 AM', function () {
    var wrapper = mount(React.createElement(Hours, null));
    wrapper.find(StyledTitleHour).forEach(function (item) {
      expect(item.prop('visible')).toBe(true);
    });
  });
  it('should render clock 3:00 AM when the clock is 3:00 AM', function () {
    var wrapper = mount(React.createElement(Hours, null));
    expect(wrapper.find(StyledClock).text()).toBe('3:00 AM');
  });
  it('should render on top 312px when the clock is 8:00 AM', function () {
    var wrapper = mount(React.createElement(Hours, null));
    expect(wrapper.find(StyledClock).prop('style').top).toBe('312px');
  });
  it('should call setToday when today is differrent to day of clock', function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(done) {
      var today, setTodayMockMockFn;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              today = new Date();
              today.setDate(today.getDate() - 1);
              setTodayMockMockFn = jest.fn(function () {});
              mount(React.createElement(Hours, {
                today: today,
                setToday: setTodayMockMockFn
              }));
              setTimeout(function () {
                expect(setTodayMockMockFn).toHaveBeenCalled();
                done();
              }, 300);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('should render the hours of the day', function () {
    var wrapper = mount(React.createElement(Hours, null));
    var listHoursWrapper = wrapper.find('ListHours').children();
    listHoursWrapper.forEach(function (item, index) {
      var ampm = index < 12 ? 'AM' : 'PM';
      var hour = index;

      if (index === 0) {
        hour = 12;
      }

      if (index > 12) {
        hour = index - 12;
      }

      expect(item.find(StyledTitleHour).text()).toBe("".concat(hour, " ").concat(ampm));
    });
  });
});