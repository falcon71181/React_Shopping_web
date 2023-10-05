import React from 'react';
export var AccordionContext = React.createContext();
var Provider = AccordionContext.Provider,
    Consumer = AccordionContext.Consumer;
export { Provider, Consumer };