import { useCallback } from 'react';
export default function useHandleCountryChange(phone, onChange, setFocusIndex, isOpen) {
  return useCallback(function (newCountry) {
    setFocusIndex(2);
    onChange({
      countryCode: newCountry.countryCode,
      isoCode: newCountry.isoCode,
      phone: phone
    });
  }, [isOpen]);
}