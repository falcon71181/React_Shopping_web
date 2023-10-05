"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _inputItems = _interopRequireDefault(require("../inputItems"));

var _inputItem = _interopRequireDefault(require("../inputItem"));

var _styled = require("../styled");

var _useFocusedIndexState = _interopRequireDefault(require("../hooks/useFocusedIndexState"));

var _usePreviousIndex = _interopRequireDefault(require("../hooks/usePreviousIndex"));

var _useValueState = _interopRequireDefault(require("../hooks/useValueState"));

var _getNormalizedValue = _interopRequireDefault(require("../helpers/getNormalizedValue"));

var _getNumbersFromClipboard = _interopRequireDefault(require("../helpers/getNumbersFromClipboard"));

jest.mock('../hooks/useFocusedIndexState', function () {
  return jest.fn(function () {
    return 0;
  });
});
jest.mock('../hooks/usePreviousIndex', function () {
  return jest.fn(function () {
    return undefined;
  });
});
jest.mock('../hooks/useValueState', function () {
  return jest.fn(function () {
    return ['', '', '', ''];
  });
});
jest.mock('../helpers/getNormalizedValue', function () {
  return jest.fn(function () {
    return '';
  });
});
jest.mock('../helpers/getNumbersFromClipboard', function () {
  return jest.fn(function () {
    return '';
  });
});
describe('<CodeInput />', function () {
  it('should have value length as 6 when length is 6', function () {
    _useValueState["default"].mockImplementation(function () {
      return ['', '', '', '', '', ''];
    });

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      length: 6
    }));
    expect(component.find(_inputItems["default"]).prop('value').length).toBe(6);
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
      as: 'legend',
      variant: 'default',
      size: 'medium'
    });
  });
  it('should have bottomHelpText rendered if is sent as param', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "help-text-test"
    }));
    expect(component.find(_styled.StyledHelpText).exists()).toBe(true);
  });
  it('should not have bottomHelpText rendered when bottomHelpText is empty', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find(_styled.StyledHelpText).exists()).toBe(false);
  });
  it('should have error rendered if is sent as param', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      error: "error-test"
    }));
    expect(component.find(_styled.StyledErrorMessage).exists()).toBe(true);
  });
  it('should not have error rendered if is not sent as param', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find(_styled.StyledErrorMessage).exists()).toBe(false);
  });
  it('should keep isActive as true on active input whenever any other input is clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var input0 = component.find(_inputItem["default"]).at(0);
    var input2 = component.find(_inputItem["default"]).at(2);
    input2.simulate('click');
    expect(input0.prop('isActive')).toBe(true);
    expect(input2.prop('isActive')).toBe(false);
  });
  it('should set isActive as true over the second input when first input is filled', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));

    _useValueState["default"].mockImplementation(function () {
      return ['1', '', '', ''];
    });

    _useFocusedIndexState["default"].mockImplementation(function () {
      return 1;
    });

    component.setProps({
      value: '1'
    });
    expect(component.find(_inputItem["default"]).at(0).prop('isActive')).toBe(false);
    expect(component.find(_inputItem["default"]).at(1).prop('isActive')).toBe(true);
  });
  it('should keep isActive as true on the last input when all inputs are filled an last input changes', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));

    _useValueState["default"].mockImplementation(function () {
      return ['1', '2', '3', '4'];
    });

    _useFocusedIndexState["default"].mockImplementation(function () {
      return 3;
    });

    component.setProps({
      value: '1234'
    });
    expect(component.find(_inputItem["default"]).at(3).prop('isActive')).toBe(true);
  });
  it('should call onChange with the number value when input value changes and is number', function () {
    _getNormalizedValue["default"].mockImplementation(function () {
      return '3';
    });

    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn
    }));
    var inputIndex = 0;
    component.find(_inputItems["default"]).props().onChange('3', inputIndex);
    expect(onChangeFn).toHaveBeenCalledWith('3');
  });
  it('should not call onChange when input value changes and is not a number', function () {
    _getNormalizedValue["default"].mockImplementation(function () {
      return '';
    });

    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn
    }));
    var inputIndex = 0;
    component.find(_inputItems["default"]).props().onChange('A', inputIndex);
    expect(onChangeFn).not.toHaveBeenCalled();
  });
  it('should call getNumbersFromClipboard with the copy and pasted value', function () {
    _getNumbersFromClipboard["default"].mockClear();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_inputItem["default"]).at(0).props().onPaste({
      clipboardData: {
        getData: function getData() {
          return '12345abcdfe';
        }
      }
    });
    expect(_getNumbersFromClipboard["default"]).toHaveBeenCalledWith('12345abcdfe');
  });
  it('should call onChange with numbers only when we copy and paste a mixed text and numbers string', function () {
    _getNumbersFromClipboard["default"].mockImplementation(function () {
      return '12345';
    });

    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChangeFn,
      length: 5
    }));
    component.find(_inputItem["default"]).at(0).props().onPaste({
      clipboardData: {
        getData: function getData() {
          return '12345abcdfe';
        }
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith('12345');
  });
  it('should call getNormalizedValue with the right values when value changes', function () {
    _useValueState["default"].mockImplementation(function () {
      return ['1', '2', '', ''];
    });

    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "12"
    }));
    var inputIndex = 2;
    component.find(_inputItems["default"]).props().onChange('3', inputIndex);
    expect(_getNormalizedValue["default"]).toHaveBeenCalledWith('3', 2, ['1', '2', '', '']);
  });
  it('should call useValueState with the right value and length', function () {
    _useValueState["default"].mockReset();

    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "1",
      length: 4
    }));
    expect(_useValueState["default"]).toHaveBeenCalledWith('1', 4);
  });
  it('should call useFocusedIndexState with the right value and length', function () {
    _useValueState["default"].mockReset();

    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "6",
      length: 3
    }));
    expect(_useValueState["default"]).toHaveBeenCalledWith('6', 3);
  });
  it('should call usePreviousIndex with the right focusedIndex value', function () {
    _usePreviousIndex["default"].mockReset();

    _useFocusedIndexState["default"].mockImplementation(function () {
      return 2;
    });

    (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: "12"
    }));
    expect(_usePreviousIndex["default"]).toHaveBeenCalledWith(2);
  });
});