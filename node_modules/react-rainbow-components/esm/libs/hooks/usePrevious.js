import { useRef, useEffect } from 'react';

var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;