import { useMemo } from 'react';
export default function useOptions(props) {
  var minimumIntegerDigits = props.minimumIntegerDigits,
      minimumFractionDigits = props.minimumFractionDigits,
      maximumFractionDigits = props.maximumFractionDigits,
      minimumSignificantDigits = props.minimumSignificantDigits,
      maximumSignificantDigits = props.maximumSignificantDigits;
  return useMemo(function () {
    return {
      style: 'percent',
      minimumIntegerDigits: minimumIntegerDigits,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      minimumSignificantDigits: minimumSignificantDigits,
      maximumSignificantDigits: maximumSignificantDigits
    };
  }, [maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits]);
}