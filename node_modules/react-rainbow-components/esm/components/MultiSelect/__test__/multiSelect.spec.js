import React from 'react';
import { mount } from 'enzyme';
import MultiSelect from '..';
import Option from '../../Option';
import HelpText from '../../Input/styled/helpText';
import ErrorText from '../../Input/styled/errorText';
import Label from '../../Input/label/labelText';
import InternalDropdown from '../../InternalDropdown';
import { StyledChip, StyledPlaceholder, StyledText, StyledButtonIcon } from '../styled';
describe('<MultiSelect />', function () {
  it('should render Label when label prop is passed', function () {
    var component = mount(React.createElement(MultiSelect, {
      label: "Label"
    }));
    expect(component.find(Label).exists()).toBe(true);
  });
  it('should render a HelpText when bottomHelpText prop is passed', function () {
    var component = mount(React.createElement(MultiSelect, {
      bottomHelpText: "Help text"
    }));
    expect(component.find(HelpText).exists()).toBe(true);
  });
  it('should render a ErrorText when error prop is passed', function () {
    var component = mount(React.createElement(MultiSelect, {
      error: "Error text"
    }));
    expect(component.find(ErrorText).exists()).toBe(true);
  });
  it('should render the placeholder when there is no selected items', function () {
    var component = mount(React.createElement(MultiSelect, {
      placeholder: "Placeholder text"
    }));
    expect(component.find(StyledPlaceholder).exists()).toBe(true);
  });
  it('should render the default variant', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = mount(React.createElement(MultiSelect, {
      value: value
    }));
    expect(component.find(StyledText).exists()).toBe(true);
  });
  it('should render the correct amount of chips', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = mount(React.createElement(MultiSelect, {
      value: value,
      variant: "chip"
    }, React.createElement(Option, {
      name: "first",
      label: "First"
    }), React.createElement(Option, {
      name: "second",
      label: "Second"
    })));
    expect(component.find(StyledChip).length).toBe(2);
  });
  it('should fire change event when an item is removed', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }];
    var mockOnChange = jest.fn();
    var component = mount(React.createElement(MultiSelect, {
      value: value,
      variant: "chip",
      onChange: mockOnChange
    }, React.createElement(Option, {
      name: "first",
      label: "First"
    }), React.createElement(Option, {
      name: "second",
      label: "Second"
    })));
    var button = component.find(StyledChip).find('button');
    button.simulate('click');
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });
  it('should fire focus event', function () {
    var mockOnFocus = jest.fn();
    var component = mount(React.createElement(MultiSelect, {
      onFocus: mockOnFocus
    }));
    component.find(StyledButtonIcon).simulate('focus');
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });
  it('should fire blur event', function () {
    var mockOnBlur = jest.fn();
    var component = mount(React.createElement(MultiSelect, {
      onBlur: mockOnBlur
    }));
    component.find(StyledButtonIcon).simulate('blur');
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
  it('should not render the buttons when readOnly', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = mount(React.createElement(MultiSelect, {
      value: value,
      variant: "chip",
      readOnly: true
    }, React.createElement(Option, {
      name: "first",
      label: "First"
    }), React.createElement(Option, {
      name: "second",
      label: "Second"
    })));
    expect(component.find('button').exists()).toBe(false);
  });
  it('should not render the buttons when disabled', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = mount(React.createElement(MultiSelect, {
      value: value,
      variant: "chip",
      disabled: true
    }, React.createElement(Option, {
      name: "first",
      label: "First"
    }), React.createElement(Option, {
      name: "second",
      label: "Second"
    })));
    expect(component.find('button').exists()).toBe(false);
  });
  it('should enable search when enableSearch prop is passed', function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      }];
    });
    Element.prototype.scrollTo = jest.fn();
    var component = mount(React.createElement(MultiSelect, {
      enableSearch: true
    }, React.createElement(Option, {
      name: "first",
      label: "First"
    }), React.createElement(Option, {
      name: "second",
      label: "Second"
    })));
    component.find(StyledButtonIcon).simulate('click');
    expect(component.find(InternalDropdown).prop('enableSearch')).toBe(true);
  });
});