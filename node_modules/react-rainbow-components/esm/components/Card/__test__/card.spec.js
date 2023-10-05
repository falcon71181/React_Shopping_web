import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';
import StyledContainer from '../styled/container';
describe('<Card/>', function () {
  it('should set to true the isTrue prop in RenderIf', function () {
    var component = shallow(React.createElement(Card, {
      title: "Card Header",
      footer: "Card Footer",
      actions: React.createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(true);
  });
  it('should set to true the isTrue prop in RenderIf when isLoading', function () {
    var component = shallow(React.createElement(Card, {
      title: "Card Header",
      footer: "Card Footer",
      isLoading: true,
      actions: React.createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
  it('should set to true the isTrue prop in RenderIf when footer is not passed', function () {
    var component = shallow(React.createElement(Card, {
      title: "Card Header",
      actions: React.createElement("div", null, "Testing actions node")
    }, "Testing childrens"));
    expect(component.find('RenderIf').prop('isTrue')).toBe(false);
  });
  it('should set the id to the container element', function () {
    var component = shallow(React.createElement(Card, {
      id: "test-card"
    }));
    expect(component.find(StyledContainer).prop('id')).toBe('test-card');
  });
});