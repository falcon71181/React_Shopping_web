export default function calculateBright(event, rect) {
  var height = rect.height,
      top = rect.top;
  var y = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
  var relativeTop = Math.min(Math.max(0, y - (top + window.pageYOffset)), height);
  return Math.round((1 - relativeTop / height) * 100);
}