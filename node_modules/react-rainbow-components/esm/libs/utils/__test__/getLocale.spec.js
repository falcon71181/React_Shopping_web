import { getLocale } from '..';
import * as getBrowserLocale from '../getBrowserLocale';
describe('getLocale', function () {
  beforeAll(function () {
    getBrowserLocale["default"] = jest.fn(function () {
      return 'es-ES';
    });
  });
  it('should return the browser local', function () {
    var contexts = [{}, null, undefined, {
      value: 1
    }];
    contexts.forEach(function (context) {
      expect(getLocale(context, undefined)).toBe('es-ES');
    });
  });
  it('should return the locale value', function () {
    expect(getLocale({
      locale: 'en-US'
    }, undefined)).toBe('en-US');
  });
  it('should return the localeProp value', function () {
    expect(getLocale({
      locale: 'en-US'
    }, 'fr-FR')).toBe('fr-FR');
  });
});