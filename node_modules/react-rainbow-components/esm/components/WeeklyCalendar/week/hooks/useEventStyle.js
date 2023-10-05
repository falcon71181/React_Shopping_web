import { useMemo } from 'react';
import { getHeightOfMinutes, getHeightOfDate } from '../../helpers';
export default function useEventStyle(startDate, duration) {
  return useMemo(function () {
    return {
      height: "".concat(getHeightOfMinutes(duration), "px"),
      top: "".concat(getHeightOfDate(startDate), "px")
    };
  }, [startDate, duration]);
}