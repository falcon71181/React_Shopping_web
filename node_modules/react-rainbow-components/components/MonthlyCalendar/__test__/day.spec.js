"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _day = _interopRequireDefault(require("../day"));

var _dayLabel = _interopRequireDefault(require("../styled/dayLabel"));

var _day2 = _interopRequireDefault(require("../styled/day"));

var _dayAdjacent = _interopRequireDefault(require("../styled/dayAdjacent"));

var _dayContent = _interopRequireDefault(require("../styled/dayContent"));

var _context = require("../context");

describe('Day', function () {
  it('should render the right day', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: undefined
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find(_dayLabel["default"]).text()).toBe('24');
  });
  it('should call onChange with the right date when click the button', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var onSelectMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: undefined
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      onSelect: onSelectMockFn
    }), ","));
    component.find(_day2["default"]).simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith({
      date: date
    });
  });
  it('should render the right day when is adjacent', function () {
    var date = new Date('03/29/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: undefined
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(_dayAdjacent["default"]).text()).toBe('29');
  });
  it('should render the right day when is maxDate is less than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var maxDate = new Date('04/23/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: undefined
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      maxDate: maxDate
    }), ","));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(_dayAdjacent["default"]).text()).toBe('24');
  });
  it('should render the right day when is minDate is greater than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var minDate = new Date('04/25/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: undefined
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      minDate: minDate
    }), ","));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(_dayAdjacent["default"]).text()).toBe('24');
  });
  it('should call dateComponent with date as param', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var dateComponentMock = jest.fn(function () {});
    (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: dateComponentMock
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(dateComponentMock).toHaveBeenCalledWith(date);
  });
  it('should render the result of dateComponent', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_context.Provider, {
      value: {
        dateComponent: function dateComponent() {
          return _react["default"].createElement("div", null, "date render func");
        }
      }
    }, _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find(_dayContent["default"]).text()).toBe('date render func');
  });
});