import { isValidColor } from '../../../../styles/helpers/color';
export default function getCurrentBackgroundColor(_ref) {
  var backgroundColor = _ref.backgroundColor,
      palette = _ref.palette;
  var brand = palette.brand;

  if (backgroundColor && isValidColor(backgroundColor)) {
    return backgroundColor;
  }

  return brand.main;
}