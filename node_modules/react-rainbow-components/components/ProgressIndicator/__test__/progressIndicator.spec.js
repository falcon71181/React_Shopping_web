"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _ProgressStep = _interopRequireDefault(require("../../ProgressStep"));

var _ButtonIcon = _interopRequireDefault(require("../../ButtonIcon"));

var _activeIcon = _interopRequireDefault(require("../../ProgressStep/styled/activeIcon"));

var _inactiveIcon = _interopRequireDefault(require("../../ProgressStep/styled/inactiveIcon"));

jest.useFakeTimers();
describe('<ProgressIndicator/>', function () {
  it('should render the children passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, "ProgressStep"));
    expect(component.text()).toBe('ProgressStep');
  });
  it('should set the right icon when currentStepName is step-2 and the step-3 has an error', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      currentStepName: "step-2"
    }, _react["default"].createElement(_ProgressStep["default"], {
      name: "step-1"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-2"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-3",
      hasError: true
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-4"
    })));
    jest.runOnlyPendingTimers();
    component.setState({
      key: Date.now()
    });
    var item1 = component.find('ProgressStep[name="step-1"]').find(_ButtonIcon["default"]);
    var item2 = component.find('ProgressStep[name="step-2"]').find(_ButtonIcon["default"]);
    var item3 = component.find('ProgressStep[name="step-3"]').find(_ButtonIcon["default"]);
    var item4 = component.find('ProgressStep[name="step-4"]').find(_ButtonIcon["default"]);
    expect(item1.find('DoneIcon').exists()).toBe(true);
    expect(item2.find(_activeIcon["default"]).exists()).toBe(true);
    expect(item3.find('ErrorIcon').exists()).toBe(true);
    expect(item4.find(_inactiveIcon["default"]).exists()).toBe(true);
  });
  it('should set the right assistiveText to the ButtonIcon component when currentStepName is step-2 and the step-3 has an error ', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      currentStepName: "step-2"
    }, _react["default"].createElement(_ProgressStep["default"], {
      name: "step-1",
      label: "Step 1"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-2",
      label: "Step 2"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-3",
      label: "Step 3",
      hasError: true
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-4",
      label: "Step 4"
    })));
    jest.runOnlyPendingTimers();
    component.setState({
      key: Date.now()
    });
    var item1 = component.find('ProgressStep[name="step-1"]').find(_ButtonIcon["default"]);
    var item2 = component.find('ProgressStep[name="step-2"]').find(_ButtonIcon["default"]);
    var item3 = component.find('ProgressStep[name="step-3"]').find(_ButtonIcon["default"]);
    var item4 = component.find('ProgressStep[name="step-4"]').find(_ButtonIcon["default"]);
    expect(item1.prop('assistiveText')).toBe('Step 1 - Completed');
    expect(item2.prop('assistiveText')).toBe('Step 2 - Active');
    expect(item3.prop('assistiveText')).toBe('Step 3 - Error');
    expect(item4.prop('assistiveText')).toBe('Step 4');
  });
  it('should fire an event with the right data when the step is clicked', function () {
    var onClickMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      currentStepName: "step-1",
      onClick: onClickMockFn
    }, _react["default"].createElement(_ProgressStep["default"], {
      name: "step-1"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-2"
    }), _react["default"].createElement(_ProgressStep["default"], {
      name: "step-3"
    })));
    component.find('ProgressStep[name="step-2"]').find(_ButtonIcon["default"]).simulate('click');
    expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), 'step-2');
  });
});