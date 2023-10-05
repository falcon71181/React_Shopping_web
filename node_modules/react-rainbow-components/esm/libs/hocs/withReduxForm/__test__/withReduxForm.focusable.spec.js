import React from 'react';
import { mount } from 'enzyme';
import withReduxForm from '..';

function Input(props) {
  return React.createElement("input", props);
}

var InputComponent = withReduxForm(Input);
describe('withReduxForm', function () {
  it('should be focusable', function () {
    var component = mount(React.createElement(InputComponent, null));
    expect(component).toBeFocusable();
  });
});