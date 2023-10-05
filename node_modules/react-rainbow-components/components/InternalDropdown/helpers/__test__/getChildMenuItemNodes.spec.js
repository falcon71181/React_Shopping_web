"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getChildMenuItemNodes = _interopRequireDefault(require("../getChildMenuItemNodes"));

describe('getChildMenuItemNodes', function () {
  var elements = [{
    element: 'div',
    innerText: 'Julio'
  }, {
    element: 'div',
    innerText: 'Pepe'
  }];
  var ref = {
    querySelectorAll: jest.fn(function () {
      return elements;
    })
  };
  it('should call querySelectorAll with a[role="menuitem"]', function () {
    (0, _getChildMenuItemNodes["default"])(ref);
    expect(ref.querySelectorAll).toHaveBeenCalledWith('div[role="option"]');
  });
  it('should return the elements resolved by querySelectorAll', function () {
    expect((0, _getChildMenuItemNodes["default"])(ref)).toEqual(elements);
  });
  it('should return an empty array if anything is passed', function () {
    expect((0, _getChildMenuItemNodes["default"])()).toEqual([]);
  });
});