"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _ = _interopRequireDefault(require(".."));

var _Option = _interopRequireDefault(require("../../Option"));

var _Spinner = _interopRequireDefault(require("../../Spinner"));

jest.useFakeTimers();
jest.mock('../helpers/scrollTo', function () {
  return jest.fn();
});
describe('InternalDropdown', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  it('should fire onChange when option is selected by click', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      onChange: onChangeFn
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.find('li').at(1).simulate('mousedown');
    jest.runAllTimers();
    expect(onChangeFn).toHaveBeenCalledWith({
      icon: null,
      label: 'Option 2',
      name: 'option2',
      value: undefined
    });
  });
  it('should fire onChange with the right data when select one option and multiple is passed and there are no options selected', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.find('li').at(2).simulate('mousedown');
    jest.runAllTimers();
    expect(onChangeFn).toHaveBeenCalledWith([{
      icon: null,
      label: 'Option 3',
      name: 'option3',
      value: undefined
    }]);
  });
  it('should fire onChange with the right data when select one option and multiple is passed and have other options selected', function () {
    var onChangeFn = jest.fn();
    var value = [{
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true,
      value: value
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.find('li').at(1).simulate('mousedown');
    jest.runAllTimers();
    expect(onChangeFn).toHaveBeenCalledWith([{
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    }, {
      icon: null,
      label: 'Option 2',
      name: 'option2',
      value: undefined
    }]);
  });
  it('should fire onChange with the right data when deselecting one option and multiple is passed and have other options selected', function () {
    var onChangeFn = jest.fn();
    var value = [{
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    }, {
      icon: null,
      label: 'Option 2',
      name: 'option2',
      value: undefined
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true,
      value: value
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    var optionsSelected = [{
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    }];
    component.find('li').at(1).simulate('mousedown');
    jest.runAllTimers();
    expect(onChangeFn).toHaveBeenCalledWith(optionsSelected);
  });
  it('should fire onChange when option is selected by pressing ENTER key', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      onChange: onChangeFn
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    jest.runAllTimers();
    component.find('li').at(1).simulate('keyDown', {
      keyCode: _constants.ENTER_KEY
    });
    expect(onChangeFn).toHaveBeenCalledWith({
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    });
  });
  it('should render svg and input elements when enableSearch is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      enableSearch: true
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('SearchIcon').exists()).toBe(true);
    expect(component.find('input[type="search"]').exists()).toBe(true);
  });
  it('should not render svg and input elements if enableSearch is not passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist"
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('SearchIcon').exists()).toBe(false);
    expect(component.find('input[type="search"]').exists()).toBe(false);
  });
  it('should call onSearch when passed and enableSearch is true', function () {
    var onSearchFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      enableSearch: true,
      onSearch: onSearchFn
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    component.find('input[type="search"]').simulate('change', {
      target: {
        value: 'Test'
      }
    });
    expect(onSearchFn).toHaveBeenCalledWith('Test');
  });
  it('should render loading icon when isLoading is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist",
      isLoading: true
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find(_Spinner["default"]).exists()).toBe(true);
  });
  it('should div with role="listbox" have aria-activedescendant = to id to option on focus', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Picklist"
    }, _react["default"].createElement(_Option["default"], {
      label: "Option 1",
      name: "option1"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 2",
      name: "option2"
    }), _react["default"].createElement(_Option["default"], {
      label: "Option 3",
      name: "option3"
    })));
    var divOption = component.find('li').at(1);
    divOption.simulate('mouseenter');
    var divListbox = component.find('div[role="listbox"]');
    expect(divListbox.prop('aria-activedescendant')).toBe('option2');
  });
});