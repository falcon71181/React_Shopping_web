"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _styled = require("../styled");

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _weekDayItems = _interopRequireDefault(require("../weekDayItems"));

var _hooks = require("../../../libs/hooks");

jest.mock('../../../libs/hooks/useUniqueIdentifier', function () {
  return jest.fn(function () {
    return 'week-day-items';
  });
});
describe('<WeekDayPicker />', function () {
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      as: 'legend',
      variant: 'default',
      size: 'medium'
    });
  });
  it('should render bottom help text when bottomHelpText prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "My help text"
    }));
    expect(component.find(_styled.StyledHelpText).length).toBe(1);
  });
  it('should render required asterisk when required prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "My label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').exists()).toBe(true);
  });
  it('should have input type as checkbox when multiple is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      multiple: true
    }));
    expect(component.find('input').at(0).prop('type')).toBe('checkbox');
  });
  it('should have input type as radio when multiple is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('input').at(0).prop('type')).toBe('radio');
  });
  it('should render an error text when error prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      error: "error"
    }));
    expect(component.find(_errorText["default"]).exists()).toBe(true);
  });
  it('should have the opposite days disabled when a list of availableDates is sent', function () {
    var weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var availableDates = ['wednesday', 'friday'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      availableDates: availableDates
    }));
    weekDays.forEach(function (weekDay, index) {
      var isDisabled = component.find('input').at(index).prop('disabled');
      var shouldDisable = !availableDates.includes(weekDay);

      if (shouldDisable) {
        expect(isDisabled).toBe(true);
      } else {
        expect(isDisabled).toBe(false);
      }
    });
  });
  it('should have readonly prop as true when readOnly param is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      readOnly: true
    }));
    expect(component.find('input').at(0).prop('readOnly')).toBe(true);
  });
  it('should change checked properly status for single day selection', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "friday"
    }));
    component.setProps({
      value: 'monday'
    });
    expect(component.find('input').at(5).prop('checked')).toBe(false);
    expect(component.find('input').at(1).prop('checked')).toBe(true);
  });
  it('should change checked status properly for multiple selection', function () {
    var value = ['saturday'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      multiple: true
    }));
    component.setProps({
      value: ['sunday', 'monday']
    });
    expect(component.find('input').at(0).prop('checked')).toBe(true);
    expect(component.find('input').at(1).prop('checked')).toBe(true);
    expect(component.find('input').at(6).prop('checked')).toBe(false);
  });
  it('should call useUniqueIdentifier 8 times for the ids generations', function () {
    _hooks.useUniqueIdentifier.mockClear();

    (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(_hooks.useUniqueIdentifier).toHaveBeenCalledTimes(8);
  });
  it('should have default name when name params is not sent', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find(_weekDayItems["default"]).at(0).prop('name')).toBe('week-day-items');
  });
  it('should not run onChange when checkbox change is triggered and readOnly is true', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn,
      readOnly: true
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should not run onChange when input change is triggered and disabled is true', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn,
      disabled: true
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should run onChange with the right value when multiple is not set', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "monday",
      onChange: onChangeFn
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('sunday');
  });
  it('should run onChange with the right sorted values when multiple is true', function () {
    var onChangeFn = jest.fn();
    var value = ['friday', 'monday'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      multiple: true,
      onChange: onChangeFn
    }));
    component.find('input').at(0).simulate('change', {
      target: {
        checked: true,
        value: 'sunday'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['sunday', 'monday', 'friday']);
  });
});