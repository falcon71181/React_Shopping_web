import React from 'react';
export var ButtonGroupPickerContext = React.createContext();
var Provider = ButtonGroupPickerContext.Provider,
    Consumer = ButtonGroupPickerContext.Consumer;
export { Provider, Consumer };