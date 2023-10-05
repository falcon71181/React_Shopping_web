import React from 'react';
import { mount } from 'enzyme';
import CodeInput from '..';
import InputItems from '../inputItems';
import InputItem from '../inputItem';
import { StyledErrorMessage, StyledHelpText } from '../styled';
import useFocusedIndexState from '../hooks/useFocusedIndexState';
import usePreviousIndex from '../hooks/usePreviousIndex';
import useValueState from '../hooks/useValueState';
import getNormalizedValue from '../helpers/getNormalizedValue';
import getNumbersFromClipboard from '../helpers/getNumbersFromClipboard';
jest.mock('../hooks/useFocusedIndexState', function () {
  return jest.fn(function () {
    return 0;
  });
});
jest.mock('../hooks/usePreviousIndex', function () {
  return jest.fn(function () {
    return undefined;
  });
});
jest.mock('../hooks/useValueState', function () {
  return jest.fn(function () {
    return ['', '', '', ''];
  });
});
jest.mock('../helpers/getNormalizedValue', function () {
  return jest.fn(function () {
    return '';
  });
});
jest.mock('../helpers/getNumbersFromClipboard', function () {
  return jest.fn(function () {
    return '';
  });
});
describe('<CodeInput />', function () {
  it('should have value length as 6 when length is 6', function () {
    useValueState.mockImplementation(function () {
      return ['', '', '', '', '', ''];
    });
    var component = mount(React.createElement(CodeInput, {
      length: 6
    }));
    expect(component.find(InputItems).prop('value').length).toBe(6);
  });
  it('should pass the right props to the Label component', function () {
    var component = mount(React.createElement(CodeInput, {
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
  it('should have bottomHelpText rendered if is sent as param', function () {
    var component = mount(React.createElement(CodeInput, {
      bottomHelpText: "help-text-test"
    }));
    expect(component.find(StyledHelpText).exists()).toBe(true);
  });
  it('should not have bottomHelpText rendered when bottomHelpText is empty', function () {
    var component = mount(React.createElement(CodeInput, null));
    expect(component.find(StyledHelpText).exists()).toBe(false);
  });
  it('should have error rendered if is sent as param', function () {
    var component = mount(React.createElement(CodeInput, {
      error: "error-test"
    }));
    expect(component.find(StyledErrorMessage).exists()).toBe(true);
  });
  it('should not have error rendered if is not sent as param', function () {
    var component = mount(React.createElement(CodeInput, null));
    expect(component.find(StyledErrorMessage).exists()).toBe(false);
  });
  it('should keep isActive as true on active input whenever any other input is clicked', function () {
    var component = mount(React.createElement(CodeInput, null));
    var input0 = component.find(InputItem).at(0);
    var input2 = component.find(InputItem).at(2);
    input2.simulate('click');
    expect(input0.prop('isActive')).toBe(true);
    expect(input2.prop('isActive')).toBe(false);
  });
  it('should set isActive as true over the second input when first input is filled', function () {
    var component = mount(React.createElement(CodeInput, null));
    useValueState.mockImplementation(function () {
      return ['1', '', '', ''];
    });
    useFocusedIndexState.mockImplementation(function () {
      return 1;
    });
    component.setProps({
      value: '1'
    });
    expect(component.find(InputItem).at(0).prop('isActive')).toBe(false);
    expect(component.find(InputItem).at(1).prop('isActive')).toBe(true);
  });
  it('should keep isActive as true on the last input when all inputs are filled an last input changes', function () {
    var component = mount(React.createElement(CodeInput, null));
    useValueState.mockImplementation(function () {
      return ['1', '2', '3', '4'];
    });
    useFocusedIndexState.mockImplementation(function () {
      return 3;
    });
    component.setProps({
      value: '1234'
    });
    expect(component.find(InputItem).at(3).prop('isActive')).toBe(true);
  });
  it('should call onChange with the number value when input value changes and is number', function () {
    getNormalizedValue.mockImplementation(function () {
      return '3';
    });
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(CodeInput, {
      onChange: onChangeFn
    }));
    var inputIndex = 0;
    component.find(InputItems).props().onChange('3', inputIndex);
    expect(onChangeFn).toHaveBeenCalledWith('3');
  });
  it('should not call onChange when input value changes and is not a number', function () {
    getNormalizedValue.mockImplementation(function () {
      return '';
    });
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(CodeInput, {
      onChange: onChangeFn
    }));
    var inputIndex = 0;
    component.find(InputItems).props().onChange('A', inputIndex);
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should call getNumbersFromClipboard with the copy and pasted value', function () {
    getNumbersFromClipboard.mockClear();
    var component = mount(React.createElement(CodeInput, null));
    component.find(InputItem).at(0).props().onPaste({
      clipboardData: {
        getData: function getData() {
          return '12345abcdfe';
        }
      }
    });
    expect(getNumbersFromClipboard).toHaveBeenCalledWith('12345abcdfe');
  });
  it('should call onChange with numbers only when we copy and paste a mixed text and numbers string', function () {
    getNumbersFromClipboard.mockImplementation(function () {
      return '12345';
    });
    var onChangeFn = jest.fn();
    var component = mount(React.createElement(CodeInput, {
      onChange: onChangeFn,
      length: 5
    }));
    component.find(InputItem).at(0).props().onPaste({
      clipboardData: {
        getData: function getData() {
          return '12345abcdfe';
        }
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('12345');
  });
  it('should call getNormalizedValue with the right values when value changes', function () {
    useValueState.mockImplementation(function () {
      return ['1', '2', '', ''];
    });
    var component = mount(React.createElement(CodeInput, {
      value: "12"
    }));
    var inputIndex = 2;
    component.find(InputItems).props().onChange('3', inputIndex);
    expect(getNormalizedValue).toHaveBeenCalledWith('3', 2, ['1', '2', '', '']);
  });
  it('should call useValueState with the right value and length', function () {
    useValueState.mockReset();
    mount(React.createElement(CodeInput, {
      value: "1",
      length: 4
    }));
    expect(useValueState).toHaveBeenCalledWith('1', 4);
  });
  it('should call useFocusedIndexState with the right value and length', function () {
    useValueState.mockReset();
    mount(React.createElement(CodeInput, {
      value: "6",
      length: 3
    }));
    expect(useValueState).toHaveBeenCalledWith('6', 3);
  });
  it('should call usePreviousIndex with the right focusedIndex value', function () {
    usePreviousIndex.mockReset();
    useFocusedIndexState.mockImplementation(function () {
      return 2;
    });
    mount(React.createElement(CodeInput, {
      value: "12"
    }));
    expect(usePreviousIndex).toHaveBeenCalledWith(2);
  });
});