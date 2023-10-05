"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getAllValues = _interopRequireDefault(require("../getAllValues"));

describe('getAllValues', function () {
  it('should return the right value', function () {
    var values = [{
      icon: 'Icon 1',
      label: 'Label 1',
      name: 'Name 1',
      value: 'Value 1',
      variant: 'default'
    }, {
      icon: 'Icon 2',
      label: 'Label 2',
      name: 'Name 2',
      value: 'Value 2',
      variant: 'default',
      extra: 'extra'
    }, {
      icon: 'Icon 3',
      label: 'Label 3',
      name: 'Name 3',
      value: 'Value 3',
      variant: 'other'
    }];
    var expected = [{
      icon: 'Icon 1',
      label: 'Label 1',
      name: 'Name 1',
      value: 'Value 1'
    }, {
      icon: 'Icon 2',
      label: 'Label 2',
      name: 'Name 2',
      value: 'Value 2'
    }];
    expect((0, _getAllValues["default"])(values)).toEqual(expected);
  });
});