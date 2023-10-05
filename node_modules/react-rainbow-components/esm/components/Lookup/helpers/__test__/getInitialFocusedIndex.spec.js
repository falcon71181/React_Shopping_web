import getInitialFocusedIndex from '../getInitialFocusedIndex';
describe('getInitialFocusedIndex', function () {
  it('should return 0', function () {
    var options = [{
      label: 'Paris'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    var values = [undefined, [], options];
    values.forEach(function (value) {
      expect(getInitialFocusedIndex(value)).toBe(0);
    });
  });
  it('should return 1 when first option is type "header"', function () {
    var options = [{
      label: 'Paris',
      type: 'header'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect(getInitialFocusedIndex(options)).toBe(1);
  });
  it('should return 0 when preferredSelectedOption is an invalid index', function () {
    var options = [{
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect(getInitialFocusedIndex(options, -1)).toBe(0);
  });
  it('should return 0 when preferredSelectedOption is greater than non-header options', function () {
    var options = [{
      label: 'Paris',
      type: 'header'
    }, {
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect(getInitialFocusedIndex(options, 3)).toBe(1);
  });
  it('should return 3', function () {
    var options = [{
      label: 'Paris'
    }, {
      label: 'New York'
    }, {
      label: 'Los Angeles'
    }, {
      label: 'Brussels'
    }, {
      label: 'San Fransisco'
    }];
    expect(getInitialFocusedIndex(options, 3)).toBe(3);
  });
  it('should return 4', function () {
    var options = [{
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }, {
      label: 'Los Angeles'
    }, {
      label: 'Paris',
      type: 'header'
    }, {
      label: 'Brussels'
    }];
    expect(getInitialFocusedIndex(options, 3)).toBe(4);
  });
});