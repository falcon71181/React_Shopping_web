import React from 'react';
import { mount } from 'enzyme';
import ProgressIndicator from '../index';
import ProgressStep from '../../ProgressStep';
import ButtonIcon from '../../ButtonIcon';
import StyledActiveIcon from '../../ProgressStep/styled/activeIcon';
import StyledInactiveIcon from '../../ProgressStep/styled/inactiveIcon';
jest.useFakeTimers();
describe('<ProgressIndicator/>', function () {
  it('should render the children passed', function () {
    var component = mount(React.createElement(ProgressIndicator, null, "ProgressStep"));
    expect(component.text()).toBe('ProgressStep');
  });
  it('should set the right icon when currentStepName is step-2 and the step-3 has an error', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-2"
    }, React.createElement(ProgressStep, {
      name: "step-1"
    }), React.createElement(ProgressStep, {
      name: "step-2"
    }), React.createElement(ProgressStep, {
      name: "step-3",
      hasError: true
    }), React.createElement(ProgressStep, {
      name: "step-4"
    })));
    jest.runOnlyPendingTimers();
    component.setState({
      key: Date.now()
    });
    var item1 = component.find('ProgressStep[name="step-1"]').find(ButtonIcon);
    var item2 = component.find('ProgressStep[name="step-2"]').find(ButtonIcon);
    var item3 = component.find('ProgressStep[name="step-3"]').find(ButtonIcon);
    var item4 = component.find('ProgressStep[name="step-4"]').find(ButtonIcon);
    expect(item1.find('DoneIcon').exists()).toBe(true);
    expect(item2.find(StyledActiveIcon).exists()).toBe(true);
    expect(item3.find('ErrorIcon').exists()).toBe(true);
    expect(item4.find(StyledInactiveIcon).exists()).toBe(true);
  });
  it('should set the right assistiveText to the ButtonIcon component when currentStepName is step-2 and the step-3 has an error ', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-2"
    }, React.createElement(ProgressStep, {
      name: "step-1",
      label: "Step 1"
    }), React.createElement(ProgressStep, {
      name: "step-2",
      label: "Step 2"
    }), React.createElement(ProgressStep, {
      name: "step-3",
      label: "Step 3",
      hasError: true
    }), React.createElement(ProgressStep, {
      name: "step-4",
      label: "Step 4"
    })));
    jest.runOnlyPendingTimers();
    component.setState({
      key: Date.now()
    });
    var item1 = component.find('ProgressStep[name="step-1"]').find(ButtonIcon);
    var item2 = component.find('ProgressStep[name="step-2"]').find(ButtonIcon);
    var item3 = component.find('ProgressStep[name="step-3"]').find(ButtonIcon);
    var item4 = component.find('ProgressStep[name="step-4"]').find(ButtonIcon);
    expect(item1.prop('assistiveText')).toBe('Step 1 - Completed');
    expect(item2.prop('assistiveText')).toBe('Step 2 - Active');
    expect(item3.prop('assistiveText')).toBe('Step 3 - Error');
    expect(item4.prop('assistiveText')).toBe('Step 4');
  });
  it('should fire an event with the right data when the step is clicked', function () {
    var onClickMockFn = jest.fn();
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-1",
      onClick: onClickMockFn
    }, React.createElement(ProgressStep, {
      name: "step-1"
    }), React.createElement(ProgressStep, {
      name: "step-2"
    }), React.createElement(ProgressStep, {
      name: "step-3"
    })));
    component.find('ProgressStep[name="step-2"]').find(ButtonIcon).simulate('click');
    expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), 'step-2');
  });
});