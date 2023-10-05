import _typeof from "@babel/runtime/helpers/typeof";
export default function formatValue(value) {
  if (_typeof(value) === 'object' && value !== null && !Array.isArray(value)) {
    return value;
  }

  return {};
}