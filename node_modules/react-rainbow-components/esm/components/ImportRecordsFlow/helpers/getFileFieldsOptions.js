import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function getFileFieldsOptions(fields) {
  var defaultOption = {
    label: 'Select database field to assign',
    value: 'default',
    disabled: true
  };
  var hasFields = Array.isArray(fields) && fields.length;

  if (hasFields) {
    var options = fields.map(function (field) {
      return {
        label: field,
        value: field
      };
    });
    return [defaultOption].concat(_toConsumableArray(options));
  }

  return [defaultOption];
}