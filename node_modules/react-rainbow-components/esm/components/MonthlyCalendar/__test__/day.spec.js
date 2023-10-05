import React from 'react';
import { mount } from 'enzyme';
import Day from '../day';
import StyledDayLabel from '../styled/dayLabel';
import StyledDay from '../styled/day';
import StyledDayAdjacent from '../styled/dayAdjacent';
import StyledDayContent from '../styled/dayContent';
import { Provider } from '../context';
describe('Day', function () {
  it('should render the right day', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: undefined
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find(StyledDayLabel).text()).toBe('24');
  });
  it('should call onChange with the right date when click the button', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: undefined
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth,
      onSelect: onSelectMockFn
    }), ","));
    component.find(StyledDay).simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith({
      date: date
    });
  });
  it('should render the right day when is adjacent', function () {
    var date = new Date('03/29/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: undefined
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(StyledDayAdjacent).text()).toBe('29');
  });
  it('should render the right day when is maxDate is less than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var maxDate = new Date('04/23/2019');
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: undefined
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth,
      maxDate: maxDate
    }), ","));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(StyledDayAdjacent).text()).toBe('24');
  });
  it('should render the right day when is minDate is greater than date', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var minDate = new Date('04/25/2019');
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: undefined
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth,
      minDate: minDate
    }), ","));
    expect(component.find('td').prop('aria-selected')).toBe('false');
    expect(component.find('td').find(StyledDayAdjacent).text()).toBe('24');
  });
  it('should call dateComponent with date as param', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var dateComponentMock = jest.fn(function () {});
    mount(React.createElement(Provider, {
      value: {
        dateComponent: dateComponentMock
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(dateComponentMock).toHaveBeenCalledWith(date);
  });
  it('should render the result of dateComponent', function () {
    var date = new Date('04/24/2019');
    var firstDayMonth = new Date('04/01/2019');
    var component = mount(React.createElement(Provider, {
      value: {
        dateComponent: function dateComponent() {
          return React.createElement("div", null, "date render func");
        }
      }
    }, React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth
    })));
    expect(component.find(StyledDayContent).text()).toBe('date render func');
  });
});