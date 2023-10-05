import React from 'react';
export var CalendarContext = React.createContext();
var Provider = CalendarContext.Provider,
    Consumer = CalendarContext.Consumer;
export { Provider, Consumer };