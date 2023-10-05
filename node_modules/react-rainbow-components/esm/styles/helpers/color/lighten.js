import decomposeColor from './decomposeColor';
import recomposeColor from './recomposeColor';
import clamp from './clamp';
export default function lighten(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
    color.values[2] = Math.floor(color.values[2]);
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var index = 0; index < 3; index += 1) {
      color.values[index] += (255 - color.values[index]) * coefficient;
      color.values[index] = Math.floor(color.values[index]);
    }
  }

  return recomposeColor(color);
}