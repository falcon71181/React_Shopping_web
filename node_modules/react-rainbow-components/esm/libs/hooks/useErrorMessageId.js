import { useMemo } from 'react';
import useUniqueIdentifier from './useUniqueIdentifier';
export default function useErrorMessageId(error) {
  var errorMessageId = useUniqueIdentifier('error-message');
  return useMemo(function () {
    if (error) {
      return errorMessageId;
    }

    return undefined;
  }, [errorMessageId, error]);
}