import filterCountries from '../filterCountries';
var usa = {
  countryCode: '+1',
  country: 'United States',
  isoCode: 'us'
};
var countries = [{
  countryCode: '+44',
  country: 'United Kingdom',
  isoCode: 'gb'
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
  it('should return an array with  United States country', function () {
    var queries = ['us', 'United States', '+1', '1'];
    var allCountries = [usa].concat(countries);
    queries.forEach(function (query) {
      return expect(filterCountries(query, allCountries, usa)).toEqual([usa]);
    });
  });
  it('should return an array with 4 countries', function () {
    var queries = ['u', '+', ''];
    var allCountries = [usa].concat(countries);
    queries.forEach(function (query) {
      return expect(filterCountries(query, allCountries, usa)).toEqual(allCountries);
    });
  });
  it('should return an empty array', function () {
    var queries = ['ww', 'España', '+111', '22'];
    var allCountries = [usa].concat(countries);
    queries.forEach(function (query) {
      return expect(filterCountries(query, allCountries, usa)).toEqual([]);
    });
  });
});