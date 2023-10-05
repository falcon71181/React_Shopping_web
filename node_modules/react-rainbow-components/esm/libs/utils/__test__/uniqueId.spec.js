import { uniqueId } from '..';
describe('uniqueId', function () {
  it('should return the unique id', function () {
    expect(uniqueId()).toBe('1');
  });
  it('should return the unique id with the prefix passed', function () {
    expect(uniqueId('input')).toBe('input-2');
  });
});