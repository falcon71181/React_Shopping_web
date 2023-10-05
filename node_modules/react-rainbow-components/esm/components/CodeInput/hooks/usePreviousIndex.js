import { useRef, useEffect } from 'react';
export default function usePreviousIndex(focusedIndex) {
  var ref = useRef();
  useEffect(function () {
    ref.current = focusedIndex;
  });
  return ref.current;
}