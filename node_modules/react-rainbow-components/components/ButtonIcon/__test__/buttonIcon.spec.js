"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _InternalTooltip = _interopRequireDefault(require("../../InternalTooltip"));

describe('<ButtonIcon/>', function () {
  it('should focus the button when the focus method is called', function () {
    var ref = {};
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ref: ref
    }));
    ref.current.focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find('button').prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the button when the blur method is called', function () {
    var ref = {};
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ref: ref
    }));
    var instance = ref.current;
    var buttonDataId = component.find('button').prop('data-id');
    instance.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    instance.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
  it('should set disable to true when it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      disabled: true
    }));
    expect(component.find('button').prop('disabled')).toBe(true);
  });
  it('should set the tabIndex passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      tabIndex: 0
    }));
    expect(component.find('button').prop('tabIndex')).toBe(0);
  });
  it('should set the title passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      title: "my title"
    }));
    expect(component.find('button').prop('title')).toBe('my title');
  });
  it('should set the type passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      type: "reset"
    }));
    expect(component.find('button').prop('type')).toBe('reset');
  });
  it('should set aria-haspopup to true when it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ariaHaspopup: true
    }));
    expect(component.find('button').prop('aria-haspopup')).toBe(true);
  });
  it('should set aria-controls to true when it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ariaControls: "testing ariaControls"
    }));
    expect(component.find('button').prop('aria-controls')).toBe('testing ariaControls');
  });
  it('should set aria-expanded to true when it is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      ariaExpanded: true
    }));
    expect(component.find('button').prop('aria-expanded')).toBe(true);
  });
  it('should pass assistiveText to the prop text of AssistiveText component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      assistiveText: "for screen readers"
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
  });
  it('should render a tooltip when `tooltip` prop is valid', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      tooltip: "Test tooltip"
    }));
    expect(component.find(_InternalTooltip["default"]).exists()).toBe(true);
  });
});