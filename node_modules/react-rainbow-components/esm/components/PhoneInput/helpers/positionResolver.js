import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import InternalOverlay from '../../InternalOverlay';
export default function positionResolver(opts) {
  var trigger = opts.trigger,
      viewport = opts.viewport,
      content = opts.content;
  var newOpts = {
    trigger: trigger,
    viewport: viewport,
    content: _objectSpread(_objectSpread({}, content), {}, {
      width: trigger.width
    })
  };
  return _objectSpread(_objectSpread({}, InternalOverlay.defaultPositionResolver(newOpts)), {}, {
    width: trigger.width
  });
}