import decomposeColor from './decomposeColor';
export default function isHsvColor(color) {
  if (typeof color === 'string' && color !== '') {
    var _decomposeColor = decomposeColor(color),
        type = _decomposeColor.type,
        values = _decomposeColor.values;

    if (type === 'hsv' && Array.isArray(values) && values.length === 3) {
      return values.filter(function (value, index) {
        return index === 0 && value >= 0 && value <= 360 || value >= 0 && value <= 100;
      }).length === 3;
    }
  }

  return false;
}