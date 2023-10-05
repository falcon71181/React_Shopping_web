import React from 'react';
export var TreeContext = React.createContext();
var Provider = TreeContext.Provider,
    Consumer = TreeContext.Consumer;
export { Provider, Consumer };