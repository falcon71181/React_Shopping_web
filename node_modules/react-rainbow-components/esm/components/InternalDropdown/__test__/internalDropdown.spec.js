import React from 'react';
import { mount } from 'enzyme';
import { ENTER_KEY } from '../../../libs/constants';
import InternalDropdown from '..';
import Option from '../../Option';
import Spinner from '../../Spinner';
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      onChange: onChangeFn
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true,
      value: value
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      onChange: onChangeFn,
      multiple: true,
      value: value
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      onChange: onChangeFn
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
      label: "Option 3",
      name: "option3"
    })));
    jest.runAllTimers();
    component.find('li').at(1).simulate('keyDown', {
      keyCode: ENTER_KEY
    });
    expect(onChangeFn).toHaveBeenCalledWith({
      icon: null,
      label: 'Option 1',
      name: 'option1',
      value: undefined
    });
  });
  it('should render svg and input elements when enableSearch is passed', function () {
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      enableSearch: true
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('SearchIcon').exists()).toBe(true);
    expect(component.find('input[type="search"]').exists()).toBe(true);
  });
  it('should not render svg and input elements if enableSearch is not passed', function () {
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist"
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('SearchIcon').exists()).toBe(false);
    expect(component.find('input[type="search"]').exists()).toBe(false);
  });
  it('should call onSearch when passed and enableSearch is true', function () {
    var onSearchFn = jest.fn();
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      enableSearch: true,
      onSearch: onSearchFn
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
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
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist",
      isLoading: true
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find(Spinner).exists()).toBe(true);
  });
  it('should div with role="listbox" have aria-activedescendant = to id to option on focus', function () {
    var component = mount(React.createElement(InternalDropdown, {
      label: "Picklist"
    }, React.createElement(Option, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(Option, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(Option, {
      label: "Option 3",
      name: "option3"
    })));
    var divOption = component.find('li').at(1);
    divOption.simulate('mouseenter');
    var divListbox = component.find('div[role="listbox"]');
    expect(divListbox.prop('aria-activedescendant')).toBe('option2');
  });
});