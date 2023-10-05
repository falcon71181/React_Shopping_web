import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import Icon from '../../Option/icon';
import { StyledItem, StyledCountryCodeItem, StyledCheckmarkIcon } from './styled';
import { useSimulatedLoading } from './hooks';
import { StyledFlagIcon } from '../styled';
var CountriesList = memo(function (props) {
  var countries = props.countries,
      country = props.country,
      itemsRef = props.itemsRef,
      handleCountryChange = props.handleCountryChange,
      handleActiveChange = props.handleActiveChange;
  var list = useSimulatedLoading(countries, 15);
  return list.map(function (value, index) {
    var isoCode = value.isoCode,
        name = value.country,
        countryCode = value.countryCode,
        flagIcon = value.flagIcon;
    var isSelected = value === country;
    var formattedCountryCode = "(".concat(countryCode, ")");
    return React.createElement(StyledItem, {
      key: isoCode,
      ref: function ref(elem) {
        itemsRef.current[index] = elem;
        return itemsRef.current[index];
      },
      onClick: function onClick() {
        return handleCountryChange(value);
      },
      onMouseEnter: function onMouseEnter() {
        return handleActiveChange(index);
      },
      role: "option",
      "aria-selected": false,
      isSelected: isSelected
    }, React.createElement("div", null, React.createElement(Icon, {
      icon: React.createElement(StyledFlagIcon, {
        as: flagIcon
      }),
      isVisible: true,
      position: "left"
    }), name), React.createElement("div", null, React.createElement(StyledCountryCodeItem, null, formattedCountryCode), React.createElement(RenderIf, {
      isTrue: isSelected
    }, React.createElement(StyledCheckmarkIcon, null))));
  });
});
CountriesList.propTypes = {
  countries: PropTypes.array,
  country: PropTypes.object,
  itemsRef: PropTypes.object,
  handleCountryChange: PropTypes.func,
  handleActiveChange: PropTypes.func
};
CountriesList.defaultProps = {
  countries: [],
  country: undefined,
  itemsRef: [],
  handleCountryChange: function handleCountryChange() {},
  handleActiveChange: function handleActiveChange() {}
};
export default CountriesList;