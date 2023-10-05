import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../components/Button';
import withRainbowTheme from '..';
describe('withRainbowTheme', function () {
  it('should return a function that renders the passed component inside RainbowThemeContainer', function () {
    var theme = {
      rainbow: {
        palette: {
          brand: '#5c56b6'
        }
      }
    };
    var FancyButton = withRainbowTheme(Button, theme);
    var component = mount(React.createElement(FancyButton, {
      label: "Fancy button"
    }));
    var themeContainer = component.find('RainbowThemeContainer');
    expect(themeContainer.exists()).toBe(true);
    expect(themeContainer.find(Button).prop('label')).toBe('Fancy button');
  });
});