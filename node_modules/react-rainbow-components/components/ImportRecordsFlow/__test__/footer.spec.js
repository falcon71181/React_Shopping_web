"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _footer = _interopRequireDefault(require("../footer"));

var _backButton = _interopRequireDefault(require("../styled/backButton"));

var _nextButton = _interopRequireDefault(require("../styled/nextButton"));

describe('<Footer />', function () {
  it('should have back button disabled when isBackButtonDisabled is set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_footer["default"], {
      isBackButtonDisabled: true
    }));
    var prevButton = component.find(_backButton["default"]);
    expect(prevButton.prop('disabled')).toBe(true);
  });
  it('should have next button disabled when isNextButtonDisabled is set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_footer["default"], {
      isNextButtonDisabled: true
    }));
    var nextButton = component.find(_nextButton["default"]);
    expect(nextButton.prop('disabled')).toBe(true);
  });
  it('should have right label for all steps but the last', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_footer["default"], {
      isNextButtonDisabled: true,
      currentStep: "step-2"
    }));
    var nextButton = component.find(_nextButton["default"]);
    expect(nextButton.prop('label')).toBe('Next');
  });
  it('should have right label for last step button', function () {
    var lastStep = 'step-4';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_footer["default"], {
      isNextButtonDisabled: true,
      currentStep: lastStep
    }));
    var nextButton = component.find(_nextButton["default"]);
    expect(nextButton.prop('label')).toBe('Start Import');
  });
});