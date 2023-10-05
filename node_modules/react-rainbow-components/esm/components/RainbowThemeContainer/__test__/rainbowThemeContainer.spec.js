import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RainbowThemeContainer from '..';
describe('<RainbowThemeContainer />', function () {
  it('should override the theme', function () {
    var theme = {
      rainbow: {
        palette: {
          brand: '#5c56b6'
        }
      }
    };
    var component = mount(React.createElement(RainbowThemeContainer, {
      theme: theme
    }));
    var normalizedTheme = component.find(ThemeProvider).prop('theme');
    var main = normalizedTheme.rainbow.palette.brand.main;
    expect(main).toBe('rgba(92, 86, 182, 1)');
  });
});