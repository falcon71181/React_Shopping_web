import React from 'react';
export var ColorPickerContext = React.createContext();
var Provider = ColorPickerContext.Provider,
    Consumer = ColorPickerContext.Consumer;
export { Provider, Consumer };