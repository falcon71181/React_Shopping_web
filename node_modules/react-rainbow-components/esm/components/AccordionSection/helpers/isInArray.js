export default function isInArray(array, item) {
  return array.some(function (element) {
    return element === item;
  });
}