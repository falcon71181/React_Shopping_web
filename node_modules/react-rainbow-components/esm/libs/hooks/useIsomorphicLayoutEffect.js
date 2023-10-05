import { useLayoutEffect, useEffect } from 'react';
import { isServer } from '../utils';
var useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;
export default useIsomorphicLayoutEffect;