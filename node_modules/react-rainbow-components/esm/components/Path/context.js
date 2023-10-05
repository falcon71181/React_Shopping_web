import React from 'react';
export var PathContext = React.createContext();
var Provider = PathContext.Provider,
    Consumer = PathContext.Consumer;
export { Provider, Consumer };