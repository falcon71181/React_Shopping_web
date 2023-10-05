import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function getSchemaFieldOptions(schemaFields) {
  var defaultOption = {
    label: 'Select the Field do you want match',
    value: 'default',
    disabled: true
  };
  var hasFields = Array.isArray(schemaFields) && schemaFields.length;

  if (hasFields) {
    var options = schemaFields.map(function (attr) {
      return {
        label: attr,
        value: attr
      };
    });
    return [defaultOption].concat(_toConsumableArray(options));
  }

  return [defaultOption];
}