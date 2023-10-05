export default function getDefaultAmPm(value) {
  var numberValue = Number(value);
  return numberValue > 11 && numberValue < 20 ? 'PM' : 'AM';
}