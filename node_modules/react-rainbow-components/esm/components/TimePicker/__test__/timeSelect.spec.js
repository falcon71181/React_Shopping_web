import React from 'react';
import { mount } from 'enzyme';
import TimeSelect from '../timeSelect';
import { LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, DELETE_KEY, ENTER_KEY } from '../../../libs/constants';
import ButtonIcon from '../../ButtonIcon';
jest.mock('./../helpers/getDefaultAmPm', function () {
  return jest.fn(function () {
    return 'AM';
  });
});
describe('<TimeSelect/>', function () {
  it('should set hour value to "01" when hour input is focused and press up key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('01');
  });
  it('should set hour value to "12" when hour input is focused and press down key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    var container = component.find('div[role="presentation"]');
    hourInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: DOWN_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('12');
  });
  it('should set hour value to "12" when hour input has 00 as value and press down key while hour input is focused', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    var container = component.find('div[role="presentation"]');
    hourInput.simulate('focus');
    hourInput.simulate('change', {
      target: {
        value: '00'
      }
    });
    container.simulate('keyDown', {
      keyCode: DOWN_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('12');
  });
  it('should set hour value to "05" when hour input is focused and press up key for 5 times', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    var container = component.find('div[role="presentation"]');
    hourInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('05');
  });
  it('should set the right hour value and focus minutes input', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var values = ['000', '001', '002', '005', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '2', '3', '6', '9'];
    var expects = ['12', '01', '02', '05', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '02', '03', '06', '09'];
    values.forEach(function (value, index) {
      var hourInput = component.find('input').at(0);
      hourInput.simulate('focus');
      hourInput.simulate('change', {
        target: {
          value: value
        }
      });
      var focusedElementDataId = document.activeElement.getAttribute('data-id');
      expect(component.find('input').at(0).prop('value')).toBe(expects[index]);
      expect(focusedElementDataId).toBe('minutes');
    });
  });
  it('should set hour value to "01" when hour input is focused and click up button', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var upButton = component.find(ButtonIcon).at(0);
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    upButton.simulate('click');
    expect(component.find('input').at(0).prop('value')).toBe('01');
  });
  it('should set hour value to "02" when hour input is focused, click up button and then type "2"', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var upButton = component.find(ButtonIcon).at(0);
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    upButton.simulate('click');
    hourInput.simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(component.find('input').at(0).prop('value')).toBe('02');
  });
  it('should set hour value to "12" when hour input is focused and click down button', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var downButton = component.find(ButtonIcon).at(1);
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    downButton.simulate('click');
    expect(component.find('input').at(0).prop('value')).toBe('12');
  });
  it('should set hour value to "02" when hour input is focused, click down button and then type "2"', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var downButton = component.find(ButtonIcon).at(1);
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    downButton.simulate('click');
    hourInput.simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(component.find('input').at(0).prop('value')).toBe('02');
  });
  it('should set hour value to "12" when hour input is focused, type 0 and then blur the hour input', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    hourInput.simulate('change', {
      target: {
        value: '0'
      }
    });
    hourInput.simulate('blur');
    expect(component.find('input').at(0).prop('value')).toBe('12');
  });
  it('should set hour value to "12" when press right key after press up key and type 0 while hour input is focused', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    var hourInput = component.find('input').at(0);
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    hourInput.simulate('change', {
      target: {
        value: '00'
      }
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    hourInput.simulate('blur');
    expect(component.find('input').at(0).prop('value')).toBe('12');
  });
  it('should set hour value to "03" and focus the minutes input when type "03" after press up key while hour input is focused', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var container = component.find('div[role="presentation"]');
    var hourInput = component.find('input').at(0);
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    hourInput.simulate('change', {
      target: {
        value: '03'
      }
    });
    expect(component.find('input').at(0).prop('value')).toBe('03');
    expect(focusedElementDataId).toBe('minutes');
  });
  it('should set minutes value to "00" when minutes input is focused and press up key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    var container = component.find('div[role="presentation"]');
    minutesInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    expect(component.find('input').at(1).prop('value')).toBe('00');
  });
  it('should set minutes value to "59" when minutes input is focused and press down key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    var container = component.find('div[role="presentation"]');
    minutesInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: DOWN_KEY
    });
    expect(component.find('input').at(1).prop('value')).toBe('59');
  });
  it('should set minutes value to "02" when minutes input is focused and press up key for 3 times', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    var container = component.find('div[role="presentation"]');
    minutesInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    expect(component.find('input').at(1).prop('value')).toBe('02');
  });
  it('should set the right minutes value and focus ampm input', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var values = ['012', '013', '019', '022', '030', '045', '055', '058', '059', '6', '7', '8', '9'];
    var expects = ['12', '13', '19', '22', '30', '45', '55', '58', '59', '06', '07', '08', '09'];
    values.forEach(function (value, index) {
      var minutesInput = component.find('input').at(1);
      minutesInput.simulate('focus');
      minutesInput.simulate('change', {
        target: {
          value: value
        }
      });
      var focusedElementAriaLabel = document.activeElement.getAttribute('aria-label');
      expect(component.find('input').at(1).prop('value')).toBe(expects[index]);
      expect(focusedElementAriaLabel).toBe('am-pm selector');
    });
  });
  it('should set minutes value to "00" when minutes input is focused and click up button', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var upButton = component.find(ButtonIcon).at(0);
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    upButton.simulate('click');
    expect(component.find('input').at(1).prop('value')).toBe('00');
  });
  it('should set minutes value to "02" when minutes input is focused and click up button and then type "2"', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var upButton = component.find(ButtonIcon).at(0);
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    upButton.simulate('click');
    minutesInput.simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(component.find('input').at(1).prop('value')).toBe('02');
  });
  it('should set minutes value to "59" when minutes input is focused and click down button', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var downButton = component.find(ButtonIcon).at(1);
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    downButton.simulate('click');
    expect(component.find('input').at(1).prop('value')).toBe('59');
  });
  it('should set minutes value to "02" when minutes input is focused and click down button and then type "2"', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var downButton = component.find(ButtonIcon).at(1);
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    downButton.simulate('click');
    minutesInput.simulate('change', {
      target: {
        value: '2'
      }
    });
    expect(component.find('input').at(1).prop('value')).toBe('02');
  });
  it('should focus minutes input when hour input is focused and press right key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    expect(focusedElementDataId).toBe('minutes');
  });
  it('should focus minutes input when ampm input is focused and press left key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: LEFT_KEY
    });
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    expect(focusedElementDataId).toBe('minutes');
  });
  it('should keep the hour input focused when it is focused and press left key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: LEFT_KEY
    });
    container.simulate('keyDown', {
      keyCode: LEFT_KEY
    });
    container.simulate('keyDown', {
      keyCode: LEFT_KEY
    });
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    expect(focusedElementDataId).toBe('hour');
  });
  it('should keep the ampm input focused when it is focused and press right key', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    var focusedElementAriaLabel = document.activeElement.getAttribute('data-id');
    expect(focusedElementAriaLabel).toBe('fieldset-element');
  });
  it('should pass the right defaultValue to AmPmSelect when up or down key is not pressed and does not have value initially', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    hourInput.simulate('change', {
      target: {
        value: 12
      }
    });
    expect(component.find('AmPmSelect').prop('defaultValue')).toBe('AM');
  });
  it('should pass the right value to AmPmSelect when it is focused and up or down key is pressed', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var values = [UP_KEY, DOWN_KEY, UP_KEY, UP_KEY, DOWN_KEY, DOWN_KEY, UP_KEY];
    var expects = ['PM', 'AM', 'PM', 'AM', 'PM', 'AM', 'PM'];
    values.forEach(function (value, index) {
      var container = component.find('div[role="presentation"]');
      container.simulate('keyDown', {
        keyCode: RIGHT_KEY
      });
      container.simulate('keyDown', {
        keyCode: RIGHT_KEY
      });
      container.simulate('keyDown', {
        keyCode: value
      });
      expect(component.find('AmPmSelect').prop('value')).toBe(expects[index]);
    });
  });
  it('should reset hour input when has a value and press delete key while it is focused', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    var container = component.find('div[role="presentation"]');
    hourInput.simulate('change', {
      target: {
        value: '7'
      }
    });
    container.simulate('keyDown', {
      keyCode: DELETE_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('');
  });
  it('should reset minutes input when has a value and press delete key while it is focused', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    var container = component.find('div[role="presentation"]');
    minutesInput.simulate('change', {
      target: {
        value: '20'
      }
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: DELETE_KEY
    });
    expect(component.find('input').at(1).prop('value')).toBe('');
  });
  it('should set hour value to "01" when press up key after reset hour input', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    var container = component.find('div[role="presentation"]');
    hourInput.simulate('change', {
      target: {
        value: '7'
      }
    });
    container.simulate('keyDown', {
      keyCode: DELETE_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    expect(component.find('input').at(0).prop('value')).toBe('01');
  });
  it('should set minutes value to "59" when press down key after reset minutes input', function () {
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    var container = component.find('div[role="presentation"]');
    minutesInput.simulate('change', {
      target: {
        value: '20'
      }
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: DELETE_KEY
    });
    container.simulate('keyDown', {
      keyCode: DOWN_KEY
    });
    expect(component.find('input').at(1).prop('value')).toBe('59');
  });
  it('should call event.stopPropagation when press enter key', function () {
    var stopPropagationMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: ENTER_KEY,
      stopPropagation: stopPropagationMockFn
    });
    expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call event.preventDefault when press enter key', function () {
    var preventDefaultMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: ENTER_KEY,
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call onCloseModal when when press enter key', function () {
    var onCloseModalMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onCloseModal: onCloseModalMockFn
    }));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: ENTER_KEY
    });
    expect(onCloseModalMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call onCloseModal when click the cancel button', function () {
    var onCloseModalMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onCloseModal: onCloseModalMockFn
    }));
    var cancelButton = component.find('Button').at(0);
    cancelButton.simulate('click');
    expect(onCloseModalMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call onCloseModal when click the OK button', function () {
    var onCloseModalMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onCloseModal: onCloseModalMockFn
    }));
    var okButton = component.find('Button').at(1);
    okButton.simulate('click');
    expect(onCloseModalMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call onChange with the right value when press enter key while hour, minutes and ampm has value', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onChange: onChangeMockFn
    }));
    var container = component.find('div[role="presentation"]');
    var hourInput = component.find('input').at(0);
    var minutesInput = component.find('input').at(1);
    hourInput.simulate('change', {
      target: {
        value: '12'
      }
    });
    minutesInput.simulate('change', {
      target: {
        value: '14'
      }
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    container.simulate('keyDown', {
      keyCode: UP_KEY
    });
    container.simulate('keyDown', {
      keyCode: ENTER_KEY
    });
    expect(onChangeMockFn).toHaveBeenCalledWith('12:14');
  });
  it('should not call onChange when press enter key while hour, minutes and ampm has not value', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onChange: onChangeMockFn
    }));
    var container = component.find('div[role="presentation"]');
    container.simulate('keyDown', {
      keyCode: ENTER_KEY
    });
    expect(onChangeMockFn).toHaveBeenCalledTimes(0);
  });
  it('should call event.preventDefault when something is pasted on hour input', function () {
    var preventDefaultMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    hourInput.simulate('paste', {
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call event.preventDefault when something is dropped on hour input', function () {
    var preventDefaultMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var hourInput = component.find('input').at(0);
    hourInput.simulate('drop', {
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call event.preventDefault when something is pasted on minutes input', function () {
    var preventDefaultMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('paste', {
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call event.preventDefault when something is dropped on minutes input', function () {
    var preventDefaultMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, null));
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('drop', {
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should set the right value when hour24 is true and hour value changes', function () {
    var component = mount(React.createElement(TimeSelect, {
      hour24: true
    }));
    var values = ['000', '001', '002', '005', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '2', '3', '6', '9'];
    var expects = ['00', '01', '02', '05', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '02', '03', '06', '09'];
    values.forEach(function (value, index) {
      var hourInput = component.find('input').at(0);
      hourInput.simulate('focus');
      hourInput.simulate('change', {
        target: {
          value: value
        }
      });
      expect(component.state('hour')).toBe(expects[index]);
    });
  });
  it('should not change focus when hour24 is true and minute value changes', function () {
    var component = mount(React.createElement(TimeSelect, {
      hour24: true
    }));
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    minutesInput.simulate('change', {
      target: {
        value: '36'
      }
    });
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    expect(focusedElementDataId).toBe('minutes');
  });
  it('should not change focus when hour24 is true, minute input has focus and right key is pressed', function () {
    var component = mount(React.createElement(TimeSelect, {
      hour24: true
    }));
    var container = component.find('div[role="presentation"]');
    var minutesInput = component.find('input').at(1);
    minutesInput.simulate('focus');
    container.simulate('keyDown', {
      keyCode: RIGHT_KEY
    });
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    expect(focusedElementDataId).toBe('minutes');
  });
  it('should call onChange when press enter key while hour, minutes has value', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(TimeSelect, {
      onChange: onChangeMockFn,
      hour24: true
    }));
    var container = component.find('div[role="presentation"]');
    var hourInput = component.find('input').at(0);
    var minutesInput = component.find('input').at(1);
    hourInput.simulate('change', {
      target: {
        value: '14'
      }
    });
    minutesInput.simulate('change', {
      target: {
        value: '05'
      }
    });
    container.simulate('keyDown', {
      keyCode: ENTER_KEY
    });
    expect(onChangeMockFn).toHaveBeenCalledWith('14:05');
  });
  it('should not render ampm input when hour24 is true', function () {
    var component = mount(React.createElement(TimeSelect, {
      hour24: true
    }));
    var inputs = component.find('input');
    expect(inputs.length).toBe(2);
  });
  it('should set hour value to "00" when hour24 is true, hour input is focused, type 0 and then blur the hour input', function () {
    var component = mount(React.createElement(TimeSelect, {
      hour24: true
    }));
    var hourInput = component.find('input').at(0);
    hourInput.simulate('focus');
    hourInput.simulate('change', {
      target: {
        value: '0'
      }
    });
    hourInput.simulate('blur');
    expect(component.state().hour).toBe('00');
  });
});