"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _removeItemFromArray = _interopRequireDefault(require("../removeItemFromArray"));

var oldArray = ['onion', 'carrot', 'tomato', 'chard'];
var itemToRemove = 'chard';
var newArray = ['onion', 'carrot', 'tomato'];
describe('<AccordionSection/> removeItemFromArray', function () {
  it('should return a new array without the item to remove', function () {
    expect((0, _removeItemFromArray["default"])(oldArray, itemToRemove)).toEqual(newArray);
  });
});