import React from 'react';
import RainbowThemeContainer from '../../../components/RainbowThemeContainer';

var withRainbowTheme = function withRainbowTheme(Component, theme) {
  return function (props) {
    return React.createElement(RainbowThemeContainer, {
      theme: theme
    }, React.createElement(Component, props));
  };
};

export default withRainbowTheme;