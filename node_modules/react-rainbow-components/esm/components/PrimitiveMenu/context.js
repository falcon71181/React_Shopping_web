import React from 'react';
export var PrimitiveMenuContext = React.createContext();
var Provider = PrimitiveMenuContext.Provider,
    Consumer = PrimitiveMenuContext.Consumer;
export { Provider, Consumer };