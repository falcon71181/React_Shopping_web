import React from 'react';
export var MonthCalendarContext = React.createContext();
var Provider = MonthCalendarContext.Provider,
    Consumer = MonthCalendarContext.Consumer;
export { Provider, Consumer };