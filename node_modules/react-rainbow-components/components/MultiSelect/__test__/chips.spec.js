"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chips = _interopRequireDefault(require("../chips"));

var _styled = require("../styled");

describe('<Chips />', function () {
  it('should not render any chip', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_chips["default"], null));
    expect(component.find(_styled.StyledChip).length).toBe(0);
  });
  it('should render only one chip', function () {
    var value = {
      label: 'Test',
      name: 'test'
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_chips["default"], {
      value: value
    }));
    expect(component.find(_styled.StyledChip).length).toBe(1);
  });
  it('should render the right amount of chips', function () {
    var value = [{
      label: 'Option 1',
      name: 'option-1'
    }, {
      label: 'Option 2',
      name: 'option-2'
    }, {
      label: 'Option 3',
      name: 'option-3'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_chips["default"], {
      value: value
    }));
    expect(component.find(_styled.StyledChip).length).toBe(3);
  });
});