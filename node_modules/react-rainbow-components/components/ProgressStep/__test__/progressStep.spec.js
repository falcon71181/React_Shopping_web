"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _InternalTooltip = _interopRequireDefault(require("../../InternalTooltip"));

var _ProgressIndicator = _interopRequireDefault(require("../../ProgressIndicator"));

var _stepNumberButton = _interopRequireDefault(require("../styled/stepNumberButton"));

jest.useFakeTimers();
describe('<ProgressStep/>', function () {
  it('should register itself when mounted', function () {
    var registerFn = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ProgressIndicator["default"], {
      currentStepName: "step-1",
      variant: "numeric"
    }, _react["default"].createElement(_["default"], {
      name: "step-1"
    }), _react["default"].createElement(_["default"], {
      name: "step-2"
    }), _react["default"].createElement(_["default"], {
      name: "step-3"
    })));
    jest.runAllTimers();
    var step2 = component.find('ProgressStep[name="step-2"]');
    var number = step2.find(_stepNumberButton["default"]);
    expect(number.exists()).toBe(true);
    expect(number.text()).toBe('2');
  });
  it('should render the right number on each step', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ProgressIndicator["default"], {
      currentStepName: "step-1",
      variant: "numeric"
    }, _react["default"].createElement(_["default"], {
      name: "step-1",
      testNumber: "1"
    }), _react["default"].createElement(_["default"], {
      name: "step-2",
      testNumber: "2"
    }), _react["default"].createElement(_["default"], {
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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ProgressIndicator["default"], {
      currentStepName: "step-3",
      variant: "numeric"
    }, _react["default"].createElement(_["default"], {
      name: "step-1"
    }), _react["default"].createElement(_["default"], {
      name: "step-2"
    }), _react["default"].createElement(_["default"], {
      name: "step-3"
    })));
    jest.runOnlyPendingTimers();
    component.update();
    var step1 = component.find('ProgressStep[name="step-1"]').find(_ButtonIcon["default"]);
    expect(step1.find('DoneIcon').exists()).toBe(true);
  });
  it('should show an error icon when marked as error', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_ProgressIndicator["default"], {
      currentStepName: "step-3",
      variant: "numeric"
    }, _react["default"].createElement(_["default"], {
      name: "step-1"
    }), _react["default"].createElement(_["default"], {
      name: "step-2",
      hasError: true
    }), _react["default"].createElement(_["default"], {
      name: "step-3"
    })));
    jest.runOnlyPendingTimers();
    component.update();
    var step2 = component.find('ProgressStep[name="step-2"]').find(_ButtonIcon["default"]);
    expect(step2.find('ErrorIcon').exists()).toBe(true);
  });
  it('should render a Tooltip component when `tooltip` prop is valid', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      name: "step-1",
      tooltip: "Step 1",
      numbersMap: []
    }));
    expect(wrapper.find(_InternalTooltip["default"]).exists()).toBe(true);
  });
});