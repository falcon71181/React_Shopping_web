"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

describe('WeeklyCalendar', function () {
  it('should render the component when pass falsy values', function () {
    var values = ['', undefined, null, 0];
    values.forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        currentWeek: value
      }));
      expect(component.exists()).toBe(true);
    });
  });
  it('should render the right week', function () {
    var value = new Date('04/05/2020');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: value
    }));
    expect(component.find('h3[data-id="week"]').text()).toBe('Apr 5 - 11, 2020');
  });
  it('should set to disable the prev week button when minDate is greater than prev week date', function () {
    var value = new Date('04/10/2020');
    var minDate = new Date('04/06/2020');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: value,
      minDate: minDate
    }));
    var prevWeekButton = component.find(_ButtonIcon["default"]).at(0);
    expect(prevWeekButton.prop('disabled')).toBe(true);
  });
  it('should set to disable the next week button when maxDate is less than next week date', function () {
    var value = new Date('04/08/2020');
    var maxDate = new Date('04/11/2020');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: value,
      maxDate: maxDate
    }));
    var prevWeekButton = component.find(_ButtonIcon["default"]).at(1);
    expect(prevWeekButton.prop('disabled')).toBe(true);
  });
  it('should render the right week when value is updated', function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(done) {
      var value, component;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expect.assertions(1);
              value = new Date('04/05/2020');
              component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
                currentWeek: value
              }));
              component.setProps({
                currentWeek: new Date('04/28/2020')
              });
              setTimeout(function () {
                expect(component.find('h3[data-id="week"]').text()).toBe('Apr 26 - May 2, 2020');
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
  it('should fire onWeekChange when the prev week button is clicked', function () {
    var week = new Date('04/12/2020');
    var prevWeek = {
      week: new Date('04/05/2020  00:00:00:000')
    };
    var onWeekChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: week,
      onWeekChange: onWeekChangeMockFn
    }));
    var prevWeekButton = component.find(_ButtonIcon["default"]).at(0);
    prevWeekButton.simulate('click');
    expect(onWeekChangeMockFn).toHaveBeenCalledWith(prevWeek);
  });
  it('should fire onWeekChange with right params when the next week button is clicked', function () {
    var week = new Date('04/14/2020');
    var nextWeek = {
      week: new Date('04/19/2020  00:00:00:000')
    };
    var onWeekChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: week,
      onWeekChange: onWeekChangeMockFn
    }));
    var nextWeekButton = component.find(_ButtonIcon["default"]).at(1);
    nextWeekButton.simulate('click');
    expect(onWeekChangeMockFn).toHaveBeenCalledWith(nextWeek);
  });
  it('should fire onWeekChange when the year is changed', function () {
    var currentWeek = new Date('04/5/2019');
    var newWeek = {
      week: new Date('03/31/2022 00:00:00:000')
    };
    var onWeekChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      currentWeek: currentWeek,
      onWeekChange: onWeekChangeMockFn
    }));
    var select = component.find('Select');
    expect(select.prop('value')).toBe(2019);
    component.find('select').simulate('change', {
      target: {
        value: 2022
      }
    });
    expect(onWeekChangeMockFn).toHaveBeenCalledWith(newWeek);
  });
});