"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = require("..");

var _cardInput = _interopRequireDefault(require("../styled/cardInput"));

var _label = _interopRequireDefault(require("../../Input/label"));

var _errorText = _interopRequireDefault(require("../../Input/styled/errorText"));

var _helpText = _interopRequireDefault(require("../../Input/styled/helpText"));

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

    (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
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

    (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
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

    (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      onBlur: onBlurMockFn
    }));
  });
  it('should render bottom help text when bottomHelpText prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      bottomHelpText: "Stripe card input"
    }));
    expect(component.find(_helpText["default"]).exists()).toBe(true);
  });
  it('should render an error text when error prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      error: "An error occurred"
    }));
    expect(component.find(_errorText["default"]).exists()).toBe(true);
  });
  it('should pass the same value to the id of StyledCardInput and the inputId prop of Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_.Component, {
      apiKey: "STRIPE_API_KEY",
      isScriptLoaded: true,
      isScriptLoadSucceed: true,
      label: "Stripe card input"
    }));
    var inputIdProp = component.find(_label["default"]).prop('inputId');
    var inputId = component.find(_cardInput["default"]).prop('id');
    expect(inputIdProp).toBe(inputId);
  });
});