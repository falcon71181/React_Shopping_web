import decomposeColor from './decomposeColor';
import rgbToRgba from './rgbToRgba';
import hslToRgb from './hslToRgb';
import recomposeColor from './recomposeColor';
export default function colorToRgba(color) {
  if (typeof color !== 'string') return '';

  try {
    var _decomposeColor = decomposeColor(color),
        type = _decomposeColor.type,
        values = _decomposeColor.values;

    if (!['rgb', 'rgba', 'hsl', 'hsla'].includes(type)) return '';
    if (type === 'rgb') return rgbToRgba(color);
    if (type === 'hsl') return rgbToRgba(hslToRgb(color));
    if (type === 'hsla') return hslToRgb(color);
    return recomposeColor({
      type: type,
      values: values
    });
  } catch (error) {
    return '';
  }
}