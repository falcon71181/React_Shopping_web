import _typeof from "@babel/runtime/helpers/typeof";
export default function normalizeValue(value) {
  if (!value || _typeof(value) !== 'object') {
    return [];
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return [];
    }

    return value.map(function (item) {
      var icon = item.icon,
          label = item.label,
          name = item.name,
          itemValue = item.value;
      return {
        icon: icon,
        label: label,
        name: name,
        value: itemValue
      };
    });
  }

  var icon = value.icon,
      label = value.label,
      name = value.name,
      itemValue = value.value;
  return {
    icon: icon,
    label: label,
    name: name,
    value: itemValue
  };
}