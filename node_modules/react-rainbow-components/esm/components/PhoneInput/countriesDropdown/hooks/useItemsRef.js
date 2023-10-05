import { useRef, useEffect } from 'react';
export default function useItemsRef(length) {
  var itemsRef = useRef([]);
  useEffect(function () {
    itemsRef.current = itemsRef.current.slice(0, length);
  }, [length]);
  return itemsRef;
}