import React from 'react';
import { mount } from 'enzyme';
import PhoneInput from '..';
import { StyledTrigger } from '../styled';
import CountriesDropdown from '../countriesDropdown';
describe('<PhoneInput />', function () {
  beforeEach(function () {
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
  });
  it('should fire onChange with the right value', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      onChange: onChangeMockFn
    }));
    component.find('input[type="tel"]').simulate('change', {
      target: {
        value: '12345678'
      }
    });
    expect(onChangeMockFn).toHaveBeenCalledWith({
      countryCode: '+1',
      isoCode: 'us',
      phone: '12345678'
    });
  });
  it('should fire onChange with the right value when country changes', function () {
    var value = {
      phone: '123456',
      isoCode: 'us',
      countryCode: '+1'
    };
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      onChange: onChangeMockFn,
      value: value
    }));
    component.find(StyledTrigger).simulate('click');
    component.find(CountriesDropdown).prop('onCountryChange')({
      flagIcon: {},
      countryCode: '+213',
      country: 'Algeria',
      isoCode: 'dz'
    });
    expect(onChangeMockFn).toHaveBeenCalledWith({
      countryCode: '+213',
      isoCode: 'dz',
      phone: '123456'
    });
  });
  it('should fire onFocus with the right value', function () {
    var onFocusMockFn = jest.fn();
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      onFocus: onFocusMockFn
    }));
    component.find('input[type="tel"]').simulate('focus');
    expect(true).toBe(true);
    expect(onFocusMockFn).toHaveBeenCalledWith({
      countryCode: '+1',
      isoCode: 'us',
      phone: ''
    });
  });
  it('should fire onBlur with the right value', function () {
    var onBlurMockFn = jest.fn();
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      onBlur: onBlurMockFn
    }));
    component.find('input[type="tel"]').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith({
      countryCode: '+1',
      isoCode: 'us',
      phone: ''
    });
  });
  it('should fire onFocus with the right value when has an initial value', function () {
    var onFocusMockFn = jest.fn();
    var value = {
      countryCode: '+52',
      isoCode: 'mx',
      phone: '1234'
    };
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      value: value,
      onFocus: onFocusMockFn
    }));
    component.find('input[type="tel"]').simulate('focus');
    expect(true).toBe(true);
    expect(onFocusMockFn).toHaveBeenCalledWith({
      countryCode: '+52',
      isoCode: 'mx',
      phone: '1234'
    });
  });
  it('should fire onBlur with the right value when has an initial value', function () {
    var onBlurMockFn = jest.fn();
    var value = {
      countryCode: '+53',
      isoCode: 'cu',
      phone: '12345'
    };
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      value: value,
      onBlur: onBlurMockFn
    }));
    component.find('input[type="tel"]').simulate('blur');
    expect(onBlurMockFn).toHaveBeenCalledWith({
      countryCode: '+53',
      isoCode: 'cu',
      phone: '12345'
    });
  });
  it('should accept only numbers.', function () {
    var onChangeMockFn = jest.fn();
    var component = mount(React.createElement(PhoneInput, {
      label: "Phone Number",
      onChange: onChangeMockFn
    }));
    component.find('input[type="tel"]').simulate('change', {
      target: {
        value: 'Your phone number is 0987256983'
      }
    });
    expect(onChangeMockFn).toHaveBeenCalledWith(expect.objectContaining({
      phone: '0987256983'
    }));
  });
  it('should render the dropdown option when an empty array is passed in countries prop', function () {
    var countries = [];
    var wrapper = mount(React.createElement(PhoneInput, {
      countries: countries
    }));
    expect(wrapper.find(StyledTrigger).prop('onClick')).toBeDefined();
  });
  it('should not render the dropdown option when only one country is passed', function () {
    var countries = ['mx'];
    var wrapper = mount(React.createElement(PhoneInput, {
      countries: countries
    }));
    expect(wrapper.find(StyledTrigger).prop('onClick')).toBe(undefined);
  });
  it('should render the dropdown option when an array containing empty string is passed', function () {
    var countries = [''];
    var onClickMockFn = jest.fn();
    var wrapper = mount(React.createElement(PhoneInput, {
      countries: countries,
      onClick: onClickMockFn
    }));
    wrapper.find(StyledTrigger).simulate('click');
    expect(onClickMockFn).toBeDefined();
  });
  it('should render the dropdown option when an array containing invalid country code is passed', function () {
    var countries = [!/^\w{1,2}$/];
    var onClickMockFn = jest.fn();
    var wrapper = mount(React.createElement(PhoneInput, {
      countries: countries,
      onClick: onClickMockFn
    }));
    wrapper.find(StyledTrigger).simulate('click');
    expect(onClickMockFn).toBeDefined();
  });
  it('should close the dropdown when is open and click on the trigger', function () {
    var wrapper = mount(React.createElement(PhoneInput, null));
    wrapper.find(StyledTrigger).simulate('click');
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(true);
    wrapper.find(StyledTrigger).simulate('click');
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(false);
  });
  it('should close the dropdown when is open and press Escape key', function () {
    var wrapper = mount(React.createElement(PhoneInput, null));
    wrapper.find(StyledTrigger).simulate('click');
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(true);
    wrapper.find(CountriesDropdown).simulate('keyDown', {
      key: 'Escape'
    });
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(false);
  });
  it('should close the dropdown when is open and press Tab key', function () {
    var wrapper = mount(React.createElement(PhoneInput, null));
    wrapper.find(StyledTrigger).simulate('click');
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(true);
    wrapper.find(CountriesDropdown).simulate('keyDown', {
      key: 'Tab'
    });
    expect(wrapper.find('InternalOverlay').prop('isVisible')).toBe(false);
  });
});