import React from 'react';
export var AppContext = React.createContext();
var Provider = AppContext.Provider,
    Consumer = AppContext.Consumer;
export { Provider, Consumer };