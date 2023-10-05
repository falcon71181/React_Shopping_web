import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from '../../../libs/scrollController';

var useDisableScroll = function useDisableScroll(shouldDisableScroll) {
  useEffect(function () {
    if (shouldDisableScroll) {
      disableBodyScroll(undefined, {
        reserveScrollBarGap: true
      });
    }

    return function () {
      if (shouldDisableScroll) {
        enableBodyScroll();
      }
    };
  }, [shouldDisableScroll]);
};

export default useDisableScroll;