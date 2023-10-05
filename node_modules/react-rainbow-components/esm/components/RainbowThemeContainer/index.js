import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import normalizeTheme from '../../styles/helpers/normalizeTheme';

var RainbowThemeContainer = function RainbowThemeContainer(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var _useState = useState(function () {
    return normalizeTheme(theme);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      normalizedTheme = _useState2[0],
      setTheme = _useState2[1];

  useEffect(function () {
    setTheme(normalizeTheme(theme));
  }, [theme]);
  return React.createElement(ThemeProvider, {
    theme: normalizedTheme
  }, children);
};

RainbowThemeContainer.propTypes = {
  theme: PropTypes.shape({
    rainbow: PropTypes.shape({
      palette: PropTypes.shape({
        brand: PropTypes.string,
        success: PropTypes.string,
        error: PropTypes.string,
        warning: PropTypes.string,
        mainBackground: PropTypes.string
      })
    })
  }),
  children: PropTypes.node
};
RainbowThemeContainer.defaultProps = {
  theme: undefined,
  children: undefined
};
export default RainbowThemeContainer;