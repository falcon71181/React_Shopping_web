import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from './context';
import { useLocale } from '../../libs/hooks';
import RainbowLegacyStyles from './rainbowLegacyStyles';
import normalizeTheme from '../../styles/helpers/normalizeTheme';
export default function Application(props) {
  var children = props.children,
      className = props.className,
      style = props.style,
      locale = props.locale,
      theme = props.theme;
  var contextValue = {
    locale: useLocale(locale)
  };

  var _useState = useState(function () {
    return normalizeTheme(theme);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      normalizedTheme = _useState2[0],
      setTheme = _useState2[1];

  useEffect(function () {
    setTheme(normalizeTheme(theme));
  }, [theme]);
  return React.createElement(Provider, {
    value: contextValue
  }, React.createElement(ThemeProvider, {
    theme: normalizedTheme
  }, React.createElement("div", {
    className: className,
    style: style
  }, React.createElement(RainbowLegacyStyles, null), children)));
}
Application.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.object,
  locale: PropTypes.string,
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
  })
};
Application.defaultProps = {
  children: [],
  className: undefined,
  style: undefined,
  locale: undefined,
  theme: {}
};