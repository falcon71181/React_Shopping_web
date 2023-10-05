import { useMemo } from 'react';
import useUniqueIdentifier from './useUniqueIdentifier';
export default function useLabelId(label) {
  var labelId = useUniqueIdentifier('label');
  return useMemo(function () {
    if (label) {
      return labelId;
    }

    return undefined;
  }, [labelId, label]);
}