export default function isOptionSelected(values, option) {
  if (values && Array.isArray(values)) {
    return values.some(function (value) {
      return value === option.value;
    });
  }

  return false;
}