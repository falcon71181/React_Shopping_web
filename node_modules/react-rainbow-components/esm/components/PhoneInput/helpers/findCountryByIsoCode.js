export default function findCountryByIsoCode(isoCode, countries) {
  return countries.find(function (value) {
    return value.isoCode === isoCode;
  });
}