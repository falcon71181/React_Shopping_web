import { useMemo } from 'react';
import { getHeightOfDate } from '../../helpers';
export default function useClockLineStyle(clock) {
  return useMemo(function () {
    return {
      top: "".concat(getHeightOfDate(clock), "px")
    };
  }, [clock]);
}