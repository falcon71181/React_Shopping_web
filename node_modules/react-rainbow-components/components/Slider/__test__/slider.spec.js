"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _label = _interopRequireDefault(require("../styled/label"));

describe('<Slider />', function () {
  it('should fire an event when the user change the input', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the value passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      value: "50"
    }));
    expect(component.find('input').prop('value')).toBe('50');
  });
  it('should set the min value passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      min: "50"
    }));
    expect(component.find('input').prop('min')).toBe('50');
  });
  it('should set the max value passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      max: "50"
    }));
    expect(component.find('input').prop('max')).toBe('50');
  });
  it('should set the step value passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      step: "50"
    }));
    expect(component.find('input').prop('step')).toBe('50');
  });
  it('should set the disabled passed in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      disabled: true
    }));
    expect(component.find('input').prop('disabled')).toBe(true);
  });
  it('should render a label when label prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Slider Label"
    }));
    expect(component.find(_label["default"]).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Slider Label",
      labelAlignment: "left"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Slider Label",
      labelAlignment: "right"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('right');
  });
  it('should set "center" to labelAlignment if prop not passed in the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "Slider Label"
    }));
    expect(component.find(_label["default"]).prop('labelAlignment')).toBe('center');
  });
  it('should set an id in the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find('input').prop('id')).toMatch(/slider-id/);
  });
  it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      error: "error message"
    }));
    expect(component.find(_errorText["default"]).prop('id')).toMatch(/error-message/);
    expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
  });
  it('should not set aria-describedby in the input if no error is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null));
    expect(component.find(_errorText["default"]).exists()).toBe(false);
    expect(component.find('input').prop('aria-describedby')).toBe(undefined);
  });
  it('should set the input as required when `required` prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      required: true
    }));
    expect(component.find('input').prop('required')).toBe(true);
  });
  it('should render required asterisk when required prop is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "My label",
      required: true
    }));
    expect(component.find('RequiredAsterisk').exists()).toBe(true);
  });
});