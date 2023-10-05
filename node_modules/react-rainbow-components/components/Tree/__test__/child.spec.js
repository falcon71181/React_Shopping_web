"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _child = _interopRequireDefault(require("../child"));

var _context = require("../context");

var contextValue = {
  autoFocus: undefined,
  focusedNode: undefined,
  onPrivateFocusNode: undefined,
  onPrivateBlurNode: undefined,
  onPrivateKeyDown: undefined
};
describe('<Child/>', function () {
  it('should render the PrimitiveCheckbox component when isChecked prop has the right value', function () {
    [true, false, 'indeterminate'].forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_child["default"], {
        isChecked: value
      }), {
        wrappingComponent: _context.Provider,
        wrappingComponentProps: {
          value: contextValue
        }
      });
      expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
    });
  });
  it('should not render the PrimitiveCheckbox component when isChecked prop has the wrong value', function () {
    ['indeterminates', 'one', 'six'].forEach(function (value) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_child["default"], {
        isChecked: value
      }), {
        wrappingComponent: _context.Provider,
        wrappingComponentProps: {
          value: contextValue
        }
      });
      expect(component.find('PrimitiveCheckbox').exists()).toBe(false);
    });
  });
  it('should render the TreeChildren component when children prop is not undefined', function () {
    var children = [{
      label: 'Tree Item'
    }, {
      label: 'Tree Item'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_child["default"], {
      children: children,
      isExpanded: true
    }), {
      wrappingComponent: _context.Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    expect(component.find('TreeChildren').exists()).toBe(true);
  });
  it('should set the aria-selected value to true when the node is selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_child["default"], {
      isSelected: true
    }), {
      wrappingComponent: _context.Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    var node = component.find('li');
    expect(node.prop('aria-selected')).toBe(true);
  });
  it('should not set the aria-selected value when the node is not selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_child["default"], null), {
      wrappingComponent: _context.Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    var node = component.find('li');
    expect(node.prop('aria-selected')).toBeUndefined();
  });
});