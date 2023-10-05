import { useMemo } from 'react';
import getValueArray from '../helpers/getValueArray';
export default function useValueState(value, length) {
  return useMemo(function () {
    return getValueArray(value, length);
  }, [value, length]);
}