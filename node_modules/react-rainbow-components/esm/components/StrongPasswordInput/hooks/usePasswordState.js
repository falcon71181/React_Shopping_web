import { useMemo } from 'react';
var mapStatuses = {
  weak: 'error',
  average: 'warning',
  strong: 'success'
};
export default function usePasswordState(passwordState) {
  return useMemo(function () {
    return mapStatuses[passwordState];
  }, [passwordState]);
}