import React from 'react';
export var ActivityTimelineContext = React.createContext();
var Provider = ActivityTimelineContext.Provider,
    Consumer = ActivityTimelineContext.Consumer;
export { Provider, Consumer };