export function getNextSortDirection(field, sortedBy) {
  var sortDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

  if (field && field === sortedBy) {
    if (sortDirection === 'asc') {
      return 'desc';
    }

    return 'asc';
  }

  return sortDirection;
}