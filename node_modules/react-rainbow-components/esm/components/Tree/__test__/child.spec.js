import React from 'react';
import { mount } from 'enzyme';
import Child from '../child';
import { Provider } from '../context';
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
      var component = mount(React.createElement(Child, {
        isChecked: value
      }), {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          value: contextValue
        }
      });
      expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
    });
  });
  it('should not render the PrimitiveCheckbox component when isChecked prop has the wrong value', function () {
    ['indeterminates', 'one', 'six'].forEach(function (value) {
      var component = mount(React.createElement(Child, {
        isChecked: value
      }), {
        wrappingComponent: Provider,
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
    var component = mount(React.createElement(Child, {
      children: children,
      isExpanded: true
    }), {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    expect(component.find('TreeChildren').exists()).toBe(true);
  });
  it('should set the aria-selected value to true when the node is selected', function () {
    var component = mount(React.createElement(Child, {
      isSelected: true
    }), {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    var node = component.find('li');
    expect(node.prop('aria-selected')).toBe(true);
  });
  it('should not set the aria-selected value when the node is not selected', function () {
    var component = mount(React.createElement(Child, null), {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        value: contextValue
      }
    });
    var node = component.find('li');
    expect(node.prop('aria-selected')).toBeUndefined();
  });
});