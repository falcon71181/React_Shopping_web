import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _KEYS;

import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../../libs/constants';
var KEYS = (_KEYS = {}, _defineProperty(_KEYS, UP_KEY, true), _defineProperty(_KEYS, DOWN_KEY, true), _defineProperty(_KEYS, ENTER_KEY, true), _KEYS);
export default function isNavigationKey(keyCode) {
  return !!KEYS[keyCode];
}