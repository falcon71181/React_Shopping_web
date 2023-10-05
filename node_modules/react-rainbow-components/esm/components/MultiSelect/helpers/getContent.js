import _typeof from "@babel/runtime/helpers/typeof";
export default function getContent(value) {
  if (Array.isArray(value)) {
    return value.map(function (item) {
      return item.label;
    }).join(', ');
  }

  if (value && _typeof(value) === 'object') {
    return value.label;
  }

  return null;
}