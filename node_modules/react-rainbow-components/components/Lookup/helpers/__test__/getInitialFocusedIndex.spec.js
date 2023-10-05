"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getInitialFocusedIndex = _interopRequireDefault(require("../getInitialFocusedIndex"));

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
      expect((0, _getInitialFocusedIndex["default"])(value)).toBe(0);
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
    expect((0, _getInitialFocusedIndex["default"])(options)).toBe(1);
  });
  it('should return 0 when preferredSelectedOption is an invalid index', function () {
    var options = [{
      label: 'New York'
    }, {
      label: 'San Fransisco'
    }];
    expect((0, _getInitialFocusedIndex["default"])(options, -1)).toBe(0);
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
    expect((0, _getInitialFocusedIndex["default"])(options, 3)).toBe(1);
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
    expect((0, _getInitialFocusedIndex["default"])(options, 3)).toBe(3);
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
    expect((0, _getInitialFocusedIndex["default"])(options, 3)).toBe(4);
  });
});