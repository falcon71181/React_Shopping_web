"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../../libs/constants");

var _inputItem = _interopRequireDefault(require("../inputItem"));

var _styled = require("../styled");

describe('<InputItem />', function () {
  it('should call onChange event with the right value and index when input changes', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      onChange: onChangeFn
    }));
    component.find(_styled.StyledInput).props().onChange({
      target: {
        value: 2
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(2, 0);
  });
  it('should call onChange event with empty value when DELETE_KEY is pressed, current input value is empty and current index is greater than 0', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 1,
      onChange: onChangeFn
    }));
    component.find(_styled.StyledInput).props().onKeyDown({
      keyCode: _constants.DELETE_KEY
    });
    expect(onChangeFn).toHaveBeenCalledWith('', 0);
  });
  it('should not call onChange when DELETE_KEY is pressed, current input value is empty and current index is 0', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      onChange: onChangeFn
    }));
    component.find(_styled.StyledInput).props().onKeyDown({
      keyCode: _constants.DELETE_KEY
    });
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should call onClick event with the right value input is clicked', function () {
    var onClickFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 2,
      value: "2",
      onClick: onClickFn
    }));
    component.find(_styled.StyledInput).props().onClick({
      target: {
        value: '2'
      }
    });
    expect(onClickFn).toHaveBeenCalledWith({
      target: {
        value: '2'
      }
    });
  });
  it('should call onFocus event with the right value and index when input is focused', function () {
    var onFocusFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      value: "2",
      onFocus: onFocusFn
    }));
    component.find(_styled.StyledInput).props().onFocus({
      target: {
        value: '2'
      }
    });
    expect(onFocusFn).toHaveBeenCalledWith({
      target: {
        value: '2'
      }
    }, 0);
  });
  it('should call onBlur event with the right value when input leaves focus', function () {
    var onBlurFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      value: "2",
      onBlur: onBlurFn
    }));
    component.find(_styled.StyledInput).props().onBlur({
      target: {
        value: '2'
      }
    });
    expect(onBlurFn).toHaveBeenCalledWith({
      target: {
        value: '2'
      }
    });
  });
  it('should call onKeyDown event with the right value when key is pressed', function () {
    var onKeyDownFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      value: "2",
      onKeyDown: onKeyDownFn
    }));
    component.find(_styled.StyledInput).props().onKeyDown({
      keyCode: _constants.DELETE_KEY
    });
    expect(onKeyDownFn).toHaveBeenCalledWith({
      keyCode: _constants.DELETE_KEY
    });
  });
  it('should call onPaste event with the right value when string is pasted inside input', function () {
    var onPasteFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_inputItem["default"], {
      index: 0,
      value: "2",
      onPaste: onPasteFn
    }));
    component.find(_styled.StyledInput).props().onPaste({
      clipboardData: '1234'
    });
    expect(onPasteFn).toHaveBeenCalledWith({
      clipboardData: '1234'
    });
  });
});