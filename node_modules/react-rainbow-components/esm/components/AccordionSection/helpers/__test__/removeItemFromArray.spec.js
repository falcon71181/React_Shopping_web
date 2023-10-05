import removeItemFromArray from '../removeItemFromArray';
var oldArray = ['onion', 'carrot', 'tomato', 'chard'];
var itemToRemove = 'chard';
var newArray = ['onion', 'carrot', 'tomato'];
describe('<AccordionSection/> removeItemFromArray', function () {
  it('should return a new array without the item to remove', function () {
    expect(removeItemFromArray(oldArray, itemToRemove)).toEqual(newArray);
  });
});