import getValue from './getValue';

var isMax = function isMax(number, step, max) {
  if (getValue(Number(number)) + step > max) {
    return true;
  }

  return false;
};

export default isMax;