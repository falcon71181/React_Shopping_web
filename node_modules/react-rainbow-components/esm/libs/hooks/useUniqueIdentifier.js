import { useMemo } from 'react';
import { uniqueId } from '../utils';
export default function useUniqueIdentifier(prefix) {
  return useMemo(function () {
    return uniqueId(prefix);
  }, [prefix]);
}