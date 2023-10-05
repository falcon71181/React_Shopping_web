"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _selectableCell = _interopRequireDefault(require("../selectableCell"));

var _constants = require("../../../../libs/constants");

describe('<SelectableCell />', function () {
  it('should render a td element with role "gridcell"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], null));
    var td = component.find('td');
    expect(td.prop('role')).toBe('gridcell');
  });
  it('should set the right name prop to Input component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      tableId: "table-23"
    }));
    expect(component.find('Input').prop('name')).toBe('table-23-options');
  });
  it('should set the type prop in Input component to checkbox by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], null));
    expect(component.find('Input').prop('type')).toBe('checkbox');
  });
  it('should set the type prop in Input component to radio when inputType passed is "radio"', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "radio"
    }));
    expect(component.find('Input').prop('type')).toBe('radio');
  });
  it('should set the checked prop in Input component to true when isSelected is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      isSelected: true
    }));
    expect(component.find('Input').prop('checked')).toBe(true);
  });
  it('should set the disabled prop in Input component to true when isDisabled is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      isDisabled: true
    }));
    expect(component.find('Input').prop('disabled')).toBe(true);
  });
  it('should event.preventDefault when the input container is clicked with shift key pressed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], null));
    var inputContainer = component.find('div[role="presentation"]');
    var preventDefaultMockFn = jest.fn();
    inputContainer.simulate('mouseDown', {
      preventDefault: preventDefaultMockFn,
      shiftKey: true
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not call event.preventDefault when the input container is clicked without shift key pressed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], null));
    var inputContainer = component.find('div[role="presentation"]');
    var preventDefaultMockFn = jest.fn();
    inputContainer.simulate('mouseDown', {
      preventDefault: preventDefaultMockFn,
      shiftKey: false
    });
    expect(preventDefaultMockFn).not.toHaveBeenCalled();
  });
  it('should not call any event when inputType is "radio" and isSelected is passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "radio",
      isSelected: true,
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click');
    expect(onDeselectRowMockFn).not.toHaveBeenCalled();
    expect(onSelectRowMockFn).not.toHaveBeenCalled();
  });
  it('should call the right event when inputType is "radio" and isSelected is not passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "radio",
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click');
    expect(onDeselectRowMockFn).not.toHaveBeenCalled();
    expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
  });
  it('should call the right event when shiftKey is not pressed, inputType is "checkbox" and isSelected is not passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox",
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click', {
      shiftKey: false
    });
    expect(onDeselectRowMockFn).not.toHaveBeenCalled();
    expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
  });
  it('should call the right event when shiftKey is not pressed, inputType is "checkbox" and isSelected is passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox",
      isSelected: true,
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click', {
      shiftKey: false
    });
    expect(onSelectRowMockFn).not.toHaveBeenCalled();
    expect(onDeselectRowMockFn).toHaveBeenCalledWith(expect.any(Object), false);
  });
  it('should call the right event when shiftKey is pressed, inputType is "checkbox" and isSelected is not passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox",
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click', {
      shiftKey: true
    });
    expect(onDeselectRowMockFn).not.toHaveBeenCalled();
    expect(onSelectRowMockFn).toHaveBeenCalledWith(expect.any(Object), true);
  });
  it('should call the right event when shiftKey is pressed, inputType is "checkbox" and isSelected is passed', function () {
    var onDeselectRowMockFn = jest.fn();
    var onSelectRowMockFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox",
      isSelected: true,
      onDeselectRow: onDeselectRowMockFn,
      onSelectRow: onSelectRowMockFn
    }));
    component.find('input').simulate('click', {
      shiftKey: true
    });
    expect(onSelectRowMockFn).not.toHaveBeenCalled();
    expect(onDeselectRowMockFn).toHaveBeenCalledWith(expect.any(Object), true);
  });
  it('should call event.preventDefault when press left key in input type radio', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "radio"
    }));
    var preventDefaultMockFn = jest.fn();
    component.find('input').simulate('keyDown', {
      keyCode: _constants.LEFT_KEY,
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should call event.preventDefault when press right key in input type radio', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "radio"
    }));
    var preventDefaultMockFn = jest.fn();
    component.find('input').simulate('keyDown', {
      keyCode: _constants.RIGHT_KEY,
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).toHaveBeenCalledTimes(1);
  });
  it('should not call event.preventDefault when press left key in input type checkbox', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox"
    }));
    var preventDefaultMockFn = jest.fn();
    component.find('input').simulate('keyDown', {
      keyCode: _constants.LEFT_KEY,
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).not.toHaveBeenCalled();
  });
  it('should not call event.preventDefault when press right key in input type checkbox', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_selectableCell["default"], {
      inputType: "checkbox"
    }));
    var preventDefaultMockFn = jest.fn();
    component.find('input').simulate('keyDown', {
      keyCode: _constants.RIGHT_KEY,
      preventDefault: preventDefaultMockFn
    });
    expect(preventDefaultMockFn).not.toHaveBeenCalled();
  });
});