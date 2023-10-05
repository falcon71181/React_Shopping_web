import isOnePointZero from './isOnePointZero';
import isPercentage from './isPercentage';
export default function bound01(value, max) {
  if (isOnePointZero(value)) {
    value = '100%';
  }

  var processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  return value % max / parseFloat(max);
}