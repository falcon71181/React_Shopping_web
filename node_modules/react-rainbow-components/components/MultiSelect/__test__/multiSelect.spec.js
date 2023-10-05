"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _Option = _interopRequireDefault(require("../../Option"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _labelText = _interopRequireDefault(require("../../Input/label/labelText"));

var _InternalDropdown = _interopRequireDefault(require("../../InternalDropdown"));

var _styled = require("../styled");

describe('<MultiSelect />', function () {
  it('should render Label when label prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      label: "Label"
    }));
    expect(component.find(_labelText["default"]).exists()).toBe(true);
  });
  it('should render a HelpText when bottomHelpText prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      bottomHelpText: "Help text"
    }));
    expect(component.find(_helpText["default"]).exists()).toBe(true);
  });
  it('should render a ErrorText when error prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      error: "Error text"
    }));
    expect(component.find(_errorText["default"]).exists()).toBe(true);
  });
  it('should render the placeholder when there is no selected items', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      placeholder: "Placeholder text"
    }));
    expect(component.find(_styled.StyledPlaceholder).exists()).toBe(true);
  });
  it('should render the default variant', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value
    }));
    expect(component.find(_styled.StyledText).exists()).toBe(true);
  });
  it('should render the correct amount of chips', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      variant: "chip"
    }, _react["default"].createElement(_Option["default"], {
      name: "first",
      label: "First"
    }), _react["default"].createElement(_Option["default"], {
      name: "second",
      label: "Second"
    })));
    expect(component.find(_styled.StyledChip).length).toBe(2);
  });
  it('should fire change event when an item is removed', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }];
    var mockOnChange = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      variant: "chip",
      onChange: mockOnChange
    }, _react["default"].createElement(_Option["default"], {
      name: "first",
      label: "First"
    }), _react["default"].createElement(_Option["default"], {
      name: "second",
      label: "Second"
    })));
    var button = component.find(_styled.StyledChip).find('button');
    button.simulate('click');
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });
  it('should fire focus event', function () {
    var mockOnFocus = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onFocus: mockOnFocus
    }));
    component.find(_styled.StyledButtonIcon).simulate('focus');
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });
  it('should fire blur event', function () {
    var mockOnBlur = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onBlur: mockOnBlur
    }));
    component.find(_styled.StyledButtonIcon).simulate('blur');
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
  it('should not render the buttons when readOnly', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      variant: "chip",
      readOnly: true
    }, _react["default"].createElement(_Option["default"], {
      name: "first",
      label: "First"
    }), _react["default"].createElement(_Option["default"], {
      name: "second",
      label: "Second"
    })));
    expect(component.find('button').exists()).toBe(false);
  });
  it('should not render the buttons when disabled', function () {
    var value = [{
      label: 'First',
      name: 'first'
    }, {
      label: 'Second',
      name: 'second'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: value,
      variant: "chip",
      disabled: true
    }, _react["default"].createElement(_Option["default"], {
      name: "first",
      label: "First"
    }), _react["default"].createElement(_Option["default"], {
      name: "second",
      label: "Second"
    })));
    expect(component.find('button').exists()).toBe(false);
  });
  it('should enable search when enableSearch prop is passed', function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      }];
    });
    Element.prototype.scrollTo = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      enableSearch: true
    }, _react["default"].createElement(_Option["default"], {
      name: "first",
      label: "First"
    }), _react["default"].createElement(_Option["default"], {
      name: "second",
      label: "Second"
    })));
    component.find(_styled.StyledButtonIcon).simulate('click');
    expect(component.find(_InternalDropdown["default"]).prop('enableSearch')).toBe(true);
  });
});