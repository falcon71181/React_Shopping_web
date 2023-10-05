import { useEffect, useCallback } from 'react';
export default function useWindowResize(handler) {
  var isListening = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var listener = useCallback(function (event) {
    handler(event);
  }, [handler]);
  useEffect(function () {
    if (isListening) {
      window.addEventListener('resize', listener);
    }

    return function () {
      window.removeEventListener('resize', listener);
    };
  }, [isListening, listener]);
}