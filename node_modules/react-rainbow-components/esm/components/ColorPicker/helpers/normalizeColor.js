import { isValidColor, recomposeColor, hexToRgba, decomposeColor, hsvToRgb, rgbaToHex, rgbToHsv, rgbToRgba, isHsvColor } from '../../../styles/helpers/color';

function getRgba(value, isValidHex) {
  if (isValidHex) {
    return hexToRgba(value.hex);
  }

  return rgbToRgba(hsvToRgb(recomposeColor({
    type: 'hsv',
    values: value.hsv
  })), 1);
}

export var defaultColor = {
  hex: '#000000',
  rgba: [0, 0, 0, 1],
  hsv: [0, 0, 0]
};
export default function normalizeColor(value) {
  var hex = value.hex,
      rgba = value.rgba,
      hsv = value.hsv;
  var isValidHex = isValidColor(hex);
  var isValidRgba = isValidColor(recomposeColor({
    type: 'rgba',
    values: rgba
  }));
  var isValidHsv = isHsvColor(recomposeColor({
    type: 'hsv',
    values: hsv
  }));

  if (!isValidHex && !isValidRgba && !isValidHsv) {
    return defaultColor;
  }

  var rgbaColor = isValidRgba ? recomposeColor({
    type: 'rgba',
    values: rgba
  }) : getRgba(value, isValidHex);
  var hexColor = isValidHex ? hex : "#".concat(rgbaToHex(rgbaColor));
  var hsvColor = isValidHsv ? hsv : decomposeColor(rgbToHsv(rgbaColor)).values;
  return {
    hex: hexColor,
    rgba: decomposeColor(rgbaColor).values,
    hsv: hsvColor
  };
}