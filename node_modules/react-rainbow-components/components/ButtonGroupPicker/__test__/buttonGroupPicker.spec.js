"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../index");

var _index2 = _interopRequireDefault(require("../../ButtonOption/index"));

var _styled = require("../styled");

var _context = require("../context");

jest.mock('../../../libs/utils/uniqueId', function () {
  return jest.fn(function () {
    return 'unique-error-id';
  });
});
describe('<ButtonGroupPicker />', function () {
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      bottomHelpText: "My help text"
    }));
    expect(component.find('div[children="My help text"]').length).toBe(1);
  });
  it('should render required asterisk when required prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      label: "My label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').exists()).toBe(true);
  });
  it('should pass type checkbox in context when multiple is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Component, {
      multiple: true
    }));
    var context = component.find(_context.Provider).prop('value');
    expect(context.type).toBe('checkbox');
  });
  it('should pass type radio in context when multiple is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Component, null));
    var context = component.find(_context.Provider).prop('value');
    expect(context.type).toBe('radio');
  });
  it('should render an error text when error prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      error: "error"
    }));
    expect(component.find(_styled.StyledErrorText).exists()).toBe(true);
  });
  it('should set the error message id as id for the error text', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      error: "error"
    }));
    var errorElement = component.find(_styled.StyledErrorText).first();
    expect(errorElement.prop('id')).toBe('unique-error-id');
  });
  it('should pass the error message id to context', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Component, {
      error: "error"
    }));
    var context = component.find(_context.Provider).prop('value');
    expect(context.ariaDescribedBy).toBe('unique-error-id');
  });
  it('should fire onchange with the right value when multiple is false and option is checked', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      value: "option1",
      onChange: onChangeFn
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_index2["default"], {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('option2');
  });
  it('should fire onchange with an array of values including the value checked when multiple is true', function () {
    var onChangeFn = jest.fn();
    var value = ['option1'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      value: value,
      onChange: onChangeFn,
      multiple: true
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_index2["default"], {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option2']);
  });
  it('should fire onchange with an array containing the value checked when multiple is true and nothing is selected', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      onChange: onChangeFn,
      multiple: true
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_index2["default"], {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: true,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option2']);
  });
  it('should fire onchange with an array excluding the unchecked value when multiple is true and option is unchecked', function () {
    var onChangeFn = jest.fn();
    var value = ['option1', 'option2'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Component, {
      value: value,
      onChange: onChangeFn,
      multiple: true
    }, _react["default"].createElement(_index2["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_index2["default"], {
      label: "Option 2",
      name: "option2"
    })));
    component.find('input').at(1).simulate('change', {
      target: {
        checked: false,
        value: 'option2'
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1']);
  });
});