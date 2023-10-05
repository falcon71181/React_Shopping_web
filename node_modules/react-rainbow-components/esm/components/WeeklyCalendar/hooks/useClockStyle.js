import { useMemo } from 'react';
import { getHeightOfDate } from '../helpers';
export default function useClockStyle(clock) {
  return useMemo(function () {
    return {
      top: "".concat(getHeightOfDate(clock) - 8, "px")
    };
  }, [clock]);
}