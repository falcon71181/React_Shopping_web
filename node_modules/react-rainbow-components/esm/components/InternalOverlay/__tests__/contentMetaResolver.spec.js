import React from 'react';
import { mount } from 'enzyme';
import ContentMetaResolver from '../ContentMetaResolver';
describe('<ContentMetaResolver />', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should render component', function () {
    var child = function child() {
      return React.createElement("div", {
        id: "test-id"
      });
    };

    var component = mount(React.createElement(ContentMetaResolver, {
      component: child,
      onResolved: function onResolved() {}
    }));
    expect(component.find('[id="test-id"]').exists()).toBe(true);
  });
  it('should call onResolved', function () {
    var mockOnResolved = jest.fn();

    var child = function child() {
      return React.createElement("div", {
        id: "test-id"
      });
    };

    var component = mount(React.createElement(ContentMetaResolver, {
      component: child,
      onResolved: mockOnResolved
    }));
    component.setProps({});
    expect(mockOnResolved).toHaveBeenCalledTimes(1);
  });
});