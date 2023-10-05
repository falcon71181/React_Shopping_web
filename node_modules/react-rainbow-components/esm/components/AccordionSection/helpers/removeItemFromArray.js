export default function removeItemFromArray(array, item) {
  return array.filter(function (element) {
    return element !== item;
  });
}