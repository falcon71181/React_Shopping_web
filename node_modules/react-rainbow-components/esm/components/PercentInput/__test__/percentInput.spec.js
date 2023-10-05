import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PercentInput from '..';

var TestPercentInput = function TestPercentInput(props) {
  var initialValue = props.initialValue;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return React.createElement(PercentInput, {
    onChange: setValue,
    value: value
  });
};

describe('<PercentInput />', function () {
  it('should mount a input with a value of 5%', function () {
    [5, '5', '5.', '5.00', '5.00003'].forEach(function (value) {
      render(React.createElement(PercentInput, {
        value: value
      }));
    });
    screen.getAllByRole('textbox').forEach(function (input) {
      expect(input).toHaveValue('5%');
    });
  });
  it('should mount a input with a value of 0%', function () {
    [0, '.0', '0.00003'].forEach(function (value) {
      render(React.createElement(PercentInput, {
        value: value
      }));
    });
    screen.getAllByRole('textbox').forEach(function (input) {
      expect(input).toHaveValue('0%');
    });
  });
  it('should mount a input with a empty value', function () {
    ['', '  ', 'foo', null, undefined, true, false, Infinity, {}, []].forEach(function (value) {
      render(React.createElement(PercentInput, {
        value: value
      }));
    });
    screen.getAllByRole('textbox').forEach(function (input) {
      expect(input).toHaveValue('');
    });
  });
  it('should mount a input with a value of "-"', function () {
    var _render = render(React.createElement(PercentInput, {
      value: "-"
    })),
        getByRole = _render.getByRole;

    expect(getByRole('textbox')).toHaveValue('-');
  });
  it('should be change value to 5 when is fucused', function () {
    var _render2 = render(React.createElement(PercentInput, {
      value: 5
    })),
        getByRole = _render2.getByRole;

    var input = getByRole('textbox');
    expect(input).toHaveValue('5%');
    fireEvent.focus(input);
    expect(input).toHaveValue('5');
  });
  it('should be change value to $5.00 when is not focused', function () {
    var _render3 = render(React.createElement(PercentInput, {
      value: 5
    })),
        getByRole = _render3.getByRole;

    var input = getByRole('textbox');
    fireEvent.focus(input);
    expect(input).toHaveValue('5');
    fireEvent.blur(input);
    expect(input).toHaveValue('5%');
  });
  it('should fire onChange with the value when it is a valid value', function () {
    var onChangeMockFn = jest.fn();

    var _render4 = render(React.createElement(PercentInput, {
      onChange: onChangeMockFn
    })),
        getByRole = _render4.getByRole;

    var input = getByRole('textbox');
    ['5', '5.', '05', '5.00', '-', '.0', '-5'].forEach(function (value) {
      fireEvent.change(input, {
        target: {
          value: value
        }
      });
      expect(onChangeMockFn).toHaveBeenCalledWith(value);
    });
  });
  it('should not fire onChange with the value when it is an invalid value', function () {
    var onChangeMockFn = jest.fn();

    var _render5 = render(React.createElement(PercentInput, {
      onChange: onChangeMockFn
    })),
        getByRole = _render5.getByRole;

    var input = getByRole('textbox');
    ['5..', '5..0', '.', 'foo', ' ', ''].forEach(function (value) {
      fireEvent.change(input, {
        target: {
          value: value
        }
      });
    });
    expect(onChangeMockFn).toHaveBeenCalledTimes(0);
  });
  it('should calculate the selectionStart when writing to the input', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var _render6, getByRole, input;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render6 = render(React.createElement(TestPercentInput, null)), getByRole = _render6.getByRole;
            input = getByRole('textbox');
            fireEvent.focus(input);
            input.focus();
            input.setSelectionRange(0, 0);
            expect(input.selectionStart).toBe(0);
            expect(input.selectionEnd).toBe(0);
            _context.next = 9;
            return userEvent.type(input, '123');

          case 9:
            expect(input).toHaveValue('123');
            expect(input.selectionStart).toBe(3);
            _context.next = 13;
            return userEvent.type(input, '4');

          case 13:
            expect(input).toHaveValue('1,234');
            expect(input.selectionStart).toBe(5);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should calculate the selectionStart when a valid number is pasted into the input', _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
    var _render7, getByRole, input;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render7 = render(React.createElement(TestPercentInput, {
              initialValue: 1234
            })), getByRole = _render7.getByRole;
            input = getByRole('textbox');
            fireEvent.focus(input);
            input.focus();
            input.setSelectionRange(2, 2);
            expect(input.selectionStart).toBe(2);
            expect(input).toHaveValue('1,234');
            _context2.next = 9;
            return userEvent.paste('567');

          case 9:
            expect(input).toHaveValue('1,567,234');
            expect(input.selectionStart).toBe(6);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should calculate the selectionStart when an input slice is cut', _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
    var _render8, getByRole, input;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render8 = render(React.createElement(TestPercentInput, {
              initialValue: 1234567
            })), getByRole = _render8.getByRole;
            input = getByRole('textbox');
            fireEvent.focus(input);
            input.focus();
            input.setSelectionRange(2, 6);
            expect(input).toHaveValue('1,234,567');
            expect(input.selectionStart).toBe(2);
            _context3.next = 9;
            return userEvent.cut();

          case 9:
            expect(input).toHaveValue('1,567');
            expect(input.selectionStart).toBe(1);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should calculate the selectionStart when an input slice is cut', _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
    var _render9, getByRole, input;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render9 = render(React.createElement(TestPercentInput, {
              initialValue: "0.0"
            })), getByRole = _render9.getByRole;
            input = getByRole('textbox');
            fireEvent.focus(input);
            expect(input).toHaveValue('0.0');
            expect(input.selectionStart).toBe(0);
            fireEvent.change(input, {
              target: {
                value: '01.0',
                selectionStart: 2
              }
            });
            expect(input).toHaveValue('1.0');
            expect(input.selectionStart).toBe(1);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});