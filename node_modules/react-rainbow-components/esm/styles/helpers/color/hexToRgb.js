import isHexColor from './isHexColor';
export default function hexToRgb(color) {
  if (isHexColor(color)) {
    var hexColor = color.substr(1);
    var regex = new RegExp(".{1,".concat(hexColor.length / 3, "}"), 'g');
    var regColors = hexColor.match(regex);

    if (regColors) {
      var colors = regColors.map(function (value) {
        if (value.length === 1) {
          return value + value;
        }

        return value;
      });
      return "rgb(".concat(colors.map(function (value) {
        return parseInt(value, 16);
      }).join(', '), ")");
    }
  }

  return '';
}