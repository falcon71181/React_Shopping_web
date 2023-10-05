import _typeof from "@babel/runtime/helpers/typeof";
export default function hasContent(value) {
  if (!value) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return _typeof(value) === 'object';
}