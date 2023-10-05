import { decomposeColor, hexToRgba } from '../../../styles/helpers/color';
import isHexColor from '../../../styles/helpers/color/isHexColor';

var getColorValue = function getColorValue(value) {
  if (!value) return undefined;
  var hex = value.hex,
      alpha = value.alpha;
  if (!isHexColor(hex)) return undefined;
  var rgba = decomposeColor(hexToRgba(hex, alpha)).values;
  return {
    hex: hex,
    rgba: rgba
  };
};

export default getColorValue;