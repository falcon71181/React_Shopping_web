import isInArray from './isInArray';

var getIsExpanded = function getIsExpanded(_ref) {
  var multiple = _ref.multiple,
      activeNames = _ref.activeNames,
      currentName = _ref.currentName;

  if (multiple && Array.isArray(activeNames)) {
    return isInArray(activeNames, currentName);
  }

  return activeNames === currentName;
};

export default getIsExpanded;