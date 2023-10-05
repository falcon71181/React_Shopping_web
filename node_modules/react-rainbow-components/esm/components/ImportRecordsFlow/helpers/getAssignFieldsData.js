export default function getAssignFieldsData(params) {
  var fieldsMap = params.fieldsMap,
      attributes = params.attributes,
      matchField = params.matchField;
  return Object.keys(attributes).map(function (field) {
    return {
      required: attributes[field].required || field === matchField,
      fileField: fieldsMap[field],
      databaseField: field
    };
  });
}