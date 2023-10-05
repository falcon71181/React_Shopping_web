import React from 'react';
import { mount } from 'enzyme';
import { Component as StripeCardInput } from '..';
import StyledCardInput from '../styled/cardInput';
import Label from '../../Input/label';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';
var error = {
  code: 'invalid_number',
  type: 'validation_error',
  message: 'Your card number is invalid.'
};
var event = {
  error: error,
  empty: false,
  complete: false,
  brand: 'unknown'
};
var focusEvent = {
  type: 'focus'
};
var blurEvent = {
  type: 'blur'
};
var elementMock = {
  mount: jest.fn(),
  on: jest.fn(function (eventType, callback) {
    if (eventType === 'change') {
      callback(event);
    }

    if (eventType === 'focus') {
      callback(focusEvent);
    }

    if (eventType === 'blur') {
      callback(blurEvent);
    }
  })
};
var elementsMock = {
  create: jest.fn().mockReturnValue(elementMock)
};
var stripeMock = {
  elements: jest.fn().mockReturnValue(elementsMock)
};
window.Stripe = jest.fn().mockReturnValue(stripeMock);
describe('<StripeCardInput>', function () {
  it('should fire onChange with specific event', function (done) {
    var onChangeMockFn = function onChangeMockFn(changeEnvent) {
      expect(changeEnvent).toEqual({
        cardBrand: 'unknown',
        isEmpty: false,
        isComplete: false,
        error: error,
        stripe: stripeMock,
        card: elementMock
      });
      done();
    };

    mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      onChange: onChangeMockFn
    }));
  });
  it('should fire onFocus', function (doneFocus) {
    var onFocusMockFn = function onFocusMockFn(fnEvent) {
      expect(fnEvent).toEqual({
        type: 'focus'
      });
      doneFocus();
    };

    mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      onFocus: onFocusMockFn
    }));
  });
  it('should fire onBlur', function (doneBlur) {
    var onBlurMockFn = function onBlurMockFn(fnEvent) {
      expect(fnEvent).toEqual({
        type: 'blur'
      });
      doneBlur();
    };

    mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      onBlur: onBlurMockFn
    }));
  });
  it('should render bottom help text when bottomHelpText prop is passed', function () {
    var component = mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      bottomHelpText: "Stripe card input"
    }));
    expect(component.find(HelpText).exists()).toBe(true);
  });
  it('should render an error text when error prop is passed', function () {
    var component = mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      error: "An error occurred"
    }));
    expect(component.find(ErrorText).exists()).toBe(true);
  });
  it('should pass the same value to the id of StyledCardInput and the inputId prop of Label component', function () {
    var component = mount(React.createElement(StripeCardInput, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      label: "Stripe card input"
    }));
    var inputIdProp = component.find(Label).prop('inputId');
    var inputId = component.find(StyledCardInput).prop('id');
    expect(inputIdProp).toBe(inputId);
  });
});