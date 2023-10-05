"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _star = _interopRequireDefault(require("../star"));

describe('<Star />', function () {
  it('should set type radio to the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], null));
    expect(component.find('input').prop('type')).toBe('radio');
  });
  it('should pass a generated id to the input element and set the same id to the htmFor of the label element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], null));
    expect(component.find('input').prop('id')).toMatch(/star/);
    expect(component.find('label').prop('htmlFor')).toMatch(/star/);
  });
  it('should set the name passed to the name prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      name: "name-1"
    }));
    expect(component.find('input').prop('name')).toBe('name-1');
  });
  it('should set the value passed to the value prop of the input element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      value: "value-1"
    }));
    expect(component.find('input').prop('value')).toBe('value-1');
  });
  it('should fire an event when the user click the star', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      onChange: onChangeFn
    }));
    component.find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
  it('should render the StarFill when the prop isFilled is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      isFilled: true
    }));
    expect(component.find('StarFill').exists()).toBe(true);
  });
  it('should render the StarBordered when the prop isFilled is false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      isFilled: false
    }));
    expect(component.find('StarBordered').exists()).toBe(true);
  });
  it('should pass the right text to the AssistiveText component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      value: 1
    }));
    expect(component.find('AssistiveText').prop('text')).toBe('1 Star');
  });
  it('should not fire onChange event when readOnly is true', function () {
    var onChangeMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      value: 1,
      onChange: onChangeMockFn,
      readOnly: true
    }));
    component.find('input').simulate('click');
    component.find('input').simulate('change');
    expect(onChangeMockFn).not.toHaveBeenCalled();
  });
  it('should render half star when isFilled and isHalf props are true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_star["default"], {
      value: 1,
      isFilled: true,
      isHalf: true
    }));
    expect(component.find('StarHalf').exists()).toBe(true);
  });
});