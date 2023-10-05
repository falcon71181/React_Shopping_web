"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

describe('<Textarea/>', function () {
  it('should set an id in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find('textarea').prop('id')).toMatch(/textarea/);
  });
  it('should set the value passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "textarea value"
    }));
    expect(component.find('textarea').prop('value')).toBe('textarea value');
  });
  it('should set the placeholder passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      placeholder: "Placeholder Text"
    }));
    expect(component.find('textarea').prop('placeholder')).toBe('Placeholder Text');
  });
  it('should fire an event when the user change the textarea', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn
    }));
    component.find('textarea').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should set the disabled passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true
    }));
    expect(component.find('textarea').prop('disabled')).toBe(true);
  });
  it('should set the readonly passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      readOnly: true
    }));
    expect(component.find('textarea').prop('readOnly')).toBe(true);
  });
  it('should set required in the textarea element if it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      required: true
    }));
    expect(component.find('textarea').prop('required')).toBe(true);
  });
  it('should set the maxLength passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      maxLength: 0
    }));
    expect(component.find('textarea').prop('maxLength')).toBe(0);
  });
  it('should set the minLength passed in the textarea element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      minLength: 0
    }));
    expect(component.find('textarea').prop('minLength')).toBe(0);
  });
  it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the textarea when a bottomHelpText is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "Help text"
    }));
    expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
    expect(component.find('textarea').prop('aria-labelledby')).toMatch(/inline-text-label/);
  });
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      inputId: expect.any(String),
      variant: 'default',
      size: 'medium'
    });
  });
  it('should have a inside div with id="headerTest"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      header: _react["default"].createElement("div", {
        id: "headerTest"
      })
    }));
    var div = component.find('div[id="headerTest"]');
    expect(div.exists()).toBeTruthy();
  });
  it('should have a inside div with id="footerTest"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      footer: _react["default"].createElement("div", {
        id: "footerTest"
      })
    }));
    var div = component.find('div[id="footerTest"]');
    expect(div.exists()).toBeTruthy();
  });
});