import { getNextSortDirection } from '..';
describe('getNextSortDirection', function () {
  it('should return "asc" by default if any argument is passed', function () {
    expect(getNextSortDirection()).toBe('asc');
  });
  it('should return "asc" by default if only field is passed', function () {
    expect(getNextSortDirection('name')).toBe('asc');
  });
  it('should return "asc" by default if only sortedBy is passed', function () {
    expect(getNextSortDirection(undefined, 'name')).toBe('asc');
  });
  it('should return the sortDirection passed when field and sortedBy are not passed', function () {
    expect(getNextSortDirection(undefined, undefined, 'desc')).toBe('desc');
  });
  it('should return "asc" when sortDirection is not passed and field and sortBy does not match', function () {
    expect(getNextSortDirection('name', 'email')).toBe('asc');
  });
  it('should return "desc" when sortDirection is not passed and field and sortBy match', function () {
    expect(getNextSortDirection('email', 'email')).toBe('desc');
  });
  it('should return the sortDirection passed when sortedBy is not passed', function () {
    expect(getNextSortDirection('name', undefined, 'desc')).toBe('desc');
  });
  it('should return the sortDirection passed when field is not passed', function () {
    expect(getNextSortDirection(undefined, 'name', 'whatever')).toBe('whatever');
  });
  it('should return the sortDirection passed when field and sortedBy does not match', function () {
    expect(getNextSortDirection('name', 'email', 'some string')).toBe('some string');
  });
  it('should return "desc" when sortDirection passed is "asc" and field and sortedBy match', function () {
    expect(getNextSortDirection('name', 'name', 'asc')).toBe('desc');
  });
  it('should return "asc" when sortDirection passed is "desc" and field and sortedBy match', function () {
    expect(getNextSortDirection('name', 'name', 'desc')).toBe('asc');
  });
});