import { isValidColor } from '../../../../styles/helpers/color';
export default function getCurrentColor(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      palette = _ref.palette;
  var getContrastText = palette.getContrastText,
      brand = palette.brand;

  if (color && isValidColor(color)) {
    return color;
  }

  if (backgroundColor && isValidColor(backgroundColor)) {
    return getContrastText(backgroundColor);
  }

  return getContrastText(brand.main);
}