import { COLOR_BRAND, COLOR_SUCCESS } from '../../colors';
import darken from './darken';
import getContrastRatio from './getContrastRatio';
import colorToRgba from './colorToRgba';
var light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)'
  }
};
var dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)'
  }
};
var contrastThreshold = 3;
export default function getContrastText(background) {
  if (!background) {
    throw new TypeError("Missing background argument in getContrastText(".concat(background, ")."));
  }

  var isDefaultBackground = background === colorToRgba(COLOR_BRAND) || background === colorToRgba(darken(COLOR_BRAND)) || background === colorToRgba(COLOR_SUCCESS) || background === colorToRgba(darken(COLOR_SUCCESS));
  var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground ? dark.text.primary : light.text.primary;
  return contrastText;
}