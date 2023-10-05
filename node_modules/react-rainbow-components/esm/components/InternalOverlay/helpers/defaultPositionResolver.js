import resolverBottomLeft from './resolverBottomLeft';
import resolverBottomRight from './resolverBottomRight';
import resolverUpLeft from './resolverUpLeft';
import resolverUpRight from './resolverUpRight';
import resolverBottomCenter from './resolverBottomCenter';
import resolverUpCenter from './resolverUpCenter';
import resolverCenterLeft from './resolverCenterLeft';
import resolverCenterRight from './resolverCenterRight';
import resolverTopLeft from './resolverTopLeft';
import resolverTopRight from './resolverTopRight';
var DEFAULT_MARGIN = 5;
var resolvers = [resolverBottomLeft, resolverBottomRight, resolverBottomCenter, resolverUpLeft, resolverUpRight, resolverUpCenter, resolverCenterLeft, resolverCenterRight, resolverTopLeft, resolverTopRight];
export default function defaultPositionResolver(opts) {
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