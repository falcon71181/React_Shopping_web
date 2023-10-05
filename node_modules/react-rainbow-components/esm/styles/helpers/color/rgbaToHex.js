import decomposeColor from './decomposeColor';

function pad2(value) {
  return value.length === 1 ? "0".concat(value) : "".concat(value);
}

export default function rgbaToHex(color) {
  var rgbaColor = decomposeColor(color);

  if (rgbaColor.type !== 'rgba') {
    return '';
  }

  var hex = [pad2(Math.round(rgbaColor.values[0]).toString(16)), pad2(Math.round(rgbaColor.values[1]).toString(16)), pad2(Math.round(rgbaColor.values[2]).toString(16))];
  return hex.join('');
}