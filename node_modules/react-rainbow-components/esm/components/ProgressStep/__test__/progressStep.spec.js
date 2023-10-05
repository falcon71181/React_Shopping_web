import React from 'react';
import { mount } from 'enzyme';
import ProgressStep from '..';
import ButtonIcon from '../../ButtonIcon';
import InternalTooltip from '../../InternalTooltip';
import ProgressIndicator from '../../ProgressIndicator';
import StyledStepNumberButton from '../styled/stepNumberButton';
jest.useFakeTimers();
describe('<ProgressStep/>', function () {
  it('should register itself when mounted', function () {
    var registerFn = jest.fn();
    mount(React.createElement(ProgressStep, {
      name: "step-1",
      privateRegisterStep: registerFn,
      numbersMap: []
    }));
    jest.runAllTimers();
    var params = {
      name: 'step-1',
      onSetStepState: expect.any(Function)
    };
    expect(registerFn).toHaveBeenCalledWith(params);
  });
  it('should render numbers inside progress step when variant is "numeric"', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-1",
      variant: "numeric"
    }, React.createElement(ProgressStep, {
      name: "step-1"
    }), React.createElement(ProgressStep, {
      name: "step-2"
    }), React.createElement(ProgressStep, {
      name: "step-3"
    })));
    jest.runAllTimers();
    var step2 = component.find('ProgressStep[name="step-2"]');
    var number = step2.find(StyledStepNumberButton);
    expect(number.exists()).toBe(true);
    expect(number.text()).toBe('2');
  });
  it('should render the right number on each step', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-1",
      variant: "numeric"
    }, React.createElement(ProgressStep, {
      name: "step-1",
      testNumber: "1"
    }), React.createElement(ProgressStep, {
      name: "step-2",
      testNumber: "2"
    }), React.createElement(ProgressStep, {
      name: "step-3",
      testNumber: "3"
    })));
    jest.runAllTimers();
    var steps = component.find('ProgressStep');
    steps.forEach(function (step) {
      expect(step.text()).toBe(step.prop('testNumber'));
    });
  });
  it('should show a checkmark icon when marked as completed', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-3",
      variant: "numeric"
    }, React.createElement(ProgressStep, {
      name: "step-1"
    }), React.createElement(ProgressStep, {
      name: "step-2"
    }), React.createElement(ProgressStep, {
      name: "step-3"
    })));
    jest.runOnlyPendingTimers();
    component.update();
    var step1 = component.find('ProgressStep[name="step-1"]').find(ButtonIcon);
    expect(step1.find('DoneIcon').exists()).toBe(true);
  });
  it('should show an error icon when marked as error', function () {
    var component = mount(React.createElement(ProgressIndicator, {
      currentStepName: "step-3",
      variant: "numeric"
    }, React.createElement(ProgressStep, {
      name: "step-1"
    }), React.createElement(ProgressStep, {
      name: "step-2",
      hasError: true
    }), React.createElement(ProgressStep, {
      name: "step-3"
    })));
    jest.runOnlyPendingTimers();
    component.update();
    var step2 = component.find('ProgressStep[name="step-2"]').find(ButtonIcon);
    expect(step2.find('ErrorIcon').exists()).toBe(true);
  });
  it('should render a Tooltip component when `tooltip` prop is valid', function () {
    var wrapper = mount(React.createElement(ProgressStep, {
      name: "step-1",
      tooltip: "Step 1",
      numbersMap: []
    }));
    expect(wrapper.find(InternalTooltip).exists()).toBe(true);
  });
});