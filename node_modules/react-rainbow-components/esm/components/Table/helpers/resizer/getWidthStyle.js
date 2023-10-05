export default function getWidthStyle(pixels) {
  return pixels > 0 ? "width: ".concat(pixels, "px") : '';
}