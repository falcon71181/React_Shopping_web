import getSchemaFieldOptions from '../getSchemaFieldOptions';
var defaultOption = {
  label: 'Select the Field do you want match',
  value: 'default',
  disabled: true
};
describe('getSchemaFieldOptions', function () {
  it('should return default option when no options are passed', function () {
    var options = getSchemaFieldOptions();
    var expectedOptions = [defaultOption];
    expect(options).toEqual(expectedOptions);
  });
  it('should return default option when empty options are passed', function () {
    var options = getSchemaFieldOptions([]);
    var expectedOptions = [defaultOption];
    expect(options).toEqual(expectedOptions);
  });
  it('should return default option when pass falsy values', function () {
    var values = [undefined, null, '', 0, true];
    var expectedOptions = [defaultOption];
    values.forEach(function (value) {
      var options = getSchemaFieldOptions(value);
      expect(options).toEqual(expectedOptions);
    });
  });
  it('should return 3 options when pass an array list of 2 fields', function () {
    var optionsList = ['First_Name', 'Last_Name'];
    var options = getSchemaFieldOptions(optionsList);
    var expectedOptions = [defaultOption, {
      label: 'First_Name',
      value: 'First_Name'
    }, {
      label: 'Last_Name',
      value: 'Last_Name'
    }];
    expect(options).toEqual(expectedOptions);
  });
});