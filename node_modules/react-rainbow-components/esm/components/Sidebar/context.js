import _extends from "@babel/runtime/helpers/extends";
import React from 'react';

var _React$createContext = React.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

function withContext(Component) {
  return function (props) {
    return React.createElement(Consumer, null, function (context) {
      return React.createElement(Component, _extends({}, props, context));
    });
  };
}

export { Provider, withContext };