import getValue from './getValue';

var isMin = function isMin(number, step, min) {
  if (getValue(Number(number)) - step < min) {
    return true;
  }

  return false;
};

export default isMin;