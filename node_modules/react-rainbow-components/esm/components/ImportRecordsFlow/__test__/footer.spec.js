import React from 'react';
import { mount } from 'enzyme';
import Footer from '../footer';
import StyledBackButton from '../styled/backButton';
import StyledNextButton from '../styled/nextButton';
describe('<Footer />', function () {
  it('should have back button disabled when isBackButtonDisabled is set to true', function () {
    var component = mount(React.createElement(Footer, {
      isBackButtonDisabled: true
    }));
    var prevButton = component.find(StyledBackButton);
    expect(prevButton.prop('disabled')).toBe(true);
  });
  it('should have next button disabled when isNextButtonDisabled is set to true', function () {
    var component = mount(React.createElement(Footer, {
      isNextButtonDisabled: true
    }));
    var nextButton = component.find(StyledNextButton);
    expect(nextButton.prop('disabled')).toBe(true);
  });
  it('should have right label for all steps but the last', function () {
    var component = mount(React.createElement(Footer, {
      isNextButtonDisabled: true,
      currentStep: "step-2"
    }));
    var nextButton = component.find(StyledNextButton);
    expect(nextButton.prop('label')).toBe('Next');
  });
  it('should have right label for last step button', function () {
    var lastStep = 'step-4';
    var component = mount(React.createElement(Footer, {
      isNextButtonDisabled: true,
      currentStep: lastStep
    }));
    var nextButton = component.find(StyledNextButton);
    expect(nextButton.prop('label')).toBe('Start Import');
  });
});