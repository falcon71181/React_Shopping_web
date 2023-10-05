import decomposeColor from './decomposeColor';
import bound01 from './bound01';
export default function hsvToRgb(color) {
  var _decomposeColor = decomposeColor(color),
      type = _decomposeColor.type,
      values = _decomposeColor.values;

  if (!type || !values || type !== 'hsv') {
    return '';
  }

  var h = bound01(values[0], 360) * 6;
  var s = bound01(values[1], 100);
  var v = bound01(values[2], 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return "rgb(".concat(Math.round(r * 255), ", ").concat(Math.round(g * 255), ", ").concat(Math.round(b * 255), ")");
}