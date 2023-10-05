import React from 'react';
import { mount, shallow } from 'enzyme';
import RadioButtonGroup from '../index';
import StyledLabel from '../styled/label';
var options = [{
  value: 'admin',
  label: 'Admin',
  disabled: true
}, {
  value: 'user',
  label: 'User'
}, {
  value: 'anonymous',
  label: 'Anonymous'
}];
describe('<RadioButtonGroup />', function () {
  it('should set isVisible to true in Marker when there is an option selected initially', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      options: options,
      value: "user"
    }));
    expect(component.find('Marker').prop('isVisible')).toBe(true);
  });
  it('should set isVisible to false in Marker when there is a disabled option selected initially', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      options: options,
      value: "admin"
    }));
    expect(component.find('Marker').prop('isVisible')).toBe(false);
  });
  it('should set isVisible to false in Marker when there is an invalid option selected initially', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      options: options,
      value: "apple juice"
    }));
    expect(component.find('Marker').prop('isVisible')).toBe(false);
  });
  it('should pass the right styles to Marker when there is an option selected', function () {
    var getCheckedOptionRefMock = jest.fn(function () {
      return {
        current: {
          offsetLeft: 10,
          offsetWidth: 100,
          clientWidth: 80
        }
      };
    });
    var component = shallow(React.createElement(RadioButtonGroup, {
      options: options,
      value: "user"
    })).dive();
    var instance = component.instance();
    instance.getCheckedOptionRef = getCheckedOptionRefMock;
    var currentMarkerStyle = {
      left: 10,
      width: 100
    };
    instance.updateMarker();
    expect(component.find('Marker').prop('style')).toEqual(currentMarkerStyle);
  });
  it('should set isVisible to true in Marker when selecting an option', function () {
    var component;
    var onChangeFn = jest.fn(function () {
      component.setProps({
        value: 'anonymous'
      });
      component.update();
    });
    component = mount(React.createElement(RadioButtonGroup, {
      options: options,
      onChange: onChangeFn
    }));
    expect(component.find('Marker').prop('isVisible')).toBe(false);
    var radio = component.find('RadioButtonItem').at(2).find('input');
    radio.simulate('change');
    expect(onChangeFn).toHaveBeenCalled();
    expect(component.find('Marker').prop('isVisible')).toBe(true);
  });
  it('should render a label when label prop is passed', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      label: "RadioButtonGroup Label"
    }));
    expect(component.find(StyledLabel).exists()).toBe(true);
  });
  it('should set "left" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      label: "RadioButtonGroup Label",
      labelAlignment: "left"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
  });
  it('should set "right" to labelAlignment prop passed in the Label component', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      label: "RadioButtonGroup Label",
      labelAlignment: "right"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
  });
  it('should set "center" to labelAlignment if prop not passed in the Label component', function () {
    var component = mount(React.createElement(RadioButtonGroup, {
      label: "RadioButtonGroup Label"
    }));
    expect(component.find(StyledLabel).prop('labelAlignment')).toBe('center');
  });
});