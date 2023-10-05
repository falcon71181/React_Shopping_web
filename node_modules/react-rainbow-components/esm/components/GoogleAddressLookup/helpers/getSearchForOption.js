import React from 'react';
import SearchValueIcon from '../icons/searchValueIcon';
import StyledOptionLabel from '../styled/optionLabel';
import StyledOptionTyping from '../styled/optionTyping';
export default function getSearchForOption(searchValue) {
  return {
    label: React.createElement(StyledOptionLabel, null, "Search for:", React.createElement(StyledOptionTyping, null, "\u2018", searchValue, "\u2019")),
    data: searchValue,
    icon: React.createElement(SearchValueIcon, null)
  };
}