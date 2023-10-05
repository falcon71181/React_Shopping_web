import React from 'react';
export var CarouselCardContext = React.createContext();
var Provider = CarouselCardContext.Provider,
    Consumer = CarouselCardContext.Consumer;
export { Provider, Consumer };