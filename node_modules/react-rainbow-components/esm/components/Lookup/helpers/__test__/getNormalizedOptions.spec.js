import getNormalizedOptions from '../getNormalizedOptions';
describe('getNormalizedOptions', function () {
  it('should return an empty array when the options passed are not an array or an empty array', function () {
    var values = [undefined, null, '', 123, 'qwerty', {}, []];
    values.forEach(function (value) {
      expect(getNormalizedOptions(value)).toEqual([]);
    });
  });
  it('should return the same options when there are not type "section"', function () {
    var options = [{
      label: 'Paris'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect(getNormalizedOptions(options)).toEqual(options);
  });
  it('should return the option normalized', function () {
    var options = [{
      type: 'section',
      label: 'European Cities',
      options: [{
        label: 'Paris',
        description: 'An awesome city'
      }, {
        label: 'Madrid'
      }]
    }, {
      type: 'section',
      label: 'American Cities',
      options: [{
        label: 'New York'
      }, {
        label: 'San Fransisco'
      }, {
        label: 'Miami'
      }]
    }];
    expect(getNormalizedOptions(options)).toEqual([{
      label: 'European Cities',
      type: 'header'
    }, {
      label: 'Paris',
      description: 'An awesome city'
    }, {
      label: 'Madrid'
    }, {
      label: 'American Cities',
      type: 'header'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }, {
      label: 'Miami'
    }]);
  });
  it('should return only the header option when deep options is not an array', function () {
    var options = [{
      type: 'section',
      label: 'European Cities',
      options: {}
    }];
    expect(getNormalizedOptions(options)).toEqual([{
      label: 'European Cities',
      type: 'header'
    }]);
  });
});