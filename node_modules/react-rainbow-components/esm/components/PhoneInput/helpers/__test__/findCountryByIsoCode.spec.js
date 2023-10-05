import { findCountryByIsoCode } from '..';
var countries = [{
  countryCode: '+44',
  country: 'United Kingdom',
  isoCode: 'gb'
}, {
  countryCode: '+1',
  country: 'United States',
  isoCode: 'us'
}, {
  countryCode: '+598',
  country: 'Uruguay',
  isoCode: 'uy'
}, {
  countryCode: '+998',
  country: 'Uzbekistan',
  isoCode: 'uz'
}];
describe('findCountryByIsoCode', function () {
  it('should return a right country', function () {
    var country = {
      countryCode: '+1',
      country: 'United States',
      isoCode: 'us'
    };
    expect(findCountryByIsoCode('us', countries)).toEqual(country);
  });
  it('should return undefined when isoCode is wrong', function () {
    expect(findCountryByIsoCode('ww', countries)).toEqual(undefined);
  });
});