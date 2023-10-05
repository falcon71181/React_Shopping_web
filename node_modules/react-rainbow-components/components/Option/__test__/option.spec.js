"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = require("..");

var _header = _interopRequireDefault(require("../styled/header"));

var _item = _interopRequireDefault(require("../styled/item"));

var _checkmark = _interopRequireDefault(require("../checkmark"));

var _iconContainer = _interopRequireDefault(require("../styled/iconContainer"));

describe('<Option />', function () {
  var optionRegisterFn;
  var optionUnregisterFn;
  var hoverFn;
  var clickFn;
  beforeEach(function () {
    jest.useFakeTimers();
    optionRegisterFn = jest.spyOn(_.OptionItem.prototype, 'register');
    optionUnregisterFn = jest.spyOn(_.OptionItem.prototype, 'unregister');
    hoverFn = jest.fn();
    clickFn = jest.fn();
  });
  afterEach(function () {
    optionRegisterFn.mockClear();
    optionUnregisterFn.mockClear();
    hoverFn.mockClear();
    clickFn.mockClear();
  });
  it('should render a option header when variant is header', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      label: "Header 1",
      variant: "header"
    }));
    expect(component.find(_header["default"]).exists()).toBe(true);
  });
  it('should render a regular option when variant is default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      label: "option 1",
      name: "option1"
    }));
    expect(component.find(_item["default"]).exists()).toBe(true);
  });
  it('should render a regular option when type name is string or number', function () {
    var names = ['option 1', 1];
    names.forEach(function (name) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
        label: "option 1",
        name: name
      }));
      expect(component.find(_item["default"]).exists()).toBe(true);
    });
  });
  it('should return null when type name is not string or number', function () {
    var names = [{}, [], undefined, null, true, new Date()];
    names.forEach(function (name) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
        label: "option 1",
        name: name
      }));
      expect(component).toEqual({});
    });
  });
  it('should not register when is disabled', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      disabled: true
    }));
    expect(optionRegisterFn).not.toHaveBeenCalled();
  });
  it('should not register when is variant header', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      variant: "header"
    }));
    expect(optionRegisterFn).not.toHaveBeenCalled();
  });
  it('should not register when is name passed is not a string', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: {},
      currentValueName: "option1"
    }));
    expect(optionRegisterFn).not.toHaveBeenCalled();
  });
  it('should register when mount', function () {
    (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: "option1"
    }));
    expect(optionRegisterFn).toHaveBeenCalled();
  });
  it('should register when deselected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      label: "Option 1",
      name: "option1",
      currentValueName: "option1"
    }));
    component.setProps({
      currentValueName: undefined
    });
    expect(optionRegisterFn).toHaveBeenCalled();
  });
  it('should unregister when unmount', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      label: "option 1",
      name: "option1"
    }));
    component.unmount();
    expect(optionUnregisterFn).toHaveBeenCalled();
  });
  it('should fire an event with the right data when click the option', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var data, component;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              name: 'option1',
              label: 'option 1'
            };
            component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
              label: "option 1",
              name: "option1",
              privateOnClick: clickFn
            }));
            jest.clearAllTimers();
            component.find('li').simulate('mousedown');
            jest.runAllTimers();
            expect(clickFn).toHaveBeenCalledWith(expect.any(Object), data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not fire an event when click the option but is disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      disabled: true,
      label: "option 1",
      name: "option1",
      privateOnClick: clickFn
    }));
    component.find('li').simulate('mousedown');
    expect(clickFn).not.toHaveBeenCalled();
  });
  it('should fire an event with the right data when hover the option', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_.OptionItem, {
      label: "option 1",
      name: "option1",
      privateOnHover: hoverFn
    }));
    component.find('li').simulate('mouseEnter');
    expect(hoverFn).toHaveBeenCalledWith(undefined, 'option1');
  });
  it('should not fire an event when hover the option but is disabled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      disabled: true,
      label: "option 1",
      name: "option1",
      privateOnHover: hoverFn
    }));
    component.find('li').simulate('mouseEnter');
    expect(hoverFn).not.toHaveBeenCalled();
  });
  it('should render a checkmark icon when selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: "option1",
      currentValues: ['option1']
    }));
    expect(component.find(_checkmark["default"]).exists()).toBe(true);
  });
  it('should call privateUnregisterChild with the right parameters on unmount', function () {
    var privateUnregisterChildMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: "option1",
      currentValueName: "option1",
      privateUnregisterChild: privateUnregisterChildMockFn
    }));
    component.unmount();
    jest.runAllTimers();
    expect(privateUnregisterChildMockFn).toHaveBeenCalledTimes(1);
    expect(privateUnregisterChildMockFn.mock.calls[0][1]).toBe('option1');
  });
  it('should render a default option', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: "option-1"
    }));
    expect(component.find(_iconContainer["default"]).exists()).toBe(true);
  });
  it('should render the component option passed', function () {
    var CustomOption = function CustomOption() {
      return _react["default"].createElement("div", null);
    };

    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      name: "option-1",
      component: CustomOption
    }));
    expect(component.find(CustomOption).exists()).toBe(true);
  });
  it('should pass the right props to the component option passed', function () {
    var CustomOption = function CustomOption() {
      return _react["default"].createElement("div", null);
    };

    var component = (0, _enzyme.mount)(_react["default"].createElement(_.OptionItem, {
      label: "Option 1",
      name: "option-1",
      disabled: true,
      customProp: "123",
      component: CustomOption
    }));
    expect(component.find(CustomOption).props()).toStrictEqual({
      customProp: '123',
      disabled: true,
      icon: undefined,
      iconPosition: undefined,
      isActive: false,
      isSelected: undefined,
      label: 'Option 1',
      value: undefined,
      variant: undefined
    });
  });
});