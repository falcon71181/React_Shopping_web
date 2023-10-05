import _typeof from "@babel/runtime/helpers/typeof";
export default function getNormalizeValue(value) {
  if (value && _typeof(value) === 'object' && !Array.isArray(value)) {
    return value;
  }

  return {};
}