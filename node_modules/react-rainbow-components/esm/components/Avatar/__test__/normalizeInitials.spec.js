import normalizeInitials from '../normalizeInitials';
describe('normalizeInitials()', function () {
  it('should return one letter when one letter is passed', function () {
    expect(normalizeInitials('J')).toBe('J');
  });
  it('should return two letters when two letters are passed', function () {
    expect(normalizeInitials('Jd')).toBe('Jd');
  });
  it('should return two letters when more of two letters are passed', function () {
    expect(normalizeInitials('JdE')).toBe('Jd');
  });
});