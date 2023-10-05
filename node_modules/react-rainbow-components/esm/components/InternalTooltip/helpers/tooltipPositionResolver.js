import resolverUpCenter from '../../InternalOverlay/helpers/resolverUpCenter';
import resolverBottomCenter from '../../InternalOverlay/helpers/resolverBottomCenter';
import resolverCenterLeft from '../../InternalOverlay/helpers/resolverCenterLeft';
import resolverCenterRight from '../../InternalOverlay/helpers/resolverCenterRight';
import resolverCenter from './resolverCenter';
var DEFAULT_MARGIN = 12;
var resolverMap = {
  top: [resolverUpCenter, resolverBottomCenter, resolverCenterLeft, resolverCenterRight, resolverCenter],
  bottom: [resolverBottomCenter, resolverUpCenter, resolverCenterLeft, resolverCenterRight, resolverCenter],
  left: [resolverCenterRight, resolverCenterLeft, resolverUpCenter, resolverBottomCenter, resolverCenter],
  right: [resolverCenterLeft, resolverCenterRight, resolverUpCenter, resolverBottomCenter, resolverCenter]
};
export default function tooltipPositionResolver(opts) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var resolvers = resolverMap[position];
  var pos;
  resolvers.some(function (resolver) {
    var ret = resolver(opts, DEFAULT_MARGIN);

    if (ret) {
      pos = ret;
      return true;
    }

    return false;
  });

  if (pos) {
    return pos;
  }

  return {
    top: 0,
    left: 0
  };
}